<template>
  <div class="card" style="width: 18rem;">
    <!-- Header avec le nom du projet -->
    <header class="card-header">
      <p class="card-header-title">
        {{ project.name }}
      </p>
    </header>

    <!-- Image principale du skill -->
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="project.icon" :alt="project.name" />
      </figure>
    </div>

    <!-- Footer avec les projets liés -->
    <footer class="card-footer">
      <span
        v-for="skill in project.linkedSkills"
        :key="skill.name"
        class="card-footer-item"
      >
        {{ skill.icon }}
      </span>
    </footer>

  </div>
</template>

<script setup lang="ts">

import type { Skill } from '../../types/skill'

// Props attend un objet projet comme portfolio
defineProps<{
  project: {
    name: string
    icon: string
    description: string
    images: string[]
    tags: string[]
    linkedSkills: Skill[]
    context: string
    link: string
  }
}>()
</script>
