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

                <!-- Tabs para alternar entre Teoría y Actividad -->
                <v-tabs v-model="tabActual" align-tabs="center" color="gold" class="border-b" theme="dark">
                  <v-tab value="teoria" prepend-icon="mdi-book-open-page-variant">
                    Contenido Teórico
                  </v-tab>
                  <v-tab value="actividad" prepend-icon="mdi-controller-classic">
                    Actividad Práctica
                    <v-icon v-if="actividadesCompletadas[temaActual.id]" color="green-accent-3" size="16" class="ml-2">mdi-check-circle</v-icon>
                  </v-tab>
                </v-tabs>

                <v-window v-model="tabActual">
                  <!-- Pestaña Teoría -->
                  <v-window-item value="teoria">
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
                          width="100%"
                          height="100%"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                          allowfullscreen=""
                          loading="lazy"
                          style="border: none; position: absolute; top: 0; left: 0;"
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
                  </v-window-item>

                  <!-- Pestaña Actividad Práctica -->
                  <v-window-item value="actividad">
                    <v-card-text class="pa-8 text-white">
                      <!-- TEMA 1: CONCEPTOS Y DIGNIDAD -->
                      <div v-if="temaActual.id === 1">
                        <h3 class="font-serif text-h6 text-gold mb-3 d-flex align-center">
                          <v-icon color="gold" class="mr-2">mdi-help-circle</v-icon>
                          Desafío 1: Conceptos y Dignidad Humana
                        </h3>
                        <p class="text-body-2 text-grey-lighten-2 mb-6">
                          Responde las siguientes preguntas para evaluar tu comprensión sobre la base de los derechos fundamentales. Necesitas responder correctamente al menos 2 de las 3 preguntas para superar el desafío.
                        </p>
                        
                        <div v-for="(preg, pi) in quizTema1" :key="pi" class="quiz-question mb-6">
                          <p class="text-body-1 text-white font-weight-bold mb-3">
                            {{ pi + 1 }}. {{ preg.pregunta }}
                          </p>
                          <v-radio-group
                            v-model="respuestasTema1[pi]"
                            :disabled="tema1QuizEnviado"
                            class="mt-0"
                          >
                            <v-radio
                              v-for="(op, oi) in preg.opciones"
                              :key="oi"
                              :label="op"
                              :value="oi"
                              :color="tema1QuizEnviado 
                                ? (oi === preg.correcta ? 'green-accent-3' : (respuestasTema1[pi] === oi ? 'red-accent-2' : 'grey'))
                                : 'gold'"
                              class="quiz-radio mb-1"
                            ></v-radio>
                          </v-radio-group>
                          <v-expand-transition>
                            <v-alert
                              v-if="tema1QuizEnviado"
                              variant="tonal"
                              :color="respuestasTema1[pi] === preg.correcta ? 'green' : 'red'"
                              density="compact"
                              class="mt-2"
                            >
                              <span v-if="respuestasTema1[pi] === preg.correcta">¡Correcto! {{ preg.explicacion }}</span>
                              <span v-else>Incorrecto. Respuesta correcta: <strong>{{ preg.opciones[preg.correcta] }}</strong>. {{ preg.explicacion }}</span>
                            </v-alert>
                          </v-expand-transition>
                        </div>

                        <div v-if="!tema1QuizEnviado" class="d-flex justify-end">
                          <v-btn
                            color="gold-btn"
                            class="rounded-pill font-weight-bold px-8 hover-btn"
                            :disabled="respuestasTema1.filter(r => r !== null).length < quizTema1.length"
                            @click="enviarQuizTema1"
                            append-icon="mdi-send"
                          >Enviar Respuestas</v-btn>
                        </div>

                        <div v-if="tema1QuizEnviado" class="text-center mt-4">
                          <v-alert
                            :color="tema1Correctas ? 'success' : 'error'"
                            variant="tonal"
                            class="mb-4"
                          >
                            Obtuviste <strong>{{ tema1Puntaje }}</strong> de <strong>3</strong> respuestas correctas.
                            <span v-if="tema1Correctas"> ¡Excelente! Desafío superado. El siguiente tema ha sido desbloqueado.</span>
                            <span v-else> No lograste el puntaje mínimo (2 correctas). Inténtalo de nuevo para desbloquear el siguiente tema.</span>
                          </v-alert>
                          <v-btn v-if="!tema1Correctas" variant="outlined" color="white" class="rounded-pill" @click="reiniciarQuizTema1" prepend-icon="mdi-refresh">Reintentar</v-btn>
                        </div>
                      </div>

                      <!-- TEMA 2: PRIMERA GENERACIÓN -->
                      <div v-else-if="temaActual.id === 2">
                        <h3 class="font-serif text-h6 text-gold mb-3 d-flex align-center">
                          <v-icon color="gold" class="mr-2">mdi-file-document-edit</v-icon>
                          Desafío 2: Libertad de Expresión (Análisis de Caso)
                        </h3>
                        <p class="text-body-2 text-grey-lighten-2 mb-6">
                          Analiza el siguiente caso de la vida real y selecciona cuál de las opciones representa la vulneración del derecho y la acción correspondiente.
                        </p>
                        
                        <v-card variant="outlined" class="pa-4 mb-6 rounded-lg border-opacity-25" style="background:rgba(255,255,255,0.02)">
                          <h4 class="text-subtitle-1 text-white font-weight-bold mb-2">Caso: El Periodista Silenciado</h4>
                          <p class="text-body-2 text-grey-lighten-2" style="line-height:1.7;">
                            Un periodista local publicó una columna de investigación documentando supuestos actos de corrupción en la contratación de obras municipales. A las pocas horas de la publicación, la alcaldía emitió un comunicado ordenando suspender las transmisiones del periodista en la emisora municipal e iniciando un proceso de censura sobre sus futuras notas bajo el argumento de que "generaba pánico social y distorsionaba la gestión pública".
                          </p>
                        </v-card>

                        <v-select
                          v-model="respuestaTema2"
                          :items="opcionesTema2"
                          item-title="texto"
                          item-value="id"
                          label="¿Qué derecho fundamental ha sido vulnerado y qué principio constitucional se rompe?"
                          variant="outlined"
                          color="gold"
                          :disabled="tema2Enviado"
                          class="mb-6"
                        ></v-select>

                        <div v-if="!tema2Enviado" class="d-flex justify-end">
                          <v-btn
                            color="gold-btn"
                            class="rounded-pill font-weight-bold px-8 hover-btn"
                            :disabled="!respuestaTema2"
                            @click="enviarTema2"
                            append-icon="mdi-send"
                          >Enviar Análisis</v-btn>
                        </div>

                        <v-expand-transition>
                          <div v-if="tema2Enviado" class="text-center mt-4">
                            <v-alert
                              :color="tema2Correcto ? 'success' : 'error'"
                              variant="tonal"
                              class="mb-4"
                            >
                              <span v-if="tema2Correcto"><strong>¡Correcto!</strong> La libertad de expresión prohíbe la censura previa. El Estado no puede silenciar opiniones periodísticas bajo argumentos de orden público generalizado. El siguiente tema ha sido desbloqueado.</span>
                              <span v-else><strong>Incorrecto.</strong> Tu opción seleccionada no aborda directamente la prohibición de censura previa o el debido proceso. Inténtalo de nuevo.</span>
                            </v-alert>
                            <v-btn v-if="!tema2Correcto" variant="outlined" color="white" class="rounded-pill" @click="reiniciarTema2" prepend-icon="mdi-refresh">Reintentar</v-btn>
                          </div>
                        </v-expand-transition>
                      </div>

                      <!-- TEMA 3: SEGUNDA GENERACIÓN -->
                      <div v-else-if="temaActual.id === 3">
                        <h3 class="font-serif text-h6 text-gold mb-3 d-flex align-center">
                          <v-icon color="gold" class="mr-2">mdi-scale-balance</v-icon>
                          Desafío 3: Derechos Sociales y Económicos (Caso de Trabajo Digno)
                        </h3>
                        <p class="text-body-2 text-grey-lighten-2 mb-6">
                          Revisa la situación laboral del siguiente caso e identifica la transgresión constitucional correcta.
                        </p>
                        
                        <v-card variant="outlined" class="pa-4 mb-6 rounded-lg border-opacity-25" style="background:rgba(255,255,255,0.02)">
                          <h4 class="text-subtitle-1 text-white font-weight-bold mb-2">Caso: El Despido sin Garantías</h4>
                          <p class="text-body-2 text-grey-lighten-2" style="line-height:1.7;">
                            María, empleada de servicios generales de una empresa por más de 3 años, fue despedida verbalmente por su supervisor inmediato tras reportar que se encontraba en su segundo mes de embarazo. El empleador se negó a pagarle sus prestaciones de ley aduciendo que ella prestaba servicios externos por horas y que no existía contrato formal escrito.
                          </p>
                        </v-card>

                        <v-select
                          v-model="respuestaTema3"
                          :items="opcionesTema3"
                          item-title="texto"
                          item-value="id"
                          label="¿Qué garantías constitucionales del derecho al trabajo fueron vulneradas?"
                          variant="outlined"
                          color="gold"
                          :disabled="tema3Enviado"
                          class="mb-6"
                        ></v-select>

                        <div v-if="!tema3Enviado" class="d-flex justify-end">
                          <v-btn
                            color="gold-btn"
                            class="rounded-pill font-weight-bold px-8 hover-btn"
                            :disabled="!respuestaTema3"
                            @click="enviarTema3"
                            append-icon="mdi-send"
                          >Enviar Análisis</v-btn>
                        </div>

                        <v-expand-transition>
                          <div v-if="tema3Enviado" class="text-center mt-4">
                            <v-alert
                              :color="tema3Correcto ? 'success' : 'error'"
                              variant="tonal"
                              class="mb-4"
                            >
                              <span v-if="tema3Correcto"><strong>¡Correcto!</strong> El derecho al trabajo digno (segunda generación) y la especial protección a la maternidad prohíben el despido por embarazo y garantizan la primacía de la realidad sobre las formas jurídicas (aunque sea un contrato verbal). El siguiente tema ha sido desbloqueado.</span>
                              <span v-else><strong>Incorrecto.</strong> La opción seleccionada no cubre la protección laboral reforzada en el embarazo y el principio de realidad. Inténtalo de nuevo.</span>
                            </v-alert>
                            <v-btn v-if="!tema3Correcto" variant="outlined" color="white" class="rounded-pill" @click="reiniciarTema3" prepend-icon="mdi-refresh">Reintentar</v-btn>
                          </div>
                        </v-expand-transition>
                      </div>

                      <!-- TEMA 4: TERCERA GENERACIÓN -->
                      <div v-else-if="temaActual.id === 4">
                        <h3 class="font-serif text-h6 text-gold mb-3 d-flex align-center">
                          <v-icon color="gold" class="mr-2">mdi-dove</v-icon>
                          Desafío 4: Derechos Colectivos y del Ambiente (Caso Río Contaminado)
                        </h3>
                        <p class="text-body-2 text-grey-lighten-2 mb-6">
                          Analiza el impacto ambiental y el conflicto de derechos del siguiente caso.
                        </p>
                        
                        <v-card variant="outlined" class="pa-4 mb-6 rounded-lg border-opacity-25" style="background:rgba(255,255,255,0.02)">
                          <h4 class="text-subtitle-1 text-white font-weight-bold mb-2">Caso: El Río Turbio</h4>
                          <p class="text-body-2 text-grey-lighten-2" style="line-height:1.7;">
                            Una gran fábrica papelera comenzó a verter sedimentos industriales químicos en el principal río que abastece a un municipio ribereño. Como consecuencia, las familias pesqueras de la zona se quedaron sin sustento económico, la fauna acuática pereció y varios niños presentaron erupciones cutáneas. La fábrica posee licencias comerciales pero carece de un plan de manejo de residuos adecuado.
                          </p>
                        </v-card>

                        <v-select
                          v-model="respuestaTema4"
                          :items="opcionesTema4"
                          item-title="texto"
                          item-value="id"
                          label="¿Cuál es la vía constitucional idónea para proteger a la comunidad en este conflicto de derechos?"
                          variant="outlined"
                          color="gold"
                          :disabled="tema4Enviado"
                          class="mb-6"
                        ></v-select>

                        <div v-if="!tema4Enviado" class="d-flex justify-end">
                          <v-btn
                            color="gold-btn"
                            class="rounded-pill font-weight-bold px-8 hover-btn"
                            :disabled="!respuestaTema4"
                            @click="enviarTema4"
                            append-icon="mdi-send"
                          >Enviar Análisis</v-btn>
                        </div>

                        <v-expand-transition>
                          <div v-if="tema4Enviado" class="text-center mt-4">
                            <v-alert
                              :color="tema4Correcto ? 'success' : 'error'"
                              variant="tonal"
                              class="mb-4"
                            >
                              <span v-if="tema4Correcto"><strong>¡Correcto!</strong> El medio ambiente sano es un derecho de tercera generación defendible mediante acciones populares, pero cuando afecta la salud y subsistencia directa de las personas, se asocia por conexidad a derechos fundamentales (salud y vida) pudiendo emplearse la Acción de Tutela. El siguiente tema ha sido desbloqueado.</span>
                              <span v-else><strong>Incorrecto.</strong> La opción elegida no contempla el principio de solidaridad colectiva ni la conexidad del ambiente sano con la vida digna. Inténtalo de nuevo.</span>
                            </v-alert>
                            <v-btn v-if="!tema4Correcto" variant="outlined" color="white" class="rounded-pill" @click="reiniciarTema4" prepend-icon="mdi-refresh">Reintentar</v-btn>
                          </div>
                        </v-expand-transition>
                      </div>

                      <!-- TEMA 5: GARANTÍAS Y TUTELA -->
                      <div v-else-if="temaActual.id === 5">
                        <h3 class="font-serif text-h6 text-gold mb-3 d-flex align-center">
                          <v-icon color="gold" class="mr-2">mdi-gavel</v-icon>
                          Desafío 5: Garantías Constitucionales y Acción de Tutela
                        </h3>
                        <p class="text-body-2 text-grey-lighten-2 mb-6">
                          Responde las preguntas basadas en escenarios prácticos de vulneración para definir cuál garantía judicial utilizar. Debes acertar las 3 preguntas para completar el temario.
                        </p>
                        
                        <div v-for="(preg, pi) in quizTema5" :key="pi" class="quiz-question mb-6">
                          <p class="text-body-1 text-white font-weight-bold mb-3">
                            {{ pi + 1 }}. {{ preg.pregunta }}
                          </p>
                          <v-radio-group
                            v-model="respuestasTema5[pi]"
                            :disabled="tema5QuizEnviado"
                            class="mt-0"
                          >
                            <v-radio
                              v-for="(op, oi) in preg.opciones"
                              :key="oi"
                              :label="op"
                              :value="oi"
                              :color="tema5QuizEnviado 
                                ? (oi === preg.correcta ? 'green-accent-3' : (respuestasTema5[pi] === oi ? 'red-accent-2' : 'grey'))
                                : 'gold'"
                              class="quiz-radio mb-1"
                            ></v-radio>
                          </v-radio-group>
                          <v-expand-transition>
                            <v-alert
                              v-if="tema5QuizEnviado"
                              variant="tonal"
                              :color="respuestasTema5[pi] === preg.correcta ? 'green' : 'red'"
                              density="compact"
                              class="mt-2"
                            >
                              <span v-if="respuestasTema5[pi] === preg.correcta">¡Correcto! {{ preg.explicacion }}</span>
                              <span v-else>Incorrecto. Respuesta correcta: <strong>{{ preg.opciones[preg.correcta] }}</strong>. {{ preg.explicacion }}</span>
                            </v-alert>
                          </v-expand-transition>
                        </div>

                        <div v-if="!tema5QuizEnviado" class="d-flex justify-end">
                          <v-btn
                            color="gold-btn"
                            class="rounded-pill font-weight-bold px-8 hover-btn"
                            :disabled="respuestasTema5.filter(r => r !== null).length < quizTema5.length"
                            @click="enviarQuizTema5"
                            append-icon="mdi-send"
                          >Enviar Respuestas</v-btn>
                        </div>

                        <div v-if="tema5QuizEnviado" class="text-center mt-4">
                          <v-alert
                            :color="tema5Correctas ? 'success' : 'error'"
                            variant="tonal"
                            class="mb-4"
                          >
                            Obtuviste <strong>{{ tema5Puntaje }}</strong> de <strong>3</strong> respuestas correctas.
                            <span v-if="tema5Correctas"> ¡Felicidades! Has completado todas las actividades del temario. Has desbloqueado el módulo "06. Recursos".</span>
                            <span v-else> No lograste el puntaje de 3/3. Repasa las garantías e inténtalo de nuevo para finalizar el temario.</span>
                          </v-alert>
                          <v-btn v-if="!tema5Correctas" variant="outlined" color="white" class="rounded-pill" @click="reiniciarQuizTema5" prepend-icon="mdi-refresh">Reintentar</v-btn>
                        </div>
                      </div>
                    </v-card-text>
                  </v-window-item>
                </v-window>

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

                  <!-- Si el usuario está en la teoría y aún no completa la actividad -->
                  <v-btn
                    v-if="tabActual === 'teoria' && !actividadesCompletadas[temaActual.id]"
                    color="gold-btn"
                    append-icon="mdi-arrow-right"
                    @click="tabActual = 'actividad'"
                    class="hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                  >Ir a la Actividad</v-btn>

                  <!-- Si está en la pestaña de actividad y no la ha completado -->
                  <span v-else-if="!actividadesCompletadas[temaActual.id]" class="text-caption text-amber font-weight-bold">
                    Completa el desafío para continuar
                  </span>

                  <!-- Si ya completó la actividad y hay un tema siguiente -->
                  <v-btn
                    v-else-if="temaActual.id < 5"
                    color="gold-btn"
                    append-icon="mdi-chevron-right"
                    @click="marcarCompletadoYSiguiente"
                    class="hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                  >Siguiente Tema</v-btn>

                  <!-- Si ya completó la actividad del Tema 5 -->
                  <v-btn
                    v-else
                    color="green-accent-4"
                    variant="flat"
                    append-icon="mdi-arrow-right"
                    to="/Recursos"
                    class="hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                  >Ir a Recursos</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
       import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const drawer = ref(true)
