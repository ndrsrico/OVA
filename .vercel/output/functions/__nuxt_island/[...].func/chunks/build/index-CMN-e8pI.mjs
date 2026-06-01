import { _ as __nuxt_component_0 } from './nuxt-link-DnqeeCCC.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, k as VIcon } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const getParticleStyle = (n) => {
      const size = Math.random() * 6 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = Math.random() * 10 + 15;
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: Math.random() * 0.6 + 0.1
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="hero-wrapper" data-v-aaaea34e><div class="particles-bg" data-v-aaaea34e><!--[-->`);
      ssrRenderList(20, (n) => {
        _push(`<div class="particle" style="${ssrRenderStyle(getParticleStyle())}" data-v-aaaea34e></div>`);
      });
      _push(`<!--]--></div><div class="hero-overlay" data-v-aaaea34e></div><nav class="hero-nav" data-v-aaaea34e><div class="nav-brand" data-v-aaaea34e>`);
      _push(ssrRenderComponent(VIcon, {
        color: "gold",
        size: "28",
        class: "mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-scale-balanced`);
          } else {
            return [
              createTextVNode("mdi-scale-balanced")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="brand-text" data-v-aaaea34e>Constitución Interactiva</span></div><div class="nav-links" data-v-aaaea34e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Temario",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "18",
              class: "mr-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-book-open-page-variant`);
                } else {
                  return [
                    createTextVNode("mdi-book-open-page-variant")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`Temario`);
          } else {
            return [
              createVNode(VIcon, {
                size: "18",
                class: "mr-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-book-open-page-variant")
                ]),
                _: 1
              }),
              createTextVNode("Temario")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Actividades",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "18",
              class: "mr-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-controller-classic`);
                } else {
                  return [
                    createTextVNode("mdi-controller-classic")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`Actividades`);
          } else {
            return [
              createVNode(VIcon, {
                size: "18",
                class: "mr-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-controller-classic")
                ]),
                _: 1
              }),
              createTextVNode("Actividades")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Evaluacion",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "18",
              class: "mr-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-clipboard-text`);
                } else {
                  return [
                    createTextVNode("mdi-clipboard-text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`Evaluación`);
          } else {
            return [
              createVNode(VIcon, {
                size: "18",
                class: "mr-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-clipboard-text")
                ]),
                _: 1
              }),
              createTextVNode("Evaluación")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Recursos",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "18",
              class: "mr-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-folder-multiple`);
                } else {
                  return [
                    createTextVNode("mdi-folder-multiple")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`Recursos`);
          } else {
            return [
              createVNode(VIcon, {
                size: "18",
                class: "mr-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-folder-multiple")
                ]),
                _: 1
              }),
              createTextVNode("Recursos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Creditos",
        class: "nav-link nav-link-outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "16",
              class: "mr-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-account-group`);
                } else {
                  return [
                    createTextVNode("mdi-account-group")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`Créditos`);
          } else {
            return [
              createVNode(VIcon, {
                size: "16",
                class: "mr-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-account-group")
                ]),
                _: 1
              }),
              createTextVNode("Créditos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav><div class="hero-content" data-v-aaaea34e><div class="hero-badge animate-fade-in" data-v-aaaea34e>`);
      _push(ssrRenderComponent(VIcon, {
        size: "16",
        color: "gold",
        class: "mr-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-star-four-points`);
          } else {
            return [
              createTextVNode("mdi-star-four-points")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Descubre los Derechos que te Protegen `);
      _push(ssrRenderComponent(VIcon, {
        size: "16",
        color: "gold",
        class: "ml-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-star-four-points`);
          } else {
            return [
              createTextVNode("mdi-star-four-points")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="shield-container animate-scale" data-v-aaaea34e><div class="shield-ring ring-1" data-v-aaaea34e></div><div class="shield-ring ring-2" data-v-aaaea34e></div><div class="shield-ring ring-3" data-v-aaaea34e></div>`);
      _push(ssrRenderComponent(VIcon, {
        color: "gold",
        size: "90",
        class: "shield-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-shield-account`);
          } else {
            return [
              createTextVNode("mdi-shield-account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="hero-title animate-fade-in-up" data-v-aaaea34e> Derechos<br data-v-aaaea34e><span class="title-highlight" data-v-aaaea34e>Fundamentales</span></h1><div class="subtitle-wrapper animate-fade-in-up-delay" data-v-aaaea34e><div class="deco-line" data-v-aaaea34e></div><h2 class="hero-subtitle" data-v-aaaea34e>Protecciones Básicas para Todos</h2><div class="deco-line" data-v-aaaea34e></div></div><p class="hero-quote animate-fade-in-up-delay2" data-v-aaaea34e> &quot;La libertad y la dignidad son derechos que cada persona merece.&quot; </p><div class="hero-stats animate-fade-in-up-delay2" data-v-aaaea34e><div class="stat-item" data-v-aaaea34e><span class="stat-number" data-v-aaaea34e>5</span><span class="stat-label" data-v-aaaea34e>Temas</span></div><div class="stat-divider" data-v-aaaea34e></div><div class="stat-item" data-v-aaaea34e><span class="stat-number" data-v-aaaea34e>3</span><span class="stat-label" data-v-aaaea34e>Actividades</span></div><div class="stat-divider" data-v-aaaea34e></div><div class="stat-item" data-v-aaaea34e><span class="stat-number" data-v-aaaea34e>∞</span><span class="stat-label" data-v-aaaea34e>Libertad</span></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Temario",
        class: "cta-btn animate-bounce-in"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "22",
              class: "mr-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-book-open-page-variant`);
                } else {
                  return [
                    createTextVNode("mdi-book-open-page-variant")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Iniciar Aprendizaje `);
            _push2(ssrRenderComponent(VIcon, {
              size: "22",
              class: "ml-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-arrow-right`);
                } else {
                  return [
                    createTextVNode("mdi-arrow-right")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                size: "22",
                class: "mr-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-book-open-page-variant")
                ]),
                _: 1
              }),
              createTextVNode(" Iniciar Aprendizaje "),
              createVNode(VIcon, {
                size: "22",
                class: "ml-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-arrow-right")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="scroll-indicator" data-v-aaaea34e><div class="scroll-dot" data-v-aaaea34e></div></div></div><div class="hero-bg-image" data-v-aaaea34e></div></div><section class="landing-sections" data-v-aaaea34e><div class="landing-sections-header" data-v-aaaea34e><h2 data-v-aaaea34e>Recorrido Secuencial</h2><p data-v-aaaea34e>Todos los apartados del OVA aparecen de forma clara y en orden para facilitar tu navegación.</p></div><div class="sections-grid" data-v-aaaea34e><div class="section-card" data-v-aaaea34e><span class="section-step" data-v-aaaea34e>1</span>`);
      _push(ssrRenderComponent(VIcon, {
        color: "gold",
        size: "28",
        class: "section-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-book-open-page-variant`);
          } else {
            return [
              createTextVNode("mdi-book-open-page-variant")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 data-v-aaaea34e>Temario</h3><p data-v-aaaea34e>Accede rápidamente a los temas principales y aprende sobre tus derechos.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Temario",
        class: "section-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ir a Temario`);
          } else {
            return [
              createTextVNode("Ir a Temario")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="section-card" data-v-aaaea34e><span class="section-step" data-v-aaaea34e>2</span>`);
      _push(ssrRenderComponent(VIcon, {
        color: "gold",
        size: "28",
        class: "section-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-controller-classic`);
          } else {
            return [
              createTextVNode("mdi-controller-classic")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 data-v-aaaea34e>Actividades</h3><p data-v-aaaea34e>Ejercita tu comprensión con actividades prácticas y retroalimenta tu progreso.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Actividades",
        class: "section-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ir a Actividades`);
          } else {
            return [
              createTextVNode("Ir a Actividades")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="section-card" data-v-aaaea34e><span class="section-step" data-v-aaaea34e>3</span>`);
      _push(ssrRenderComponent(VIcon, {
        color: "gold",
        size: "28",
        class: "section-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-clipboard-text`);
          } else {
            return [
              createTextVNode("mdi-clipboard-text")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 data-v-aaaea34e>Evaluación</h3><p data-v-aaaea34e>Responde preguntas del OVA para obtener tu puntuación y calificación final.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Evaluacion",
        class: "section-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ir a Evaluación`);
          } else {
            return [
              createTextVNode("Ir a Evaluación")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="section-card" data-v-aaaea34e><span class="section-step" data-v-aaaea34e>4</span>`);
      _push(ssrRenderComponent(VIcon, {
        color: "gold",
        size: "28",
        class: "section-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-folder-multiple`);
          } else {
            return [
              createTextVNode("mdi-folder-multiple")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 data-v-aaaea34e>Recursos</h3><p data-v-aaaea34e>Consulta documentos y enlaces importantes para profundizar en tus estudios.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Recursos",
        class: "section-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ir a Recursos`);
          } else {
            return [
              createTextVNode("Ir a Recursos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="section-card" data-v-aaaea34e><span class="section-step" data-v-aaaea34e>5</span><h3 data-v-aaaea34e>Créditos</h3><p data-v-aaaea34e>Conoce a quiénes hicieron posible este objeto virtual de aprendizaje.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Creditos",
        class: "section-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver Créditos`);
          } else {
            return [
              createTextVNode("Ver Créditos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aaaea34e"]]);

export { index as default };
//# sourceMappingURL=index-CMN-e8pI.mjs.map
