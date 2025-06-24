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
            <h1 class="title"> {{ gemenyApp.name }} </h1>
            <h2 class="subtitle mb-6">
                {{t(`projects:${gemenyApp.localesName}.DESCRIPTION`)}}
            </h2>

            <div class="columns is-vcentered">
                <div class="column has-text-centered">
            <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.COMPANY_NAME`) }}</h1>
            <p>{{ t(`projects:${gemenyApp.localesName}.COMPANY_DESCRIPTION`) }}</p>
                </div>
                <div class="column">
                    <img :src="gemenyApp.images[0]" :alt="gemenyApp.name" />
                </div>
            </div>

            <div class="columns is-vcentered">
                <div class="column">
                    <img :src="gemenyApp.images[2]" :alt="gemenyApp.name" />
                </div>
                <div class="column has-text-centered">
                    <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.PRODUCT_TITLE`) }}</h1>
                    <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.PRODUCT_DESCRIPTION`) }}</h2>
                </div>
            </div>

            <p>{{ t(`projects:${gemenyApp.localesName}.INTERNSHIP_TITLE`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.INTERNSHIP_CONTEXT`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVES`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_1`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_2`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_3`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_4`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_5`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.ENVIRONMENT_TITLE`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.ENVIRONMENT_DESCRIPTION`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.DESIGN_TITLE`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.DESIGN_DESCRIPTION`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.ORGANISATION_TITLE`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.ORGANISATION_DESCRIPTION`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.STRUCTURE_TITLE`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.STRUCTURE_DESCRIPTION`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.REALISATION_TITLE`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.REALISATION_DESCRIPTION`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.DEPLOYMENT_TITLE`) }}</p>
            <p>{{ t(`projects:${gemenyApp.localesName}.DEPLOYMENT_DESCRIPTION`) }}</p>
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