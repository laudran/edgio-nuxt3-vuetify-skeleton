<template>
  <section class="banner d-flex align-center text-center">
    <LogoCyberCorsaire class="bannerLogo mx-auto" :maxHeight="imgHeight" />
  </section>
</template>
<script setup lang="ts">
  import { useDisplay } from 'vuetify/lib/framework.mjs';
  import { computed } from 'vue'

  const { name } = useDisplay()
  const imgHeight = computed((): number => {
    switch (name.value) {
      case 'xs': return 250
      case 'sm': return 350
      case 'md': return 500
      case 'lg': return 500
      case 'xl': return 800
      case 'xxl': return 1200
    }
  })
  const bannerHeight = computed(() => {
    switch (name.value) {
      case 'xs': return '300px'
      case 'sm': return '350px'
      case 'md': return '550px'
      case 'lg': return '680px'
      case 'xl': return '680px'
      case 'xxl': return '680px'
    }
  })
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: v-bind(bannerHeight);
  background: rgb(15, 8, 135);
  background: linear-gradient(0deg, rgb(25, 82, 174) 0%, rgb(59, 120, 211) 19%, rgb(174, 225, 255) 100%);

  &Logo {
    height: v-bind(imgHeight);
  }
}
</style>