const vistaActiva = ref('temas')
const tabActual = ref('teoria')

const maxTemaDesbloqueado = useState('maxTemaDesbloqueado', () => 1)

// Progreso general de las actividades integradas por tema
const actividadesCompletadas = ref({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false
})

// ---- Actividad Tema 1: Quiz (Conceptos) ----
const quizTema1 = [
  {
    pregunta: '¿Cuál es el fundamento supremo de los derechos fundamentales en Colombia?',
    opciones: ['La soberanía del Estado', 'La dignidad humana', 'El Código Civil', 'El poder legislativo'],
    correcta: 1,
    explicacion: 'La dignidad humana es el valor supremo que justifica la existencia y protección de todos los derechos fundamentales en el Estado Social de Derecho.'
  },
  {
    pregunta: '¿Cuál es una característica clave de los derechos fundamentales?',
    opciones: ['Son temporales y revocables', 'Se pueden vender o ceder', 'Son inalienables, imprescriptibles e irrenunciables', 'Solo aplican a ciudadanos mayores de edad'],
    correcta: 2,
    explicacion: 'Los derechos fundamentales son inherentes a la condición humana, por lo que no se pueden transferir, no se extinguen en el tiempo y no se puede renunciar a ellos.'
  },
  {
    pregunta: '¿En qué parte de la Constitución de 1991 se consagran principalmente los derechos fundamentales?',
    opciones: ['Título II, Capítulo 1 (Artículos 11 al 41)', 'Título I (Artículos 1 al 10)', 'Título II, Capítulo 3 (Artículos 78 al 82)', 'Título IV (Artículos 113 al 131)'],
    correcta: 0,
    explicacion: 'Los derechos de aplicación inmediata y fundamentales se encuentran principalmente consagrados en el Título II, Capítulo 1 de nuestra Carta Política.'
  }
]
const respuestasTema1 = ref([null, null, null])
const tema1QuizEnviado = ref(false)
const tema1Puntaje = ref(0)
const tema1Correctas = ref(false)

