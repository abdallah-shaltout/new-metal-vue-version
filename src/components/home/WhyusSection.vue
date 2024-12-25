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

            <div
                class="relative group w-full h-64 sm:h-40 overflow-hidden cursor-pointer"
                @click="showVideo = true"
            >
                <button
                    class="abs-center md:w-10 md:h-10 w-14 h-14 flex-center rounded-full bg-slate-50 shadow trans group-hover:bg-primary text-dark group-hover:text-white z-2"
                >
                    <playIcon class="w-6 md:w-5" />
                </button>
                <img
                    loading="lazy"
                    src="/images/whyus.webp"
                    class="w-full h-full object-cover rounded-2xl object-top shadow-sm transition-all duration-500 ease-in-out group-hover:brightness-90"
                />
            </div>
        </div>
        <AppDialog v-model="showVideo" animate-from="bottom">
            <div class="rounded-lg w-full p-5 max-w-6xl sm:p-2 bg-light shadow-xl">
                <button
                    @click="showVideo = false"
                    class="flex-center aspect-square rounded t-trans hover:scale-110"
                >
                    <closeIcon class="w-10" />
                </button>

                <div
                    class="w-[75vw] max-w-full aspect-video rounded-xl overflow-hidden mt-4 mx-auto sm:w-full sm:mt-2"
                >
                    <iframe
                        src="https://player.vimeo.com/video/1041417986?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        class="w-full h-full"
                        title="مشروع الإدارة العامة للمخازن التابعة لشركة الصرف الصحي - نيو ميتال للإنشاءات المعدنية"
                    ></iframe>
                </div>
            </div>
        </AppDialog>
    </section>
</template>

<script lang="ts" setup>
import closeIcon from '@/assets/icons/close.svg'
import playIcon from '@/assets/icons/play.svg'
import { ref, defineAsyncComponent } from 'vue'
const AppDialog = defineAsyncComponent(() => import('@/components/global/AppDialog.vue'))
const showVideo = ref<boolean>(false)
</script>
