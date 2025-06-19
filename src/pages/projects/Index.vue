<script setup lang="ts">

    import { useTranslation } from 'i18next-vue'

    import { projectsList } from '../../data/projects'
    
    import NavBar from '../../components/layout/NavBar.vue'
    import ScrollToTop from '../../components/ui/ScrollToTop.vue'
    import SkillIcons from '../../components/ui/skillsIcons.vue'
    import MyFooter from '../../components/layout/MyFooter.vue'

    const {t} = useTranslation()


</script>

<template>
    <section class="section main-container mx-auto">

        <NavBar />
        

    <!-- Affiche la liste des projets -->
    <h1 class="title has-text-centered"> {{ t('common:PROJECTS_LIST') }}</h1>
    
    <ul>
        <li v-for="project in projectsList" :key="project.name">
            <div class="section is-justify-content-center">
                
                <!-- Nom du projet -->
                <div class="m-6">
                    <h1 class="title has-text-centered m-2"> {{ project.name }} </h1>
                    <h2 class="subtitle has-text-centered"> {{t(`projects:${project.localesName}.CARD_DESCRIPTION`)}}</h2>
                </div>
            
                <!-- Images -->
                <div v-if="project.images" class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly m-6">
                
                        <img
                        v-for="(img, idx) in project.images"
                        :key="idx"
                        :src="img"
                        :alt="`screen ${idx + 1} projet ${project.name}`"
                        style="max-width: 20%;"
                        />
                
                </div>
            
                <!-- Compétences -->
                <div class="is-justify-content-center">
                    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
                        <div v-for="skill in project.allLinkedSkills" :key="skill.name" class="m-4">
                            <SkillIcons :skill="skill" :hoverable="true" :desc="true"></SkillIcons>
                        </div>
                    </div>
                </div>
                
                <!-- CTA page du projet -->
                <div class="is-flex is-justify-content-center mt-6">
                    <button v-if="project.presentation" class="button is-success">
                        <a :href="project.presentation" target="_blank" rel="noopener" class="has-text-dark">
                            {{ t('projects:PROJECT_PRESENTATION') }}
                        </a>
                    </button>
                </div>

            </div>
        </li>
        <div class="separator"></div>
    </ul>
    

    </section>
<ScrollToTop />
<MyFooter/>
</template>

<style scoped>

    .level{
        max-width: 1000px;
    }

    .main-container{
        max-width: 1600px;
    }

    /* décollement du header */
.section{
    padding-top: 10em;
}
</style>