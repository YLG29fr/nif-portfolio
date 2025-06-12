<!-- src/components/layout/ProjectsSection.vue -->

<script setup lang="ts">
    import { projectsList } from '../../data/projects/index.ts'; 
    import ProjectCard from '../ui/ProjectCard.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();


</script>

<template>
  <section class="section" id="projects">
  <h1 class="title">{{ t('common:PROJECTS_TITLE') }}</h1>
  <h2 class="subtitle">{{ t('common:PROJECTS_SUBTITLE') }}</h2>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="project in projectsList" :key="project.name">
        <ProjectCard :project="project"></ProjectCard>
      </div>
      <router-link to="/projet/">
        <button class="button"> +++ </button>
      </router-link>
    </div>
  </section>
</template>
