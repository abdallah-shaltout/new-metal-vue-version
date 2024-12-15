<template>
  <section class="py-14 w-full bg-slate-50">
    <div class="container">
      <div class="fs gap-4 sm:flex-col-reverse">
        <div class="flex-3">
          <h2 class="text-4xl sm:text-2xl font-bold text-darker section-title-start">
            {{ $t('about_page.company_intro') }}
          </h2>
          <p class="mt-8 text-dark text-justify text-lg">
            {{ $t('about_page.company_description') }}
          </p>
          <h2 class="text-4xl sm:text-2xl font-bold text-darker section-title-start !mt-14">
            {{ $t('about_page.mission_title') }}
          </h2>
          <p class="mt-8 text-dark text-justify text-lg">
            {{ $t('about_page.mission_description') }}
          </p>
          <h2 class="text-4xl sm:text-2xl font-bold text-darker section-title-start !mt-14">
            {{ $t('about_page.vision_title') }}
          </h2>
          <p class="mt-8 text-dark text-justify text-lg">
            {{ $t('about_page.vision_description') }}
          </p>
        </div>
        <div class="flex-2 sm:mb-4">
          <div
            v-motion-pop-bottom
            class="w-full rounded-3xl overflow-hidden aspect-square ltr:!-scale-x-100"
          >
            <video autoplay loop muted playsinline class="w-full h-full object-contain">
              <source src="/videos/Video.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-14 w-full bg-darker text-light">
    <div class="container">
      <h2 class="font-bold text-3xl w-fit mx-auto section-title mb-2">
        {{ $t('about_page.services.heading') }}
      </h2>
      <p class="mt-4 text-center text-light/70">
        {{ $t('about_page.services.description') }}
      </p>

      <ul class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 w-full">
        <li
          v-for="(item, idx) in services"
          :key="idx"
          v-motion-pop-bottom
          class="p-5 overflow-hidden trans group hover:bg-primary main-border relative flex-center flex-col rounded-xl"
        >
          <span class="bg-blur"></span>

          <component :is="item.icon" class="w-12 text-light lg:w-10 font-bold" />

          <h4
            class="text-xl section-title group-hover:before:bg-light group-hover:before:w-full mb-6 text-center"
          >
            {{ item.heading }}
          </h4>
          <span class="text-center text-sm text-light/80 leading-relaxed">
            {{ item.description }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, markRaw, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const servicesList = markRaw([
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/building-up.svg')),
    heading: '',
    description: '',
  },
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/leaf.svg')),
    heading: '',
    description: '',
  },
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/puzzle.svg')),
    heading: '',
    description: '',
  },
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/warehouse.svg')),
    heading: '',
    description: '',
  },
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/roof.svg')),
    heading: '',
    description: '',
  },
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/building-up.svg')),
    heading: '',
    description: '',
  },
])

const services = computed(() =>
  servicesList.map((item, idx) => {
    return {
      ...item,
      heading: t(`about_page.services.list.${idx}.heading`),
      description: t(`about_page.services.list.${idx}.description`),
    }
  }),
)
</script>

<style>
body {
  @apply bg-slate-50;
}
</style>
