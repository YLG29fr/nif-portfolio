<template>
  <img :src="skill.icon" :alt="skill.name" class="skillIcon"/>
</template>

<script setup lang="ts">
import type { Skill } from '../../types/skill'
// Props attend un objet skill comme merise.ts
defineProps<{
  skill: Skill
}>()
</script>

<style scoped>
  .skillIcon {
    width: 60px;
    height: 60px;
  }
</style>
