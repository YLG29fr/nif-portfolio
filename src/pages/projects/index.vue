<script setup lang="ts">
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import NavBar from '../../components/layout/NavBar.vue'
    import { projectsList } from '../../data/projects'
    import { useTranslation } from 'i18next-vue'

    const {t} = useTranslation()

    const route = useRoute()

    const projectName = computed(
        () => (route.params.name as string)?.toLocaleLowerCase()
    )

    const currentProject = computed(
        () => projectsList.find(
            project => project.name.toLocaleLowerCase() === projectName.value)
        )

</script>

<template>
    <section class="section main-container mx-auto">

        <NavBar>
            <router-link to="/">{{ t('navBar:BACK_TO_HOME') }}</router-link>
        </NavBar>

    <div v-if="currentProject">
        <h1 class="title"> {{ currentProject.name }}</h1>

    
        <!-- Images -->
        <div v-if="currentProject.images && currentProject.images.length">
        
                <img
                v-for="(img, idx) in currentProject.images"
                :key="idx"
                :src="img"
                :alt="`${idx + 1} du projet ${currentProject.name}`"
                style="max-width: 200px; margin: 0 10px 10px 0;"
                />
        </div>
    
    <!-- Compétences -->
    <div v-if="currentProject.linkedSkills && currentProject.linkedSkills.length"   
     style="height: 50rem;">
        <h2>Compétences</h2>
        <ul>
        <li v-for="skill in currentProject.linkedSkills" :key="skill.name">
            <img :src="skill.icon" :alt="skill.name" style="width: 24px; height: 24px; vertical-align: middle;" />
            {{ skill.name }}
        </li>
        </ul>
    </div>
    
    <!-- Lien -->
    <div v-if="currentProject.link">
        <a :href="currentProject.link" target="_blank" rel="noopener">
        Voir le projet en ligne
        </a>
    </div>
    </div>


    <div v-else>
        <h1>Liste des projets</h1>
        <ul>
            <li v-for="project in projectsList" :key="project.name">
            <router-link :to="`/projet/${project.name.toLowerCase()}`">
                {{ project.name }}
            </router-link>
            </li>
        </ul>
    </div>

    </section>

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