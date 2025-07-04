<script setup lang="ts">
    import { ref } from 'vue';
    import CVjpg from '../../assets/img/common/CV-ylg.jpg';
    import CVjpgCropped from '../../assets/img/common/cropped-CV-ylg.jpg';
    import CVpdf from '../../assets/CV_Alternance_CDA_YLG.pdf' ;
    import { useTranslation } from 'i18next-vue';
    const { t } = useTranslation('errors');

    const showZoom = ref(false);

</script>

<template>
    <div class="card">
        <div class="card-image">
            <p class="card-header-title"> Mon C.V.</p>
            <p class="has-text-centered has-text-danger has-text-weight-bold">{{ t('FRENCH_ONLY') }}</p>
            <figure class="image miniature" @click="showZoom = true">
                <img :src="CVjpgCropped" alt="CV Icon"/>
            </figure>
            </div>

            <div class="card-footer">
                <a :href="CVpdf" class="card-footer-item" target="_blank" rel="noreferrer">
                    Open PDF
                </a>
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
        <img
            :src="CVjpg"
            alt="Curriculum Vitae"
        />
        </div>
        <button class="modal-close is-large" @click="showZoom = false" aria-label="close"></button>
    </div>
    </Teleport>

</template>

<style scoped>
.modal-content.scrollable-modal img {
    max-width: 100%;
    height: auto;
    display: block;
}

.card-footer-item {
    text-decoration: none !important;
    color: inherit !important;

}

.miniature {
  /* Le conteneur de l'image */
    /* height: 50vw;  */
    /* max-height: 540px;        */
    border-radius: 8px 8px 0px 0px; 
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    cursor: zoom-in;
    display: flex;
    align-items: center;
    justify-content: center;
}


.image {
    margin: auto;
    overflow: hidden;
}

.modal-content.scrollable-modal {
    width: 80%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: visible;
    display: flex;
    align-items: flex-start;
}
.modal.is-active {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scrollable-modal {
    overflow-y: auto;
    overflow-x: hidden;
    /* Masquer scrollbar pour Firefox */
    scrollbar-width: thin;
    /* Masquer scrollbar pour Chrome, Edge, Safari */
    -ms-overflow-style: thin;
}
.scrollable-modal::-webkit-scrollbar {
    display: thin; 
    /* Chrome, Safari et Opera */
}

</style>