const enviarQuizTema1 = () => {
  let correctas = 0
  quizTema1.forEach((p, i) => {
    if (respuestasTema1.value[i] === p.correcta) correctas++
  })
  tema1Puntaje.value = correctas
  tema1QuizEnviado.value = true
  
  if (correctas >= 2) {
    tema1Correctas.value = true
    actividadesCompletadas.value[1] = true
    if (maxTemaDesbloqueado.value === 1) {
      maxTemaDesbloqueado.value = 2
    }
  } else {
    tema1Correctas.value = false
  }
  saveProgress()
}

const reiniciarQuizTema1 = () => {
  respuestasTema1.value = [null, null, null]
  tema1QuizEnviado.value = false
  tema1Puntaje.value = 0
  tema1Correctas.value = false
  saveProgress()
}

// ---- Actividad Tema 2: Libertad de Expresión (Caso) ----
const opcionesTema2 = [
  { id: 1, texto: 'Vulnera el derecho al trabajo e irrespeta las normativas de la alcaldía local.' },
  { id: 2, texto: 'Vulnera la libertad de expresión (Art. 20) al censurar previamente la columna de opinión del periodista, lo cual está explícitamente prohibido.' },
  { id: 3, texto: 'Vulnera el derecho a la intimidad del alcalde, ya que el periodista divulgó supuestos actos de corrupción sin una sentencia judicial previa.' }
]
const respuestaTema2 = ref(null)
const tema2Enviado = ref(false)
const tema2Correcto = ref(false)

