<!-- src/components/layout/NavBar.vue -->

<script setup lang="ts">

    import { ref, computed, onMounted } from 'vue';
    import {useTranslation} from 'i18next-vue'
    import i18next , { changeLanguage } from 'i18next';
    
    import { useRoute } from 'vue-router'

    import logo from '../../assets/logo.png';
    import ToggleDarkMode from '../ui/ToggleDarkMode.vue';
import router from '../../router';

    const route = useRoute()

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

    const isHomePage = computed(() => route.name === 'HomePage')

    const showNavbar = ref(false);

    onMounted(() => {
    // Décale l'affichage pour laisser le temps à la transition d'être vue
    setTimeout(() => {
        showNavbar.value = true;
    }, 100); // 100ms
    });

</script>

<template>

    <transition name="fade-navbar">
        
    <header v-if="showNavbar" class="navbar-transition-wrapper">
        <nav class="navbar  is-fixed-top px-6 py-2" role="navigation" aria-label="main navigation">
            <!-- Logo -->
            <div class="navbar-brand">

                <!-- logo sur HomePage -->
                <a href="#" id="logo" v-if="isHomePage">
                    <img :src="logo" alt="" class="logoNif">
                </a>
                <!-- logo sur autres pages - utilisation de navigation programmatique-->
                <a @click="router.go(-1)" v-else>
                    <img :src="logo" alt="" class="logoNif">
                </a>
                
                <!-- Bouton burger -->
                <button @click="toggleMenu" :class="{'is-active': isBurgerActive}"
                class='navbar-burger is-dark' aria-label="menu" aria-expanded="false" data-target="navbar" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <!-- Menu -->
            <div id="navbar" class="navbar-menu" :class="{'is-active': isBurgerActive}" >
                <div class="navbar-start ml-6" v-if="isHomePage">
                    <a class="navbar-item"
                        href="#aboutMe" >
                        {{ t('navBar:ABOUT_ME_BUTTON') }}    
                    </a>
                    
                    <a class="navbar-item"
                        href="#skills" >
                        {{ t('navBar:SKILLS_BUTTON') }}  
                    </a>
                    
                    <a class="navbar-item"
                        href="#projects" >
                        {{ t('navBar:PROJECTS_BUTTON') }}
                    </a>

                    <a class="navbar-item mr-2"
                        href="#contact" >
                        <strong>{{ t('navBar:CONTACT_BUTTON') }}</strong>
                    </a>
                </div>
                <div class="navbar-start ml-6" v-else>
                    <router-link to="/" class="navbar-item" >
                        {{ t('navBar:BACK_TO_HOME') }}
                    </router-link>
                </div>

                <!-- Bouton CTA -->
                <div class="navbar-end">
                    
                        <div class="buttons">
                            <ToggleDarkMode/>
                            <button class="button" @click="changeLang">
                                <strong>{{ t('navBar:OTHER_LANG') }}</strong>
                            </button>
                        </div>
                    
                    
                </div>
            </div>
        </nav>
    </header>
    </transition>

</template>

<style scoped>
:root .navbar {
      /* Effet glassmorphism */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
}

/* Pour le dark mode */
:root[data-theme="dark"] .navbar {
    background: linear-gradient(180deg, var(--color-purple-transparent) 90%, var(--color-orange-transparent) 100%) ;
    border-bottom: 1px solid var(--color-orange);
}

/* Pour le light mode */
:root[data-theme="light"] .navbar {
    background: linear-gradient(180deg, var(--color-light-purple-transparent) 90%, var(--color-orange-transparent) 100%);
    border-bottom: 1px solid var(--color-orange);
}

/* Transition fade-in de la navbar au chargement */
.fade-navbar-enter-active {
    transition: opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1);
}
.fade-navbar-enter-from {
    opacity: 0;
}
.fade-navbar-enter-to {
    opacity: 1;
}



/* Style de base pour la liste du dropdown */
.custom-dropdown .dropdown-list {

    list-style: none;
    margin: 0;
    padding: 0.5em 0;
}

.custom-dropdown .dropdown-link {

    white-space: nowrap;
    color: inherit;
    display: block;
    padding: 0.5em 1.5em;
    text-decoration: none;
    position: relative;
    transition: color 0.2s;

}

/* Effet hover avec ::before (soulignement animé) */
@media (min-width: 1024px) {
    .navbar-item::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0.6em; 
    width: 0;
    height: 2px;
    background: var(--color-orange); 
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
    transform: translateX(-50%);
    z-index: 2;
}

.navbar-item:hover::before,
.navbar-item:focus::before {
    width: 70%;
}
    .custom-dropdown .dropdown-link::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0.3em;
        width: 0;
        height: 2px;
        background: var(--color-orange);
        transition: width 0.3s cubic-bezier(.4,0,.2,1);
        transform: translateX(-50%);
    }
    
    .custom-dropdown .dropdown-link:hover::before,
    .custom-dropdown .dropdown-link:focus::before {
        width: 70%;
    }
    
    .custom-dropdown .dropdown-link:hover,
    .custom-dropdown .dropdown-link:focus {
        color: var(--color-orange);
        background: none;
    }
}
    
    /* Version mobile */
@media (max-width: 1023px) {
    .navbar-dropdown {
    background-color: transparent !important;
    padding-left: 1rem !important;
}
}

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

</style>
