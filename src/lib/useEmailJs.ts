// src/composables/useEmailJs.ts
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const SERVICE_ID = serviceId
const TEMPLATE_ID = templateId
const PUBLIC_KEY = publicKey

export function useEmailJs() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  async function sendEmail(variables: Record<string, any>) {
    loading.value = true
    error.value = null
    success.value = false
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, variables, { publicKey: PUBLIC_KEY })
      success.value = true
    } catch (err: any) {
      error.value = err?.text ?? 'Erreur inconnue'
    } finally {
      loading.value = false
    }
  }

  return {
    sendEmail,
    loading,
    error,
    success,
  }
}