const enviarTema2 = () => {
  tema2Enviado.value = true
  if (respuestaTema2.value === 2) {
    tema2Correcto.value = true
    actividadesCompletadas.value[2] = true
    if (maxTemaDesbloqueado.value === 2) {
      maxTemaDesbloqueado.value = 3
    }
  } else {
    tema2Correcto.value = false
  }
  saveProgress()
}

const reiniciarTema2 = () => {
  respuestaTema2.value = null
  tema2Enviado.value = false
  tema2Correcto.value = false
  saveProgress()
}

// ---- Actividad Tema 3: Trabajo Digno (Caso) ----
const opcionesTema3 = [
  { id: 1, texto: 'Vulnera el debido proceso judicial y la libertad de culto de María en su sitio de trabajo.' },
  { id: 2, texto: 'Vulnera el derecho a un medio ambiente sano en el establecimiento donde trabajaba.' },
  { id: 3, texto: 'Vulnera el derecho al trabajo digno (Art. 25), la protección a la maternidad (fuero de maternidad) y el principio de primacía de la realidad sobre las formas.' }
]
const respuestaTema3 = ref(null)
const tema3Enviado = ref(false)
const tema3Correcto = ref(false)

const enviarTema3 = () => {
  tema3Enviado.value = true
  if (respuestaTema3.value === 3) {
    tema3Correcto.value = true
    actividadesCompletadas.value[3] = true
    if (maxTemaDesbloqueado.value === 3) {
      maxTemaDesbloqueado.value = 4
    }
  } else {
    tema3Correcto.value = false
  }
  saveProgress()
}

