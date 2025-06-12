<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { projectsList } from '../../data/projects'
    // import router from '../../router'

    const route = useRoute()

    const projectName = route.params.name as string | undefined

    const currentProject = projectsList.find(project => project.name.toLocaleLowerCase() === projectName)

</script>

<template>
    <section class="section">

        <nav>
            <router-link to="/">Accueil</router-link>
        </nav>

    <div v-if="currentProject">
        <h1>Projet : {{ currentProject.name }}</h1>
    
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
    <div v-if="currentProject.linkedSkills && currentProject.linkedSkills.length">
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
        <h2>Lien</h2>
        <a :href="currentProject.link" target="_blank" rel="noopener">
        Voir le projet en ligne
        </a>
    </div>
    </div>


    <div v-else>
        <h1>Liste des projets</h1>
        <ul>
            <li v-for="project in projectsList" :key="project.name">
            <router-link :to="`/projet/${project.name}`">
                {{ project.name }}
            </router-link>
            </li>
        </ul>
    </div>

    </section>

</template>

