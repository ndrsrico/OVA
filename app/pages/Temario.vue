<template>
  <v-app>
    <v-app-bar app color="rgba(20, 20, 20, 0.85)" class="glass-header" theme="dark" elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="gold"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-serif text-gold">Temario - Derechos Fundamentales</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white" to="/Welcome" prepend-icon="mdi-home" class="mr-2 hidden-sm-and-down">Inicio</v-btn>
      <v-btn variant="text" color="gold" to="/introduccion" prepend-icon="mdi-book-open-variant" class="mr-2 hidden-sm-and-down">Leer Temario</v-btn>
      <v-btn variant="outlined" color="white" to="/Creditos" prepend-icon="mdi-account-group" class="mr-4">Créditos</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app theme="dark" width="320" class="sidebar-glass">
      <div class="sidebar-header pa-5">
        <div class="d-flex align-center mb-3">
          <v-icon color="gold" size="28" class="mr-3">mdi-book-multiple</v-icon>
          <div>
            <div class="font-serif text-gold" style="font-size:0.9rem;letter-spacing:1px;">TEMARIO</div>
            <div class="text-caption text-grey-lighten-1">7 Módulos</div>
          </div>
        </div>
        <div class="progress-section mt-4">
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-caption text-grey-lighten-1">Progreso General</span>
            <span class="text-caption text-gold font-weight-bold">{{ Math.min(100, Math.round(((maxTemaDesbloqueado - 1) / temasData.length) * 100)) }}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: Math.min(100, ((maxTemaDesbloqueado - 1) / temasData.length * 100)) + '%' }"></div>
          </div>
          <div class="text-caption text-grey mt-1">{{ Math.min(temasData.length, maxTemaDesbloqueado - 1) }} de {{ temasData.length }} completados</div>
        </div>
      </div>
      <v-divider class="border-opacity-25"></v-divider>
      <template v-slot:append>
        <div class="pa-4">
          <v-btn block variant="tonal" color="white" to="/Welcome" prepend-icon="mdi-home" class="rounded-pill">Ir a Inicio</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="dynamic-bg position-relative overflow-hidden">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>

      <v-container fluid class="pa-8 position-relative z-1">
        <v-row class="mb-8">
          <v-col cols="12" md="8" class="mx-auto text-center">
            <h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow">TEMARIO INTERACTIVO</h1>
            <p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed">
              Explora los derechos fundamentales que protegen tu libertad y dignidad. Haz clic en cada tema para aprender más.
            </p>
            <v-divider class="mt-6 border-opacity-50" color="gold"></v-divider>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col v-for="(tema, index) in temasData" :key="index" cols="12" sm="6" md="4">
            <v-card 
              elevation="0" 
              class="rounded-xl h-100 d-flex flex-column hover-card card-animation glass-card"
              :class="{ 'locked-card': index > maxTemaDesbloqueado - 1 }"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div :class="['pa-6 text-center text-white font-weight-bold d-flex flex-column align-center justify-center position-relative border-b', { 'header-completed': index < maxTemaDesbloqueado - 1, 'header-active': index === maxTemaDesbloqueado - 1, 'header-locked': index > maxTemaDesbloqueado - 1 }]">
                <div class="tema-number">{{ String(index + 1).padStart(2, '0') }}</div>
                <v-icon v-if="index > maxTemaDesbloqueado - 1" size="48" class="mb-2 position-absolute" style="opacity: 0.3;">mdi-lock</v-icon>
                <v-icon v-else size="48" class="mb-2" :style="{ opacity: index > maxTemaDesbloqueado - 1 ? '0.2' : '1' }" color="gold">{{ tema.icon }}</v-icon>
                <div v-if="index < maxTemaDesbloqueado - 1" class="badge-completed">✓ Completado</div>
                <div v-else-if="index === maxTemaDesbloqueado - 1" class="badge-active">EN PROGRESO</div>
                <div v-else class="badge-locked">🔒 Bloqueado</div>
              </div>

              <v-card-text class="pa-6 flex-grow-1 text-white">
                <h3 class="text-h5 font-serif text-gold mb-3 line-clamp-2">
                  {{ tema.titulo }}
                </h3>
                <p class="text-body-2 text-justify text-grey-lighten-2 mb-4" style="line-height: 1.6;">
                  {{ tema.descripcion }}
                </p>
              </v-card-text>

              <v-divider class="border-opacity-50" color="white"></v-divider>

              <v-card-actions class="pa-6 bg-transparent">
                <v-btn 
                  block
                  size="large"
                  color="gold-btn"
                  class="font-weight-bold dynamic-btn"
                  :to="tema.route"
                  append-icon="mdi-arrow-right"
                  :disabled="index > maxTemaDesbloqueado - 1"
                >
                  {{ index >= 5 ? 'Explorar' : 'Explorar Tema' }}
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
import { ref, onMounted, watch } from 'vue'

