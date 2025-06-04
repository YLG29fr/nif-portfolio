<template>

  <img :src="skill.icon" :alt="skill.name" class="skillIcon"/>
  <p class ="has-text-centered" v-if="desc"><b> {{ skill.name }} </b> </p>

</template>

<script setup lang="ts">
import type { Skill } from '../../types/skill'
// Props attend un objet skill comme merise.ts
defineProps<{
  skill: Skill,
  desc: boolean
}>()
</script>

<style scoped>
  .skillIcon {
    width: 60px;
    height: 60px;
  }
</style>
