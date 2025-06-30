<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import ContactForm from '../ui/ContactForm.vue';
    import ContactLinks from '../ui/ContactLinks.vue';

</script>

<template>
    <section id="contact" class="section ">
        <div class="container ">

            <div class="has-text-centered bcg-blur">
                <h2 class="title mb-5"> {{ t('contactMe:CTA') }} </h2>
            </div>
            <div class="columns is-centered is-multiline">
                <div class="column is-one-third has-text-centered is-offset-one-quarter">
                    <h1 class="title "> {{ t('contactMe:FORM') }} </h1>
                    <ContactForm />
                </div>
                <div class="column is-one-quarter has-text-centered ">
                    <h1 class="title bcg-blur"> {{ t('contactMe:SOCIAL_NETWORK') }} </h1>
                    <ContactLinks />
                </div>
            </div>
        </div>

        
    </section>
</template>

<style scoped>
[data-theme="light"]
    .bcg-blur{
        background-color: var(--color-white-transparent);
    }
</style>