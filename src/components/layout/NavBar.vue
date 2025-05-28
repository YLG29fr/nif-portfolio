<!-- src/components/layout/NavBar.vue -->

<template>
    <nav class="navbar">
        <img :src="logo" alt="" class="logoNif">
        <ul class="nav-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="burger" @click="toggleMenu" aria-label="Ouvrir le menu" v-if="isMobile">
        <span></span>
        <span></span>
        <span></span>
        </button>
        <div class="mobile-menu" v-if="menuOpen && isMobile">
        <!-- Liens du menu mobile -->
        <a href="#home" @click="toggleMenu">Accueil</a>
        <a href="#about" @click="toggleMenu">À propos</a>
        <a href="#projects" @click="toggleMenu">Projets</a>
        <a href="#contact" @click="toggleMenu">Contact</a>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { ref, computed, onMounted, onUnmounted } from 'vue'
    import logo from '../../assets/logo.png'

    const menuOpen = ref(false)
    const width = ref(window.innerWidth)
    const isMobile = computed(() => width.value < 1024)

    function toggleMenu() {
    menuOpen.value = !menuOpen.value
    }

    function handleResize() {
    width.value = window.innerWidth
    }

    onMounted(() => window.addEventListener('resize', handleResize))
    onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>

    .logoNif {
        height: 4em;
    }

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
    @media (max-width: 1023px) {
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
    }

</style>
