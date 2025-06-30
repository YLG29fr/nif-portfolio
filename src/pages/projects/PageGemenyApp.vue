<script setup lang="ts">

    import { useTranslation } from 'i18next-vue'
    import { ref } from 'vue'

    import { gemenyApp } from '../../data/projects/gemenyApp'
    
    import NavBar from '../../components/layout/NavBar.vue'
    import ScrollToTop from '../../components/ui/ScrollToTop.vue'
    import MyFooter from '../../components/layout/MyFooter.vue'
    import SkillIcons from '../../components/ui/skillsIcons.vue'
    import SeparatorProp from '../../components/ui/SeparatorProp.vue'

    const {t} = useTranslation();

    const activeTab = ref<'gestion' | 'design' | 'code'>('gestion')


</script>

<template>
    <NavBar />

    <section class="section main-container mx-auto">

        <!-- le titre de la page -->
        <div class="block hero has-text-centered ">
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
    
        <!-- soutenance + CTA -->
        <div class="block is-vcentered">
            <h1 class="title">
                {{ t(`projects:${gemenyApp.localesName}.DWWM_TITLE`) }}
            </h1>
            <h2 class="subtitle">
                {{ t(`projects:${gemenyApp.localesName}.DWWM_DESCRIPTION`) }}
            </h2>
            <div class="buttons is-centered mt-4">
                <a class="button is-success" href="/assets/Diapo-soutenance-DWWM.pdf" target="_blank" rel="noopener">
                    {{ t(`projects:${gemenyApp.localesName}.DWWM_LINK_1`) }}
                </a>
                <a class="button is-success" href="/assets/Dossier-projets-Yoann_Le_Goff.pdf" target="_blank" rel="noopener">
                    {{ t(`projects:${gemenyApp.localesName}.DWWM_LINK_2`) }}
                </a>
            </div>
        </div>

        <SeparatorProp color="#095b16"/>

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

        <SeparatorProp color="#095b16"/>

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

        <SeparatorProp color="var(--color-purple-transparent)"/>

        <!-- les objectifs -->
        <div class="block columns is-vcentered">
            <div class="column">
                <img :src="gemenyApp.images[3]" alt="objectifs" class="is-hidden-touch image"/>
                <img :src="gemenyApp.images[3]" alt="objectifs" class="is-hidden-desktop"/>
            </div>
            <div class="column has-text-justified is-two-thirds">
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

        <SeparatorProp color="var(--color-purple-transparent)"/>

        <!-- les tabs de sélection sur les réalisations du projet -->
        <h1 class="block title">{{ t(`projects:${gemenyApp.localesName}.ENVIRONMENT_TITLE`) }}</h1>
        <div class="block is-vcentered">
        
            <!-- les tabs de sélection du contenu -->
            <div class="tabs is-boxed is-fullwidth is-medium tabs-header">
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
            <div class="box tabs-content">
                <!-- gestion -->
                <div v-if="activeTab === 'gestion'" class="">
                    <div class="block columns is-vcentered">
                        <div class="column has-text-centered">
                            <h2 class="title">{{ t(`projects:${gemenyApp.localesName}.ORGANISATION_TITLE`) }}   </h2>
                            <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.ORGANISATION_DESCRIPTION`) }}   </h2>
                        
                            <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.DEPLOYMENT_TITLE`) }}</h1>
                            <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.DEPLOYMENT_DESCRIPTION`) }}   </h2>
                        </div>
                        <div class="column-separator"></div>
                        <div class="column">
                            <img :src="gemenyApp.images[5]" alt="gestion" class="kanban-img"/>
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
                        <div class="column-separator"></div>
                        <div class="column has-text-justified">
                            <img :src="gemenyApp.images[4]" alt="design" class="design-img">
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
                        <div class="column-separator"></div>
                        <div class="column has-text-justified">
                            <img :src="gemenyApp.images[6]" alt="tree">
                        </div>
                    </div>

                    <div class="block columns is-vcentered">
                        <div class="column has-text-justified">
                            <img :src="gemenyApp.images[7]" alt="code">
                        </div>
                        <div class="column-separator"></div>
                        <div class="column has-text-justified">
                            <h1 class="title">{{ t(`projects:${gemenyApp.localesName}.REALISATION_TITLE`) }}</h1>
                            <h2 class="subtitle">{{ t(`projects:${gemenyApp.localesName}.REALISATION_DESCRIPTION`) }}   </h2>
                        </div>
                    </div>
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

    .tabs-header{
        margin-bottom: 0px;
    }
    .tabs-content{
        margin-top: 0px;
        min-height: 60vh;
    }

    .image{
        max-width: 30vw;
    }

    .kanban-img{
        max-height: 400px;
    }
    .design-img{
        max-height: 400px;
    }

    /* décollement du header */
.section{
    padding-top: 10em;
}
.column-separator{
    width: 10px;
    margin-inline: 2rem;
}


[data-theme="light"] .tabs.is-boxed li.is-active a {
    background: var(--color-dutch-white);
    color: var(--color-orange);
    font-weight: 700;
    border-color: var(--color-orange);

}

[data-theme="light"] .tabs-content{
    background-color: var(--color-dutch-white);
}
</style>