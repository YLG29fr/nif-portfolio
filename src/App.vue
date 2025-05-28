<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import HeroBanner from './components/layout/HeroBanner.vue'

import NavBar from './components/layout/NavBar.vue'

</script>

<template>
  <NavBar></NavBar>
<!-- <HelloWorld msg="Vite + Vue" />  ne sera affiché que si importé, sert de test -->
  <HelloWorld msg="Vite + Vue" /> 

  <HeroBanner/>

</template>

