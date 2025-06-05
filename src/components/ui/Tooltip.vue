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
            <p class="has-text-centered wrap">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { ref, watch, nextTick } from 'vue';
    defineProps<{ text: string , title: string}>();
    const show = ref(false);

    const tooltipRef = ref<HTMLElement | null>(null);

    const adjustPosition = () => {
        if (!tooltipRef.value) return;

        const rect = tooltipRef.value.getBoundingClientRect()
    
        const padding = 50

        // Si le tooltip dépasse à gauche
        if (rect.left < padding) {
            tooltipRef.value.style.left = `${padding - rect.left + 50}%`
            tooltipRef.value.style.transform = 'translateX(-50%)'
        }
        // Si le tooltip dépasse à droite
        else if (rect.right > window.innerWidth - padding) {
            const over = rect.right - window.innerWidth + padding
            tooltipRef.value.style.left = `calc(50% - ${over}px)`
            tooltipRef.value.style.transform = 'translateX(-60%)'
        } else {
            tooltipRef.value.style.left = '50%'
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
    background: #222;
    color: #fff;
    padding: 0.4em 0.8em;
    border-radius: 4px;
    font-size: 0.9em;
    z-index: 10;
    opacity: 0.95;

    transform: translateX(-50%);
    white-space: normal;
    pointer-events: none;
    box-sizing: border-box;

    min-width: 200px;
    max-width: 350px;
    word-break: break-word;
    overflow-wrap: break-word;

}
</style>
