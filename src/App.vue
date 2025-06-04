<script setup lang="ts">

  import NavBar from './components/layout/NavBar.vue'
  import HeroBanner from './components/layout/HeroBanner.vue'
  import AboutMe from './components/layout/AboutMe.vue'
  import SkillsList from './components/layout/SkillsList.vue';
  import ProjectsSection from './components/layout/ProjectsSection.vue';
  import ContactSection from './components/layout/ContactSection.vue'

</script>


<template>

  <NavBar></NavBar>
  <section class="section">

    <HeroBanner />
    <AboutMe />
    <SkillsList />
    <ProjectsSection />
    <ContactSection />

  </section>

</template>

<style scoped>
  [data-theme="dark"] .section{
    background-color: var(--color-grey);
  }
  [data-theme="light"] .section{
    background-color: var(--color-sable);
  }
</style>

