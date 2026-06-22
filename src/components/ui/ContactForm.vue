<!-- src/components/ui/ContactForm.vue -->

<script setup lang="ts">

import { useTranslation } from 'i18next-vue';
const { t } = useTranslation();

import { ref, reactive } from 'vue';

import { useEmailJs } from '../../lib/useEmailJs';

const isSubmitting = ref(false);

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const { sendEmail, error, success } = useEmailJs();
async function handleSubmit() {
    if (isSubmitting.value) return;
    isSubmitting.value = true;
    await sendEmail({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
    });
    if (success.value) {
        console.info(t('contactMe:SUCCESS_MESSAGE'));
        form.name = '';
        form.email = '';
        form.subject = '';
        form.message = '';

        setTimeout(() => {
            isSubmitting.value = false;
        }, 10000);
    }
    if (error.value) {
        console.error(t('contactMe:ERROR_MESSAGE'));
    }

}

</script>

<template>

<div class="bcg-blur contactForm p-3">
    <form @submit.prevent="handleSubmit" >
        <div class="field">
            <label class="label" for="form-name">{{ t('contactMe:NAME') }}</label>
            <div class="control">
                <input class="input" id="form-name" type="text" v-model="form.name" :placeholder="t('contactMe:NAME_FILLER')" required>
            </div>
        </div>
        <div class="field">
            <label class="label" for="form-mail">{{ t('contactMe:EMAIL') }}</label>
            <div class="control">
                <input class="input" id="form-mail" type="email" v-model="form.email" :placeholder="t('contactMe:EMAIL_FILLER')" required>
            </div>
        </div>
                <div class="field">
            <label class="label" for="form-subject">{{ t('contactMe:SUBJECT') }}</label>
            <div class="control">
                <input class="input" id="form-subject" type="text" v-model="form.subject" :placeholder="t('contactMe:SUBJECT_FILLER')" required>
            </div>
        </div>
        <div class="field">
            <label class="label" for="form-message">{{ t('contactMe:MESSAGE') }}</label>
            <div class="control">
                <textarea class="textarea" id="form-message" v-model="form.message" :placeholder="t('contactMe:MESSAGE_FILLER')" rows="5" required></textarea>
            </div>
        </div>
        <div class="field">
            <div class="control mt-6">
                <button class="button is-CTA is-CTA-button" type="submit" :disabled="isSubmitting">{{ t('contactMe:SEND') }}</button>
            </div>
        </div>
        <div v-if="error">{{ t('contactMe:ERROR_MESSAGE') }}</div>
        <div v-if="success">{{ t('contactMe:SUCCESS_MESSAGE') }}</div>
    </form>
</div>
</template>

<style scoped>
    textarea{
        min-height: 3rem;
        max-height: 30rem;
    }
    .label{
        text-align: left;
    }
    .field{
        margin-bottom: 1.5rem;
    }
</style>

