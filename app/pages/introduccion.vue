<template>
  <v-app>
    <!-- ===== APP BAR ===== -->
    <v-app-bar app color="rgba(20, 20, 20, 0.85)" class="glass-header" theme="dark" elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="gold"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-serif text-gold">Constitución Interactiva</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white" to="/" prepend-icon="mdi-home" class="mr-2 hidden-sm-and-down">Inicio</v-btn>
      <v-btn variant="text" color="gold" to="/introduccion" prepend-icon="mdi-book-open-variant" class="mr-2 hidden-sm-and-down">Temario</v-btn>
      <v-btn variant="outlined" color="white" to="/Creditos" prepend-icon="mdi-account-group" class="mr-4">Créditos</v-btn>
    </v-app-bar>

    <!-- ===== SIDEBAR ===== -->
    <v-navigation-drawer v-model="drawer" app theme="dark" width="320" class="sidebar-glass">
      <!-- Header -->
      <div class="sidebar-header pa-5">
        <div class="d-flex align-center mb-3">
          <v-icon color="gold" size="28" class="mr-3">mdi-shield-account</v-icon>
          <div>
            <div class="font-serif text-gold" style="font-size:0.9rem;letter-spacing:1px;">TEMARIO OVA</div>
            <div class="text-caption text-grey-lighten-1">Derechos Fundamentales</div>
          </div>
        </div>
        <!-- Barra de progreso temas -->
        <div class="progress-section mt-4">
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-caption text-grey-lighten-1">Progreso</span>
            <span class="text-caption text-gold font-weight-bold">{{ Math.round(((maxTemaDesbloqueado - 1) / menuTemas.length) * 100) }}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: ((maxTemaDesbloqueado - 1) / menuTemas.length * 100) + '%' }"></div>
          </div>
          <div class="text-caption text-grey mt-1">{{ maxTemaDesbloqueado - 1 }} de {{ menuTemas.length }} completados</div>
        </div>
      </div>

      <v-divider class="border-opacity-25"></v-divider>

      <!-- Lista temas -->
      <v-list nav class="pa-3 sidebar-list">
        <v-list-item
          v-for="(item, i) in menuTemas"
          :key="i"
          :value="item"
          rounded="lg"
          class="mb-1 sidebar-item"
          @click="item.id <= maxTemaDesbloqueado ? (vistaActiva = 'temas', temaActual = item) : null"
          :active="vistaActiva === 'temas' && temaActual.id === item.id"
          :disabled="item.id > maxTemaDesbloqueado"
          :class="{
            'locked-item': item.id > maxTemaDesbloqueado,
            'completed-item': item.id < maxTemaDesbloqueado,
            'active-item': vistaActiva === 'temas' && temaActual.id === item.id
          }"
        >
          <template v-slot:prepend>
            <div class="sidebar-icon-wrapper mr-3">
              <v-icon v-if="item.id > maxTemaDesbloqueado" size="18" color="grey">mdi-lock</v-icon>
              <v-icon v-else-if="item.id < maxTemaDesbloqueado" size="18" color="green-accent-3">mdi-check-circle</v-icon>
              <v-icon v-else size="18" color="gold">{{ item.icon }}</v-icon>
            </div>
          </template>
          <v-list-item-title class="sidebar-item-text" :class="{ 'text-gold': vistaActiva === 'temas' && temaActual.id === item.id }">{{ item.titulo }}</v-list-item-title>
        </v-list-item>

        <!-- Separador actividades -->
        <v-divider class="my-3 border-opacity-25"></v-divider>

        <!-- Botón actividades -->
        <v-list-item
          rounded="lg"
          class="mb-1 sidebar-item"
          :class="{
            'locked-item': !actividadesDesbloqueadas,
            'active-item': vistaActiva === 'actividades'
          }"
          :disabled="!actividadesDesbloqueadas"
          @click="actividadesDesbloqueadas ? (vistaActiva = 'actividades') : null"
          :active="vistaActiva === 'actividades'"
        >
          <template v-slot:prepend>
            <div class="sidebar-icon-wrapper mr-3">
              <v-icon v-if="!actividadesDesbloqueadas" size="18" color="grey">mdi-lock</v-icon>
              <v-icon v-else size="18" :color="vistaActiva === 'actividades' ? 'gold' : 'white'">mdi-controller-classic</v-icon>
            </div>
          </template>
          <v-list-item-title class="sidebar-item-text" :class="{ 'text-gold': vistaActiva === 'actividades' }">
            Actividades
            <v-chip v-if="!actividadesDesbloqueadas" size="x-small" color="grey" class="ml-2">Bloqueado</v-chip>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-4">
          <v-btn block variant="tonal" color="white" to="/" prepend-icon="mdi-home" class="rounded-pill">Inicio</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- ===== MAIN ===== -->
    <v-main class="dynamic-bg position-relative overflow-hidden">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>

      <v-container fluid class="pa-8 position-relative z-1">
        <v-fade-transition mode="out-in">

          <!-- ========== VISTA TEMAS ========== -->
          <v-row v-if="vistaActiva === 'temas'" :key="'temas-' + temaActual.id">
            <v-col cols="12" md="10" lg="8" class="mx-auto">
              <v-card elevation="0" class="rounded-xl overflow-hidden glass-card content-card">
                <!-- Header tema -->
                <div class="tema-header pa-6">
                  <div class="d-flex align-center justify-center">
                    <div class="tema-number mr-4">{{ String(temaActual.id).padStart(2, '0') }}</div>
                    <div>
                      <h2 class="font-serif text-h5 text-gold">{{ temaActual.titulo }}</h2>
                      <div class="text-caption text-grey-lighten-1 mt-1" v-if="temaActual.subtitulo">{{ temaActual.subtitulo }}</div>
                    </div>
                  </div>
                </div>

                <v-card-text class="pa-8 text-white slide-fade-enter-active">
                  <!-- Imagen -->
                  <v-img
                    v-if="temaActual.imagen"
                    :src="temaActual.imagen"
                    @error="handleImageError"
                    height="340"
                    cover
                    class="mb-8 rounded-xl main-image"
                    gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height" style="background:rgba(30,30,30,0.5)">
                        <v-progress-circular color="gold" indeterminate size="48"></v-progress-circular>
                      </div>
                    </template>
                    <template v-slot:default>
                      <div class="d-flex align-end fill-height pa-6">
                        <v-icon size="32" color="gold" class="mr-3 pulse-icon">{{ temaActual.icon }}</v-icon>
                        <span class="font-serif-italic text-h6 text-white" style="text-shadow: 0 2px 8px rgba(0,0,0,0.8)">{{ temaActual.subtitulo }}</span>
                      </div>
                    </template>
                  </v-img>

                  <!-- Texto -->
                  <div class="content-text">
                    <p class="text-body-1 text-justify" style="line-height: 2; font-size: 1.1rem !important; color: rgba(255,255,255,0.85);">
                      {{ temaActual.contenido }}
                    </p>
                  </div>

                  <!-- Video -->
                  <v-responsive
                    v-if="temaActual.video"
                    :aspect-ratio="16/9"
                    class="mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                  >
                    <iframe
                      :src="temaActual.video"
                      title="Video explicativo"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      style="width: 100%; height: 100%; border: none;"
                    ></iframe>
                  </v-responsive>

                  <!-- Alerta importante -->
                  <v-alert
                    v-if="temaActual.importante"
                    border="start"
                    color="gold"
                    theme="light"
                    variant="tonal"
                    class="mt-6"
                    icon="mdi-information"
                  >
                    {{ temaActual.importante }}
                  </v-alert>
                </v-card-text>

                <v-divider class="border-opacity-50" color="white"></v-divider>

                <v-card-actions class="pa-6 justify-space-between bg-transparent">
                  <v-btn
                    variant="tonal"
                    color="white"
                    prepend-icon="mdi-chevron-left"
                    @click="cambiarTema(-1)"
                    :disabled="temaActual.id === 1"
                    class="hover-btn px-6 py-2 rounded-pill"
                  >Anterior</v-btn>

                  <v-btn
                    v-if="temaActual.id < menuTemas.length"
                    color="gold-btn"
                    append-icon="mdi-chevron-right"
                    @click="marcarCompletadoYSiguiente"
                    class="hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                  >{{ temaActual.id === maxTemaDesbloqueado ? 'Completar y Siguiente' : 'Siguiente Tema' }}</v-btn>

                  <v-btn
                    v-if="temaActual.id === menuTemas.length"
                    color="green-accent-4"
                    variant="flat"
                    append-icon="mdi-flag-checkered"
                    @click="marcarComoTerminado"
                    class="hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                  >Ir a Actividades</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <!-- ========== VISTA ACTIVIDADES ========== -->
          <v-row v-else-if="vistaActiva === 'actividades'" key="actividades">
            <v-col cols="12" md="10" lg="9" class="mx-auto">
              <!-- Encabezado Actividades -->
              <div class="text-center mb-10 slide-fade-enter-active">
                <div class="d-flex justify-center align-center mb-4">
                  <v-icon color="gold" size="36" class="mr-3 pulse-icon">mdi-trophy</v-icon>
                  <h1 class="font-serif text-h4 text-gold text-glow">ACTIVIDADES INTERACTIVAS</h1>
                </div>
                <p class="text-subtitle-1 font-serif-italic text-grey-lighten-2">
                  Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente.
                </p>
                <!-- Barra de progreso actividades -->
                <div class="mt-4 mx-auto" style="max-width:420px;">
                  <div class="d-flex justify-space-between mb-1">
                    <span class="text-caption text-grey-lighten-1">Actividades completadas</span>
                    <span class="text-caption text-gold font-weight-bold">{{ progresoActividades }} / {{ listaActividades.length }}</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" :style="{ width: (progresoActividades / listaActividades.length * 100) + '%' }"></div>
                  </div>
                </div>
              </div>

              <!-- Cards de actividades -->
              <v-row>
                <v-col
                  v-for="(act, idx) in listaActividades"
                  :key="idx"
                  cols="12"
                >
                  <v-card
                    elevation="0"
                    class="rounded-xl glass-card activity-card mb-4"
                    :class="{
                      'locked-activity': idx > progresoActividades,
                      'completed-activity': idx < progresoActividades
                    }"
                    :style="{ animationDelay: `${idx * 0.15}s` }"
                  >
                    <!-- Cabecera actividad -->
                    <div class="activity-header pa-5 d-flex align-center">
                      <div class="activity-number-badge mr-4">
                        <v-icon v-if="idx < progresoActividades" color="green-accent-3" size="28">mdi-check-circle</v-icon>
                        <v-icon v-else-if="idx > progresoActividades" color="grey" size="28">mdi-lock</v-icon>
                        <span v-else class="font-serif text-gold" style="font-size:1.4rem;font-weight:700;">{{ idx + 1 }}</span>
                      </div>
                      <div class="flex-grow-1">
                        <div class="text-overline text-amber-lighten-3" style="letter-spacing:2px;">{{ act.tipo }}</div>
                        <h3 class="font-serif text-h6 text-white">{{ act.titulo }}</h3>
                      </div>
                      <v-icon :color="idx < progresoActividades ? 'green-accent-3' : (idx > progresoActividades ? 'grey' : 'gold')" size="32">{{ act.icono }}</v-icon>
                    </div>

                    <v-divider class="border-opacity-20"></v-divider>

                    <!-- Contenido interactivo -->
                    <v-expand-transition>
                      <div v-if="idx <= progresoActividades">
                        <!-- ACTIVIDAD 1: Quiz -->
                        <div v-if="idx === 0" class="pa-6">
                          <p class="text-body-2 text-grey-lighten-2 mb-6" style="line-height:1.8;">{{ act.descripcion }}</p>
                          <div v-for="(preg, pi) in act.preguntas" :key="pi" class="quiz-question mb-6">
                            <p class="text-body-1 text-white font-weight-bold mb-3">
                              <v-icon color="gold" size="16" class="mr-1">mdi-help-circle</v-icon>
                              {{ pi + 1 }}. {{ preg.pregunta }}
                            </p>
                            <v-radio-group
                              v-model="respuestasQuiz[pi]"
                              :disabled="quizEnviado"
                              class="mt-0"
                            >
                              <v-radio
                                v-for="(op, oi) in preg.opciones"
                                :key="oi"
                                :label="op"
                                :value="oi"
                                :color="quizEnviado
                                  ? (oi === preg.correcta ? 'green-accent-3' : (respuestasQuiz[pi] === oi ? 'red-accent-2' : 'grey'))
                                  : 'gold'"
                                class="quiz-radio mb-1"
                              ></v-radio>
                            </v-radio-group>
                            <v-expand-transition>
                              <v-alert
                                v-if="quizEnviado"
                                variant="tonal"
                                :color="respuestasQuiz[pi] === preg.correcta ? 'green' : 'red'"
                                :icon="respuestasQuiz[pi] === preg.correcta ? 'mdi-check-circle' : 'mdi-close-circle'"
                                density="compact"
                                class="mt-2"
                              >
                                <span v-if="respuestasQuiz[pi] === preg.correcta">¡Correcto! {{ preg.explicacion }}</span>
                                <span v-else>Incorrecto. La respuesta correcta es: <strong>{{ preg.opciones[preg.correcta] }}</strong>. {{ preg.explicacion }}</span>
                              </v-alert>
                            </v-expand-transition>
                          </div>
                          <div v-if="!quizEnviado" class="d-flex justify-end mt-2">
                            <v-btn
                              color="gold-btn"
                              class="rounded-pill font-weight-bold px-8 hover-btn"
                              :disabled="respuestasQuiz.filter(r => r !== null).length < act.preguntas.length"
                              @click="enviarQuiz(idx)"
                              append-icon="mdi-send"
                            >Enviar respuestas</v-btn>
                          </div>
                          <v-alert
                            v-if="quizEnviado && idx === progresoActividades"
                            color="gold"
                            variant="tonal"
                            icon="mdi-trophy"
                            class="mt-4"
                          >
                            Obtuviste <strong>{{ puntajeQuiz }}</strong> de <strong>{{ act.preguntas.length }}</strong> respuestas correctas.
                            <span v-if="puntajeQuiz >= Math.ceil(act.preguntas.length * 0.6)"> ¡Muy bien! Puedes continuar.</span>
                            <span v-else> Intenta repasar los temas e inténtalo de nuevo.</span>
                          </v-alert>
                          <div v-if="quizEnviado && idx === progresoActividades" class="d-flex justify-end mt-4 gap-3">
                            <v-btn variant="outlined" color="white" class="rounded-pill" @click="reiniciarQuiz" prepend-icon="mdi-refresh">Reintentar</v-btn>
                            <v-btn
                              v-if="puntajeQuiz >= Math.ceil(act.preguntas.length * 0.6)"
                              color="green-accent-4"
                              variant="flat"
                              class="rounded-pill font-weight-bold text-black hover-btn pulse-animation"
                              @click="completarActividad(idx)"
                              append-icon="mdi-arrow-right"
                            >Siguiente Actividad</v-btn>
                          </div>
                        </div>

                        <!-- ACTIVIDAD 2: Análisis de casos -->
                        <div v-else-if="idx === 1" class="pa-6">
                          <p class="text-body-2 text-grey-lighten-2 mb-6" style="line-height:1.8;">{{ act.descripcion }}</p>
                          <div v-for="(caso, ci) in act.casos" :key="ci" class="caso-card mb-6 pa-4 rounded-lg" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
                            <div class="d-flex align-start mb-3">
                              <v-icon color="amber-lighten-2" size="20" class="mr-2 mt-1">mdi-file-document-edit</v-icon>
                              <p class="text-body-1 text-white font-weight-bold">Caso {{ ci + 1 }}: {{ caso.titulo }}</p>
                            </div>
                            <p class="text-body-2 text-grey-lighten-2 mb-4" style="line-height:1.8;">{{ caso.descripcion }}</p>
                            <v-select
                              v-model="respuestasCasos[ci]"
                              :items="opcionesDerechos"
                              label="¿Qué derecho fundamental fue vulnerado?"
                              variant="outlined"
                              color="gold"
                              theme="dark"
                              :disabled="casosEnviados"
                              density="comfortable"
                              class="caso-select"
                            ></v-select>
                            <v-expand-transition>
                              <v-alert
                                v-if="casosEnviados"
                                variant="tonal"
                                :color="respuestasCasos[ci] === caso.respuesta ? 'green' : 'orange'"
                                :icon="respuestasCasos[ci] === caso.respuesta ? 'mdi-check-circle' : 'mdi-alert-circle'"
                                density="compact"
                                class="mt-2"
                              >
                                <span v-if="respuestasCasos[ci] === caso.respuesta">¡Correcto! {{ caso.explicacion }}</span>
                                <span v-else>La respuesta esperada era: <strong>{{ caso.respuesta }}</strong>. {{ caso.explicacion }}</span>
                              </v-alert>
                            </v-expand-transition>
                          </div>
                          <div v-if="!casosEnviados" class="d-flex justify-end">
                            <v-btn
                              color="gold-btn"
                              class="rounded-pill font-weight-bold px-8 hover-btn"
                              :disabled="respuestasCasos.filter(r => r).length < act.casos.length"
                              @click="enviarCasos(idx)"
                              append-icon="mdi-send"
                            >Enviar análisis</v-btn>
                          </div>
                          <div v-if="casosEnviados && idx === progresoActividades" class="d-flex justify-end mt-4">
                            <v-btn
                              color="green-accent-4"
                              variant="flat"
                              class="rounded-pill font-weight-bold text-black hover-btn pulse-animation"
                              @click="completarActividad(idx)"
                              append-icon="mdi-arrow-right"
                            >Siguiente Actividad</v-btn>
                          </div>
                        </div>

                        <!-- ACTIVIDAD 3: Reflexión -->
                        <div v-else-if="idx === 2" class="pa-6">
                          <p class="text-body-2 text-grey-lighten-2 mb-6" style="line-height:1.8;">{{ act.descripcion }}</p>
                          <div v-for="(preg, ri) in act.reflexiones" :key="ri" class="mb-6">
                            <p class="text-body-1 text-white font-weight-bold mb-3">
                              <v-icon color="gold" size="16" class="mr-1">mdi-pencil</v-icon>
                              {{ ri + 1 }}. {{ preg }}
                            </p>
                            <v-textarea
                              v-model="reflexiones[ri]"
                              variant="outlined"
                              color="gold"
                              theme="dark"
                              rows="3"
                              auto-grow
                              :disabled="reflexionEnviada"
                              placeholder="Escribe tu reflexión aquí..."
                              class="reflexion-textarea"
                            ></v-textarea>
                          </div>
                          <div v-if="!reflexionEnviada" class="d-flex justify-end">
                            <v-btn
                              color="gold-btn"
                              class="rounded-pill font-weight-bold px-8 hover-btn"
                              :disabled="reflexiones.filter(r => r && r.trim().length >= 10).length < act.reflexiones.length"
                              @click="enviarReflexion(idx)"
                              append-icon="mdi-check"
                            >Enviar reflexión</v-btn>
                          </div>
                          <div v-if="reflexionEnviada && idx === progresoActividades">
                            <v-alert color="green" variant="tonal" icon="mdi-star" class="mt-4">
                              ¡Excelente reflexión! Has completado todas las actividades del OVA.
                            </v-alert>
                            <div class="d-flex justify-center mt-6">
                              <v-btn
                                color="gold-btn"
                                size="large"
                                class="rounded-pill font-weight-bold bounce-animation px-10"
                                @click="completarActividad(idx)"
                                append-icon="mdi-trophy"
                              >¡Finalizar OVA!</v-btn>
                            </div>
                          </div>
                        </div>

                        <!-- Completado -->
                        <div v-if="idx < progresoActividades" class="pa-4 d-flex align-center justify-center" style="background:rgba(105,240,174,0.05);">
                          <v-icon color="green-accent-3" size="20" class="mr-2">mdi-check-all</v-icon>
                          <span class="text-green-accent-3 font-weight-bold">Actividad completada</span>
                        </div>
                      </div>
                    </v-expand-transition>

                    <!-- Bloqueado -->
                    <div v-if="idx > progresoActividades" class="pa-4 d-flex align-center justify-center locked-msg">
                      <v-icon color="grey" size="18" class="mr-2">mdi-lock</v-icon>
                      <span class="text-grey text-caption">Completa la actividad anterior para desbloquear</span>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <!-- Banner de finalización -->
              <v-expand-transition>
                <v-card
                  v-if="progresoActividades >= listaActividades.length"
                  class="rounded-xl glass-card mt-6 pa-8 text-center completion-banner"
                  elevation="0"
                >
                  <v-icon color="gold" size="72" class="mb-4 pulse-icon">mdi-trophy</v-icon>
                  <h2 class="font-serif text-h4 text-gold mb-3 text-glow">¡FELICITACIONES!</h2>
                  <p class="text-body-1 text-grey-lighten-2 mb-6">Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!</p>
                  <v-btn to="/" color="gold-btn" size="large" class="rounded-pill font-weight-bold px-10" prepend-icon="mdi-home">Volver al Inicio</v-btn>
                </v-card>
              </v-expand-transition>
            </v-col>
          </v-row>

        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const drawer = ref(true)
