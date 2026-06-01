import { ref, watch, computed, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useState } from './state-CqKsN6K6.mjs';
import { _ as _export_sfc, V as VApp, d as VBtn, f as VContainer, g as VRow, h as VCol, i as VProgressLinear, j as VDivider, k as VIcon, l as VChip } from './server.mjs';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VMain } from './VMain-Cd1cV_fK.mjs';
import { V as VAlert } from './VAlert-B7Wvkfmr.mjs';
import { V as VCard, a as VCardText, b as VCardActions } from './VCard-C8GwDJXo.mjs';
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
  __name: "Actividades",
  __ssrInlineRender: true,
  setup(__props) {
    const actividadesDesbloqueadas = useState("actividadesDesbloqueadas", () => false);
    const progresoActividades = useState("progresoActividades", () => 0);
    const filtro = ref("Todas");
    const saveProgress = () => {
      const saved = localStorage.getItem("ovaProgress");
      let data = {};
      if (saved) {
        try {
          data = JSON.parse(saved);
        } catch (e) {
        }
      }
      data.actDesbloqueadas = actividadesDesbloqueadas.value;
      data.progresoAct = progresoActividades.value;
      localStorage.setItem("ovaProgress", JSON.stringify(data));
    };
    watch([actividadesDesbloqueadas, progresoActividades], saveProgress, { deep: true });
    const completarActividad = (index) => {
      if (index === progresoActividades.value) {
        progresoActividades.value++;
        saveProgress();
      }
    };
    const listaActividades = [
      {
        plataforma: "Actividad 1",
        tipo: "Reflexion",
        titulo: "Reflexión: ¿Cuáles son mis derechos?",
        descripcion: "Realiza una reflexión personal sobre qué derechos fundamentales consideras más importantes en tu vida diaria y por qué. Escribe tus ideas en un documento.",
        meta: "Pensamiento crítico",
        icono: "mdi-lightbulb-on",
        colorBg: "bg-teal-darken-2",
        enlace: "https://www.canva.com"
      },
      {
        plataforma: "Actividad 2",
        tipo: "Quiz",
        titulo: "Quiz: ¿Qué tanto sabes de derechos?",
        descripcion: "Responde preguntas simples sobre los derechos fundamentales que aprendiste. Evalúa tu comprensión de lo estudiado en cada tema.",
        meta: "Evaluación del aprendizaje",
        icono: "mdi-help-circle",
        colorBg: "bg-indigo-darken-3",
        enlace: "https://www.google.com/forms/"
      },
      {
        plataforma: "Actividad 3",
        tipo: "Analisis",
        titulo: "Análisis: Casos de la vida real",
        descripcion: "Lee historias cortas y casos reales de la vida cotidiana. Identifica cuáles derechos fundamentales están involucrados en cada situación.",
        meta: "Aplicación práctica",
        icono: "mdi-file-document",
        colorBg: "bg-deep-orange-darken-2",
        enlace: "https://www.padlet.com"
      }
    ];
    const actividadesFiltradas = computed(() => {
      if (filtro.value === "Todas") return listaActividades;
      if (filtro.value === "Analisis") return listaActividades.filter((a) => (a.tipo || "").toLowerCase() === "analisis");
      return listaActividades.filter((a) => (a.tipo || "").toLowerCase() === filtro.value.toLowerCase());
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              app: "",
              color: "rgba(20, 20, 20, 0.8)",
              class: "glass-header",
              theme: "dark",
              elevation: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbarTitle, { class: "font-serif text-gold ml-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Constitución Interactiva`);
                      } else {
                        return [
                          createTextVNode("Constitución Interactiva")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    color: "white",
                    to: "/",
                    "prepend-icon": "mdi-home",
                    class: "mr-2 hidden-sm-and-down"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Inicio`);
                      } else {
                        return [
                          createTextVNode("Inicio")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    color: "white",
                    to: "/introduccion",
                    "prepend-icon": "mdi-book-open-variant",
                    class: "mr-2 hidden-sm-and-down"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Temario`);
                      } else {
                        return [
                          createTextVNode("Temario")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    color: "gold",
                    to: "/Actividades",
                    "prepend-icon": "mdi-controller-classic",
                    class: "mr-2 hidden-sm-and-down"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Actividades`);
                      } else {
                        return [
                          createTextVNode("Actividades")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    color: "white",
                    to: "/Creditos",
                    "prepend-icon": "mdi-account-group",
                    class: "mr-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Créditos`);
                      } else {
                        return [
                          createTextVNode("Créditos")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VToolbarTitle, { class: "font-serif text-gold ml-4" }, {
                      default: withCtx(() => [
                        createTextVNode("Constitución Interactiva")
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      color: "white",
                      to: "/",
                      "prepend-icon": "mdi-home",
                      class: "mr-2 hidden-sm-and-down"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Inicio")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      variant: "text",
                      color: "white",
                      to: "/introduccion",
                      "prepend-icon": "mdi-book-open-variant",
                      class: "mr-2 hidden-sm-and-down"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Temario")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      variant: "text",
                      color: "gold",
                      to: "/Actividades",
                      "prepend-icon": "mdi-controller-classic",
                      class: "mr-2 hidden-sm-and-down"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Actividades")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      variant: "outlined",
                      color: "white",
                      to: "/Creditos",
                      "prepend-icon": "mdi-account-group",
                      class: "mr-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Créditos")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: "dynamic-bg position-relative overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="floating-shapes" data-v-fcc155d7${_scopeId2}><div class="shape shape-1" data-v-fcc155d7${_scopeId2}></div><div class="shape shape-2" data-v-fcc155d7${_scopeId2}></div><div class="shape shape-3" data-v-fcc155d7${_scopeId2}></div><div class="shape shape-4" data-v-fcc155d7${_scopeId2}></div><div class="shape shape-5" data-v-fcc155d7${_scopeId2}></div></div>`);
                  _push3(ssrRenderComponent(VContainer, { class: "py-12 px-6 position-relative z-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!unref(actividadesDesbloqueadas)) {
                          _push4(ssrRenderComponent(VRow, { class: "mb-8" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  md: "8",
                                  class: "mx-auto text-center"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAlert, {
                                        color: "error",
                                        icon: "mdi-lock",
                                        variant: "tonal",
                                        class: "mb-6 font-serif-italic"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades. `);
                                          } else {
                                            return [
                                              createTextVNode(" ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades. ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VAlert, {
                                          color: "error",
                                          icon: "mdi-lock",
                                          variant: "tonal",
                                          class: "mb-6 font-serif-italic"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades. ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "8",
                                    class: "mx-auto text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAlert, {
                                        color: "error",
                                        icon: "mdi-lock",
                                        variant: "tonal",
                                        class: "mb-6 font-serif-italic"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades. ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VRow, { class: "mb-8" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  md: "10",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center mb-8" data-v-fcc155d7${_scopeId5}><h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow" data-v-fcc155d7${_scopeId5}>ACTIVIDADES INTERACTIVAS</h1><p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" data-v-fcc155d7${_scopeId5}> Completa cada actividad para desbloquear la siguiente. </p></div><div class="progress-section mb-8 pa-6 rounded-xl" style="${ssrRenderStyle({ "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" })}" data-v-fcc155d7${_scopeId5}><div class="d-flex justify-space-between align-center mb-3" data-v-fcc155d7${_scopeId5}><span class="text-body-1 font-weight-bold text-white" data-v-fcc155d7${_scopeId5}>Progreso:</span><span class="text-body-2 text-gold font-weight-bold" data-v-fcc155d7${_scopeId5}>${ssrInterpolate(unref(progresoActividades))} / ${ssrInterpolate(listaActividades.length)} completadas</span></div>`);
                                      _push6(ssrRenderComponent(VProgressLinear, {
                                        value: unref(progresoActividades) / listaActividades.length * 100,
                                        color: "success",
                                        "background-color": "rgba(255,255,255,0.1)",
                                        height: "24",
                                        rounded: ""
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div><div class="d-flex justify-center mb-8 gap-2" data-v-fcc155d7${_scopeId5}><!--[-->`);
                                      ssrRenderList(["Todas", "Quiz", "Analisis", "Reflexion"], (tipo) => {
                                        _push6(ssrRenderComponent(VBtn, {
                                          key: tipo,
                                          onClick: ($event) => filtro.value = tipo,
                                          size: "small",
                                          color: filtro.value === tipo ? "#D4AF37" : "rgba(255,255,255,0.3)",
                                          variant: filtro.value === tipo ? "flat" : "outlined",
                                          class: "font-weight-bold text-uppercase"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(tipo === "Analisis" ? "Análisis" : tipo)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(tipo === "Analisis" ? "Análisis" : tipo), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]--></div>`);
                                      _push6(ssrRenderComponent(VDivider, {
                                        class: "mb-8 border-opacity-50",
                                        color: "gold"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center mb-8" }, [
                                          createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ACTIVIDADES INTERACTIVAS"),
                                          createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada actividad para desbloquear la siguiente. ")
                                        ]),
                                        createVNode("div", {
                                          class: "progress-section mb-8 pa-6 rounded-xl",
                                          style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                        }, [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                            createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                            createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length) + " completadas", 1)
                                          ]),
                                          createVNode(VProgressLinear, {
                                            value: unref(progresoActividades) / listaActividades.length * 100,
                                            color: "success",
                                            "background-color": "rgba(255,255,255,0.1)",
                                            height: "24",
                                            rounded: ""
                                          }, null, 8, ["value"])
                                        ]),
                                        createVNode("div", { class: "d-flex justify-center mb-8 gap-2" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(["Todas", "Quiz", "Analisis", "Reflexion"], (tipo) => {
                                            return createVNode(VBtn, {
                                              key: tipo,
                                              onClick: ($event) => filtro.value = tipo,
                                              size: "small",
                                              color: filtro.value === tipo ? "#D4AF37" : "rgba(255,255,255,0.3)",
                                              variant: filtro.value === tipo ? "flat" : "outlined",
                                              class: "font-weight-bold text-uppercase"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(tipo === "Analisis" ? "Análisis" : tipo), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick", "color", "variant"]);
                                          }), 64))
                                        ]),
                                        createVNode(VDivider, {
                                          class: "mb-8 border-opacity-50",
                                          color: "gold"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "10",
                                    class: "mx-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center mb-8" }, [
                                        createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ACTIVIDADES INTERACTIVAS"),
                                        createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada actividad para desbloquear la siguiente. ")
                                      ]),
                                      createVNode("div", {
                                        class: "progress-section mb-8 pa-6 rounded-xl",
                                        style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                      }, [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                          createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length) + " completadas", 1)
                                        ]),
                                        createVNode(VProgressLinear, {
                                          value: unref(progresoActividades) / listaActividades.length * 100,
                                          color: "success",
                                          "background-color": "rgba(255,255,255,0.1)",
                                          height: "24",
                                          rounded: ""
                                        }, null, 8, ["value"])
                                      ]),
                                      createVNode("div", { class: "d-flex justify-center mb-8 gap-2" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(["Todas", "Quiz", "Analisis", "Reflexion"], (tipo) => {
                                          return createVNode(VBtn, {
                                            key: tipo,
                                            onClick: ($event) => filtro.value = tipo,
                                            size: "small",
                                            color: filtro.value === tipo ? "#D4AF37" : "rgba(255,255,255,0.3)",
                                            variant: filtro.value === tipo ? "flat" : "outlined",
                                            class: "font-weight-bold text-uppercase"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(tipo === "Analisis" ? "Análisis" : tipo), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick", "color", "variant"]);
                                        }), 64))
                                      ]),
                                      createVNode(VDivider, {
                                        class: "mb-8 border-opacity-50",
                                        color: "gold"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        _push4(ssrRenderComponent(VRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(actividadesFiltradas.value, (actividad, index) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: actividad.titulo,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        elevation: "0",
                                        class: ["rounded-xl h-100 d-flex flex-column card-animation", {
                                          "activity-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                          "activity-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                          "activity-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                        }],
                                        style: { animationDelay: `${listaActividades.indexOf(actividad) * 0.15}s` }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([{
                                              "state-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                              "state-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                              "state-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                            }, "state-indicator pa-5 text-center"])}" data-v-fcc155d7${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: 56,
                                              class: "mb-2",
                                              color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "success" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "grey"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div class="text-caption font-weight-bold text-uppercase" style="${ssrRenderStyle({
                                              color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#999"
                                            })}" data-v-fcc155d7${_scopeId6}>${ssrInterpolate(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "Completada" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "EN PROGRESO" : "Bloqueada")}</div></div>`);
                                            _push7(ssrRenderComponent(VCardText, { class: "pa-6 flex-grow-1 text-white" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<h3 class="text-h6 font-serif font-weight-bold mb-2" style="${ssrRenderStyle({ "color": "#D4AF37" })}" data-v-fcc155d7${_scopeId7}>${ssrInterpolate(actividad.titulo)}</h3><div class="mb-3 text-caption" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.7)" })}" data-v-fcc155d7${_scopeId7}>${ssrInterpolate(actividad.tipo)}</div><p class="text-body-2 text-justify" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" })}" data-v-fcc155d7${_scopeId7}>${ssrInterpolate(actividad.descripcion)}</p>`);
                                                  _push8(ssrRenderComponent(VChip, {
                                                    size: "small",
                                                    color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                                    "text-color": "white",
                                                    class: "font-weight-bold"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(actividad.meta)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(actividad.meta), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("h3", {
                                                      class: "text-h6 font-serif font-weight-bold mb-2",
                                                      style: { "color": "#D4AF37" }
                                                    }, toDisplayString(actividad.titulo), 1),
                                                    createVNode("div", {
                                                      class: "mb-3 text-caption",
                                                      style: { "color": "rgba(255,255,255,0.7)" }
                                                    }, toDisplayString(actividad.tipo), 1),
                                                    createVNode("p", {
                                                      class: "text-body-2 text-justify",
                                                      style: { "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" }
                                                    }, toDisplayString(actividad.descripcion), 1),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                                      "text-color": "white",
                                                      class: "font-weight-bold"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(actividad.meta), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VDivider, { class: "border-opacity-25" }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardActions, { class: "pa-4 bg-transparent d-flex flex-column gap-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  if (unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades)) {
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      block: "",
                                                      size: "small",
                                                      color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                                      class: "font-weight-bold",
                                                      href: actividad.enlace,
                                                      target: "_blank",
                                                      "append-icon": "mdi-open-in-new"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar")}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  if (unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades)) {
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      block: "",
                                                      size: "small",
                                                      color: "success",
                                                      variant: "flat",
                                                      "prepend-icon": "mdi-check-circle",
                                                      onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                                      class: "font-weight-bold pulse-btn"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Marcar Completada `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Marcar Completada ")
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else if (!unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades)) {
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      block: "",
                                                      size: "small",
                                                      variant: "outlined",
                                                      color: "grey",
                                                      disabled: "",
                                                      "prepend-icon": "mdi-lock"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Bloqueada `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Bloqueada ")
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                } else {
                                                  return [
                                                    unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                      key: 0,
                                                      block: "",
                                                      size: "small",
                                                      color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                                      class: "font-weight-bold",
                                                      href: actividad.enlace,
                                                      target: "_blank",
                                                      "append-icon": "mdi-open-in-new"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color", "href"])) : createCommentVNode("", true),
                                                    unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                      key: 1,
                                                      block: "",
                                                      size: "small",
                                                      color: "success",
                                                      variant: "flat",
                                                      "prepend-icon": "mdi-check-circle",
                                                      onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                                      class: "font-weight-bold pulse-btn"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Marcar Completada ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"])) : !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                      key: 2,
                                                      block: "",
                                                      size: "small",
                                                      variant: "outlined",
                                                      color: "grey",
                                                      disabled: "",
                                                      "prepend-icon": "mdi-lock"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Bloqueada ")
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: ["state-indicator pa-5 text-center", {
                                                  "state-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                                  "state-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                                  "state-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                                }]
                                              }, [
                                                createVNode(VIcon, {
                                                  size: 56,
                                                  class: "mb-2",
                                                  color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "success" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "grey"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("div", {
                                                  class: "text-caption font-weight-bold text-uppercase",
                                                  style: {
                                                    color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#999"
                                                  }
                                                }, toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "Completada" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "EN PROGRESO" : "Bloqueada"), 5)
                                              ], 2),
                                              createVNode(VCardText, { class: "pa-6 flex-grow-1 text-white" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", {
                                                    class: "text-h6 font-serif font-weight-bold mb-2",
                                                    style: { "color": "#D4AF37" }
                                                  }, toDisplayString(actividad.titulo), 1),
                                                  createVNode("div", {
                                                    class: "mb-3 text-caption",
                                                    style: { "color": "rgba(255,255,255,0.7)" }
                                                  }, toDisplayString(actividad.tipo), 1),
                                                  createVNode("p", {
                                                    class: "text-body-2 text-justify",
                                                    style: { "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" }
                                                  }, toDisplayString(actividad.descripcion), 1),
                                                  createVNode(VChip, {
                                                    size: "small",
                                                    color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                                    "text-color": "white",
                                                    class: "font-weight-bold"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(actividad.meta), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VDivider, { class: "border-opacity-25" }),
                                              createVNode(VCardActions, { class: "pa-4 bg-transparent d-flex flex-column gap-2" }, {
                                                default: withCtx(() => [
                                                  unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                    key: 0,
                                                    block: "",
                                                    size: "small",
                                                    color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                                    class: "font-weight-bold",
                                                    href: actividad.enlace,
                                                    target: "_blank",
                                                    "append-icon": "mdi-open-in-new"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color", "href"])) : createCommentVNode("", true),
                                                  unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                    key: 1,
                                                    block: "",
                                                    size: "small",
                                                    color: "success",
                                                    variant: "flat",
                                                    "prepend-icon": "mdi-check-circle",
                                                    onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                                    class: "font-weight-bold pulse-btn"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Marcar Completada ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])) : !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                    key: 2,
                                                    block: "",
                                                    size: "small",
                                                    variant: "outlined",
                                                    color: "grey",
                                                    disabled: "",
                                                    "prepend-icon": "mdi-lock"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Bloqueada ")
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: ["rounded-xl h-100 d-flex flex-column card-animation", {
                                            "activity-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                            "activity-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                            "activity-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                          }],
                                          style: { animationDelay: `${listaActividades.indexOf(actividad) * 0.15}s` }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: ["state-indicator pa-5 text-center", {
                                                "state-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                                "state-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                                "state-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                              }]
                                            }, [
                                              createVNode(VIcon, {
                                                size: 56,
                                                class: "mb-2",
                                                color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "success" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "grey"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("div", {
                                                class: "text-caption font-weight-bold text-uppercase",
                                                style: {
                                                  color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#999"
                                                }
                                              }, toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "Completada" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "EN PROGRESO" : "Bloqueada"), 5)
                                            ], 2),
                                            createVNode(VCardText, { class: "pa-6 flex-grow-1 text-white" }, {
                                              default: withCtx(() => [
                                                createVNode("h3", {
                                                  class: "text-h6 font-serif font-weight-bold mb-2",
                                                  style: { "color": "#D4AF37" }
                                                }, toDisplayString(actividad.titulo), 1),
                                                createVNode("div", {
                                                  class: "mb-3 text-caption",
                                                  style: { "color": "rgba(255,255,255,0.7)" }
                                                }, toDisplayString(actividad.tipo), 1),
                                                createVNode("p", {
                                                  class: "text-body-2 text-justify",
                                                  style: { "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" }
                                                }, toDisplayString(actividad.descripcion), 1),
                                                createVNode(VChip, {
                                                  size: "small",
                                                  color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                                  "text-color": "white",
                                                  class: "font-weight-bold"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(actividad.meta), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VDivider, { class: "border-opacity-25" }),
                                            createVNode(VCardActions, { class: "pa-4 bg-transparent d-flex flex-column gap-2" }, {
                                              default: withCtx(() => [
                                                unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                  key: 0,
                                                  block: "",
                                                  size: "small",
                                                  color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                                  class: "font-weight-bold",
                                                  href: actividad.enlace,
                                                  target: "_blank",
                                                  "append-icon": "mdi-open-in-new"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color", "href"])) : createCommentVNode("", true),
                                                unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                  key: 1,
                                                  block: "",
                                                  size: "small",
                                                  color: "success",
                                                  variant: "flat",
                                                  "prepend-icon": "mdi-check-circle",
                                                  onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                                  class: "font-weight-bold pulse-btn"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Marcar Completada ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])) : !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                  key: 2,
                                                  block: "",
                                                  size: "small",
                                                  variant: "outlined",
                                                  color: "grey",
                                                  disabled: "",
                                                  "prepend-icon": "mdi-lock"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Bloqueada ")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "style"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              if (actividadesFiltradas.value.length === 0) {
                                _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center pa-8" data-v-fcc155d7${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "48",
                                        color: "gold",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-emoticon-sad-outline`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-emoticon-sad-outline")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<h3 class="text-h6 font-serif text-white" data-v-fcc155d7${_scopeId5}>No hay actividades en esta categoría</h3><p class="text-body-2 text-grey-lighten-2" data-v-fcc155d7${_scopeId5}>Prueba seleccionando &quot;Todas&quot; o revisa las actividades disponibles.</p></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center pa-8" }, [
                                          createVNode(VIcon, {
                                            size: "48",
                                            color: "gold",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-emoticon-sad-outline")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("h3", { class: "text-h6 font-serif text-white" }, "No hay actividades en esta categoría"),
                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, 'Prueba seleccionando "Todas" o revisa las actividades disponibles.')
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(actividadesFiltradas.value, (actividad, index) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: actividad.titulo,
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        elevation: "0",
                                        class: ["rounded-xl h-100 d-flex flex-column card-animation", {
                                          "activity-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                          "activity-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                          "activity-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                        }],
                                        style: { animationDelay: `${listaActividades.indexOf(actividad) * 0.15}s` }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: ["state-indicator pa-5 text-center", {
                                              "state-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                              "state-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                              "state-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                            }]
                                          }, [
                                            createVNode(VIcon, {
                                              size: 56,
                                              class: "mb-2",
                                              color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "success" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "grey"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("div", {
                                              class: "text-caption font-weight-bold text-uppercase",
                                              style: {
                                                color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#999"
                                              }
                                            }, toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "Completada" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "EN PROGRESO" : "Bloqueada"), 5)
                                          ], 2),
                                          createVNode(VCardText, { class: "pa-6 flex-grow-1 text-white" }, {
                                            default: withCtx(() => [
                                              createVNode("h3", {
                                                class: "text-h6 font-serif font-weight-bold mb-2",
                                                style: { "color": "#D4AF37" }
                                              }, toDisplayString(actividad.titulo), 1),
                                              createVNode("div", {
                                                class: "mb-3 text-caption",
                                                style: { "color": "rgba(255,255,255,0.7)" }
                                              }, toDisplayString(actividad.tipo), 1),
                                              createVNode("p", {
                                                class: "text-body-2 text-justify",
                                                style: { "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" }
                                              }, toDisplayString(actividad.descripcion), 1),
                                              createVNode(VChip, {
                                                size: "small",
                                                color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                                "text-color": "white",
                                                class: "font-weight-bold"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(actividad.meta), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VDivider, { class: "border-opacity-25" }),
                                          createVNode(VCardActions, { class: "pa-4 bg-transparent d-flex flex-column gap-2" }, {
                                            default: withCtx(() => [
                                              unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                key: 0,
                                                block: "",
                                                size: "small",
                                                color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                                class: "font-weight-bold",
                                                href: actividad.enlace,
                                                target: "_blank",
                                                "append-icon": "mdi-open-in-new"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "href"])) : createCommentVNode("", true),
                                              unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                key: 1,
                                                block: "",
                                                size: "small",
                                                color: "success",
                                                variant: "flat",
                                                "prepend-icon": "mdi-check-circle",
                                                onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                                class: "font-weight-bold pulse-btn"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Marcar Completada ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])) : !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                                key: 2,
                                                block: "",
                                                size: "small",
                                                variant: "outlined",
                                                color: "grey",
                                                disabled: "",
                                                "prepend-icon": "mdi-lock"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Bloqueada ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["class", "style"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                actividadesFiltradas.value.length === 0 ? (openBlock(), createBlock(VCol, {
                                  key: 0,
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center pa-8" }, [
                                      createVNode(VIcon, {
                                        size: "48",
                                        color: "gold",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-emoticon-sad-outline")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h3", { class: "text-h6 font-serif text-white" }, "No hay actividades en esta categoría"),
                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, 'Prueba seleccionando "Todas" o revisa las actividades disponibles.')
                                    ])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VRow, {
                            key: 0,
                            class: "mb-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8",
                                class: "mx-auto text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VAlert, {
                                    color: "error",
                                    icon: "mdi-lock",
                                    variant: "tonal",
                                    class: "mb-6 font-serif-italic"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VRow, {
                            key: 1,
                            class: "mb-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center mb-8" }, [
                                    createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ACTIVIDADES INTERACTIVAS"),
                                    createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada actividad para desbloquear la siguiente. ")
                                  ]),
                                  createVNode("div", {
                                    class: "progress-section mb-8 pa-6 rounded-xl",
                                    style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                  }, [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                      createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length) + " completadas", 1)
                                    ]),
                                    createVNode(VProgressLinear, {
                                      value: unref(progresoActividades) / listaActividades.length * 100,
                                      color: "success",
                                      "background-color": "rgba(255,255,255,0.1)",
                                      height: "24",
                                      rounded: ""
                                    }, null, 8, ["value"])
                                  ]),
                                  createVNode("div", { class: "d-flex justify-center mb-8 gap-2" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(["Todas", "Quiz", "Analisis", "Reflexion"], (tipo) => {
                                      return createVNode(VBtn, {
                                        key: tipo,
                                        onClick: ($event) => filtro.value = tipo,
                                        size: "small",
                                        color: filtro.value === tipo ? "#D4AF37" : "rgba(255,255,255,0.3)",
                                        variant: filtro.value === tipo ? "flat" : "outlined",
                                        class: "font-weight-bold text-uppercase"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(tipo === "Analisis" ? "Análisis" : tipo), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick", "color", "variant"]);
                                    }), 64))
                                  ]),
                                  createVNode(VDivider, {
                                    class: "mb-8 border-opacity-50",
                                    color: "gold"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })),
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(actividadesFiltradas.value, (actividad, index) => {
                                return openBlock(), createBlock(VCol, {
                                  key: actividad.titulo,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      elevation: "0",
                                      class: ["rounded-xl h-100 d-flex flex-column card-animation", {
                                        "activity-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                        "activity-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                        "activity-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                      }],
                                      style: { animationDelay: `${listaActividades.indexOf(actividad) * 0.15}s` }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: ["state-indicator pa-5 text-center", {
                                            "state-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                            "state-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                            "state-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                          }]
                                        }, [
                                          createVNode(VIcon, {
                                            size: 56,
                                            class: "mb-2",
                                            color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "success" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "grey"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("div", {
                                            class: "text-caption font-weight-bold text-uppercase",
                                            style: {
                                              color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#999"
                                            }
                                          }, toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "Completada" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "EN PROGRESO" : "Bloqueada"), 5)
                                        ], 2),
                                        createVNode(VCardText, { class: "pa-6 flex-grow-1 text-white" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", {
                                              class: "text-h6 font-serif font-weight-bold mb-2",
                                              style: { "color": "#D4AF37" }
                                            }, toDisplayString(actividad.titulo), 1),
                                            createVNode("div", {
                                              class: "mb-3 text-caption",
                                              style: { "color": "rgba(255,255,255,0.7)" }
                                            }, toDisplayString(actividad.tipo), 1),
                                            createVNode("p", {
                                              class: "text-body-2 text-justify",
                                              style: { "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" }
                                            }, toDisplayString(actividad.descripcion), 1),
                                            createVNode(VChip, {
                                              size: "small",
                                              color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                              "text-color": "white",
                                              class: "font-weight-bold"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(actividad.meta), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VDivider, { class: "border-opacity-25" }),
                                        createVNode(VCardActions, { class: "pa-4 bg-transparent d-flex flex-column gap-2" }, {
                                          default: withCtx(() => [
                                            unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                              key: 0,
                                              block: "",
                                              size: "small",
                                              color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                              class: "font-weight-bold",
                                              href: actividad.enlace,
                                              target: "_blank",
                                              "append-icon": "mdi-open-in-new"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color", "href"])) : createCommentVNode("", true),
                                            unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                              key: 1,
                                              block: "",
                                              size: "small",
                                              color: "success",
                                              variant: "flat",
                                              "prepend-icon": "mdi-check-circle",
                                              onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                              class: "font-weight-bold pulse-btn"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Marcar Completada ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])) : !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                              key: 2,
                                              block: "",
                                              size: "small",
                                              variant: "outlined",
                                              color: "grey",
                                              disabled: "",
                                              "prepend-icon": "mdi-lock"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Bloqueada ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "style"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              actividadesFiltradas.value.length === 0 ? (openBlock(), createBlock(VCol, {
                                key: 0,
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center pa-8" }, [
                                    createVNode(VIcon, {
                                      size: "48",
                                      color: "gold",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-emoticon-sad-outline")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h3", { class: "text-h6 font-serif text-white" }, "No hay actividades en esta categoría"),
                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, 'Prueba seleccionando "Todas" o revisa las actividades disponibles.')
                                  ])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "floating-shapes" }, [
                      createVNode("div", { class: "shape shape-1" }),
                      createVNode("div", { class: "shape shape-2" }),
                      createVNode("div", { class: "shape shape-3" }),
                      createVNode("div", { class: "shape shape-4" }),
                      createVNode("div", { class: "shape shape-5" })
                    ]),
                    createVNode(VContainer, { class: "py-12 px-6 position-relative z-1" }, {
                      default: withCtx(() => [
                        !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VRow, {
                          key: 0,
                          class: "mb-8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "8",
                              class: "mx-auto text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(VAlert, {
                                  color: "error",
                                  icon: "mdi-lock",
                                  variant: "tonal",
                                  class: "mb-6 font-serif-italic"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VRow, {
                          key: 1,
                          class: "mb-8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-center mb-8" }, [
                                  createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ACTIVIDADES INTERACTIVAS"),
                                  createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada actividad para desbloquear la siguiente. ")
                                ]),
                                createVNode("div", {
                                  class: "progress-section mb-8 pa-6 rounded-xl",
                                  style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                }, [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                    createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length) + " completadas", 1)
                                  ]),
                                  createVNode(VProgressLinear, {
                                    value: unref(progresoActividades) / listaActividades.length * 100,
                                    color: "success",
                                    "background-color": "rgba(255,255,255,0.1)",
                                    height: "24",
                                    rounded: ""
                                  }, null, 8, ["value"])
                                ]),
                                createVNode("div", { class: "d-flex justify-center mb-8 gap-2" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(["Todas", "Quiz", "Analisis", "Reflexion"], (tipo) => {
                                    return createVNode(VBtn, {
                                      key: tipo,
                                      onClick: ($event) => filtro.value = tipo,
                                      size: "small",
                                      color: filtro.value === tipo ? "#D4AF37" : "rgba(255,255,255,0.3)",
                                      variant: filtro.value === tipo ? "flat" : "outlined",
                                      class: "font-weight-bold text-uppercase"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tipo === "Analisis" ? "Análisis" : tipo), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick", "color", "variant"]);
                                  }), 64))
                                ]),
                                createVNode(VDivider, {
                                  class: "mb-8 border-opacity-50",
                                  color: "gold"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })),
                        createVNode(VRow, { justify: "center" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(actividadesFiltradas.value, (actividad, index) => {
                              return openBlock(), createBlock(VCol, {
                                key: actividad.titulo,
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    elevation: "0",
                                    class: ["rounded-xl h-100 d-flex flex-column card-animation", {
                                      "activity-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                      "activity-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                      "activity-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                    }],
                                    style: { animationDelay: `${listaActividades.indexOf(actividad) * 0.15}s` }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: ["state-indicator pa-5 text-center", {
                                          "state-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                          "state-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                          "state-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                        }]
                                      }, [
                                        createVNode(VIcon, {
                                          size: 56,
                                          class: "mb-2",
                                          color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "success" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "grey"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("div", {
                                          class: "text-caption font-weight-bold text-uppercase",
                                          style: {
                                            color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#999"
                                          }
                                        }, toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "Completada" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "EN PROGRESO" : "Bloqueada"), 5)
                                      ], 2),
                                      createVNode(VCardText, { class: "pa-6 flex-grow-1 text-white" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", {
                                            class: "text-h6 font-serif font-weight-bold mb-2",
                                            style: { "color": "#D4AF37" }
                                          }, toDisplayString(actividad.titulo), 1),
                                          createVNode("div", {
                                            class: "mb-3 text-caption",
                                            style: { "color": "rgba(255,255,255,0.7)" }
                                          }, toDisplayString(actividad.tipo), 1),
                                          createVNode("p", {
                                            class: "text-body-2 text-justify",
                                            style: { "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" }
                                          }, toDisplayString(actividad.descripcion), 1),
                                          createVNode(VChip, {
                                            size: "small",
                                            color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                            "text-color": "white",
                                            class: "font-weight-bold"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(actividad.meta), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VDivider, { class: "border-opacity-25" }),
                                      createVNode(VCardActions, { class: "pa-4 bg-transparent d-flex flex-column gap-2" }, {
                                        default: withCtx(() => [
                                          unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            block: "",
                                            size: "small",
                                            color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                            class: "font-weight-bold",
                                            href: actividad.enlace,
                                            target: "_blank",
                                            "append-icon": "mdi-open-in-new"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "href"])) : createCommentVNode("", true),
                                          unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                            key: 1,
                                            block: "",
                                            size: "small",
                                            color: "success",
                                            variant: "flat",
                                            "prepend-icon": "mdi-check-circle",
                                            onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                            class: "font-weight-bold pulse-btn"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Marcar Completada ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])) : !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                            key: 2,
                                            block: "",
                                            size: "small",
                                            variant: "outlined",
                                            color: "grey",
                                            disabled: "",
                                            "prepend-icon": "mdi-lock"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Bloqueada ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "style"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            actividadesFiltradas.value.length === 0 ? (openBlock(), createBlock(VCol, {
                              key: 0,
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-center pa-8" }, [
                                  createVNode(VIcon, {
                                    size: "48",
                                    color: "gold",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-emoticon-sad-outline")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h3", { class: "text-h6 font-serif text-white" }, "No hay actividades en esta categoría"),
                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, 'Prueba seleccionando "Todas" o revisa las actividades disponibles.')
                                ])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBar, {
                app: "",
                color: "rgba(20, 20, 20, 0.8)",
                class: "glass-header",
                theme: "dark",
                elevation: "0"
              }, {
                default: withCtx(() => [
                  createVNode(VToolbarTitle, { class: "font-serif text-gold ml-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Constitución Interactiva")
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    variant: "text",
                    color: "white",
                    to: "/",
                    "prepend-icon": "mdi-home",
                    class: "mr-2 hidden-sm-and-down"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Inicio")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    variant: "text",
                    color: "white",
                    to: "/introduccion",
                    "prepend-icon": "mdi-book-open-variant",
                    class: "mr-2 hidden-sm-and-down"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Temario")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    variant: "text",
                    color: "gold",
                    to: "/Actividades",
                    "prepend-icon": "mdi-controller-classic",
                    class: "mr-2 hidden-sm-and-down"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Actividades")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    variant: "outlined",
                    color: "white",
                    to: "/Creditos",
                    "prepend-icon": "mdi-account-group",
                    class: "mr-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Créditos")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VMain, { class: "dynamic-bg position-relative overflow-hidden" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "floating-shapes" }, [
                    createVNode("div", { class: "shape shape-1" }),
                    createVNode("div", { class: "shape shape-2" }),
                    createVNode("div", { class: "shape shape-3" }),
                    createVNode("div", { class: "shape shape-4" }),
                    createVNode("div", { class: "shape shape-5" })
                  ]),
                  createVNode(VContainer, { class: "py-12 px-6 position-relative z-1" }, {
                    default: withCtx(() => [
                      !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VRow, {
                        key: 0,
                        class: "mb-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: "mx-auto text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VAlert, {
                                color: "error",
                                icon: "mdi-lock",
                                variant: "tonal",
                                class: "mb-6 font-serif-italic"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" ¡Atención! Aún no has completado la lectura de todos los temas en la sección de Temario. Termina de leerlos para desbloquear las actividades. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VRow, {
                        key: 1,
                        class: "mb-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center mb-8" }, [
                                createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ACTIVIDADES INTERACTIVAS"),
                                createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada actividad para desbloquear la siguiente. ")
                              ]),
                              createVNode("div", {
                                class: "progress-section mb-8 pa-6 rounded-xl",
                                style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                              }, [
                                createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                  createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                  createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length) + " completadas", 1)
                                ]),
                                createVNode(VProgressLinear, {
                                  value: unref(progresoActividades) / listaActividades.length * 100,
                                  color: "success",
                                  "background-color": "rgba(255,255,255,0.1)",
                                  height: "24",
                                  rounded: ""
                                }, null, 8, ["value"])
                              ]),
                              createVNode("div", { class: "d-flex justify-center mb-8 gap-2" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(["Todas", "Quiz", "Analisis", "Reflexion"], (tipo) => {
                                  return createVNode(VBtn, {
                                    key: tipo,
                                    onClick: ($event) => filtro.value = tipo,
                                    size: "small",
                                    color: filtro.value === tipo ? "#D4AF37" : "rgba(255,255,255,0.3)",
                                    variant: filtro.value === tipo ? "flat" : "outlined",
                                    class: "font-weight-bold text-uppercase"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tipo === "Analisis" ? "Análisis" : tipo), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick", "color", "variant"]);
                                }), 64))
                              ]),
                              createVNode(VDivider, {
                                class: "mb-8 border-opacity-50",
                                color: "gold"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })),
                      createVNode(VRow, { justify: "center" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(actividadesFiltradas.value, (actividad, index) => {
                            return openBlock(), createBlock(VCol, {
                              key: actividad.titulo,
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  elevation: "0",
                                  class: ["rounded-xl h-100 d-flex flex-column card-animation", {
                                    "activity-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                    "activity-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                    "activity-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                  }],
                                  style: { animationDelay: `${listaActividades.indexOf(actividad) * 0.15}s` }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: ["state-indicator pa-5 text-center", {
                                        "state-locked": !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades),
                                        "state-completed": listaActividades.indexOf(actividad) < unref(progresoActividades),
                                        "state-active": listaActividades.indexOf(actividad) === unref(progresoActividades)
                                      }]
                                    }, [
                                      createVNode(VIcon, {
                                        size: 56,
                                        class: "mb-2",
                                        color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "success" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "grey"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "mdi-check-circle" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? actividad.icono : "mdi-lock-outline"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      createVNode("div", {
                                        class: "text-caption font-weight-bold text-uppercase",
                                        style: {
                                          color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#999"
                                        }
                                      }, toDisplayString(listaActividades.indexOf(actividad) < unref(progresoActividades) ? "Completada" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "EN PROGRESO" : "Bloqueada"), 5)
                                    ], 2),
                                    createVNode(VCardText, { class: "pa-6 flex-grow-1 text-white" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", {
                                          class: "text-h6 font-serif font-weight-bold mb-2",
                                          style: { "color": "#D4AF37" }
                                        }, toDisplayString(actividad.titulo), 1),
                                        createVNode("div", {
                                          class: "mb-3 text-caption",
                                          style: { "color": "rgba(255,255,255,0.7)" }
                                        }, toDisplayString(actividad.tipo), 1),
                                        createVNode("p", {
                                          class: "text-body-2 text-justify",
                                          style: { "color": "rgba(255,255,255,0.85)", "line-height": "1.5", "margin-bottom": "1rem" }
                                        }, toDisplayString(actividad.descripcion), 1),
                                        createVNode(VChip, {
                                          size: "small",
                                          color: listaActividades.indexOf(actividad) < unref(progresoActividades) ? "#4CAF50" : listaActividades.indexOf(actividad) === unref(progresoActividades) ? "#D4AF37" : "#555",
                                          "text-color": "white",
                                          class: "font-weight-bold"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(actividad.meta), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VDivider, { class: "border-opacity-25" }),
                                    createVNode(VCardActions, { class: "pa-4 bg-transparent d-flex flex-column gap-2" }, {
                                      default: withCtx(() => [
                                        unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) <= unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          block: "",
                                          size: "small",
                                          color: listaActividades.indexOf(actividad) === unref(progresoActividades) ? "warning" : "success",
                                          class: "font-weight-bold",
                                          href: actividad.enlace,
                                          target: "_blank",
                                          "append-icon": "mdi-open-in-new"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(listaActividades.indexOf(actividad) === unref(progresoActividades) ? "Empezar Ahora" : "Revisar"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "href"])) : createCommentVNode("", true),
                                        unref(actividadesDesbloqueadas) && listaActividades.indexOf(actividad) === unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                          key: 1,
                                          block: "",
                                          size: "small",
                                          color: "success",
                                          variant: "flat",
                                          "prepend-icon": "mdi-check-circle",
                                          onClick: ($event) => completarActividad(listaActividades.indexOf(actividad)),
                                          class: "font-weight-bold pulse-btn"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Marcar Completada ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])) : !unref(actividadesDesbloqueadas) || listaActividades.indexOf(actividad) > unref(progresoActividades) ? (openBlock(), createBlock(VBtn, {
                                          key: 2,
                                          block: "",
                                          size: "small",
                                          variant: "outlined",
                                          color: "grey",
                                          disabled: "",
                                          "prepend-icon": "mdi-lock"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Bloqueada ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          actividadesFiltradas.value.length === 0 ? (openBlock(), createBlock(VCol, {
                            key: 0,
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center pa-8" }, [
                                createVNode(VIcon, {
                                  size: "48",
                                  color: "gold",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-emoticon-sad-outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h3", { class: "text-h6 font-serif text-white" }, "No hay actividades en esta categoría"),
                                createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, 'Prueba seleccionando "Todas" o revisa las actividades disponibles.')
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Actividades.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Actividades = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcc155d7"]]);

export { Actividades as default };
//# sourceMappingURL=Actividades-Dq-RVfCn.mjs.map
