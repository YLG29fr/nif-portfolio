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
            <h1 class="title"> {{ gemenyApp.name }}  -- <u>page WIP </u></h1>
            <h2 class="subtitle">
                {{t(`projects:${gemenyApp.localesName}.CARD_DESCRIPTION`)}}
            </h2>

            <div>
                {{ t('projects:PROJECT_SKILLS') }}
                <div class="is-flex is-flex-wrap-wrap">
                    <div v-for="skill in gemenyApp.allLinkedSkills" :key="skill.name" class="m-4">
                        <SkillIcons :skill="skill" :hoverable="true" :desc="true"></SkillIcons>
                    </div>
                </div>
            </div>
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