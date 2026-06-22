<!-- ImageZoom.vue -->
<script setup lang="ts">
import { ref } from 'vue'

    defineProps<{
        src: string
        size?: string
        alt?: string
    }>()

const isOpen = ref(false)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}
</script>

<template>
  <!-- Image normale dans le flow -->
  <img
    :src="src"
    :alt="alt"
    :style="{ maxHeight: size }"
    class="zoomable-image"
    @click="open"
  />

  <!-- Overlay en haut de tout le reste -->
  <div
    v-if="isOpen"
    class="zoom-overlay"
    @click.self="close"
  >
    <div class="zoom-content">
      <button class="zoom-close" @click="close">✕</button>
      <img :src="src" :alt="alt" />
    </div>
  </div>
</template>

<style scoped>
.zoomable-image {
  cursor: zoom-in;
}

/* prend tout l'écran, au-dessus du reste */
.zoom-overlay {
  position: fixed;
  inset: 0;               /* top:0; right:0; bottom:0; left:0; */
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;          /* plus haut que tout le reste */
}

/* la box de zoom */
.zoom-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: #111;
  padding: 1rem;
  border-radius: 8px;
}

.zoom-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

/* bouton fermer dans un coin */
.zoom-close {
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
