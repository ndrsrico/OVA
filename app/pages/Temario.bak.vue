<template>
  <v-app>
    <v-app-bar app color="rgba(20, 20, 20, 0.8)" theme="dark" elevation="0">
      <v-toolbar-title>Temario</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="dynamic-bg">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <h1 class="text-h3 text-white mb-8">Temario - Derechos Fundamentales</h1>
            <p class="text-white">Completa los temas en orden. Cada tema desbloqueará el siguiente.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

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
    descripcion: 'Igualdad de oportunidades y justicia social integral',
    icon: 'mdi-scale-balance'
  },
  {
    titulo: 'Derechos de 3ª Generación',
    descripcion: 'Solidaridad, paz y medio ambiente sano colectivo',
    icon: 'mdi-dove'
  },
  {
    titulo: 'Garantías y Tutela',
    descripcion: 'Mecanismos para defender tus derechos de forma inmediata',
    icon: 'mdi-gavel'
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

/* Estados de temas */
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

.header-completed {
  background: rgba(76, 175, 80, 0.1);
}

.header-active {
  background: rgba(212, 175, 55, 0.1);
}

.header-locked {
  background: rgba(100, 100, 100, 0.1);
}

.font-serif {
  font-family: 'Cinzel', serif;
  letter-spacing: 0.05em;
}

.tema-title {
  color: #D4AF37;
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: bold;
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
