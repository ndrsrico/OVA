import { withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, V as VApp, d as VBtn, f as VContainer, g as VRow, h as VCol, a4 as VAvatar, H as VImg, k as VIcon } from './server.mjs';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VMain } from './VMain-Cd1cV_fK.mjs';
import { V as VCard } from './VCard-C8GwDJXo.mjs';
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
  __name: "Creditos",
  __ssrInlineRender: true,
  setup(__props) {
    const team = [
      {
        name: "Esteban Marquez",
        role: "Desarrollador Frontend",
        avatar: "/images/avatar_esteban.jpg",
        description: "Desarrollo frontend, integración de componentes interactivos con Nuxt y Vuetify."
      },
      {
        name: "Andrés Rico",
        role: "Director del Proyecto & UI/UX",
        avatar: "/images/avatar_andres.jpg",
        description: "Dirección de arte, diseño de interfaz (UI/UX) y estructura general de la OVA."
      },
      {
        name: "Sebastian Schortborgh",
        role: "Investigador Jurídico",
        avatar: "/images/avatar_sebastian.jpg",
        description: "Investigación jurídica, redacción y curaduría de contenidos constitucionales."
      },
      {
        name: "Brayan Vergara",
        role: "Diseñador Instruccional",
        avatar: "/images/avatar_brayan.jpg",
        description: "Diseño instruccional, pedagogía y secuenciación de actividades de aprendizaje."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              app: "",
              color: "rgba(33, 33, 33, 0.8)",
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
                    color: "white",
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
                    color: "gold",
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
                      color: "white",
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
                      color: "gold",
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
                  _push3(`<div class="floating-shapes" data-v-735970d6${_scopeId2}><div class="shape shape-1" data-v-735970d6${_scopeId2}></div><div class="shape shape-2" data-v-735970d6${_scopeId2}></div><div class="shape shape-3" data-v-735970d6${_scopeId2}></div><div class="shape shape-4" data-v-735970d6${_scopeId2}></div><div class="shape shape-5" data-v-735970d6${_scopeId2}></div></div>`);
                  _push3(ssrRenderComponent(VContainer, { class: "py-16 position-relative z-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { class: "mb-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-h2 font-serif text-white mb-4 slide-fade-in text-glow" data-v-735970d6${_scopeId5}>Equipo Desarrollador</h1><p class="text-h6 font-serif-italic text-amber-lighten-4 slide-fade-in-delayed" data-v-735970d6${_scopeId5}> Conoce a las mentes creativas detrás de este Objeto Virtual de Aprendizaje </p><div class="divider-gold mx-auto mt-6" data-v-735970d6${_scopeId5}></div>`);
                                  } else {
                                    return [
                                      createVNode("h1", { class: "text-h2 font-serif text-white mb-4 slide-fade-in text-glow" }, "Equipo Desarrollador"),
                                      createVNode("p", { class: "text-h6 font-serif-italic text-amber-lighten-4 slide-fade-in-delayed" }, " Conoce a las mentes creativas detrás de este Objeto Virtual de Aprendizaje "),
                                      createVNode("div", { class: "divider-gold mx-auto mt-6" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h1", { class: "text-h2 font-serif text-white mb-4 slide-fade-in text-glow" }, "Equipo Desarrollador"),
                                    createVNode("p", { class: "text-h6 font-serif-italic text-amber-lighten-4 slide-fade-in-delayed" }, " Conoce a las mentes creativas detrás de este Objeto Virtual de Aprendizaje "),
                                    createVNode("div", { class: "divider-gold mx-auto mt-6" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, {
                          justify: "center",
                          class: "staggered-cards"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(team, (member, index) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: index,
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  lg: "3"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "glass-card h-100 text-center pa-6 profile-card",
                                        style: { animationDelay: `${index * 0.2}s` }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VAvatar, {
                                              size: "150",
                                              class: "mb-6 avatar-glow elevation-10"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VImg, {
                                                    src: member.avatar,
                                                    cover: ""
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VImg, {
                                                      src: member.avatar,
                                                      cover: ""
                                                    }, null, 8, ["src"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<h3 class="text-h5 font-serif text-gold mb-1" data-v-735970d6${_scopeId6}>${ssrInterpolate(member.name)}</h3><div class="text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4" data-v-735970d6${_scopeId6}>${ssrInterpolate(member.role)}</div><p class="text-body-2 text-grey-lighten-2 mb-6" style="${ssrRenderStyle({ "line-height": "1.6" })}" data-v-735970d6${_scopeId6}>${ssrInterpolate(member.description)}</p><div class="d-flex justify-center gap-4 mt-auto" data-v-735970d6${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "mdi-github",
                                              variant: "tonal",
                                              color: "white",
                                              size: "small",
                                              class: "social-btn"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "mdi-linkedin",
                                              variant: "tonal",
                                              color: "blue-lighten-2",
                                              size: "small",
                                              class: "social-btn"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "mdi-email",
                                              variant: "tonal",
                                              color: "red-lighten-2",
                                              size: "small",
                                              class: "social-btn"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode(VAvatar, {
                                                size: "150",
                                                class: "mb-6 avatar-glow elevation-10"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: member.avatar,
                                                    cover: ""
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("h3", { class: "text-h5 font-serif text-gold mb-1" }, toDisplayString(member.name), 1),
                                              createVNode("div", { class: "text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4" }, toDisplayString(member.role), 1),
                                              createVNode("p", {
                                                class: "text-body-2 text-grey-lighten-2 mb-6",
                                                style: { "line-height": "1.6" }
                                              }, toDisplayString(member.description), 1),
                                              createVNode("div", { class: "d-flex justify-center gap-4 mt-auto" }, [
                                                createVNode(VBtn, {
                                                  icon: "mdi-github",
                                                  variant: "tonal",
                                                  color: "white",
                                                  size: "small",
                                                  class: "social-btn"
                                                }),
                                                createVNode(VBtn, {
                                                  icon: "mdi-linkedin",
                                                  variant: "tonal",
                                                  color: "blue-lighten-2",
                                                  size: "small",
                                                  class: "social-btn"
                                                }),
                                                createVNode(VBtn, {
                                                  icon: "mdi-email",
                                                  variant: "tonal",
                                                  color: "red-lighten-2",
                                                  size: "small",
                                                  class: "social-btn"
                                                })
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          class: "glass-card h-100 text-center pa-6 profile-card",
                                          style: { animationDelay: `${index * 0.2}s` }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VAvatar, {
                                              size: "150",
                                              class: "mb-6 avatar-glow elevation-10"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: member.avatar,
                                                  cover: ""
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("h3", { class: "text-h5 font-serif text-gold mb-1" }, toDisplayString(member.name), 1),
                                            createVNode("div", { class: "text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4" }, toDisplayString(member.role), 1),
                                            createVNode("p", {
                                              class: "text-body-2 text-grey-lighten-2 mb-6",
                                              style: { "line-height": "1.6" }
                                            }, toDisplayString(member.description), 1),
                                            createVNode("div", { class: "d-flex justify-center gap-4 mt-auto" }, [
                                              createVNode(VBtn, {
                                                icon: "mdi-github",
                                                variant: "tonal",
                                                color: "white",
                                                size: "small",
                                                class: "social-btn"
                                              }),
                                              createVNode(VBtn, {
                                                icon: "mdi-linkedin",
                                                variant: "tonal",
                                                color: "blue-lighten-2",
                                                size: "small",
                                                class: "social-btn"
                                              }),
                                              createVNode(VBtn, {
                                                icon: "mdi-email",
                                                variant: "tonal",
                                                color: "red-lighten-2",
                                                size: "small",
                                                class: "social-btn"
                                              })
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(team, (member, index) => {
                                  return createVNode(VCol, {
                                    key: index,
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    lg: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "glass-card h-100 text-center pa-6 profile-card",
                                        style: { animationDelay: `${index * 0.2}s` }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAvatar, {
                                            size: "150",
                                            class: "mb-6 avatar-glow elevation-10"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: member.avatar,
                                                cover: ""
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("h3", { class: "text-h5 font-serif text-gold mb-1" }, toDisplayString(member.name), 1),
                                          createVNode("div", { class: "text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4" }, toDisplayString(member.role), 1),
                                          createVNode("p", {
                                            class: "text-body-2 text-grey-lighten-2 mb-6",
                                            style: { "line-height": "1.6" }
                                          }, toDisplayString(member.description), 1),
                                          createVNode("div", { class: "d-flex justify-center gap-4 mt-auto" }, [
                                            createVNode(VBtn, {
                                              icon: "mdi-github",
                                              variant: "tonal",
                                              color: "white",
                                              size: "small",
                                              class: "social-btn"
                                            }),
                                            createVNode(VBtn, {
                                              icon: "mdi-linkedin",
                                              variant: "tonal",
                                              color: "blue-lighten-2",
                                              size: "small",
                                              class: "social-btn"
                                            }),
                                            createVNode(VBtn, {
                                              icon: "mdi-email",
                                              variant: "tonal",
                                              color: "red-lighten-2",
                                              size: "small",
                                              class: "social-btn"
                                            })
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["style"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mt-16" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "8",
                                class: "mx-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, { class: "glass-card pa-8 text-center text-white info-card" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            size: "48",
                                            color: "gold",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-school`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-school")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<h4 class="text-h5 font-serif text-gold mb-4" data-v-735970d6${_scopeId6}>Agradecimientos Especiales</h4><p class="text-body-1 opacity-80" style="${ssrRenderStyle({ "line-height": "1.8" })}" data-v-735970d6${_scopeId6}> Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos. </p>`);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              size: "48",
                                              color: "gold",
                                              class: "mb-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-school")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("h4", { class: "text-h5 font-serif text-gold mb-4" }, "Agradecimientos Especiales"),
                                            createVNode("p", {
                                              class: "text-body-1 opacity-80",
                                              style: { "line-height": "1.8" }
                                            }, " Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, { class: "glass-card pa-8 text-center text-white info-card" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "48",
                                            color: "gold",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-school")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("h4", { class: "text-h5 font-serif text-gold mb-4" }, "Agradecimientos Especiales"),
                                          createVNode("p", {
                                            class: "text-body-1 opacity-80",
                                            style: { "line-height": "1.8" }
                                          }, " Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos. ")
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
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "glass-card pa-8 text-center text-white info-card" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "48",
                                          color: "gold",
                                          class: "mb-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-school")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h4", { class: "text-h5 font-serif text-gold mb-4" }, "Agradecimientos Especiales"),
                                        createVNode("p", {
                                          class: "text-body-1 opacity-80",
                                          style: { "line-height": "1.8" }
                                        }, " Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos. ")
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
                        return [
                          createVNode(VRow, { class: "mb-12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h1", { class: "text-h2 font-serif text-white mb-4 slide-fade-in text-glow" }, "Equipo Desarrollador"),
                                  createVNode("p", { class: "text-h6 font-serif-italic text-amber-lighten-4 slide-fade-in-delayed" }, " Conoce a las mentes creativas detrás de este Objeto Virtual de Aprendizaje "),
                                  createVNode("div", { class: "divider-gold mx-auto mt-6" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, {
                            justify: "center",
                            class: "staggered-cards"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(team, (member, index) => {
                                return createVNode(VCol, {
                                  key: index,
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  lg: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "glass-card h-100 text-center pa-6 profile-card",
                                      style: { animationDelay: `${index * 0.2}s` }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAvatar, {
                                          size: "150",
                                          class: "mb-6 avatar-glow elevation-10"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: member.avatar,
                                              cover: ""
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("h3", { class: "text-h5 font-serif text-gold mb-1" }, toDisplayString(member.name), 1),
                                        createVNode("div", { class: "text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4" }, toDisplayString(member.role), 1),
                                        createVNode("p", {
                                          class: "text-body-2 text-grey-lighten-2 mb-6",
                                          style: { "line-height": "1.6" }
                                        }, toDisplayString(member.description), 1),
                                        createVNode("div", { class: "d-flex justify-center gap-4 mt-auto" }, [
                                          createVNode(VBtn, {
                                            icon: "mdi-github",
                                            variant: "tonal",
                                            color: "white",
                                            size: "small",
                                            class: "social-btn"
                                          }),
                                          createVNode(VBtn, {
                                            icon: "mdi-linkedin",
                                            variant: "tonal",
                                            color: "blue-lighten-2",
                                            size: "small",
                                            class: "social-btn"
                                          }),
                                          createVNode(VBtn, {
                                            icon: "mdi-email",
                                            variant: "tonal",
                                            color: "red-lighten-2",
                                            size: "small",
                                            class: "social-btn"
                                          })
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["style"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, { class: "mt-16" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "glass-card pa-8 text-center text-white info-card" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "48",
                                        color: "gold",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-school")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h4", { class: "text-h5 font-serif text-gold mb-4" }, "Agradecimientos Especiales"),
                                      createVNode("p", {
                                        class: "text-body-1 opacity-80",
                                        style: { "line-height": "1.8" }
                                      }, " Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos. ")
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
                    createVNode(VContainer, { class: "py-16 position-relative z-1" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { class: "mb-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("h1", { class: "text-h2 font-serif text-white mb-4 slide-fade-in text-glow" }, "Equipo Desarrollador"),
                                createVNode("p", { class: "text-h6 font-serif-italic text-amber-lighten-4 slide-fade-in-delayed" }, " Conoce a las mentes creativas detrás de este Objeto Virtual de Aprendizaje "),
                                createVNode("div", { class: "divider-gold mx-auto mt-6" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, {
                          justify: "center",
                          class: "staggered-cards"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(team, (member, index) => {
                              return createVNode(VCol, {
                                key: index,
                                cols: "12",
                                sm: "6",
                                md: "4",
                                lg: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "glass-card h-100 text-center pa-6 profile-card",
                                    style: { animationDelay: `${index * 0.2}s` }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAvatar, {
                                        size: "150",
                                        class: "mb-6 avatar-glow elevation-10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: member.avatar,
                                            cover: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("h3", { class: "text-h5 font-serif text-gold mb-1" }, toDisplayString(member.name), 1),
                                      createVNode("div", { class: "text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4" }, toDisplayString(member.role), 1),
                                      createVNode("p", {
                                        class: "text-body-2 text-grey-lighten-2 mb-6",
                                        style: { "line-height": "1.6" }
                                      }, toDisplayString(member.description), 1),
                                      createVNode("div", { class: "d-flex justify-center gap-4 mt-auto" }, [
                                        createVNode(VBtn, {
                                          icon: "mdi-github",
                                          variant: "tonal",
                                          color: "white",
                                          size: "small",
                                          class: "social-btn"
                                        }),
                                        createVNode(VBtn, {
                                          icon: "mdi-linkedin",
                                          variant: "tonal",
                                          color: "blue-lighten-2",
                                          size: "small",
                                          class: "social-btn"
                                        }),
                                        createVNode(VBtn, {
                                          icon: "mdi-email",
                                          variant: "tonal",
                                          color: "red-lighten-2",
                                          size: "small",
                                          class: "social-btn"
                                        })
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["style"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { class: "mt-16" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "8",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, { class: "glass-card pa-8 text-center text-white info-card" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "48",
                                      color: "gold",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-school")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h4", { class: "text-h5 font-serif text-gold mb-4" }, "Agradecimientos Especiales"),
                                    createVNode("p", {
                                      class: "text-body-1 opacity-80",
                                      style: { "line-height": "1.8" }
                                    }, " Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos. ")
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBar, {
                app: "",
                color: "rgba(33, 33, 33, 0.8)",
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
                    color: "white",
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
                    color: "gold",
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
                  createVNode(VContainer, { class: "py-16 position-relative z-1" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { class: "mb-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "text-h2 font-serif text-white mb-4 slide-fade-in text-glow" }, "Equipo Desarrollador"),
                              createVNode("p", { class: "text-h6 font-serif-italic text-amber-lighten-4 slide-fade-in-delayed" }, " Conoce a las mentes creativas detrás de este Objeto Virtual de Aprendizaje "),
                              createVNode("div", { class: "divider-gold mx-auto mt-6" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, {
                        justify: "center",
                        class: "staggered-cards"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(team, (member, index) => {
                            return createVNode(VCol, {
                              key: index,
                              cols: "12",
                              sm: "6",
                              md: "4",
                              lg: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "glass-card h-100 text-center pa-6 profile-card",
                                  style: { animationDelay: `${index * 0.2}s` }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VAvatar, {
                                      size: "150",
                                      class: "mb-6 avatar-glow elevation-10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: member.avatar,
                                          cover: ""
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h3", { class: "text-h5 font-serif text-gold mb-1" }, toDisplayString(member.name), 1),
                                    createVNode("div", { class: "text-subtitle-2 text-uppercase tracking-widest text-white opacity-70 mb-4" }, toDisplayString(member.role), 1),
                                    createVNode("p", {
                                      class: "text-body-2 text-grey-lighten-2 mb-6",
                                      style: { "line-height": "1.6" }
                                    }, toDisplayString(member.description), 1),
                                    createVNode("div", { class: "d-flex justify-center gap-4 mt-auto" }, [
                                      createVNode(VBtn, {
                                        icon: "mdi-github",
                                        variant: "tonal",
                                        color: "white",
                                        size: "small",
                                        class: "social-btn"
                                      }),
                                      createVNode(VBtn, {
                                        icon: "mdi-linkedin",
                                        variant: "tonal",
                                        color: "blue-lighten-2",
                                        size: "small",
                                        class: "social-btn"
                                      }),
                                      createVNode(VBtn, {
                                        icon: "mdi-email",
                                        variant: "tonal",
                                        color: "red-lighten-2",
                                        size: "small",
                                        class: "social-btn"
                                      })
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["style"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "mt-16" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "glass-card pa-8 text-center text-white info-card" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "48",
                                    color: "gold",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-school")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h4", { class: "text-h5 font-serif text-gold mb-4" }, "Agradecimientos Especiales"),
                                  createVNode("p", {
                                    class: "text-body-1 opacity-80",
                                    style: { "line-height": "1.8" }
                                  }, " Este proyecto fue desarrollado como iniciativa educativa para facilitar el aprendizaje de los Derechos Fundamentales consagrados en la Constitución Política de Colombia de 1991. Agradecemos a todas las instituciones y docentes que promueven la educación cívica y los derechos humanos. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Creditos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Creditos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-735970d6"]]);

export { Creditos as default };
//# sourceMappingURL=Creditos-ILPO5mXr.mjs.map
