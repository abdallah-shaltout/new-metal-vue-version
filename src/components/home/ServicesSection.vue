<template>
    <section class="py-14 w-full bg-darker text-light rounded-xl">
        <div class="container">
            <h2 class="section-title-center text-light mb-2">
                {{ $t('services.heading') }}
            </h2>
            <p class="mt-4 text-center text-light/70">
                {{ $t('services.description') }}
            </p>

            <ul class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 w-full">
                <li v-for="item in servicesList" :key="item.id" v-motion-pop-bottom>
                    <RouterLink
                        :to="
                            $localePath({
                                name: 'projects',
                                params: {
                                    service: item.slug,
                                },
                            })
                        "
                        class="py-3 px-2 h-full overflow-hidden trans group hover:bg-primary main-border relative flex-center flex-col rounded-xl"
                    >
                        <span class="bg-blur"></span>
                        <component :is="item.icon" class="w-12 text-light lg:w-10 font-bold mb-6" />
                        <h4
                            class="section-title-center text-center text-xl text-light group-hover:before:bg-light group-hover:before:w-full mb-6"
                        >
                            {{ item.heading }}
                        </h4>
                        <span class="text-center text-sm text-light/80 leading-relaxed">
                            {{ item.description }}
                        </span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ServiceJson from '@/assets/data/services.json'
import { computed, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
const { t } = useI18n()

const servicesList = computed(() =>
    [...ServiceJson].map((ele) => {
        const { iconName, id, idx, slug } = ele
        return {
            id,
            heading: t(`services.list.${idx}.heading`),
            description: t(`services.list.${idx}.description`),
            icon: defineAsyncComponent(() => import(`@/assets/icons/services/${iconName}.svg`)),
            slug,
        }
    }),
)
</script>
