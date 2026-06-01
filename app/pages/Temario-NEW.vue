<template>
  <v-app>
    <v-app-bar app color="rgba(20, 20, 20, 0.8)" class="glass-header" theme="dark" elevation="0">
      <v-toolbar-title class="font-serif text-gold ml-4">Temario - Derechos Fundamentales</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white" to="/" prepend-icon="mdi-home" class="mr-2 hidden-sm-and-down">Inicio</v-btn>
      <v-btn variant="text" color="gold" to="/Temario" prepend-icon="mdi-book-open-variant" class="mr-2 hidden-sm-and-down">Temario</v-btn>
      <v-btn variant="outlined" color="white" to="/Creditos" prepend-icon="mdi-account-group" class="mr-4">Créditos</v-btn>
    </v-app-bar>

    <v-main class="dynamic-bg position-relative overflow-hidden">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>

      <v-container class="py-12 px-6 position-relative z-1">
        <v-row class="mb-8">
          <v-col cols="12" md="10" class="mx-auto">
            <div class="text-center mb-8">
              <h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow">ESTRUCTURA CURRICULAR</h1>
              <p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6">
                Completa cada tema en orden para desbloquear el siguiente.
              </p>
            </div>

            <div class="progress-section mb-8 pa-6 rounded-xl" style="background: rgba(212,175,55,0.08); border: 2px solid rgba(212,175,55,0.3);">
              <div class="d-flex justify-space-between align-center mb-3">
                <span class="text-body-1 font-weight-bold text-white">Progreso:</span>
                <span class="text-body-2 text-gold font-weight-bold">{{ maxTemaDesbloqueado - 1 }} / {{ temasData.length }} completados</span>
              </div>
              <v-progress-linear
                :value="((maxTemaDesbloqueado - 1) / temasData.length) * 100"
                color="success"
                background-color="rgba(255,255,255,0.1)"
                height="24"
                rounded
              ></v-progress-linear>
            </div>

            <v-divider class="mb-8 border-opacity-50" color="gold"></v-divider>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col v-for="(tema, index) in temasData" :key="tema.titulo" cols="12" sm="6" md="4">
            <v-card
              elevation="0"
              class="rounded-xl h-100 d-flex flex-column card-animation tema-card"
              :class="{
                'tema-locked': index + 1 > maxTemaDesbloqueado,
                'tema-completed': index + 1 < maxTemaDesbloqueado,
                'tema-active': index + 1 === maxTemaDesbloqueado
              }"
              :style="{ animationDelay: (index * 0.15) + 's' }"
            >
              <div
                class="state-indicator pa-5 text-center"
                :class="{
                  'state-locked': index + 1 > maxTemaDesbloqueado,
                  'state-completed': index + 1 < maxTemaDesbloqueado,
                  'state-active': index + 1 === maxTemaDesbloqueado
                }"
              >
                <v-icon
                  size="32"
                  :color="index + 1 < maxTemaDesbloqueado ? 'success' : (index + 1 === maxTemaDesbloqueado ? 'warning' : 'grey')"
                  class="mb-2"
                >
                  {{ index + 1 < maxTemaDesbloqueado ? 'mdi-check-circle' : (index + 1 === maxTemaDesbloqueado ? tema.icon : 'mdi-lock-outline') }}
                </v-icon>
                <div class="tema-badge">
                  {{ index + 1 < maxTemaDesbloqueado ? 'COMPLETADO' : (index + 1 === maxTemaDesbloqueado ? 'EN PROGRESO' : 'BLOQUEADO') }}
                </div>
              </div>

              <v-card-text class="flex-grow-1 text-center pa-6">
                <h3 class="tema-title text-h6 mb-3">{{ tema.titulo }}</h3>
                <p class="text-body-2 text-grey-lighten-2">{{ tema.descripcion }}</p>
              </v-card-text>

              <v-card-actions class="justify-center pa-4 border-top" style="border-color: rgba(212,175,55,0.2);">
                <v-btn
                  v-if="index + 1 <= maxTemaDesbloqueado"
                  :color="index + 1 < maxTemaDesbloqueado ? 'success' : 'warning'"
                  variant="flat"
                  to="/introduccion"
                  class="font-weight-bold text-uppercase"
                >
                  {{ index + 1 < maxTemaDesbloqueado ? 'Revisar' : 'Continuar' }}
                </v-btn>
                <v-btn
                  v-else
                  color="grey"
                  variant="outlined"
                  disabled
                  class="font-weight-bold text-uppercase"
                >
                  Bloqueado
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'