const reiniciarTema3 = () => {
  respuestaTema3.value = null
  tema3Enviado.value = false
  tema3Correcto.value = false
  saveProgress()
}

// ---- Actividad Tema 4: Medio Ambiente Sano (Caso) ----
const opcionesTema4 = [
  { id: 1, texto: 'Interponer una Acción de Tutela argumentando la conexidad de la contaminación del agua con derechos fundamentales como la salud, la vida y la subsistencia digna.' },
  { id: 2, texto: 'Interponer una acción de Habeas Data para revisar los servidores y registros contables de la empresa papelera.' },
  { id: 3, texto: 'Interponer una Acción de Cumplimiento para obligar al Ministerio de Relaciones Exteriores a interceder ante organismos internacionales.' }
]
const respuestaTema4 = ref(null)
const tema4Enviado = ref(false)
const tema4Correcto = ref(false)

const enviarTema4 = () => {
  tema4Enviado.value = true
  if (respuestaTema4.value === 1) {
    tema4Correcto.value = true
    actividadesCompletadas.value[4] = true
    if (maxTemaDesbloqueado.value === 4) {
      maxTemaDesbloqueado.value = 5
    }
  } else {
    tema4Correcto.value = false
  }
  saveProgress()
}

const reiniciarTema4 = () => {
  respuestaTema4.value = null
  tema4Enviado.value = false
  tema4Correcto.value = false
  saveProgress()
}

