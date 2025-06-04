<!-- src/components/ui/ContactForm.vue -->
<template>

    <form @submit.prevent="handleSubmit">
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
            <div class="control" id="form-message">
                <textarea class="textarea" v-model="form.message" :placeholder="t('contactMe:MESSAGE_FILLER')" rows="5" required></textarea>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-link" type="submit">{{ t('contactMe:SEND') }}</button>
            </div>
        </div>
        <div v-if="error">{{ t('contactMe:ERROR_MESSAGE') }}</div>
        <div v-if="success">{{ t('contactMe:SUCCESS_MESSAGE') }}</div>
    </form>
</template>

<script setup lang="ts">

import { useTranslation } from 'i18next-vue';
const { t } = useTranslation();

import { reactive } from 'vue';

import { useEmailJs } from '../../lib/useEmailJs';

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const { sendEmail, error, success } = useEmailJs();
async function handleSubmit() {
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
}
if (error.value) {
    console.error(t('contactMe:ERROR_MESSAGE'));
}

}

</script>