const vistaActiva = ref('temas')

const maxTemaDesbloqueado = useState('maxTemaDesbloqueado', () => 1)
const actividadesDesbloqueadas = useState('actividadesDesbloqueadas', () => false)
const progresoActividades = useState('progresoActividades', () => 0)

// ---- Persistencia localStorage ----
onMounted(() => {
  const saved = localStorage.getItem('ovaProgress')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.maxTema) maxTemaDesbloqueado.value = data.maxTema
      if (data.actDesbloqueadas) actividadesDesbloqueadas.value = data.actDesbloqueadas
      if (data.progresoAct) progresoActividades.value = data.progresoAct
      if (data.quizEnviado) quizEnviado.value = data.quizEnviado
      if (data.respuestasQuiz) respuestasQuiz.value = data.respuestasQuiz
      if (data.puntajeQuiz !== undefined) puntajeQuiz.value = data.puntajeQuiz
      if (data.casosEnviados) casosEnviados.value = data.casosEnviados
      if (data.respuestasCasos) respuestasCasos.value = data.respuestasCasos
      if (data.reflexionEnviada) reflexionEnviada.value = data.reflexionEnviada
      if (data.reflexiones) reflexiones.value = data.reflexiones
    } catch(e) { /* ignore */ }
  }

  // Inicializar tema actual al que corresponde
  const savedTema = menuTemas.find(t => t.id === maxTemaDesbloqueado.value) || menuTemas[0]
  temaActual.value = savedTema

  if (actividadesDesbloqueadas.value && progresoActividades.value > 0) {
    vistaActiva.value = 'actividades'
  }
})

