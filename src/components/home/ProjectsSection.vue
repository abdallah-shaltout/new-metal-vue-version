<template>
    <section class="flex-center">
        <div class="px-4 flex-center flex-col">
            <div class="flex-between w-full">
                <h2 class="section-title-start">
                    {{ $t('projects.heading') }}
                </h2>
                <RouterLink
                    :to="
                        $localePath({
                            name: 'projects',
                        })
                    "
                >
                    <button class="whitespace-nowrap btn-primary btn-with-icon">
                        <span>{{ $t('projects.view_all') }}</span>
                        <span class="rounded-full w-6 h-6 md:w-5 md:h-5 bg-white flex-center text-darker trans">
                            <arrowTopIcon class="w-4 md:w-3 rtl:rotate-[270deg]" />
                        </span>
                    </button>
                </RouterLink>
            </div>

            <Carousel v-bind="config" class="mt-14 effect-slider-1">
                <Slide v-for="item in projectStore.spciealProjects" :key="item.id">
                    <RouterLink
                        :to="
                            $localePath({
                                name: 'projectDetails',
                                params: {
                                    id: item.id,
                                },
                            })
                        "
                        class="w-full relative rounded-xl flex overflow-hidden group"
                        style="aspect-ratio: 4/3"
                    >
                        <img
                            :src="`/projects/${item.id}/main.webp`"
                            class="w-full h-full object-cover"
                        />
                    </RouterLink>
                </Slide>

                <template #addons>
                    <Pagination />
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import arrowTopIcon from '@/assets/icons/arrow-top.svg'
import { useProjectStore } from '@/store/project.store'
const projectStore = useProjectStore()
const config = {
    itemsToShow: 1,
    transition: 500,
    itemsToScroll: 1,
    snapAlign: 'center',
    autoplay: 2000,
    wrapAround: true,

    breakpoints: {
        768: {
            itemsToShow: 3,
        },
        1280: {
            itemsToShow: 3,
        },
    },
}
</script>
