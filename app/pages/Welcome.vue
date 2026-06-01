<template>
  <div class="d-flex align-center justify-center fill-height" style="background:#050505; min-height: 100vh; color: white;">
    <div class="text-center">
      <v-progress-circular color="gold" indeterminate size="64" class="mb-4"></v-progress-circular>
      <div class="font-serif text-gold text-subtitle-1">Cargando Constitución Interactiva...</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  navigateTo('/', { redirectCode: 301 })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
.font-serif {
  font-family: 'Cinzel', serif !important;
  letter-spacing: 2px;
}
.text-gold {
  color: #D4AF37 !important;
}
</style>
