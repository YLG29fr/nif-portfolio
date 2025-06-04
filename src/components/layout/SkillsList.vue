<!-- src/components/layout/SkillsList.vue -->

<script setup lang="ts">
    import { skillsListByType } from '../../data/skills';
    
    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();
    
    import SkillsIcons from '../ui/skillsIcons.vue';

</script>

<template>
  <section class="section" id="skills">
    <h1 class="title">{{ t('common:SKILLS_TITLE') }}</h1>

    <h1 class="is-size-4">{{ t('common:SKILLS_FRONTEND_TITLE') }}</h1>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="skill in skillsListByType.frontend" :key="skill.name">
        <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
      </div>
    </div>
  
    <h1 class="is-size-4">{{ t('common:SKILLS_BACKEND_TITLE') }}</h1>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="skill in skillsListByType.backend" :key="skill.name">
        <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
      </div>
    </div>

        <h1 class="is-size-4">{{ t('common:SKILLS_DATABASE_TITLE') }}</h1>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="skill in skillsListByType.database" :key="skill.name">
        <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
      </div>
    </div>

    <h1 class="is-size-4">{{ t('common:SKILLS_OTHER_TITLE') }}</h1>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="skill in skillsListByType.other" :key="skill.name">
        <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
      </div>
    </div>
  </section>
</template>


