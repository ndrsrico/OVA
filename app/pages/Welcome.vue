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
        <NuxtLink to="/Temario" class="nav-link">Temario</NuxtLink>
        <NuxtLink to="/Recursos" class="nav-link">Recursos</NuxtLink>
        <NuxtLink to="/Evaluacion" class="nav-link">Evaluación</NuxtLink>
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
          <span class="stat-number">7</span>
          <span class="stat-label">Módulos</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">5</span>
          <span class="stat-label">Actividades</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">∞</span>
          <span class="stat-label">Libertad</span>
        </div>
      </div>

      <!-- Botón CTA -->
      <NuxtLink to="/Temario" class="cta-btn animate-bounce-in">
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
</template>

<script setup>
import { ref } from 'vue'

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
  border: 2px solid rgba(212, 175, 55, 0.4);
  border-radius: 50%;
  animation: expandRing 3s ease-out infinite;
}

.ring-1 {
  width: 140px;
  height: 140px;
  animation-delay: 0s;
}

.ring-2 {
  width: 100px;
  height: 100px;
  animation-delay: 1s;
  border-color: rgba(212, 175, 55, 0.3);
}

.ring-3 {
  width: 60px;
  height: 60px;
  animation-delay: 2s;
  border-color: rgba(212, 175, 55, 0.2);
}

@keyframes expandRing {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}

.shield-icon {
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.5));
}

/* Título */
.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 700;
  color: white;
  letter-spacing: -1px;
  margin: 0 0 32px 0;
  line-height: 1.2;
}

.title-highlight {
  color: #D4AF37;
  display: block;
  font-style: italic;
}

/* Subtítulo */
.subtitle-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 24px 0;
  margin-bottom: 32px;
}

.deco-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(to right, transparent, #D4AF37, transparent);
}

.hero-subtitle {
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #D4AF37;
  letter-spacing: 3px;
}

/* Quote */
.hero-quote {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: rgba(255,255,255,0.9);
  margin-bottom: 40px;
  max-width: 600px;
}

/* Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 48px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #D4AF37;
  font-family: 'Cinzel', serif;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  font-family: 'Cinzel', serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.stat-divider {
  width: 2px;
  height: 40px;
  background: rgba(212, 175, 55, 0.3);
}

/* CTA Button */
.cta-btn {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #D4AF37 0%, #F0E68C 100%);
  color: #050505;
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 16px 48px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  text-transform: uppercase;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.5);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-dot {
  width: 8px;
  height: 12px;
  border: 2px solid #D4AF37;
  border-radius: 10px;
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* Animaciones */
@keyframes animate-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-scale {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes animate-fade-in-up {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes animate-bounce-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: animate-fade-in 0.6s ease-out forwards;
}

.animate-scale {
  animation: animate-scale 0.7s ease-out forwards;
}

.animate-fade-in-up {
  animation: animate-fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-up-delay {
  animation: animate-fade-in-up 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.animate-fade-in-up-delay2 {
  animation: animate-fade-in-up 0.8s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.animate-bounce-in {
  animation: animate-bounce-in 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

@media (max-width: 768px) {
  .hero-nav {
    padding: 16px 24px;
    flex-wrap: wrap;
  }
  
  .nav-links {
    gap: 16px;
    font-size: 0.7rem;
  }
  
  .hero-stats {
    gap: 20px;
  }
  
  .stat-divider {
    display: none;
  }
}
</style>
