<!-- src/components/layout/NavBar.vue -->

<script setup lang="ts">

    import { ref, computed } from 'vue';

    import {useTranslation} from 'i18next-vue'
    import i18next , { changeLanguage } from 'i18next';
    
    import logo from '../../assets/logo.png';
    
    const {t} = useTranslation('navBar');

    const isBurgerActive = ref(false);
    function toggleMenu() {
        isBurgerActive.value = !isBurgerActive.value;
    }

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

    <header>
        <nav class="navbar is-fixed-top px-6 py-2" role="navigation" aria-label="main navigation">
            <!-- Logo -->
            <div class="navbar-brand">
                <a href="#">
                    <img :src="logo" alt="" class="logoNif">
                </a>
                <!-- Bouton burger -->
                <button @click="toggleMenu" :class="{'is-active': isBurgerActive}"
                class='navbar-burger' aria-label="menu" aria-expanded="false" data-target="navbar" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <!-- Menu -->
            <div id="navbar" class="navbar-menu" :class="{'is-active': isBurgerActive}">
                <div class="navbar-start ml-6">
                    <a class="navbar-item"
                        href="#aboutMe" >
                        {{ t('navBar:ABOUT_ME_BUTTON') }}    
                    </a>
                    
                    <a class="navbar-item"
                        href="#skills" >
                        {{ t('navBar:SKILLS_BUTTON') }}  
                    </a>
                    
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link"
                            href="#projets" >
                            {{ t('navBar:PROJECTS_BUTTON') }}
                        </a>
                        
                        <div class="navbar-dropdown">
                            <a class="navbar-item"
                                href="#gemenyWeb" >
                                Interface Gemeny Web  
                            </a><a class="navbar-item"
                                href="#projet2" >
                                Projet 2 
                            </a><a class="navbar-item"
                                href="#projet3" >
                                Projet 3  
                            </a>

                        </div>
                    </div>
                </div>
                <!-- Bouton CTA -->
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button" @click="changeLang">
                                <strong>{{ t('navBar:OTHER_LANG') }}</strong>
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button">
                                <strong>{{ t('navBar:CONTACT_BUTTON') }}</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

</template>

<style scoped>

    /* .navbar, .navbar-menu, .navbar-dropdown {
        background-color: var(--color-purple);
    } */

    .logoNif {
        height: 4em;
    }

    @media (max-width: 1023px) {
        .navbar-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 1000;
            display: none;
        }
        .navbar-menu.is-active {
            display: block;
        }
    }



/* 
    .navbar {
        display: flex;
        align-items: center;
        width: 100%;
        color: var(--color-orange);
        justify-content: space-between;
        padding: 1rem;
        background: var(--color-purple);
    }
    .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .burger {
        display: none;
        flex-direction: column;
        gap: 0.3rem;
        background: none;
        border: none;
        cursor: pointer;
    }
    .burger span {
        display: block;
        width: 25px;
        height: 3px;
        background: var(--color-orange);
        border-radius: 2px;
    }

    /* Responsive styles */
    /* @media (max-width: 1023px) {
        .nav-links {
            display: none;
        }
        .burger {
            display: flex;
        }
        .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: absolute;
            top: 60px;
            right: 1rem;
            background: #fff;
            border: 1px solid #eee;
            padding: 1rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
    }

    @media (min-width: 1024px) {
        .mobile-menu {
            display: none;
        }
    }  */

</style>
