<!-- src/components/HelloWorld.vue -->

<script setup lang="ts">

defineProps<{ title: string, msg: string }>()

import logoBanner from '../assets/logo.png'

</script>

<template>
  <h1>{{ title }}</h1>
  <h2>{{ msg }}</h2>

  <img :src="logoBanner" alt="alt de la banner" class="hoverEffect"/>

</template>

<style scoped>
.hoverEffect {
  filter: drop-shadow(0 0 2em #646cffaa);
  transition: ease-in-out 0.5s;
  width: 50%;
}
.hoverEffect:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
  transition: ease-in-out 0.5s;
  transform: scale(1.2);
}
</style>
