<template>
    <div class="w-full h-full rounded-xl flex shadow overflow-hidden">
        <img
            loading="lazy"
            :src="image"
            class="w-full h-full object-cover t-trans hover:scale-125 hover:rotate-6"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string
}>()
</script>
