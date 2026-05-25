<template>
  <div class="hero-wrapper">
    <!-- Fondo de partículas animadas -->
    <div class="particles-bg">
      <div v-for="n in 20" :key="n" class="particle" :style="getParticleStyle(n)"></div>
    </div>

    <!-- Overlay gradiente -->
    <div class="hero-overlay"></div>

    <!-- Navbar superior transparente -->
    <nav class="hero-nav">
      <div class="nav-brand">
        <v-icon color="gold" size="28" class="mr-2">mdi-scale-balanced</v-icon>
        <span class="brand-text">Constitución Interactiva</span>
      </div>
      <div class="nav-links">
        <NuxtLink to="/introduccion" class="nav-link">Temario</NuxtLink>
        <NuxtLink to="/Actividades" class="nav-link">Actividades</NuxtLink>
        <NuxtLink to="/Creditos" class="nav-link nav-link-outlined">Créditos</NuxtLink>
      </div>
    </nav>

    <!-- Contenido principal hero -->
    <div class="hero-content">
      <!-- Badge superior -->
      <div class="hero-badge animate-fade-in">
        <v-icon size="16" color="gold" class="mr-1">mdi-star-four-points</v-icon>
        Descubre los Derechos que te Protegen
        <v-icon size="16" color="gold" class="ml-1">mdi-star-four-points</v-icon>
      </div>

      <!-- Escudo animado -->
      <div class="shield-container animate-scale">
        <div class="shield-ring ring-1"></div>
        <div class="shield-ring ring-2"></div>
        <div class="shield-ring ring-3"></div>
        <v-icon color="gold" size="90" class="shield-icon">mdi-shield-account</v-icon>
      </div>

      <!-- Título principal -->
      <h1 class="hero-title animate-fade-in-up">
        Derechos<br>
        <span class="title-highlight">Fundamentales</span>
      </h1>

      <!-- Subtítulo con líneas decorativas -->
      <div class="subtitle-wrapper animate-fade-in-up-delay">
        <div class="deco-line"></div>
        <h2 class="hero-subtitle">Protecciones Básicas para Todos</h2>
        <div class="deco-line"></div>
      </div>

      <!-- Cita -->
      <p class="hero-quote animate-fade-in-up-delay2">
        "La libertad y la dignidad son derechos que cada persona merece."
      </p>

      <div class="hero-stats animate-fade-in-up-delay2">
        <div class="stat-item">
          <span class="stat-number">5</span>
          <span class="stat-label">Temas</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">3</span>
          <span class="stat-label">Actividades</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">∞</span>
          <span class="stat-label">Libertad</span>
        </div>
      </div>

      <!-- Botón CTA -->
      <NuxtLink to="/introduccion" class="cta-btn animate-bounce-in">
        <v-icon size="22" class="mr-2">mdi-book-open-page-variant</v-icon>
        Iniciar Aprendizaje
        <v-icon size="22" class="ml-2">mdi-arrow-right</v-icon>
      </NuxtLink>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <div class="scroll-dot"></div>
      </div>
    </div>

    <!-- Imagen de fondo con parallax -->
    <div class="hero-bg-image"></div>
  </div>

  <!-- SECCIÓN DE TEMAS Y PROGRESIÓN -->
  <section class="temas-section">
    <!-- Barra lateral con accesos directos -->
    <div class="sidebar-shortcuts">
      <div class="sidebar-header">
        <v-icon size="28" color="gold" class="mb-3">mdi-bookmark-multiple</v-icon>
        <h3>Accesos Rápidos</h3>
      </div>
      
      <div class="shortcuts-list">
        <NuxtLink to="/introduccion#vida" class="shortcut-item" title="Derecho a la Vida">
          <v-icon color="gold">mdi-heart-pulse</v-icon>
          <span>Vida</span>
        </NuxtLink>
        <NuxtLink to="/introduccion#expresion" class="shortcut-item" title="Libertad de Expresión">
          <v-icon color="gold">mdi-bullhorn</v-icon>
          <span>Expresión</span>
        </NuxtLink>
        <NuxtLink to="/introduccion#educacion" class="shortcut-item" title="Educación">
          <v-icon color="gold">mdi-school</v-icon>
          <span>Educación</span>
        </NuxtLink>
        <NuxtLink to="/introduccion#trabajo" class="shortcut-item" title="Trabajo">
          <v-icon color="gold">mdi-hammer-screwdriver</v-icon>
          <span>Trabajo</span>
        </NuxtLink>
        <NuxtLink to="/introduccion#paz" class="shortcut-item" title="Paz">
          <v-icon color="gold">mdi-dove</v-icon>
          <span>Paz</span>
        </NuxtLink>
        <a href="https://www.mininterior.gov.co/direccion-de-derechos-humanos/derechos-fundamentales/" target="_blank" class="shortcut-item" title="Ministerio del Interior">
          <v-icon color="gold">mdi-book-information-variant</v-icon>
          <span>Oficial</span>
        </a>
      </div>
    </div>

    <!-- Contenido principal de temas -->
    <div class="temas-content">
      <div class="temas-header">
        <h2>Temas Disponibles</h2>
        <p>Explora los derechos fundamentales que protegen tu libertad y dignidad</p>
      </div>

      <!-- Barra de Progresión -->
      <div class="progress-bar-container">
        <div class="progress-info">
          <span class="progress-label">Tu Progreso</span>
          <span class="progress-percentage">{{ Math.round(((maxTemaDesbloqueado - 1) / temasResumen.length) * 100) }}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: (((maxTemaDesbloqueado - 1) / temasResumen.length) * 100) + '%' }"></div>
        </div>
        <div class="progress-text">{{ maxTemaDesbloqueado - 1 }} de {{ temasResumen.length }} temas completados</div>
      </div>

      <!-- Grid de Temas -->
      <div class="temas-grid">
        <div v-for="(tema, index) in temasResumen" :key="index" class="tema-card" :class="{ 'locked-tema': index > maxTemaDesbloqueado - 1 }">
          <div class="tema-card-header">
            <v-icon :color="index > maxTemaDesbloqueado - 1 ? 'grey' : 'gold'" size="32">{{ tema.icon }}</v-icon>
            <span v-if="index < maxTemaDesbloqueado - 1" class="completed-badge">✓</span>
            <span v-else-if="index === maxTemaDesbloqueado - 1" class="current-badge">EN PROGRESO</span>
            <span v-else class="locked-badge">🔒</span>
          </div>
          
          <h3 class="tema-title">{{ tema.titulo }}</h3>
          <p class="tema-descripcion">{{ tema.descripcion }}</p>
          
          <div class="tema-image-container">
            <img :src="tema.imagen" :alt="tema.titulo" class="tema-image" @error="handleImageError">
          </div>
          
          <NuxtLink :to="'/introduccion#tema-' + (index + 1)" class="tema-link" :class="{ 'disabled': index > maxTemaDesbloqueado - 1 }">
            Explorar <v-icon size="16" class="ml-1">mdi-arrow-right</v-icon>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const maxTemaDesbloqueado = useState('maxTemaDesbloqueado', () => 1)

