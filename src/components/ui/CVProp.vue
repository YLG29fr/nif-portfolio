<script setup lang="ts">
    import CVjpg from '../../assets/img/common/CV-ylg.jpg';
    import CVpdf from '../../assets/CV_Alternance_CDA_YLG.pdf';
</script>

<template>

    <div class="has-text-centered">
        <a :href="CVpdf" target="_blank" rel="noopener">
            <figure class="image">
                <img :src="CVjpg" alt="Curriculum Vitae" class="shadow"/>
            </figure>
        </a>
    </div>

</template>