<script setup lang="ts">

  import NavBar from './components/layout/NavBar.vue'
  import HeroBanner from './components/layout/HeroBanner.vue'
  import AboutMe from './components/layout/AboutMe.vue'
  import SkillsList from './components/layout/SkillsList.vue';

</script>


<template>

  <NavBar></NavBar>
  <section class="section">

    <HeroBanner/>
    <AboutMe/>
    <SkillsList/>

  </section>

</template>

<style scoped>

</style>

