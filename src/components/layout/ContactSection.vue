<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import ContactForm from '../ui/ContactForm.vue';
import ContactLinks from '../ui/ContactLinks.vue';

</script>

<template>
    <section id="contact" class="section ">
        <div class="has-text-centered">
            <h2 class="subtitle"> {{ t('contactMe:CTA') }} </h2>
        </div>
        <div class="columns">

            <div class="column">
            <h1 class="title my-6"> {{ t('contactMe:FORM') }} </h1>
            <ContactForm />
        </div>
        
        <div class="column">
        <h1 class="title my-6"> {{ t('contactMe:SOCIAL_NETWORK') }} </h1>
        <ContactLinks />
    </div>
</div>

        
    </section>
</template>