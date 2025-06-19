<!-- src/components/layout/ProjectsSection.vue -->

<script setup lang="ts">
    import { projectsList } from '../../data/projects/index.ts'; 
    import ProjectCard from '../ui/ProjectCard.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    // Fonction pour ajuster le scroll lors d'un changement de page - retour haut de page plutot que position sur la page actuelle
function adjustScrollOnRedirect() {
  // Petit délai pour laisser le routeur changer la page
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 0);
}

</script>

<template>
  <section class="section" id="projects">
  <h1 class="title">{{ t('common:PROJECTS_TITLE') }}</h1>
  <h2 class="subtitle">{{ t('common:PROJECTS_SUBTITLE') }}</h2>

    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <div class="m-4" v-for="project in projectsList" :key="project.name">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

    <div class="is-flex is-justify-content-center">
      <router-link to="/projets/">
        <button class="button" @click="adjustScrollOnRedirect"> +++ </button>
      </router-link>
    </div>
    
  </section>
</template>
