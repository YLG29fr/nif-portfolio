<!-- src/components/ui/SeparatorProp.vue -->
<template>
  <div
    class="separator"
    :style="{
      '--separator-color': color
    }"
  ></div>
</template>

<script setup lang="ts">
/**
 * Séparateur horizontal avec dégradé personnalisable.
 * @component
 * @prop {string} [color] - Couleur centrale du dégradé (ex : "var(--color-primary)", "#ff00ff", etc.)
 * @example
 * <Separator color="var(--color-primary)" />
 */
import { defineProps } from 'vue'

const props = defineProps<{
  color?: string
}>()
const color = props.color || 'var(--color-purple-transparent)'
</script>

<style scoped>
.separator {
  border: 0;
  height: 10px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--separator-color, var(--color-purple-transparent)),
    rgba(0, 0, 0, 0)
  );
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
}
</style>
