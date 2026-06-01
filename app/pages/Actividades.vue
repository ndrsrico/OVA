<template>
  <v-app>
    <v-app-bar app color="rgba(20, 20, 20, 0.8)" class="glass-header" theme="dark" elevation="0">
      <v-toolbar-title class="font-serif text-gold ml-4">Constitución Interactiva</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white" to="/" prepend-icon="mdi-home" class="mr-2 hidden-sm-and-down">Inicio</v-btn>
      <v-btn variant="text" color="white" to="/introduccion" prepend-icon="mdi-book-open-variant" class="mr-2 hidden-sm-and-down">Temario</v-btn>
      <v-btn variant="text" color="gold" to="/Actividades" prepend-icon="mdi-controller-classic" class="mr-2 hidden-sm-and-down">Actividades</v-btn>
      <v-btn variant="outlined" color="white" to="/Creditos" prepend-icon="mdi-account-group" class="mr-4">Créditos</v-btn>
    </v-app-bar>

    <v-main class="dynamic-bg position-relative overflow-hidden">
      <!-- Elementos flotantes animados para el fondo -->
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>

      <v-container class="py-12 px-6 position-relative z-1">
        <v-row class="mb-8" v-if="!actividadesDesbloqueadas">
          <v-col cols="12" md="8" class="mx-auto text-center">
            <v-alert
              color="error"
              icon="mdi-lock"
              variant="tonal"
              class="mb-6 font-serif-italic"
            >
              ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades.
            </v-alert>
          </v-col>
        </v-row>

        <v-row class="mb-8" v-else>
          <v-col cols="12" md="10" class="mx-auto">
            <!-- Header -->
            <div class="text-center mb-8">
              <h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow">ACTIVIDADES INTERACTIVAS</h1>
              <p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6">
                Completa cada actividad para desbloquear la siguiente.
              </p>
            </div>

            <!-- Barra de progreso clara -->
            <div class="progress-section mb-8 pa-6 rounded-xl" style="background: rgba(212,175,55,0.08); border: 2px solid rgba(212,175,55,0.3);">
              <div class="d-flex justify-space-between align-center mb-3">
                <span class="text-body-1 font-weight-bold text-white">Progreso:</span>
                <span class="text-body-2 text-gold font-weight-bold">{{ progresoActividades }} / {{ listaActividades.length }} completadas</span>
              </div>
              <v-progress-linear
                :value="(progresoActividades / listaActividades.length) * 100"
                color="success"
                background-color="rgba(255,255,255,0.1)"
                height="24"
                rounded
              ></v-progress-linear>
            </div>

            <!-- Filtro -->
            <div class="d-flex justify-center mb-8 gap-2">
              <v-btn 
                v-for="tipo in ['Todas', 'Quiz', 'Analisis', 'Reflexion']"
                :key="tipo"
                @click="filtro = tipo"
                size="small"
                :color="filtro === tipo ? '#D4AF37' : 'rgba(255,255,255,0.3)'"
                :variant="filtro === tipo ? 'flat' : 'outlined'"
                class="font-weight-bold text-uppercase"
              >
                {{ tipo === 'Analisis' ? 'Análisis' : tipo }}
              </v-btn>
            </div>

            <v-divider class="mb-8 border-opacity-50" color="gold"></v-divider>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col v-for="(actividad, index) in actividadesFiltradas" :key="actividad.titulo" cols="12" sm="6" md="4">
            <v-card 
              elevation="0" 
              class="rounded-xl h-100 d-flex flex-column card-animation"
              :class="{
                'activity-locked': !actividadesDesbloqueadas || listaActividades.indexOf(actividad) > progresoActividades,
                'activity-completed': listaActividades.indexOf(actividad) < progresoActividades,
                'activity-active': listaActividades.indexOf(actividad) === progresoActividades
              }"
              :style="{ animationDelay: `${listaActividades.indexOf(actividad) * 0.15}s` }"
            >
              <!-- Estado badge -->
              <div 
                class="state-indicator pa-5 text-center"
                :class="{
                  'state-locked': !actividadesDesbloqueadas || listaActividades.indexOf(actividad) > progresoActividades,
                  'state-completed': listaActividades.indexOf(actividad) < progresoActividades,
                  'state-active': listaActividades.indexOf(actividad) === progresoActividades
                }"
              >
                <v-icon 
                  :size="56" 
                  class="mb-2"
                  :color="listaActividades.indexOf(actividad) < progresoActividades ? 'success' : listaActividades.indexOf(actividad) === progresoActividades ? 'warning' : 'grey'"
                >
                  {{ listaActividades.indexOf(actividad) < progresoActividades ? 'mdi-check-circle' : listaActividades.indexOf(actividad) === progresoActividades ? actividad.icono : 'mdi-lock-outline' }}
                </v-icon>
                <div class="text-caption font-weight-bold text-uppercase" :style="{ 
                  color: listaActividades.indexOf(actividad) < progresoActividades ? '#4CAF50' : 
                         listaActividades.indexOf(actividad) === progresoActividades ? '#D4AF37' : '#999'
                }">
                  {{ listaActividades.indexOf(actividad) < progresoActividades ? 'Completada' : listaActividades.indexOf(actividad) === progresoActividades ? 'EN PROGRESO' : 'Bloqueada' }}
                </div>
              </div>

              <v-card-text class="pa-6 flex-grow-1 text-white">
                <h3 class="text-h6 font-serif font-weight-bold mb-2" style="color: #D4AF37;">
                  {{ actividad.titulo }}
                </h3>
                <div class="mb-3 text-caption" style="color: rgba(255,255,255,0.7);">{{ actividad.tipo }}</div>
                <p class="text-body-2 text-justify" style="color: rgba(255,255,255,0.85); line-height: 1.5; margin-bottom: 1rem;">
                  {{ actividad.descripcion }}
                </p>
                
                <v-chip 
                  size="small" 
                  :color="listaActividades.indexOf(actividad) < progresoActividades ? '#4CAF50' : 
                          listaActividades.indexOf(actividad) === progresoActividades ? '#D4AF37' : '#555'"
                  text-color="white"
                  class="font-weight-bold"
                >
                  {{ actividad.meta }}
                </v-chip>
              </v-card-text>

              <v-divider class="border-opacity-25"></v-divider>

              <v-card-actions class="pa-4 bg-transparent d-flex flex-column gap-2">
                <v-btn 
                  v-if="actividadesDesbloqueadas && listaActividades.indexOf(actividad) <= progresoActividades"
                  block
                  size="small"
                  :color="listaActividades.indexOf(actividad) === progresoActividades ? 'warning' : 'success'"
                  class="font-weight-bold"
                  :href="actividad.enlace"
                  target="_blank"
                  append-icon="mdi-open-in-new"
                >
                  {{ listaActividades.indexOf(actividad) === progresoActividades ? 'Empezar Ahora' : 'Revisar' }}
                </v-btn>
                <v-btn 
                  v-if="actividadesDesbloqueadas && listaActividades.indexOf(actividad) === progresoActividades"
                  block
                  size="small"
                  color="success"
                  variant="flat"
                  prepend-icon="mdi-check-circle"
                  @click="completarActividad(listaActividades.indexOf(actividad))"
                  class="font-weight-bold pulse-btn"
                >
                  Marcar Completada
                </v-btn>
                <v-btn 
                  v-else-if="!actividadesDesbloqueadas || listaActividades.indexOf(actividad) > progresoActividades"
                  block
                  size="small"
                  variant="outlined"
                  color="grey"
                  disabled
                  prepend-icon="mdi-lock"
                >
                  Bloqueada
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" v-if="actividadesFiltradas.length === 0">
            <div class="text-center pa-8">
              <v-icon size="48" color="gold" class="mb-4">mdi-emoticon-sad-outline</v-icon>
              <h3 class="text-h6 font-serif text-white">No hay actividades en esta categoría</h3>
              <p class="text-body-2 text-grey-lighten-2">Prueba seleccionando "Todas" o revisa las actividades disponibles.</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, watch, ref, computed } from 'vue'

