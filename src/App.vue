<template>
    <main>
        <AppHeader />
        <RouterView v-slot="{ Component }">
            <!-- <Transition name="page-transition" appear> -->
                <component :is="Component" />
            <!-- </Transition> -->
        </RouterView>
        <AppFooter />
    </main>
</template>
<script setup lang="ts">
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from '@/components/global/AppFooter.vue'
</script>