const drawer = ref(false)
const maxTemaDesbloqueado = useState('maxTemaDesbloqueado', () => 1)

const temasData = [
  {
    titulo: 'Introducción y Conceptos',
    descripcion: 'Entiende qué son los derechos fundamentales y la dignidad humana',
    icon: 'mdi-book-open-variant',
    route: '/introduccion?tema=1'
  },
  {
    titulo: 'Derechos de 1ª Generación',
    descripcion: 'Libertades civiles y políticas fundamentales',
    icon: 'mdi-shield-account',
    route: '/introduccion?tema=2'
  },
  {
    titulo: 'Derechos de 2ª Generación',
    descripcion: 'Igualdad de oportunidades y justicia social integral',
    icon: 'mdi-scale-balance',
    route: '/introduccion?tema=3'
  },
  {
    titulo: 'Derechos de 3ª Generación',
    descripcion: 'Solidaridad, paz y medio ambiente sano colectivo',
    icon: 'mdi-dove',
    route: '/introduccion?tema=4'
  },
  {
    titulo: 'Garantías y Tutela',
    descripcion: 'Mecanismos para defender tus derechos de forma inmediata',
    icon: 'mdi-gavel',
    route: '/introduccion?tema=5'
  },
  {
    titulo: 'Recursos',
    descripcion: 'Accede a documentos oficiales, artículos constitucionales y organismos de protección.',
    icon: 'mdi-file-document-multiple',
    route: '/Recursos'
  },
  {
    titulo: 'Evaluación',
    descripcion: 'Pon a prueba tus conocimientos sobre los derechos fundamentales estudiados.',
    icon: 'mdi-clipboard-text',
    route: '/Evaluacion'
  }
]

onMounted(() => {
  const saved = localStorage.getItem('ovaProgress')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.maxTema) maxTemaDesbloqueado.value = data.maxTema
    } catch (e) { /* ignore */ }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.sidebar-glass {
  background: rgba(20, 20, 20, 0.8) !important;
  backdrop-filter: blur(10px);
}

.sidebar-header {
  background: rgba(212, 175, 55, 0.05);
}

.progress-track {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #D4AF37, #F0E68C);
  transition: width 0.5s ease;
  border-radius: 10px;
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

.glass-card {
  background: rgba(30, 30, 30, 0.6) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.glass-card:hover:not(.locked-card) {
  transform: translateY(-8px);
  border-color: rgba(212, 175, 55, 0.5);
  background: rgba(30, 30, 30, 0.8) !important;
}

.locked-card {
  opacity: 0.6;
}

.header-completed {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(56, 142, 60, 0.1));
}

.header-active {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1));
}

.header-locked {
  background: linear-gradient(135deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.1));
}

.tema-number {
  font-size: 2rem;
  font-weight: bold;
  color: #D4AF37;
  font-family: 'Cinzel', serif;
  margin-bottom: 8px;
}

.badge-completed,
.badge-active,
.badge-locked {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 8px;
}

.badge-completed {
  color: #4CAF50;
}

.badge-active {
  color: #D4AF37;
}

.badge-locked {
  color: #999;
}

.text-glow {
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
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
  animation: slide-fade-in 0.6s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.card-animation {
  animation: cardBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-fill-mode: both;
}

@keyframes cardBounce {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .dynamic-bg {
    background: linear-gradient(135deg, #050505 0%, #1a1a1a 100%);
  }
}
</style>
