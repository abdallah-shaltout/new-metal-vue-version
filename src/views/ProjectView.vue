<template>
    <section class="py-14 w-full bg-slate-50">
        <div class="container">
            <h1 class="section-title-center mb-16">معرض اعمالنا</h1>
            <ul class="w-full grid grid-cols-12 gap-5">
                <li
                    v-motion-pop-bottom
                    v-for="item in projects"
                    :key="item.id"
                    :class="`col-span-${item.size.cols} row-span-${item.size.rows} md:col-span-${item.size['md-cols']} md:row-span-${item.size['md-rows']} sm:col-span-${item.size['sm-cols']} sm:row-span-${item.size['sm-rows']}`"
                >
                    <RouterLink
                        :to="
                            $localePath({
                                name: 'projectDetails',
                                params: {
                                    id: item.id,
                                },
                            })
                        "
                        class="w-full h-full rounded-xl flex shadow overflow-hidden"
                    >
                        <img
                            loading="lazy"
                            :src="`/projects/${item.id}/main.webp`"
                            class="w-full h-full object-cover t-trans hover:scale-125 hover:rotate-6"
                        />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore } from '@/store/project.store'
const projectStore = useProjectStore()
const route = useRoute()
const projects = computed(() => {
    const projects = projectStore.projects
    const section = route.query.section
    if (section) {
        const res = projectStore.getProjectsBySection(section as string)
        if (!res.length) {
            return projects
        }
        return res
    }
    return projects
})
</script>

<style>
body {
    background-color: theme('colors.light');
}
</style>
