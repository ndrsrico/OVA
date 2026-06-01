import { _ as __nuxt_component_0 } from './nuxt-link-DnqeeCCC.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "Temario-simple",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding": "20px", "background": "#1a1a1a", "min-height": "100vh", "color": "white" } }, _attrs))} data-v-32f97329><h1 data-v-32f97329>Temario - Derechos Fundamentales</h1><p data-v-32f97329>Los 5 temas están disponibles en la sección de Introducción.</p><p data-v-32f97329>Haz clic en el botón abajo para comenzar.</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/introduccion",
        style: { "display": "inline-block", "padding": "10px 20px", "background": "#D4AF37", "color": "#000", "border-radius": "4px", "text-decoration": "none", "margin-top": "20px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ir a Introducción `);
          } else {
            return [
              createTextVNode(" Ir a Introducción ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Temario-simple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TemarioSimple = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32f97329"]]);

export { TemarioSimple as default };
//# sourceMappingURL=Temario-simple-ELQ7YHXl.mjs.map
