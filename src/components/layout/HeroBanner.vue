<!-- src/components/layout/HelloWorld.vue -->

<script setup lang="ts">

  import {useTranslation} from 'i18next-vue'
  const {t} = useTranslation();


</script>
<template>

  <div class="hero-background fullwidth">
  </div>
  
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

@media screen and (min-width: 680px) {
  [data-theme="light"] .hero-background {
    background-image: url('../../assets/img/common/hero-banner-jour.png') !important;
  }
}
@media screen and (max-width: 680px) {
  [data-theme="light"] .hero-background {
    background-image: url('../../assets/img/common/hero-banner-jour.png') !important;
  }
  
}

[data-theme="dark"] .hero-background {
  background-image: url('../../assets/img/common/hero-banner-nuit.png');
}

.hero-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-size: cover;
  background-position: center;
}

/* décollement du header */
.section{
  position: relative;
  padding-top: 10em;
  z-index: 1;
}

</style>
