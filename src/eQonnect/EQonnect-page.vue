<script setup lang="ts">

import type { CardData } from '../eQonnect/EQonnectTypes.ts'
import CardTemplate from './eQonnect-vue/CardTemplate.vue';

//! import temporaire, voir plus tard ajustement appel de data
import SimpleDataJSON from '../eQonnect/eQonnect-data/simple/userCardData.json';
const Simple = SimpleDataJSON as CardData

// import ProDataJSON from '../eQonnect/eQonnect-data/pro/userCardData.json';
// const Pro = ProDataJSON as CardData

// import HexagonDataJSON from '../eQonnect/eQonnect-data/hexagon/userCardData.json';
// const Hexagon = HexagonDataJSON as CardData

</script>

<template>

    <!-- <h1 class="title has-text-centered">eQonnect POC</h1>

    <section>
        <h2 class="subtitle has-text-centered">Simple template</h2>
        <CardTemplate :card-data="Simple"/>
        <br>
        <h2 class="subtitle has-text-centered">Pro template</h2>
        <CardTemplate :card-data="Pro"/>
        <br>
        <h2 class="subtitle has-text-centered">Hexagon*</h2>
        <CardTemplate :card-data="Hexagon"/>
    </section> -->

    <section class="">
        <CardTemplate :card-data="Simple"/>
    </section>

</template>

<style scoped>

</style>