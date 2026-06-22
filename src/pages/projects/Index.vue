<script setup lang="ts">

    import { useTranslation } from 'i18next-vue'
    import { computed } from 'vue'

    import { projectsList } from '../../data/projects'
    import { useThemedSvgBackground } from '../../lib/useThemedBackground';
    
    import NavBar from '../../components/layout/NavBar.vue'
    import ScrollToTop from '../../components/ui/ScrollToTop.vue'
    import SkillIcons from '../../components/ui/SkillsIcons.vue'
    import MyFooter from '../../components/layout/Footer.vue'
    import SeparatorProp from '../../components/ui/SeparatorProp.vue'
    import ImageZoom from '../../components/ui/ImageZoom.vue';

    import backgroundSVGDark from '../../assets/background/dark/endless-constellation.svg?raw';
    import backgroundSVGLight from '../../assets/background/light/endless-constellation.svg?raw';

    const {t} = useTranslation()

    const backgroundSVG = useThemedSvgBackground(backgroundSVGLight, backgroundSVGDark);
    const background = computed(() => ( backgroundSVG.value ));

</script>

<template>
<div :style="background">
    <div class="main-container">        
    
        <section class="section mx-auto">

            <NavBar />
            

        <!-- Entête -->
        <div class="m-4">
            <h1 class="title has-text-centered is-size-1 project-hero"> {{ t('projects:PROJECTS_INDEX') }}</h1>
        </div>
        
                <SeparatorProp margin="3em"/>
        <!-- Section liste généré pour chaque projet -->
        <ul>
            <li v-for="project in projectsList" :key="project.name">
                <div class="is-justify-content-center box ">
                    
                    <!-- Nom du projet -->
                    <div class="">
                        <h1 class="title has-text-centered m-2"> {{ project.name }} </h1>
                        <h2 class="subtitle has-text-centered"> {{t(`projects:${project.localesName}.CARD_DESCRIPTION`)}}</h2>
                    </div>
                
                    
                    <!-- Images desktop -->
                    <div v-if="project.images" class="is-hidden-mobile is-flex is-flex-wrap-wrap is-justify-content-space-evenly m-6">
                    
                        <!-- Affiche les 3 premières images de chaque projet -->
                            <div
                            v-for="(img, idx) in project.images.slice(0, 3)" 
                            >
                            <ImageZoom :src="img" size="20rem" :alt="`screen ${idx + 1} projet ${project.name}`" />
                            </div>
                            
                    </div>
                    
                    <!-- Images mobile -->
                    <div v-if="project.images" class="is-hidden-desktop is-flex is-flex-wrap-wrap is-justify-content-space-evenly m-2">
                    
                        <!-- Affiche les 3 premières images de chaque projet -->
                            <img
                            v-for="(img, idx) in project.images.slice(0, 3)" 
                            :key="idx"
                            :src="img"
                            :alt="`screen ${idx + 1} projet ${project.name}`"
                            style="max-width: 60%;"
                            class="m-2"
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
                    <div class="is-flex is-flex-wrap-wrap is-justify-content-center mt-6  ">

                        <router-link :to="`/projet/${project.name.toLowerCase()}`" rel="noopener" class="">
                            <button v-if="project.presentation" class="button is-success is-CTA is-CTA-button m-3 ">
                                {{ t('projects:PROJECT_PRESENTATION') }}
                            </button>
                        </router-link>
                    
                        <a v-if='project.link' class="button is-link is-CTA is-CTA-button m-3" :href="project.link">
                            {{ t('projects:PROJECT_LINK') }}
                        </a>
                    
                    </div>

                </div>
                <SeparatorProp color="var(--color-orange)" color-dark="var(--color-purple)"/>

            </li>
        </ul>
        
        </section>
            <ScrollToTop />
            <MyFooter/>
    </div>
</div>
</template>

<style scoped>

[data-theme="dark"] .box{
    background-color: #5f5e5e51;
}
[data-theme="light"] .box{
    background-color: var(--color-white-transparent);
}

    .level{
        max-width: 1000px;
    }
    /* décollement du header */
    .section{
        max-width: 1600px;
        padding-top: 10em;
    }

    .project-hero::before{
        content:"";
        position: absolute;
        width: 100%;
        height: 6rem;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.3;
    }

    @media screen and (max-width: 560px) {
        .project-hero::before{
            height: 8.5rem;
        }
    }

    [data-theme="dark"] .project-hero::before{
        background-color: var(--color-purple);
    }
    [data-theme="light"] .project-hero::before{
        background-color: var(--color-orange-transparent);
    }
</style>