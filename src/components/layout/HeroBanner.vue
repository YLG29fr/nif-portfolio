<!-- src/components/layout/HelloWorld.vue -->

<script setup lang="ts">

  import logo from '../../assets/logo.png'

  import {useTranslation} from 'i18next-vue'
  const {t} = useTranslation();

  const title = t('heroBanner.title');
  const msg = t('heroBanner.msg');

</script>

<template>
  <h1>{{ title }}</h1>
  <h2>{{ msg }}</h2>

  <img :src="logo" alt="mon logo Renard" class="hoverEffect"/>

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
