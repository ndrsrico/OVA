<template>
  <v-app>
    <v-app-bar app color="rgba(33, 33, 33, 0.8)" class="glass-header" theme="dark" elevation="0">
      <v-toolbar-title class="font-serif text-gold ml-4">Constitución Interactiva</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white" to="/" prepend-icon="mdi-home" class="mr-2 hidden-sm-and-down">Inicio</v-btn>
      <v-btn variant="text" color="white" to="/introduccion" prepend-icon="mdi-book-open-variant" class="mr-2 hidden-sm-and-down">Temario</v-btn>
      <v-btn variant="text" color="white" to="/Actividades" prepend-icon="mdi-controller-classic" class="mr-2 hidden-sm-and-down">Actividades</v-btn>
      <v-btn variant="outlined" color="gold" to="/Creditos" prepend-icon="mdi-account-group" class="mr-4">Créditos</v-btn>
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

      <v-container class="py-16 position-relative z-1">
        <v-row class="mb-12">
          <v-col cols="12" class="text-center">
            <h1 class="text-h2 font-serif text-white mb-4 slide-fade-in text-glow">Equipo Desarrollador</h1>
            <p class="text-h6 font-serif-italic text-amber-lighten-4 slide-fade-in-delayed">
              Conoce a las mentes creativas detrás de este Objeto Virtual de Aprendizaje
            </p>
            <div class="divider-gold mx-auto mt-6"></div>
          </v-col>
        </v-row>

        <v-row justify="center" class="staggered-cards">
          <v-col v-for="(member, index) in team" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card class="glass-card h-100 text-center pa-6 profile-card" :style="{ animationDelay: `${index * 0.2}s` }">
              <v-avatar size="150" class="mb-6 avatar-glow elevation-10">
                <v-img :src="member.avatar" cover></v-img>
              </v-avatar>
              
              <h3 class="text-h5 font-serif text-gold mb-1">{{ member.name }}</h3>
              <div class="text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4">{{ member.role }}</div>
              
              <p class="text-body-2 text-grey-lighten-2 mb-6" style="line-height: 1.6;">
                {{ member.description }}
              </p>

              <div class="d-flex justify-center gap-4 mt-auto">
                <v-btn icon="mdi-github" variant="tonal" color="white" size="small" class="social-btn"></v-btn>
                <v-btn icon="mdi-linkedin" variant="tonal" color="blue-lighten-2" size="small" class="social-btn"></v-btn>
                <v-btn icon="mdi-email" variant="tonal" color="red-lighten-2" size="small" class="social-btn"></v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
        
        <v-row class="mt-16">
          <v-col cols="12" md="8" class="mx-auto">
            <v-card class="glass-card pa-8 text-center text-white info-card">
              <v-icon size="48" color="gold" class="mb-4">mdi-school</v-icon>
              <h4 class="text-h5 font-serif text-gold mb-4">Agradecimientos Especiales</h4>
              <p class="text-body-1 opacity-80" style="line-height: 1.8;">
                Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const team = [
  {
    name: 'Andrés',
    role: 'Director del Proyecto & UI/UX',
    description: 'Encargado de la visión general del OVA, diseño de interfaces, animaciones y la experiencia de usuario inmersiva.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Valentina R.',
    role: 'Investigadora Jurídica',
    description: 'Especialista en derecho constitucional. Encargada de la curaduría de la información y la redacción de los artículos.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Carlos M.',
    role: 'Desarrollador Frontend',
    description: 'Implementación técnica en Nuxt.js, integración de lógicas de progresión y componentes interactivos.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Laura G.',
    role: 'Diseñadora Instruccional',
    description: 'Diseñó las estrategias pedagógicas y seleccionó las dinámicas interactivas para evaluar el conocimiento.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.font-serif { font-family: 'Cinzel', serif !important; }
.font-serif-italic { font-family: 'Playfair Display', serif !important; font-style: italic; }
.text-gold { color: #D4AF37 !important; }
.opacity-70 { opacity: 0.7; }
.opacity-80 { opacity: 0.8; }
.tracking-widest { letter-spacing: 0.1em; }

.text-glow {
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
}

.avatar-glow {
  border: 3px solid rgba(212, 175, 55, 0.5);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.3) !important;
  transition: all 0.5s ease;
}

.profile-card:hover .avatar-glow {
  transform: scale(1.05) rotate(5deg);
  border-color: #D4AF37;
  box-shadow: 0 0 35px rgba(212, 175, 55, 0.6) !important;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.2) !important;
}

/* Glassmorphism */
.glass-header {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-card {
  background: rgba(20, 20, 20, 0.6) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px !important;
  color: white;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, background 0.4s ease;
}

.profile-card {
  opacity: 0;
  animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.profile-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
  background: rgba(30, 30, 30, 0.8) !important;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.info-card {
  opacity: 0;
  animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;
}

.divider-gold {
  height: 3px;
  width: 100px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
}

/* Animaciones */
.slide-fade-in { animation: slideInDown 0.8s ease-out forwards; }
.slide-fade-in-delayed { opacity: 0; animation: slideInDown 0.8s ease-out 0.3s forwards; }

@keyframes slideInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
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