const saveProgress = () => {
  localStorage.setItem('ovaProgress', JSON.stringify({
    maxTema: maxTemaDesbloqueado.value,
    actDesbloqueadas: actividadesDesbloqueadas.value,
    progresoAct: progresoActividades.value,
    quizEnviado: quizEnviado.value,
    respuestasQuiz: respuestasQuiz.value,
    puntajeQuiz: puntajeQuiz.value,
    casosEnviados: casosEnviados.value,
    respuestasCasos: respuestasCasos.value,
    reflexionEnviada: reflexionEnviada.value,
    reflexiones: reflexiones.value
  }))
}

watch([maxTemaDesbloqueado, actividadesDesbloqueadas, progresoActividades], saveProgress, { deep: true })

// ---- Temas ----
const menuTemas = [
  {
    id: 1,
    titulo: '1. Introducción y Conceptos',
    subtitulo: '¿Qué son los Derechos Fundamentales?',
    icon: 'mdi-book-open-variant',
    imagen: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
    contenido: 'Los derechos fundamentales son garantías inherentes a toda persona por el solo hecho de ser humana. En Colombia, la Constitución Política de 1991 los consagra en el Título II, Capítulo 1 (artículos 11 al 41), y los eleva a la categoría de normas de aplicación inmediata que vinculan a todas las autoridades del Estado. Su fundamento más profundo es la dignidad humana: nadie puede ser tratado como un medio, sino siempre como un fin en sí mismo. A diferencia de otros derechos, los fundamentales son inalienables (no se pueden transferir), imprescriptibles (no se extinguen con el tiempo) e irrenunciables. La Corte Constitucional colombiana ha ampliado progresivamente su catálogo mediante el principio de conexidad, reconociendo que derechos como la salud o el mínimo vital también son fundamentales cuando su vulneración amenaza directamente la vida digna.',
    importante: 'La dignidad humana, la vida, la igualdad y la libertad son el núcleo esencial del que derivan todos los demás derechos fundamentales consagrados en la Constitución de 1991.',
    puntosClave: ['Aplicación inmediata (Art. 85 C.P.)', 'Inalienables e irrenunciables', 'Protegidos por la Acción de Tutela', 'Catálogo ampliado por jurisprudencia'],
    video: 'https://www.youtube.com/embed/6MYHBrHS5t4'
  },
  {
    id: 2,
    titulo: '2. Derechos de Primera Generación',
    subtitulo: 'Libertades Civiles y Derechos Políticos',
    icon: 'mdi-shield-account',
    imagen: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800',
    contenido: 'Los derechos de primera generación nacieron de las grandes revoluciones liberales del siglo XVIII (Revolución Francesa y Americana) y buscan proteger al individuo frente a los abusos del poder estatal. Su lógica es de abstención: el Estado no debe interferir en la esfera privada del ciudadano. En Colombia, la Constitución de 1991 los recoge de forma exhaustiva: el derecho a la vida e integridad personal (Art. 11-12), la prohibición de la tortura y la esclavitud (Art. 12-17), la libertad de conciencia y de culto (Art. 18-19), la libertad de expresión e información (Art. 20), el derecho de reunión y asociación (Art. 37-38), el debido proceso (Art. 29), y los derechos políticos como el sufragio universal y el acceso a cargos públicos (Art. 40). Estos derechos son de aplicación inmediata y pueden defenderse directamente mediante la Acción de Tutela cuando el Estado o un particular con posición de dominio los vulnera.',
    importante: 'En Colombia, entre los Arts. 11 y 41 de la Constitución se consagran los derechos civiles y políticos. El derecho a la vida es el más fundamental de todos: sin él, los demás carecen de sentido.',
    puntosClave: ['Derecho a la vida (Art. 11)', 'Libertad de expresión (Art. 20)', 'Debido proceso (Art. 29)', 'Derecho al voto (Art. 40)'],
    video: 'https://www.youtube.com/embed/o7YgKLNvBFw'
  },
  {
    id: 3,
    titulo: '3. Derechos de Segunda Generación',
    subtitulo: 'Derechos Económicos, Sociales y Culturales',
    icon: 'mdi-scale-balance',
    imagen: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    contenido: 'Los derechos de segunda generación —también conocidos como DESC (Derechos Económicos, Sociales y Culturales)— surgieron como respuesta a las profundas desigualdades generadas por la Revolución Industrial. A diferencia de los de primera generación, exigen una conducta activa y prestacional del Estado: este debe invertir recursos, crear instituciones y garantizar condiciones materiales mínimas de vida. En la Constitución colombiana de 1991, se ubican principalmente en el Capítulo 2 del Título II (Arts. 42 al 77) y comprenden: el derecho al trabajo en condiciones dignas (Art. 25), la seguridad social (Art. 48), el derecho a la salud (Art. 49), la educación gratuita hasta el noveno grado (Art. 67), y el derecho a la vivienda digna (Art. 51). La Corte Constitucional ha reconocido que estos derechos son justiciables cuando su núcleo esencial está amenazado, especialmente en el caso de niños, adultos mayores y personas en situación de vulnerabilidad.',
    importante: 'La Corte Constitucional ha protegido mediante tutela el derecho a la salud (Art. 49) y a la seguridad social (Art. 48) cuando su negación constituye una amenaza inminente para la vida o la dignidad humana.',
    puntosClave: ['Trabajo digno (Art. 25)', 'Salud y seguridad social (Arts. 48-49)', 'Educación gratuita (Art. 67)', 'Vivienda digna (Art. 51)'],
    video: 'https://www.youtube.com/embed/GdE3cjQJNdE'
  },
  {
    id: 4,
    titulo: '4. Derechos de Tercera Generación',
    subtitulo: 'Derechos Solidarios, Colectivos y del Medio Ambiente',
    icon: 'mdi-dove',
    imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    contenido: 'Los derechos de tercera generación emergen en la segunda mitad del siglo XX como respuesta a problemáticas que ningún individuo ni Estado puede resolver por sí solo: la crisis ambiental, los conflictos bélicos globales y la desigualdad entre naciones. Su principio rector es la solidaridad: obligan tanto a los Estados como a las empresas, las organizaciones internacionales y a cada ciudadano. En Colombia, el Capítulo 3 del Título II (Arts. 78 al 82) consagra los derechos colectivos y del ambiente: el derecho a un ambiente sano (Art. 79), el deber del Estado de prevenir el deterioro ambiental (Art. 80), y la protección de los consumidores (Art. 78). La Corte Constitucional ha reconocido además el derecho a la paz (Art. 22) como un derecho y un deber ciudadano de obligatorio cumplimiento. Las Acciones Populares y de Grupo son los mecanismos judiciales diseñados para proteger estos derechos colectivos.',
    importante: 'El Acuerdo de Paris (2015) y la jurisprudencia de la Corte Suprema colombiana (STC4360-2018) reconocieron a la Amazonía colombiana como "sujeto de derechos", ampliando la protección ambiental de tercera generación.',
    puntosClave: ['Derecho al ambiente sano (Art. 79)', 'Derecho a la paz (Art. 22)', 'Protección del consumidor (Art. 78)', 'Acciones Populares como mecanismo de defensa'],
    video: 'https://www.youtube.com/embed/yiw6_JakZFc'
  },
  {
    id: 5,
    titulo: '5. Garantías de Protección Constitucional',
    subtitulo: 'Mecanismos para Defender tus Derechos',
    icon: 'mdi-gavel',
    imagen: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800',
    contenido: 'La Constitución de 1991 diseñó un robusto sistema de garantías judiciales para que los derechos no sean simples declaraciones. El más importante es la Acción de Tutela (Art. 86): cualquier persona puede acudir ante cualquier juez de la República, sin necesidad de abogado, para solicitar la protección inmediata de un derecho fundamental. El juez tiene máximo 10 días para fallar. El Habeas Corpus (Art. 30) protege la libertad personal ante detenciones arbitrarias y debe resolverse en 36 horas. El Habeas Data (Art. 15) garantiza el derecho a controlar la información personal en bases de datos. Las Acciones Populares (Art. 88) defienden derechos e intereses colectivos como el ambiente sano y el espacio público. Finalmente, la Acción de Cumplimiento (Art. 87) obliga a las autoridades a ejecutar leyes o actos administrativos que incumplan. Conocer estos mecanismos es esencial para ejercer una ciudadanía activa.',
    importante: 'La Acción de Tutela es el mecanismo más utilizado en Colombia: solo en 2023 se presentaron más de 1.400.000 tutelas, lo que la convierte en una de las herramientas de democracia directa más activas del mundo.',
    puntosClave: ['Acción de Tutela (Art. 86) — 10 días', 'Habeas Corpus (Art. 30) — 36 horas', 'Habeas Data (Art. 15)', 'Acciones Populares (Art. 88)'],
    video: 'https://www.youtube.com/embed/8FBMz6fAeGY'
  }
]

