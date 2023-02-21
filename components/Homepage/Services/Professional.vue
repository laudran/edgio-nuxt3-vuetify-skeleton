<template>
    <v-row no-gutters>
        <v-col md="10" offset-md="1">
            <v-card flat class="professionalServices">
                <v-card-text>
                    <v-row align="start" no-gutters class="professionalServicesDescription">
                        <v-col cols="12" sm="12" md="5" class="text-center professionalServicesDescriptionAvatar">
                            <v-avatar :size="imgHeight" image="@/assets/sopraSteria.jpg" />
                        </v-col>
                        <v-col cols="12" sm="12" md="7">
                            <v-card class="bg-primary" flat dark color="white">
                                <v-card-title class="professionalServicesDescriptionTitle" color="white">Services
                                    disponibles aux entreprises :
                                </v-card-title>
                                <v-card-text class="professionalServicesDescriptionItem"
                                    v-for="(item, index) in serviceList" :key="index">
                                    {{ item.title }}
                                </v-card-text>
                                <v-card-actions class="professionalServicesDescriptionNote">
                                    Pour toute autre demande n'hésitez pas à me contacter.
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row align="center" no-gutters class="">
                        <v-col cols="12" md="8" offset-md="2" class="text-center">
                            <p class="text-h4 font-weight-bold professionalServicesReferenceTitle">ILS M'ONT FAIT
                                CONFIANCE</p>
                        </v-col>
                    </v-row>
                    <Sheets />
                    <v-item-group selected-class="bg-primary" class="professionalServicesReferenceItems">
                        <v-container>
                            <v-row class="flex-child">
                                <v-col v-for="(item, index) in references" :key="index">

                                    <v-card class="d-flex align-center bg-primary" dark height="80">
                                        <component :is="item"></component>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-item-group>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { computed } from 'vue';
import InetumIcon from '@/components/Logo/Inetum.vue';
import ArmyIcon from '@/components/Logo/Army.vue';
import AuchanIcon from '@/components/Logo/Auchan.vue';
import BlanchePorteIcon from '@/components/Logo/BlanchePorte.vue';

const references = [
    InetumIcon,
    ArmyIcon,
    AuchanIcon,
    BlanchePorteIcon
]

const serviceList = [
    {
        title: 'Conseil ou assistance équipe de sécurité informatique.',
        id: 1
    },
    {
        title: 'Conseil ou assistance remédiation suite à un incident de sécurité informatique.',
        id: 2
    },
    {
        title: 'Conseil ou assistance projet de sécurité informatique.',
        id: 3
    },
    {
        title: "Test d'intrusion avec présentation des résultats et recommandations de correction. Possibilité d'accompagnement sur les remédiations.",
        id: 4
    },
]
const { name } = useDisplay()
const imgHeight = computed(() => {
    switch (name.value) {
        case 'xs': return 200
        case 'sm': return 216
        case 'md': return 232
        case 'lg': return 232
        case 'xl': return 232
        case 'xxl': return 232
    }
})

const avatarMargin = computed(() => {
    return 'xs' === name.value || 'sm' === name.value ? '0 0 2rem 0' : 'auto'
})

</script>

<style scoped lang="scss">
.professionalServices {
    background-color: inherit;
    color: white;

    .body-1 {
        font-size: 1rem;
        color: white;
    }

    &Description {
        margin: 2rem 0;

        &Title {
            padding: 0.275rem;
            color: white;
            text-overflow: clip;
            white-space: pre-wrap;
        }

        &Item {
            padding: 0.275rem;
            color: white;
        }

        &Note {
            padding: 0.275rem;
            margin-top: 1.25rem;
            color: white;
        }

        &Avatar {
            margin: v-bind(avatarMargin);
        }
    }

    &Reference {
        &Title {
            // font-size: ;
            word-wrap: normal;
            margin-bottom: 2rem;
        }
    }
}
</style>