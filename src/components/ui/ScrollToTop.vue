<!-- src/components/ui/ScrollToTop.vue -->
<script setup>

import scrollUp from '../../assets/icons/common/icons8-slide-up-48.png';

import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 200; // Le bouton apparaît après 200px de scroll
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <transition name="fade">

        <button v-if="isVisible"
            class="scroll-to-top"
            @click="scrollToTop"  >
            
            <span class="icon is-large">
                <img :src="scrollUp" alt="scroll up" />
            </span>
        </button>
    </transition>

</template>

<style scoped>
.scroll-to-top{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
}


/* Animation fade */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.8s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}

</style>


