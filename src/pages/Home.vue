<script setup lang="ts">

    import SeparatorProp from '../components/ui/SeparatorProp.vue';

    import NavBar from '../components/layout/NavBar.vue'
    import HeroBanner from '../components/layout/HeroBanner.vue'
    import AboutMe from '../components/layout/AboutMe.vue'
    import SkillsList from '../components/layout/SkillsList.vue';
    import ProjectsSection from '../components/layout/ProjectsSection.vue';
    import ContactSection from '../components/layout/ContactSection.vue';
    import ScrollToTop from '../components/ui/ScrollToTop.vue';
    import MyFooter from '../components/layout/MyFooter.vue';

</script>


<template>

    <NavBar />
    <div class="main-container mx-auto">
        <HeroBanner />
        <AboutMe />
        <SkillsList />
            <SeparatorProp />
        <ProjectsSection />
        <ContactSection />
        <ScrollToTop />
    </div>
    <MyFooter />

</template>

<style scoped>
    .main-container{
        max-width: 1600px;
    }

</style>