onMounted(() => {
  const saved = localStorage.getItem('ovaProgress')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.maxTema) maxTemaDesbloqueado.value = data.maxTema
    } catch (e) { /* ignore */ }
  }
})

const getParticleStyle = (n) => {
  const size = Math.random() * 6 + 2
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = Math.random() * 8
  const duration = Math.random() * 10 + 15
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: Math.random() * 0.6 + 0.1
  }
}

const temasResumen = [
  {
    titulo: 'Introducción y Conceptos',
    descripcion: 'Entiende qué son los derechos fundamentales y la dignidad humana',
    icon: 'mdi-book-open-variant',
    imagen: 'https://images.unsplash.com/photo-1507842217343-583f20270efd?auto=format&fit=crop&q=80&w=500'
  },
  {
    titulo: 'Derechos de 1ª Generación',
    descripcion: 'Libertades civiles y políticas fundamentales',
    icon: 'mdi-shield-account',
    imagen: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500'
  },
  {
    titulo: 'Derechos de 2ª Generación',
    descripcion: 'Igualdad de oportunidades y justicia social integral',
    icon: 'mdi-scale-balance',
    imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500'
  },
  {
    titulo: 'Derechos de 3ª Generación',
    descripcion: 'Solidaridad, paz y medio ambiente sano colectivo',
    icon: 'mdi-dove',
    imagen: 'https://images.unsplash.com/photo-1504439468489-c8721022e4a9?auto=format&fit=crop&q=80&w=500'
  },
  {
    titulo: 'Garantías y Tutela',
    descripcion: 'Mecanismos para defender tus derechos de forma inmediata',
    icon: 'mdi-gavel',
    imagen: 'https://images.unsplash.com/photo-1589829016171-28862114348b?auto=format&fit=crop&q=80&w=500'
  }
]

