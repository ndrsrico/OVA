<template>
  <v-app>
    <v-app-bar app color="rgba(20, 20, 20, 0.85)" class="glass-header" theme="dark" elevation="0">
      <v-toolbar-title class="font-serif text-gold">Recursos - Derechos Fundamentales</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white" to="/Welcome" prepend-icon="mdi-home" class="mr-2 hidden-sm-and-down">Inicio</v-btn>
      <v-btn variant="text" color="white" to="/Temario" prepend-icon="mdi-book-open-variant" class="mr-2 hidden-sm-and-down">Temario</v-btn>
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
        <!-- Header -->
        <v-row class="mb-12">
          <v-col cols="12" md="8" class="mx-auto text-center">
            <h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow">RECURSOS DE ESTUDIO</h1>
            <p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6">
              Amplía tu conocimiento sobre Derechos Fundamentales con estos recursos externos confiables
            </p>
            <v-divider class="mt-6 border-opacity-50" color="gold"></v-divider>
          </v-col>
        </v-row>

        <!-- Sección: Documentos Legales -->
        <v-row class="mb-12">
          <v-col cols="12" md="10" class="mx-auto">
            <div class="section-header mb-6">
              <v-icon size="32" color="gold" class="mr-2">mdi-file-document-multiple</v-icon>
              <h2 class="text-h4 font-serif text-white d-inline">Documentos Legales Oficiales</h2>
            </div>

            <v-row>
              <v-col v-for="(doc, index) in documentosLegales" :key="index" cols="12" sm="6" md="4">
                <v-card elevation="0" class="rounded-xl h-100 glass-card resource-card" :style="{ animationDelay: `${index * 0.1}s` }">
                  <v-card-text class="pa-6 d-flex flex-column h-100">
                    <v-icon size="40" color="gold" class="mb-4">{{ doc.icono }}</v-icon>
                    <h3 class="text-h6 font-serif text-gold mb-2">{{ doc.titulo }}</h3>
                    <p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1">{{ doc.descripcion }}</p>
                    <v-btn
                      :href="doc.enlace"
                      target="_blank"
                      color="gold"
                      variant="outlined"
                      size="small"
                      append-icon="mdi-open-in-new"
                      class="mt-auto"
                    >
                      Acceder
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Sección: Artículos Importantes -->
        <v-row class="mb-12">
          <v-col cols="12" md="10" class="mx-auto">
            <div class="section-header mb-6">
              <v-icon size="32" color="gold" class="mr-2">mdi-bookmark-multiple</v-icon>
              <h2 class="text-h4 font-serif text-white d-inline">Artículos de la Constitución</h2>
            </div>

            <v-row>
              <v-col v-for="(articulo, index) in articulosConstitucionales" :key="index" cols="12" sm="6" md="4">
                <v-card elevation="0" class="rounded-xl h-100 glass-card resource-card" :style="{ animationDelay: `${index * 0.1}s` }">
                  <v-card-text class="pa-6 d-flex flex-column h-100">
                    <div class="articulo-numero text-gold font-weight-bold mb-2">{{ articulo.numero }}</div>
                    <h3 class="text-h6 font-serif text-gold mb-2">{{ articulo.titulo }}</h3>
                    <p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1">{{ articulo.descripcion }}</p>
                    <v-chip
                      :color="articulo.categoria === 'Derechos Civiles' ? 'blue' : articulo.categoria === 'Derechos Sociales' ? 'green' : 'amber'"
                      text-color="white"
                      size="small"
                      class="mb-4"
                    >
                      {{ articulo.categoria }}
                    </v-chip>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Sección: Casos Emblemáticos -->
        <v-row class="mb-12">
          <v-col cols="12" md="10" class="mx-auto">
            <div class="section-header mb-6">
              <v-icon size="32" color="gold" class="mr-2">mdi-gavel</v-icon>
              <h2 class="text-h4 font-serif text-white d-inline">Casos Emblemáticos</h2>
            </div>

            <v-row>
              <v-col v-for="(caso, index) in casosEmbematicos" :key="index" cols="12" sm="6">
                <v-card elevation="0" class="rounded-xl h-100 glass-card resource-card" :style="{ animationDelay: `${index * 0.1}s` }">
                  <div class="case-header pa-6">
                    <v-icon size="32" color="gold" class="mr-2">mdi-gavel</v-icon>
                    <span class="text-body-2 text-gold font-weight-bold">{{ caso.año }}</span>
                  </div>
                  <v-divider class="border-opacity-25"></v-divider>
                  <v-card-text class="pa-6 d-flex flex-column h-100">
                    <h3 class="text-h6 font-serif text-gold mb-2">{{ caso.titulo }}</h3>
                    <p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1">{{ caso.descripcion }}</p>
                    <p class="text-caption text-gold font-weight-bold mb-2">Derechos involucrados:</p>
                    <div class="mb-4">
                      <v-chip
                        v-for="(derecho, i) in caso.derechos"
                        :key="i"
                        size="small"
                        color="rgba(212, 175, 55, 0.2)"
                        text-color="gold"
                        class="mr-1 mb-1"
                      >
                        {{ derecho }}
                      </v-chip>
                    </div>
                    <v-btn
                      :href="caso.enlace"
                      target="_blank"
                      color="gold"
                      variant="outlined"
                      size="small"
                      append-icon="mdi-open-in-new"
                      class="mt-auto"
                    >
                      Leer Más
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Sección: Organismos Internacionales -->
        <v-row class="mb-12">
          <v-col cols="12" md="10" class="mx-auto">
            <div class="section-header mb-6">
              <v-icon size="32" color="gold" class="mr-2">mdi-globe</v-icon>
              <h2 class="text-h4 font-serif text-white d-inline">Organismos Internacionales</h2>
            </div>

            <v-row>
              <v-col v-for="(organismo, index) in organismos" :key="index" cols="12" sm="6" md="4">
                <v-card elevation="0" class="rounded-xl h-100 glass-card resource-card" :style="{ animationDelay: `${index * 0.1}s` }">
                  <v-card-text class="pa-6 d-flex flex-column h-100">
                    <v-icon size="40" color="gold" class="mb-4">{{ organismo.icono }}</v-icon>
                    <h3 class="text-h6 font-serif text-gold mb-2">{{ organismo.nombre }}</h3>
                    <p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1">{{ organismo.descripcion }}</p>
                    <v-btn
                      :href="organismo.enlace"
                      target="_blank"
                      color="gold"
                      variant="outlined"
                      size="small"
                      append-icon="mdi-open-in-new"
                      class="mt-auto"
                    >
                      Visitar
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Sección: Recursos Educativos -->
        <v-row class="mb-12">
          <v-col cols="12" md="10" class="mx-auto">
            <div class="section-header mb-6">
              <v-icon size="32" color="gold" class="mr-2">mdi-book-open-page-variant</v-icon>
              <h2 class="text-h4 font-serif text-white d-inline">Recursos Educativos Recomendados</h2>
            </div>

            <v-row>
              <v-col v-for="(recurso, index) in recursosEducativos" :key="index" cols="12" sm="6" md="4">
                <v-card elevation="0" class="rounded-xl h-100 glass-card resource-card" :style="{ animationDelay: `${index * 0.1}s` }">
                  <v-card-text class="pa-6 d-flex flex-column h-100">
                    <v-icon size="40" color="gold" class="mb-4">{{ recurso.icono }}</v-icon>
                    <h3 class="text-h6 font-serif text-gold mb-2">{{ recurso.titulo }}</h3>
                    <p class="text-body-2 text-grey-lighten-2 mb-2">{{ recurso.autor }}</p>
                    <p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1">{{ recurso.descripcion }}</p>
                    <v-chip size="small" color="rgba(212, 175, 55, 0.2)" text-color="gold" class="mb-4 w-fit">
                      {{ recurso.tipo }}
                    </v-chip>
                    <v-btn
                      v-if="recurso.enlace"
                      :href="recurso.enlace"
                      target="_blank"
                      color="gold"
                      variant="outlined"
                      size="small"
                      append-icon="mdi-open-in-new"
                      class="mt-auto"
                    >
                      Acceder
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Footer section -->
        <v-row class="mt-12">
          <v-col cols="12" md="8" class="mx-auto text-center">
            <v-divider class="mb-8 border-opacity-50" color="gold"></v-divider>
            <v-btn
              to="/Welcome"
              color="gold"
              size="large"
              prepend-icon="mdi-home"
              class="font-weight-bold"
            >
              Volver al Inicio
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const documentosLegales = [
  {
    titulo: 'Constitución Política de Colombia 1991',
    descripcion: 'Documento oficial de la Constitución Política de Colombia con todos los artículos que protegen los Derechos Fundamentales.',
    icono: 'mdi-file-document',
    enlace: 'https://www.constitucioncolombia.com/'
  },
  {
    titulo: 'Declaración Universal de DDHH',
    descripcion: 'Documento internacional que define los derechos humanos fundamentales aceptados por todas las naciones.',
    icono: 'mdi-file-document',
    enlace: 'https://www.un.org/es/about-us/universal-declaration-of-human-rights'
  },
  {
    titulo: 'Pacto Internacional de DDHH Civiles y Políticos',
    descripcion: 'Tratado internacional que obliga a los estados a proteger derechos civiles y políticos fundamentales.',
    icono: 'mdi-file-document',
    enlace: 'https://www.ohchr.org/es/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights'
  }
]

