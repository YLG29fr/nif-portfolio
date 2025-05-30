<template>
  <div class="card" style="width: 18rem;">
    <!-- Header avec le nom de la compétence -->
    <header class="card-header">
      <p class="card-header-title">
        {{ skill.name }}
      </p>
    </header>

    <!-- Image principale du skill -->
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="skill.icon" :alt="skill.name" />
      </figure>
    </div>

    <!-- Footer avec les projets liés -->
    <footer class="card-footer">
      <span
        v-for="project in skill.linkedProjects"
        :key="project"
        class="card-footer-item"
      >
        {{ project }}
      </span>
    </footer>

    <!-- Description à part, pour un futur tooltip -->
    <div class="is-sr-only" :id="`desc-${skill.name}`">
      {{ skill.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
// Props attend un objet skill comme merise.ts
defineProps<{
  skill: {
    name: string
    icon: string
    description: string
    linkedProjects: string[]
  }
}>()
</script>
