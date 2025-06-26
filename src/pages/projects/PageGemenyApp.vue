<script setup lang="ts">

    import { useTranslation } from 'i18next-vue'
    import { ref } from 'vue'

    import { gemenyApp } from '../../data/projects/gemenyApp'
    
    import NavBar from '../../components/layout/NavBar.vue'
    import ScrollToTop from '../../components/ui/ScrollToTop.vue'
    import MyFooter from '../../components/layout/MyFooter.vue'
    import SkillIcons from '../../components/ui/skillsIcons.vue'

    const {t} = useTranslation();

    const activeTab = ref<'gestion' | 'design' | 'code'>('gestion')


</script>

<template>
    <NavBar />

    <section class="section main-container mx-auto">

        <!-- le titre de la page -->
        <div class="hero has-text-centered ">
            <h1 class="title"> {{ gemenyApp.name }} </h1>
            <h2 class="subtitle mb-6">
                {{t(`projects:${gemenyApp.localesName}.DESCRIPTION`)}}
            </h2>
        </div>
    
        <!-- les skills -->
        <div class="block is-vcentered">
                <h1 class="title">
                    {{ t('projects:PROJECT_SKILLS') }}
                </h1>
                <div class="is-flex is-flex-wrap-wrap">
                    <div v-for="skill in gemenyApp.allLinkedSkills" :key="skill.name" class="m-4">
                        <SkillIcons :skill="skill" :hoverable="true" :desc="true"></SkillIcons>
                    </div>
                </div>
        </div>
    
        <!-- l'entreprise -->
        <div class="block columns is-vcentered">
                <div class="column">
                    <img :src="gemenyApp.images[0]" :alt="gemenyApp.name" />
                </div>
                <div class="column has-text-centered">
                    <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.COMPANY_NAME`) }}</h1>
                    <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.COMPANY_DESCRIPTION`) }}</h2>
                </div>
        </div>
    
        <!-- le produit -->
        <div class="block columns is-vcentered">
                <div class="column has-text-centered">
                    <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.PRODUCT_TITLE`) }}</h1>
                    <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.PRODUCT_DESCRIPTION`) }}</h2>
                </div>
                <div class="column">
                    <img :src="gemenyApp.images[2]" :alt="gemenyApp.name" />
                </div>
                
        </div>
    
        <!-- le projet de stage -->
        <div class="block columns is-vcentered">
            <div class="column has-text-centered">
                <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.INTERNSHIP_TITLE`) }}</h1>
                <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.INTERNSHIP_DESCRIPTION`) }}</h2>
            </div>
            <div class="column">
                <img :src="gemenyApp.images[1]" :alt="gemenyApp.name" />
            </div>
        </div>
    
        <!-- les objectifs -->
        <div class="block columns is-vcentered">
            <div class="column">
                <img :src="gemenyApp.images[3]" alt="objectifs" />
            </div>
            <div class="column has-text-justified">
                <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.OBJECTIVES`) }}</h1>
                <div class="content is-size-5">
                    <ul>
                        <li>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_1`) }} </li>
                        <li>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_2`) }} </li>
                        <li>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_3`) }} </li>
                        <li>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_4`) }} </li>
                        <li>{{ t(`projects:${gemenyApp.localesName}.OBJECTIVE_5`) }} </li>
                    </ul>
                </div>
            </div>
        </div>
    
        <!-- les tabs de sélection sur les réalisations du projet -->
        <div class="block is-vcentered">

            <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.ENVIRONMENT_TITLE`) }}</h1>
            <!-- les tabs de sélection du contenu -->
            <div class="tabs is-boxed is-fullwidth is-medium">
                <ul>
                    <li :class="{ 'is-active': activeTab === 'gestion' }">
                        <a @click="activeTab = 'gestion'"><span>Gestion</span></a>
                    </li>
                    <li :class="{ 'is-active': activeTab === 'design' }">
                        <a @click="activeTab = 'design'"><span>Design</span></a>
                    </li>
                    <li :class="{ 'is-active': activeTab === 'code' }">
                        <a @click="activeTab = 'code'"><span>Code</span></a>
                    </li>
                </ul>

            </div>
            <!-- le contenu de chaque tab -->
            <!-- gestion -->
            <div v-if="activeTab === 'gestion'" class="">
                <div class="block columns">
                    <div class="column has-text-centered">
                        <h2 class="title">{{ t(`projects:${gemenyApp.localesName}.ORGANISATION_TITLE`) }}   </h2>
                        <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.ORGANISATION_DESCRIPTION`) }}   </h2>
                    </div>
                    <div class="column is-one-fifth"></div>
                    <div class="column has-text-centered">
                        <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.DEPLOYMENT_TITLE`) }}</h1>
                        <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.DEPLOYMENT_DESCRIPTION`) }}   </h2>
                    </div>
                </div>
            </div>
            <!-- design -->
            <div v-if="activeTab === 'design'" class="">
                <div class="block columns is-vcentered">
                    <div class="column has-text-centered">
                        <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.DESIGN_TITLE`) }}</h1>
                        <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.DESIGN_DESCRIPTION`) }}   </h2>
                    </div>
                    <div class="column has-text-justified">
                        <img :src="gemenyApp.images[5]" alt="design">
                    </div>
                </div>
            </div>
            <!-- code -->
            <div v-if="activeTab === 'code'" class="">
                <div class="block columns is-vcentered">
                    <div class="column has-text-justified">
                        <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.STRUCTURE_TITLE`) }}</h1>
                        <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.STRUCTURE_DESCRIPTION`) }}   </h2>
                    </div>
                    <div class="column has-text-justified">
                        <img :src="gemenyApp.images[6]" alt="tree">
                    </div>
                </div>
                <div class="block columns is-vcentered">
                    <div class="column has-text-justified">
                        <img :src="gemenyApp.images[7]" alt="code">
                    </div>
                    <div class="column has-text-justified">
                        <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.REALISATION_TITLE`) }}</h1>
                        <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.REALISATION_DESCRIPTION`) }}   </h2>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- conclusion + CTA -->
        <div class="block is-vcentered">
            <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.CONCLUSION_TITLE`) }}</h1>
            <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.CONCLUSION_DESCRIPTION`) }}   </h2>
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