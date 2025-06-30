<script setup lang="ts">

    import foxImg from '../assets/img/common/404-fox.png';

    import NavBar from '../components/layout/NavBar.vue';

    import router from '../router';
    import { useTranslation } from 'i18next-vue';
    const { t } = useTranslation();
</script>

<template>
    <NavBar />
    <section class="section has-text-centered">

        <div class="title">
            <p>{{ t('errors:PAGE_NOT_FOUND_TITLE') }}</p>
        </div>
        <div> 
            
                <img :src="foxImg" alt="icone renard" class="fox-image"  @click="router.go(-1)"/>
            
        </div>
        <div class="subtitle">
            <p class="m-5">{{ t('errors:PAGE_NOT_FOUND_TEXT') }}</p>
            <p>{{ t('errors:PAGE_NOT_FOUND_HOME') }}</p>

        </div>
    </section>
</template>

<style scoped>

    /* décollement du header */
.section{
    padding-top: 10em;
}

.fox-image{
    cursor : pointer;
}

</style>