<template>
  <footer class="footer-section">
    <v-container fluid class="pa-0">
      <v-row class="ma-0">
        <!-- Sección Izquierda: Escudo y Datos -->
        <v-col cols="12" md="5" class="footer-left pa-8">
          <div class="d-flex flex-column align-center text-center mb-6">
            <!-- Escudo Universidad de Córdoba -->
            <div class="escudo-wrapper mb-6">
              <img 
                src="/images/logo_unicor.png" 
                alt="Escudo Universidad de Córdoba"
                class="escudo-img-direct"
              />
            </div>
            <h3 class="font-serif text-h6 text-gold mb-3">Universidad de Córdoba</h3>
            <p class="text-caption text-grey-lighten-2">Montería, Colombia</p>
          </div>

          <v-divider class="my-4 border-opacity-25"></v-divider>

          <div class="contact-info mt-6">
            <div class="contact-item mb-4">
              <v-icon color="gold" size="20" class="mr-2">mdi-phone</v-icon>
              <span class="text-body-2 text-grey-lighten-1">(+57) 5 784 0123</span>
            </div>
            <div class="contact-item mb-4">
              <v-icon color="gold" size="20" class="mr-2">mdi-email</v-icon>
              <span class="text-body-2 text-grey-lighten-1">info@unicordoba.edu.co</span>
            </div>
            <div class="contact-item">
              <v-icon color="gold" size="20" class="mr-2">mdi-map-marker</v-icon>
              <span class="text-body-2 text-grey-lighten-1">Carrera 6ª No. 76-103, Montería</span>
            </div>
          </div>
        </v-col>

        <!-- Divisor -->
        <v-col cols="12" md="1" class="d-flex align-center justify-center pa-0">
          <v-divider vertical class="border-opacity-25 my-8" style="height: 80%"></v-divider>
        </v-col>

        <!-- Sección Centro: Sobre el OVA -->
        <v-col cols="12" md="3" class="footer-center pa-8">
          <h4 class="font-serif text-subtitle-1 text-gold mb-6">Sobre este OVA</h4>
          <p class="text-body-2 text-grey-lighten-2 mb-4" style="line-height: 1.6;">
            Objeto Virtual de Aprendizaje para la comprensión de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991.
          </p>
          <v-chip
            size="small"
            variant="outlined"
            color="gold"
            class="mb-4"
            prepend-icon="mdi-school"
          >
            Educación Interactiva
          </v-chip>
        </v-col>

        <!-- Sección Derecha: Enlaces rápidos -->
        <v-col cols="12" md="3" class="footer-right pa-8">
          <h4 class="font-serif text-subtitle-1 text-gold mb-6">Enlaces Rápidos</h4>
          <div class="quick-links">
            <v-btn
              to="/"
              variant="text"
              color="grey-lighten-2"
              size="small"
              class="footer-link mb-2"
              prepend-icon="mdi-home"
            >
              Inicio
            </v-btn>
            <v-btn
              to="/introduccion"
              variant="text"
              color="grey-lighten-2"
              size="small"
              class="footer-link mb-2"
              prepend-icon="mdi-book-open-variant"
            >
              Temario
            </v-btn>
            <v-btn
              to="/Actividades"
              variant="text"
              color="grey-lighten-2"
              size="small"
              class="footer-link mb-2"
              prepend-icon="mdi-controller-classic"
            >
              Actividades
            </v-btn>
            <v-btn
              to="/Creditos"
              variant="text"
              color="grey-lighten-2"
              size="small"
              class="footer-link"
              prepend-icon="mdi-account-group"
            >
              Créditos
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Línea divisoria -->
      <v-divider class="border-opacity-20"></v-divider>

      <!-- Copyright -->
      <v-row class="ma-0 copyright-section pa-6 text-center">
        <v-col cols="12">
          <p class="text-caption text-grey mb-2">
            © 2026 Universidad de Córdoba. Todos los derechos reservados.
          </p>
          <p class="text-caption text-grey-lighten-1">
            Desarrollado con <v-icon size="14" color="red-accent-3" class="mx-1">mdi-heart</v-icon> para la educación en Derechos Fundamentales
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
// Footer component - sin lógica requerida
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.font-serif { font-family: 'Cinzel', serif !important; }
.text-gold { color: #D4AF37 !important; }

/* ===== FOOTER GENERAL ===== */
.footer-section {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(20, 15, 10, 0.95) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  margin-top: 60px;
  padding-top: 20px;
}

/* ===== ESCUDO ===== */
.escudo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: rgba(212, 175, 55, 0.05);
  border: 2px solid rgba(212, 175, 55, 0.25);
  border-radius: 12px;
  padding: 12px;
  transition: all 0.3s ease;
}

.escudo-wrapper:hover {
  transform: scale(1.1);
  border-color: rgba(212, 175, 55, 0.5);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.3);
  background: rgba(212, 175, 55, 0.1);
}

.escudo-img-direct {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  transition: filter 0.3s ease;
}

.escudo-wrapper:hover .escudo-img-direct {
  filter: drop-shadow(0 4px 16px rgba(212, 175, 55, 0.4));
}

/* ===== SECCIONES ===== */
.footer-left,
.footer-center,
.footer-right {
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-right {
  border-right: none;
}

/* ===== CONTACTO ===== */
.contact-info {
  text-align: left;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  transition: all 0.2s ease;
}

.contact-item:hover {
  transform: translateX(4px);
  color: #D4AF37;
}

/* ===== ENLACES RÁPIDOS ===== */
.quick-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-link {
  justify-content: flex-start;
  transition: all 0.2s ease;
}

.footer-link:hover {
  color: #D4AF37 !important;
  transform: translateX(4px);
}

/* ===== COPYRIGHT ===== */
.copyright-section {
  background: rgba(0, 0, 0, 0.3);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 960px) {
  .footer-left,
  .footer-center,
  .footer-right {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-left {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .escudo-container {
    width: 100px;
    height: 100px;
  }
}
</style>
