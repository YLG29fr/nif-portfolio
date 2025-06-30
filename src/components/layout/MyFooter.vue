<script setup lang="ts">
    import { useTranslation } from 'i18next-vue';
    const { t } = useTranslation();

</script>

<template>
    <footer class="footer ">
        <div class=" mx-6 is-flex is-justify-content-center">
            
            <div class="mt-4">
                <p> ©<strong>Yoann Le Goff {{ new Date().getFullYear() }}</strong> - {{ t('common:FOOTER_TEXT') }}</p>
                <div class="is-flex is-justify-content-space-evenly">
                    <router-link to="/legal" class="">{{ t('common:FOOTER_LEGAL_TEXT') }}</router-link>
                    -
                    <router-link to="/plan-site" class="">{{ t('common:FOOTER_SITE_PLAN') }}</router-link>
                </div>
            </div>
        
        </div>
    </footer>
</template>

<style scoped>

/* Version desktop */
@media screen and (min-width: 770px) {
    .footer {
        padding:  0%  0%  1rem 0%;
        margin-inline: 20%;
        border-radius: 50px 50px 0px 0px;
    }
}

.footer {
    position: relative;
    z-index: 1;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

  /* Pour le dark mode */
:root[data-theme="dark"] .footer {
    filter: drop-shadow(var(--color-purple) 0px -2px 2px);
    opacity: 0.6;
}

/* Pour le light mode */
:root[data-theme="light"] .footer {
    filter: drop-shadow(var(--color-orange) 0px -2px 2px);
    background: linear-gradient(180deg, var(--color-dutch-white) 0%, var(--color-orange-transparent) 100%);
    opacity: 0.9;
    
}

</style>