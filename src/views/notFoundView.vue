<template>
    <section class="py-14 w-full">
        <div class="container flex-center flex-col">
            <h2 class="text-4xl font-bold text-center">404 - Page Not Found</h2>

            <RouterLink
                :to="
                    $localePath({
                        name: 'home',
                    })
                "
            >
                <button class="btn-primary w-fit mt-8">Back To Home</button>
            </RouterLink>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { localPath } from '@/i18n/translation'
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

let timeoutId: ReturnType<typeof setTimeout> | null = null

const router = useRouter()

onMounted(() => {
    timeoutId = setTimeout(() => {
        router.push(localPath({ name: 'home' }))
    }, 4000)
})

onBeforeUnmount(() => {
    if (timeoutId) {
        clearTimeout(timeoutId)
    }
})
</script>

<style>
body {
    @apply bg-slate-50;
}
</style>
