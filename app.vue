<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import EdgioRUM from '@/edgio/rum'

  onMounted(() => {
    // Monitor real user as it gets mounted
    EdgioRUM('b41c8574-7243-45c0-9e2e-67400af1e2f8')
  })
  useHead({
    htmlAttrs: {
      lang: 'fr'
    }
  })
</script>