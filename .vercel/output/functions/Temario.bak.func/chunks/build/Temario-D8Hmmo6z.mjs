import { withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useState } from './state-CqKsN6K6.mjs';
import { _ as _export_sfc, V as VApp, d as VBtn, f as VContainer, g as VRow, h as VCol, i as VProgressLinear, j as VDivider, k as VIcon } from './server.mjs';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VMain } from './VMain-Cd1cV_fK.mjs';
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
  __name: "Temario",
  __ssrInlineRender: true,
  setup(__props) {
    const maxTemaDesbloqueado = useState("maxTemaDesbloqueado", () => 1);
    const temasData = [
      {
        titulo: "Introducción y Conceptos",
        descripcion: "Entiende qué son los derechos fundamentales y la dignidad humana",
        icon: "mdi-book-open-variant"
      },
      {
        titulo: "Derechos de 1ª Generación",
        descripcion: "Libertades civiles y políticas fundamentales",
        icon: "mdi-shield-account"
      },
      {
        titulo: "Derechos de 2ª Generación",
        descripcion: "Igualdad de oportunidades y justicia social",
        icon: "mdi-scale-balance"
      },
      {
        titulo: "Derechos de 3ª Generación",
        descripcion: "Solidaridad, paz y medio ambiente sano",
        icon: "mdi-dove"
      },
      {
        titulo: "Garantías y Tutela",
        descripcion: "Mecanismos para defender tus derechos",
        icon: "mdi-gavel"
      }
    ];
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
                        _push4(`Temario - Derechos Fundamentales`);
                      } else {
                        return [
                          createTextVNode("Temario - Derechos Fundamentales")
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
                    color: "gold",
                    to: "/Temario",
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
                        createTextVNode("Temario - Derechos Fundamentales")
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
                      color: "gold",
                      to: "/Temario",
                      "prepend-icon": "mdi-book-open-variant",
                      class: "mr-2 hidden-sm-and-down"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Temario")
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
                  _push3(`<div class="floating-shapes" data-v-65abd799${_scopeId2}><div class="shape shape-1" data-v-65abd799${_scopeId2}></div><div class="shape shape-2" data-v-65abd799${_scopeId2}></div><div class="shape shape-3" data-v-65abd799${_scopeId2}></div><div class="shape shape-4" data-v-65abd799${_scopeId2}></div><div class="shape shape-5" data-v-65abd799${_scopeId2}></div></div>`);
                  _push3(ssrRenderComponent(VContainer, { class: "py-12 px-6 position-relative z-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
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
                                    _push6(`<div class="text-center mb-8" data-v-65abd799${_scopeId5}><h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow" data-v-65abd799${_scopeId5}>ESTRUCTURA CURRICULAR</h1><p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" data-v-65abd799${_scopeId5}> Completa cada tema en orden para desbloquear el siguiente. </p></div><div class="progress-section mb-8 pa-6 rounded-xl" style="${ssrRenderStyle({ "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" })}" data-v-65abd799${_scopeId5}><div class="d-flex justify-space-between align-center mb-3" data-v-65abd799${_scopeId5}><span class="text-body-1 font-weight-bold text-white" data-v-65abd799${_scopeId5}>Progreso:</span><span class="text-body-2 text-gold font-weight-bold" data-v-65abd799${_scopeId5}>${ssrInterpolate(unref(maxTemaDesbloqueado) - 1)} / ${ssrInterpolate(temasData.length)} completados</span></div>`);
                                    _push6(ssrRenderComponent(VProgressLinear, {
                                      value: (unref(maxTemaDesbloqueado) - 1) / temasData.length * 100,
                                      color: "success",
                                      "background-color": "rgba(255,255,255,0.1)",
                                      height: "24",
                                      rounded: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VDivider, {
                                      class: "mb-8 border-opacity-50",
                                      color: "gold"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-center mb-8" }, [
                                        createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ESTRUCTURA CURRICULAR"),
                                        createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada tema en orden para desbloquear el siguiente. ")
                                      ]),
                                      createVNode("div", {
                                        class: "progress-section mb-8 pa-6 rounded-xl",
                                        style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                      }, [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                          createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(maxTemaDesbloqueado) - 1) + " / " + toDisplayString(temasData.length) + " completados", 1)
                                        ]),
                                        createVNode(VProgressLinear, {
                                          value: (unref(maxTemaDesbloqueado) - 1) / temasData.length * 100,
                                          color: "success",
                                          "background-color": "rgba(255,255,255,0.1)",
                                          height: "24",
                                          rounded: ""
                                        }, null, 8, ["value"])
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
                                      createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ESTRUCTURA CURRICULAR"),
                                      createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada tema en orden para desbloquear el siguiente. ")
                                    ]),
                                    createVNode("div", {
                                      class: "progress-section mb-8 pa-6 rounded-xl",
                                      style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                    }, [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                        createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                        createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(maxTemaDesbloqueado) - 1) + " / " + toDisplayString(temasData.length) + " completados", 1)
                                      ]),
                                      createVNode(VProgressLinear, {
                                        value: (unref(maxTemaDesbloqueado) - 1) / temasData.length * 100,
                                        color: "success",
                                        "background-color": "rgba(255,255,255,0.1)",
                                        height: "24",
                                        rounded: ""
                                      }, null, 8, ["value"])
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
                        _push4(ssrRenderComponent(VRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(temasData, (tema, index) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: tema.titulo,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        elevation: "0",
                                        class: ["rounded-xl h-100 d-flex flex-column card-animation tema-card", {
                                          "tema-locked": index + 1 > unref(maxTemaDesbloqueado),
                                          "tema-completed": index + 1 < unref(maxTemaDesbloqueado),
                                          "tema-active": index + 1 === unref(maxTemaDesbloqueado)
                                        }],
                                        style: { animationDelay: index * 0.15 + "s" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([{
                                              "state-locked": index + 1 > unref(maxTemaDesbloqueado),
                                              "state-completed": index + 1 < unref(maxTemaDesbloqueado),
                                              "state-active": index + 1 === unref(maxTemaDesbloqueado)
                                            }, "state-indicator pa-5 text-center"])}" data-v-65abd799${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: "32",
                                              color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : index + 1 === unref(maxTemaDesbloqueado) ? "warning" : "grey",
                                              class: "mb-2"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div class="tema-badge" data-v-65abd799${_scopeId6}>${ssrInterpolate(index + 1 < unref(maxTemaDesbloqueado) ? "COMPLETADO" : index + 1 === unref(maxTemaDesbloqueado) ? "EN PROGRESO" : "BLOQUEADO")}</div></div>`);
                                            _push7(ssrRenderComponent(VCardText, { class: "flex-grow-1 text-center pa-6" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<h3 class="tema-title text-h6 mb-3" data-v-65abd799${_scopeId7}>${ssrInterpolate(tema.titulo)}</h3><p class="text-body-2 text-grey-lighten-2" data-v-65abd799${_scopeId7}>${ssrInterpolate(tema.descripcion)}</p>`);
                                                } else {
                                                  return [
                                                    createVNode("h3", { class: "tema-title text-h6 mb-3" }, toDisplayString(tema.titulo), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, toDisplayString(tema.descripcion), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardActions, {
                                              class: "justify-center pa-4 border-top",
                                              style: { "border-color": "rgba(212,175,55,0.2)" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  if (index + 1 <= unref(maxTemaDesbloqueado)) {
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                                      variant: "flat",
                                                      to: "/introduccion#tema-" + (index + 1),
                                                      class: "font-weight-bold text-uppercase"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar")}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      color: "grey",
                                                      variant: "outlined",
                                                      disabled: "",
                                                      class: "font-weight-bold text-uppercase"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Bloqueado `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Bloqueado ")
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  }
                                                } else {
                                                  return [
                                                    index + 1 <= unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VBtn, {
                                                      key: 0,
                                                      color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                                      variant: "flat",
                                                      to: "/introduccion#tema-" + (index + 1),
                                                      class: "font-weight-bold text-uppercase"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color", "to"])) : (openBlock(), createBlock(VBtn, {
                                                      key: 1,
                                                      color: "grey",
                                                      variant: "outlined",
                                                      disabled: "",
                                                      class: "font-weight-bold text-uppercase"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Bloqueado ")
                                                      ]),
                                                      _: 1
                                                    }))
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: ["state-indicator pa-5 text-center", {
                                                  "state-locked": index + 1 > unref(maxTemaDesbloqueado),
                                                  "state-completed": index + 1 < unref(maxTemaDesbloqueado),
                                                  "state-active": index + 1 === unref(maxTemaDesbloqueado)
                                                }]
                                              }, [
                                                createVNode(VIcon, {
                                                  size: "32",
                                                  color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : index + 1 === unref(maxTemaDesbloqueado) ? "warning" : "grey",
                                                  class: "mb-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("div", { class: "tema-badge" }, toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "COMPLETADO" : index + 1 === unref(maxTemaDesbloqueado) ? "EN PROGRESO" : "BLOQUEADO"), 1)
                                              ], 2),
                                              createVNode(VCardText, { class: "flex-grow-1 text-center pa-6" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", { class: "tema-title text-h6 mb-3" }, toDisplayString(tema.titulo), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, toDisplayString(tema.descripcion), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardActions, {
                                                class: "justify-center pa-4 border-top",
                                                style: { "border-color": "rgba(212,175,55,0.2)" }
                                              }, {
                                                default: withCtx(() => [
                                                  index + 1 <= unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VBtn, {
                                                    key: 0,
                                                    color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                                    variant: "flat",
                                                    to: "/introduccion#tema-" + (index + 1),
                                                    class: "font-weight-bold text-uppercase"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color", "to"])) : (openBlock(), createBlock(VBtn, {
                                                    key: 1,
                                                    color: "grey",
                                                    variant: "outlined",
                                                    disabled: "",
                                                    class: "font-weight-bold text-uppercase"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Bloqueado ")
                                                    ]),
                                                    _: 1
                                                  }))
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
                                          class: ["rounded-xl h-100 d-flex flex-column card-animation tema-card", {
                                            "tema-locked": index + 1 > unref(maxTemaDesbloqueado),
                                            "tema-completed": index + 1 < unref(maxTemaDesbloqueado),
                                            "tema-active": index + 1 === unref(maxTemaDesbloqueado)
                                          }],
                                          style: { animationDelay: index * 0.15 + "s" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: ["state-indicator pa-5 text-center", {
                                                "state-locked": index + 1 > unref(maxTemaDesbloqueado),
                                                "state-completed": index + 1 < unref(maxTemaDesbloqueado),
                                                "state-active": index + 1 === unref(maxTemaDesbloqueado)
                                              }]
                                            }, [
                                              createVNode(VIcon, {
                                                size: "32",
                                                color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : index + 1 === unref(maxTemaDesbloqueado) ? "warning" : "grey",
                                                class: "mb-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("div", { class: "tema-badge" }, toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "COMPLETADO" : index + 1 === unref(maxTemaDesbloqueado) ? "EN PROGRESO" : "BLOQUEADO"), 1)
                                            ], 2),
                                            createVNode(VCardText, { class: "flex-grow-1 text-center pa-6" }, {
                                              default: withCtx(() => [
                                                createVNode("h3", { class: "tema-title text-h6 mb-3" }, toDisplayString(tema.titulo), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, toDisplayString(tema.descripcion), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardActions, {
                                              class: "justify-center pa-4 border-top",
                                              style: { "border-color": "rgba(212,175,55,0.2)" }
                                            }, {
                                              default: withCtx(() => [
                                                index + 1 <= unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VBtn, {
                                                  key: 0,
                                                  color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                                  variant: "flat",
                                                  to: "/introduccion#tema-" + (index + 1),
                                                  class: "font-weight-bold text-uppercase"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color", "to"])) : (openBlock(), createBlock(VBtn, {
                                                  key: 1,
                                                  color: "grey",
                                                  variant: "outlined",
                                                  disabled: "",
                                                  class: "font-weight-bold text-uppercase"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Bloqueado ")
                                                  ]),
                                                  _: 1
                                                }))
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
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(temasData, (tema, index) => {
                                  return createVNode(VCol, {
                                    key: tema.titulo,
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        elevation: "0",
                                        class: ["rounded-xl h-100 d-flex flex-column card-animation tema-card", {
                                          "tema-locked": index + 1 > unref(maxTemaDesbloqueado),
                                          "tema-completed": index + 1 < unref(maxTemaDesbloqueado),
                                          "tema-active": index + 1 === unref(maxTemaDesbloqueado)
                                        }],
                                        style: { animationDelay: index * 0.15 + "s" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: ["state-indicator pa-5 text-center", {
                                              "state-locked": index + 1 > unref(maxTemaDesbloqueado),
                                              "state-completed": index + 1 < unref(maxTemaDesbloqueado),
                                              "state-active": index + 1 === unref(maxTemaDesbloqueado)
                                            }]
                                          }, [
                                            createVNode(VIcon, {
                                              size: "32",
                                              color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : index + 1 === unref(maxTemaDesbloqueado) ? "warning" : "grey",
                                              class: "mb-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("div", { class: "tema-badge" }, toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "COMPLETADO" : index + 1 === unref(maxTemaDesbloqueado) ? "EN PROGRESO" : "BLOQUEADO"), 1)
                                          ], 2),
                                          createVNode(VCardText, { class: "flex-grow-1 text-center pa-6" }, {
                                            default: withCtx(() => [
                                              createVNode("h3", { class: "tema-title text-h6 mb-3" }, toDisplayString(tema.titulo), 1),
                                              createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, toDisplayString(tema.descripcion), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardActions, {
                                            class: "justify-center pa-4 border-top",
                                            style: { "border-color": "rgba(212,175,55,0.2)" }
                                          }, {
                                            default: withCtx(() => [
                                              index + 1 <= unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VBtn, {
                                                key: 0,
                                                color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                                variant: "flat",
                                                to: "/introduccion#tema-" + (index + 1),
                                                class: "font-weight-bold text-uppercase"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "to"])) : (openBlock(), createBlock(VBtn, {
                                                key: 1,
                                                color: "grey",
                                                variant: "outlined",
                                                disabled: "",
                                                class: "font-weight-bold text-uppercase"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Bloqueado ")
                                                ]),
                                                _: 1
                                              }))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["class", "style"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { class: "mb-8" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center mb-8" }, [
                                    createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ESTRUCTURA CURRICULAR"),
                                    createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada tema en orden para desbloquear el siguiente. ")
                                  ]),
                                  createVNode("div", {
                                    class: "progress-section mb-8 pa-6 rounded-xl",
                                    style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                  }, [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                      createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(maxTemaDesbloqueado) - 1) + " / " + toDisplayString(temasData.length) + " completados", 1)
                                    ]),
                                    createVNode(VProgressLinear, {
                                      value: (unref(maxTemaDesbloqueado) - 1) / temasData.length * 100,
                                      color: "success",
                                      "background-color": "rgba(255,255,255,0.1)",
                                      height: "24",
                                      rounded: ""
                                    }, null, 8, ["value"])
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
                          }),
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(temasData, (tema, index) => {
                                return createVNode(VCol, {
                                  key: tema.titulo,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      elevation: "0",
                                      class: ["rounded-xl h-100 d-flex flex-column card-animation tema-card", {
                                        "tema-locked": index + 1 > unref(maxTemaDesbloqueado),
                                        "tema-completed": index + 1 < unref(maxTemaDesbloqueado),
                                        "tema-active": index + 1 === unref(maxTemaDesbloqueado)
                                      }],
                                      style: { animationDelay: index * 0.15 + "s" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: ["state-indicator pa-5 text-center", {
                                            "state-locked": index + 1 > unref(maxTemaDesbloqueado),
                                            "state-completed": index + 1 < unref(maxTemaDesbloqueado),
                                            "state-active": index + 1 === unref(maxTemaDesbloqueado)
                                          }]
                                        }, [
                                          createVNode(VIcon, {
                                            size: "32",
                                            color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : index + 1 === unref(maxTemaDesbloqueado) ? "warning" : "grey",
                                            class: "mb-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("div", { class: "tema-badge" }, toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "COMPLETADO" : index + 1 === unref(maxTemaDesbloqueado) ? "EN PROGRESO" : "BLOQUEADO"), 1)
                                        ], 2),
                                        createVNode(VCardText, { class: "flex-grow-1 text-center pa-6" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", { class: "tema-title text-h6 mb-3" }, toDisplayString(tema.titulo), 1),
                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, toDisplayString(tema.descripcion), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardActions, {
                                          class: "justify-center pa-4 border-top",
                                          style: { "border-color": "rgba(212,175,55,0.2)" }
                                        }, {
                                          default: withCtx(() => [
                                            index + 1 <= unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VBtn, {
                                              key: 0,
                                              color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                              variant: "flat",
                                              to: "/introduccion#tema-" + (index + 1),
                                              class: "font-weight-bold text-uppercase"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color", "to"])) : (openBlock(), createBlock(VBtn, {
                                              key: 1,
                                              color: "grey",
                                              variant: "outlined",
                                              disabled: "",
                                              class: "font-weight-bold text-uppercase"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Bloqueado ")
                                              ]),
                                              _: 1
                                            }))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "style"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                        createVNode(VRow, { class: "mb-8" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-center mb-8" }, [
                                  createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ESTRUCTURA CURRICULAR"),
                                  createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada tema en orden para desbloquear el siguiente. ")
                                ]),
                                createVNode("div", {
                                  class: "progress-section mb-8 pa-6 rounded-xl",
                                  style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                                }, [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                    createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(maxTemaDesbloqueado) - 1) + " / " + toDisplayString(temasData.length) + " completados", 1)
                                  ]),
                                  createVNode(VProgressLinear, {
                                    value: (unref(maxTemaDesbloqueado) - 1) / temasData.length * 100,
                                    color: "success",
                                    "background-color": "rgba(255,255,255,0.1)",
                                    height: "24",
                                    rounded: ""
                                  }, null, 8, ["value"])
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
                        }),
                        createVNode(VRow, { justify: "center" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(temasData, (tema, index) => {
                              return createVNode(VCol, {
                                key: tema.titulo,
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    elevation: "0",
                                    class: ["rounded-xl h-100 d-flex flex-column card-animation tema-card", {
                                      "tema-locked": index + 1 > unref(maxTemaDesbloqueado),
                                      "tema-completed": index + 1 < unref(maxTemaDesbloqueado),
                                      "tema-active": index + 1 === unref(maxTemaDesbloqueado)
                                    }],
                                    style: { animationDelay: index * 0.15 + "s" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: ["state-indicator pa-5 text-center", {
                                          "state-locked": index + 1 > unref(maxTemaDesbloqueado),
                                          "state-completed": index + 1 < unref(maxTemaDesbloqueado),
                                          "state-active": index + 1 === unref(maxTemaDesbloqueado)
                                        }]
                                      }, [
                                        createVNode(VIcon, {
                                          size: "32",
                                          color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : index + 1 === unref(maxTemaDesbloqueado) ? "warning" : "grey",
                                          class: "mb-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("div", { class: "tema-badge" }, toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "COMPLETADO" : index + 1 === unref(maxTemaDesbloqueado) ? "EN PROGRESO" : "BLOQUEADO"), 1)
                                      ], 2),
                                      createVNode(VCardText, { class: "flex-grow-1 text-center pa-6" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { class: "tema-title text-h6 mb-3" }, toDisplayString(tema.titulo), 1),
                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, toDisplayString(tema.descripcion), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardActions, {
                                        class: "justify-center pa-4 border-top",
                                        style: { "border-color": "rgba(212,175,55,0.2)" }
                                      }, {
                                        default: withCtx(() => [
                                          index + 1 <= unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                            variant: "flat",
                                            to: "/introduccion#tema-" + (index + 1),
                                            class: "font-weight-bold text-uppercase"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "to"])) : (openBlock(), createBlock(VBtn, {
                                            key: 1,
                                            color: "grey",
                                            variant: "outlined",
                                            disabled: "",
                                            class: "font-weight-bold text-uppercase"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Bloqueado ")
                                            ]),
                                            _: 1
                                          }))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "style"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
                      createTextVNode("Temario - Derechos Fundamentales")
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
                    color: "gold",
                    to: "/Temario",
                    "prepend-icon": "mdi-book-open-variant",
                    class: "mr-2 hidden-sm-and-down"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Temario")
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
                      createVNode(VRow, { class: "mb-8" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center mb-8" }, [
                                createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "ESTRUCTURA CURRICULAR"),
                                createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 slide-fade-in-delayed mb-6" }, " Completa cada tema en orden para desbloquear el siguiente. ")
                              ]),
                              createVNode("div", {
                                class: "progress-section mb-8 pa-6 rounded-xl",
                                style: { "background": "rgba(212,175,55,0.08)", "border": "2px solid rgba(212,175,55,0.3)" }
                              }, [
                                createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                  createVNode("span", { class: "text-body-1 font-weight-bold text-white" }, "Progreso:"),
                                  createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(unref(maxTemaDesbloqueado) - 1) + " / " + toDisplayString(temasData.length) + " completados", 1)
                                ]),
                                createVNode(VProgressLinear, {
                                  value: (unref(maxTemaDesbloqueado) - 1) / temasData.length * 100,
                                  color: "success",
                                  "background-color": "rgba(255,255,255,0.1)",
                                  height: "24",
                                  rounded: ""
                                }, null, 8, ["value"])
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
                      }),
                      createVNode(VRow, { justify: "center" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(temasData, (tema, index) => {
                            return createVNode(VCol, {
                              key: tema.titulo,
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  elevation: "0",
                                  class: ["rounded-xl h-100 d-flex flex-column card-animation tema-card", {
                                    "tema-locked": index + 1 > unref(maxTemaDesbloqueado),
                                    "tema-completed": index + 1 < unref(maxTemaDesbloqueado),
                                    "tema-active": index + 1 === unref(maxTemaDesbloqueado)
                                  }],
                                  style: { animationDelay: index * 0.15 + "s" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: ["state-indicator pa-5 text-center", {
                                        "state-locked": index + 1 > unref(maxTemaDesbloqueado),
                                        "state-completed": index + 1 < unref(maxTemaDesbloqueado),
                                        "state-active": index + 1 === unref(maxTemaDesbloqueado)
                                      }]
                                    }, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : index + 1 === unref(maxTemaDesbloqueado) ? "warning" : "grey",
                                        class: "mb-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "mdi-check-circle" : index + 1 === unref(maxTemaDesbloqueado) ? tema.icon : "mdi-lock-outline"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      createVNode("div", { class: "tema-badge" }, toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "COMPLETADO" : index + 1 === unref(maxTemaDesbloqueado) ? "EN PROGRESO" : "BLOQUEADO"), 1)
                                    ], 2),
                                    createVNode(VCardText, { class: "flex-grow-1 text-center pa-6" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { class: "tema-title text-h6 mb-3" }, toDisplayString(tema.titulo), 1),
                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, toDisplayString(tema.descripcion), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardActions, {
                                      class: "justify-center pa-4 border-top",
                                      style: { "border-color": "rgba(212,175,55,0.2)" }
                                    }, {
                                      default: withCtx(() => [
                                        index + 1 <= unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          color: index + 1 < unref(maxTemaDesbloqueado) ? "success" : "warning",
                                          variant: "flat",
                                          to: "/introduccion#tema-" + (index + 1),
                                          class: "font-weight-bold text-uppercase"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(index + 1 < unref(maxTemaDesbloqueado) ? "Revisar" : "Continuar"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "to"])) : (openBlock(), createBlock(VBtn, {
                                          key: 1,
                                          color: "grey",
                                          variant: "outlined",
                                          disabled: "",
                                          class: "font-weight-bold text-uppercase"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Bloqueado ")
                                          ]),
                                          _: 1
                                        }))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Temario.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Temario = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65abd799"]]);

export { Temario as default };
//# sourceMappingURL=Temario-D8Hmmo6z.mjs.map
