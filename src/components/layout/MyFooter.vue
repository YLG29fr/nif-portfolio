<script setup lang="ts">
    import { useTranslation } from 'i18next-vue';
    const { t } = useTranslation();

</script>

<template>
    <footer class="footer">
        <div class=" mx-6 is-flex is-justify-content-center">
            
            <div>
                <p> ©<strong>Yoann Le Goff {{ new Date().getFullYear() }}</strong> - {{ t('common:FOOTER_TEXT') }}</p>
                <div class="is-flex is-justify-content-space-evenly">
                    <a href="" class=""> {{ t('common:FOOTER_LEGAL_TEXT') }}</a> - <a href="" class=""> {{ t('common:FOOTER_SITE_PLAN') }} </a>
                </div>
            </div>
        
        </div>
    </footer>
</template>

<style scoped>

  /* Pour le dark mode */
:root[data-theme="dark"] .footer {
    background: linear-gradient(180deg, var(--color-grey) 0%, var(--color-purple-transparent) 100%) ;
}

/* Pour le light mode */
:root[data-theme="light"] .footer {
    background: linear-gradient(180deg, var(--color-dutch-white) 0%, var(--color-orange-transparent) 100%);
    border-bottom: 1px solid var(--color-orange);
}

</style>