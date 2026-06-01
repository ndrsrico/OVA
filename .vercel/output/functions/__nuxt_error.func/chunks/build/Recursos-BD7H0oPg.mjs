import { withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, V as VApp, d as VBtn, f as VContainer, g as VRow, h as VCol, j as VDivider, k as VIcon, l as VChip } from './server.mjs';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VMain } from './VMain-Cd1cV_fK.mjs';
import { V as VCard, a as VCardText } from './VCard-C8GwDJXo.mjs';
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
  __name: "Recursos",
  __ssrInlineRender: true,
  setup(__props) {
    const documentosLegales = [
      {
        titulo: "Constitución Política de Colombia 1991",
        descripcion: "Documento oficial de la Constitución Política de Colombia con todos los artículos que protegen los Derechos Fundamentales.",
        icono: "mdi-file-document",
        enlace: "https://www.constitucioncolombia.com/"
      },
      {
        titulo: "Declaración Universal de DDHH",
        descripcion: "Documento internacional que define los derechos humanos fundamentales aceptados por todas las naciones.",
        icono: "mdi-file-document",
        enlace: "https://www.un.org/es/about-us/universal-declaration-of-human-rights"
      },
      {
        titulo: "Pacto Internacional de DDHH Civiles y Políticos",
        descripcion: "Tratado internacional que obliga a los estados a proteger derechos civiles y políticos fundamentales.",
        icono: "mdi-file-document",
        enlace: "https://www.ohchr.org/es/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights"
      }
    ];
    const articulosConstitucionales = [
      {
        numero: "Artículo 1",
        titulo: "Dignidad Humana",
        descripcion: "Colombia es un Estado Social de Derecho fundado en el respeto a la dignidad humana.",
        categoria: "Principios Fundamentales"
      },
      {
        numero: "Artículo 13",
        titulo: "Igualdad",
        descripcion: "Todas las personas nacen libres e iguales ante la ley, sin discriminación alguna.",
        categoria: "Derechos Civiles"
      },
      {
        numero: "Artículo 20",
        titulo: "Libertad de Expresión",
        descripcion: "Se garantiza a toda persona la libertad de expresar y divulgar su pensamiento.",
        categoria: "Derechos Civiles"
      },
      {
        numero: "Artículo 42",
        titulo: "Familia",
        descripcion: "La familia es la base de la sociedad. Se constituye por vínculos naturales o jurídicos.",
        categoria: "Derechos Sociales"
      },
      {
        numero: "Artículo 48",
        titulo: "Seguridad Social",
        descripcion: "Se establece en forma obligatoria la prestación de los servicios de salud.",
        categoria: "Derechos Sociales"
      },
      {
        numero: "Artículo 79",
        titulo: "Ambiente Sano",
        descripcion: "Toda persona tiene derecho a gozar de un ambiente sano. Es deber del Estado protegerlo.",
        categoria: "Derechos Ambientales"
      }
    ];
    const casosEmbematicos = [
      {
        titulo: "Caso Fujimori vs. Perú - Esterilizaciones Forzadas",
        descripcion: "La Corte Interamericana condenó al Estado peruano por violaciones a derechos reproductivos durante el régimen de Fujimori (1990-2000).",
        año: "2003",
        derechos: ["Dignidad", "Salud", "Reproducción"],
        enlace: "https://www.corteidh.or.cr/casos.cfm"
      },
      {
        titulo: "Caso Walter López Álvarez vs. Honduras - Libertad de Pensamiento",
        descripcion: "Decisión histórica sobre el derecho a la libertad de pensamiento en contextos de represión política.",
        año: "2004",
        derechos: ["Expresión", "Pensamiento", "Libertad"],
        enlace: "https://www.corteidh.or.cr/casos.cfm"
      },
      {
        titulo: "Acción de Tutela T-406/92 - Derecho a la Educación",
        descripcion: "Hito importante de la Corte Constitucional colombiana sobre el derecho a la educación de menores en situación vulnerable.",
        año: "1992",
        derechos: ["Educación", "Menores", "Igualdad"],
        enlace: "https://www.corteconstitucional.gov.co/"
      },
      {
        titulo: "Sentencia T-025/04 - Desplazamiento Forzado",
        descripcion: "Sentencia que reconoce el estado de cosas inconstitucional en la situación de desplazados en Colombia.",
        año: "2004",
        derechos: ["Dignidad", "Vivienda", "Vida"],
        enlace: "https://www.corteconstitucional.gov.co/"
      }
    ];
    const organismos = [
      {
        nombre: "Naciones Unidas - DDHH",
        descripcion: "Órgano de la ONU dedicado a promover y proteger los derechos humanos en el mundo.",
        icono: "mdi-globe",
        enlace: "https://www.un.org/es/about-us"
      },
      {
        nombre: "Comisión Interamericana DDHH",
        descripcion: "Organismo internacional que vela por el respeto a los derechos humanos en América Latina.",
        icono: "mdi-earth",
        enlace: "https://www.oas.org/es/cidh/"
      },
      {
        nombre: "Corte Constitucional Colombia",
        descripcion: "Máximo organismo de protección de derechos fundamentales en Colombia.",
        icono: "mdi-gavel",
        enlace: "https://www.corteconstitucional.gov.co/"
      },
      {
        nombre: "Defensoría del Pueblo Colombia",
        descripcion: "Institución que defiende y promociona los derechos humanos en Colombia.",
        icono: "mdi-shield-account",
        enlace: "https://www.defensoria.gov.co/"
      },
      {
        nombre: "Amnistía Internacional",
        descripcion: "Organización global que lucha contra las violaciones de derechos humanos.",
        icono: "mdi-heart-multiple",
        enlace: "https://www.amnesty.org/es/"
      },
      {
        nombre: "Human Rights Watch",
        descripcion: "Organización investigadora de derechos humanos independiente.",
        icono: "mdi-magnify",
        enlace: "https://www.hrw.org/es"
      }
    ];
    const recursosEducativos = [
      {
        titulo: "Derechos Fundamentales: Nociones Básicas",
        autor: "Eduardo Cifuentes Muñoz",
        descripcion: "Guía educativa sobre los conceptos fundamentales y clasificación de derechos.",
        tipo: "Artículo Académico",
        icono: "mdi-book-open",
        enlace: "https://scholar.google.com/"
      },
      {
        titulo: "La Tutela: Mecanismo de Protección de Derechos",
        autor: "Corte Constitucional de Colombia",
        descripcion: "Documento explicativo sobre cómo funciona la acción de tutela en Colombia.",
        tipo: "Guía Oficial",
        icono: "mdi-file-document-multiple",
        enlace: "https://www.corteconstitucional.gov.co/"
      },
      {
        titulo: "Derechos Humanos: Historia y Desarrollo",
        autor: "Naciones Unidas",
        descripcion: "Recurso educativo que presenta la evolución histórica de los derechos humanos.",
        tipo: "Video Educativo",
        icono: "mdi-play-circle",
        enlace: "https://www.un.org/es/videos"
      },
      {
        titulo: "Constitución Anotada de Colombia",
        autor: "Varios Autores",
        descripcion: "Edición comentada de la Constitución con explicaciones de juristas.",
        tipo: "Libro",
        icono: "mdi-book-multiple",
        enlace: "https://www.constitucioncolombia.com/"
      },
      {
        titulo: "Módulo de Derechos Fundamentales",
        autor: "Universidad Nacional",
        descripcion: "Curso en línea sobre teoría general de derechos fundamentales.",
        tipo: "Curso Online",
        icono: "mdi-school",
        enlace: "https://www.unal.edu.co/"
      },
      {
        titulo: "Jurisprudencia de Derechos Fundamentales",
        autor: "Corte Constitucional",
        descripcion: "Base de datos de sentencias sobre protección de derechos fundamentales.",
        tipo: "Base de Datos",
        icono: "mdi-database",
        enlace: "https://www.corteconstitucional.gov.co/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              app: "",
              color: "rgba(20, 20, 20, 0.85)",
              class: "glass-header",
              theme: "dark",
              elevation: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbarTitle, { class: "font-serif text-gold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Recursos - Derechos Fundamentales`);
                      } else {
                        return [
                          createTextVNode("Recursos - Derechos Fundamentales")
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
                    createVNode(VToolbarTitle, { class: "font-serif text-gold" }, {
                      default: withCtx(() => [
                        createTextVNode("Recursos - Derechos Fundamentales")
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
                  _push3(`<div class="floating-shapes" data-v-6c82657f${_scopeId2}><div class="shape shape-1" data-v-6c82657f${_scopeId2}></div><div class="shape shape-2" data-v-6c82657f${_scopeId2}></div><div class="shape shape-3" data-v-6c82657f${_scopeId2}></div><div class="shape shape-4" data-v-6c82657f${_scopeId2}></div><div class="shape shape-5" data-v-6c82657f${_scopeId2}></div></div>`);
                  _push3(ssrRenderComponent(VContainer, {
                    fluid: "",
                    class: "pa-8 position-relative z-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { class: "mb-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "8",
                                class: "mx-auto text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow" data-v-6c82657f${_scopeId5}>RECURSOS DE ESTUDIO</h1><p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" data-v-6c82657f${_scopeId5}> Amplía tu conocimiento sobre Derechos Fundamentales con estos recursos externos confiables </p>`);
                                    _push6(ssrRenderComponent(VDivider, {
                                      class: "mt-6 border-opacity-50",
                                      color: "gold"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "RECURSOS DE ESTUDIO"),
                                      createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Amplía tu conocimiento sobre Derechos Fundamentales con estos recursos externos confiables "),
                                      createVNode(VDivider, {
                                        class: "mt-6 border-opacity-50",
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
                                  md: "8",
                                  class: "mx-auto text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "RECURSOS DE ESTUDIO"),
                                    createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Amplía tu conocimiento sobre Derechos Fundamentales con estos recursos externos confiables "),
                                    createVNode(VDivider, {
                                      class: "mt-6 border-opacity-50",
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
                        _push4(ssrRenderComponent(VRow, { class: "mb-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="section-header mb-6" data-v-6c82657f${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-file-document-multiple`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-file-document-multiple")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-h4 font-serif text-white d-inline" data-v-6c82657f${_scopeId5}>Documentos Legales Oficiales</h2></div>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(documentosLegales, (doc, index) => {
                                            _push7(ssrRenderComponent(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VIcon, {
                                                                size: "40",
                                                                color: "gold",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate(doc.icono)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(doc.icono), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(`<h3 class="text-h6 font-serif text-gold mb-2" data-v-6c82657f${_scopeId9}>${ssrInterpolate(doc.titulo)}</h3><p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" data-v-6c82657f${_scopeId9}>${ssrInterpolate(doc.descripcion)}</p>`);
                                                              _push10(ssrRenderComponent(VBtn, {
                                                                href: doc.enlace,
                                                                target: "_blank",
                                                                size: "small",
                                                                "append-icon": "mdi-open-in-new",
                                                                class: "mt-auto gold-btn-outline"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(` Acceder `);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(" Acceder ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VIcon, {
                                                                  size: "40",
                                                                  color: "gold",
                                                                  class: "mb-4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(doc.icono), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                                createVNode(VBtn, {
                                                                  href: doc.enlace,
                                                                  target: "_blank",
                                                                  size: "small",
                                                                  "append-icon": "mdi-open-in-new",
                                                                  class: "mt-auto gold-btn-outline"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Acceder ")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["href"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                size: "40",
                                                                color: "gold",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(doc.icono), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                              createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                              createVNode(VBtn, {
                                                                href: doc.enlace,
                                                                target: "_blank",
                                                                size: "small",
                                                                "append-icon": "mdi-open-in-new",
                                                                class: "mt-auto gold-btn-outline"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Acceder ")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["href"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCard, {
                                                      elevation: "0",
                                                      class: "rounded-xl h-100 glass-card resource-card",
                                                      style: { animationDelay: `${index * 0.1}s` }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              size: "40",
                                                              color: "gold",
                                                              class: "mb-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(doc.icono), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                            createVNode(VBtn, {
                                                              href: doc.enlace,
                                                              target: "_blank",
                                                              size: "small",
                                                              "append-icon": "mdi-open-in-new",
                                                              class: "mt-auto gold-btn-outline"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Acceder ")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["style"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(documentosLegales, (doc, index) => {
                                              return createVNode(VCol, {
                                                key: index,
                                                cols: "12",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            size: "40",
                                                            color: "gold",
                                                            class: "mb-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(doc.icono), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                          createVNode(VBtn, {
                                                            href: doc.enlace,
                                                            target: "_blank",
                                                            size: "small",
                                                            "append-icon": "mdi-open-in-new",
                                                            class: "mt-auto gold-btn-outline"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Acceder ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "section-header mb-6" }, [
                                        createVNode(VIcon, {
                                          size: "32",
                                          color: "gold",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-file-document-multiple")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Documentos Legales Oficiales")
                                      ]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(documentosLegales, (doc, index) => {
                                            return createVNode(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  elevation: "0",
                                                  class: "rounded-xl h-100 glass-card resource-card",
                                                  style: { animationDelay: `${index * 0.1}s` }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          size: "40",
                                                          color: "gold",
                                                          class: "mb-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(doc.icono), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                        createVNode(VBtn, {
                                                          href: doc.enlace,
                                                          target: "_blank",
                                                          size: "small",
                                                          "append-icon": "mdi-open-in-new",
                                                          class: "mt-auto gold-btn-outline"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Acceder ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["style"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "section-header mb-6" }, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        color: "gold",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-file-document-multiple")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Documentos Legales Oficiales")
                                    ]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(documentosLegales, (doc, index) => {
                                          return createVNode(VCol, {
                                            key: index,
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                elevation: "0",
                                                class: "rounded-xl h-100 glass-card resource-card",
                                                style: { animationDelay: `${index * 0.1}s` }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        size: "40",
                                                        color: "gold",
                                                        class: "mb-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(doc.icono), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                      createVNode(VBtn, {
                                                        href: doc.enlace,
                                                        target: "_blank",
                                                        size: "small",
                                                        "append-icon": "mdi-open-in-new",
                                                        class: "mt-auto gold-btn-outline"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Acceder ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["style"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mb-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="section-header mb-6" data-v-6c82657f${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-bookmark-multiple`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-bookmark-multiple")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-h4 font-serif text-white d-inline" data-v-6c82657f${_scopeId5}>Artículos de la Constitución</h2></div>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(articulosConstitucionales, (articulo, index) => {
                                            _push7(ssrRenderComponent(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<div class="articulo-numero text-gold font-weight-bold mb-2" data-v-6c82657f${_scopeId9}>${ssrInterpolate(articulo.numero)}</div><h3 class="text-h6 font-serif text-gold mb-2" data-v-6c82657f${_scopeId9}>${ssrInterpolate(articulo.titulo)}</h3><p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" data-v-6c82657f${_scopeId9}>${ssrInterpolate(articulo.descripcion)}</p>`);
                                                              _push10(ssrRenderComponent(VChip, {
                                                                color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                                "text-color": "white",
                                                                size: "small",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate(articulo.categoria)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(articulo.categoria), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                                createVNode(VChip, {
                                                                  color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                                  "text-color": "white",
                                                                  size: "small",
                                                                  class: "mb-4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(articulo.categoria), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                              createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                              createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                              createVNode(VChip, {
                                                                color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                                "text-color": "white",
                                                                size: "small",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(articulo.categoria), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCard, {
                                                      elevation: "0",
                                                      class: "rounded-xl h-100 glass-card resource-card",
                                                      style: { animationDelay: `${index * 0.1}s` }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                            createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                            createVNode(VChip, {
                                                              color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                              "text-color": "white",
                                                              size: "small",
                                                              class: "mb-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(articulo.categoria), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["style"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(articulosConstitucionales, (articulo, index) => {
                                              return createVNode(VCol, {
                                                key: index,
                                                cols: "12",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                          createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                          createVNode(VChip, {
                                                            color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                            "text-color": "white",
                                                            size: "small",
                                                            class: "mb-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(articulo.categoria), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "section-header mb-6" }, [
                                        createVNode(VIcon, {
                                          size: "32",
                                          color: "gold",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-bookmark-multiple")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Artículos de la Constitución")
                                      ]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(articulosConstitucionales, (articulo, index) => {
                                            return createVNode(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  elevation: "0",
                                                  class: "rounded-xl h-100 glass-card resource-card",
                                                  style: { animationDelay: `${index * 0.1}s` }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                        createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                        createVNode(VChip, {
                                                          color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                          "text-color": "white",
                                                          size: "small",
                                                          class: "mb-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(articulo.categoria), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["style"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "section-header mb-6" }, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        color: "gold",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-bookmark-multiple")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Artículos de la Constitución")
                                    ]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(articulosConstitucionales, (articulo, index) => {
                                          return createVNode(VCol, {
                                            key: index,
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                elevation: "0",
                                                class: "rounded-xl h-100 glass-card resource-card",
                                                style: { animationDelay: `${index * 0.1}s` }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                      createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                      createVNode(VChip, {
                                                        color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                        "text-color": "white",
                                                        size: "small",
                                                        class: "mb-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(articulo.categoria), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["style"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mb-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="section-header mb-6" data-v-6c82657f${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-gavel`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-gavel")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-h4 font-serif text-white d-inline" data-v-6c82657f${_scopeId5}>Casos Emblemáticos</h2></div>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(casosEmbematicos, (caso, index) => {
                                            _push7(ssrRenderComponent(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="case-header pa-6" data-v-6c82657f${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VIcon, {
                                                          size: "32",
                                                          color: "gold",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`mdi-gavel`);
                                                            } else {
                                                              return [
                                                                createTextVNode("mdi-gavel")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(`<span class="text-body-2 text-gold font-weight-bold" data-v-6c82657f${_scopeId8}>${ssrInterpolate(caso.año)}</span></div>`);
                                                        _push9(ssrRenderComponent(VDivider, { class: "border-opacity-25" }, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<h3 class="text-h6 font-serif text-gold mb-2" data-v-6c82657f${_scopeId9}>${ssrInterpolate(caso.titulo)}</h3><p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" data-v-6c82657f${_scopeId9}>${ssrInterpolate(caso.descripcion)}</p><p class="text-caption text-gold font-weight-bold mb-2" data-v-6c82657f${_scopeId9}>Derechos involucrados:</p><div class="mb-4" data-v-6c82657f${_scopeId9}><!--[-->`);
                                                              ssrRenderList(caso.derechos, (derecho, i) => {
                                                                _push10(ssrRenderComponent(VChip, {
                                                                  key: i,
                                                                  size: "small",
                                                                  color: "rgba(212, 175, 55, 0.2)",
                                                                  "text-color": "gold",
                                                                  class: "mr-1 mb-1"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(derecho)}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(derecho), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              });
                                                              _push10(`<!--]--></div>`);
                                                              _push10(ssrRenderComponent(VBtn, {
                                                                href: caso.enlace,
                                                                target: "_blank",
                                                                size: "small",
                                                                "append-icon": "mdi-open-in-new",
                                                                class: "mt-auto gold-btn-outline"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(` Leer Más `);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(" Leer Más ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                                createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                                createVNode("div", { class: "mb-4" }, [
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                                    return openBlock(), createBlock(VChip, {
                                                                      key: i,
                                                                      size: "small",
                                                                      color: "rgba(212, 175, 55, 0.2)",
                                                                      "text-color": "gold",
                                                                      class: "mr-1 mb-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(derecho), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024);
                                                                  }), 128))
                                                                ]),
                                                                createVNode(VBtn, {
                                                                  href: caso.enlace,
                                                                  target: "_blank",
                                                                  size: "small",
                                                                  "append-icon": "mdi-open-in-new",
                                                                  class: "mt-auto gold-btn-outline"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Leer Más ")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["href"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "case-header pa-6" }, [
                                                            createVNode(VIcon, {
                                                              size: "32",
                                                              color: "gold",
                                                              class: "mr-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-gavel")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                                          ]),
                                                          createVNode(VDivider, { class: "border-opacity-25" }),
                                                          createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                            default: withCtx(() => [
                                                              createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                              createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                              createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                              createVNode("div", { class: "mb-4" }, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                                  return openBlock(), createBlock(VChip, {
                                                                    key: i,
                                                                    size: "small",
                                                                    color: "rgba(212, 175, 55, 0.2)",
                                                                    "text-color": "gold",
                                                                    class: "mr-1 mb-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(derecho), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode(VBtn, {
                                                                href: caso.enlace,
                                                                target: "_blank",
                                                                size: "small",
                                                                "append-icon": "mdi-open-in-new",
                                                                class: "mt-auto gold-btn-outline"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Leer Más ")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["href"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCard, {
                                                      elevation: "0",
                                                      class: "rounded-xl h-100 glass-card resource-card",
                                                      style: { animationDelay: `${index * 0.1}s` }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "case-header pa-6" }, [
                                                          createVNode(VIcon, {
                                                            size: "32",
                                                            color: "gold",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-gavel")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                                        ]),
                                                        createVNode(VDivider, { class: "border-opacity-25" }),
                                                        createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx(() => [
                                                            createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                            createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                            createVNode("div", { class: "mb-4" }, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                                return openBlock(), createBlock(VChip, {
                                                                  key: i,
                                                                  size: "small",
                                                                  color: "rgba(212, 175, 55, 0.2)",
                                                                  "text-color": "gold",
                                                                  class: "mr-1 mb-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(derecho), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode(VBtn, {
                                                              href: caso.enlace,
                                                              target: "_blank",
                                                              size: "small",
                                                              "append-icon": "mdi-open-in-new",
                                                              class: "mt-auto gold-btn-outline"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Leer Más ")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["style"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(casosEmbematicos, (caso, index) => {
                                              return createVNode(VCol, {
                                                key: index,
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "case-header pa-6" }, [
                                                        createVNode(VIcon, {
                                                          size: "32",
                                                          color: "gold",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-gavel")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                                      ]),
                                                      createVNode(VDivider, { class: "border-opacity-25" }),
                                                      createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                        default: withCtx(() => [
                                                          createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                          createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                          createVNode("div", { class: "mb-4" }, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                              return openBlock(), createBlock(VChip, {
                                                                key: i,
                                                                size: "small",
                                                                color: "rgba(212, 175, 55, 0.2)",
                                                                "text-color": "gold",
                                                                class: "mr-1 mb-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(derecho), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode(VBtn, {
                                                            href: caso.enlace,
                                                            target: "_blank",
                                                            size: "small",
                                                            "append-icon": "mdi-open-in-new",
                                                            class: "mt-auto gold-btn-outline"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Leer Más ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "section-header mb-6" }, [
                                        createVNode(VIcon, {
                                          size: "32",
                                          color: "gold",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-gavel")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Casos Emblemáticos")
                                      ]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(casosEmbematicos, (caso, index) => {
                                            return createVNode(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  elevation: "0",
                                                  class: "rounded-xl h-100 glass-card resource-card",
                                                  style: { animationDelay: `${index * 0.1}s` }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "case-header pa-6" }, [
                                                      createVNode(VIcon, {
                                                        size: "32",
                                                        color: "gold",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-gavel")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                                    ]),
                                                    createVNode(VDivider, { class: "border-opacity-25" }),
                                                    createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                        createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                        createVNode("div", { class: "mb-4" }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                            return openBlock(), createBlock(VChip, {
                                                              key: i,
                                                              size: "small",
                                                              color: "rgba(212, 175, 55, 0.2)",
                                                              "text-color": "gold",
                                                              class: "mr-1 mb-1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(derecho), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode(VBtn, {
                                                          href: caso.enlace,
                                                          target: "_blank",
                                                          size: "small",
                                                          "append-icon": "mdi-open-in-new",
                                                          class: "mt-auto gold-btn-outline"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Leer Más ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["style"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "section-header mb-6" }, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        color: "gold",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-gavel")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Casos Emblemáticos")
                                    ]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(casosEmbematicos, (caso, index) => {
                                          return createVNode(VCol, {
                                            key: index,
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                elevation: "0",
                                                class: "rounded-xl h-100 glass-card resource-card",
                                                style: { animationDelay: `${index * 0.1}s` }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "case-header pa-6" }, [
                                                    createVNode(VIcon, {
                                                      size: "32",
                                                      color: "gold",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-gavel")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                                  ]),
                                                  createVNode(VDivider, { class: "border-opacity-25" }),
                                                  createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                      createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                      createVNode("div", { class: "mb-4" }, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                          return openBlock(), createBlock(VChip, {
                                                            key: i,
                                                            size: "small",
                                                            color: "rgba(212, 175, 55, 0.2)",
                                                            "text-color": "gold",
                                                            class: "mr-1 mb-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(derecho), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode(VBtn, {
                                                        href: caso.enlace,
                                                        target: "_blank",
                                                        size: "small",
                                                        "append-icon": "mdi-open-in-new",
                                                        class: "mt-auto gold-btn-outline"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Leer Más ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["style"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mb-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="section-header mb-6" data-v-6c82657f${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-globe`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-globe")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-h4 font-serif text-white d-inline" data-v-6c82657f${_scopeId5}>Organismos Internacionales</h2></div>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(organismos, (organismo, index) => {
                                            _push7(ssrRenderComponent(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VIcon, {
                                                                size: "40",
                                                                color: "gold",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate(organismo.icono)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(organismo.icono), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(`<h3 class="text-h6 font-serif text-gold mb-2" data-v-6c82657f${_scopeId9}>${ssrInterpolate(organismo.nombre)}</h3><p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" data-v-6c82657f${_scopeId9}>${ssrInterpolate(organismo.descripcion)}</p>`);
                                                              _push10(ssrRenderComponent(VBtn, {
                                                                href: organismo.enlace,
                                                                target: "_blank",
                                                                color: "gold",
                                                                variant: "outlined",
                                                                size: "small",
                                                                "append-icon": "mdi-open-in-new",
                                                                class: "mt-auto"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(` Visitar `);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(" Visitar ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VIcon, {
                                                                  size: "40",
                                                                  color: "gold",
                                                                  class: "mb-4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(organismo.icono), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                                createVNode(VBtn, {
                                                                  href: organismo.enlace,
                                                                  target: "_blank",
                                                                  color: "gold",
                                                                  variant: "outlined",
                                                                  size: "small",
                                                                  "append-icon": "mdi-open-in-new",
                                                                  class: "mt-auto"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Visitar ")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["href"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                size: "40",
                                                                color: "gold",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(organismo.icono), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                              createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                              createVNode(VBtn, {
                                                                href: organismo.enlace,
                                                                target: "_blank",
                                                                color: "gold",
                                                                variant: "outlined",
                                                                size: "small",
                                                                "append-icon": "mdi-open-in-new",
                                                                class: "mt-auto"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Visitar ")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["href"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCard, {
                                                      elevation: "0",
                                                      class: "rounded-xl h-100 glass-card resource-card",
                                                      style: { animationDelay: `${index * 0.1}s` }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              size: "40",
                                                              color: "gold",
                                                              class: "mb-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(organismo.icono), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                            createVNode(VBtn, {
                                                              href: organismo.enlace,
                                                              target: "_blank",
                                                              color: "gold",
                                                              variant: "outlined",
                                                              size: "small",
                                                              "append-icon": "mdi-open-in-new",
                                                              class: "mt-auto"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Visitar ")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["style"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(organismos, (organismo, index) => {
                                              return createVNode(VCol, {
                                                key: index,
                                                cols: "12",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            size: "40",
                                                            color: "gold",
                                                            class: "mb-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(organismo.icono), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                          createVNode(VBtn, {
                                                            href: organismo.enlace,
                                                            target: "_blank",
                                                            color: "gold",
                                                            variant: "outlined",
                                                            size: "small",
                                                            "append-icon": "mdi-open-in-new",
                                                            class: "mt-auto"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Visitar ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "section-header mb-6" }, [
                                        createVNode(VIcon, {
                                          size: "32",
                                          color: "gold",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-globe")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Organismos Internacionales")
                                      ]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(organismos, (organismo, index) => {
                                            return createVNode(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  elevation: "0",
                                                  class: "rounded-xl h-100 glass-card resource-card",
                                                  style: { animationDelay: `${index * 0.1}s` }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          size: "40",
                                                          color: "gold",
                                                          class: "mb-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(organismo.icono), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                        createVNode(VBtn, {
                                                          href: organismo.enlace,
                                                          target: "_blank",
                                                          color: "gold",
                                                          variant: "outlined",
                                                          size: "small",
                                                          "append-icon": "mdi-open-in-new",
                                                          class: "mt-auto"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Visitar ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["style"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "section-header mb-6" }, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        color: "gold",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-globe")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Organismos Internacionales")
                                    ]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(organismos, (organismo, index) => {
                                          return createVNode(VCol, {
                                            key: index,
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                elevation: "0",
                                                class: "rounded-xl h-100 glass-card resource-card",
                                                style: { animationDelay: `${index * 0.1}s` }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        size: "40",
                                                        color: "gold",
                                                        class: "mb-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(organismo.icono), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                      createVNode(VBtn, {
                                                        href: organismo.enlace,
                                                        target: "_blank",
                                                        color: "gold",
                                                        variant: "outlined",
                                                        size: "small",
                                                        "append-icon": "mdi-open-in-new",
                                                        class: "mt-auto"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Visitar ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["style"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mb-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="section-header mb-6" data-v-6c82657f${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-book-open-page-variant`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-book-open-page-variant")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-h4 font-serif text-white d-inline" data-v-6c82657f${_scopeId5}>Recursos Educativos Recomendados</h2></div>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(recursosEducativos, (recurso, index) => {
                                            _push7(ssrRenderComponent(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VIcon, {
                                                                size: "40",
                                                                color: "gold",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate(recurso.icono)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(recurso.icono), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(`<h3 class="text-h6 font-serif text-gold mb-2" data-v-6c82657f${_scopeId9}>${ssrInterpolate(recurso.titulo)}</h3><p class="text-body-2 text-grey-lighten-2 mb-2" data-v-6c82657f${_scopeId9}>${ssrInterpolate(recurso.autor)}</p><p class="text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" data-v-6c82657f${_scopeId9}>${ssrInterpolate(recurso.descripcion)}</p>`);
                                                              _push10(ssrRenderComponent(VChip, {
                                                                size: "small",
                                                                color: "rgba(212, 175, 55, 0.2)",
                                                                "text-color": "gold",
                                                                class: "mb-4 w-fit"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate(recurso.tipo)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(recurso.tipo), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              if (recurso.enlace) {
                                                                _push10(ssrRenderComponent(VBtn, {
                                                                  href: recurso.enlace,
                                                                  target: "_blank",
                                                                  size: "small",
                                                                  "append-icon": "mdi-open-in-new",
                                                                  class: "mt-auto gold-btn-outline"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(` Acceder `);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(" Acceder ")
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                _push10(`<!---->`);
                                                              }
                                                            } else {
                                                              return [
                                                                createVNode(VIcon, {
                                                                  size: "40",
                                                                  color: "gold",
                                                                  class: "mb-4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(recurso.icono), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                                createVNode(VChip, {
                                                                  size: "small",
                                                                  color: "rgba(212, 175, 55, 0.2)",
                                                                  "text-color": "gold",
                                                                  class: "mb-4 w-fit"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(recurso.tipo), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                                  key: 0,
                                                                  href: recurso.enlace,
                                                                  target: "_blank",
                                                                  size: "small",
                                                                  "append-icon": "mdi-open-in-new",
                                                                  class: "mt-auto gold-btn-outline"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Acceder ")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["href"])) : createCommentVNode("", true)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                size: "40",
                                                                color: "gold",
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(recurso.icono), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                              createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                              createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                              createVNode(VChip, {
                                                                size: "small",
                                                                color: "rgba(212, 175, 55, 0.2)",
                                                                "text-color": "gold",
                                                                class: "mb-4 w-fit"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(recurso.tipo), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                                key: 0,
                                                                href: recurso.enlace,
                                                                target: "_blank",
                                                                size: "small",
                                                                "append-icon": "mdi-open-in-new",
                                                                class: "mt-auto gold-btn-outline"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Acceder ")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["href"])) : createCommentVNode("", true)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCard, {
                                                      elevation: "0",
                                                      class: "rounded-xl h-100 glass-card resource-card",
                                                      style: { animationDelay: `${index * 0.1}s` }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              size: "40",
                                                              color: "gold",
                                                              class: "mb-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(recurso.icono), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                            createVNode(VChip, {
                                                              size: "small",
                                                              color: "rgba(212, 175, 55, 0.2)",
                                                              "text-color": "gold",
                                                              class: "mb-4 w-fit"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(recurso.tipo), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                              key: 0,
                                                              href: recurso.enlace,
                                                              target: "_blank",
                                                              size: "small",
                                                              "append-icon": "mdi-open-in-new",
                                                              class: "mt-auto gold-btn-outline"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Acceder ")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"])) : createCommentVNode("", true)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["style"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(recursosEducativos, (recurso, index) => {
                                              return createVNode(VCol, {
                                                key: index,
                                                cols: "12",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    elevation: "0",
                                                    class: "rounded-xl h-100 glass-card resource-card",
                                                    style: { animationDelay: `${index * 0.1}s` }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            size: "40",
                                                            color: "gold",
                                                            class: "mb-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(recurso.icono), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                          createVNode(VChip, {
                                                            size: "small",
                                                            color: "rgba(212, 175, 55, 0.2)",
                                                            "text-color": "gold",
                                                            class: "mb-4 w-fit"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(recurso.tipo), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                            key: 0,
                                                            href: recurso.enlace,
                                                            target: "_blank",
                                                            size: "small",
                                                            "append-icon": "mdi-open-in-new",
                                                            class: "mt-auto gold-btn-outline"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Acceder ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])) : createCommentVNode("", true)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "section-header mb-6" }, [
                                        createVNode(VIcon, {
                                          size: "32",
                                          color: "gold",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-book-open-page-variant")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Recursos Educativos Recomendados")
                                      ]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(recursosEducativos, (recurso, index) => {
                                            return createVNode(VCol, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  elevation: "0",
                                                  class: "rounded-xl h-100 glass-card resource-card",
                                                  style: { animationDelay: `${index * 0.1}s` }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          size: "40",
                                                          color: "gold",
                                                          class: "mb-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(recurso.icono), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                        createVNode(VChip, {
                                                          size: "small",
                                                          color: "rgba(212, 175, 55, 0.2)",
                                                          "text-color": "gold",
                                                          class: "mb-4 w-fit"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(recurso.tipo), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                          key: 0,
                                                          href: recurso.enlace,
                                                          target: "_blank",
                                                          size: "small",
                                                          "append-icon": "mdi-open-in-new",
                                                          class: "mt-auto gold-btn-outline"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Acceder ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["style"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "section-header mb-6" }, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        color: "gold",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-book-open-page-variant")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Recursos Educativos Recomendados")
                                    ]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(recursosEducativos, (recurso, index) => {
                                          return createVNode(VCol, {
                                            key: index,
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                elevation: "0",
                                                class: "rounded-xl h-100 glass-card resource-card",
                                                style: { animationDelay: `${index * 0.1}s` }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        size: "40",
                                                        color: "gold",
                                                        class: "mb-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(recurso.icono), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                      createVNode(VChip, {
                                                        size: "small",
                                                        color: "rgba(212, 175, 55, 0.2)",
                                                        "text-color": "gold",
                                                        class: "mb-4 w-fit"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(recurso.tipo), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                        key: 0,
                                                        href: recurso.enlace,
                                                        target: "_blank",
                                                        size: "small",
                                                        "append-icon": "mdi-open-in-new",
                                                        class: "mt-auto gold-btn-outline"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Acceder ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["style"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mt-12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "8",
                                class: "mx-auto text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VDivider, {
                                      class: "mb-8 border-opacity-50",
                                      color: "gold"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      to: "/",
                                      color: "gold",
                                      size: "large",
                                      "prepend-icon": "mdi-home",
                                      class: "font-weight-bold"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Volver al Inicio `);
                                        } else {
                                          return [
                                            createTextVNode(" Volver al Inicio ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VDivider, {
                                        class: "mb-8 border-opacity-50",
                                        color: "gold"
                                      }),
                                      createVNode(VBtn, {
                                        to: "/",
                                        color: "gold",
                                        size: "large",
                                        "prepend-icon": "mdi-home",
                                        class: "font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Volver al Inicio ")
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
                                    createVNode(VDivider, {
                                      class: "mb-8 border-opacity-50",
                                      color: "gold"
                                    }),
                                    createVNode(VBtn, {
                                      to: "/",
                                      color: "gold",
                                      size: "large",
                                      "prepend-icon": "mdi-home",
                                      class: "font-weight-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Volver al Inicio ")
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
                                md: "8",
                                class: "mx-auto text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "RECURSOS DE ESTUDIO"),
                                  createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Amplía tu conocimiento sobre Derechos Fundamentales con estos recursos externos confiables "),
                                  createVNode(VDivider, {
                                    class: "mt-6 border-opacity-50",
                                    color: "gold"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, { class: "mb-12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "section-header mb-6" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-file-document-multiple")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Documentos Legales Oficiales")
                                  ]),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(documentosLegales, (doc, index) => {
                                        return createVNode(VCol, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              elevation: "0",
                                              class: "rounded-xl h-100 glass-card resource-card",
                                              style: { animationDelay: `${index * 0.1}s` }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      size: "40",
                                                      color: "gold",
                                                      class: "mb-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(doc.icono), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                    createVNode(VBtn, {
                                                      href: doc.enlace,
                                                      target: "_blank",
                                                      size: "small",
                                                      "append-icon": "mdi-open-in-new",
                                                      class: "mt-auto gold-btn-outline"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Acceder ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["style"])
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
                          }),
                          createVNode(VRow, { class: "mb-12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "section-header mb-6" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-bookmark-multiple")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Artículos de la Constitución")
                                  ]),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(articulosConstitucionales, (articulo, index) => {
                                        return createVNode(VCol, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              elevation: "0",
                                              class: "rounded-xl h-100 glass-card resource-card",
                                              style: { animationDelay: `${index * 0.1}s` }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                    createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                    createVNode(VChip, {
                                                      color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                      "text-color": "white",
                                                      size: "small",
                                                      class: "mb-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(articulo.categoria), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["style"])
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
                          }),
                          createVNode(VRow, { class: "mb-12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "section-header mb-6" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-gavel")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Casos Emblemáticos")
                                  ]),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(casosEmbematicos, (caso, index) => {
                                        return createVNode(VCol, {
                                          key: index,
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              elevation: "0",
                                              class: "rounded-xl h-100 glass-card resource-card",
                                              style: { animationDelay: `${index * 0.1}s` }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "case-header pa-6" }, [
                                                  createVNode(VIcon, {
                                                    size: "32",
                                                    color: "gold",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-gavel")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                                ]),
                                                createVNode(VDivider, { class: "border-opacity-25" }),
                                                createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                    createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                    createVNode("div", { class: "mb-4" }, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                        return openBlock(), createBlock(VChip, {
                                                          key: i,
                                                          size: "small",
                                                          color: "rgba(212, 175, 55, 0.2)",
                                                          "text-color": "gold",
                                                          class: "mr-1 mb-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(derecho), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode(VBtn, {
                                                      href: caso.enlace,
                                                      target: "_blank",
                                                      size: "small",
                                                      "append-icon": "mdi-open-in-new",
                                                      class: "mt-auto gold-btn-outline"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Leer Más ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["style"])
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
                          }),
                          createVNode(VRow, { class: "mb-12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "section-header mb-6" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-globe")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Organismos Internacionales")
                                  ]),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(organismos, (organismo, index) => {
                                        return createVNode(VCol, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              elevation: "0",
                                              class: "rounded-xl h-100 glass-card resource-card",
                                              style: { animationDelay: `${index * 0.1}s` }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      size: "40",
                                                      color: "gold",
                                                      class: "mb-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(organismo.icono), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                    createVNode(VBtn, {
                                                      href: organismo.enlace,
                                                      target: "_blank",
                                                      color: "gold",
                                                      variant: "outlined",
                                                      size: "small",
                                                      "append-icon": "mdi-open-in-new",
                                                      class: "mt-auto"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Visitar ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["style"])
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
                          }),
                          createVNode(VRow, { class: "mb-12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "section-header mb-6" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "gold",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-book-open-page-variant")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Recursos Educativos Recomendados")
                                  ]),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(recursosEducativos, (recurso, index) => {
                                        return createVNode(VCol, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              elevation: "0",
                                              class: "rounded-xl h-100 glass-card resource-card",
                                              style: { animationDelay: `${index * 0.1}s` }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      size: "40",
                                                      color: "gold",
                                                      class: "mb-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(recurso.icono), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "rgba(212, 175, 55, 0.2)",
                                                      "text-color": "gold",
                                                      class: "mb-4 w-fit"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(recurso.tipo), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                      key: 0,
                                                      href: recurso.enlace,
                                                      target: "_blank",
                                                      size: "small",
                                                      "append-icon": "mdi-open-in-new",
                                                      class: "mt-auto gold-btn-outline"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Acceder ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["style"])
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
                          }),
                          createVNode(VRow, { class: "mt-12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8",
                                class: "mx-auto text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VDivider, {
                                    class: "mb-8 border-opacity-50",
                                    color: "gold"
                                  }),
                                  createVNode(VBtn, {
                                    to: "/",
                                    color: "gold",
                                    size: "large",
                                    "prepend-icon": "mdi-home",
                                    class: "font-weight-bold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Volver al Inicio ")
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
                    createVNode(VContainer, {
                      fluid: "",
                      class: "pa-8 position-relative z-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, { class: "mb-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "8",
                              class: "mx-auto text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "RECURSOS DE ESTUDIO"),
                                createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Amplía tu conocimiento sobre Derechos Fundamentales con estos recursos externos confiables "),
                                createVNode(VDivider, {
                                  class: "mt-6 border-opacity-50",
                                  color: "gold"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { class: "mb-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "section-header mb-6" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "gold",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-file-document-multiple")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Documentos Legales Oficiales")
                                ]),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(documentosLegales, (doc, index) => {
                                      return createVNode(VCol, {
                                        key: index,
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            elevation: "0",
                                            class: "rounded-xl h-100 glass-card resource-card",
                                            style: { animationDelay: `${index * 0.1}s` }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: "40",
                                                    color: "gold",
                                                    class: "mb-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(doc.icono), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                  createVNode(VBtn, {
                                                    href: doc.enlace,
                                                    target: "_blank",
                                                    size: "small",
                                                    "append-icon": "mdi-open-in-new",
                                                    class: "mt-auto gold-btn-outline"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Acceder ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["style"])
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
                        }),
                        createVNode(VRow, { class: "mb-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "section-header mb-6" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "gold",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-bookmark-multiple")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Artículos de la Constitución")
                                ]),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(articulosConstitucionales, (articulo, index) => {
                                      return createVNode(VCol, {
                                        key: index,
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            elevation: "0",
                                            class: "rounded-xl h-100 glass-card resource-card",
                                            style: { animationDelay: `${index * 0.1}s` }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                  createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                  createVNode(VChip, {
                                                    color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                    "text-color": "white",
                                                    size: "small",
                                                    class: "mb-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(articulo.categoria), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["style"])
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
                        }),
                        createVNode(VRow, { class: "mb-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "section-header mb-6" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "gold",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-gavel")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Casos Emblemáticos")
                                ]),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(casosEmbematicos, (caso, index) => {
                                      return createVNode(VCol, {
                                        key: index,
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            elevation: "0",
                                            class: "rounded-xl h-100 glass-card resource-card",
                                            style: { animationDelay: `${index * 0.1}s` }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "case-header pa-6" }, [
                                                createVNode(VIcon, {
                                                  size: "32",
                                                  color: "gold",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-gavel")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                              ]),
                                              createVNode(VDivider, { class: "border-opacity-25" }),
                                              createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                  createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                  createVNode("div", { class: "mb-4" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                      return openBlock(), createBlock(VChip, {
                                                        key: i,
                                                        size: "small",
                                                        color: "rgba(212, 175, 55, 0.2)",
                                                        "text-color": "gold",
                                                        class: "mr-1 mb-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(derecho), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode(VBtn, {
                                                    href: caso.enlace,
                                                    target: "_blank",
                                                    size: "small",
                                                    "append-icon": "mdi-open-in-new",
                                                    class: "mt-auto gold-btn-outline"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Leer Más ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["style"])
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
                        }),
                        createVNode(VRow, { class: "mb-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "section-header mb-6" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "gold",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-globe")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Organismos Internacionales")
                                ]),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(organismos, (organismo, index) => {
                                      return createVNode(VCol, {
                                        key: index,
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            elevation: "0",
                                            class: "rounded-xl h-100 glass-card resource-card",
                                            style: { animationDelay: `${index * 0.1}s` }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: "40",
                                                    color: "gold",
                                                    class: "mb-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(organismo.icono), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                  createVNode(VBtn, {
                                                    href: organismo.enlace,
                                                    target: "_blank",
                                                    color: "gold",
                                                    variant: "outlined",
                                                    size: "small",
                                                    "append-icon": "mdi-open-in-new",
                                                    class: "mt-auto"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Visitar ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["style"])
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
                        }),
                        createVNode(VRow, { class: "mb-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "section-header mb-6" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "gold",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-book-open-page-variant")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Recursos Educativos Recomendados")
                                ]),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(recursosEducativos, (recurso, index) => {
                                      return createVNode(VCol, {
                                        key: index,
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            elevation: "0",
                                            class: "rounded-xl h-100 glass-card resource-card",
                                            style: { animationDelay: `${index * 0.1}s` }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: "40",
                                                    color: "gold",
                                                    class: "mb-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(recurso.icono), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                  createVNode(VChip, {
                                                    size: "small",
                                                    color: "rgba(212, 175, 55, 0.2)",
                                                    "text-color": "gold",
                                                    class: "mb-4 w-fit"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(recurso.tipo), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                    key: 0,
                                                    href: recurso.enlace,
                                                    target: "_blank",
                                                    size: "small",
                                                    "append-icon": "mdi-open-in-new",
                                                    class: "mt-auto gold-btn-outline"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Acceder ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["style"])
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
                        }),
                        createVNode(VRow, { class: "mt-12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "8",
                              class: "mx-auto text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(VDivider, {
                                  class: "mb-8 border-opacity-50",
                                  color: "gold"
                                }),
                                createVNode(VBtn, {
                                  to: "/",
                                  color: "gold",
                                  size: "large",
                                  "prepend-icon": "mdi-home",
                                  class: "font-weight-bold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Volver al Inicio ")
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
                color: "rgba(20, 20, 20, 0.85)",
                class: "glass-header",
                theme: "dark",
                elevation: "0"
              }, {
                default: withCtx(() => [
                  createVNode(VToolbarTitle, { class: "font-serif text-gold" }, {
                    default: withCtx(() => [
                      createTextVNode("Recursos - Derechos Fundamentales")
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
                  createVNode(VContainer, {
                    fluid: "",
                    class: "pa-8 position-relative z-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, { class: "mb-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: "mx-auto text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "RECURSOS DE ESTUDIO"),
                              createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Amplía tu conocimiento sobre Derechos Fundamentales con estos recursos externos confiables "),
                              createVNode(VDivider, {
                                class: "mt-6 border-opacity-50",
                                color: "gold"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "mb-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "section-header mb-6" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "gold",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-file-document-multiple")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Documentos Legales Oficiales")
                              ]),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(documentosLegales, (doc, index) => {
                                    return createVNode(VCol, {
                                      key: index,
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl h-100 glass-card resource-card",
                                          style: { animationDelay: `${index * 0.1}s` }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  size: "40",
                                                  color: "gold",
                                                  class: "mb-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(doc.icono), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(doc.titulo), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(doc.descripcion), 1),
                                                createVNode(VBtn, {
                                                  href: doc.enlace,
                                                  target: "_blank",
                                                  size: "small",
                                                  "append-icon": "mdi-open-in-new",
                                                  class: "mt-auto gold-btn-outline"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Acceder ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])
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
                      }),
                      createVNode(VRow, { class: "mb-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "section-header mb-6" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "gold",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-bookmark-multiple")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Artículos de la Constitución")
                              ]),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(articulosConstitucionales, (articulo, index) => {
                                    return createVNode(VCol, {
                                      key: index,
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl h-100 glass-card resource-card",
                                          style: { animationDelay: `${index * 0.1}s` }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "articulo-numero text-gold font-weight-bold mb-2" }, toDisplayString(articulo.numero), 1),
                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(articulo.titulo), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(articulo.descripcion), 1),
                                                createVNode(VChip, {
                                                  color: articulo.categoria === "Derechos Civiles" ? "blue" : articulo.categoria === "Derechos Sociales" ? "green" : "amber",
                                                  "text-color": "white",
                                                  size: "small",
                                                  class: "mb-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(articulo.categoria), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])
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
                      }),
                      createVNode(VRow, { class: "mb-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "section-header mb-6" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "gold",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-gavel")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Casos Emblemáticos")
                              ]),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(casosEmbematicos, (caso, index) => {
                                    return createVNode(VCol, {
                                      key: index,
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl h-100 glass-card resource-card",
                                          style: { animationDelay: `${index * 0.1}s` }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "case-header pa-6" }, [
                                              createVNode(VIcon, {
                                                size: "32",
                                                color: "gold",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-gavel")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", { class: "text-body-2 text-gold font-weight-bold" }, toDisplayString(caso.año), 1)
                                            ]),
                                            createVNode(VDivider, { class: "border-opacity-25" }),
                                            createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                              default: withCtx(() => [
                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(caso.titulo), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(caso.descripcion), 1),
                                                createVNode("p", { class: "text-caption text-gold font-weight-bold mb-2" }, "Derechos involucrados:"),
                                                createVNode("div", { class: "mb-4" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(caso.derechos, (derecho, i) => {
                                                    return openBlock(), createBlock(VChip, {
                                                      key: i,
                                                      size: "small",
                                                      color: "rgba(212, 175, 55, 0.2)",
                                                      "text-color": "gold",
                                                      class: "mr-1 mb-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(derecho), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ]),
                                                createVNode(VBtn, {
                                                  href: caso.enlace,
                                                  target: "_blank",
                                                  size: "small",
                                                  "append-icon": "mdi-open-in-new",
                                                  class: "mt-auto gold-btn-outline"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Leer Más ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])
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
                      }),
                      createVNode(VRow, { class: "mb-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "section-header mb-6" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "gold",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-globe")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Organismos Internacionales")
                              ]),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(organismos, (organismo, index) => {
                                    return createVNode(VCol, {
                                      key: index,
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl h-100 glass-card resource-card",
                                          style: { animationDelay: `${index * 0.1}s` }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  size: "40",
                                                  color: "gold",
                                                  class: "mb-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(organismo.icono), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(organismo.nombre), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(organismo.descripcion), 1),
                                                createVNode(VBtn, {
                                                  href: organismo.enlace,
                                                  target: "_blank",
                                                  color: "gold",
                                                  variant: "outlined",
                                                  size: "small",
                                                  "append-icon": "mdi-open-in-new",
                                                  class: "mt-auto"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Visitar ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])
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
                      }),
                      createVNode(VRow, { class: "mb-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "section-header mb-6" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "gold",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-book-open-page-variant")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h2", { class: "text-h4 font-serif text-white d-inline" }, "Recursos Educativos Recomendados")
                              ]),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(recursosEducativos, (recurso, index) => {
                                    return createVNode(VCol, {
                                      key: index,
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl h-100 glass-card resource-card",
                                          style: { animationDelay: `${index * 0.1}s` }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "pa-6 d-flex flex-column h-100" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  size: "40",
                                                  color: "gold",
                                                  class: "mb-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(recurso.icono), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("h3", { class: "text-h6 font-serif text-gold mb-2" }, toDisplayString(recurso.titulo), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-2" }, toDisplayString(recurso.autor), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-lighten-2 mb-4 flex-grow-1" }, toDisplayString(recurso.descripcion), 1),
                                                createVNode(VChip, {
                                                  size: "small",
                                                  color: "rgba(212, 175, 55, 0.2)",
                                                  "text-color": "gold",
                                                  class: "mb-4 w-fit"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(recurso.tipo), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                recurso.enlace ? (openBlock(), createBlock(VBtn, {
                                                  key: 0,
                                                  href: recurso.enlace,
                                                  target: "_blank",
                                                  size: "small",
                                                  "append-icon": "mdi-open-in-new",
                                                  class: "mt-auto gold-btn-outline"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Acceder ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])
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
                      }),
                      createVNode(VRow, { class: "mt-12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: "mx-auto text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VDivider, {
                                class: "mb-8 border-opacity-50",
                                color: "gold"
                              }),
                              createVNode(VBtn, {
                                to: "/",
                                color: "gold",
                                size: "large",
                                "prepend-icon": "mdi-home",
                                class: "font-weight-bold"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Volver al Inicio ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Recursos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Recursos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6c82657f"]]);

export { Recursos as default };
//# sourceMappingURL=Recursos-BD7H0oPg.mjs.map