const handleImageError = (event) => {
  event.target.src = 'https://images.unsplash.com/photo-1589829016171-28862114348b?auto=format&fit=crop&q=80&w=500'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

* { box-sizing: border-box; }

.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #050505;
}

/* Imagen de fondo */
.hero-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1589829016171-28862114348b?auto=format&fit=crop&q=80&w=2000');
  background-size: cover;
  background-position: center;
  z-index: 0;
  filter: brightness(0.25) saturate(0.8);
  transform: scale(1.05);
  animation: slowZoom 30s ease-in-out infinite alternate;
}

@keyframes slowZoom {
  from { transform: scale(1.05); }
  to { transform: scale(1.12); }
}

/* Overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: 
    radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 50%, rgba(30, 10, 0, 0.6) 0%, transparent 60%),
    linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%);
}

/* Partículas */
.particles-bg {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.1));
  animation: floatParticle linear infinite;
}

@keyframes floatParticle {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(30px) scale(0.5); opacity: 0; }
}

/* Navbar */
.hero-nav {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}

.nav-brand {
  display: flex;
  align-items: center;
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  color: white;
  letter-spacing: 1px;
}

.brand-text { color: #D4AF37; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: color 0.3s;
}
.nav-link:hover { color: #D4AF37; }

.nav-link-outlined {
  border: 1px solid rgba(212, 175, 55, 0.5);
  padding: 8px 20px;
  border-radius: 50px;
  color: #D4AF37;
}
.nav-link-outlined:hover {
  background: rgba(212, 175, 55, 0.1);
  border-color: #D4AF37;
}

/* Contenido */
.hero-content {
  position: relative;
  z-index: 5;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px 60px;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #D4AF37;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 32px;
  backdrop-filter: blur(8px);
}

/* Escudo */
.shield-container {
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.shield-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.3);
  animation: pulseRing 3s ease-out infinite;
}

.ring-1 { width: 100%; height: 100%; animation-delay: 0s; }
.ring-2 { width: 125%; height: 125%; animation-delay: 0.5s; border-color: rgba(212, 175, 55, 0.15); }
.ring-3 { width: 150%; height: 150%; animation-delay: 1s; border-color: rgba(212, 175, 55, 0.08); }

@keyframes pulseRing {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.shield-icon {
  filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.5));
  animation: iconGlow 3s ease-in-out infinite;
}

@keyframes iconGlow {
  0%, 100% { filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4)); }
  50% { filter: drop-shadow(0 0 30px rgba(212, 175, 55, 0.8)); }
}

/* Título */
.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  color: white;
  letter-spacing: 3px;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
  margin-bottom: 20px;
}

.title-highlight {
  color: #D4AF37;
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
}

/* Subtítulo */
.subtitle-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255,255,255,0.75);
  white-space: nowrap;
}

.deco-line {
  height: 1px;
  width: 60px;
  background: linear-gradient(to right, transparent, #D4AF37);
}
.deco-line:last-child {
  background: linear-gradient(to left, transparent, #D4AF37);
}

/* Cita */
.hero-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: rgba(255,255,255,0.6);
  font-size: 1rem;
  max-width: 500px;
  margin-bottom: 36px;
  line-height: 1.7;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 48px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 100px;
  padding: 16px 40px;
  backdrop-filter: blur(12px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
}

.stat-number {
  font-family: 'Cinzel', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #D4AF37;
  line-height: 1;
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.5);
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.15);
}

/* Botón CTA */
.cta-btn {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #D4AF37 0%, #F2D479 50%, #D4AF37 100%);
  background-size: 200% auto;
  color: #1a1100;
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 18px 48px;
  border-radius: 60px;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.35), 0 0 0 0 rgba(212, 175, 55, 0.4);
  transition: all 0.4s ease;
  animation: ctaPulse 3s ease-in-out infinite;
}

.cta-btn:hover {
  background-position: right center;
  box-shadow: 0 12px 40px rgba(212, 175, 55, 0.55);
  transform: translateY(-4px);
}

@keyframes ctaPulse {
  0%, 100% { box-shadow: 0 8px 32px rgba(212, 175, 55, 0.35), 0 0 0 0 rgba(212, 175, 55, 0.4); }
  50% { box-shadow: 0 8px 32px rgba(212, 175, 55, 0.35), 0 0 0 12px rgba(212, 175, 55, 0); }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 48px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-dot {
  width: 5px;
  height: 10px;
  background: #D4AF37;
  border-radius: 3px;
  animation: scrollDot 2s ease-in-out infinite;
}

@keyframes scrollDot {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(16px); opacity: 0; }
}

