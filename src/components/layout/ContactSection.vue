<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import ContactForm from '../ui/ContactForm.vue';
import ContactLinks from '../ui/ContactLinks.vue';

</script>

<template>
    <section id="contact" class="section ">
        <div class="has-text-centered">
            <h2 class="subtitle"> {{ t('contactMe:SUBTITLE') }} </h2>
        </div>
        
        <div class="column is-two-fifths
        is-offset-one-quarter">
        <h1 class="title my-6"> {{ t('contactMe:CTA') }} </h1>
                <ContactForm />
            </div>

        
    </section>
</template>