const temaActual = ref(menuTemas[0])

// ---- Actividades interactivas ----

// Actividad 1: Quiz
const quizEnviado = ref(false)
const puntajeQuiz = ref(0)
const respuestasQuiz = ref([null, null, null, null, null])

// Actividad 2: Análisis de casos
const casosEnviados = ref(false)
const respuestasCasos = ref(['', '', ''])

// Actividad 3: Reflexión
const reflexionEnviada = ref(false)
const reflexiones = ref(['', '', ''])

const opcionesDerechos = [
  'Derecho a la vida',
  'Derecho a la libertad de expresión',
  'Derecho a la salud',
  'Derecho a la educación',
  'Derecho a la igualdad',
  'Derecho al trabajo digno',
  'Derecho a un medio ambiente sano',
  'Derecho a la paz',
  'Derecho al debido proceso',
  'Derecho a la intimidad'
]

const listaActividades = [
  {
    tipo: 'Quiz Interactivo',
    titulo: '¿Cuánto sabes sobre los Derechos Fundamentales?',
    icono: 'mdi-help-circle',
    descripcion: 'Responde las siguientes preguntas de selección múltiple para evaluar tu comprensión de los temas estudiados. Necesitas al menos 3 de 5 respuestas correctas para avanzar.',
    preguntas: [
      {
        pregunta: '¿Cuál es el fundamento absoluto de todos los derechos fundamentales?',
        opciones: ['La soberanía del Estado', 'La dignidad humana', 'La Constitución Política', 'El poder legislativo'],
        correcta: 1,
        explicacion: 'La dignidad humana es el valor supremo que justifica la existencia y protección de todos los derechos fundamentales.'
      },
      {
        pregunta: '¿Qué tipo de derechos protegen las libertades civiles frente al Estado?',
        opciones: ['Derechos de tercera generación', 'Derechos de segunda generación', 'Derechos de primera generación', 'Derechos colectivos'],
        correcta: 2,
        explicacion: 'Los derechos de primera generación (civiles y políticos) limitan la intervención estatal en la esfera individual.'
      },
      {
        pregunta: '¿Qué mecanismo constitucional protege derechos individuales de forma inmediata en Colombia?',
        opciones: ['Acción Popular', 'Habeas Data', 'Acción de Tutela', 'Acción de Cumplimiento'],
        correcta: 2,
        explicacion: 'La Acción de Tutela permite acudir ante cualquier juez para exigir protección inmediata de derechos fundamentales.'
      },
      {
        pregunta: '¿Cuál de los siguientes pertenece a los derechos de segunda generación?',
        opciones: ['Derecho a la paz', 'Derecho a la educación', 'Derecho a la libertad de expresión', 'Derecho al voto'],
        correcta: 1,
        explicacion: 'El derecho a la educación es un derecho económico, social y cultural (segunda generación) que requiere acción positiva del Estado.'
      },
      {
        pregunta: '¿Qué caracteriza a los derechos de tercera generación?',
        opciones: ['Son derechos individuales absolutos', 'Protegen solo intereses económicos', 'Requieren cooperación internacional y solidaridad colectiva', 'Los ejerce únicamente el Estado'],
        correcta: 2,
        explicacion: 'Los derechos de tercera generación (paz, ambiente sano, desarrollo) trascienden al individuo y requieren solidaridad global.'
      }
    ]
  },
  {
    tipo: 'Análisis de Casos',
    titulo: 'Identifica el Derecho Vulnerado',
    icono: 'mdi-file-document-edit',
    descripcion: 'Lee cada caso de la vida real y selecciona cuál derecho fundamental fue vulnerado. Analiza con cuidado los detalles de cada situación.',
    casos: [
      {
        titulo: 'El despido injusto',
        descripcion: 'María fue despedida de su trabajo sin justa causa y sin el pago de sus prestaciones sociales después de 5 años de servicio. El empleador argumentó razones económicas, pero no siguió el procedimiento legal establecido.',
        respuesta: 'Derecho al trabajo digno',
        explicacion: 'El trabajo digno (segunda generación) incluye el derecho a la estabilidad laboral y al pago justo de prestaciones.'
      },
      {
        titulo: 'El periodista silenciado',
        descripcion: 'Un periodista fue amenazado y sus publicaciones en redes sociales fueron eliminadas por funcionarios del gobierno después de publicar una investigación sobre corrupción. Las autoridades argumentaron que "generaba desorden público".',
        respuesta: 'Derecho a la libertad de expresión',
        explicacion: 'La libertad de expresión (primera generación) protege el derecho a emitir opiniones e información sin censura previa del Estado.'
      },
      {
        titulo: 'El río contaminado',
        descripcion: 'Una empresa minera vertió desechos químicos al río del pueblo, contaminando el agua que consumen sus habitantes. Las familias presentaron enfermedades y la fauna local desapareció. La empresa tiene permisos oficiales pero ignoró los límites de emisión.',
        respuesta: 'Derecho a un medio ambiente sano',
        explicacion: 'El derecho a un medio ambiente sano (tercera generación) protege a las comunidades de la degradación ambiental que afecta su calidad de vida.'
      }
    ]
  },
  {
    tipo: 'Reflexión Personal',
    titulo: 'Conecta los Derechos con tu Vida',
    icono: 'mdi-lightbulb-on',
    descripcion: 'Las siguientes preguntas no tienen respuestas incorrectas. El objetivo es que reflexiones críticamente sobre cómo los derechos fundamentales se manifiestan en tu propia experiencia de vida. Escribe al menos una oración completa en cada respuesta.',
    reflexiones: [
      '¿Cuál derecho fundamental consideras más importante en tu vida cotidiana y por qué?',
      '¿Has presenciado alguna situación en la que un derecho fundamental haya sido vulnerado? Descríbela brevemente.',
      '¿Qué acciones concretas podrías tomar para defender los derechos fundamentales en tu comunidad?'
    ]
  }
]

