<template>
    <footer class="py-4 text-dark main-border-t flex-center mt-4">
        <div class="container">
            <div class="fs gap-4 sm:flex-col">
                <div class="flex-1 fs gap-4 sm:flex-col">
                    <div class="flex-1 sm:w-full">
                        <h3 class="section-title-start mb-6">
                            <placeIcon class="w-6 !inline text-primary" />
                            {{ $t('footer.address.heading') }}
                        </h3>
                        <a
                            :href="appsettings.location1"
                            target="_blank"
                            class="trans hover:!text-primary"
                        >
                            <p class="text-sm leading-6 gap-1 font-bold mt-6">
                                <span class="text-darker font-bold"
                                    >{{ $t('footer.address.location-1.heading') }}:
                                </span>
                                {{ $t('footer.address.location-1.text') }}
                            </p>
                        </a>
                        <a
                            :href="appsettings.location2"
                            target="_blank"
                            class="trans hover:!text-primary"
                        >
                            <p class="text-sm leading-6 gap-1 mt-2 font-bold">
                                <span class="text-darker font-bold"
                                    >{{ $t('footer.address.location-2.heading') }}:
                                </span>
                                {{ $t('footer.address.location-2.text') }}
                            </p>
                        </a>
                    </div>
                </div>
                <div class="flex-1 sm:w-full">
                    <h3 class="section-title-start mb-6">
                        <phoneIcon class="w-6 !inline -scale-x-100 text-primary" />
                        {{ $t('footer.contact_us') }}
                    </h3>
                    <p class="mb-8">
                        {{ $t('footer.description') }}
                    </p>
                    <div class="flex-center gap-2 text-lg sm:text-base">
                        <p class="fc gap-2">
                            <a
                                :href="`tel:${appsettings.phone.value}`"
                                style="direction: ltr"
                                class="font-bold trans hover:text-primary"
                                >{{ appsettings.phone.patternValue }}</a
                            >
                            <phoneIcon class="w-6 text-primary" />
                        </p>
                        <p class="fc gap-2">
                            <a
                                class="font-bold trans hover:text-green-500"
                                :href="`tel:${appsettings.whatsappNumber.value}`"
                                style="direction: ltr"
                                >{{ appsettings.whatsappNumber.patternValue }}</a
                            >
                            <whatsappIcon class="text-green-500 w-7" />
                        </p>
                    </div>
                </div>
            </div>
            <hr class="main-border my-4" />
            <div class="flex-between">
                <p>
                    <span class="uppercase sm:text-sm">{{
                        $t('footer.copyright', {
                            year: new Date().getFullYear(),
                        })
                    }}</span>
                </p>

                <ul class="fc gap-2.5">
                    <li>
                        <a target="_blank" :href="appsettings.facebook" class="social-media-icon">
                            <facebookIcon class="w-4" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import appsettings from '@/assets/data/app.json'

import phoneIcon from '@/assets/icons/phone.svg'
import whatsappIcon from '@/assets/icons/whatsapp.svg'
import facebookIcon from '@/assets/icons/facebook.svg'
import placeIcon from '@/assets/icons/place.svg'
</script>
