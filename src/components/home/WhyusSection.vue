<template>
    <section>
        <div class="fl-5">
            <h2 class="section-title-start">
                {{ $t('whyus.heading') }}
            </h2>
            <div class="fc gap-2 sm:flex-col">
                <p class="text-dark text-pretty sm:text-justify">
                    {{ $t('whyus.description') }}
                </p>
                <a href="https://wa.me/201554673489" class="sm:ml-auto">
                    <button class="btn-primary whitespace-nowrap">
                        {{ $t('whyus.contact_us') }}
                    </button>
                </a>
            </div>

            <Carousel v-bind="config" class="mt-14">
                <Slide
                    v-for="item in videosSections"
                    :key="`whyus-spec-${item}`"
                    class="rounded-2xl overflow-hidden"
                >
                    <div
                        class="relative group w-full h-64 sm:h-40 overflow-hidden cursor-pointer"
                        @click="videoUrl = item.video"
                    >
                        <button
                            class="abs-center md:w-10 md:h-10 w-14 h-14 flex-center rounded-full bg-slate-50 shadow trans group-hover:bg-primary text-dark group-hover:text-white z-2"
                        >
                            <playIcon class="w-6 md:w-5" />
                        </button>
                        <img
                            loading="lazy"
                            :src="`/whyus-section/${item.image}`"
                            style="
                                filter: brightness(0.92) contrast(1.2) saturate(1.45)
                                    drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.2));
                            "
                            class="w-full h-full object-cover object-center shadow-sm transition-all duration-300 ease-in-out"
                        />
                    </div>
                </Slide>
                <template #addons>
                    <div class="sm:hidden">
                        <Navigation />
                    </div>
                </template>
            </Carousel>
        </div>
        <AppDialog :model-value="videoUrl ? true : false" animate-from="bottom">
            <div class="rounded-lg w-full p-5 max-w-6xl sm:p-2 bg-light shadow-xl">
                <button
                    @click="videoUrl = null"
                    class="flex-center aspect-square rounded t-trans hover:scale-110"
                >
                    <closeIcon class="w-10" />
                </button>

                <div
                    class="w-[75vw] max-w-full aspect-video rounded-xl overflow-hidden mt-4 mx-auto sm:w-full sm:mt-2"
                >
                    <iframe
                        v-if="videoUrl"
                        :src="videoUrl"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        :title="videosSections.find((v) => v.video === videoUrl)?.title"
                        class="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </AppDialog>
    </section>
</template>

<script lang="ts" setup>
import closeIcon from '@/assets/icons/close.svg'
import playIcon from '@/assets/icons/play.svg'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, defineAsyncComponent, markRaw } from 'vue'
const AppDialog = defineAsyncComponent(() => import('@/components/global/AppDialog.vue'))
const videoUrl = ref<string | null>(null)

const config = {
    itemsToShow: 1,
    transition: 500,
    gap: 20,
    itemsToScroll: 1,
    snapAlign: 'center',
    autoplay: 10000,
    wrapAround: true,
}

const videosSections = markRaw([
    {
        image: 'stocks.webp',
        video: 'https://player.vimeo.com/video/1042783885?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        title: 'مشروع الإدارة العامة للمخازن التابعة لشركة الصرف الصحي - نيو ميتال للإنشاءات المعدنية',
    },
    {
        image: 'atlas.webp',
        video: 'https://player.vimeo.com/video/1042782550?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        title: 'مشروع إنشاء محطة أطلس حلوان التابع لشركة الصرف الصحي - نيو ميتال للإنشاءات المعدنية',
    },
    {
        image: 'call-center.webp',
        video: 'https://player.vimeo.com/video/1042785906?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        title: 'مشروع مركز خدمة العملاء بحلوان التابع لشركة الصرف الصحي - نيو ميتال للإنشاءات المعدنية',
    },
])
</script>
