import { ref, computed, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, toRef, normalizeStyle, normalizeClass, provide, createElementVNode, inject, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, V as VApp, k as VIcon, d as VBtn, f as VContainer, g as VRow, h as VCol, j as VDivider, i as VProgressLinear, l as VChip, m as genericComponent, ad as useGroup, E as provideTheme, D as useRounded, G as provideDefaults, p as useRender, ab as useGroupItem, z as useBackgroundColor, B as useElevation, I as VDefaultsProvider, q as propsFactory, s as makeTagProps, o as makeComponentProps, t as makeThemeProps, v as makeRoundedProps, ae as pick, af as makeGroupProps, a5 as Ripple, R as useDimension, K as VExpandTransition, ac as makeGroupItemProps, x as makeElevationProps, a3 as IconValue, T as makeDimensionProps } from './server.mjs';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VMain } from './VMain-Cd1cV_fK.mjs';
import { V as VCard } from './VCard-C8GwDJXo.mjs';
import { V as VAlert } from './VAlert-B7Wvkfmr.mjs';
import { u as useLazy, m as makeLazyProps } from './lazy-CFcaMxhA.mjs';
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

const VExpansionPanelSymbol = /* @__PURE__ */ Symbol.for("vuetify:v-expansion-panel");
const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
  name: "VExpansionPanelText",
  props: makeVExpansionPanelTextProps(),
  setup(props, {
    slots
  }) {
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => [withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-expansion-panel-text", props.class]),
        "style": normalizeStyle(props.style)
      }, [slots.default && hasContent.value && createElementVNode("div", {
        "class": "v-expansion-panel-text__wrapper"
      }, [slots.default?.()])]), [[vShow, expansionPanel.isSelected.value]])]
    }));
    return {};
  }
});
const makeVExpansionPanelTitleProps = propsFactory({
  color: String,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: false
  },
  readonly: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
  name: "VExpansionPanelTitle",
  directives: {
    vRipple: Ripple
  },
  props: makeVExpansionPanelTitleProps(),
  setup(props, {
    slots
  }) {
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      dimensionStyles
    } = useDimension(props);
    const slotProps = computed(() => ({
      collapseIcon: props.collapseIcon,
      disabled: expansionPanel.disabled.value,
      expanded: expansionPanel.isSelected.value,
      expandIcon: props.expandIcon,
      readonly: props.readonly
    }));
    const icon = toRef(() => expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon);
    useRender(() => withDirectives(createElementVNode("button", {
      "class": normalizeClass(["v-expansion-panel-title", {
        "v-expansion-panel-title--active": expansionPanel.isSelected.value,
        "v-expansion-panel-title--focusable": props.focusable,
        "v-expansion-panel-title--static": props.static
      }, backgroundColorClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, props.style]),
      "type": "button",
      "tabindex": expansionPanel.disabled.value ? -1 : void 0,
      "disabled": expansionPanel.disabled.value,
      "aria-expanded": expansionPanel.isSelected.value,
      "onClick": !props.readonly ? expansionPanel.toggle : void 0
    }, [createElementVNode("span", {
      "class": "v-expansion-panel-title__overlay"
    }, null), slots.default?.(slotProps.value), !props.hideActions && createVNode(VDefaultsProvider, {
      "defaults": {
        VIcon: {
          icon: icon.value
        }
      }
    }, {
      default: () => [createElementVNode("span", {
        "class": "v-expansion-panel-title__icon"
      }, [slots.actions?.(slotProps.value) ?? createVNode(VIcon, null, null)])]
    })]), [[Ripple, props.ripple]]));
    return {};
  }
});
const makeVExpansionPanelProps = propsFactory({
  title: String,
  text: String,
  bgColor: String,
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps(),
  ...makeVExpansionPanelTextProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",
  props: makeVExpansionPanelProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, {
    slots
  }) {
    const groupItem = useGroupItem(props, VExpansionPanelSymbol);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const isDisabled = toRef(() => groupItem?.disabled.value || props.disabled);
    const selectedIndices = computed(() => groupItem.group.items.value.reduce((arr, item, index) => {
      if (groupItem.group.selected.value.includes(item.id)) arr.push(index);
      return arr;
    }, []));
    const isBeforeSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === 1);
    });
    const isAfterSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === -1);
    });
    provide(VExpansionPanelSymbol, groupItem);
    useRender(() => {
      const hasText = !!(slots.text || props.text);
      const hasTitle = !!(slots.title || props.title);
      const expansionPanelTitleProps = VExpansionPanelTitle.filterProps(props);
      const expansionPanelTextProps = VExpansionPanelText.filterProps(props);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-expansion-panel", {
          "v-expansion-panel--active": groupItem.isSelected.value,
          "v-expansion-panel--before-active": isBeforeSelected.value,
          "v-expansion-panel--after-active": isAfterSelected.value,
          "v-expansion-panel--disabled": isDisabled.value
        }, roundedClasses.value, backgroundColorClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, props.style])
      }, {
        default: () => [createElementVNode("div", {
          "class": normalizeClass(["v-expansion-panel__shadow", ...elevationClasses.value])
        }, null), createVNode(VDefaultsProvider, {
          "defaults": {
            VExpansionPanelTitle: {
              ...expansionPanelTitleProps
            },
            VExpansionPanelText: {
              ...expansionPanelTextProps
            }
          }
        }, {
          default: () => [hasTitle && createVNode(VExpansionPanelTitle, {
            "key": "title"
          }, {
            default: () => [slots.title ? slots.title() : props.title]
          }), hasText && createVNode(VExpansionPanelText, {
            "key": "text"
          }, {
            default: () => [slots.text ? slots.text() : props.text]
          }), slots.default?.()]
        })]
      });
    });
    return {
      groupItem
    };
  }
});
const allowedVariants = ["default", "accordion", "inset", "popout"];
const makeVExpansionPanelsProps = propsFactory({
  flat: Boolean,
  ...makeGroupProps(),
  ...pick(makeVExpansionPanelProps(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "static"]),
  ...makeRoundedProps(),
  ...makeThemeProps(),
  ...makeComponentProps(),
  ...makeTagProps(),
  variant: {
    type: String,
    default: "default",
    validator: (v) => allowedVariants.includes(v)
  }
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",
  props: makeVExpansionPanelsProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, {
    slots
  }) {
    const {
      next,
      prev
    } = useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      roundedClasses
    } = useRounded(props);
    const variantClass = toRef(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        bgColor: toRef(() => props.bgColor),
        collapseIcon: toRef(() => props.collapseIcon),
        color: toRef(() => props.color),
        eager: toRef(() => props.eager),
        elevation: toRef(() => props.elevation),
        expandIcon: toRef(() => props.expandIcon),
        focusable: toRef(() => props.focusable),
        hideActions: toRef(() => props.hideActions),
        readonly: toRef(() => props.readonly),
        ripple: toRef(() => props.ripple),
        static: toRef(() => props.static)
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-expansion-panels", {
        "v-expansion-panels--flat": props.flat,
        "v-expansion-panels--tile": props.tile
      }, themeClasses.value, roundedClasses.value, variantClass.value, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => [slots.default?.({
        prev,
        next
      })]
    }));
    return {
      next,
      prev
    };
  }
});
const _sfc_main = {
  __name: "Evaluacion",
  __ssrInlineRender: true,
  setup(__props) {
    const preguntaActual = ref(0);
    const evaluacionCompletada = ref(false);
    const respuestas = ref({});
    const preguntas = [
      {
        pregunta: "¿Qué son los Derechos Fundamentales?",
        opciones: [
          "Son derechos que solo tienen las personas mayores de edad",
          "Son derechos inherentes a la dignidad humana que protegen libertades y garantías básicas",
          "Son derechos que solo existen en las ciudades",
          "Son derechos que se pueden comprar o vender"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los Derechos Fundamentales son inherentes a la dignidad humana y están reconocidos en las constituciones nacionales e internacionales. Son inviolables y protegen libertades y garantías básicas para todas las personas."
      },
      {
        pregunta: "¿A cuántas generaciones se clasifican los Derechos Humanos?",
        opciones: [
          "Una generación",
          "Dos generaciones",
          "Tres generaciones",
          "Cuatro generaciones"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los Derechos Humanos se clasifican tradicionalmente en tres generaciones: Primera (civiles y políticos), Segunda (económicos, sociales y culturales) y Tercera (solidaridad, paz y medio ambiente)."
      },
      {
        pregunta: "¿Cuál es un ejemplo de Derecho de Primera Generación?",
        opciones: [
          "Derecho a la educación",
          "Derecho a un ambiente sano",
          "Libertad de expresión",
          "Derecho al trabajo"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Libertad de Expresión es un derecho civil y político que pertenece a la Primera Generación. Los derechos de primera generación son libertades civiles y políticas fundamentales."
      },
      {
        pregunta: "¿Qué caracteriza a los Derechos de Segunda Generación?",
        opciones: [
          "Son derechos políticos únicamente",
          "Son derechos económicos, sociales y culturales que promueven la igualdad",
          "Son solo derechos ambientales",
          "No existen en las constituciones modernas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los Derechos de Segunda Generación son derechos económicos, sociales y culturales que buscan garantizar la igualdad de oportunidades y condiciones de vida dignas para todas las personas."
      },
      {
        pregunta: "¿Cuál es un Derecho de Tercera Generación?",
        opciones: [
          "Derecho a la libertad",
          "Derecho al trabajo",
          "Derecho a un ambiente sano y equilibrado",
          "Derecho a la propiedad"
        ],
        respuestaCorrecta: 2,
        explicacion: "El Derecho a un ambiente sano y equilibrado es un Derecho de Tercera Generación. Estos derechos se centran en la solidaridad, la paz y el bienestar colectivo."
      },
      {
        pregunta: "¿Qué es la Acción de Tutela?",
        opciones: [
          "Un castigo judicial",
          "Un mecanismo legal para proteger derechos fundamentales de forma inmediata",
          "Una sanción económica",
          "Un permiso para viajar"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Acción de Tutela es un mecanismo constitucional que permite a cualquier persona defender sus derechos fundamentales de forma rápida e inmediata cuando se sienten vulnerados."
      },
      {
        pregunta: "¿Cuál es el órgano máximo de protección de Derechos Humanos en Colombia?",
        opciones: [
          "El Ministerio de Educación",
          "La Corte Constitucional",
          "La Gobernación",
          "El Banco de la República"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Corte Constitucional es el órgano máximo de protección de derechos fundamentales en Colombia. Tiene la competencia de revisar las acciones de tutela y resolver conflictos constitucionales."
      },
      {
        pregunta: "¿Quiénes son titulares de Derechos Fundamentales?",
        opciones: [
          "Solo los adultos",
          "Solo los ciudadanos de un país",
          "Todas las personas, sin discriminación alguna",
          "Solo las personas con educación superior"
        ],
        respuestaCorrecta: 2,
        explicacion: "Todos los seres humanos son titulares de Derechos Fundamentales sin ningún tipo de discriminación por sexo, edad, religión, origen, condición económica u otra característica."
      },
      {
        pregunta: "¿Cuál es la diferencia principal entre Derecho y Deber?",
        opciones: [
          "No hay diferencia",
          "Los derechos son beneficios mientras que los deberes son obligaciones",
          "Los deberes son más importantes",
          "Los derechos no existen en la ley"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los Derechos son beneficios y libertades que una persona posee y que deben ser respetados. Los Deberes son obligaciones que cada persona tiene hacia otros y hacia la sociedad."
      },
      {
        pregunta: "¿Qué se entiende por dignidad humana?",
        opciones: [
          "El dinero que posee una persona",
          "El valor inherente de cada ser humano que merece respeto y protección",
          "La posición social de una persona",
          "La edad de una persona"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Dignidad Humana es el valor inherente de cada ser humano, independientemente de sus características personales, que le confiere derechos inviolables y la merece respeto y protección."
      }
    ];
    const respuestasCorrectas = computed(() => {
      let contador = 0;
      for (let i = 0; i < preguntas.length; i++) {
        if (respuestas.value[i] === preguntas[i].respuestaCorrecta) {
          contador++;
        }
      }
      return contador;
    });
    const porcentaje = computed(() => {
      return Math.round(respuestasCorrectas.value / preguntas.length * 100);
    });
    const finalizarEvaluacion = () => {
      evaluacionCompletada.value = true;
    };
    const reiniciarEvaluacion = () => {
      preguntaActual.value = 0;
      evaluacionCompletada.value = false;
      respuestas.value = {};
    };
    const getCalificacion = () => {
      if (porcentaje.value >= 90) return "EXCELENTE";
      if (porcentaje.value >= 80) return "MUY BUENO";
      if (porcentaje.value >= 70) return "BUENO";
      if (porcentaje.value >= 60) return "REGULAR";
      return "INSUFICIENTE";
    };
    const getColorResultado = () => {
      if (porcentaje.value >= 80) return "green-accent-3";
      if (porcentaje.value >= 60) return "amber";
      return "red-accent-2";
    };
    const getIconoResultado = () => {
      if (porcentaje.value >= 90) return "mdi-trophy-gold";
      if (porcentaje.value >= 80) return "mdi-star-circle";
      if (porcentaje.value >= 60) return "mdi-hand-okay";
      return "mdi-alert-circle";
    };
    const getMensajeResultado = () => {
      if (porcentaje.value >= 90) return "¡Felicidades! Dominas perfectamente los Derechos Fundamentales";
      if (porcentaje.value >= 80) return "¡Muy bien! Tienes un excelente conocimiento de los temas";
      if (porcentaje.value >= 70) return "Buen desempeño. Considera repasar algunos temas";
      if (porcentaje.value >= 60) return "Desempeño regular. Te recomendamos estudiar más";
      return "Necesitas reforzar tus conocimientos. Estudia de nuevo los temas";
    };
    const getRetroalimentacion = () => {
      if (porcentaje.value >= 90) return "Tienes un conocimiento completo y profundo de los Derechos Fundamentales. ¡Excelente desempeño! Puedes ayudar a otros a comprender estos derechos.";
      if (porcentaje.value >= 80) return "Has demostrado buena comprensión de los conceptos principales. Solo hay algunos detalles que podrías reforzar.";
      if (porcentaje.value >= 70) return "Entiendes los conceptos básicos, pero te recomendamos revisar los temas donde tuviste errores para consolidar tu aprendizaje.";
      if (porcentaje.value >= 60) return "Has aprendido los fundamentos, pero hay varios conceptos que necesitas reforzar. Estudia nuevamente los temas principales.";
      return "Te recomendamos revisar cuidadosamente todo el material de aprendizaje para mejorar tu comprensión de los Derechos Fundamentales.";
    };
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
                        _push4(ssrRenderComponent(VIcon, { class: "mr-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-clipboard-text`);
                            } else {
                              return [
                                createTextVNode("mdi-clipboard-text")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`Evaluación General - Derechos Fundamentales`);
                      } else {
                        return [
                          createVNode(VIcon, { class: "mr-3" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-clipboard-text")
                            ]),
                            _: 1
                          }),
                          createTextVNode("Evaluación General - Derechos Fundamentales")
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
                    createVNode(VToolbarTitle, { class: "font-serif text-gold" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { class: "mr-3" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-clipboard-text")
                          ]),
                          _: 1
                        }),
                        createTextVNode("Evaluación General - Derechos Fundamentales")
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
                  _push3(`<div class="floating-shapes" data-v-72138b77${_scopeId2}><div class="shape shape-1" data-v-72138b77${_scopeId2}></div><div class="shape shape-2" data-v-72138b77${_scopeId2}></div><div class="shape shape-3" data-v-72138b77${_scopeId2}></div><div class="shape shape-4" data-v-72138b77${_scopeId2}></div><div class="shape shape-5" data-v-72138b77${_scopeId2}></div></div>`);
                  _push3(ssrRenderComponent(VContainer, {
                    fluid: "",
                    class: "pa-8 position-relative z-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!evaluacionCompletada.value) {
                          _push4(ssrRenderComponent(VRow, { class: "mb-8" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  md: "8",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        elevation: "0",
                                        class: "rounded-xl overflow-hidden glass-card pa-6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-center mb-8" data-v-72138b77${_scopeId6}><h1 class="text-h3 font-serif text-white mb-4 slide-fade-in text-glow" data-v-72138b77${_scopeId6}>EVALUACIÓN GENERAL</h1><p class="text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" data-v-72138b77${_scopeId6}> Demuestra lo que has aprendido sobre los Derechos Fundamentales </p>`);
                                            _push7(ssrRenderComponent(VDivider, {
                                              class: "mb-6 border-opacity-50",
                                              color: "gold"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="d-flex justify-space-between align-center mb-4" data-v-72138b77${_scopeId6}><span class="text-caption text-grey-lighten-1" data-v-72138b77${_scopeId6}>Pregunta ${ssrInterpolate(preguntaActual.value + 1)} de ${ssrInterpolate(preguntas.length)}</span><span class="text-caption text-gold font-weight-bold" data-v-72138b77${_scopeId6}>${ssrInterpolate(Math.round(preguntaActual.value / preguntas.length * 100))}%</span></div>`);
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              value: preguntaActual.value / preguntas.length * 100,
                                              color: "gold",
                                              height: "6",
                                              rounded: "",
                                              class: "mb-6"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="pregunta-container" data-v-72138b77${_scopeId6}><h2 class="text-h5 font-serif text-white mb-8" data-v-72138b77${_scopeId6}>${ssrInterpolate(preguntas[preguntaActual.value].pregunta)}</h2><div class="opciones-container space-y-4" data-v-72138b77${_scopeId6}><!--[-->`);
                                            ssrRenderList(preguntas[preguntaActual.value].opciones, (opcion, index) => {
                                              _push7(ssrRenderComponent(VBtn, {
                                                key: index,
                                                block: "",
                                                class: ["opcion-btn text-left", { "opcion-selected": respuestas.value[preguntaActual.value] === index }],
                                                onClick: ($event) => respuestas.value[preguntaActual.value] = index,
                                                variant: "outlined",
                                                color: "gold"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="d-flex align-center w-100" data-v-72138b77${_scopeId7}><span class="opcion-letra" data-v-72138b77${_scopeId7}>${ssrInterpolate(String.fromCharCode(65 + index))}</span><span class="ml-4" data-v-72138b77${_scopeId7}>${ssrInterpolate(opcion)}</span></div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "d-flex align-center w-100" }, [
                                                        createVNode("span", { class: "opcion-letra" }, toDisplayString(String.fromCharCode(65 + index)), 1),
                                                        createVNode("span", { class: "ml-4" }, toDisplayString(opcion), 1)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]--></div></div><div class="d-flex justify-space-between mt-12" data-v-72138b77${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              variant: "outlined",
                                              color: "grey-lighten-2",
                                              disabled: preguntaActual.value === 0,
                                              onClick: ($event) => preguntaActual.value--,
                                              "prepend-icon": "mdi-arrow-left"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Anterior `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Anterior ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            if (preguntaActual.value < preguntas.length - 1) {
                                              _push7(ssrRenderComponent(VBtn, {
                                                color: "gold",
                                                size: "large",
                                                class: "font-weight-bold",
                                                onClick: ($event) => preguntaActual.value++,
                                                "append-icon": "mdi-arrow-right"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Siguiente `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" Siguiente ")
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(ssrRenderComponent(VBtn, {
                                                color: "green-darken-2",
                                                size: "large",
                                                class: "font-weight-bold",
                                                onClick: finalizarEvaluacion,
                                                "prepend-icon": "mdi-check-circle"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Finalizar Evaluación `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" Finalizar Evaluación ")
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            }
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-center mb-8" }, [
                                                createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "EVALUACIÓN GENERAL"),
                                                createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Demuestra lo que has aprendido sobre los Derechos Fundamentales "),
                                                createVNode(VDivider, {
                                                  class: "mb-6 border-opacity-50",
                                                  color: "gold"
                                                }),
                                                createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                                  createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Pregunta " + toDisplayString(preguntaActual.value + 1) + " de " + toDisplayString(preguntas.length), 1),
                                                  createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round(preguntaActual.value / preguntas.length * 100)) + "%", 1)
                                                ]),
                                                createVNode(VProgressLinear, {
                                                  value: preguntaActual.value / preguntas.length * 100,
                                                  color: "gold",
                                                  height: "6",
                                                  rounded: "",
                                                  class: "mb-6"
                                                }, null, 8, ["value"])
                                              ]),
                                              createVNode("div", { class: "pregunta-container" }, [
                                                createVNode("h2", { class: "text-h5 font-serif text-white mb-8" }, toDisplayString(preguntas[preguntaActual.value].pregunta), 1),
                                                createVNode("div", { class: "opciones-container space-y-4" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(preguntas[preguntaActual.value].opciones, (opcion, index) => {
                                                    return openBlock(), createBlock(VBtn, {
                                                      key: index,
                                                      block: "",
                                                      class: ["opcion-btn text-left", { "opcion-selected": respuestas.value[preguntaActual.value] === index }],
                                                      onClick: ($event) => respuestas.value[preguntaActual.value] = index,
                                                      variant: "outlined",
                                                      color: "gold"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex align-center w-100" }, [
                                                          createVNode("span", { class: "opcion-letra" }, toDisplayString(String.fromCharCode(65 + index)), 1),
                                                          createVNode("span", { class: "ml-4" }, toDisplayString(opcion), 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class", "onClick"]);
                                                  }), 128))
                                                ])
                                              ]),
                                              createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  color: "grey-lighten-2",
                                                  disabled: preguntaActual.value === 0,
                                                  onClick: ($event) => preguntaActual.value--,
                                                  "prepend-icon": "mdi-arrow-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Anterior ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["disabled", "onClick"]),
                                                preguntaActual.value < preguntas.length - 1 ? (openBlock(), createBlock(VBtn, {
                                                  key: 0,
                                                  color: "gold",
                                                  size: "large",
                                                  class: "font-weight-bold",
                                                  onClick: ($event) => preguntaActual.value++,
                                                  "append-icon": "mdi-arrow-right"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Siguiente ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                                                  key: 1,
                                                  color: "green-darken-2",
                                                  size: "large",
                                                  class: "font-weight-bold",
                                                  onClick: finalizarEvaluacion,
                                                  "prepend-icon": "mdi-check-circle"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Finalizar Evaluación ")
                                                  ]),
                                                  _: 1
                                                }))
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl overflow-hidden glass-card pa-6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-center mb-8" }, [
                                              createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "EVALUACIÓN GENERAL"),
                                              createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Demuestra lo que has aprendido sobre los Derechos Fundamentales "),
                                              createVNode(VDivider, {
                                                class: "mb-6 border-opacity-50",
                                                color: "gold"
                                              }),
                                              createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                                createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Pregunta " + toDisplayString(preguntaActual.value + 1) + " de " + toDisplayString(preguntas.length), 1),
                                                createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round(preguntaActual.value / preguntas.length * 100)) + "%", 1)
                                              ]),
                                              createVNode(VProgressLinear, {
                                                value: preguntaActual.value / preguntas.length * 100,
                                                color: "gold",
                                                height: "6",
                                                rounded: "",
                                                class: "mb-6"
                                              }, null, 8, ["value"])
                                            ]),
                                            createVNode("div", { class: "pregunta-container" }, [
                                              createVNode("h2", { class: "text-h5 font-serif text-white mb-8" }, toDisplayString(preguntas[preguntaActual.value].pregunta), 1),
                                              createVNode("div", { class: "opciones-container space-y-4" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(preguntas[preguntaActual.value].opciones, (opcion, index) => {
                                                  return openBlock(), createBlock(VBtn, {
                                                    key: index,
                                                    block: "",
                                                    class: ["opcion-btn text-left", { "opcion-selected": respuestas.value[preguntaActual.value] === index }],
                                                    onClick: ($event) => respuestas.value[preguntaActual.value] = index,
                                                    variant: "outlined",
                                                    color: "gold"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex align-center w-100" }, [
                                                        createVNode("span", { class: "opcion-letra" }, toDisplayString(String.fromCharCode(65 + index)), 1),
                                                        createVNode("span", { class: "ml-4" }, toDisplayString(opcion), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class", "onClick"]);
                                                }), 128))
                                              ])
                                            ]),
                                            createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                color: "grey-lighten-2",
                                                disabled: preguntaActual.value === 0,
                                                onClick: ($event) => preguntaActual.value--,
                                                "prepend-icon": "mdi-arrow-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Anterior ")
                                                ]),
                                                _: 1
                                              }, 8, ["disabled", "onClick"]),
                                              preguntaActual.value < preguntas.length - 1 ? (openBlock(), createBlock(VBtn, {
                                                key: 0,
                                                color: "gold",
                                                size: "large",
                                                class: "font-weight-bold",
                                                onClick: ($event) => preguntaActual.value++,
                                                "append-icon": "mdi-arrow-right"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Siguiente ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                                                key: 1,
                                                color: "green-darken-2",
                                                size: "large",
                                                class: "font-weight-bold",
                                                onClick: finalizarEvaluacion,
                                                "prepend-icon": "mdi-check-circle"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Finalizar Evaluación ")
                                                ]),
                                                _: 1
                                              }))
                                            ])
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
                                      createVNode(VCard, {
                                        elevation: "0",
                                        class: "rounded-xl overflow-hidden glass-card pa-6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-center mb-8" }, [
                                            createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "EVALUACIÓN GENERAL"),
                                            createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Demuestra lo que has aprendido sobre los Derechos Fundamentales "),
                                            createVNode(VDivider, {
                                              class: "mb-6 border-opacity-50",
                                              color: "gold"
                                            }),
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                              createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Pregunta " + toDisplayString(preguntaActual.value + 1) + " de " + toDisplayString(preguntas.length), 1),
                                              createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round(preguntaActual.value / preguntas.length * 100)) + "%", 1)
                                            ]),
                                            createVNode(VProgressLinear, {
                                              value: preguntaActual.value / preguntas.length * 100,
                                              color: "gold",
                                              height: "6",
                                              rounded: "",
                                              class: "mb-6"
                                            }, null, 8, ["value"])
                                          ]),
                                          createVNode("div", { class: "pregunta-container" }, [
                                            createVNode("h2", { class: "text-h5 font-serif text-white mb-8" }, toDisplayString(preguntas[preguntaActual.value].pregunta), 1),
                                            createVNode("div", { class: "opciones-container space-y-4" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(preguntas[preguntaActual.value].opciones, (opcion, index) => {
                                                return openBlock(), createBlock(VBtn, {
                                                  key: index,
                                                  block: "",
                                                  class: ["opcion-btn text-left", { "opcion-selected": respuestas.value[preguntaActual.value] === index }],
                                                  onClick: ($event) => respuestas.value[preguntaActual.value] = index,
                                                  variant: "outlined",
                                                  color: "gold"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex align-center w-100" }, [
                                                      createVNode("span", { class: "opcion-letra" }, toDisplayString(String.fromCharCode(65 + index)), 1),
                                                      createVNode("span", { class: "ml-4" }, toDisplayString(opcion), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class", "onClick"]);
                                              }), 128))
                                            ])
                                          ]),
                                          createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              color: "grey-lighten-2",
                                              disabled: preguntaActual.value === 0,
                                              onClick: ($event) => preguntaActual.value--,
                                              "prepend-icon": "mdi-arrow-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Anterior ")
                                              ]),
                                              _: 1
                                            }, 8, ["disabled", "onClick"]),
                                            preguntaActual.value < preguntas.length - 1 ? (openBlock(), createBlock(VBtn, {
                                              key: 0,
                                              color: "gold",
                                              size: "large",
                                              class: "font-weight-bold",
                                              onClick: ($event) => preguntaActual.value++,
                                              "append-icon": "mdi-arrow-right"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Siguiente ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                                              key: 1,
                                              color: "green-darken-2",
                                              size: "large",
                                              class: "font-weight-bold",
                                              onClick: finalizarEvaluacion,
                                              "prepend-icon": "mdi-check-circle"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Finalizar Evaluación ")
                                              ]),
                                              _: 1
                                            }))
                                          ])
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
                                  md: "8",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        elevation: "0",
                                        class: "rounded-xl overflow-hidden glass-card pa-8"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-center mb-12" data-v-72138b77${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: 120,
                                              color: getColorResultado(),
                                              class: "mb-6",
                                              icon: getIconoResultado()
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<h1 class="${ssrRenderClass(["text-" + getColorResultado(), "text-h2 font-serif text-white mb-4"])}" data-v-72138b77${_scopeId6}>${ssrInterpolate(getCalificacion())}</h1><p class="text-h5 font-serif-italic text-grey-lighten-2 mb-6" data-v-72138b77${_scopeId6}>${ssrInterpolate(getMensajeResultado())}</p></div>`);
                                            _push7(ssrRenderComponent(VDivider, {
                                              class: "mb-8 border-opacity-50",
                                              color: "gold"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="puntuacion-grid mb-12" data-v-72138b77${_scopeId6}><div class="puntuacion-item text-center" data-v-72138b77${_scopeId6}><div class="puntuacion-valor text-h3 text-gold font-weight-bold" data-v-72138b77${_scopeId6}>${ssrInterpolate(respuestasCorrectas.value)}</div><div class="puntuacion-label text-body-2 text-grey-lighten-2" data-v-72138b77${_scopeId6}> Respuestas Correctas </div></div>`);
                                            _push7(ssrRenderComponent(VDivider, { vertical: "" }, null, _parent7, _scopeId6));
                                            _push7(`<div class="puntuacion-item text-center" data-v-72138b77${_scopeId6}><div class="puntuacion-valor text-h3 text-gold font-weight-bold" data-v-72138b77${_scopeId6}>${ssrInterpolate(preguntas.length)}</div><div class="puntuacion-label text-body-2 text-grey-lighten-2" data-v-72138b77${_scopeId6}> Total de Preguntas </div></div>`);
                                            _push7(ssrRenderComponent(VDivider, { vertical: "" }, null, _parent7, _scopeId6));
                                            _push7(`<div class="puntuacion-item text-center" data-v-72138b77${_scopeId6}><div class="puntuacion-valor text-h3 text-gold font-weight-bold" data-v-72138b77${_scopeId6}>${ssrInterpolate(porcentaje.value)}% </div><div class="puntuacion-label text-body-2 text-grey-lighten-2" data-v-72138b77${_scopeId6}> Porcentaje </div></div>`);
                                            _push7(ssrRenderComponent(VDivider, { vertical: "" }, null, _parent7, _scopeId6));
                                            _push7(`<div class="puntuacion-item text-center" data-v-72138b77${_scopeId6}><div class="puntuacion-valor text-h3 text-gold font-weight-bold" data-v-72138b77${_scopeId6}>${ssrInterpolate(Math.round(respuestasCorrectas.value * 5))}/${ssrInterpolate(preguntas.length * 5)}</div><div class="puntuacion-label text-body-2 text-grey-lighten-2" data-v-72138b77${_scopeId6}> Puntuación </div></div></div><div class="mb-8" data-v-72138b77${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              value: porcentaje.value,
                                              color: getColorResultado(),
                                              height: "12",
                                              rounded: "",
                                              class: "mb-4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                            _push7(ssrRenderComponent(VAlert, {
                                              type: porcentaje.value >= 80 ? "success" : porcentaje.value >= 60 ? "info" : "warning",
                                              variant: "tonal",
                                              class: "mb-8",
                                              icon: "mdi-lightbulb-on"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="text-body-2" data-v-72138b77${_scopeId7}><strong data-v-72138b77${_scopeId7}>Retroalimentación:</strong> ${ssrInterpolate(getRetroalimentacion())}</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "text-body-2" }, [
                                                      createVNode("strong", null, "Retroalimentación:"),
                                                      createTextVNode(" " + toDisplayString(getRetroalimentacion()), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VExpansionPanels, { class: "mb-8" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(preguntas, (pregunta, index) => {
                                                    _push8(ssrRenderComponent(VExpansionPanel, {
                                                      key: index,
                                                      class: "glass-panel"
                                                    }, {
                                                      title: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`<div class="d-flex align-center w-100" data-v-72138b77${_scopeId8}>`);
                                                          _push9(ssrRenderComponent(VIcon, {
                                                            color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                            size: "24",
                                                            class: "mr-3"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(`<span class="text-body-2" data-v-72138b77${_scopeId8}>Pregunta ${ssrInterpolate(index + 1)}</span></div>`);
                                                        } else {
                                                          return [
                                                            createVNode("div", { class: "d-flex align-center w-100" }, [
                                                              createVNode(VIcon, {
                                                                color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                                size: "24",
                                                                class: "mr-3"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"]),
                                                              createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                                            ])
                                                          ];
                                                        }
                                                      }),
                                                      text: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`<div class="pa-4" data-v-72138b77${_scopeId8}><p class="text-body-2 text-white mb-4" data-v-72138b77${_scopeId8}><strong data-v-72138b77${_scopeId8}>${ssrInterpolate(pregunta.pregunta)}</strong></p><div class="mb-4" data-v-72138b77${_scopeId8}><p class="text-caption text-grey-lighten-2 mb-2" data-v-72138b77${_scopeId8}>Tu respuesta:</p>`);
                                                          _push9(ssrRenderComponent(VChip, {
                                                            color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                            "text-color": "white",
                                                            size: "small",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(pregunta.opciones[respuestas.value[index]])}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(`</div>`);
                                                          if (respuestas.value[index] !== pregunta.respuestaCorrecta) {
                                                            _push9(`<div data-v-72138b77${_scopeId8}><p class="text-caption text-grey-lighten-2 mb-2" data-v-72138b77${_scopeId8}>Respuesta correcta:</p>`);
                                                            _push9(ssrRenderComponent(VChip, {
                                                              color: "green",
                                                              "text-color": "white",
                                                              size: "small"
                                                            }, {
                                                              default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                if (_push10) {
                                                                  _push10(`${ssrInterpolate(pregunta.opciones[pregunta.respuestaCorrecta])}`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                                  ];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent9, _scopeId8));
                                                            _push9(`</div>`);
                                                          } else {
                                                            _push9(`<!---->`);
                                                          }
                                                          _push9(`<p class="text-caption text-grey-lighten-1 mt-4" data-v-72138b77${_scopeId8}>${ssrInterpolate(pregunta.explicacion)}</p></div>`);
                                                        } else {
                                                          return [
                                                            createVNode("div", { class: "pa-4" }, [
                                                              createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                                createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                                              ]),
                                                              createVNode("div", { class: "mb-4" }, [
                                                                createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                                createVNode(VChip, {
                                                                  color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                                  "text-color": "white",
                                                                  size: "small",
                                                                  class: "mr-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ]),
                                                              respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                                createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                                createVNode(VChip, {
                                                                  color: "green",
                                                                  "text-color": "white",
                                                                  size: "small"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ])) : createCommentVNode("", true),
                                                              createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                                            ])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(), createBlock(Fragment, null, renderList(preguntas, (pregunta, index) => {
                                                      return createVNode(VExpansionPanel, {
                                                        key: index,
                                                        class: "glass-panel"
                                                      }, {
                                                        title: withCtx(() => [
                                                          createVNode("div", { class: "d-flex align-center w-100" }, [
                                                            createVNode(VIcon, {
                                                              color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                              size: "24",
                                                              class: "mr-3"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"]),
                                                            createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                                          ])
                                                        ]),
                                                        text: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                              createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                                            ]),
                                                            createVNode("div", { class: "mb-4" }, [
                                                              createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                              createVNode(VChip, {
                                                                color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                                "text-color": "white",
                                                                size: "small",
                                                                class: "mr-2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                              createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                              createVNode(VChip, {
                                                                color: "green",
                                                                "text-color": "white",
                                                                size: "small"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ])) : createCommentVNode("", true),
                                                            createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 64))
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`<div class="d-flex justify-center gap-4" data-v-72138b77${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              color: "gold",
                                              size: "large",
                                              class: "font-weight-bold",
                                              onClick: reiniciarEvaluacion,
                                              "prepend-icon": "mdi-restart"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Intentar de Nuevo `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Intentar de Nuevo ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              variant: "outlined",
                                              color: "grey-lighten-2",
                                              size: "large",
                                              to: "/",
                                              "prepend-icon": "mdi-home"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Ir a Inicio `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Ir a Inicio ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-center mb-12" }, [
                                                createVNode(VIcon, {
                                                  size: 120,
                                                  color: getColorResultado(),
                                                  class: "mb-6",
                                                  icon: getIconoResultado()
                                                }, null, 8, ["color", "icon"]),
                                                createVNode("h1", {
                                                  class: ["text-h2 font-serif text-white mb-4", "text-" + getColorResultado()]
                                                }, toDisplayString(getCalificacion()), 3),
                                                createVNode("p", { class: "text-h5 font-serif-italic text-grey-lighten-2 mb-6" }, toDisplayString(getMensajeResultado()), 1)
                                              ]),
                                              createVNode(VDivider, {
                                                class: "mb-8 border-opacity-50",
                                                color: "gold"
                                              }),
                                              createVNode("div", { class: "puntuacion-grid mb-12" }, [
                                                createVNode("div", { class: "puntuacion-item text-center" }, [
                                                  createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(respuestasCorrectas.value), 1),
                                                  createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Respuestas Correctas ")
                                                ]),
                                                createVNode(VDivider, { vertical: "" }),
                                                createVNode("div", { class: "puntuacion-item text-center" }, [
                                                  createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(preguntas.length), 1),
                                                  createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Total de Preguntas ")
                                                ]),
                                                createVNode(VDivider, { vertical: "" }),
                                                createVNode("div", { class: "puntuacion-item text-center" }, [
                                                  createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(porcentaje.value) + "% ", 1),
                                                  createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Porcentaje ")
                                                ]),
                                                createVNode(VDivider, { vertical: "" }),
                                                createVNode("div", { class: "puntuacion-item text-center" }, [
                                                  createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(Math.round(respuestasCorrectas.value * 5)) + "/" + toDisplayString(preguntas.length * 5), 1),
                                                  createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Puntuación ")
                                                ])
                                              ]),
                                              createVNode("div", { class: "mb-8" }, [
                                                createVNode(VProgressLinear, {
                                                  value: porcentaje.value,
                                                  color: getColorResultado(),
                                                  height: "12",
                                                  rounded: "",
                                                  class: "mb-4"
                                                }, null, 8, ["value", "color"])
                                              ]),
                                              createVNode(VAlert, {
                                                type: porcentaje.value >= 80 ? "success" : porcentaje.value >= 60 ? "info" : "warning",
                                                variant: "tonal",
                                                class: "mb-8",
                                                icon: "mdi-lightbulb-on"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-body-2" }, [
                                                    createVNode("strong", null, "Retroalimentación:"),
                                                    createTextVNode(" " + toDisplayString(getRetroalimentacion()), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["type"]),
                                              createVNode(VExpansionPanels, { class: "mb-8" }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(preguntas, (pregunta, index) => {
                                                    return createVNode(VExpansionPanel, {
                                                      key: index,
                                                      class: "glass-panel"
                                                    }, {
                                                      title: withCtx(() => [
                                                        createVNode("div", { class: "d-flex align-center w-100" }, [
                                                          createVNode(VIcon, {
                                                            color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                            size: "24",
                                                            class: "mr-3"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"]),
                                                          createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                                        ])
                                                      ]),
                                                      text: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                            createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                                          ]),
                                                          createVNode("div", { class: "mb-4" }, [
                                                            createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                            createVNode(VChip, {
                                                              color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                              "text-color": "white",
                                                              size: "small",
                                                              class: "mr-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                            createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                            createVNode(VChip, {
                                                              color: "green",
                                                              "text-color": "white",
                                                              size: "small"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ])) : createCommentVNode("", true),
                                                          createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "d-flex justify-center gap-4" }, [
                                                createVNode(VBtn, {
                                                  color: "gold",
                                                  size: "large",
                                                  class: "font-weight-bold",
                                                  onClick: reiniciarEvaluacion,
                                                  "prepend-icon": "mdi-restart"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Intentar de Nuevo ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  color: "grey-lighten-2",
                                                  size: "large",
                                                  to: "/",
                                                  "prepend-icon": "mdi-home"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Ir a Inicio ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl overflow-hidden glass-card pa-8"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-center mb-12" }, [
                                              createVNode(VIcon, {
                                                size: 120,
                                                color: getColorResultado(),
                                                class: "mb-6",
                                                icon: getIconoResultado()
                                              }, null, 8, ["color", "icon"]),
                                              createVNode("h1", {
                                                class: ["text-h2 font-serif text-white mb-4", "text-" + getColorResultado()]
                                              }, toDisplayString(getCalificacion()), 3),
                                              createVNode("p", { class: "text-h5 font-serif-italic text-grey-lighten-2 mb-6" }, toDisplayString(getMensajeResultado()), 1)
                                            ]),
                                            createVNode(VDivider, {
                                              class: "mb-8 border-opacity-50",
                                              color: "gold"
                                            }),
                                            createVNode("div", { class: "puntuacion-grid mb-12" }, [
                                              createVNode("div", { class: "puntuacion-item text-center" }, [
                                                createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(respuestasCorrectas.value), 1),
                                                createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Respuestas Correctas ")
                                              ]),
                                              createVNode(VDivider, { vertical: "" }),
                                              createVNode("div", { class: "puntuacion-item text-center" }, [
                                                createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(preguntas.length), 1),
                                                createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Total de Preguntas ")
                                              ]),
                                              createVNode(VDivider, { vertical: "" }),
                                              createVNode("div", { class: "puntuacion-item text-center" }, [
                                                createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(porcentaje.value) + "% ", 1),
                                                createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Porcentaje ")
                                              ]),
                                              createVNode(VDivider, { vertical: "" }),
                                              createVNode("div", { class: "puntuacion-item text-center" }, [
                                                createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(Math.round(respuestasCorrectas.value * 5)) + "/" + toDisplayString(preguntas.length * 5), 1),
                                                createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Puntuación ")
                                              ])
                                            ]),
                                            createVNode("div", { class: "mb-8" }, [
                                              createVNode(VProgressLinear, {
                                                value: porcentaje.value,
                                                color: getColorResultado(),
                                                height: "12",
                                                rounded: "",
                                                class: "mb-4"
                                              }, null, 8, ["value", "color"])
                                            ]),
                                            createVNode(VAlert, {
                                              type: porcentaje.value >= 80 ? "success" : porcentaje.value >= 60 ? "info" : "warning",
                                              variant: "tonal",
                                              class: "mb-8",
                                              icon: "mdi-lightbulb-on"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-body-2" }, [
                                                  createVNode("strong", null, "Retroalimentación:"),
                                                  createTextVNode(" " + toDisplayString(getRetroalimentacion()), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["type"]),
                                            createVNode(VExpansionPanels, { class: "mb-8" }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(preguntas, (pregunta, index) => {
                                                  return createVNode(VExpansionPanel, {
                                                    key: index,
                                                    class: "glass-panel"
                                                  }, {
                                                    title: withCtx(() => [
                                                      createVNode("div", { class: "d-flex align-center w-100" }, [
                                                        createVNode(VIcon, {
                                                          color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                          size: "24",
                                                          class: "mr-3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"]),
                                                        createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                                      ])
                                                    ]),
                                                    text: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                          createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                                        ]),
                                                        createVNode("div", { class: "mb-4" }, [
                                                          createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                          createVNode(VChip, {
                                                            color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                            "text-color": "white",
                                                            size: "small",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ]),
                                                        respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                          createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                          createVNode(VChip, {
                                                            color: "green",
                                                            "text-color": "white",
                                                            size: "small"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ])) : createCommentVNode("", true),
                                                        createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "d-flex justify-center gap-4" }, [
                                              createVNode(VBtn, {
                                                color: "gold",
                                                size: "large",
                                                class: "font-weight-bold",
                                                onClick: reiniciarEvaluacion,
                                                "prepend-icon": "mdi-restart"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Intentar de Nuevo ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                color: "grey-lighten-2",
                                                size: "large",
                                                to: "/",
                                                "prepend-icon": "mdi-home"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Ir a Inicio ")
                                                ]),
                                                _: 1
                                              })
                                            ])
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
                                      createVNode(VCard, {
                                        elevation: "0",
                                        class: "rounded-xl overflow-hidden glass-card pa-8"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-center mb-12" }, [
                                            createVNode(VIcon, {
                                              size: 120,
                                              color: getColorResultado(),
                                              class: "mb-6",
                                              icon: getIconoResultado()
                                            }, null, 8, ["color", "icon"]),
                                            createVNode("h1", {
                                              class: ["text-h2 font-serif text-white mb-4", "text-" + getColorResultado()]
                                            }, toDisplayString(getCalificacion()), 3),
                                            createVNode("p", { class: "text-h5 font-serif-italic text-grey-lighten-2 mb-6" }, toDisplayString(getMensajeResultado()), 1)
                                          ]),
                                          createVNode(VDivider, {
                                            class: "mb-8 border-opacity-50",
                                            color: "gold"
                                          }),
                                          createVNode("div", { class: "puntuacion-grid mb-12" }, [
                                            createVNode("div", { class: "puntuacion-item text-center" }, [
                                              createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(respuestasCorrectas.value), 1),
                                              createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Respuestas Correctas ")
                                            ]),
                                            createVNode(VDivider, { vertical: "" }),
                                            createVNode("div", { class: "puntuacion-item text-center" }, [
                                              createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(preguntas.length), 1),
                                              createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Total de Preguntas ")
                                            ]),
                                            createVNode(VDivider, { vertical: "" }),
                                            createVNode("div", { class: "puntuacion-item text-center" }, [
                                              createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(porcentaje.value) + "% ", 1),
                                              createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Porcentaje ")
                                            ]),
                                            createVNode(VDivider, { vertical: "" }),
                                            createVNode("div", { class: "puntuacion-item text-center" }, [
                                              createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(Math.round(respuestasCorrectas.value * 5)) + "/" + toDisplayString(preguntas.length * 5), 1),
                                              createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Puntuación ")
                                            ])
                                          ]),
                                          createVNode("div", { class: "mb-8" }, [
                                            createVNode(VProgressLinear, {
                                              value: porcentaje.value,
                                              color: getColorResultado(),
                                              height: "12",
                                              rounded: "",
                                              class: "mb-4"
                                            }, null, 8, ["value", "color"])
                                          ]),
                                          createVNode(VAlert, {
                                            type: porcentaje.value >= 80 ? "success" : porcentaje.value >= 60 ? "info" : "warning",
                                            variant: "tonal",
                                            class: "mb-8",
                                            icon: "mdi-lightbulb-on"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-body-2" }, [
                                                createVNode("strong", null, "Retroalimentación:"),
                                                createTextVNode(" " + toDisplayString(getRetroalimentacion()), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["type"]),
                                          createVNode(VExpansionPanels, { class: "mb-8" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(preguntas, (pregunta, index) => {
                                                return createVNode(VExpansionPanel, {
                                                  key: index,
                                                  class: "glass-panel"
                                                }, {
                                                  title: withCtx(() => [
                                                    createVNode("div", { class: "d-flex align-center w-100" }, [
                                                      createVNode(VIcon, {
                                                        color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                        size: "24",
                                                        class: "mr-3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"]),
                                                      createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                                    ])
                                                  ]),
                                                  text: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                        createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                                      ]),
                                                      createVNode("div", { class: "mb-4" }, [
                                                        createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                        createVNode(VChip, {
                                                          color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                          "text-color": "white",
                                                          size: "small",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                        createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                        createVNode(VChip, {
                                                          color: "green",
                                                          "text-color": "white",
                                                          size: "small"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ])) : createCommentVNode("", true),
                                                      createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 64))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "d-flex justify-center gap-4" }, [
                                            createVNode(VBtn, {
                                              color: "gold",
                                              size: "large",
                                              class: "font-weight-bold",
                                              onClick: reiniciarEvaluacion,
                                              "prepend-icon": "mdi-restart"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Intentar de Nuevo ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              color: "grey-lighten-2",
                                              size: "large",
                                              to: "/",
                                              "prepend-icon": "mdi-home"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Ir a Inicio ")
                                              ]),
                                              _: 1
                                            })
                                          ])
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
                        }
                      } else {
                        return [
                          !evaluacionCompletada.value ? (openBlock(), createBlock(VRow, {
                            key: 0,
                            class: "mb-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    elevation: "0",
                                    class: "rounded-xl overflow-hidden glass-card pa-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center mb-8" }, [
                                        createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "EVALUACIÓN GENERAL"),
                                        createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Demuestra lo que has aprendido sobre los Derechos Fundamentales "),
                                        createVNode(VDivider, {
                                          class: "mb-6 border-opacity-50",
                                          color: "gold"
                                        }),
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                          createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Pregunta " + toDisplayString(preguntaActual.value + 1) + " de " + toDisplayString(preguntas.length), 1),
                                          createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round(preguntaActual.value / preguntas.length * 100)) + "%", 1)
                                        ]),
                                        createVNode(VProgressLinear, {
                                          value: preguntaActual.value / preguntas.length * 100,
                                          color: "gold",
                                          height: "6",
                                          rounded: "",
                                          class: "mb-6"
                                        }, null, 8, ["value"])
                                      ]),
                                      createVNode("div", { class: "pregunta-container" }, [
                                        createVNode("h2", { class: "text-h5 font-serif text-white mb-8" }, toDisplayString(preguntas[preguntaActual.value].pregunta), 1),
                                        createVNode("div", { class: "opciones-container space-y-4" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(preguntas[preguntaActual.value].opciones, (opcion, index) => {
                                            return openBlock(), createBlock(VBtn, {
                                              key: index,
                                              block: "",
                                              class: ["opcion-btn text-left", { "opcion-selected": respuestas.value[preguntaActual.value] === index }],
                                              onClick: ($event) => respuestas.value[preguntaActual.value] = index,
                                              variant: "outlined",
                                              color: "gold"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center w-100" }, [
                                                  createVNode("span", { class: "opcion-letra" }, toDisplayString(String.fromCharCode(65 + index)), 1),
                                                  createVNode("span", { class: "ml-4" }, toDisplayString(opcion), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "onClick"]);
                                          }), 128))
                                        ])
                                      ]),
                                      createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          color: "grey-lighten-2",
                                          disabled: preguntaActual.value === 0,
                                          onClick: ($event) => preguntaActual.value--,
                                          "prepend-icon": "mdi-arrow-left"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Anterior ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled", "onClick"]),
                                        preguntaActual.value < preguntas.length - 1 ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          color: "gold",
                                          size: "large",
                                          class: "font-weight-bold",
                                          onClick: ($event) => preguntaActual.value++,
                                          "append-icon": "mdi-arrow-right"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Siguiente ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                                          key: 1,
                                          color: "green-darken-2",
                                          size: "large",
                                          class: "font-weight-bold",
                                          onClick: finalizarEvaluacion,
                                          "prepend-icon": "mdi-check-circle"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Finalizar Evaluación ")
                                          ]),
                                          _: 1
                                        }))
                                      ])
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
                                md: "8",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    elevation: "0",
                                    class: "rounded-xl overflow-hidden glass-card pa-8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center mb-12" }, [
                                        createVNode(VIcon, {
                                          size: 120,
                                          color: getColorResultado(),
                                          class: "mb-6",
                                          icon: getIconoResultado()
                                        }, null, 8, ["color", "icon"]),
                                        createVNode("h1", {
                                          class: ["text-h2 font-serif text-white mb-4", "text-" + getColorResultado()]
                                        }, toDisplayString(getCalificacion()), 3),
                                        createVNode("p", { class: "text-h5 font-serif-italic text-grey-lighten-2 mb-6" }, toDisplayString(getMensajeResultado()), 1)
                                      ]),
                                      createVNode(VDivider, {
                                        class: "mb-8 border-opacity-50",
                                        color: "gold"
                                      }),
                                      createVNode("div", { class: "puntuacion-grid mb-12" }, [
                                        createVNode("div", { class: "puntuacion-item text-center" }, [
                                          createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(respuestasCorrectas.value), 1),
                                          createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Respuestas Correctas ")
                                        ]),
                                        createVNode(VDivider, { vertical: "" }),
                                        createVNode("div", { class: "puntuacion-item text-center" }, [
                                          createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(preguntas.length), 1),
                                          createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Total de Preguntas ")
                                        ]),
                                        createVNode(VDivider, { vertical: "" }),
                                        createVNode("div", { class: "puntuacion-item text-center" }, [
                                          createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(porcentaje.value) + "% ", 1),
                                          createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Porcentaje ")
                                        ]),
                                        createVNode(VDivider, { vertical: "" }),
                                        createVNode("div", { class: "puntuacion-item text-center" }, [
                                          createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(Math.round(respuestasCorrectas.value * 5)) + "/" + toDisplayString(preguntas.length * 5), 1),
                                          createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Puntuación ")
                                        ])
                                      ]),
                                      createVNode("div", { class: "mb-8" }, [
                                        createVNode(VProgressLinear, {
                                          value: porcentaje.value,
                                          color: getColorResultado(),
                                          height: "12",
                                          rounded: "",
                                          class: "mb-4"
                                        }, null, 8, ["value", "color"])
                                      ]),
                                      createVNode(VAlert, {
                                        type: porcentaje.value >= 80 ? "success" : porcentaje.value >= 60 ? "info" : "warning",
                                        variant: "tonal",
                                        class: "mb-8",
                                        icon: "mdi-lightbulb-on"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-2" }, [
                                            createVNode("strong", null, "Retroalimentación:"),
                                            createTextVNode(" " + toDisplayString(getRetroalimentacion()), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["type"]),
                                      createVNode(VExpansionPanels, { class: "mb-8" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(preguntas, (pregunta, index) => {
                                            return createVNode(VExpansionPanel, {
                                              key: index,
                                              class: "glass-panel"
                                            }, {
                                              title: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center w-100" }, [
                                                  createVNode(VIcon, {
                                                    color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                    size: "24",
                                                    class: "mr-3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                                ])
                                              ]),
                                              text: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                    createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                                  ]),
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                    createVNode(VChip, {
                                                      color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                      "text-color": "white",
                                                      size: "small",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                    createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                    createVNode(VChip, {
                                                      color: "green",
                                                      "text-color": "white",
                                                      size: "small"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ])) : createCommentVNode("", true),
                                                  createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "d-flex justify-center gap-4" }, [
                                        createVNode(VBtn, {
                                          color: "gold",
                                          size: "large",
                                          class: "font-weight-bold",
                                          onClick: reiniciarEvaluacion,
                                          "prepend-icon": "mdi-restart"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Intentar de Nuevo ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          color: "grey-lighten-2",
                                          size: "large",
                                          to: "/",
                                          "prepend-icon": "mdi-home"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Ir a Inicio ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }))
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
                        !evaluacionCompletada.value ? (openBlock(), createBlock(VRow, {
                          key: 0,
                          class: "mb-8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "8",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  elevation: "0",
                                  class: "rounded-xl overflow-hidden glass-card pa-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center mb-8" }, [
                                      createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "EVALUACIÓN GENERAL"),
                                      createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Demuestra lo que has aprendido sobre los Derechos Fundamentales "),
                                      createVNode(VDivider, {
                                        class: "mb-6 border-opacity-50",
                                        color: "gold"
                                      }),
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                        createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Pregunta " + toDisplayString(preguntaActual.value + 1) + " de " + toDisplayString(preguntas.length), 1),
                                        createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round(preguntaActual.value / preguntas.length * 100)) + "%", 1)
                                      ]),
                                      createVNode(VProgressLinear, {
                                        value: preguntaActual.value / preguntas.length * 100,
                                        color: "gold",
                                        height: "6",
                                        rounded: "",
                                        class: "mb-6"
                                      }, null, 8, ["value"])
                                    ]),
                                    createVNode("div", { class: "pregunta-container" }, [
                                      createVNode("h2", { class: "text-h5 font-serif text-white mb-8" }, toDisplayString(preguntas[preguntaActual.value].pregunta), 1),
                                      createVNode("div", { class: "opciones-container space-y-4" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(preguntas[preguntaActual.value].opciones, (opcion, index) => {
                                          return openBlock(), createBlock(VBtn, {
                                            key: index,
                                            block: "",
                                            class: ["opcion-btn text-left", { "opcion-selected": respuestas.value[preguntaActual.value] === index }],
                                            onClick: ($event) => respuestas.value[preguntaActual.value] = index,
                                            variant: "outlined",
                                            color: "gold"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center w-100" }, [
                                                createVNode("span", { class: "opcion-letra" }, toDisplayString(String.fromCharCode(65 + index)), 1),
                                                createVNode("span", { class: "ml-4" }, toDisplayString(opcion), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "onClick"]);
                                        }), 128))
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        color: "grey-lighten-2",
                                        disabled: preguntaActual.value === 0,
                                        onClick: ($event) => preguntaActual.value--,
                                        "prepend-icon": "mdi-arrow-left"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Anterior ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled", "onClick"]),
                                      preguntaActual.value < preguntas.length - 1 ? (openBlock(), createBlock(VBtn, {
                                        key: 0,
                                        color: "gold",
                                        size: "large",
                                        class: "font-weight-bold",
                                        onClick: ($event) => preguntaActual.value++,
                                        "append-icon": "mdi-arrow-right"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Siguiente ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                                        key: 1,
                                        color: "green-darken-2",
                                        size: "large",
                                        class: "font-weight-bold",
                                        onClick: finalizarEvaluacion,
                                        "prepend-icon": "mdi-check-circle"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Finalizar Evaluación ")
                                        ]),
                                        _: 1
                                      }))
                                    ])
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
                              md: "8",
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  elevation: "0",
                                  class: "rounded-xl overflow-hidden glass-card pa-8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center mb-12" }, [
                                      createVNode(VIcon, {
                                        size: 120,
                                        color: getColorResultado(),
                                        class: "mb-6",
                                        icon: getIconoResultado()
                                      }, null, 8, ["color", "icon"]),
                                      createVNode("h1", {
                                        class: ["text-h2 font-serif text-white mb-4", "text-" + getColorResultado()]
                                      }, toDisplayString(getCalificacion()), 3),
                                      createVNode("p", { class: "text-h5 font-serif-italic text-grey-lighten-2 mb-6" }, toDisplayString(getMensajeResultado()), 1)
                                    ]),
                                    createVNode(VDivider, {
                                      class: "mb-8 border-opacity-50",
                                      color: "gold"
                                    }),
                                    createVNode("div", { class: "puntuacion-grid mb-12" }, [
                                      createVNode("div", { class: "puntuacion-item text-center" }, [
                                        createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(respuestasCorrectas.value), 1),
                                        createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Respuestas Correctas ")
                                      ]),
                                      createVNode(VDivider, { vertical: "" }),
                                      createVNode("div", { class: "puntuacion-item text-center" }, [
                                        createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(preguntas.length), 1),
                                        createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Total de Preguntas ")
                                      ]),
                                      createVNode(VDivider, { vertical: "" }),
                                      createVNode("div", { class: "puntuacion-item text-center" }, [
                                        createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(porcentaje.value) + "% ", 1),
                                        createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Porcentaje ")
                                      ]),
                                      createVNode(VDivider, { vertical: "" }),
                                      createVNode("div", { class: "puntuacion-item text-center" }, [
                                        createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(Math.round(respuestasCorrectas.value * 5)) + "/" + toDisplayString(preguntas.length * 5), 1),
                                        createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Puntuación ")
                                      ])
                                    ]),
                                    createVNode("div", { class: "mb-8" }, [
                                      createVNode(VProgressLinear, {
                                        value: porcentaje.value,
                                        color: getColorResultado(),
                                        height: "12",
                                        rounded: "",
                                        class: "mb-4"
                                      }, null, 8, ["value", "color"])
                                    ]),
                                    createVNode(VAlert, {
                                      type: porcentaje.value >= 80 ? "success" : porcentaje.value >= 60 ? "info" : "warning",
                                      variant: "tonal",
                                      class: "mb-8",
                                      icon: "mdi-lightbulb-on"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-2" }, [
                                          createVNode("strong", null, "Retroalimentación:"),
                                          createTextVNode(" " + toDisplayString(getRetroalimentacion()), 1)
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["type"]),
                                    createVNode(VExpansionPanels, { class: "mb-8" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(preguntas, (pregunta, index) => {
                                          return createVNode(VExpansionPanel, {
                                            key: index,
                                            class: "glass-panel"
                                          }, {
                                            title: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center w-100" }, [
                                                createVNode(VIcon, {
                                                  color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                  size: "24",
                                                  class: "mr-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                              ])
                                            ]),
                                            text: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                  createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                                ]),
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                  createVNode(VChip, {
                                                    color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                    "text-color": "white",
                                                    size: "small",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                  createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                  createVNode(VChip, {
                                                    color: "green",
                                                    "text-color": "white",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ])) : createCommentVNode("", true),
                                                createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "d-flex justify-center gap-4" }, [
                                      createVNode(VBtn, {
                                        color: "gold",
                                        size: "large",
                                        class: "font-weight-bold",
                                        onClick: reiniciarEvaluacion,
                                        "prepend-icon": "mdi-restart"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Intentar de Nuevo ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        color: "grey-lighten-2",
                                        size: "large",
                                        to: "/",
                                        "prepend-icon": "mdi-home"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Ir a Inicio ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }))
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
                      createVNode(VIcon, { class: "mr-3" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-clipboard-text")
                        ]),
                        _: 1
                      }),
                      createTextVNode("Evaluación General - Derechos Fundamentales")
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
                  createVNode(VContainer, {
                    fluid: "",
                    class: "pa-8 position-relative z-1"
                  }, {
                    default: withCtx(() => [
                      !evaluacionCompletada.value ? (openBlock(), createBlock(VRow, {
                        key: 0,
                        class: "mb-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                elevation: "0",
                                class: "rounded-xl overflow-hidden glass-card pa-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center mb-8" }, [
                                    createVNode("h1", { class: "text-h3 font-serif text-white mb-4 slide-fade-in text-glow" }, "EVALUACIÓN GENERAL"),
                                    createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2 mb-6" }, " Demuestra lo que has aprendido sobre los Derechos Fundamentales "),
                                    createVNode(VDivider, {
                                      class: "mb-6 border-opacity-50",
                                      color: "gold"
                                    }),
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                      createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Pregunta " + toDisplayString(preguntaActual.value + 1) + " de " + toDisplayString(preguntas.length), 1),
                                      createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round(preguntaActual.value / preguntas.length * 100)) + "%", 1)
                                    ]),
                                    createVNode(VProgressLinear, {
                                      value: preguntaActual.value / preguntas.length * 100,
                                      color: "gold",
                                      height: "6",
                                      rounded: "",
                                      class: "mb-6"
                                    }, null, 8, ["value"])
                                  ]),
                                  createVNode("div", { class: "pregunta-container" }, [
                                    createVNode("h2", { class: "text-h5 font-serif text-white mb-8" }, toDisplayString(preguntas[preguntaActual.value].pregunta), 1),
                                    createVNode("div", { class: "opciones-container space-y-4" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(preguntas[preguntaActual.value].opciones, (opcion, index) => {
                                        return openBlock(), createBlock(VBtn, {
                                          key: index,
                                          block: "",
                                          class: ["opcion-btn text-left", { "opcion-selected": respuestas.value[preguntaActual.value] === index }],
                                          onClick: ($event) => respuestas.value[preguntaActual.value] = index,
                                          variant: "outlined",
                                          color: "gold"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center w-100" }, [
                                              createVNode("span", { class: "opcion-letra" }, toDisplayString(String.fromCharCode(65 + index)), 1),
                                              createVNode("span", { class: "ml-4" }, toDisplayString(opcion), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "onClick"]);
                                      }), 128))
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      color: "grey-lighten-2",
                                      disabled: preguntaActual.value === 0,
                                      onClick: ($event) => preguntaActual.value--,
                                      "prepend-icon": "mdi-arrow-left"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Anterior ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"]),
                                    preguntaActual.value < preguntas.length - 1 ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      color: "gold",
                                      size: "large",
                                      class: "font-weight-bold",
                                      onClick: ($event) => preguntaActual.value++,
                                      "append-icon": "mdi-arrow-right"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Siguiente ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      color: "green-darken-2",
                                      size: "large",
                                      class: "font-weight-bold",
                                      onClick: finalizarEvaluacion,
                                      "prepend-icon": "mdi-check-circle"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Finalizar Evaluación ")
                                      ]),
                                      _: 1
                                    }))
                                  ])
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
                            md: "8",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                elevation: "0",
                                class: "rounded-xl overflow-hidden glass-card pa-8"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center mb-12" }, [
                                    createVNode(VIcon, {
                                      size: 120,
                                      color: getColorResultado(),
                                      class: "mb-6",
                                      icon: getIconoResultado()
                                    }, null, 8, ["color", "icon"]),
                                    createVNode("h1", {
                                      class: ["text-h2 font-serif text-white mb-4", "text-" + getColorResultado()]
                                    }, toDisplayString(getCalificacion()), 3),
                                    createVNode("p", { class: "text-h5 font-serif-italic text-grey-lighten-2 mb-6" }, toDisplayString(getMensajeResultado()), 1)
                                  ]),
                                  createVNode(VDivider, {
                                    class: "mb-8 border-opacity-50",
                                    color: "gold"
                                  }),
                                  createVNode("div", { class: "puntuacion-grid mb-12" }, [
                                    createVNode("div", { class: "puntuacion-item text-center" }, [
                                      createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(respuestasCorrectas.value), 1),
                                      createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Respuestas Correctas ")
                                    ]),
                                    createVNode(VDivider, { vertical: "" }),
                                    createVNode("div", { class: "puntuacion-item text-center" }, [
                                      createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(preguntas.length), 1),
                                      createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Total de Preguntas ")
                                    ]),
                                    createVNode(VDivider, { vertical: "" }),
                                    createVNode("div", { class: "puntuacion-item text-center" }, [
                                      createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(porcentaje.value) + "% ", 1),
                                      createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Porcentaje ")
                                    ]),
                                    createVNode(VDivider, { vertical: "" }),
                                    createVNode("div", { class: "puntuacion-item text-center" }, [
                                      createVNode("div", { class: "puntuacion-valor text-h3 text-gold font-weight-bold" }, toDisplayString(Math.round(respuestasCorrectas.value * 5)) + "/" + toDisplayString(preguntas.length * 5), 1),
                                      createVNode("div", { class: "puntuacion-label text-body-2 text-grey-lighten-2" }, " Puntuación ")
                                    ])
                                  ]),
                                  createVNode("div", { class: "mb-8" }, [
                                    createVNode(VProgressLinear, {
                                      value: porcentaje.value,
                                      color: getColorResultado(),
                                      height: "12",
                                      rounded: "",
                                      class: "mb-4"
                                    }, null, 8, ["value", "color"])
                                  ]),
                                  createVNode(VAlert, {
                                    type: porcentaje.value >= 80 ? "success" : porcentaje.value >= 60 ? "info" : "warning",
                                    variant: "tonal",
                                    class: "mb-8",
                                    icon: "mdi-lightbulb-on"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-body-2" }, [
                                        createVNode("strong", null, "Retroalimentación:"),
                                        createTextVNode(" " + toDisplayString(getRetroalimentacion()), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["type"]),
                                  createVNode(VExpansionPanels, { class: "mb-8" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(preguntas, (pregunta, index) => {
                                        return createVNode(VExpansionPanel, {
                                          key: index,
                                          class: "glass-panel"
                                        }, {
                                          title: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center w-100" }, [
                                              createVNode(VIcon, {
                                                color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green-accent-3" : "red-accent-2",
                                                size: "24",
                                                class: "mr-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(respuestas.value[index] === pregunta.respuestaCorrecta ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-body-2" }, "Pregunta " + toDisplayString(index + 1), 1)
                                            ])
                                          ]),
                                          text: withCtx(() => [
                                            createVNode("div", { class: "pa-4" }, [
                                              createVNode("p", { class: "text-body-2 text-white mb-4" }, [
                                                createVNode("strong", null, toDisplayString(pregunta.pregunta), 1)
                                              ]),
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Tu respuesta:"),
                                                createVNode(VChip, {
                                                  color: respuestas.value[index] === pregunta.respuestaCorrecta ? "green" : "red",
                                                  "text-color": "white",
                                                  size: "small",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(pregunta.opciones[respuestas.value[index]]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              respuestas.value[index] !== pregunta.respuestaCorrecta ? (openBlock(), createBlock("div", { key: 0 }, [
                                                createVNode("p", { class: "text-caption text-grey-lighten-2 mb-2" }, "Respuesta correcta:"),
                                                createVNode(VChip, {
                                                  color: "green",
                                                  "text-color": "white",
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(pregunta.opciones[pregunta.respuestaCorrecta]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])) : createCommentVNode("", true),
                                              createVNode("p", { class: "text-caption text-grey-lighten-1 mt-4" }, toDisplayString(pregunta.explicacion), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "d-flex justify-center gap-4" }, [
                                    createVNode(VBtn, {
                                      color: "gold",
                                      size: "large",
                                      class: "font-weight-bold",
                                      onClick: reiniciarEvaluacion,
                                      "prepend-icon": "mdi-restart"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Intentar de Nuevo ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      color: "grey-lighten-2",
                                      size: "large",
                                      to: "/",
                                      "prepend-icon": "mdi-home"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Ir a Inicio ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Evaluacion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Evaluacion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72138b77"]]);

export { Evaluacion as default };
//# sourceMappingURL=Evaluacion-BWmICZOT.mjs.map
