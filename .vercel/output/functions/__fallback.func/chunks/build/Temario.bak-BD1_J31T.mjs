import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useState } from './state-CqKsN6K6.mjs';
import { _ as _export_sfc, V as VApp, f as VContainer, g as VRow, h as VCol } from './server.mjs';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VMain } from './VMain-Cd1cV_fK.mjs';
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
  __name: "Temario.bak",
  __ssrInlineRender: true,
  setup(__props) {
    useState("maxTemaDesbloqueado", () => 1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              app: "",
              color: "rgba(20, 20, 20, 0.8)",
              theme: "dark",
              elevation: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbarTitle, null, {
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
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Temario")
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: "dynamic-bg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "10"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-h3 text-white mb-8" data-v-d1aef6a8${_scopeId5}>Temario - Derechos Fundamentales</h1><p class="text-white" data-v-d1aef6a8${_scopeId5}>Completa los temas en orden. Cada tema desbloqueará el siguiente.</p>`);
                                  } else {
                                    return [
                                      createVNode("h1", { class: "text-h3 text-white mb-8" }, "Temario - Derechos Fundamentales"),
                                      createVNode("p", { class: "text-white" }, "Completa los temas en orden. Cada tema desbloqueará el siguiente.")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h1", { class: "text-h3 text-white mb-8" }, "Temario - Derechos Fundamentales"),
                                    createVNode("p", { class: "text-white" }, "Completa los temas en orden. Cada tema desbloqueará el siguiente.")
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
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h1", { class: "text-h3 text-white mb-8" }, "Temario - Derechos Fundamentales"),
                                  createVNode("p", { class: "text-white" }, "Completa los temas en orden. Cada tema desbloqueará el siguiente.")
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
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "10"
                            }, {
                              default: withCtx(() => [
                                createVNode("h1", { class: "text-h3 text-white mb-8" }, "Temario - Derechos Fundamentales"),
                                createVNode("p", { class: "text-white" }, "Completa los temas en orden. Cada tema desbloqueará el siguiente.")
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
                color: "rgba(20, 20, 20, 0.8)",
                theme: "dark",
                elevation: "0"
              }, {
                default: withCtx(() => [
                  createVNode(VToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Temario")
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer)
                ]),
                _: 1
              }),
              createVNode(VMain, { class: "dynamic-bg" }, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, { justify: "center" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "10"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "text-h3 text-white mb-8" }, "Temario - Derechos Fundamentales"),
                              createVNode("p", { class: "text-white" }, "Completa los temas en orden. Cada tema desbloqueará el siguiente.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Temario.bak.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Temario_bak = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1aef6a8"]]);

export { Temario_bak as default };
//# sourceMappingURL=Temario.bak-BD1_J31T.mjs.map