// ---- Actividad Tema 5: Garantías y Tutela (Quiz) ----
const quizTema5 = [
  {
    pregunta: 'Si un ciudadano es privado de la libertad ilegalmente y transcurren más de 36 horas sin ser presentado ante un juez, ¿qué mecanismo debe interponer?',
    opciones: ['Acción de Tutela', 'Acción Popular', 'Acción de Habeas Corpus', 'Acción de Cumplimiento'],
    correcta: 2,
    explicacion: 'El Habeas Corpus (Art. 30 C.P.) es el mecanismo constitucional exclusivo para proteger la libertad individual frente a detenciones arbitrarias y debe resolverse en un plazo máximo de 36 horas.'
  },
  {
    pregunta: '¿Cuál es el mecanismo preferente e inmediato para reclamar la protección de la salud o la vida digna cuando son vulneradas por una entidad pública o privada?',
    opciones: ['Acción Popular', 'Acción de Tutela', 'Acción de Cumplimiento', 'Habeas Data'],
    correcta: 1,
    explicacion: 'La Acción de Tutela (Art. 86 C.P.) permite reclamar ante cualquier juez, en todo momento y lugar, la protección inmediata de los derechos fundamentales.'
  },
  {
    pregunta: 'Si una entidad financiera reporta información crediticia errónea o desactualizada de un usuario en una central de riesgo y se niega a corregirla, ¿qué acción procede?',
    opciones: ['Acción de Tutela por Habeas Data', 'Acción de Cumplimiento', 'Acción Popular', 'Denuncia penal por estafa'],
    correcta: 0,
    explicacion: 'La Acción de Habeas Data (derivada del Art. 15 C.P.) garantiza a los ciudadanos el derecho a conocer, actualizar y rectificar la información recogida sobre ellos en bases de datos.'
  }
]
const respuestasTema5 = ref([null, null, null])
const tema5QuizEnviado = ref(false)
const tema5Puntaje = ref(0)
const tema5Correctas = ref(false)

