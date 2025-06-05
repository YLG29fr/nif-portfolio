<!-- src/components/ui/Tooltip.vue -->
<template>
    <div class="tooltip-container" @mouseenter="show = true" @mouseleave="show = false">
        <slot></slot>
        <div v-if="show" 
        class="tooltip-content"
        ref="tooltipRef"
        >
            <p class="has-text-centered">
                <b>{{ title }}</b>
            </p>
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">

    import { ref, watch, nextTick } from 'vue'
    defineProps<{ text: string , title: string}>()
    const show = ref(false)

    const tooltipRef = ref<HTMLElement | null>(null)
    const adjustPosition = () => {
        if (!tooltipRef.value) return
        const rect = tooltipRef.value.getBoundingClientRect()
        const padding = 1

        // Si le tooltip dépasse à gauche
        if (rect.left < padding) {
            tooltipRef.value.style.left = `${padding - rect.left + 10}%`
            tooltipRef.value.style.transform = 'translateX(0)'
        }
        // Si le tooltip dépasse à droite
        else if (rect.right > window.innerWidth - padding) {
            const over = rect.right - window.innerWidth + padding
            tooltipRef.value.style.left = `calc(10% - ${over}px)`
            tooltipRef.value.style.transform = 'translateX(-100%)'
        } else {
            tooltipRef.value.style.left = '10%'
            tooltipRef.value.style.transform = 'translateX(-50%)'
        }
}

watch(show, async (val) => {
    if (val) {
        await nextTick()
        adjustPosition()
    }
})

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