const articulosConstitucionales = [
  {
    numero: 'Artículo 1',
    titulo: 'Dignidad Humana',
    descripcion: 'Colombia es un Estado Social de Derecho fundado en el respeto a la dignidad humana.',
    categoria: 'Principios Fundamentales'
  },
  {
    numero: 'Artículo 13',
    titulo: 'Igualdad',
    descripcion: 'Todas las personas nacen libres e iguales ante la ley, sin discriminación alguna.',
    categoria: 'Derechos Civiles'
  },
  {
    numero: 'Artículo 20',
    titulo: 'Libertad de Expresión',
    descripcion: 'Se garantiza a toda persona la libertad de expresar y divulgar su pensamiento.',
    categoria: 'Derechos Civiles'
  },
  {
    numero: 'Artículo 42',
    titulo: 'Familia',
    descripcion: 'La familia es la base de la sociedad. Se constituye por vínculos naturales o jurídicos.',
    categoria: 'Derechos Sociales'
  },
  {
    numero: 'Artículo 48',
    titulo: 'Seguridad Social',
    descripcion: 'Se establece en forma obligatoria la prestación de los servicios de salud.',
    categoria: 'Derechos Sociales'
  },
  {
    numero: 'Artículo 79',
    titulo: 'Ambiente Sano',
    descripcion: 'Toda persona tiene derecho a gozar de un ambiente sano. Es deber del Estado protegerlo.',
    categoria: 'Derechos Ambientales'
  }
]

