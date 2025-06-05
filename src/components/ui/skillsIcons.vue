<!-- src/components/ui/skillsIcons.vue -->
<template>
<Tooltip :title="skill.name" :text="t(`${skill.name}.description`)">

  <img 
  :src="skill.icon" 
  :alt="skill.name" 
  :class="{ hoverEffect: hoverable }"
  class="skillIcon"
  />
  
  <p class ="has-text-centered" v-if="desc"><b> {{ skill.name }} </b> </p>
</Tooltip>
  
</template>

<script setup lang="ts">
import Tooltip from './Tooltip.vue';
import type { Skill } from '../../types/skill'

import { useTranslation } from 'i18next-vue';
const { t } = useTranslation('skills');

// Props attend un objet skill comme merise.ts
defineProps<{
  skill: Skill,
  desc: boolean,
  hoverable: boolean,
}>()
</script>

<style scoped>
  .skillIcon {
    width: 60px;
    height: 60px;
    transition: filter 0.3s, transform 0.3s;
  }
  .hoverEffect {
    transition: filter 0.3s, transform 0.3s;
}
.hoverEffect:hover {
  transform: scale(1.3) rotate(-4deg);
}

[data-theme="dark"] .hoverEffect:hover {
  filter: drop-shadow(0 0 2em var(--color-light-purple));
}
[data-theme="light"] .hoverEffect:hover {
  filter: drop-shadow(0 0 2em var(--color-dark-orange));
}
</style>
