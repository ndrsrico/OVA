<template>
  <v-app>
    <v-app-bar app color="rgba(20, 20, 20, 0.85)" class="glass-header" theme="dark" elevation="0">
      <v-toolbar-title class="font-serif text-gold"><v-icon class="mr-3">mdi-clipboard-text</v-icon>Evaluación General - Derechos Fundamentales</v-toolbar-title>
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

      <v-container fluid class="pa-8 position-relative z-1">
        <!-- ===== VISTA EVALUACIÓN ===== -->
        <v-row class="mb-8" v-if="!evaluacionCompletada">
          <v-col cols="12" md="8" class="mx-auto">
            <v-card elevation="0" class="rounded-xl overflow-hidden glass-card pa-6">
              <!-- Header -->
              <div class="text-center mb-8">
                <h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow">EVALUACIÓN GENERAL</h1>
                <p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6">
                  Demuestra lo que has aprendido sobre los Derechos Fundamentales
                </p>
                <v-divider class="mb-6 border-opacity-50" color="gold"></v-divider>
                
                <!-- Barra de progreso -->
                <div class="d-flex justify-space-between align-center mb-4">
                  <span class="text-caption text-grey-lighten-1">Pregunta {{ preguntaActual + 1 }} de {{ preguntas.length }}</span>
                  <span class="text-caption text-gold font-weight-bold">{{ Math.round(((preguntaActual) / preguntas.length) * 100) }}%</span>
                </div>
                <v-progress-linear
                  :value="((preguntaActual) / preguntas.length) * 100"
                  color="gold"
                  height="6"
                  rounded
                  class="mb-6"
                ></v-progress-linear>
              </div>

              <!-- Pregunta -->
              <div class="pregunta-container">
                <h2 class="text-h5 font-serif text-white mb-8">
                  {{ preguntas[preguntaActual].pregunta }}
                </h2>

                <!-- Opciones de respuesta -->
                <div class="opciones-container space-y-4">
                  <v-btn
                    v-for="(opcion, index) in preguntas[preguntaActual].opciones"
                    :key="index"
                    block
                    class="opcion-btn text-left"
                    :class="{ 'opcion-selected': respuestas[preguntaActual] === index }"
                    @click="respuestas[preguntaActual] = index"
                    variant="outlined"
                    color="gold"
                  >
                    <div class="d-flex align-center w-100">
                      <span class="opcion-letra">{{ String.fromCharCode(65 + index) }}</span>
                      <span class="ml-4">{{ opcion }}</span>
                    </div>
                  </v-btn>
                </div>
              </div>

              <!-- Botones de navegación -->
              <div class="d-flex justify-space-between mt-12">
                <v-btn
                  variant="outlined"
                  color="grey-lighten-2"
                  :disabled="preguntaActual === 0"
                  @click="preguntaActual--"
                  prepend-icon="mdi-arrow-left"
                >
                  Anterior
                </v-btn>

                <v-btn
                  v-if="preguntaActual < preguntas.length - 1"
                  color="gold"
                  size="large"
                  class="font-weight-bold"
                  @click="preguntaActual++"
                  append-icon="mdi-arrow-right"
                >
                  Siguiente
                </v-btn>

                <v-btn
                  v-else
                  color="green-darken-2"
                  size="large"
                  class="font-weight-bold"
                  @click="finalizarEvaluacion"
                  prepend-icon="mdi-check-circle"
                >
                  Finalizar Evaluación
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- ===== VISTA RESULTADOS ===== -->
        <v-row class="mb-8" v-else>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card elevation="0" class="rounded-xl overflow-hidden glass-card pa-8">
              <!-- Resultado visual -->
              <div class="text-center mb-12">
                <v-icon
                  :size="120"
                  :color="getColorResultado()"
                  class="mb-6"
                  :icon="getIconoResultado()"
                ></v-icon>

                <h1 class="text-h2 font-serif text-white mb-4" :class="'text-' + getColorResultado()">
                  {{ getCalificacion() }}
                </h1>

                <p class="text-h5 font-serif-italic text-grey-lighten-2 mb-6">
                  {{ getMensajeResultado() }}
                </p>
              </div>

              <!-- Detalles de puntuación -->
              <v-divider class="mb-8 border-opacity-50" color="gold"></v-divider>

              <div class="puntuacion-grid mb-12">
                <div class="puntuacion-item text-center">
                  <div class="puntuacion-valor text-h3 text-gold font-weight-bold">
                    {{ respuestasCorrectas }}
                  </div>
                  <div class="puntuacion-label text-body-2 text-grey-lighten-2">
                    Respuestas Correctas
                  </div>
                </div>

                <v-divider vertical></v-divider>

                <div class="puntuacion-item text-center">
                  <div class="puntuacion-valor text-h3 text-gold font-weight-bold">
                    {{ preguntas.length }}
                  </div>
                  <div class="puntuacion-label text-body-2 text-grey-lighten-2">
                    Total de Preguntas
                  </div>
                </div>

                <v-divider vertical></v-divider>

                <div class="puntuacion-item text-center">
                  <div class="puntuacion-valor text-h3 text-gold font-weight-bold">
                    {{ porcentaje }}%
                  </div>
                  <div class="puntuacion-label text-body-2 text-grey-lighten-2">
                    Porcentaje
                  </div>
                </div>

                <v-divider vertical></v-divider>

                <div class="puntuacion-item text-center">
                  <div class="puntuacion-valor text-h3 text-gold font-weight-bold">
                    {{ Math.round(respuestasCorrectas * 5) }}/{{ preguntas.length * 5 }}
                  </div>
                  <div class="puntuacion-label text-body-2 text-grey-lighten-2">
                    Puntuación
                  </div>
                </div>
              </div>

              <!-- Barra de progreso visual -->
              <div class="mb-8">
                <v-progress-linear
                  :value="porcentaje"
                  :color="getColorResultado()"
                  height="12"
                  rounded
                  class="mb-4"
                ></v-progress-linear>
              </div>

              <!-- Retroalimentación -->
              <v-alert
                :type="porcentaje >= 80 ? 'success' : porcentaje >= 60 ? 'info' : 'warning'"
                variant="tonal"
                class="mb-8"
                icon="mdi-lightbulb-on"
              >
                <div class="text-body-2">
                  <strong>Retroalimentación:</strong>
                  {{ getRetroalimentacion() }}
                </div>
              </v-alert>

              <!-- Respuestas detalladas -->
              <v-expansion-panels class="mb-8">
                <v-expansion-panel
                  v-for="(pregunta, index) in preguntas"
                  :key="index"
                  class="glass-panel"
                >
                  <template v-slot:title>
                    <div class="d-flex align-center w-100">
                      <v-icon
                        :color="respuestas[index] === pregunta.respuestaCorrecta ? 'green-accent-3' : 'red-accent-2'"
                        size="24"
                        class="mr-3"
                      >
                        {{ respuestas[index] === pregunta.respuestaCorrecta ? 'mdi-check-circle' : 'mdi-close-circle' }}
                      </v-icon>
                      <span class="text-body-2">Pregunta {{ index + 1 }}</span>
                    </div>
                  </template>
                  <template v-slot:text>
                    <div class="pa-4">
                      <p class="text-body-2 text-white mb-4"><strong>{{ pregunta.pregunta }}</strong></p>
                      <div class="mb-4">
                        <p class="text-caption text-grey-lighten-2 mb-2">Tu respuesta:</p>
                        <v-chip
                          :color="respuestas[index] === pregunta.respuestaCorrecta ? 'green' : 'red'"
                          text-color="white"
                          size="small"
                          class="mr-2"
                        >
                          {{ pregunta.opciones[respuestas[index]] }}
                        </v-chip>
                      </div>
                      <div v-if="respuestas[index] !== pregunta.respuestaCorrecta">
                        <p class="text-caption text-grey-lighten-2 mb-2">Respuesta correcta:</p>
                        <v-chip
                          color="green"
                          text-color="white"
                          size="small"
                        >
                          {{ pregunta.opciones[pregunta.respuestaCorrecta] }}
                        </v-chip>
                      </div>
                      <p class="text-caption text-grey-lighten-1 mt-4">{{ pregunta.explicacion }}</p>
                    </div>
                  </template>
                </v-expansion-panel>
              </v-expansion-panels>

              <!-- Botones finales -->
              <div class="d-flex justify-center gap-4">
                <v-btn
                  color="gold"
                  size="large"
                  class="font-weight-bold"
                  @click="reiniciarEvaluacion"
                  prepend-icon="mdi-restart"
                >
                  Intentar de Nuevo
                </v-btn>
                <v-btn
                  variant="outlined"
                  color="grey-lighten-2"
                  size="large"
                  to="/"
                  prepend-icon="mdi-home"
                >
                  Ir a Inicio
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'

