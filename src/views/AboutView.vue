<template>
    <section class="py-14 w-full bg-slate-50">
        <div class="container">
            <div class="fs gap-4 sm:flex-col-reverse">
                <div class="flex-4">
                    <h2 class="section-title-start">
                        {{ $t('about_page.company_intro') }}
                    </h2>
                    <p class="mt-8 text-dark text-justify text-lg">
                        {{ $t('about_page.company_description') }}
                    </p>
                    <h2 class="section-title-start !mt-14">
                        {{ $t('about_page.mission_title') }}
                    </h2>
                    <p class="mt-8 text-dark text-justify text-lg">
                        {{ $t('about_page.mission_description') }}
                    </p>
                    <h2 class="section-title-start !mt-14">
                        {{ $t('about_page.vision_title') }}
                    </h2>
                    <p class="mt-8 text-dark text-justify text-lg">
                        {{ $t('about_page.vision_description') }}
                    </p>
                </div>
                <div class="flex-2 relative self-stretch">
                    <div
                        class="w-full h-full sm:mb-4 flex-col-reverse flex sm:flex-row-reverse gap-2 absolute sm:static"
                    >
                        <div v-motion-pop-bottom class="animated-video">
                            <video autoplay loop muted playsinline>
                                <source src="/videos/owner.webm" type="video/webm" />
                            </video>
                        </div>
                        <div v-motion-pop-bottom class="animated-video">
                            <video autoplay loop muted playsinline>
                                <source src="/videos/Video.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <AnalyzeSection id="analyze" v-motion-pop-bottom />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const AnalyzeSection = defineAsyncComponent(() => import('@/components/about/AnalyzeSection.vue'))
</script>

<style>
body {
    background-color: theme('colors.light');
}
</style>
