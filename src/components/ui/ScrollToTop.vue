<!-- src/components/ui/ScrollToTop.vue -->
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
    right: 16px;
    z-index: 9999;
}
</style>

<script setup>

import scrollUp from '../../assets/icons/common/scroll-up-48.png';

</script>
