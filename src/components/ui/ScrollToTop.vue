<!-- src/components/ui/ScrollToTop.vue -->
<script setup>

import scrollUp from '../../assets/icons/common/icons8-slide-up-48.png';

</script>

<template>

<a href="#" class="scroll-to-top">

        <span class="icon is-large">
            <img :src="scrollUp" alt="scroll up" />
        </span>
</a>

</template>

<style scoped>
.scroll-to-top{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
}
</style>


