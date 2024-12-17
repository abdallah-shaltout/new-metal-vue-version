<template>
    <main>
        <AppHeader />
        <RouterView v-slot="{ Component, route }">
            <Transition name="page-transition" mode="out-in">
                <component :is="Component" :key="route.fullPath" />
            </Transition>
        </RouterView>
        <AppFooter />
    </main>
</template>
<script setup lang="ts">
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from '@/components/global/AppFooter.vue'
</script>