const enviarQuizTema5 = () => {
  let correctas = 0
  quizTema5.forEach((p, i) => {
    if (respuestasTema5.value[i] === p.correcta) correctas++
  })
  tema5Puntaje.value = correctas
  tema5QuizEnviado.value = true
  
  if (correctas === 3) {
    tema5Correctas.value = true
    actividadesCompletadas.value[5] = true
    if (maxTemaDesbloqueado.value === 5) {
      maxTemaDesbloqueado.value = 6
    }
  } else {
    tema5Correctas.value = false
  }
  saveProgress()
}

const reiniciarQuizTema5 = () => {
  respuestasTema5.value = [null, null, null]
  tema5QuizEnviado.value = false
  tema5Puntaje.value = 0
  tema5Correctas.value = false
  saveProgress()
}

// ---- Persistencia localStorage ----
onMounted(() => {
  const saved = localStorage.getItem('ovaProgress')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.maxTema) maxTemaDesbloqueado.value = data.maxTema
      if (data.actividadesCompletadas) actividadesCompletadas.value = data.actividadesCompletadas
      if (data.respuestasTema1) respuestasTema1.value = data.respuestasTema1
      if (data.tema1QuizEnviado !== undefined) tema1QuizEnviado.value = data.tema1QuizEnviado
      if (data.tema1Puntaje !== undefined) tema1Puntaje.value = data.tema1Puntaje
      if (data.tema1Correctas !== undefined) tema1Correctas.value = data.tema1Correctas
      
      if (data.respuestaTema2 !== undefined) respuestaTema2.value = data.respuestaTema2
      if (data.tema2Enviado !== undefined) tema2Enviado.value = data.tema2Enviado
      if (data.tema2Correcto !== undefined) tema2Correcto.value = data.tema2Correcto
      
      if (data.respuestaTema3 !== undefined) respuestaTema3.value = data.respuestaTema3
      if (data.tema3Enviado !== undefined) tema3Enviado.value = data.tema3Enviado
      if (data.tema3Correcto !== undefined) tema3Correcto.value = data.tema3Correcto
      
      if (data.respuestaTema4 !== undefined) respuestaTema4.value = data.respuestaTema4
      if (data.tema4Enviado !== undefined) tema4Enviado.value = data.tema4Enviado
      if (data.tema4Correcto !== undefined) tema4Correcto.value = data.tema4Correcto
      
      if (data.respuestasTema5) respuestasTema5.value = data.respuestasTema5
      if (data.tema5QuizEnviado !== undefined) tema5QuizEnviado.value = data.tema5QuizEnviado
      if (data.tema5Puntaje !== undefined) tema5Puntaje.value = data.tema5Puntaje
      if (data.tema5Correctas !== undefined) tema5Correctas.value = data.tema5Correctas
    } catch(e) { /* ignore */ }
  }

  // Parse query parameter to find requested theme
  const queryTemaId = parseInt(route.query.tema)
  if (queryTemaId && queryTemaId >= 1 && queryTemaId <= 5 && queryTemaId <= maxTemaDesbloqueado.value) {
    temaActual.value = menuTemas.find(t => t.id === queryTemaId) || menuTemas[0]
  } else {
    // Fallback to the saved progress theme or theme 1
    const savedTema = menuTemas.find(t => t.id === maxTemaDesbloqueado.value) || menuTemas[0]
    temaActual.value = savedTema
  }
})

