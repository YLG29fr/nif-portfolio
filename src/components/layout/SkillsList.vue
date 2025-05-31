<!-- src/components/layout/SkillsList.vue -->

<script setup lang="ts">
    import skillCard from '../ui/skillCard.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import { skillsListByType } from '../../data/skills';
import SkillsIcons from '../ui/skillsIcons.vue';

</script>

<template>
  <h1 class="title" id="skills">{{ t('common:SKILLS_TITLE') }}</h1>
  <section>
    <h1>{{ t('common:SKILLS_FRONTEND_TITLE') }}</h1>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="skill in skillsListByType.frontend" :key="skill.name">
        <skillsIcons :skill="skill"></skillsIcons>
      </div>
    </div>
  </section>
  <section>
    <h1>{{ t('common:SKILLS_BACKEND_TITLE') }}</h1>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="skill in skillsListByType.backend" :key="skill.name">
        <skillCard :skill="skill"></skillCard>
      </div>
    </div>
  </section>
    <section>
    <h1>{{ t('common:SKILLS_OTHER_TITLE') }}</h1>
    <div class="is-flex is-flex-wrap-wrap">
      <div class="m-4" v-for="skill in skillsListByType.other" :key="skill.name">
        <skillsIcons :skill="skill"></skillsIcons>
      </div>
    </div>
  </section>
</template>