const actividadesDesbloqueadas = useState('actividadesDesbloqueadas', () => false)
const progresoActividades = useState('progresoActividades', () => 0)
const filtro = ref('Todas')

const TEMAS_TOTALES = 5


// ---- Sincronización con localStorage ----
onMounted(() => {
  const saved = localStorage.getItem('ovaProgress')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.actDesbloqueadas !== undefined) actividadesDesbloqueadas.value = data.actDesbloqueadas
      if (data.progresoAct !== undefined) progresoActividades.value = data.progresoAct
      // si completó todos los temas, desbloquear actividades por seguridad
      if (data.maxTema && data.maxTema > TEMAS_TOTALES) actividadesDesbloqueadas.value = true
    } catch (e) { /* ignore */ }
  }
})

const saveProgress = () => {
  const saved = localStorage.getItem('ovaProgress')
  let data = {}
  if (saved) {
    try {
      data = JSON.parse(saved)
    } catch (e) { /* ignore */ }
  }
  data.actDesbloqueadas = actividadesDesbloqueadas.value
  data.progresoAct = progresoActividades.value
  localStorage.setItem('ovaProgress', JSON.stringify(data))
}

watch([actividadesDesbloqueadas, progresoActividades], saveProgress, { deep: true })

const completarActividad = (index) => {
  if (index === progresoActividades.value) {
    progresoActividades.value++
    saveProgress()
  }
}

