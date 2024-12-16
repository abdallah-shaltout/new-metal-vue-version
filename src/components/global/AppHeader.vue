<template>
    <header class="h-20 flex-center">
        <div class="container">
            <nav class="flex-between">
                <RouterLink
                    :to="
                        $localePath({
                            name: 'home',
                        })
                    "
                >
                    <Applogo />
                </RouterLink>

                <ul class="fc gap-4 sm:hidden">
                    <li v-for="(item, idx) in links" :key="idx">
                        <RouterLink :to="$localePath(item.route)" class="primary-link">{{
                            item.label
                        }}</RouterLink>
                    </li>
                </ul>
                <div class="fc gap-2 md:hidden ltr:flex-row-reverse ltr:sm:flex-row">
                    <Transition name="slide-up" mode="out-in">
                        <button
                            class="lang-btn"
                            v-if="$i18n.locale === 'ar'"
                            @click="$switchLang('en')"
                        >
                            <span>English</span>
                        </button>
                        <button
                            class="lang-btn"
                            v-else-if="$i18n.locale === 'en'"
                            @click="$switchLang('ar')"
                        >
                            <span class="font-bold font-ubuntu text-base">عربي</span>
                        </button>
                    </Transition>
                </div>
                <AppMenuBtn
                    class="hidden sm:flex !w-11 !h-11 z-12"
                    :class="{ active: show_menu }"
                    @click="show_menu = !show_menu"
                />
                <div
                    class="fixed left-0 top-0 h-full w-full z-10 hidden sm:block rtl:translate-x-full ltr:-translate-x-full t-trans origin-left"
                    :class="{ '!translate-x-0': show_menu }"
                >
                    <span class="bg-blur bg-blur-light"></span>
                    <ul class="abs-center flex-center flex-col gap-6">
                        <li v-for="(item, idx) in links" :key="idx">
                            <RouterLink
                                class="primary-link"
                                @click="show_menu = false"
                                :to="$localePath(item.route)"
                                >{{ item.label }}</RouterLink
                            >
                        </li>
                        <li class="w-full">
                            <Transition name="slide-up" mode="out-in">
                                <button
                                    class="lang-btn w-full"
                                    @click="
                                        () => {
                                            show_menu = false
                                            $switchLang('en')
                                        }
                                    "
                                    v-if="$i18n.locale === 'ar'"
                                >
                                    <span>English</span>
                                </button>
                                <button
                                    class="lang-btn w-full"
                                    @click="
                                        () => {
                                            show_menu = false
                                            $switchLang('ar')
                                        }
                                    "
                                    v-else-if="$i18n.locale === 'en'"
                                >
                                    <span class="font-bold font-ubuntu text-base">عربي</span>
                                </button>
                            </Transition>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import type { RouteLocationAsRelativeGeneric } from 'vue-router'
import Applogo from '@/components/global/AppLogo.vue'
const { t } = useI18n()

const AppMenuBtn = defineAsyncComponent(() => import('@/components/global/AppMenuBtn.vue'))
const links = computed<
    {
        label: string
        route: RouteLocationAsRelativeGeneric
    }[]
>(() => [
    {
        label: t('header.home'),
        route: {
            name: 'home',
        },
    },
    {
        label: t('header.about_us'),
        route: {
            name: 'about',
        },
    },
    {
        label: t('header.projects'),
        route: {
            name: 'projects',
        },
    },
])
const show_menu = ref<boolean>(false)
</script>
