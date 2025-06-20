<script setup lang="ts">
import { ref } from 'vue';
import CVjpg from '../../assets/img/common/CV-ylg.jpg';
import CVpdf from '../../assets/CV_Alternance_CDA_YLG.pdf';
import { useTranslation } from 'i18next-vue';
const { t } = useTranslation('errors');

const showZoom = ref(false);
</script>

<template>
    <div class="card">
        <div class="card-image">
        <p>{{ t('FRENCH_ONLY') }}</p>
        <figure class="image miniature" @click="showZoom = true">
            <img :src="CVjpg" alt="CV Icon" class="shadow" />
        </figure>
        </div>

        <div class="card-footer">
        <button class="card-footer-item" :href="CVpdf" target="_blank" rel="noopener">
            Open PDF
        </button>
        <button class="card-footer-item" @click="showZoom = true">
            Zoom
        </button>
        </div>
    </div>

    <!-- Modal Zoom -->
    <Teleport to="body">
    <div v-if="showZoom" class="modal is-active">
        <div class="modal-background" @click="showZoom = false"></div>
        <div class="modal-content scrollable-modal">
            <p class="image"></p>
        <img :src="CVjpg" alt="Curriculum Vitae" />
        </div>
        <button class="modal-close is-large" @click="showZoom = false" aria-label="close"></button>
    </div>
    </Teleport>
</template>

<style scoped>
.image {

    margin: auto;
    overflow: hidden;
}

.modal-content.scrollable-modal {
    max-width: 95vw;
    max-height: 95vh;
    overflow-y: auto;
    overflow-x: visible;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.modal.is-active {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-content.scrollable-modal img {
    max-width: 100%;
    height: auto;
    display: block;
} 

.scrollable-modal {
    overflow-y: auto;
    overflow-x: hidden;
    /* Masquer scrollbar pour Firefox */
    scrollbar-width: none;
    /* Masquer scrollbar pour Chrome, Edge, Safari */
    -ms-overflow-style: none;  /* IE et Edge */
}
.scrollable-modal::-webkit-scrollbar {
    display: none; /* Chrome, Safari et Opera */
}

</style>
