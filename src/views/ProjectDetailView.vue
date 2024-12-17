<template>
    <section class="py-14 w-full">
        <div class="container">
            <h2 class="section-title-start mb-10">{{ project?.title }}</h2>
            <div
                class="w-full bg-blue-500 rounded-lg shadow overflow-hidden aspect-[16/6] sm:aspect-[16/8]"
            >
                <img :src="`/projects/${id}/main.webp`" alt="" class="w-full h-full object-cover" />
            </div>

            <ul class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-2 gap-4 my-4">
                <li
                    v-motion-pop-bottom
                    class="aspect-video w-full rounded-lg flex-center flex-col gap-5 bg-light text-darker main-border trans hover:bg-primary hover:text-light group"
                >
                    <h3
                        class="section-title group-hover:text-light group-hover:before:w-full group-hover:before:bg-light duration-0"
                    >
                        أجمالي المساحة
                    </h3>
                    <span class="text-xl mt-2 font-bold">
                        {{
                            Number(project?.projectSize?.width) *
                            Number(project?.projectSize?.height)
                        }}
                        متر مربع
                    </span>
                </li>
                <li
                    v-for="(item, key, idx) of project?.projectSize"
                    :key="idx"
                    v-motion-pop-bottom
                    class="aspect-video w-full rounded-lg flex-center flex-col gap-5 bg-light text-darker main-border trans hover:bg-primary hover:text-light group"
                >
                    <h3
                        class="section-title group-hover:text-light group-hover:before:w-full group-hover:before:bg-light duration-0"
                    >
                        {{ { width: 'العرض', height: 'الطول' }[key] }}
                    </h3>
                    <span class="text-xl mt-2 font-bold"> {{ item }} متر مربع </span>
                </li>
            </ul>

            <div class="my-10">
                <ul class="fl-5">
                    <li
                        class="fl-5"
                        v-for="(item, idx) in project?.overflows"
                        :key="idx"
                        v-motion-pop-bottom
                    >
                        <h3 class="section-title-start">{{ item.title }}</h3>
                        <p class="text-justify">
                            {{ item.description }}
                        </p>
                    </li>
                </ul>
            </div>
            <ul class="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                <li
                    class="aspect-video w-full rounded-lg overflow-hidden"
                    v-for="item in project?.images"
                    :key="item"
                    v-motion-pop-bottom
                    @click="
                        () => {
                            showImagePreview = true
                            imagePreview = `/projects/${id}/${item}`
                        }
                    "
                >
                    <img
                        :src="`/projects/${id}/${item}`"
                        alt=""
                        class="w-full h-full object-cover t-trans hover:scale-125 hover:rotate-6 cursor-pointer"
                    />
                </li>
            </ul>

            <AppDialog v-model="showImagePreview" animate-from="bottom">
                <div class="rounded-lg w-full max-w-6xl shadow-xl">
                    <button
                        @click="
                            () => {
                                showImagePreview = false
                                imagePreview = null
                            }
                        "
                        class="flex-center aspect-square rounded t-trans hover:scale-110"
                    >
                        <closeIcon class="w-10 text-light" />
                    </button>
                    <div
                        class="w-full max-w-full aspect-video overflow-hidden mt-4 mx-auto sm:w-full sm:mt-2"
                    >
                        <img
                            v-if="imagePreview"
                            :src="imagePreview"
                            alt=""
                            class="w-full max-w-[90vw] object-contain block rounded-xl"
                        />
                    </div>
                </div>
            </AppDialog>
        </div>
    </section>
</template>

<script lang="ts" setup>
import closeIcon from '@/assets/icons/close.svg'
import { useRoute, useRouter } from 'vue-router'
import { computed, defineAsyncComponent, ref } from 'vue'
import { useProjectStore } from '@/store/project.store'
import { localPath } from '@/i18n/translation'
const AppDialog = defineAsyncComponent(() => import('@/components/global/AppDialog.vue'))
const projectStore = useProjectStore()
const route = useRoute()
const router = useRouter()
const id = route.params.id
const showImagePreview = ref<boolean>(false)
const imagePreview = ref<string | null>(null)

function getCurrentProject(id: string) {
    const project = projectStore.getProjectById(+id)
    if (!project) {
        router.push(localPath({ name: 'notFound' }))
        return
    }
    return project
}

const project = computed(() => {
    return getCurrentProject(id as string)
})
</script>

<style>
body {
    background-color: theme('colors.light');
}
</style>
