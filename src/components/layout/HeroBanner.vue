<!-- src/components/layout/HelloWorld.vue -->

<script setup lang="ts">

  import logo from '../../assets/logo.png'

  import {useTranslation} from 'i18next-vue'
  const {t} = useTranslation();

</script>
<template>

  <section class="section" 
  >

    <h1>{{ t('common:TITLE') }}</h1>
    <h2>{{ t('common:SUB_TITLE') }}</h2>
    
    <img :src="logo" alt="mon logo Renard" class="hoverEffect"/>
  </section>

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
