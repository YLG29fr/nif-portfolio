<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    const aboutMe = t('common:aboutMe');

</script>

<template>
    <section id="aboutMe" class="section">
        <p> {{ aboutMe }} </p>
    </section>
</template>

