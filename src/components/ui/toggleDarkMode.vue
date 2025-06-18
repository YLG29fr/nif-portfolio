<!-- src/components/ui/ToggleDarkMode.vue -->
<script setup>
    import { ref, watch } from 'vue';

    // Clé pour le localStorage
  const STORAGE_KEY = 'theme';

    // Détection de la préférence du navigateur
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
    // Fonction pour obtenir le thème sauvegardé
    function getSavedTheme() {
      return localStorage.getItem(STORAGE_KEY);
    }

    // Fonction pour enregistrer le thème
  function setStoredTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Initialisation : thème stocké ou préférence système
  const selectedTheme = ref(
    getSavedTheme() || (prefersDarkScheme.matches ? 'dark' : 'light')
  );

    // Appliquer le thème initial
    document.documentElement.setAttribute('data-theme', selectedTheme.value);

    // Mettre à jour le thème quand selectedTheme change
    watch(selectedTheme, (newTheme) => {
        document.documentElement.setAttribute('data-theme', newTheme);
        setStoredTheme(newTheme);
    });

    // Écouter les changements de préférence du système en temps réel
    prefersDarkScheme.addEventListener('change', (event) => {
      if(!getSavedTheme()){
        selectedTheme.value = event.matches ? 'dark' : 'light';
      }
    });
</script>

<template>

    <label class="switch">
        <input type="checkbox" :checked="selectedTheme === 'dark'" @change="selectedTheme = selectedTheme === 'dark' ? 'light' : 'dark'">
        <span class="slider round"></span>
    </label>


</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-sable);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--color-orange);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--color-light-purple);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-purple);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>