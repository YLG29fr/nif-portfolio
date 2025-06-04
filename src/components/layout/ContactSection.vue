<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import ContactForm from '../ui/ContactForm.vue';

</script>

<template>
    <section id="contact" class="section">
        <h2 class="subtitle"> {{ t('contactMe:SUBTITLE') }} </h2>
        <h1 class="title"> {{ t('contactMe:CTA') }} </h1>
        <ContactForm/>
    </section>
</template>