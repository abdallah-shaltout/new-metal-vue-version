<template>
    <div class="w-full h-full relative">
        <Transition name="fade">
            <img
                v-if="activeImage === 1"
                loading="lazy"
                src="/images/new-metal-1.webp"
                class="w-full h-full object-cover absolute inset-0"
            />
            <img
                v-else
                loading="lazy"
                src="/images/new-metal-2.webp"
                class="w-full h-full object-cover absolute inset-0"
            />
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const activeImage = ref<number>(1)

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
    intervalId = setInterval(() => {
        activeImage.value = activeImage.value === 1 ? 2 : 1
    }, 3000)
})

onBeforeUnmount(() => {
    if (intervalId) {
        clearInterval(intervalId)
    }
})
</script>
