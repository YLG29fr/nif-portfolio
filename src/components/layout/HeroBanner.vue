<!-- src/components/layout/HelloWorld.vue -->

<script setup lang="ts">

  import {useTranslation} from 'i18next-vue'
  const {t} = useTranslation();


</script>
<template>

  <section class="section" >

    <div class="columns">

      <div class="column has-text-centered">
        <h1>{{ t('common:TITLE') }}</h1>
        <h2>{{ t('common:SUB_TITLE') }}</h2>
      </div>
      

    </div>
      
  </section>

</template>

<style scoped>

/* décollement du header */
.section{
  padding-top: 10em;
}

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