const maxTemaDesbloqueado = useState('maxTemaDesbloqueado', () => 1)

const temasData = [
  {
    titulo: 'Introducción y Conceptos',
    descripcion: 'Entiende qué son los derechos fundamentales y la dignidad humana',
    icon: 'mdi-book-open-variant'
  },
  {
    titulo: 'Derechos de 1ª Generación',
    descripcion: 'Libertades civiles y políticas fundamentales',
    icon: 'mdi-shield-account'
  },
  {
    titulo: 'Derechos de 2ª Generación',
    descripcion: 'Igualdad de oportunidades y justicia social',
    icon: 'mdi-scale-balance'
  },
  {
    titulo: 'Derechos de 3ª Generación',
    descripcion: 'Solidaridad, paz y medio ambiente sano',
    icon: 'mdi-dove'
  },
  {
    titulo: 'Garantías y Tutela',
    descripcion: 'Mecanismos para defender tus derechos',
    icon: 'mdi-gavel'
  }
]

onMounted(() => {
  const saved = localStorage.getItem('ovaProgress')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.maxTema) {
        maxTemaDesbloqueado.value = data.maxTema
      }
    } catch (e) {
      // ignore parse error
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.font-serif {
  font-family: 'Cinzel', serif;
  letter-spacing: 0.05em;
}

.text-gold {
  color: #D4AF37;
}

.text-glow {
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.dynamic-bg {
  background: linear-gradient(135deg, #050505 0%, #1a1a1a 50%, #050505 100%);
  background-attachment: fixed;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.shape {
  position: absolute;
  opacity: 0.03;
  border-radius: 50%;
  background: radial-gradient(circle, #D4AF37, transparent);
}

.shape-1 { width: 200px; height: 200px; top: 10%; left: 10%; animation: float 20s ease-in-out infinite; }
.shape-2 { width: 150px; height: 150px; top: 60%; right: 10%; animation: float 25s ease-in-out infinite; animation-delay: 5s; }
.shape-3 { width: 100px; height: 100px; bottom: 10%; left: 50%; animation: float 30s ease-in-out infinite; animation-delay: 10s; }
.shape-4 { width: 180px; height: 180px; top: 20%; right: 20%; animation: float 22s ease-in-out infinite; animation-delay: 8s; }
.shape-5 { width: 120px; height: 120px; bottom: 20%; right: 30%; animation: float 28s ease-in-out infinite; animation-delay: 12s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-30px) translateX(20px); }
}

.tema-card {
  background: rgba(30, 30, 30, 0.6) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.tema-card:hover:not(.tema-locked) {
  transform: translateY(-8px);
  border-color: rgba(212, 175, 55, 0.5);
  background: rgba(30, 30, 30, 0.8) !important;
}

.tema-locked {
  background: rgba(50, 50, 50, 0.8) !important;
  border: 2px solid rgba(153, 153, 153, 0.3) !important;
  opacity: 0.6;
}

.tema-completed {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(56, 142, 60, 0.1)) !important;
  border: 2px solid rgba(76, 175, 80, 0.4) !important;
}

.tema-active {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.08)) !important;
  border: 2px solid rgba(212, 175, 55, 0.5) !important;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}

.state-indicator {
  position: relative;
  z-index: 2;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.state-locked {
  background: rgba(100, 100, 100, 0.1);
}

.state-completed {
  background: rgba(76, 175, 80, 0.1);
}

.state-active {
  background: rgba(212, 175, 55, 0.1);
}

.tema-badge {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.7);
}

.tema-title {
  color: #D4AF37;
  font-family: 'Cinzel', serif;
  font-weight: 600;
}

.glass-header {
  background: rgba(20, 20, 20, 0.8) !important;
  backdrop-filter: blur(10px);
}

.progress-section {
  border-radius: 12px;
  background: rgba(212, 175, 55, 0.08) !important;
  border: 2px solid rgba(212, 175, 55, 0.3) !important;
}

@keyframes slide-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-fade-in {
  animation: slide-fade-in 0.6s ease-out;
}

.slide-fade-in-delayed {
  animation: slide-fade-in 0.6s ease-out 0.2s both;
}

@keyframes cardAnimation {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card-animation {
  animation: cardAnimation 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-fill-mode: both;
}

@media (max-width: 768px) {
  .dynamic-bg {
    background: linear-gradient(135deg, #050505 0%, #1a1a1a 100%);
  }
}
</style>
