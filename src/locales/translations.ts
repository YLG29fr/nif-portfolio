import fr from './fr';
import en from './en';

export default {
  fr,en
};


//! Les variables présentes d'une langue à une autre doivent être similaire au moins en terme de structure et de nommage.

// Pour utiliser les traductions dans un composant :

// import { useTranslation } from 'i18next-vue';
// const { t } = useTranslation();
// t('key');
// key étant ici la variable contenant la traduction

// Exemple sur un label avec une key complète.
// label={t('common:HOME_BUTTON')}

// Également possible de passer paramètre à l'initialisation de la traduction dans le composant :
// const { t } = useTranslation('errors');
// label={t('UNKNOWN_ERROR')}

// Usage typique dans un composant Vue :
// <script setup lang="ts">
// import { useTranslation } from 'i18next-vue'
// const { t } = useTranslation()
// const title = t('title')
// const msg = t('msg')
// </script>

// <template> ... </template>
