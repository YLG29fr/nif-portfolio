<script setup lang="ts">
import { ref, computed } from 'vue';
import i18next, { changeLanguage } from 'i18next';

    const currentLang = ref(i18next.language);
    i18next.on('languageChanged', (lng) => {
        currentLang.value = lng
    });

    const nextLang = computed(() => currentLang.value === 'fr' ? 'en' : 'fr')

    function changeLang() {
        changeLanguage(nextLang.value);
    }
</script>
<template>
    <button class="button" @click="changeLang">
        <strong> {{ currentLang.toUpperCase() }} </strong>
    </button>
</template>