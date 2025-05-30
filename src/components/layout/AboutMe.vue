<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

</script>

<template>
    <section id="aboutMe" class="section">
        <p> {{ t('aboutMe:ABOUT_ME_1') }} </p>
        <br>
        <p> {{ t('aboutMe:ABOUT_ME_2') }} </p>
        <br>
        <p> {{ t('aboutMe:ABOUT_ME_3') }} </p>
        <br>
        <p> {{ t('aboutMe:ABOUT_ME_CONCLUSION') }} </p>
    </section>
</template>

