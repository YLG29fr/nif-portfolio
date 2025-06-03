<!-- src/components/layout/ProjectsSection.vue -->

<script setup lang="ts">
    import { projectsList } from '../../data/projects/index.ts'; 
    import projectCard from '../ui/ProjectCard.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();


</script>

<template>
  <section class="section">
  <h1 class="title" id="projets">{{ t('common:PROJECTS_TITLE') }}</h1>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="project in projectsList" :key="project.name">
        <projectCard :project="project"></projectCard>
      </div>
    </div>
  </section>
</template>