const listaActividades = [
  {
    plataforma: 'Actividad 1',
    tipo: 'Reflexion',
    titulo: 'Reflexión: ¿Cuáles son mis derechos?',
    descripcion: 'Realiza una reflexión personal sobre qué derechos fundamentales consideras más importantes en tu vida diaria y por qué. Escribe tus ideas en un documento.',
    meta: 'Pensamiento crítico',
    icono: 'mdi-lightbulb-on',
    colorBg: 'bg-teal-darken-2',
    enlace: 'https://www.canva.com'
  },
  {
    plataforma: 'Actividad 2',
    tipo: 'Quiz',
    titulo: 'Quiz: ¿Qué tanto sabes de derechos?',
    descripcion: 'Responde preguntas simples sobre los derechos fundamentales que aprendiste. Evalúa tu comprensión de lo estudiado en cada tema.',
    meta: 'Evaluación del aprendizaje',
    icono: 'mdi-help-circle',
    colorBg: 'bg-indigo-darken-3',
    enlace: 'https://www.google.com/forms/'
  },
  {
    plataforma: 'Actividad 3',
    tipo: 'Analisis',
    titulo: 'Análisis: Casos de la vida real',
    descripcion: 'Lee historias cortas y casos reales de la vida cotidiana. Identifica cuáles derechos fundamentales están involucrados en cada situación.',
    meta: 'Aplicación práctica',
    icono: 'mdi-file-document',
    colorBg: 'bg-deep-orange-darken-2',
    enlace: 'https://www.padlet.com'
  }
]

const actividadesFiltradas = computed(() => {
  if (filtro.value === 'Todas') return listaActividades
  if (filtro.value === 'Analisis') return listaActividades.filter(a => (a.tipo || '').toLowerCase() === 'analisis')
  return listaActividades.filter(a => (a.tipo || '').toLowerCase() === filtro.value.toLowerCase())
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.font-serif {
  font-family: 'Cinzel', serif !important;
}

.font-serif-italic {
  font-family: 'Playfair Display', serif !important;
  font-style: italic;
}

.text-gold {
  color: #D4AF37 !important;
}

.gold-btn {
  background: linear-gradient(45deg, #D4AF37, #F2D479) !important;
  color: #1a1a1a !important;
  font-weight: bold;
}

/* Glassmorphism */
.glass-header {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Estados de actividades */
.activity-locked {
  background: rgba(50, 50, 50, 0.8) !important;
  border: 2px solid rgba(153, 153, 153, 0.3) !important;
  opacity: 0.6;
}

.activity-completed {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(56, 142, 60, 0.1)) !important;
  border: 2px solid rgba(76, 175, 80, 0.4) !important;
}

.activity-active {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.08)) !important;
  border: 2px solid rgba(212, 175, 55, 0.5) !important;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}

.state-indicator {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
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

.border-b {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.text-glow {
  text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

.hover-card {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
}

.hover-card:hover:not(.locked-card) {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2) !important;
}

.activity-locked {
  pointer-events: none;
}

.locked-card {
  opacity: 0.7;
  filter: grayscale(100%);
  pointer-events: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.dynamic-btn {
  transition: all 0.3s ease;
}
.dynamic-btn:hover:not(:disabled) {
  background: linear-gradient(45deg, #F2D479, #D4AF37) !important;
  transform: scale(1.05);
}

.pulse-animation-btn {
  animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

.slide-fade-in {
  animation: slideInDown 0.8s ease-out forwards;
}

.slide-fade-in-delayed {
  opacity: 0;
  animation: slideInDown 0.8s ease-out 0.3s forwards;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-animation {
  opacity: 0;
  animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Fondo Dinámico Oscuro Elegante */
.dynamic-bg {
  background: linear-gradient(-45deg, #0a0a0a, #1a1510, #141414, #1c1814);
  background-size: 400% 400%;
  animation: gradientBG 20s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.z-1 { z-index: 1; }

.floating-shapes {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 0; pointer-events: none;
}

.shape {
  position: absolute;
  background: rgba(212, 175, 55, 0.03); 
  border: 1px solid rgba(212, 175, 55, 0.08);
  backdrop-filter: blur(3px);
  border-radius: 50%;
  animation: floatShape 20s infinite linear;
}

.shape-1 { width: 300px; height: 300px; left: -50px; top: -50px; animation-duration: 25s; }
.shape-2 { width: 500px; height: 500px; right: -100px; top: 20%; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; animation-duration: 35s; animation-direction: reverse; }
.shape-3 { width: 200px; height: 200px; left: 20%; bottom: -50px; border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; animation-duration: 30s; }
.shape-4 { width: 150px; height: 150px; right: 30%; bottom: 20%; border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; animation-duration: 20s; background: rgba(255, 255, 255, 0.02); }
.shape-5 { width: 400px; height: 400px; left: 40%; top: -100px; border-radius: 50%; animation-duration: 40s; animation-direction: reverse; }

@keyframes floatShape {
  0% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(50px) rotate(180deg) scale(1.1); }
  100% { transform: translateY(0) rotate(360deg) scale(1); }
}
</style>