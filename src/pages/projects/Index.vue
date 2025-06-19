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
    <h1 class="title"> {{ t('projects:PROJECTS_LIST') }}</h1>
    
    <ul>
        <li v-for="project in projectsList" :key="project.name">
            <div class="section">
                <nav class="level">
  <p class="level-item has-text-centered">
    <a class="link is-info" 
        :href="project.name.toLocaleLowerCase()" 
        rel="noopener" target="_blank">
        {{ t('projects:PROJECT_PRESENTATION') }}
    </a>
  </p>
  <p class="level-item has-text-centered">
    <h1 class="title"> {{ project.name }} </h1>
  </p>

                    <button v-if="project.link" class="button is-primary">
                        <a :href="project.link" target="_blank" rel="noopener" class="has-text-dark">
                            {{ t('projects:PROJECT_LINK') }}
                        </a>
                    </button>

                    <button v-else class="button is-primary">
                        <router-link :to="`/projet/${project.name.toLowerCase()}`" class="has-text-dark">
                            {{ t('projects:PROJECT_LINK') }}
                        </router-link>
                    </button>

</nav>
                <h2 class="subtitle has-text-centered"> {{t(`projects:${project.localesName}.CARD_DESCRIPTION`)}}</h2>
            
                <!-- Images -->
                <div v-if="project.images">
                
                        <img
                        v-for="(img, idx) in project.images"
                        :key="idx"
                        :src="img"
                        :alt="`${idx + 1} du projet ${project.name}`"
                        style="max-width: 200px; margin: 0 10px 10px 0;"
                        />
                </div>
            
            <!-- Compétences -->
                <h1 class="title"> {{ t('projects:PROJECT_SKILLS') }}</h1>
                <div class="is-flex is-flex-wrap-wrap">
                    <div v-for="skill in project.allLinkedSkills" :key="skill.name" class="m-4">
                        <SkillIcons :skill="skill" :hoverable="true" :desc="true"></SkillIcons>
                    </div>
                </div>
                
            <!-- Lien -->
                <div v-if="project?.link">
                    <button class="button is-primary">
                        <a :href="project.link" target="_blank" rel="noopener" class="has-text-dark">
                            {{ t('projects:PROJECT_LINK') }}
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
    .main-container{
        max-width: 1600px;
    }

    /* décollement du header */
.section{
    padding-top: 10em;
}
</style>