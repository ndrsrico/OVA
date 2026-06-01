<template>
  <div class="d-flex align-center justify-center fill-height bg-black text-white font-serif">
    <v-progress-circular color="gold" indeterminate size="64"></v-progress-circular>
    <div class="ml-4">Redireccionando al Temario...</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.replace('/Temario')
})
</script>