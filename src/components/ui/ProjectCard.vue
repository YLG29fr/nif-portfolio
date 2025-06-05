<!-- src/components/ui/ProjectCard.vue -->
<template>
  <div class="card" style="width: 18rem;">
    <!-- Header avec le nom du projet -->
    <header class="card-header">
      <p class="card-header-title">
        {{ t(`${project.name}.title`) }}
      </p>
    </header>

    <!-- Image principale du projet -->
    <div class="card-image">
      <figure class="image is-4by4">
        <a :href="project.link" target="_blank" rel="noopener">
          <img :src="project.icon" :alt="project.name" />
        </a>
      </figure>
      <div class="card-footer-item"> {{ t(`${project.name}.description`) }} </div>
    </div>

    <!-- Footer avec les compétences liés -->
    <footer class="card-footer">
        <span
        v-for="skill in project.linkedSkills"
        :key="skill.name"
        class="card-footer-item"
        >
        <skillIcon :skill="skill" :desc="false" :hoverable="false" />
      </span>
    </footer>

  </div>
</template>

<script setup lang="ts">

import type { Project } from '../../types/project'
import skillIcon from './skillsIcons.vue'

import { useTranslation } from 'i18next-vue';
const { t } = useTranslation('projects');


// Props attend un objet Projet comme portfolio
defineProps<{
  project: Project
}>()
</script>

<style scoped>
  [data-theme="light"] .card{
        
        background-color: var(--color-sable);
    
  }

</style>
