<script setup lang="ts">

    import { useTranslation } from 'i18next-vue'

    import { gemenyApp } from '../../data/projects/gemenyApp'
    
    import NavBar from '../../components/layout/NavBar.vue'
    import ScrollToTop from '../../components/ui/ScrollToTop.vue'
    import MyFooter from '../../components/layout/MyFooter.vue'
    import SkillIcons from '../../components/ui/skillsIcons.vue'

    const {t} = useTranslation()


</script>

<template>
    <NavBar />

    <section class="section main-container mx-auto">
            <h1 class="title"> {{ gemenyApp.name }}</h1>
            
    </section>

    <ScrollToTop />
    <MyFooter />
</template>

<style scoped>
    .main-container{
        max-width: 1600px;
    }

    /* décollement du header */
.section{
    padding-top: 10em;
}
</style>