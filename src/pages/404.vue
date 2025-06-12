<script setup lang="ts">

    import foxImg from '../assets/img/common/404-fox.png';

    import { useTranslation } from 'i18next-vue';
    const { t } = useTranslation();
</script>

<template>
    <section class="section">

        <div>
            <!-- OOPSIE, a 404 error got through the website ! -->
            OUPS, une erreur 404 s'est immiscé sur le site !
            <p>{{ t('errors:404_TEXT') }}</p>
        </div>
        <div> 
            <router-link to="/">
                <img :src="foxImg" alt="icone renard" />
            </router-link>
        </div>
        <div>
            <!-- Follow the fox to get back home -->
            <!-- Suivez le renard pour revenir à l'accueil -->
            <p>{{ t('errors:404_HOME') }}</p>
        </div>
    </section>
</template>