<!-- src/components/layout/ProjectsSection.vue -->

<script setup lang="ts">
    import { projectsList } from '../../data/projects/index.ts'; 
    import ProjectCard from '../ui/ProjectCard.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

</script>

<template>
  <section class="section bcg-blur" id="projects">
  <h1 class="title">{{ t('common:PROJECTS_TITLE') }}</h1>
  <h2 class="subtitle">{{ t('common:PROJECTS_SUBTITLE') }}</h2>

    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <div class="m-4" v-for="project in projectsList" :key="project.name">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

    <div class="is-flex is-justify-content-center">
      <router-link to="/projets/">
        <button class="button is-CTA has-text-weight-bold" > {{ t('common:PROJECTS_BUTTON') }} </button>
      </router-link>
    </div>
    
  </section>
</template>

<style scoped>


[data-theme="dark"] .is-CTA {
    background-color: var(--color-purple-transparent);
  }


  [data-theme="light"] {
    .bcg-blur {
      background-color: var(--color-dutch-white-transparent);
    }
    .is-CTA {
      background-color: var(--color-orange-transparent);
    }
  }

</style>
