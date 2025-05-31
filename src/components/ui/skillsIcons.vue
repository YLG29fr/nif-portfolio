<template>
  <img :src="skill.icon" :alt="skill.name" class="skillIcon"/>
</template>

<script setup lang="ts">
// Props attend un objet skill comme merise.ts
defineProps<{
  skill: {
    type: string
    name: string
    icon: string
    description: string
    linkedProjects: string[]
  }
}>()
</script>

<style scoped>
  .skillIcon {
    width: 60px;
    height: 60px;
  }
</style>