const saveProgress = () => {
  localStorage.setItem('ovaProgress', JSON.stringify({
    maxTema: maxTemaDesbloqueado.value,
    actividadesCompletadas: actividadesCompletadas.value,
    respuestasTema1: respuestasTema1.value,
    tema1QuizEnviado: tema1QuizEnviado.value,
    tema1Puntaje: tema1Puntaje.value,
    tema1Correctas: tema1Correctas.value,
    respuestaTema2: respuestaTema2.value,
    tema2Enviado: tema2Enviado.value,
    tema2Correcto: tema2Correcto.value,
    respuestaTema3: respuestaTema3.value,
    tema3Enviado: tema3Enviado.value,
    tema3Correcto: tema3Correcto.value,
    respuestaTema4: respuestaTema4.value,
    tema4Enviado: tema4Enviado.value,
    tema4Correcto: tema4Correcto.value,
    respuestasTema5: respuestasTema5.value,
    tema5QuizEnviado: tema5QuizEnviado.value,
    tema5Puntaje: tema5Puntaje.value,
    tema5Correctas: tema5Correctas.value
  }))
}

watch([
  maxTemaDesbloqueado,
  actividadesCompletadas,
  respuestasTema1,
  tema1QuizEnviado,
  tema1Puntaje,
  tema1Correctas,
  respuestaTema2,
  tema2Enviado,
  tema2Correcto,
  respuestaTema3,
  tema3Enviado,
  tema3Correcto,
  respuestaTema4,
  tema4Enviado,
  tema4Correcto,
  respuestasTema5,
  tema5QuizEnviado,
  tema5Puntaje,
  tema5Correctas
], saveProgress, { deep: true })

watch(temaActual, () => {
  tabActual.value = 'teoria'
})

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
    video: 'https://www.youtube.com/embed/K5W3hYwfNuc'
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
    video: 'https://www.youtube.com/embed/12hWT4U69yU'
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
    video: 'https://www.youtube.com/embed/IY6yYklnI7Y'
  },
  {
    id: 4,
    titulo: '4. Derechos de Tercera Generación',
    subtitulo: 'Derechos Solidarios, Colectivos y del Medio Ambiente',
    icon: 'mdi-dove',
    imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    contenido: 'Los derechos de tercera generación emergen en la segunda mitad del siglo XX como respuesta a problemáticas que ningún individuo ni Estado puede resolver por sí solo: la crisis ambiental, los conflictos bélicos globales y la desigualdad entre naciones. Su principio rector es la solidaridad: obligan tanto a los Estados como a las empresas, las organizaciones internacionales y a cada ciudadano. En Colombia, el Capítulo 3 del Título II (Arts. 78 al 82) consagra los derechos colectivos y del ambiente: el derecho a un ambiente sano (Art. 79), el deber del Estado de prevenir el deterioro ambiental (Art. 80), y la protección de los consumidores (Art. 78). La Corte Constitucional ha reconocido además el derecho a la paz (Art. 22) como un derecho y un deber ciudadano de obligatorio cumplimiento. Las Acciones Populares y de Grupo son los mecanismos judiciales diseñados para proteger estos derechos colectivos.',
    importante: 'El Acuerdo de Paris (2015) y la jurisprudencia de la Corte Suprema colombiana (STC4360-2018) reconocieron a la Amazonía colombiana como "sujeto de derechos", la ampliando la protección ambiental de tercera generación.',
    puntosClave: ['Derecho al ambiente sano (Art. 79)', 'Derecho a la paz (Art. 22)', 'Protección del consumidor (Art. 78)', 'Acciones Populares como mecanismo de defensa'],
    video: 'https://www.youtube.com/embed/AQ2GvHg0icg'
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
    video: 'https://www.youtube.com/embed/hp8hqeWI8dE'
  }
]

const temaActual = ref(menuTemas[0])

const handleImageError = (event) => {
  event.target.src = 'https://images.unsplash.com/photo-1589829016171-28862114348b?auto=format&fit=crop&q=80&w=1200'
}

const marcarCompletadoYSiguiente = () => {
  if (temaActual.value.id === maxTemaDesbloqueado.value && actividadesCompletadas.value[temaActual.value.id]) {
    maxTemaDesbloqueado.value++
  }
  cambiarTema(1)
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