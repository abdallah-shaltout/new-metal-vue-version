<template>
    <section class="py-14 w-full bg-slate-50">
        <div class="container">
            <h1 class="section-title-center mb-3">{{ head.title }}</h1>
            <p class="text-center mb-16 text-lg text-dark">{{ head.description }}</p>
            <ul class="w-full grid grid-cols-12 gap-5">
                <li
                    v-motion-pop-bottom
                    v-for="(item, idx) in projects.images"
                    :key="item.id"
                    :class="
                        idx % (isMobile ? 3 : 7) === 0
                            ? 'col-span-6 row-span-2 sm:col-span-12 sm:row-span-1'
                            : 'col-span-3 sm:col-span-6'
                    "
                >
                    <ProjectCard :image="item.src" />
                </li>
            </ul>

            <Transition name="fade">
                <button
                    class="btn btn-primary text-2xl mx-auto mt-6"
                    @click="page++"
                    v-if="projects.hasNext"
                >
                    عرض المزيد
                </button>
            </Transition>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore, type projectImageType } from '@/store/project.store'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/global/ProjectCard.vue'
import { useScreen } from '@/composables/screen'
const projectStore = useProjectStore()
const { t } = useI18n()
const route = useRoute()
const page = ref(1)
const title = ref<string | null>(null)
const description = ref<string | null>(null)

const { isMobile } = useScreen()

const head = computed(() => ({
    title: title.value || t('project_page.heading'),
    description: description.value || t('project_page.description'),
}))

const projects = reactive<{
    images: projectImageType[]
    total: number
    hasNext: boolean
}>({
    images: [],
    total: 0,
    hasNext: false,
})

const service = computed(() => {
    return projectStore.getServiceBySlug(route.params.service?.toString())
})

const fetchProjects = () => {
    const { hasNext, images, total } = projectStore.getProjectsImages({
        page: page.value,
        service: service.value?.slug,
    })
    projects.images.push(...images)
    projects.total = total
    projects.hasNext = hasNext
}

function changeHead() {
    if (service.value) {
        const { idx } = service.value
        title.value = t(`services.list.${idx}.heading`)
        description.value = t(`services.list.${idx}.description`)
    }
}

watch(page, () => fetchProjects())
watch(
    () => service.value?.slug,
    (val) => {
        title.value = null
        description.value = null
        projects.images = []
        changeHead()
        fetchProjects()
    },
    {
        immediate: true,
    },
)
</script>

<style>
body {
    background-color: theme('colors.light');
}
</style>
