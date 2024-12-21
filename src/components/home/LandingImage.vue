<template>
    <div class="w-full h-full relative">
        <Transition name="fade">
            <img
                :key="activeImageIndex"
                loading="lazy"
                :src="`/images/landing/${activeImageIndex + 1}.webp`"
                class="w-full h-full object-cover absolute inset-0"
            />
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
const imagesCount = ref<number>(4)
const activeImageIndex = ref<number>(0)

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
    intervalId = setInterval(() => {
        if (activeImageIndex.value + 1 === imagesCount.value) {
            activeImageIndex.value = 0
        } else {
            activeImageIndex.value++
        }
    }, 3000)
})

onBeforeUnmount(() => {
    if (intervalId) {
        clearInterval(intervalId)
    }
})
</script>