const casosEmbematicos = [
  {
    titulo: 'Caso Fujimori vs. Perú - Esterilizaciones Forzadas',
    descripcion: 'La Corte Interamericana condenó al Estado peruano por violaciones a derechos reproductivos durante el régimen de Fujimori (1990-2000).',
    año: '2003',
    derechos: ['Dignidad', 'Salud', 'Reproducción'],
    enlace: 'https://www.corteidh.or.cr/casos.cfm'
  },
  {
    titulo: 'Caso Walter López Álvarez vs. Honduras - Libertad de Pensamiento',
    descripcion: 'Decisión histórica sobre el derecho a la libertad de pensamiento en contextos de represión política.',
    año: '2004',
    derechos: ['Expresión', 'Pensamiento', 'Libertad'],
    enlace: 'https://www.corteidh.or.cr/casos.cfm'
  },
  {
    titulo: 'Acción de Tutela T-406/92 - Derecho a la Educación',
    descripcion: 'Hito importante de la Corte Constitucional colombiana sobre el derecho a la educación de menores en situación vulnerable.',
    año: '1992',
    derechos: ['Educación', 'Menores', 'Igualdad'],
    enlace: 'https://www.corteconstitucional.gov.co/'
  },
  {
    titulo: 'Sentencia T-025/04 - Desplazamiento Forzado',
    descripción: 'Sentencia que reconoce el estado de cosas inconstitucional en la situación de desplazados en Colombia.',
    año: '2004',
    derechos: ['Dignidad', 'Vivienda', 'Vida'],
    enlace: 'https://www.corteconstitucional.gov.co/'
  }
]

