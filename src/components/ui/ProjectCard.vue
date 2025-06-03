<template>
  <div class="card" style="width: 18rem;">
    <!-- Header avec le nom du projet -->
    <header class="card-header">
      <p class="card-header-title">
        {{ project.name }}
      </p>
    </header>

    <!-- Image principale du projet -->
    <div class="card-image">
      <figure class="image is-4by4">
        <a :href="project.link" target="_blank" rel="noopener">
          <img :src="project.icon" :alt="project.name" />
        </a>
      </figure>
      <div class="card-footer-item"> {{ project.description }} </div>
    </div>

    <!-- Footer avec les compétences liés -->
    <footer class="card-footer">
        <span
        v-for="skill in project.linkedSkills"
        :key="skill.name"
        class="card-footer-item"
        >
        <skillIcon :skill="skill" />
      </span>
    </footer>

  </div>
</template>

<script setup lang="ts">

import type { Project } from '../../types/project'
import skillIcon from '../ui/skillsIcons.vue'

// Props attend un objet projet comme portfolio
defineProps<{
  project: Project
}>()
</script>

<style scoped>
  [data-theme="light"] .card{
        
        background-color: var(--color-sable);
    
  }
  /* .card-footer {
    border: 1px solid var(--color-purple);
  } */
</style>