// ---- Handlers ----
const handleImageError = (event) => {
  event.target.src = 'https://images.unsplash.com/photo-1589829016171-28862114348b?auto=format&fit=crop&q=80&w=1200'
}

const marcarCompletadoYSiguiente = () => {
  if (temaActual.value.id === maxTemaDesbloqueado.value) {
    maxTemaDesbloqueado.value++
  }
  cambiarTema(1)
  saveProgress()
}

const marcarComoTerminado = () => {
  if (temaActual.value.id === maxTemaDesbloqueado.value) {
    maxTemaDesbloqueado.value++
  }
  actividadesDesbloqueadas.value = true
  vistaActiva.value = 'actividades'
  saveProgress()
}

const cambiarTema = (direccion) => {
  const index = menuTemas.findIndex(t => t.id === temaActual.value.id)
  const nuevoIndex = index + direccion
  if (nuevoIndex >= 0 && nuevoIndex < menuTemas.length && menuTemas[nuevoIndex].id <= maxTemaDesbloqueado.value) {
    temaActual.value = menuTemas[nuevoIndex]
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const enviarQuiz = (idx) => {
  let correctas = 0
  listaActividades[0].preguntas.forEach((p, i) => {
    if (respuestasQuiz.value[i] === p.correcta) correctas++
  })
  puntajeQuiz.value = correctas
  quizEnviado.value = true
  saveProgress()
}

const reiniciarQuiz = () => {
  respuestasQuiz.value = [null, null, null, null, null]
  quizEnviado.value = false
  puntajeQuiz.value = 0
  saveProgress()
}

const enviarCasos = (idx) => {
  casosEnviados.value = true
  saveProgress()
}

const enviarReflexion = (idx) => {
  reflexionEnviada.value = true
  saveProgress()
}

const completarActividad = (idx) => {
  if (idx === progresoActividades.value) {
    progresoActividades.value++
    saveProgress()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.font-serif { font-family: 'Cinzel', serif !important; }
.font-serif-italic { font-family: 'Playfair Display', serif !important; font-style: italic; }
.text-gold { color: #D4AF37 !important; }
.text-glow { text-shadow: 0 0 20px rgba(212, 175, 55, 0.35); }

/* ===== SIDEBAR ===== */
.sidebar-glass {
  background: rgba(10, 10, 10, 0.96) !important;
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(212, 175, 55, 0.1) !important;
}
.sidebar-header {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, transparent 100%);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.progress-track {
  width: 100%; height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 3px; overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #D4AF37, #F2D479);
  border-radius: 3px;
  transition: width 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
}
.sidebar-list { max-height: calc(100vh - 300px); overflow-y: auto; }
.sidebar-list::-webkit-scrollbar { width: 4px; }
.sidebar-list::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.3); border-radius: 2px; }
.sidebar-item {
  transition: all 0.25s ease;
  font-size: 0.85rem;
  min-height: 40px !important;
}
.sidebar-item:hover:not(.locked-item) {
  transform: translateX(4px);
  background: rgba(212, 175, 55, 0.08) !important;
}
.sidebar-item-text { font-size: 0.82rem; letter-spacing: 0.3px; transition: color 0.3s; }
.sidebar-icon-wrapper {
  width: 28px; height: 28px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
}
.completed-item .sidebar-icon-wrapper { border-color: rgba(105,240,174,0.2); background: rgba(105,240,174,0.06); }
.active-item .sidebar-icon-wrapper { border-color: rgba(212,175,55,0.3); background: rgba(212,175,55,0.12); }
.locked-item { opacity: 0.4; cursor: not-allowed; }

/* ===== CONTENT CARD ===== */
.glass-card {
  background: rgba(15, 15, 15, 0.7) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
}
.content-card { transition: transform 0.3s ease; }
.tema-header {
  background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 100%);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.tema-number {
  font-family: 'Cinzel', serif;
  font-size: 2.5rem; font-weight: 700;
  color: rgba(212,175,55,0.2);
  line-height: 1; letter-spacing: -2px;
}
.content-text {
  position: relative;
  padding-left: 20px;
  border-left: 3px solid rgba(212,175,55,0.25);
  margin-bottom: 24px;
}

/* ===== ACTIVIDADES ===== */
.activity-card {
  opacity: 0;
  animation: popIn 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  transition: border-color 0.3s;
}
.activity-header {
  background: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 100%);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.activity-number-badge {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.2);
  flex-shrink: 0;
}
.locked-activity { opacity: 0.5; }
.locked-activity .activity-header { filter: grayscale(80%); }
.completed-activity .activity-number-badge { background: rgba(105,240,174,0.1); border-color: rgba(105,240,174,0.3); }
.locked-msg { border-top: 1px solid rgba(255,255,255,0.05); }

.quiz-radio :deep(.v-label) { color: rgba(255,255,255,0.8) !important; font-size: 0.95rem; }
.quiz-question { padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }

.caso-select :deep(.v-field__outline) { --v-field-border-color: rgba(212,175,55,0.4); }
.reflexion-textarea :deep(.v-field__outline) { --v-field-border-color: rgba(212,175,55,0.4); }

.completion-banner {
  animation: popIn 0.8s ease-out forwards;
  border: 1px solid rgba(212,175,55,0.3) !important;
  background: linear-gradient(135deg, rgba(212,175,55,0.08), rgba(15,15,15,0.9)) !important;
}

/* ===== BUTTONS ===== */
.hover-btn { transition: all 0.3s ease; }
.hover-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.35); }

