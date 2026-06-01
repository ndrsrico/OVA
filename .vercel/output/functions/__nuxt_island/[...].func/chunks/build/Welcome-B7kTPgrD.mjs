import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b1 as VProgressCircular } from './server.mjs';
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
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "d-flex align-center justify-center fill-height",
        style: { "background": "#050505", "min-height": "100vh", "color": "white" }
      }, _attrs))} data-v-4718dcc4><div class="text-center" data-v-4718dcc4>`);
      _push(ssrRenderComponent(VProgressCircular, {
        color: "gold",
        indeterminate: "",
        size: "64",
        class: "mb-4"
      }, null, _parent));
      _push(`<div class="font-serif text-gold text-subtitle-1" data-v-4718dcc4>Cargando Constitución Interactiva...</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4718dcc4"]]);

export { Welcome as default };
//# sourceMappingURL=Welcome-B7kTPgrD.mjs.map