const preguntaActual = ref(0)
const evaluacionCompletada = ref(false)
const respuestas = ref({})

const preguntas = [
  {
    pregunta: '¿Qué son los Derechos Fundamentales?',
    opciones: [
      'Son derechos que solo tienen las personas mayores de edad',
      'Son derechos inherentes a la dignidad humana que protegen libertades y garantías básicas',
      'Son derechos que solo existen en las ciudades',
      'Son derechos que se pueden comprar o vender'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los Derechos Fundamentales son inherentes a la dignidad humana y están reconocidos en las constituciones nacionales e internacionales. Son inviolables y protegen libertades y garantías básicas para todas las personas.'
  },
  {
    pregunta: '¿A cuántas generaciones se clasifican los Derechos Humanos?',
    opciones: [
      'Una generación',
      'Dos generaciones',
      'Tres generaciones',
      'Cuatro generaciones'
    ],
    respuestaCorrecta: 2,
    explicacion: 'Los Derechos Humanos se clasifican tradicionalmente en tres generaciones: Primera (civiles y políticos), Segunda (económicos, sociales y culturales) y Tercera (solidaridad, paz y medio ambiente).'
  },
  {
    pregunta: '¿Cuál es un ejemplo de Derecho de Primera Generación?',
    opciones: [
      'Derecho a la educación',
      'Derecho a un ambiente sano',
      'Libertad de expresión',
      'Derecho al trabajo'
    ],
    respuestaCorrecta: 2,
    explicacion: 'La Libertad de Expresión es un derecho civil y político que pertenece a la Primera Generación. Los derechos de primera generación son libertades civiles y políticas fundamentales.'
  },
  {
    pregunta: '¿Qué caracteriza a los Derechos de Segunda Generación?',
    opciones: [
      'Son derechos políticos únicamente',
      'Son derechos económicos, sociales y culturales que promueven la igualdad',
      'Son solo derechos ambientales',
      'No existen en las constituciones modernas'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los Derechos de Segunda Generación son derechos económicos, sociales y culturales que buscan garantizar la igualdad de oportunidades y condiciones de vida dignas para todas las personas.'
  },
  {
    pregunta: '¿Cuál es un Derecho de Tercera Generación?',
    opciones: [
      'Derecho a la libertad',
      'Derecho al trabajo',
      'Derecho a un ambiente sano y equilibrado',
      'Derecho a la propiedad'
    ],
    respuestaCorrecta: 2,
    explicacion: 'El Derecho a un ambiente sano y equilibrado es un Derecho de Tercera Generación. Estos derechos se centran en la solidaridad, la paz y el bienestar colectivo.'
  },
  {
    pregunta: '¿Qué es la Acción de Tutela?',
    opciones: [
      'Un castigo judicial',
      'Un mecanismo legal para proteger derechos fundamentales de forma inmediata',
      'Una sanción económica',
      'Un permiso para viajar'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La Acción de Tutela es un mecanismo constitucional que permite a cualquier persona defender sus derechos fundamentales de forma rápida e inmediata cuando se sienten vulnerados.'
  },
  {
    pregunta: '¿Cuál es el órgano máximo de protección de Derechos Humanos en Colombia?',
    opciones: [
      'El Ministerio de Educación',
      'La Corte Constitucional',
      'La Gobernación',
      'El Banco de la República'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La Corte Constitucional es el órgano máximo de protección de derechos fundamentales en Colombia. Tiene la competencia de revisar las acciones de tutela y resolver conflictos constitucionales.'
  },
  {
    pregunta: '¿Quiénes son titulares de Derechos Fundamentales?',
    opciones: [
      'Solo los adultos',
      'Solo los ciudadanos de un país',
      'Todas las personas, sin discriminación alguna',
      'Solo las personas con educación superior'
    ],
    respuestaCorrecta: 2,
    explicacion: 'Todos los seres humanos son titulares de Derechos Fundamentales sin ningún tipo de discriminación por sexo, edad, religión, origen, condición económica u otra característica.'
  },
  {
    pregunta: '¿Cuál es la diferencia principal entre Derecho y Deber?',
    opciones: [
      'No hay diferencia',
      'Los derechos son beneficios mientras que los deberes son obligaciones',
      'Los deberes son más importantes',
      'Los derechos no existen en la ley'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los Derechos son beneficios y libertades que una persona posee y que deben ser respetados. Los Deberes son obligaciones que cada persona tiene hacia otros y hacia la sociedad.'
  },
  {
    pregunta: '¿Qué se entiende por dignidad humana?',
    opciones: [
      'El dinero que posee una persona',
      'El valor inherente de cada ser humano que merece respeto y protección',
      'La posición social de una persona',
      'La edad de una persona'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La Dignidad Humana es el valor inherente de cada ser humano, independientemente de sus características personales, que le confiere derechos inviolables y la merece respeto y protección.'
  }
]

const respuestasCorrectas = computed(() => {
  let contador = 0
  for (let i = 0; i < preguntas.length; i++) {
    if (respuestas.value[i] === preguntas[i].respuestaCorrecta) {
      contador++
    }
  }
  return contador
})

const porcentaje = computed(() => {
  return Math.round((respuestasCorrectas.value / preguntas.length) * 100)
})

const finalizarEvaluacion = () => {
  evaluacionCompletada.value = true
}

const reiniciarEvaluacion = () => {
  preguntaActual.value = 0
  evaluacionCompletada.value = false
  respuestas.value = {}
}

const getCalificacion = () => {
  if (porcentaje.value >= 90) return 'EXCELENTE'
  if (porcentaje.value >= 80) return 'MUY BUENO'
  if (porcentaje.value >= 70) return 'BUENO'
  if (porcentaje.value >= 60) return 'REGULAR'
  return 'INSUFICIENTE'
}

const getColorResultado = () => {
  if (porcentaje.value >= 80) return 'green-accent-3'
  if (porcentaje.value >= 60) return 'amber'
  return 'red-accent-2'
}

const getIconoResultado = () => {
  if (porcentaje.value >= 90) return 'mdi-trophy-gold'
  if (porcentaje.value >= 80) return 'mdi-star-circle'
  if (porcentaje.value >= 60) return 'mdi-hand-okay'
  return 'mdi-alert-circle'
}

const getMensajeResultado = () => {
  if (porcentaje.value >= 90) return '¡Felicidades! Dominas perfectamente los Derechos Fundamentales'
  if (porcentaje.value >= 80) return '¡Muy bien! Tienes un excelente conocimiento de los temas'
  if (porcentaje.value >= 70) return 'Buen desempeño. Considera repasar algunos temas'
  if (porcentaje.value >= 60) return 'Desempeño regular. Te recomendamos estudiar más'
  return 'Necesitas reforzar tus conocimientos. Estudia de nuevo los temas'
}

const getRetroalimentacion = () => {
  if (porcentaje.value >= 90) return 'Tienes un conocimiento completo y profundo de los Derechos Fundamentales. ¡Excelente desempeño! Puedes ayudar a otros a comprender estos derechos.'
  if (porcentaje.value >= 80) return 'Has demostrado buena comprensión de los conceptos principales. Solo hay algunos detalles que podrías reforzar.'
  if (porcentaje.value >= 70) return 'Entiendes los conceptos básicos, pero te recomendamos revisar los temas donde tuviste errores para consolidar tu aprendizaje.'
  if (porcentaje.value >= 60) return 'Has aprendido los fundamentos, pero hay varios conceptos que necesitas reforzar. Estudia nuevamente los temas principales.'
  return 'Te recomendamos revisar cuidadosamente todo el material de aprendizaje para mejorar tu comprensión de los Derechos Fundamentales.'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

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
}

.glass-panel {
  background: rgba(30, 30, 30, 0.6) !important;
  border: 1px solid rgba(212, 175, 55, 0.2) !important;
  color: white !important;
}

.text-glow {
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.pregunta-container {
  margin-bottom: 24px;
}

.opciones-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.opcion-btn {
  border-color: rgba(212, 175, 55, 0.3) !important;
  background: rgba(30, 30, 30, 0.4) !important;
  color: white !important;
  min-height: 56px;
  justify-content: flex-start !important;
  transition: all 0.3s ease;
}

.opcion-btn:hover:not(.opcion-selected) {
  background: rgba(212, 175, 55, 0.1) !important;
  border-color: rgba(212, 175, 55, 0.5) !important;
}

.opcion-btn.opcion-selected {
  background: rgba(212, 175, 55, 0.3) !important;
  border-color: rgba(212, 175, 55, 0.8) !important;
}

.opcion-letra {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(212, 175, 55, 0.2);
  border-radius: 50%;
  flex-shrink: 0;
  color: #D4AF37;
  font-weight: bold;
}

.puntuacion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  align-items: center;
}

.puntuacion-item {
  padding: 16px;
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.puntuacion-valor {
  margin-bottom: 8px;
}

.puntuacion-label {
  margin-top: 8px;
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

.space-y-4 {
  gap: 1rem;
}

@media (max-width: 768px) {
  .puntuacion-grid {
    grid-template-columns: 1fr;
  }
}
</style>
