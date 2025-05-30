<!-- src/components/layout/SkillsList.vue -->

<script setup lang="ts">
    import skillCard from '../ui/skillCard.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import { skillsList } from '../../data/skills/index'

</script>

<template>
  <section>
    <h1>{{ t('common:SKILLS_TITLE') }}</h1>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="skill in skillsList" :key="skill.name">
        <skillCard :skill="skill"></skillCard>
      </div>
    </div>
  </section>
</template>


