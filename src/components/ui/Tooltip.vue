<!-- src/components/ui/Tooltip.vue -->
<template>
    <div class="tooltip-container" @mouseenter="show = true" @mouseleave="show = false">
        <slot></slot>
        <div v-if="show" class="tooltip-content">
            <p class="has-text-centered">
                <b>{{ title }}</b>
            </p>
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    defineProps<{ text: string , title: string}>()
    const show = ref(false)
</script>

<style scoped>
.tooltip-container {
    position: relative;
    display: inline-block;
}
.tooltip-content {
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    background: #222;
    color: #fff;
    padding: 0.4em 0.8em;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 0.9em;
    z-index: 10;
    pointer-events: none;
    opacity: 0.95;
}
</style>