/* Animaciones de entrada */
.animate-fade-in {
  animation: fadeIn 1s ease-out 0.3s both;
}
.animate-scale {
  animation: scaleIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s both;
}
.animate-fade-in-up {
  animation: fadeInUp 0.9s ease-out 0.7s both;
}
.animate-fade-in-up-delay {
  animation: fadeInUp 0.9s ease-out 0.9s both;
}
.animate-fade-in-up-delay2 {
  animation: fadeInUp 0.9s ease-out 1.1s both;
}
.animate-bounce-in {
  animation: bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.4s both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounceIn {
  from { opacity: 0; transform: scale(0.8) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

/* ========== SECCIÓN DE TEMAS Y PROGRESIÓN ========== */
.temas-section {
  display: flex;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1510 50%, #141414 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Fondo animado */
.temas-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(30, 10, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* Barra lateral con accesos directos */
.sidebar-shortcuts {
  flex: 0 0 120px;
  background: rgba(15, 15, 15, 0.8);
  border-right: 1px solid rgba(212, 175, 55, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-header h3 {
  font-family: 'Cinzel', serif;
  color: white;
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}

.shortcuts-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.shortcut-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  border-radius: 12px;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.2);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.7rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.shortcut-item:hover {
  background: rgba(212, 175, 55, 0.2);
  border-color: rgba(212, 175, 55, 0.4);
  color: white;
  transform: translateY(-2px);
}

/* Contenido principal */
.temas-content {
  flex: 1;
  padding: 60px 80px;
  position: relative;
  z-index: 2;
  max-width: 1400px;
}

.temas-header {
  text-align: center;
  margin-bottom: 60px;
}

.temas-header h2 {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: white;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.temas-header p {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

/* Barra de Progresión */
.progress-bar-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 48px;
  backdrop-filter: blur(10px);
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.progress-label {
  font-family: 'Cinzel', serif;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.progress-percentage {
  font-family: 'Cinzel', serif;
  color: #D4AF37;
  font-size: 1.3rem;
  font-weight: 700;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #D4AF37, #F2D479);
  border-radius: 4px;
  transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.4);
}

.progress-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: right;
}

/* Grid de Temas */
.temas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.tema-card {
  background: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.tema-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.tema-card:hover:not(.locked-tema)::before {
  opacity: 1;
}

.tema-card:hover:not(.locked-tema) {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(212, 175, 55, 0.4);
  background: rgba(40, 40, 40, 0.8);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 175, 55, 0.15);
}

.tema-card.locked-tema {
  opacity: 0.6;
  filter: grayscale(80%);
}

.tema-card-header {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.completed-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #4CAF50, #66BB6A);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.current-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #D4AF37, #F2D479);
  color: #1a1100;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  letter-spacing: 1px;
  animation: pulse 2s ease-in-out infinite;
}

.locked-badge {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.2rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.tema-title {
  font-family: 'Cinzel', serif;
  font-size: 1.3rem;
  color: #D4AF37;
  margin-bottom: 8px;
  font-weight: 700;
}

.tema-descripcion {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 16px;
  min-height: 40px;
}

.tema-image-container {
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid rgba(212, 175, 55, 0.15);
}

.tema-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.tema-card:hover:not(.locked-tema) .tema-image {
  transform: scale(1.1);
}

.tema-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(242, 212, 121, 0.2));
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #D4AF37;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  margin-top: auto;
}

.tema-link:hover:not(.disabled) {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.5), rgba(242, 212, 121, 0.3));
  border-color: #D4AF37;
  transform: translateX(4px);
}

.tema-link.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .temas-content {
    padding: 40px 40px;
  }
  
  .temas-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .temas-section {
    flex-direction: column;
  }
  
  .sidebar-shortcuts {
    flex: 0 0 auto;
    border-right: none;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    flex-direction: row;
    height: auto;
    width: 100%;
    padding: 20px;
    justify-content: center;
    overflow-x: auto;
    overflow-y: visible;
  }
  
  .sidebar-header {
    display: none;
  }
  
  .shortcuts-list {
    flex-direction: row;
    gap: 12px;
  }
  
  .shortcut-item {
    flex: 0 0 auto;
  }
  
  .temas-content {
    padding: 30px 20px;
  }
  
  .temas-header h2 {
    font-size: 2rem;
  }
  
  .temas-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>