<script setup lang="ts">

    import { useTranslation } from 'i18next-vue'

    import { projectsList } from '../../data/projects'
    
    import NavBar from '../../components/layout/NavBar.vue'
    import ScrollToTop from '../../components/ui/ScrollToTop.vue'
    import SkillIcons from '../../components/ui/skillsIcons.vue'
    import MyFooter from '../../components/layout/MyFooter.vue'
    import SeparatorProp from '../../components/ui/SeparatorProp.vue'

    const {t} = useTranslation()


</script>

<template>
    <div class="main-container">
        
    
    <section class="section mx-auto">

        <NavBar />
        

    <!-- Affiche la liste des projets -->
    <h1 class="title has-text-centered"> {{ t('common:PROJECTS_LIST') }}</h1>
    
    <ul>
        <li v-for="project in projectsList" :key="project.name">
            <SeparatorProp color="var(--color-purple)"/>
            <div class="is-justify-content-center">
                
                <!-- Nom du projet -->
                <div class="">
                    <h1 class="title has-text-centered m-2"> {{ project.name }} </h1>
                    <h2 class="subtitle has-text-centered"> {{t(`projects:${project.localesName}.CARD_DESCRIPTION`)}}</h2>
                </div>
            
                <!-- Images -->
                <div v-if="project.images" class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly m-6">
                
                    <!-- Affiche les 3 premières images de chaque projet -->
                        <img
                        v-for="(img, idx) in project.images.slice(0, 3)" 
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
    </ul>
    
<SeparatorProp color="var(--color-purple)"/>
</section>
    <ScrollToTop />
    <MyFooter/>
</div>
</template>

<style scoped>

    .level{
        max-width: 1000px;
    }
    /* décollement du header */
    .section{
        max-width: 1600px;
        padding-top: 10em;
    }

    /* overwrite couleur de fond du mode light BULMA */
    [data-theme="light"] 

    body {
        background: var(--bulma-body-background-color) !important;
    }
</style>