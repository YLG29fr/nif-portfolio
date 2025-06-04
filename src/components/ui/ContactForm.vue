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
    </form>
</template>

<script setup lang="ts">

import { useTranslation } from 'i18next-vue';
const { t } = useTranslation();

import { reactive } from 'vue';

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

function handleSubmit() {
    console.log('Formulaire envoyé', form);
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
}

</script>
