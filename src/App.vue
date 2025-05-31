<script setup lang="ts">
  // import HelloWorld from './components/HelloWorld.vue'
  import NavBar from './components/layout/NavBar.vue'
  import HeroBanner from './components/layout/HeroBanner.vue'
  import AboutMe from './components/layout/AboutMe.vue'
  import SkillsList from './components/layout/SkillsList.vue';

</script>

<!-- <HelloWorld msg="Vite + Vue" />  ne sera affiché que si importé, sert de test -->
<template>
  <NavBar></NavBar>

  <section class="section">
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    
    <HeroBanner/>
    
    <AboutMe/>
    <SkillsList/>

  </section>

</template>

<style scoped>

</style>