const organismos = [
  {
    nombre: 'Naciones Unidas - DDHH',
    descripcion: 'Órgano de la ONU dedicado a promover y proteger los derechos humanos en el mundo.',
    icono: 'mdi-globe',
    enlace: 'https://www.un.org/es/about-us'
  },
  {
    nombre: 'Comisión Interamericana DDHH',
    descripcion: 'Organismo internacional que vela por el respeto a los derechos humanos en América Latina.',
    icono: 'mdi-earth',
    enlace: 'https://www.oas.org/es/cidh/'
  },
  {
    nombre: 'Corte Constitucional Colombia',
    descripcion: 'Máximo organismo de protección de derechos fundamentales en Colombia.',
    icono: 'mdi-gavel',
    enlace: 'https://www.corteconstitucional.gov.co/'
  },
  {
    nombre: 'Defensoría del Pueblo Colombia',
    descripcion: 'Institución que defiende y promociona los derechos humanos en Colombia.',
    icono: 'mdi-shield-account',
    enlace: 'https://www.defensoria.gov.co/'
  },
  {
    nombre: 'Amnistía Internacional',
    descripcion: 'Organización global que lucha contra las violaciones de derechos humanos.',
    icono: 'mdi-heart-multiple',
    enlace: 'https://www.amnesty.org/es/'
  },
  {
    nombre: 'Human Rights Watch',
    descripcion: 'Organización investigadora de derechos humanos independiente.',
    icono: 'mdi-magnify',
    enlace: 'https://www.hrw.org/es'
  }
]

const recursosEducativos = [
  {
    titulo: 'Derechos Fundamentales: Nociones Básicas',
    autor: 'Eduardo Cifuentes Muñoz',
    descripcion: 'Guía educativa sobre los conceptos fundamentales y clasificación de derechos.',
    tipo: 'Artículo Académico',
    icono: 'mdi-book-open',
    enlace: 'https://scholar.google.com/'
  },
  {
    titulo: 'La Tutela: Mecanismo de Protección de Derechos',
    autor: 'Corte Constitucional de Colombia',
    descripcion: 'Documento explicativo sobre cómo funciona la acción de tutela en Colombia.',
    tipo: 'Guía Oficial',
    icono: 'mdi-file-document-multiple',
    enlace: 'https://www.corteconstitucional.gov.co/'
  },
  {
    titulo: 'Derechos Humanos: Historia y Desarrollo',
    autor: 'Naciones Unidas',
    descripcion: 'Recurso educativo que presenta la evolución histórica de los derechos humanos.',
    tipo: 'Video Educativo',
    icono: 'mdi-play-circle',
    enlace: 'https://www.un.org/es/videos'
  },
  {
    titulo: 'Constitución Anotada de Colombia',
    autor: 'Varios Autores',
    descripcion: 'Edición comentada de la Constitución con explicaciones de juristas.',
    tipo: 'Libro',
    icono: 'mdi-book-multiple',
    enlace: 'https://www.constitucioncolombia.com/'
  },
  {
    titulo: 'Módulo de Derechos Fundamentales',
    autor: 'Universidad Nacional',
    descripcion: 'Curso en línea sobre teoría general de derechos fundamentales.',
    tipo: 'Curso Online',
    icono: 'mdi-school',
    enlace: 'https://www.unal.edu.co/'
  },
  {
    titulo: 'Jurisprudencia de Derechos Fundamentales',
    autor: 'Corte Constitucional',
    descripcion: 'Base de datos de sentencias sobre protección de derechos fundamentales.',
    tipo: 'Base de Datos',
    icono: 'mdi-database',
    enlace: 'https://www.corteconstitucional.gov.co/'
  }
]
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
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.5);
  background: rgba(30, 30, 30, 0.8) !important;
}

.resource-card {
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

.section-header {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid rgba(212, 175, 55, 0.3);
}

.case-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(212, 175, 55, 0.05);
}

.text-glow {
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.slide-fade-in {
  animation: slide-fade-in 0.6s ease-out;
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

.w-fit {
  width: fit-content;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-header h2 {
    margin-top: 12px;
  }
}
</style>
