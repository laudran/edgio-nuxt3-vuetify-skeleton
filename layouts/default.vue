<template>
    <v-app>
        <v-app-bar app>
            <template v-slot:append>
                <v-btn @click="scrollToInfo">A propos</v-btn>

                <v-btn @click="scrollToContact">Contact</v-btn>

                <v-btn class="linkedinButton" size="small" icon target="_blank" data-type="LinkedIn" title="LinkedIn"
                    href="https://www.linkedin.com/in/jeremy-benallal/">
                    <IconsLinkedinIcon />
                </v-btn>
            </template>
        </v-app-bar>
        <v-main id="main">
            <slot />
        </v-main>
    </v-app>
</template>
<script setup lang="ts">

    function scrollToInfo() {
        const info = document.getElementById('aboutMeSection')
        if (!info) {
            return
        }
        const y = info.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ behavior: 'smooth', top: y })
    }
    function scrollToContact() {
        const info = document.getElementById('ContactSection')
        if (!info) {
            return
        }
        const y = info.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ behavior: 'smooth', top: y })
    }
</script>