.gold-btn {
  background: linear-gradient(45deg, #D4AF37, #F2D479) !important;
  color: #1a1a1a !important; font-weight: bold;
}

.pulse-animation { animation: pulse 2s infinite; }
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(212,175,55,0.4); }
  70% { box-shadow: 0 0 0 10px rgba(212,175,55,0); }
  100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
}
.bounce-animation { animation: bounce 2s infinite; }
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

/* ===== ANIMATIONS ===== */
.slide-fade-enter-active { animation: slideFadeIn 0.5s ease-out; }
@keyframes slideFadeIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.93) translateY(12px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.pulse-icon { animation: pulseIcon 3s infinite; }
@keyframes pulseIcon {
  0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(212,175,55,0)); }
  50% { transform: scale(1.1); filter: drop-shadow(0 0 10px rgba(212,175,55,0.5)); }
  100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(212,175,55,0)); }
}
.main-image { transition: transform 0.5s ease; border: 1px solid rgba(255,255,255,0.08); }
.main-image:hover { transform: scale(1.015); }

/* ===== GLASSMORPHISM ===== */
.glass-header {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

/* ===== DYNAMIC BG ===== */
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
.floating-shapes { position: absolute; inset: 0; overflow: hidden; z-index: 0; pointer-events: none; }
.shape {
  position: absolute;
  background: rgba(212,175,55,0.03);
  border: 1px solid rgba(212,175,55,0.08);
  backdrop-filter: blur(3px);
  border-radius: 50%;
  animation: floatShape 20s infinite linear;
}
.shape-1 { width: 300px; height: 300px; left: -50px; top: -50px; animation-duration: 25s; }
.shape-2 { width: 500px; height: 500px; right: -100px; top: 20%; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; animation-duration: 35s; animation-direction: reverse; }
.shape-3 { width: 200px; height: 200px; left: 20%; bottom: -50px; border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; animation-duration: 30s; }
.shape-4 { width: 150px; height: 150px; right: 30%; bottom: 20%; border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; animation-duration: 20s; background: rgba(255,255,255,0.02); }
.shape-5 { width: 400px; height: 400px; left: 40%; top: -100px; animation-duration: 40s; animation-direction: reverse; }
@keyframes floatShape {
  0% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(50px) rotate(180deg) scale(1.1); }
  100% { transform: translateY(0) rotate(360deg) scale(1); }
}
</style>