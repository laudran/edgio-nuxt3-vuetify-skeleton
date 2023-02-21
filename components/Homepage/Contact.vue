<template>
    <section class="contactForm">
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" md="6" class="text-center font-weight-bold">
                    <h4 class="text-h4">Me contacter</h4>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" md="6">
                    <v-form ref="contactForm" v-model="valid" lazy-validation validate-on="blur">
                        <v-card>
                            <v-card-text>
                                <v-container>
                                    <v-row align="center" justify="center">
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="contactRequest.firstname" :rules="firstNameRules"
                                                label="Prénom" aria-label="Prénom" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="contactRequest.lastName" :rules="lastNameRules"
                                                label="Nom" aria-label="Nom" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="contactRequest.email" :rules="emailRules"
                                                label="E-mail" aria-label="Adresse email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="contactRequest.company" :rules="companyRules"
                                                aria-label="Nom de société" label="Société"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-textarea v-model="contactRequest.message" :rules="messageRules"
                                                label="Message" aria-label="Contenu du message" required></v-textarea>
                                        </v-col>
                                        <input name="_formsubmit_id" :v-model="formsubmit_id" type="text" style="display:none">
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-container>
                                    <v-row align="end" justify="end">
                                        <v-btn @click="submit">Envoyer</v-btn>
                                    </v-row>
                                </v-container>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser'
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import axios from 'axios';

import type { AxiosRequestConfig } from 'axios';

export default defineComponent({
    data() {
        return {
            lastNameRules: [
                (value: string) => !!value || 'Veuiller saisir votre nom',
                (value: string) => value.length > 2 || 'Votre nom doit faire au moins 3 caractères',
            ],
            firstNameRules: [

                (value: string) => !!value || 'Veuiller saisir votre prénom',
                (value: string) => value.length > 2 || 'Votre prénom doit faire au moins 3 caractères',
            ],
            companyRules: [
                (value: string) => '' === value || value.length > 2 || 'Veuillez saisir au moins 3 caractères',
            ],
            messageRules: [
                (value: string) => !!value || 'Veuiller saisir un message',
                (value: string) => value.length > 10 || 'Votre message doit faire plus de 10 caractères',
            ],
            emailRules: [
                (v: string) => !!v || 'Votre e-mail est obligatoire',
                (v: string) => /.+@.+/.test(v) || 'Veuillez saisir un email valide',
            ],
            valid: false,
            contactRequest: {
                firstname: '',
                lastName: '',
                company: '',
                email: '',
                message: ''
            },
            formsubmit_id: null
        }
    },
    mounted() {
        useMeta({
            script: [
                { src: 'https://smtpjs.com/v3/smtp.js', async: true, defer: true }
            ]
        })
    },
    methods: {
        submit() {

            const form = (this.$refs.contactForm as HTMLFormElement & { validate: () => boolean, reset: () => boolean })
            const submission = Object.assign({}, this.contactRequest) as any; 
            if (null !== this.formsubmit_id) {
                submission['_formsubmit_id'] = this.formsubmit_id
            }
            axios.post('https://formsubmit.io/send/steven@mym.fans', this.contactRequest)
                .then(() => {
                    // form.reset()
                    return;
                })
                .catch(() => {

                    return;
                });

            (this.$refs.contactForm as HTMLFormElement & { validate: () => boolean, reset: () => boolean }).reset()
            // const response = emailjs.send('service_j7km14b', 'contact_e6q8zcn', this.contactRequest, 'dJCFIru6QcqxqcRJs')
            //     .then(() => {
            //         
            //     })
        }
    }

})
</script>

<style scoped lang="scss">
.contactForm {
    padding: 2rem 0;
}
</style>