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
                        <span
                            class="rounded-full w-6 h-6 md:w-5 md:h-5 bg-white flex-center text-darker trans"
                        >
                            <arrowTopIcon class="w-4 md:w-3 rtl:rotate-[270deg]" />
                        </span>
                    </button>
                </RouterLink>
            </div>

            <Carousel v-bind="config" class="mt-14 effect-slider-1">
                <Slide
                    v-for="item in projectsCount"
                    :key="`project-spec-${item}`"
                    class="rounded-2xl overflow-hidden"
                >
                    <div
                        class="w-full relative flex overflow-hidden group aspect-[4/3] md:aspect-[3/2] sm:aspect-video"
                    >
                        <img
                            :src="`/special-projects/${item}.webp`"
                            style="
                                filter: brightness(0.9) contrast(1.15) saturate(1.35)
                                    drop-shadow(0 0.125rem 0.25rem rgba(0, 0, 0, 0.1));
                            "
                            class="w-full h-full object-cover"
                        />
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                    <div class="sm:hidden">
                        <Navigation />
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import arrowTopIcon from '@/assets/icons/arrow-top.svg'
import { ref } from 'vue'
const projectsCount = ref<number>(12)
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
