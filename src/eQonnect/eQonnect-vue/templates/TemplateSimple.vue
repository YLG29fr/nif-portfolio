<script setup lang="ts">
import type { CardData } from '../../EQonnectTypes.ts'
import QRSelector from '../components/QRSelector.vue';

defineProps<{
  cardData: CardData
}>()

</script>

<template>

  <div class="simple-template" 
      :style="{ backgroundColor: cardData.color || '#f9fafb' }">

    <!-- Centré ultra-minimal -->
    <div class="simple-content">
      <!-- Avatar petit + discret -->
      <img 
        class="simple-avatar" 
        :src="cardData.avatarUrl" 
        :alt="cardData.name"
        loading="lazy"
      />
    
      <!-- Nom + titre -->
      <div class="simple-text">
        <h1 class="simple-name">{{ cardData.name }}</h1>
        <h2 class="simple-title">{{ cardData.title }}</h2>
      </div>
    
      <!-- UN SEUL bouton principal -->
      <a 
        v-if="cardData.primaryLinks?.[0]" 
        class="simple-cta"
        :href="cardData.primaryLinks[0].url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ cardData.primaryLinks[0].label }}
      </a>
      
      
      <!-- QR Codes -->
      <div class="simple-qr is-hidden-touch" v-if="cardData.qrCodeLinks?.length" id="qrCode-caller">
        <QRSelector 
        :qr-codes="cardData.qrCodeLinks"/>
      </div>
      
      <!-- Liens socials -->
      
      <div class="columns">
        <div v-for="link in cardData.socials"
          :key="link.url"
          class="column"
        >
          <a 
            class="simple-cta"
            :href="link.url" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            {{ link.label }}
          </a>
        </div>
      </div>
      <!-- Localisation discrète -->
      <div class="">
        <p v-if="cardData.location" class="simple-location ">
          {{ cardData.location }}
        </p>
      </div>
    
    </div>
  </div>

</template>

<style scoped>
.simple-template {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 32px 24px;
  gap: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.simple-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.simple-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.simple-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.simple-name {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.2;
}

.simple-title {
  font-size: 2rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
}

.simple-cta {
  display: inline-flex;
  padding: 14px 28px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: black;
  text-decoration: none;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.9375rem;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 8px;
}

.simple-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
}

.simple-location {
  font-size: 1rem;
  color: #9ca3af;
  margin: 0;
  font-weight: 400;
}
</style>
