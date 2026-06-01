import { ref, watch, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, mergeProps, shallowRef, computed, toRef, nextTick, readonly, createElementVNode, Transition, useId, normalizeStyle, normalizeClass, withDirectives, watchEffect, vModelText, onScopeDispose, toRaw, toValue, provide, inject, cloneVNode, vShow, Teleport, reactive, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useState } from './state-CqKsN6K6.mjs';
import { _ as _export_sfc, V as VApp, d as VBtn, k as VIcon, j as VDivider, l as VChip, f as VContainer, b0 as VFadeTransition, g as VRow, h as VCol, H as VImg, b1 as VProgressCircular, b2 as VResponsive, K as VExpandTransition, m as genericComponent, p as useRender, F as useRtl, E as provideTheme, A as useBorder, z as useBackgroundColor, B as useElevation, ay as useDisplay, D as useRounded, az as useRouter, M as useProxiedModel, aA as toPhysical, N as useToggleScope, O as useLayoutItem, G as provideDefaults, I as VDefaultsProvider, W as useDensity, R as useDimension, J as convertToUnit, a5 as Ripple, a7 as useLink, U as useVariant, as as deprecate, $ as genOverlays, a4 as VAvatar, aC as filterInputAttrs, Z as useLocale, am as wrapInArray, au as deepEqual, aZ as camelizeProps, a_ as ensureValidVNode, aW as Intersect, q as propsFactory, Q as omit, al as makeVBtnProps, an as getCurrentInstance, t as makeThemeProps, s as makeTagProps, v as makeRoundedProps, P as makeLayoutItemProps, x as makeElevationProps, aB as makeDisplayProps, o as makeComponentProps, y as makeBorderProps, aw as focusChild, a3 as IconValue, a0 as makeVariantProps, T as makeDimensionProps, a2 as makeDensityProps, ar as EventProp, a8 as makeRouterProps, at as isPrimitive, a$ as checkPrintable, aD as matchesSelector, aS as isClickInsideElement, C as useLocation, X as usePosition, Y as useTextColor, aF as makeTransitionProps, aH as getCurrentInstanceName, a6 as useLoader, ag as Box, aa as LoaderSlot, aV as VExpandXTransition, ap as MaybeTransition, aE as callEvent, ao as consoleError, ae as pick, av as getPropertyFromItem, aT as getNextElement, aU as focusableChildren, a1 as makePositionProps, w as makeLocationProps, aX as useResizeObserver, aY as debounce, L as clamp, a9 as makeLoaderProps, aG as VSlideYTransition, aq as defineComponent, aR as templateRef, ak as standardEasing, ai as acceleratedEasing, aj as deceleratedEasing, ax as defer, ah as getTargetBox, aI as destructComputed, aJ as parseAnchor, aK as flipSide, aL as flipAlign, aM as flipCorner, aN as getElementBox, aO as getAxis, aP as getOverflow, aQ as CircularBuffer } from './server.mjs';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VMain, u as useSsrBoot, d as createSimpleFunctional } from './VMain-Cd1cV_fK.mjs';
import { V as VCard, a as VCardText, b as VCardActions } from './VCard-C8GwDJXo.mjs';
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

function nullifyTransforms(el) {
  const rect = new Box(el);
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = Number(ta[0]);
      sy = Number(ta[5]);
      dx = Number(ta[12]);
      dy = Number(ta[13]);
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = Number(ta[0]);
      sy = Number(ta[3]);
      dx = Number(ta[4]);
      dy = Number(ta[5]);
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === "undefined") return {
    finished: Promise.resolve()
  };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve) => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}
function attachedRoot(node) {
  if (typeof node.getRootNode !== "function") {
    while (node.parentNode) node = node.parentNode;
    if (node !== void 0) return null;
    return void 0;
  }
  const root = node.getRootNode();
  if (root !== void 0 && root.getRootNode({
    composed: true
  }) !== void 0) return null;
  return root;
}
function getScrollParent(el, includeHidden = false) {
  while (el) {
    if (includeHidden ? isPotentiallyScrollable(el) : hasScrollbar(el)) return el;
    el = el.parentElement;
  }
  return (void 0).scrollingElement;
}
function getScrollParents(el, stopAt) {
  const elements = [];
  if (stopAt && el && !stopAt.contains(el)) return elements;
  while (el) {
    if (hasScrollbar(el)) elements.push(el);
    if (el === stopAt) break;
    el = el.parentElement;
  }
  return elements;
}
function hasScrollbar(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const style = (void 0).getComputedStyle(el);
  const hasVerticalScrollbar = style.overflowY === "scroll" || style.overflowY === "auto" && el.scrollHeight > el.clientHeight;
  const hasHorizontalScrollbar = style.overflowX === "scroll" || style.overflowX === "auto" && el.scrollWidth > el.clientWidth;
  return hasVerticalScrollbar || hasHorizontalScrollbar;
}
function isPotentiallyScrollable(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const style = (void 0).getComputedStyle(el);
  return ["scroll", "auto"].includes(style.overflowY);
}
function isFixedPosition(el) {
  while (el) {
    if ((void 0).getComputedStyle(el).position === "fixed") {
      return true;
    }
    el = el.offsetParent;
  }
  return false;
}
function throttle(fn, delay, options = {
  leading: true,
  trailing: true
}) {
  let timeoutId = 0;
  let lastExec = 0;
  let throttling = false;
  let start = 0;
  function clear() {
    clearTimeout(timeoutId);
    throttling = false;
    start = 0;
  }
  const wrap = (...args) => {
    clearTimeout(timeoutId);
    const now = Date.now();
    if (!start) start = now;
    const elapsed = now - Math.max(start, lastExec);
    function invoke() {
      lastExec = Date.now();
      timeoutId = setTimeout(clear, delay);
      fn(...args);
    }
    if (!throttling) {
      throttling = true;
      if (options.leading) {
        invoke();
      }
    } else if (elapsed >= delay) {
      invoke();
    } else if (options.trailing) {
      timeoutId = setTimeout(invoke, delay - elapsed);
    }
  };
  wrap.clear = clear;
  wrap.immediate = fn;
  return wrap;
}
const makeVDialogTransitionProps = propsFactory({
  target: [Object, Array]
}, "v-dialog-transition");
const saved = /* @__PURE__ */ new WeakMap();
const VDialogTransition = genericComponent()({
  name: "VDialogTransition",
  props: makeVDialogTransitionProps(),
  setup(props, {
    slots
  }) {
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
      },
      async onEnter(el, done) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
        el.style.visibility = "";
        const dimensions = getDimensions(props.target, el);
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = dimensions;
        saved.set(el, dimensions);
        {
          const animation = animate(el, [{
            transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
            opacity: 0
          }, {}], {
            duration: 225 * speed,
            easing: deceleratedEasing
          });
          getChildren(el)?.forEach((el2) => {
            animate(el2, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 225 * 2 * speed,
              easing: standardEasing
            });
          });
          animation.finished.then(() => done());
        }
      },
      onAfterEnter(el) {
        el.style.removeProperty("pointer-events");
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = "none";
      },
      async onLeave(el, done) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
        let dimensions;
        if (!saved.has(el) || Array.isArray(props.target) || props.target.offsetParent || props.target.getClientRects().length) {
          dimensions = getDimensions(props.target, el);
        } else {
          dimensions = saved.get(el);
        }
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = dimensions;
        {
          const animation = animate(el, [{}, {
            transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
            opacity: 0
          }], {
            duration: 125 * speed,
            easing: acceleratedEasing
          });
          animation.finished.then(() => done());
          getChildren(el)?.forEach((el2) => {
            animate(el2, [{}, {
              opacity: 0,
              offset: 0.2
            }, {
              opacity: 0
            }], {
              duration: 125 * 2 * speed,
              easing: standardEasing
            });
          });
        }
      },
      onAfterLeave(el) {
        el.style.removeProperty("pointer-events");
      }
    };
    return () => {
      return props.target ? createVNode(Transition, mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : createVNode(Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});
function getChildren(el) {
  const els = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = getTargetBox(target);
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === "left" || anchorOffset === "left") {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === "right" || anchorOffset === "right") {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === "top" || anchorOffset === "top") {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;
  const asa = elBox.width * elBox.height / ((void 0).innerWidth * (void 0).innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}
const makeVAppBarNavIconProps = propsFactory({
  ...omit(makeVBtnProps({
    icon: "$menu",
    variant: "text"
  }), ["spaced"])
}, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
  name: "VAppBarNavIcon",
  props: makeVAppBarNavIconProps(),
  setup(props, {
    slots
  }) {
    useRender(() => createVNode(VBtn, mergeProps(props, {
      "class": ["v-app-bar-nav-icon"]
    }), slots));
    return {};
  }
});
const ListKey = /* @__PURE__ */ Symbol.for("vuetify:list");
function createList(options = {
  filterable: false
}) {
  const parent = inject(ListKey, {
    filterable: false,
    hasPrepend: shallowRef(false),
    updateHasPrepend: () => null,
    trackingIndex: shallowRef(-1),
    navigationStrategy: shallowRef("focus"),
    uid: ""
  });
  const {
    filterable,
    trackingIndex = parent.trackingIndex,
    navigationStrategy = parent.navigationStrategy,
    uid = parent.uid || useId()
  } = options;
  const data = {
    filterable: parent.filterable || filterable,
    hasPrepend: shallowRef(false),
    updateHasPrepend: (value) => {
      if (value) data.hasPrepend.value = value;
    },
    trackingIndex,
    navigationStrategy,
    uid
  };
  provide(ListKey, data);
  return parent;
}
function useList() {
  return inject(ListKey, null);
}
const independentActiveStrategy = (mandatory) => {
  const strategy = {
    activate: ({
      id,
      value,
      activated
    }) => {
      id = toRaw(id);
      if (mandatory && !value && activated.size === 1 && activated.has(id)) return activated;
      if (value) {
        activated.add(id);
      } else {
        activated.delete(id);
      }
      return activated;
    },
    in: (v, children, parents) => {
      let set = /* @__PURE__ */ new Set();
      if (v != null) {
        for (const id of wrapInArray(v)) {
          set = strategy.activate({
            id,
            value: true,
            activated: new Set(set),
            children,
            parents
          });
        }
      }
      return set;
    },
    out: (v) => {
      return Array.from(v);
    }
  };
  return strategy;
};
const independentSingleActiveStrategy = (mandatory) => {
  const parentStrategy = independentActiveStrategy(mandatory);
  const strategy = {
    activate: ({
      activated,
      id,
      ...rest
    }) => {
      id = toRaw(id);
      const singleSelected = activated.has(id) ? /* @__PURE__ */ new Set([id]) : /* @__PURE__ */ new Set();
      return parentStrategy.activate({
        ...rest,
        id,
        activated: singleSelected
      });
    },
    in: (v, children, parents) => {
      let set = /* @__PURE__ */ new Set();
      if (v != null) {
        const arr = wrapInArray(v);
        if (arr.length) {
          set = parentStrategy.in(arr.slice(0, 1), children, parents);
        }
      }
      return set;
    },
    out: (v, children, parents) => {
      return parentStrategy.out(v, children, parents);
    }
  };
  return strategy;
};
const leafActiveStrategy = (mandatory) => {
  const parentStrategy = independentActiveStrategy(mandatory);
  const strategy = {
    activate: ({
      id,
      activated,
      children,
      ...rest
    }) => {
      id = toRaw(id);
      if (children.has(id)) return activated;
      return parentStrategy.activate({
        id,
        activated,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const leafSingleActiveStrategy = (mandatory) => {
  const parentStrategy = independentSingleActiveStrategy(mandatory);
  const strategy = {
    activate: ({
      id,
      activated,
      children,
      ...rest
    }) => {
      id = toRaw(id);
      if (children.has(id)) return activated;
      return parentStrategy.activate({
        id,
        activated,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const singleOpenStrategy = {
  open: ({
    id,
    value,
    opened,
    parents
  }) => {
    if (value) {
      const newOpened = /* @__PURE__ */ new Set();
      newOpened.add(id);
      let parent = parents.get(id);
      while (parent != null) {
        newOpened.add(parent);
        parent = parents.get(parent);
      }
      return newOpened;
    } else {
      opened.delete(id);
      return opened;
    }
  },
  select: () => null
};
const multipleOpenStrategy = {
  open: ({
    id,
    value,
    opened,
    parents
  }) => {
    if (value) {
      let parent = parents.get(id);
      opened.add(id);
      while (parent != null && parent !== id) {
        opened.add(parent);
        parent = parents.get(parent);
      }
      return opened;
    } else {
      opened.delete(id);
    }
    return opened;
  },
  select: () => null
};
const listOpenStrategy = {
  open: multipleOpenStrategy.open,
  select: ({
    id,
    value,
    opened,
    parents
  }) => {
    if (!value) return opened;
    const path = [];
    let parent = parents.get(id);
    while (parent != null) {
      path.push(parent);
      parent = parents.get(parent);
    }
    return new Set(path);
  }
};
const independentSelectStrategy = (mandatory) => {
  const strategy = {
    select: ({
      id,
      value,
      selected
    }) => {
      id = toRaw(id);
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, [key, value2]) => {
          if (value2 === "on") arr.push(key);
          return arr;
        }, []);
        if (on.length === 1 && on[0] === id) return selected;
      }
      selected.set(id, value ? "on" : "off");
      return selected;
    },
    in: (v, children, parents, disabled) => {
      const map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        strategy.select({
          id,
          value: true,
          selected: map,
          children,
          parents,
          disabled
        });
      }
      return map;
    },
    out: (v) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on") arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
const independentSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: ({
      selected,
      id,
      ...rest
    }) => {
      id = toRaw(id);
      const singleSelected = selected.has(id) ? /* @__PURE__ */ new Map([[id, selected.get(id)]]) : /* @__PURE__ */ new Map();
      return parentStrategy.select({
        ...rest,
        id,
        selected: singleSelected
      });
    },
    in: (v, children, parents, disabled) => {
      if (v?.length) {
        return parentStrategy.in(v.slice(0, 1), children, parents, disabled);
      }
      return /* @__PURE__ */ new Map();
    },
    out: (v, children, parents) => {
      return parentStrategy.out(v, children, parents);
    }
  };
  return strategy;
};
const leafSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: ({
      id,
      selected,
      children,
      ...rest
    }) => {
      id = toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const leafSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSingleSelectStrategy(mandatory);
  const strategy = {
    select: ({
      id,
      selected,
      children,
      ...rest
    }) => {
      id = toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const classicSelectStrategy = (mandatory) => {
  const strategy = {
    select: ({
      id,
      value,
      selected,
      children,
      parents,
      disabled
    }) => {
      id = toRaw(id);
      const original = new Map(selected);
      const items = [id];
      while (items.length) {
        const item = items.shift();
        if (!disabled.has(item)) {
          selected.set(toRaw(item), value ? "on" : "off");
        }
        if (children.has(item)) {
          items.push(...children.get(item));
        }
      }
      let parent = toRaw(parents.get(id));
      while (parent) {
        let everySelected = true;
        let noneSelected = true;
        for (const child of children.get(parent)) {
          const cid = toRaw(child);
          if (disabled.has(cid)) continue;
          if (selected.get(cid) !== "on") everySelected = false;
          if (selected.has(cid) && selected.get(cid) !== "off") noneSelected = false;
          if (!everySelected && !noneSelected) break;
        }
        selected.set(parent, everySelected ? "on" : noneSelected ? "off" : "indeterminate");
        parent = toRaw(parents.get(parent));
      }
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, [key, value2]) => {
          if (value2 === "on") arr.push(key);
          return arr;
        }, []);
        if (on.length === 0) return original;
      }
      return selected;
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: map,
          children,
          parents,
          disabled: /* @__PURE__ */ new Set()
        });
      }
      return map;
    },
    out: (v, children) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on" && !children.has(key)) arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
const trunkSelectStrategy = (mandatory) => {
  const parentStrategy = classicSelectStrategy(mandatory);
  const strategy = {
    select: parentStrategy.select,
    in: parentStrategy.in,
    out: (v, children, parents) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on") {
          if (parents.has(key)) {
            const parent = parents.get(key);
            if (v.get(parent) === "on") continue;
          }
          arr.push(key);
        }
      }
      return arr;
    }
  };
  return strategy;
};
const branchSelectStrategy = (mandatory) => {
  const parentStrategy = classicSelectStrategy(mandatory);
  const strategy = {
    select: parentStrategy.select,
    in: (v, children, parents, disabled) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        if (children.has(id)) continue;
        map = strategy.select({
          id,
          value: true,
          selected: map,
          children,
          parents,
          disabled
        });
      }
      return map;
    },
    out: (v) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on" || value === "indeterminate") {
          arr.push(key);
        }
      }
      return arr;
    }
  };
  return strategy;
};
const VNestedSymbol = /* @__PURE__ */ Symbol.for("vuetify:nested");
const emptyNested = {
  id: shallowRef(),
  root: {
    itemsRegistration: ref("render"),
    register: () => null,
    unregister: () => null,
    updateDisabled: () => null,
    children: ref(/* @__PURE__ */ new Map()),
    parents: ref(/* @__PURE__ */ new Map()),
    disabled: ref(/* @__PURE__ */ new Set()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: ref(false),
    scrollToActive: ref(false),
    selectable: ref(false),
    opened: ref(/* @__PURE__ */ new Set()),
    activated: ref(/* @__PURE__ */ new Set()),
    selected: ref(/* @__PURE__ */ new Map()),
    selectedValues: ref([]),
    getPath: () => []
  }
};
const makeNestedProps = propsFactory({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean,
  itemsRegistration: {
    type: String,
    default: "render"
  }
}, "nested");
const useNested = (props, {
  items,
  returnObject,
  scrollToActive,
  valueComparator
}) => {
  const children = shallowRef(/* @__PURE__ */ new Map());
  const parents = shallowRef(/* @__PURE__ */ new Map());
  const disabled = shallowRef(/* @__PURE__ */ new Set());
  const opened = useProxiedModel(props, "opened", props.opened, (v) => new Set(Array.isArray(v) ? v.map((i) => toRaw(i)) : v), (v) => [...v.values()]);
  const activeStrategy = computed(() => {
    if (typeof props.activeStrategy === "object") return props.activeStrategy;
    if (typeof props.activeStrategy === "function") return props.activeStrategy(props.mandatory);
    switch (props.activeStrategy) {
      case "leaf":
        return leafActiveStrategy(props.mandatory);
      case "single-leaf":
        return leafSingleActiveStrategy(props.mandatory);
      case "independent":
        return independentActiveStrategy(props.mandatory);
      case "single-independent":
      default:
        return independentSingleActiveStrategy(props.mandatory);
    }
  });
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object") return props.selectStrategy;
    if (typeof props.selectStrategy === "function") return props.selectStrategy(props.mandatory);
    switch (props.selectStrategy) {
      case "single-leaf":
        return leafSingleSelectStrategy(props.mandatory);
      case "leaf":
        return leafSelectStrategy(props.mandatory);
      case "independent":
        return independentSelectStrategy(props.mandatory);
      case "single-independent":
        return independentSingleSelectStrategy(props.mandatory);
      case "trunk":
        return trunkSelectStrategy(props.mandatory);
      case "branch":
        return branchSelectStrategy(props.mandatory);
      case "classic":
      default:
        return classicSelectStrategy(props.mandatory);
    }
  });
  const openStrategy = computed(() => {
    if (typeof props.openStrategy === "object") return props.openStrategy;
    switch (props.openStrategy) {
      case "list":
        return listOpenStrategy;
      case "single":
        return singleOpenStrategy;
      case "multiple":
      default:
        return multipleOpenStrategy;
    }
  });
  const flatItems = computed(() => {
    const flat = [];
    const stack = [...items.value];
    while (stack.length) {
      const item = stack.pop();
      flat.push(item);
      if (item.children) stack.push(...item.children);
    }
    return flat;
  });
  function resolveValue(value) {
    const comparator = toValue(valueComparator);
    if (!comparator) return value;
    const _returnObject = toValue(returnObject);
    for (const item of flatItems.value) {
      const itemVal = _returnObject ? toRaw(item.raw) : item.value;
      if (comparator(value, itemVal)) return itemVal;
    }
    return value;
  }
  const activated = useProxiedModel(props, "activated", props.activated, (v) => activeStrategy.value.in(Array.isArray(v) ? v.map(resolveValue) : v, children.value, parents.value), (v) => activeStrategy.value.out(v, children.value, parents.value));
  const selected = useProxiedModel(props, "selected", props.selected, (v) => selectStrategy.value.in(Array.isArray(v) ? v.map(resolveValue) : v, children.value, parents.value, disabled.value), (v) => selectStrategy.value.out(v, children.value, parents.value));
  function getPath(id) {
    const path = [];
    let parent = toRaw(id);
    while (parent !== void 0) {
      path.unshift(parent);
      parent = parents.value.get(parent);
    }
    return path;
  }
  const vm = getCurrentInstance("nested");
  const nodeIds = /* @__PURE__ */ new Set();
  const itemsUpdatePropagation = throttle(() => {
    nextTick(() => {
      children.value = new Map(children.value);
      parents.value = new Map(parents.value);
    });
  }, 100);
  watch(() => [items.value, toValue(returnObject)], () => {
    if (props.itemsRegistration === "props") {
      updateInternalMaps();
    }
  }, {
    immediate: true
  });
  function updateInternalMaps() {
    const _parents = /* @__PURE__ */ new Map();
    const _children = /* @__PURE__ */ new Map();
    const _disabled = /* @__PURE__ */ new Set();
    const getValue = toValue(returnObject) ? (item) => toRaw(item.raw) : (item) => item.value;
    const stack = [...items.value];
    let i = 0;
    while (i < stack.length) {
      const item = stack[i++];
      const itemValue = getValue(item);
      if (item.children) {
        const childValues = [];
        for (const child of item.children) {
          const childValue = getValue(child);
          _parents.set(childValue, itemValue);
          childValues.push(childValue);
          stack.push(child);
        }
        _children.set(itemValue, childValues);
      }
      if (item.props.disabled) {
        _disabled.add(itemValue);
      }
    }
    children.value = _children;
    parents.value = _parents;
    disabled.value = _disabled;
  }
  const nested = {
    id: shallowRef(),
    root: {
      opened,
      activatable: toRef(() => props.activatable),
      scrollToActive: toRef(() => toValue(scrollToActive)),
      selectable: toRef(() => props.selectable),
      activated,
      selected,
      selectedValues: computed(() => {
        const arr = [];
        for (const [key, value] of selected.value.entries()) {
          if (value === "on") arr.push(key);
        }
        return arr;
      }),
      itemsRegistration: toRef(() => props.itemsRegistration),
      register: (id, parentId, isDisabled, isGroup) => {
        if (nodeIds.has(id)) {
          const path = getPath(id).map(String).join(" -> ");
          const newPath = getPath(parentId).concat(id).map(String).join(" -> ");
          consoleError(`Multiple nodes with the same ID
	${path}
	${newPath}`);
          return;
        } else {
          nodeIds.add(id);
        }
        parentId && id !== parentId && parents.value.set(id, parentId);
        isDisabled && disabled.value.add(id);
        isGroup && children.value.set(id, []);
        if (parentId != null) {
          children.value.set(parentId, [...children.value.get(parentId) || [], id]);
        }
        itemsUpdatePropagation();
      },
      unregister: (id) => {
        nodeIds.delete(id);
        children.value.delete(id);
        disabled.value.delete(id);
        const parent = parents.value.get(id);
        if (parent) {
          const list = children.value.get(parent) ?? [];
          children.value.set(parent, list.filter((child) => child !== id));
        }
        parents.value.delete(id);
        itemsUpdatePropagation();
      },
      updateDisabled: (id, isDisabled) => {
        if (isDisabled) {
          disabled.value.add(id);
        } else {
          disabled.value.delete(id);
        }
      },
      open: (id, value, event) => {
        vm.emit("click:open", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newOpened = openStrategy.value.open({
          id,
          value,
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      openOnSelect: (id, value, event) => {
        const newOpened = openStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      select: (id, value, event) => {
        vm.emit("click:select", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newSelected = selectStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          children: children.value,
          parents: parents.value,
          disabled: disabled.value,
          event
        });
        newSelected && (selected.value = newSelected);
        nested.root.openOnSelect(id, value, event);
      },
      activate: (id, value, event) => {
        if (!props.activatable) {
          return nested.root.select(id, true, event);
        }
        vm.emit("click:activate", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newActivated = activeStrategy.value.activate({
          id,
          value,
          activated: new Set(activated.value),
          children: children.value,
          parents: parents.value,
          event
        });
        if (newActivated.size !== activated.value.size) {
          activated.value = newActivated;
        } else {
          for (const value2 of newActivated) {
            if (!activated.value.has(value2)) {
              activated.value = newActivated;
              return;
            }
          }
          for (const value2 of activated.value) {
            if (!newActivated.has(value2)) {
              activated.value = newActivated;
              return;
            }
          }
        }
      },
      children,
      parents,
      disabled,
      getPath
    }
  };
  provide(VNestedSymbol, nested);
  return nested.root;
};
const useNestedItem = (id, isDisabled, isGroup) => {
  const parent = inject(VNestedSymbol, emptyNested);
  const uidSymbol = /* @__PURE__ */ Symbol("nested item");
  const computedId = computed(() => {
    const idValue = toRaw(toValue(id));
    return idValue !== void 0 ? idValue : uidSymbol;
  });
  const item = {
    ...parent,
    id: computedId,
    open: (open, e) => parent.root.open(computedId.value, open, e),
    openOnSelect: (open, e) => parent.root.openOnSelect(computedId.value, open, e),
    isOpen: computed(() => parent.root.opened.value.has(computedId.value)),
    parent: computed(() => parent.root.parents.value.get(computedId.value)),
    activate: (activated, e) => parent.root.activate(computedId.value, activated, e),
    isActivated: computed(() => parent.root.activated.value.has(computedId.value)),
    scrollToActive: parent.root.scrollToActive,
    select: (selected, e) => parent.root.select(computedId.value, selected, e),
    isSelected: computed(() => parent.root.selected.value.get(computedId.value) === "on"),
    isIndeterminate: computed(() => parent.root.selected.value.get(computedId.value) === "indeterminate"),
    isLeaf: computed(() => !parent.root.children.value.get(computedId.value)),
    isGroupActivator: parent.isGroupActivator
  };
  watch(computedId, (val, oldVal) => {
    if (parent.isGroupActivator || parent.root.itemsRegistration.value === "props") return;
    parent.root.unregister(oldVal);
    nextTick(() => {
      parent.root.register(val, parent.id.value, toValue(isDisabled), isGroup);
    });
  });
  watch(() => toValue(isDisabled), (val) => {
    parent.root.updateDisabled(computedId.value, val);
  });
  isGroup && provide(VNestedSymbol, item);
  return item;
};
const useNestedGroupActivator = () => {
  const parent = inject(VNestedSymbol, emptyNested);
  provide(VNestedSymbol, {
    ...parent,
    isGroupActivator: true
  });
};
const VListGroupActivator = defineComponent({
  name: "VListGroupActivator",
  setup(_, {
    slots
  }) {
    useNestedGroupActivator();
    return () => slots.default?.();
  }
});
const makeVListGroupProps = propsFactory({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  disabled: Boolean,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  rawId: [String, Number],
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListGroup");
const VListGroup = genericComponent()({
  name: "VListGroup",
  props: makeVListGroupProps(),
  setup(props, {
    slots
  }) {
    const {
      isOpen,
      open,
      id: _id
    } = useNestedItem(() => props.value, () => props.disabled, true);
    const id = computed(() => `v-list-group--id-${String(props.rawId ?? _id.value)}`);
    const list = useList();
    const {
      isBooted
    } = useSsrBoot();
    const parent = inject(VNestedSymbol);
    const renderWhenClosed = toRef(() => parent?.root?.itemsRegistration.value === "render");
    function onClick(e) {
      if (["INPUT", "TEXTAREA"].includes(e.target?.tagName)) return;
      open(!isOpen.value, e);
    }
    const activatorProps = computed(() => ({
      onClick,
      class: "v-list-group__header",
      id: id.value
    }));
    const toggleIcon = computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = computed(() => ({
      VListItem: {
        activeColor: props.activeColor,
        baseColor: props.baseColor,
        color: props.color,
        prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
        appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
        title: props.title,
        value: props.value
      }
    }));
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-list-group", {
        "v-list-group--prepend": list?.hasPrepend.value,
        "v-list-group--fluid": props.fluid,
        "v-list-group--subgroup": props.subgroup,
        "v-list-group--open": isOpen.value
      }, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => [slots.activator && createVNode(VDefaultsProvider, {
        "defaults": activatorDefaults.value
      }, {
        default: () => [createVNode(VListGroupActivator, null, {
          default: () => [slots.activator({
            props: activatorProps.value,
            isOpen: isOpen.value
          })]
        })]
      }), createVNode(MaybeTransition, {
        "transition": {
          component: VExpandTransition
        },
        "disabled": !isBooted.value
      }, {
        default: () => [renderWhenClosed.value ? withDirectives(createElementVNode("div", {
          "class": "v-list-group__items",
          "role": "group",
          "aria-labelledby": id.value
        }, [slots.default?.()]), [[vShow, isOpen.value]]) : isOpen.value && createElementVNode("div", {
          "class": "v-list-group__items",
          "role": "group",
          "aria-labelledby": id.value
        }, [slots.default?.()])]
      })]
    }));
    return {
      isOpen
    };
  }
});
const makeVListItemSubtitleProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListItemSubtitle");
const VListItemSubtitle = genericComponent()({
  name: "VListItemSubtitle",
  props: makeVListItemSubtitleProps(),
  setup(props, {
    slots
  }) {
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-list-item-subtitle", props.class]),
      "style": normalizeStyle([{
        "--v-list-item-subtitle-opacity": props.opacity
      }, props.style])
    }, slots));
    return {};
  }
});
const VListItemTitle = createSimpleFunctional("v-list-item-title");
const makeVListItemProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  slim: Boolean,
  prependGap: [Number, String],
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  index: Number,
  tabindex: [Number, String],
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VListItem");
const VListItem = genericComponent()({
  name: "VListItem",
  directives: {
    vRipple: Ripple
  },
  props: makeVListItemProps(),
  emits: {
    click: (e) => true
  },
  setup(props, {
    attrs,
    slots,
    emit
  }) {
    const link = useLink(props, attrs);
    const rootEl = ref();
    const id = computed(() => props.value === void 0 ? link.href.value : props.value);
    const {
      activate,
      isActivated,
      select,
      isOpen,
      isSelected,
      isIndeterminate,
      isGroupActivator,
      root,
      parent,
      openOnSelect,
      scrollToActive,
      id: uid
    } = useNestedItem(id, () => props.disabled, false);
    const list = useList();
    const isActive = computed(() => props.active !== false && (props.active || link.isActive?.value || (root.activatable.value ? isActivated.value : isSelected.value)));
    const isLink = toRef(() => props.link !== false && link.isLink.value);
    const isSelectable = computed(() => !!list && (root.selectable.value || root.activatable.value || props.value != null));
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || isSelectable.value));
    const isTracked = computed(() => list && list.navigationStrategy.value === "track" && props.index !== void 0 && list.trackingIndex.value === props.index);
    const role = computed(() => list ? isLink.value ? "link" : isSelectable.value ? "option" : "listitem" : void 0);
    const ariaSelected = computed(() => {
      if (!isSelectable.value) return void 0;
      return root.activatable.value ? isActivated.value : root.selectable.value ? isSelected.value : isActive.value;
    });
    const roundedProps = toRef(() => props.rounded || props.nav);
    const color = toRef(() => props.color ?? props.activeColor);
    const variantProps = toRef(() => ({
      color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
      variant: props.variant
    }));
    watch(() => link.isActive?.value, (val) => {
      if (!val) return;
      handleActiveLink();
    });
    watch(isActivated, (val) => {
      if (!val || !scrollToActive) return;
      rootEl.value?.scrollIntoView({
        block: "nearest",
        behavior: "instant"
      });
    });
    watch(isTracked, (val) => {
      if (!val) return;
      rootEl.value?.scrollIntoView({
        block: "nearest",
        behavior: "instant"
      });
    });
    function handleActiveLink() {
      if (parent.value != null) {
        root.open(parent.value, true);
      }
      openOnSelect(true);
    }
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(roundedProps);
    const lineClasses = toRef(() => props.lines ? `v-list-item--${props.lines}-line` : void 0);
    const rippleOptions = toRef(() => props.ripple !== void 0 && !!props.ripple && list?.filterable ? {
      keys: ["Enter"]
    } : props.ripple);
    const slotProps = computed(() => ({
      isActive: isActive.value,
      select,
      isOpen: isOpen.value,
      isSelected: isSelected.value,
      isIndeterminate: isIndeterminate.value,
      isDisabled: props.disabled
    }));
    function onClick(e) {
      emit("click", e);
      if (["INPUT", "TEXTAREA"].includes(e.target?.tagName)) return;
      if (!isClickable.value) return;
      link.navigate.value?.(e);
      if (isGroupActivator) return;
      if (root.activatable.value) {
        activate(!isActivated.value, e);
      } else if (root.selectable.value) {
        select(!isSelected.value, e);
      } else if (props.value != null && !isLink.value) {
        select(!isSelected.value, e);
      }
    }
    function onKeyDown(e) {
      const target = e.target;
      if (["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (e.key === "Enter" || e.key === " " && !list?.filterable) {
        e.preventDefault();
        e.stopPropagation();
        e.target.dispatchEvent(new MouseEvent("click", e));
      }
    }
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = slots.title || props.title != null;
      const hasSubtitle = slots.subtitle || props.subtitle != null;
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      list?.updateHasPrepend(hasPrepend);
      if (props.activeColor) {
        deprecate("active-color", ["color", "base-color"]);
      }
      return withDirectives(createVNode(Tag, mergeProps(link.linkProps, {
        "ref": rootEl,
        "id": props.index !== void 0 && list ? `v-list-item-${list.uid}-${props.index}` : void 0,
        "class": ["v-list-item", {
          "v-list-item--active": isActive.value,
          "v-list-item--disabled": props.disabled,
          "v-list-item--link": isClickable.value,
          "v-list-item--nav": props.nav,
          "v-list-item--prepend": !hasPrepend && list?.hasPrepend.value,
          "v-list-item--slim": props.slim,
          "v-list-item--focus-visible": isTracked.value,
          [`${props.activeClass}`]: props.activeClass && isActive.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [{
          "--v-list-prepend-gap": convertToUnit(props.prependGap)
        }, colorStyles.value, dimensionStyles.value, props.style],
        "tabindex": props.tabindex ?? (isClickable.value ? list ? -2 : 0 : void 0),
        "aria-selected": ariaSelected.value,
        "role": role.value,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }), {
        default: () => [genOverlays(isClickable.value || isActive.value, "v-list-item"), hasPrepend && createElementVNode("div", {
          "key": "prepend",
          "class": "v-list-item__prepend"
        }, [!slots.prepend ? createElementVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
          "key": "prepend-avatar",
          "density": props.density,
          "image": props.prependAvatar
        }, null), props.prependIcon && createVNode(VIcon, {
          "key": "prepend-icon",
          "density": props.density,
          "icon": props.prependIcon
        }, null)]) : createVNode(VDefaultsProvider, {
          "key": "prepend-defaults",
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.prependAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.prependIcon
            },
            VListItemAction: {
              start: true
            },
            VCheckboxBtn: {
              density: props.density
            }
          }
        }, {
          default: () => [slots.prepend?.(slotProps.value)]
        }), createElementVNode("div", {
          "class": "v-list-item__spacer"
        }, null)]), createElementVNode("div", {
          "class": "v-list-item__content",
          "data-no-activator": ""
        }, [hasTitle && createVNode(VListItemTitle, {
          "key": "title"
        }, {
          default: () => [slots.title?.({
            title: props.title
          }) ?? toDisplayString(props.title)]
        }), hasSubtitle && createVNode(VListItemSubtitle, {
          "key": "subtitle"
        }, {
          default: () => [slots.subtitle?.({
            subtitle: props.subtitle
          }) ?? toDisplayString(props.subtitle)]
        }), slots.default?.(slotProps.value)]), hasAppend && createElementVNode("div", {
          "key": "append",
          "class": "v-list-item__append"
        }, [!slots.append ? createElementVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
          "key": "append-icon",
          "density": props.density,
          "icon": props.appendIcon
        }, null), props.appendAvatar && createVNode(VAvatar, {
          "key": "append-avatar",
          "density": props.density,
          "image": props.appendAvatar
        }, null)]) : createVNode(VDefaultsProvider, {
          "key": "append-defaults",
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.appendAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.appendIcon
            },
            VListItemAction: {
              end: true
            },
            VCheckboxBtn: {
              density: props.density
            }
          }
        }, {
          default: () => [slots.append?.(slotProps.value)]
        }), createElementVNode("div", {
          "class": "v-list-item__spacer"
        }, null)])]
      }), [[Ripple, isClickable.value && rippleOptions.value]]);
    });
    return {
      activate,
      isActivated,
      isGroupActivator,
      isSelected,
      list,
      select,
      root,
      id: uid,
      link
    };
  }
});
const makeVListSubheaderProps = propsFactory({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListSubheader");
const VListSubheader = genericComponent()({
  name: "VListSubheader",
  props: makeVListSubheaderProps(),
  setup(props, {
    slots
  }) {
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    useRender(() => {
      const hasText = !!(slots.default || props.title);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-list-subheader", {
          "v-list-subheader--inset": props.inset,
          "v-list-subheader--sticky": props.sticky
        }, textColorClasses.value, props.class]),
        "style": normalizeStyle([{
          textColorStyles
        }, props.style])
      }, {
        default: () => [hasText && createElementVNode("div", {
          "class": "v-list-subheader__text"
        }, [slots.default?.() ?? props.title])]
      });
    });
    return {};
  }
});
const makeVListChildrenProps = propsFactory({
  items: Array,
  returnObject: Boolean
}, "VListChildren");
const VListChildren = genericComponent()({
  name: "VListChildren",
  props: makeVListChildrenProps(),
  setup(props, {
    slots
  }) {
    createList();
    return () => slots.default?.() ?? props.items?.map(({
      children,
      props: itemProps,
      type,
      raw: item
    }, index) => {
      if (type === "divider") {
        return slots.divider?.({
          props: itemProps
        }) ?? createVNode(VDivider, itemProps, null);
      }
      if (type === "subheader") {
        return slots.subheader?.({
          props: itemProps
        }) ?? createVNode(VListSubheader, itemProps, null);
      }
      const slotsWithItem = {
        subtitle: slots.subtitle ? (slotProps) => slots.subtitle?.({
          ...slotProps,
          item
        }) : void 0,
        prepend: slots.prepend ? (slotProps) => slots.prepend?.({
          ...slotProps,
          item
        }) : void 0,
        append: slots.append ? (slotProps) => slots.append?.({
          ...slotProps,
          item
        }) : void 0,
        title: slots.title ? (slotProps) => slots.title?.({
          ...slotProps,
          item
        }) : void 0
      };
      const listGroupProps = VListGroup.filterProps(itemProps);
      return children ? createVNode(VListGroup, mergeProps(listGroupProps, {
        "value": props.returnObject ? item : itemProps?.value,
        "rawId": itemProps?.value
      }), {
        activator: ({
          props: activatorProps
        }) => {
          const listItemProps = mergeProps(itemProps, activatorProps, {
            value: props.returnObject ? item : itemProps.value
          });
          return slots.header ? slots.header({
            props: listItemProps
          }) : createVNode(VListItem, mergeProps(listItemProps, {
            "index": index
          }), slotsWithItem);
        },
        default: () => createVNode(VListChildren, {
          "items": children,
          "returnObject": props.returnObject
        }, slots)
      }) : slots.item ? slots.item({
        props: {
          ...itemProps,
          index
        }
      }) : createVNode(VListItem, mergeProps(itemProps, {
        "index": index,
        "value": props.returnObject ? item : itemProps.value
      }), slotsWithItem);
    });
  }
});
const makeItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  itemType: {
    type: [Boolean, String, Array, Function],
    default: "type"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items");
const itemTypes$1 = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function transformItem$1(props, item) {
  const title = getPropertyFromItem(item, props.itemTitle, item);
  const value = getPropertyFromItem(item, props.itemValue, title);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? typeof item === "object" && item != null && !Array.isArray(item) ? "children" in item ? omit(item, ["children"]) : item : void 0 : getPropertyFromItem(item, props.itemProps);
  let type = getPropertyFromItem(item, props.itemType, "item");
  if (!itemTypes$1.has(type)) {
    type = "item";
  }
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: String(_props.title ?? ""),
    value: _props.value,
    props: _props,
    children: type === "item" && Array.isArray(children) ? transformItems$1(props, children) : void 0,
    raw: item
  };
}
transformItem$1.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function transformItems$1(props, items) {
  const _props = pick(props, transformItem$1.neededProps);
  const array = [];
  for (const item of items) {
    array.push(transformItem$1(_props, item));
  }
  return array;
}
function useItems(props) {
  const items = computed(() => transformItems$1(props, props.items));
  const hasNullItem = computed(() => items.value.some((item) => item.value === null));
  const itemsMap = shallowRef(/* @__PURE__ */ new Map());
  const keylessItems = shallowRef([]);
  watchEffect(() => {
    const _items = items.value;
    const map = /* @__PURE__ */ new Map();
    const keyless = [];
    for (let i = 0; i < _items.length; i++) {
      const item = _items[i];
      if (isPrimitive(item.value) || item.value === null) {
        let values = map.get(item.value);
        if (!values) {
          values = [];
          map.set(item.value, values);
        }
        values.push(item);
      } else {
        keyless.push(item);
      }
    }
    itemsMap.value = map;
    keylessItems.value = keyless;
  });
  function transformIn(value) {
    const _items = itemsMap.value;
    const _allItems = items.value;
    const _keylessItems = keylessItems.value;
    const _hasNullItem = hasNullItem.value;
    const _returnObject = props.returnObject;
    const hasValueComparator = !!props.valueComparator;
    const valueComparator = props.valueComparator || deepEqual;
    const _props = pick(props, transformItem$1.neededProps);
    const returnValue = [];
    main: for (const v of value) {
      if (!_hasNullItem && v === null) continue;
      if (_returnObject && typeof v === "string") {
        returnValue.push(transformItem$1(_props, v));
        continue;
      }
      const fastItems = _items.get(v);
      if (hasValueComparator || !fastItems) {
        for (const item of hasValueComparator ? _allItems : _keylessItems) {
          if (valueComparator(v, item.value)) {
            returnValue.push(item);
            continue main;
          }
        }
        returnValue.push(transformItem$1(_props, v));
        continue;
      }
      returnValue.push(...fastItems);
    }
    return returnValue;
  }
  function transformOut(value) {
    return props.returnObject ? value.map(({
      raw
    }) => raw) : value.map(({
      value: value2
    }) => value2);
  }
  return {
    items,
    transformIn,
    transformOut
  };
}
const itemTypes = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function transformItem(props, item) {
  const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
  const value = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemValue, void 0);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? omit(item, ["children"]) : getPropertyFromItem(item, props.itemProps);
  let type = getPropertyFromItem(item, props.itemType, "item");
  if (!itemTypes.has(type)) {
    type = "item";
  }
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === "item" && children ? transformItems(props, children) : void 0,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
function useListItems(props) {
  const items = computed(() => transformItems(props, props.items));
  return {
    items
  };
}
const makeVListProps = propsFactory({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: IconValue,
  collapseIcon: IconValue,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  prependGap: [Number, String],
  indent: [Number, String],
  nav: Boolean,
  navigationStrategy: {
    type: String,
    default: "focus"
  },
  navigationIndex: Number,
  "onClick:open": EventProp(),
  "onClick:select": EventProp(),
  "onUpdate:opened": EventProp(),
  ...makeNestedProps({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeItemsProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VList");
const VList = genericComponent()({
  name: "VList",
  props: makeVListProps(),
  emits: {
    "update:selected": (value) => true,
    "update:activated": (value) => true,
    "update:opened": (value) => true,
    "update:navigationIndex": (value) => true,
    "click:open": (value) => true,
    "click:activate": (value) => true,
    "click:select": (value) => true
  },
  setup(props, {
    attrs,
    slots,
    emit
  }) {
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      children,
      open,
      parents,
      select,
      getPath
    } = useNested(props, {
      items,
      returnObject: toRef(() => props.returnObject),
      scrollToActive: toRef(() => props.navigationStrategy === "track"),
      valueComparator: toRef(() => props.valueComparator)
    });
    const lineClasses = toRef(() => props.lines ? `v-list--${props.lines}-line` : void 0);
    const activeColor = toRef(() => props.activeColor);
    const baseColor = toRef(() => props.baseColor);
    const color = toRef(() => props.color);
    const isSelectable = toRef(() => props.selectable || props.activatable);
    const navigationIndex = useProxiedModel(props, "navigationIndex", -1, (v) => v ?? -1);
    const uid = useId();
    createList({
      filterable: props.filterable,
      trackingIndex: navigationIndex,
      navigationStrategy: toRef(() => props.navigationStrategy),
      uid
    });
    watch(items, () => {
      if (props.navigationStrategy === "track") {
        navigationIndex.value = -1;
      }
    });
    provideDefaults({
      VListGroup: {
        activeColor,
        baseColor,
        color,
        expandIcon: toRef(() => props.expandIcon),
        collapseIcon: toRef(() => props.collapseIcon)
      },
      VListItem: {
        activeClass: toRef(() => props.activeClass),
        activeColor,
        baseColor,
        color,
        density: toRef(() => props.density),
        disabled: toRef(() => props.disabled),
        lines: toRef(() => props.lines),
        nav: toRef(() => props.nav),
        slim: toRef(() => props.slim),
        variant: toRef(() => props.variant),
        tabindex: toRef(() => props.navigationStrategy === "track" ? -1 : void 0)
      }
    });
    const isFocused = shallowRef(false);
    const contentRef = ref();
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      if (props.navigationStrategy === "track") {
        if (!~navigationIndex.value) {
          navigationIndex.value = getNextIndex("first");
        }
      } else if (!isFocused.value && !(e.relatedTarget && contentRef.value?.contains(e.relatedTarget))) focus();
    }
    function onBlur() {
      if (props.navigationStrategy === "track") {
        navigationIndex.value = -1;
      }
    }
    function getNavigationDirection(key) {
      switch (key) {
        case "ArrowDown":
          return "next";
        case "ArrowUp":
          return "prev";
        case "Home":
          return "first";
        case "End":
          return "last";
        default:
          return null;
      }
    }
    function getNextIndex(direction) {
      const itemCount = items.value.length;
      if (itemCount === 0) return -1;
      let nextIndex;
      if (direction === "first") {
        nextIndex = 0;
      } else if (direction === "last") {
        nextIndex = itemCount - 1;
      } else {
        nextIndex = navigationIndex.value + (direction === "next" ? 1 : -1);
        if (nextIndex < 0) nextIndex = itemCount - 1;
        if (nextIndex >= itemCount) nextIndex = 0;
      }
      const startIndex = nextIndex;
      let attempts = 0;
      while (attempts < itemCount) {
        const item = items.value[nextIndex];
        if (item && item.type !== "divider" && item.type !== "subheader") {
          return nextIndex;
        }
        nextIndex += direction === "next" || direction === "first" ? 1 : -1;
        if (nextIndex < 0) nextIndex = itemCount - 1;
        if (nextIndex >= itemCount) nextIndex = 0;
        if (nextIndex === startIndex) return -1;
        attempts++;
      }
      return -1;
    }
    function onKeydown(e) {
      const target = e.target;
      if (!contentRef.value || target.tagName === "INPUT" && ["Home", "End"].includes(e.key) || target.tagName === "TEXTAREA") {
        return;
      }
      const direction = getNavigationDirection(e.key);
      if (direction !== null) {
        e.preventDefault();
        if (props.navigationStrategy === "track") {
          const nextIndex = getNextIndex(direction);
          if (nextIndex !== -1) {
            navigationIndex.value = nextIndex;
          }
        } else {
          focus(direction);
        }
      }
    }
    function onMousedown(e) {
      isFocused.value = true;
    }
    function focus(location, options) {
      if (contentRef.value) {
        return focusChild(contentRef.value, location, options);
      }
    }
    useRender(() => {
      const indent = props.indent ?? (props.prependGap ? Number(props.prependGap) + 24 : void 0);
      const ariaMultiselectable = isSelectable.value ? attrs.ariaMultiselectable ?? !String(props.selectStrategy).startsWith("single-") : void 0;
      return createVNode(props.tag, {
        "ref": contentRef,
        "class": normalizeClass(["v-list", {
          "v-list--disabled": props.disabled,
          "v-list--nav": props.nav,
          "v-list--slim": props.slim
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class]),
        "style": normalizeStyle([{
          "--v-list-indent": convertToUnit(indent),
          "--v-list-group-prepend": indent ? "0px" : void 0,
          "--v-list-prepend-gap": convertToUnit(props.prependGap)
        }, backgroundColorStyles.value, dimensionStyles.value, props.style]),
        "tabindex": props.disabled ? -1 : 0,
        "role": isSelectable.value ? "listbox" : "list",
        "aria-activedescendant": props.navigationStrategy === "track" && navigationIndex.value >= 0 ? `v-list-item-${uid}-${navigationIndex.value}` : void 0,
        "aria-multiselectable": ariaMultiselectable,
        "onFocusin": onFocusin,
        "onFocusout": onFocusout,
        "onFocus": onFocus,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "onMousedown": onMousedown
      }, {
        default: () => [createVNode(VListChildren, {
          "items": items.value,
          "returnObject": props.returnObject
        }, slots)]
      });
    });
    return {
      open,
      select,
      focus,
      children,
      parents,
      getPath,
      navigationIndex
    };
  }
});
function useSticky({
  rootEl,
  isSticky,
  layoutItemStyles
}) {
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch({
  el,
  isActive,
  isTemporary,
  width,
  touchless,
  position
}) {
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    const transform = el.value?.style.transform ?? null;
    const transition = el.value?.style.transition ?? null;
    watchEffect(() => {
      el.value?.style.setProperty("transform", dragStyles.value?.transform || "none");
      el.value?.style.setProperty("transition", dragStyles.value?.transition || null);
    });
    onScopeDispose(() => {
      el.value?.style.setProperty("transform", transform);
      el.value?.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  let clearDelay = () => {
  };
  function runDelay(isOpening, options) {
    clearDelay?.();
    const delay = isOpening ? props.openDelay : props.closeDelay;
    const normalizedDelay = Math.max(options?.minDelay ?? 0, Number(delay ?? 0));
    return new Promise((resolve) => {
      clearDelay = defer(normalizedDelay, () => {
        cb?.(isOpening);
        resolve(isOpening);
      });
    });
  }
  function runOpenDelay() {
    return runDelay(true);
  }
  function runCloseDelay(options) {
    return runDelay(false, options);
  }
  return {
    clearDelay,
    runOpenDelay,
    runCloseDelay
  };
}
const makeFocusTrapProps = propsFactory({
  retainFocus: Boolean,
  captureFocus: Boolean,
  /** @deprecated */
  disableInitialFocus: Boolean
}, "focusTrap");
const registry = /* @__PURE__ */ new Map();
function useFocusTrap(props, {
  isActive,
  localTop,
  activatorEl,
  contentEl
}) {
  const trapId = /* @__PURE__ */ Symbol("trap");
  toRef(() => isActive.value && props.captureFocus && !props.disableInitialFocus);
  onScopeDispose(() => {
    registry.delete(trapId);
    return;
  });
}
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...omit(makeFocusTrapProps(), ["disableInitialFocus"]),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = toRef(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useFocusTrap(props, {
      isActive,
      localTop: isTemporary,
      contentEl: rootEl
    });
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      isActive,
      isTemporary,
      width,
      touchless: toRef(() => props.touchless),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize: width,
      active: readonly(isActive),
      disableTransitions: toRef(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    });
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createElementVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style],
        "inert": !isActive.value
      }, scopeId, attrs), {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-navigation-drawer__img"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "alt": "",
          "cover": true,
          "height": "inherit",
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              alt: "",
              cover: true,
              height: "inherit",
              src: props.image
            }
          }
        }, slots.image)]), slots.prepend && createElementVNode("div", {
          "class": "v-navigation-drawer__prepend"
        }, [slots.prepend?.()]), createElementVNode("div", {
          "class": "v-navigation-drawer__content"
        }, [slots.default?.()]), slots.append && createElementVNode("div", {
          "class": "v-navigation-drawer__append"
        }, [slots.append?.()])]
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createElementVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const makeVLabelProps = propsFactory({
  text: String,
  onClick: EventProp(),
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, {
    slots
  }) {
    useRender(() => createElementVNode("label", {
      "class": normalizeClass(["v-label", {
        "v-label--clickable": !!props.onClick
      }, props.class]),
      "style": normalizeStyle(props.style),
      "onClick": props.onClick
    }, [props.text, slots.default?.()]));
    return {};
  }
});
const VSelectionControlGroupSymbol = /* @__PURE__ */ Symbol.for("vuetify:selection-control-group");
const makeSelectionControlGroupProps = propsFactory({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeThemeProps()
}, "SelectionControlGroup");
const makeVSelectionControlGroupProps = propsFactory({
  ...makeSelectionControlGroupProps({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
const VSelectionControlGroup = genericComponent()({
  name: "VSelectionControlGroup",
  props: makeVSelectionControlGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    slots
  }) {
    const modelValue = useProxiedModel(props, "modelValue");
    const uid = useId();
    const id = toRef(() => props.id || `v-selection-control-group-${uid}`);
    const name = toRef(() => props.name || id.value);
    const updateHandlers = /* @__PURE__ */ new Set();
    provide(VSelectionControlGroupSymbol, {
      modelValue,
      forceUpdate: () => {
        updateHandlers.forEach((fn) => fn());
      },
      onForceUpdate: (cb) => {
        updateHandlers.add(cb);
        onScopeDispose(() => {
          updateHandlers.delete(cb);
        });
      }
    });
    provideDefaults({
      [props.defaultsTarget]: {
        color: toRef(() => props.color),
        disabled: toRef(() => props.disabled),
        density: toRef(() => props.density),
        error: toRef(() => props.error),
        inline: toRef(() => props.inline),
        modelValue,
        multiple: toRef(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
        name,
        falseIcon: toRef(() => props.falseIcon),
        trueIcon: toRef(() => props.trueIcon),
        readonly: toRef(() => props.readonly),
        ripple: toRef(() => props.ripple),
        type: toRef(() => props.type),
        valueComparator: toRef(() => props.valueComparator)
      }
    });
    useRender(() => createElementVNode("div", {
      "class": normalizeClass(["v-selection-control-group", {
        "v-selection-control-group--inline": props.inline
      }, props.class]),
      "style": normalizeStyle(props.style),
      "role": props.type === "radio" ? "radiogroup" : void 0
    }, [slots.default?.()]));
    return {};
  }
});
const makeVSelectionControlProps = propsFactory({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...makeComponentProps(),
  ...makeSelectionControlGroupProps()
}, "VSelectionControl");
function useSelectionControl(props) {
  const group = inject(VSelectionControlGroupSymbol, void 0);
  const {
    densityClasses
  } = useDensity(props);
  const modelValue = useProxiedModel(props, "modelValue");
  const trueValue = computed(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
  const falseValue = computed(() => props.falseValue !== void 0 ? props.falseValue : false);
  const isMultiple = computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
  const model = computed({
    get() {
      const val = group ? group.modelValue.value : modelValue.value;
      return isMultiple.value ? wrapInArray(val).some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
    },
    set(val) {
      if (props.readonly) return;
      const currentValue = val ? trueValue.value : falseValue.value;
      let newVal = currentValue;
      if (isMultiple.value) {
        newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
      }
      if (group) {
        group.modelValue.value = newVal;
      } else {
        modelValue.value = newVal;
      }
    }
  });
  const {
    textColorClasses,
    textColorStyles
  } = useTextColor(() => {
    if (props.error || props.disabled) return void 0;
    return model.value ? props.color : props.baseColor;
  });
  const {
    backgroundColorClasses,
    backgroundColorStyles
  } = useBackgroundColor(() => {
    return model.value && !props.error && !props.disabled ? props.color : props.baseColor;
  });
  const icon = computed(() => model.value ? props.trueIcon : props.falseIcon);
  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    backgroundColorClasses,
    backgroundColorStyles,
    icon
  };
}
const VSelectionControl = genericComponent()({
  name: "VSelectionControl",
  directives: {
    vRipple: Ripple
  },
  inheritAttrs: false,
  props: makeVSelectionControlProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    attrs,
    slots
  }) {
    const {
      group,
      densityClasses,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      backgroundColorClasses,
      backgroundColorStyles,
      trueValue
    } = useSelectionControl(props);
    const uid = useId();
    const isFocused = shallowRef(false);
    const isFocusVisible = shallowRef(false);
    const input = ref();
    const id = toRef(() => props.id || `input-${uid}`);
    const isInteractive = toRef(() => !props.disabled && !props.readonly);
    group?.onForceUpdate(() => {
      if (input.value) {
        input.value.checked = model.value;
      }
    });
    function onFocus(e) {
      if (props.disabled) return;
      isFocused.value = true;
      if (matchesSelector(e.target) !== false) {
        isFocusVisible.value = true;
      }
    }
    function onBlur() {
      isFocused.value = false;
      isFocusVisible.value = false;
    }
    function onClickLabel(e) {
      e.stopPropagation();
    }
    function onInput(e) {
      if (!isInteractive.value) {
        if (input.value) {
          input.value.checked = model.value;
        }
        return;
      }
      if (props.readonly && group) {
        nextTick(() => group.forceUpdate());
      }
      model.value = e.target.checked;
    }
    useRender(() => {
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const inputNode = createElementVNode("input", mergeProps({
        "ref": input,
        "checked": model.value,
        "disabled": !!props.disabled,
        "id": id.value,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onInput": onInput,
        "aria-disabled": !!props.disabled,
        "aria-label": props.label,
        "type": props.type,
        "value": trueValue.value,
        "name": props.name,
        "aria-checked": props.type === "checkbox" ? model.value : void 0
      }, inputAttrs), null);
      return createElementVNode("div", mergeProps({
        "class": ["v-selection-control", {
          "v-selection-control--dirty": model.value,
          "v-selection-control--disabled": props.disabled,
          "v-selection-control--error": props.error,
          "v-selection-control--focused": isFocused.value,
          "v-selection-control--focus-visible": isFocusVisible.value,
          "v-selection-control--inline": props.inline
        }, densityClasses.value, props.class]
      }, rootAttrs, {
        "style": props.style
      }), [createElementVNode("div", {
        "class": normalizeClass(["v-selection-control__wrapper", textColorClasses.value]),
        "style": normalizeStyle(textColorStyles.value)
      }, [slots.default?.({
        backgroundColorClasses,
        backgroundColorStyles
      }), withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-selection-control__input"])
      }, [slots.input?.({
        model,
        textColorClasses,
        textColorStyles,
        backgroundColorClasses,
        backgroundColorStyles,
        inputNode,
        icon: icon.value,
        props: {
          onFocus,
          onBlur,
          id: id.value
        }
      }) ?? createElementVNode(Fragment, null, [icon.value && createVNode(VIcon, {
        "key": "icon",
        "icon": icon.value
      }, null), inputNode])]), [[Ripple, !props.disabled && !props.readonly && props.ripple, null, {
        center: true,
        circle: true
      }]])]), label && createVNode(VLabel, {
        "for": id.value,
        "onClick": onClickLabel
      }, {
        default: () => [label]
      })]);
    });
    return {
      isFocused,
      input
    };
  }
});
const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio");
const VRadio = genericComponent()({
  name: "VRadio",
  props: makeVRadioProps(),
  setup(props, {
    slots
  }) {
    useRender(() => {
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "class": ["v-radio", props.class],
        "style": props.style,
        "type": "radio"
      }), slots);
    });
    return {};
  }
});
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon({
    name,
    color,
    ...attrs
  }) {
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    function onKeydown(e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      e.stopPropagation();
      callEvent(listener, new PointerEvent("click", e));
    }
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
    return createVNode(VIcon, mergeProps({
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener,
      "onKeydown": onKeydown,
      "color": color
    }, attrs), null);
  }
  return {
    InputIcon
  };
}
const makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, "VMessages");
const VMessages = genericComponent()({
  name: "VMessages",
  props: makeVMessagesProps(),
  setup(props, {
    slots
  }) {
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": normalizeClass(["v-messages", textColorClasses.value, props.class]),
      "style": normalizeStyle([textColorStyles.value, props.style])
    }, {
      default: () => [props.active && messages.value.map((message, i) => createElementVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});
const makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props, name = getCurrentInstanceName()) {
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = toRef(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}
const FormKey = /* @__PURE__ */ Symbol.for("vuetify:form");
function useForm(props) {
  const form = inject(FormKey, null);
  return {
    ...form,
    isReadonly: computed(() => !!(props?.readonly ?? form?.isReadonly.value)),
    isDisabled: computed(() => !!(props?.disabled ?? form?.isDisabled.value))
  };
}
const RulesSymbol = /* @__PURE__ */ Symbol.for("vuetify:rules");
function useRules(fn) {
  const rules = inject(RulesSymbol, null);
  if (!fn) {
    if (!rules) {
      throw new Error("Could not find Vuetify rules injection");
    }
    return rules.aliases;
  }
  return rules?.resolve(fn) ?? toRef(fn);
}
const makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props, name = getCurrentInstanceName(), id = useId()) {
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm(props);
  const rules = useRules(() => props.rules);
  const internalErrorMessages = ref([]);
  const isPristine = shallowRef(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const errorMessages = computed(() => {
    return props.errorMessages?.length ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, Number(props.maxErrors))) : internalErrorMessages.value;
  });
  const validateOn = computed(() => {
    let value = (props.validateOn ?? form.validateOn?.value) || "input";
    if (value === "lazy") value = "input lazy";
    if (value === "eager") value = "input eager";
    const set = new Set(value?.split(" ") ?? []);
    return {
      input: set.has("input"),
      blur: set.has("blur") || set.has("input") || set.has("invalid-input"),
      invalidInput: set.has("invalid-input"),
      lazy: set.has("lazy"),
      eager: set.has("eager")
    };
  });
  const isValid = computed(() => {
    if (props.error || props.errorMessages?.length) return false;
    if (!props.rules.length) return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = shallowRef(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: form.isDisabled.value,
      [`${name}--readonly`]: form.isReadonly.value
    };
  });
  getCurrentInstance("validation");
  const uid = computed(() => props.name ?? unref(id));
  useToggleScope(() => validateOn.value.input || validateOn.value.invalidInput && isValid.value === false, () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val) validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    watch(() => props.focused, (val) => {
      if (!val) validate();
    });
  });
  watch([isValid, errorMessages], () => {
    form.update?.(uid.value, isValid.value, errorMessages.value);
  });
  async function reset() {
    model.value = null;
    await nextTick();
    await resetValidation();
  }
  async function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      await validate(!validateOn.value.eager);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate(silent = false) {
    const results = [];
    isValidating.value = true;
    for (const rule of rules.value) {
      if (results.length >= Number(props.maxErrors ?? 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true) continue;
      if (result !== false && typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result || "");
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled: form.isDisabled,
    isReadonly: form.isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: true
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  indentDetails: {
    type: Boolean,
    default: null
  },
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...pick(makeDimensionProps(), ["maxWidth", "minWidth", "width"]),
  ...makeThemeProps(),
  ...makeValidationProps()
}, "VInput");
const VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    attrs,
    slots,
    emit
  }) {
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = useId();
    const id = computed(() => props.id || `input-${uid}`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const messages = computed(() => {
      if (props.errorMessages?.length || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    const hasMessages = toRef(() => messages.value.length > 0);
    const hasDetails = toRef(() => !props.hideDetails || props.hideDetails === "auto" && (hasMessages.value || !!slots.details));
    const messagesId = computed(() => hasDetails.value ? `${id.value}-messages` : void 0);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      hasDetails,
      reset,
      resetValidation,
      validate
    }));
    const color = toRef(() => {
      return props.error || props.disabled ? void 0 : props.focused ? props.color : props.baseColor;
    });
    const iconColor = toRef(() => {
      if (!props.iconColor) return void 0;
      return props.iconColor === true ? color.value : props.iconColor;
    });
    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      return createElementVNode("div", {
        "class": normalizeClass(["v-input", `v-input--${props.direction}`, {
          "v-input--center-affix": props.centerAffix,
          "v-input--focused": props.focused,
          "v-input--glow": props.glow,
          "v-input--hide-spin-buttons": props.hideSpinButtons,
          "v-input--indent-details": props.indentDetails
        }, densityClasses.value, themeClasses.value, rtlClasses.value, validationClasses.value, props.class]),
        "style": normalizeStyle([dimensionStyles.value, props.style])
      }, [hasPrepend && createElementVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [slots.prepend ? slots.prepend(slotProps.value) : props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend",
        "color": iconColor.value
      }, null)]), slots.default && createElementVNode("div", {
        "class": "v-input__control"
      }, [slots.default?.(slotProps.value)]), hasAppend && createElementVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [slots.append ? slots.append(slotProps.value) : props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append",
        "color": iconColor.value
      }, null)]), hasDetails.value && createElementVNode("div", {
        "id": messagesId.value,
        "class": "v-input__details",
        "role": "alert",
        "aria-live": "polite"
      }, [createVNode(VMessages, {
        "active": hasMessages.value,
        "messages": messages.value
      }, {
        message: slots.message
      }), slots.details?.(slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate,
      isValid,
      errorMessages
    };
  }
});
const Refs = /* @__PURE__ */ Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor) return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return void 0;
}
function forwardRefs(target, ...refs) {
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          const val = Reflect.get(ref2.value, key);
          return typeof val === "function" ? val.bind(ref2.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target2, key, value) {
      if (Reflect.has(target2, key)) {
        return Reflect.set(target2, key, value);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return Reflect.set(ref2.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor) return descriptor;
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
      for (const ref2 of refs) {
        if (!ref2.value) continue;
        const descriptor2 = getDescriptor(ref2.value, key) ?? ("_" in ref2.value ? getDescriptor(ref2.value._?.setupState, key) : void 0);
        if (descriptor2) return descriptor2;
      }
      for (const ref2 of refs) {
        const childRefs = ref2.value && ref2.value[Refs];
        if (!childRefs) continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref3 = queue.shift();
          const descriptor2 = getDescriptor(ref3.value, key);
          if (descriptor2) return descriptor2;
          const childRefs2 = ref3.value && ref3.value[Refs];
          if (childRefs2) queue.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}
const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...omit(makeVInputProps(), ["direction"]),
  ...omit(makeSelectionControlGroupProps(), ["multiple"]),
  trueIcon: {
    type: IconValue,
    default: "$radioOn"
  },
  falseIcon: {
    type: IconValue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup");
const VRadioGroup = genericComponent()({
  name: "VRadioGroup",
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    attrs,
    slots
  }) {
    const uid = useId();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, "modelValue");
    const inputRef = ref();
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode(VInput, mergeProps({
        "ref": inputRef,
        "class": ["v-radio-group", props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: ({
          id: id2,
          messagesId,
          isDisabled,
          isReadonly
        }) => createElementVNode(Fragment, null, [label && createVNode(VLabel, {
          "id": id2.value
        }, {
          default: () => [label]
        }), createVNode(VSelectionControlGroup, mergeProps(controlProps, {
          "id": id2.value,
          "aria-describedby": messagesId.value,
          "defaultsTarget": "VRadio",
          "trueIcon": props.trueIcon,
          "falseIcon": props.falseIcon,
          "type": props.type,
          "disabled": isDisabled.value,
          "readonly": isReadonly.value,
          "aria-labelledby": label ? id2.value : void 0,
          "multiple": false
        }, controlAttrs, {
          "modelValue": model.value,
          "onUpdate:modelValue": ($event) => model.value = $event
        }), slots)])
      });
    });
    return forwardRefs({}, inputRef);
  }
});
const makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: "$checkboxIndeterminate"
  },
  ...makeVSelectionControlProps({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn");
const VCheckboxBtn = genericComponent()({
  name: "VCheckboxBtn",
  props: makeVCheckboxBtnProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, {
    slots
  }) {
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    const falseIcon = toRef(() => {
      return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = toRef(() => {
      return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => {
      const controlProps = omit(VSelectionControl.filterProps(props), ["modelValue"]);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onChange],
        "class": ["v-checkbox-btn", props.class],
        "style": props.style,
        "type": "checkbox",
        "falseIcon": falseIcon.value,
        "trueIcon": trueIcon.value,
        "aria-checked": indeterminate.value ? "mixed" : void 0
      }), slots);
    });
    return {};
  }
});
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function anchorToPoint(anchor, box) {
  if (anchor.side === "top" || anchor.side === "bottom") {
    const {
      side,
      align
    } = anchor;
    const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
    const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === "left" || anchor.side === "right") {
    const {
      side,
      align
    } = anchor;
    const x = side === "left" ? 0 : side === "right" ? box.width : side;
    const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}
const locationStrategies = {
  static: staticLocationStrategy,
  // specific viewport position, usually centered
  connected: connectedLocationStrategy
  // connected to a certain element
};
const makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (val) => typeof val === "function" || val in locationStrategies
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array],
  stickToTarget: Boolean,
  viewportMargin: {
    type: [Number, String],
    default: 12
  }
}, "VOverlay-location-strategies");
function useLocationStrategies(props, data) {
  const contentStyles = ref({});
  const updateLocation = ref();
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
}
function getIntrinsicSize(el, isRtl) {
  const contentBox = nullifyTransforms(el);
  if (isRtl) {
    contentBox.x += parseFloat(el.style.right || 0);
  } else {
    contentBox.x -= parseFloat(el.style.left || 0);
  }
  contentBox.y -= parseFloat(el.style.top || 0);
  return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
  const activatorFixed = Array.isArray(data.target.value) || isFixedPosition(data.target.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: "fixed",
      top: 0,
      [data.isRtl.value ? "right" : "left"]: 0
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
    const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
    return computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === "string") {
      const offset2 = props.offset.split(" ").map(parseFloat);
      if (offset2.length < 2) offset2.push(0);
      return offset2;
    }
    return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  let lastFrame = -1;
  const flipped = new CircularBuffer(4);
  const observer = new ResizeObserver(() => {
    if (!observe) return;
    requestAnimationFrame((newTime) => {
      if (newTime !== lastFrame) flipped.clear();
      requestAnimationFrame((newNewTime) => {
        lastFrame = newNewTime;
      });
    });
    if (flipped.isFull) {
      const values = flipped.values();
      if (deepEqual(values.at(-1), values.at(-3)) && !deepEqual(values.at(-1), values.at(-2))) {
        return;
      }
    }
    const result = updateLocation();
    if (result) flipped.push(result.flipped);
  });
  let targetBox = new Box({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  watch(data.target, (newTarget, oldTarget) => {
    if (oldTarget && !Array.isArray(oldTarget)) observer.unobserve(oldTarget);
    if (!Array.isArray(newTarget)) {
      if (newTarget) observer.observe(newTarget);
    } else if (!deepEqual(newTarget, oldTarget)) {
      updateLocation();
    }
  }, {
    immediate: true
  });
  watch(data.contentEl, (newContentEl, oldContentEl) => {
    if (oldContentEl) observer.unobserve(oldContentEl);
    if (newContentEl) observer.observe(newContentEl);
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    observer.disconnect();
  });
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => observe = true);
    if (!data.target.value || !data.contentEl.value) return;
    if (Array.isArray(data.target.value) || data.target.value.offsetParent || data.target.value.getClientRects().length) {
      targetBox = getTargetBox(data.target.value);
    }
    const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
    const scrollParents = getScrollParents(data.contentEl.value);
    const viewportMargin = Number(props.viewportMargin);
    if (!scrollParents.length) {
      scrollParents.push((void 0).documentElement);
      if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
        contentBox.x -= parseFloat((void 0).documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
        contentBox.y -= parseFloat((void 0).documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el) => {
      const scrollBox = getElementBox(el);
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, void 0);
    if (props.stickToTarget) {
      viewport.x += Math.min(viewportMargin, targetBox.x);
      viewport.y += Math.min(viewportMargin, targetBox.y);
      viewport.width = Math.max(viewport.width - viewportMargin * 2, targetBox.x + targetBox.width - viewportMargin);
      viewport.height = Math.max(viewport.height - viewportMargin * 2, targetBox.y + targetBox.height - viewportMargin);
    } else {
      viewport.x += viewportMargin;
      viewport.y += viewportMargin;
      viewport.width -= viewportMargin * 2;
      viewport.height -= viewportMargin * 2;
    }
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x: x2,
        y: y2
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case "top":
          y2 -= offset.value[0];
          break;
        case "bottom":
          y2 += offset.value[0];
          break;
        case "left":
          x2 -= offset.value[0];
          break;
        case "right":
          x2 += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case "top":
          y2 -= offset.value[1];
          break;
        case "bottom":
          y2 += offset.value[1];
          break;
        case "left":
          x2 -= offset.value[1];
          break;
        case "right":
          x2 += offset.value[1];
          break;
      }
      box.x += x2;
      box.y += y2;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x: x2,
        y: y2
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped2 = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;
      {
        const axis2 = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ["x", "y"].forEach((key) => {
          if (key === "x" && hasOverflowX && !flipped2.x || key === "y" && hasOverflowY && !flipped2.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
            newPlacement.anchor = flip(newPlacement.anchor);
            newPlacement.origin = flip(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped2[key] = true;
            }
          }
        });
        if (reset) continue;
      }
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }
      {
        const overflows2 = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows2.x.before - overflows2.x.after;
        available.y = viewport.height - overflows2.y.before - overflows2.y.after;
        x += overflows2.x.before;
        contentBox.x += overflows2.x.before;
        y += overflows2.y.before;
        contentBox.y += overflows2.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: convertToUnit(pixelRound(y)),
      left: data.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
      right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
      minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox,
      flipped: flipped2
    };
  }
  watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  nextTick(() => {
    const result = updateLocation();
    if (!result) return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}
let clean = true;
const frames = [];
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
let raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame) frame();
    if (frames.length) run();
    else clean = true;
  });
}
const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (val) => typeof val === "function" || val in scrollStrategies
  }
}, "VOverlay-scroll-strategies");
function closeScrollStrategy(data) {
  function onScroll(e) {
    data.isActive.value = false;
  }
  bindScroll(getTargetEl(data.target.value, data.contentEl.value), onScroll);
}
function blockScrollStrategy(data, props) {
  const offsetParent = data.root.value?.offsetParent;
  const target = getTargetEl(data.target.value, data.contentEl.value);
  const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(target, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
  const scrollbarWidth = (void 0).innerWidth - (void 0).documentElement.offsetWidth;
  const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || (void 0).documentElement);
  if (scrollableParent) {
    data.root.value.classList.add("v-overlay--scroll-blocked");
  }
  scrollElements.forEach((el, i) => {
    el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
    el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
    if (el !== (void 0).documentElement || getComputedStyle(el).overflowY !== "scroll") {
      el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
    }
    el.classList.add("v-overlay-scroll-blocked");
  });
  onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
      const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
      const scrollBehavior = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.style.removeProperty("--v-body-scroll-x");
      el.style.removeProperty("--v-body-scroll-y");
      el.style.removeProperty("--v-scrollbar-offset");
      el.classList.remove("v-overlay-scroll-blocked");
      el.scrollLeft = -x;
      el.scrollTop = -y;
      el.style.scrollBehavior = scrollBehavior;
    });
    if (scrollableParent) {
      data.root.value.classList.remove("v-overlay--scroll-blocked");
    }
  });
}
function repositionScrollStrategy(data, props, scope) {
  let slow = false;
  let raf2 = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      const start = performance.now();
      data.updateLocation.value?.(e);
      const time = performance.now() - start;
      slow = time / (1e3 / 60) > 2;
    });
  }
  ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
    scope.run(() => {
      bindScroll(getTargetEl(data.target.value, data.contentEl.value), (e) => {
        if (slow) {
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  onScopeDispose(() => {
    typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
    cancelAnimationFrame(raf2);
  });
}
function getTargetEl(target, contentEl) {
  return Array.isArray(target) ? (void 0).elementsFromPoint(...target).find((el) => !contentEl?.contains(el)) : target ?? contentEl;
}
function bindScroll(el, onScroll) {
  const scrollElements = [void 0, ...getScrollParents(el)];
  scrollElements.forEach((el2) => {
    el2.addEventListener("scroll", onScroll, {
      passive: true
    });
  });
  onScopeDispose(() => {
    scrollElements.forEach((el2) => {
      el2.removeEventListener("scroll", onScroll);
    });
  });
}
const VMenuSymbol = /* @__PURE__ */ Symbol.for("vuetify:v-menu");
const makeActivatorProps = propsFactory({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...makeDelayProps()
}, "VOverlay-activator");
function useActivator(props, {
  isActive,
  isTop,
  contentEl
}) {
  const vm = getCurrentInstance("useActivator");
  const activatorEl = ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay(props, (value) => {
    if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
      if (isActive.value !== value) {
        firstEnter = true;
      }
      isActive.value = value;
    }
  });
  const cursorTarget = ref();
  const availableEvents = {
    onClick: (e) => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      if (!isActive.value) {
        cursorTarget.value = [e.clientX, e.clientY];
      }
      isActive.value = !isActive.value;
    },
    onMouseenter: (e) => {
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onMouseleave: (e) => {
      isHovered = false;
      runCloseDelay();
    },
    onFocus: (e) => {
      if (matchesSelector(e.target) === false) ;
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onBlur: (e) => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay({
        minDelay: 1
      });
    }
  };
  const activatorEvents = computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.onClick = availableEvents.onClick;
    }
    if (props.openOnHover) {
      events.onMouseenter = availableEvents.onMouseenter;
      events.onMouseleave = availableEvents.onMouseleave;
    }
    if (openOnFocus.value) {
      events.onFocus = availableEvents.onFocus;
      events.onBlur = availableEvents.onBlur;
    }
    return events;
  });
  const contentEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (openOnFocus.value) {
      events.onFocusin = (e) => {
        if (!e.target.matches(":focus-visible")) return;
        isFocused = true;
        runOpenDelay();
      };
      events.onFocusout = () => {
        isFocused = false;
        runCloseDelay({
          minDelay: 1
        });
      };
    }
    if (props.closeOnContentClick) {
      const menu = inject(VMenuSymbol, null);
      events.onClick = () => {
        isActive.value = false;
        menu?.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  watch(isTop, (val) => {
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered)) && !contentEl.value?.contains((void 0).activeElement)) {
      runCloseDelay();
    }
  });
  watch(isActive, (val) => {
    if (!val) {
      setTimeout(() => {
        cursorTarget.value = void 0;
      });
    }
  }, {
    flush: "post"
  });
  const activatorRef = templateRef();
  watchEffect(() => {
    if (!activatorRef.value) return;
    nextTick(() => {
      activatorEl.value = activatorRef.el;
    });
  });
  const targetRef = templateRef();
  const target = computed(() => {
    if (props.target === "cursor" && cursorTarget.value) return cursorTarget.value;
    if (targetRef.value) return targetRef.el;
    return getTarget(props.target, vm) || activatorEl.value;
  });
  const targetEl = computed(() => {
    return Array.isArray(target.value) ? void 0 : target.value;
  });
  watch(() => !!props.activator, (val) => {
  }, {
    flush: "post",
    immediate: true
  });
  onScopeDispose(() => {
  });
  return {
    activatorEl,
    activatorRef,
    target,
    targetEl,
    targetRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function getTarget(selector, vm) {
  if (!selector) return;
  let target;
  if (selector === "parent") {
    let el = vm?.proxy?.$el?.parentNode;
    while (el?.hasAttribute("data-no-activator")) {
      el = el.parentNode;
    }
    target = el;
  } else if (typeof selector === "string") {
    target = (void 0).querySelector(selector);
  } else if ("$el" in selector) {
    target = selector.$el;
  } else {
    target = selector;
  }
  return target;
}
function useHydration() {
  return shallowRef(false);
}
const StackSymbol = /* @__PURE__ */ Symbol.for("vuetify:stack");
const globalStack = reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance("useStack");
  const createStackEntry = !disableGlobalStack;
  const parent = inject(StackSymbol, void 0);
  const stack = reactive({
    activeChildren: /* @__PURE__ */ new Set()
  });
  provide(StackSymbol, stack);
  const _zIndex = shallowRef(Number(toValue(zIndex)));
  useToggleScope(isActive, () => {
    const lastZIndex = globalStack.at(-1)?.[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : Number(toValue(zIndex));
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent?.activeChildren.add(vm.uid);
    onScopeDispose(() => {
      if (createStackEntry) {
        const idx = toRaw(globalStack).findIndex((v) => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent?.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = shallowRef(true);
  if (createStackEntry) {
    watchEffect(() => {
      const _isTop = globalStack.at(-1)?.[0] === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = toRef(() => !stack.activeChildren.size);
  return {
    globalTop: readonly(globalTop),
    localTop,
    stackStyles: toRef(() => ({
      zIndex: _zIndex.value
    }))
  };
}
function useTeleport(target) {
  const teleportTarget = computed(() => {
    target();
    return void 0;
  });
  return {
    teleportTarget
  };
}
function defaultConditional() {
  return true;
}
function checkEvent(e, el, binding) {
  if (!e || checkIsActive(e, binding) === false) return false;
  const root = attachedRoot(el);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target) return false;
  const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
  elements.push(el);
  return !elements.some((el2) => el2?.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el, binding) {
  const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
  e.shadowTarget = e.target;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el, callback) {
  const root = attachedRoot(el);
  callback(void 0);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}
const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(el, binding) {
    const onClick = (e) => directive(e, el, binding);
    const onMousedown = (e) => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };
    handleShadow(el, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });
    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: false
      };
    }
    el._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  beforeUnmount(el, binding) {
    if (!el._clickOutside) return;
    handleShadow(el, (app) => {
      if (!app || !el._clickOutside?.[binding.instance.$.uid]) return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[binding.instance.$.uid];
      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });
    delete el._clickOutside[binding.instance.$.uid];
  }
};
function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && createElementVNode("div", mergeProps({
      "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeFocusTrapProps(),
  ...makeThemeProps(),
  ...makeTransitionProps()
}, "VOverlay");
const VOverlay = genericComponent()({
  name: "VOverlay",
  directives: {
    vClickOutside: ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...omit(makeVOverlayProps(), ["disableInitialFocus"])
  },
  emits: {
    "click:outside": (e) => true,
    "update:modelValue": (value) => true,
    keydown: (e) => true,
    afterEnter: () => true,
    afterLeave: () => true
  },
  setup(props, {
    slots,
    attrs,
    emit
  }) {
    const vm = getCurrentInstance("VOverlay");
    const root = ref();
    const scrimEl = ref();
    const contentEl = ref();
    const model = useProxiedModel(props, "modelValue");
    const isActive = computed({
      get: () => model.value,
      set: (v) => {
        if (!(v && props.disabled)) model.value = v;
      }
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      hasContent,
      onAfterLeave: _onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    });
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, () => props.zIndex, props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      target,
      targetRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop,
      contentEl
    });
    const {
      teleportTarget
    } = useTeleport(() => {
      const target2 = props.attach || props.contained;
      if (target2) return target2;
      const rootNode = activatorEl?.value?.getRootNode() || vm.proxy?.$el?.getRootNode();
      if (rootNode instanceof ShadowRoot) return rootNode;
      return false;
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, (v) => {
      if (v) isActive.value = false;
    });
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies();
    function onClickOutside(e) {
      emit("click:outside", e);
      if (!props.persistent) isActive.value = false;
      else animateClick();
    }
    function closeConditional(e) {
      return isActive.value && localTop.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!props.scrim || e.target === scrimEl.value || e instanceof MouseEvent && e.shadowTarget === scrimEl.value);
    }
    useFocusTrap(props, {
      isActive,
      localTop,
      contentEl,
      activatorEl
    });
    function onKeydownSelf(e) {
      if (e.key === "Escape" && !globalTop.value) return;
      emit("keydown", e);
    }
    useRouter();
    useToggleScope(() => props.closeOnBack, () => {
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== (void 0).scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });
    function animateClick() {
      if (props.noClickAnimation) return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    function onAfterEnter() {
      emit("afterEnter");
    }
    function onAfterLeave() {
      _onAfterLeave();
      emit("afterLeave");
    }
    useRender(() => createElementVNode(Fragment, null, [slots.activator?.({
      isActive: isActive.value,
      targetRef,
      props: mergeProps({
        ref: activatorRef
      }, activatorEvents.value, props.activatorProps)
    }), isMounted.value && hasContent.value && createVNode(Teleport, {
      "disabled": !teleportTarget.value,
      "to": teleportTarget.value
    }, {
      default: () => [createElementVNode("div", mergeProps({
        "class": ["v-overlay", {
          "v-overlay--absolute": props.absolute || props.contained,
          "v-overlay--active": isActive.value,
          "v-overlay--contained": props.contained
        }, themeClasses.value, rtlClasses.value, props.class],
        "style": [stackStyles.value, {
          "--v-overlay-opacity": props.opacity,
          top: convertToUnit(top.value)
        }, props.style],
        "ref": root,
        "onKeydown": onKeydownSelf
      }, scopeId, attrs), [createVNode(Scrim, mergeProps({
        "color": scrimColor,
        "modelValue": isActive.value && !!props.scrim,
        "ref": scrimEl
      }, scrimEvents.value), null), createVNode(MaybeTransition, {
        "appear": true,
        "persisted": true,
        "transition": props.transition,
        "target": target.value,
        "onAfterEnter": onAfterEnter,
        "onAfterLeave": onAfterLeave
      }, {
        default: () => [withDirectives(createElementVNode("div", mergeProps({
          "ref": contentEl,
          "class": ["v-overlay__content", props.contentClass],
          "style": [dimensionStyles.value, contentStyles.value]
        }, contentEvents.value, props.contentProps), [slots.default?.({
          isActive
        })]), [[vShow, isActive.value], [ClickOutside, {
          handler: onClickOutside,
          closeConditional,
          include: () => [activatorEl.value]
        }]])]
      })])]
    })]));
    return {
      activatorEl,
      scrimEl,
      target,
      animateClick,
      contentEl,
      rootEl: root,
      globalTop,
      localTop,
      updateLocation
    };
  }
});
const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...omit(makeVOverlayProps({
    captureFocus: true,
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    slots
  }) {
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const {
      isRtl
    } = useRtl();
    const uid = useId();
    const id = toRef(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(/* @__PURE__ */ new Set());
    provide(VMenuSymbol, {
      register() {
        openChildren.value.add(uid);
      },
      unregister() {
        openChildren.value.delete(uid);
      },
      closeParents(e) {
        setTimeout(() => {
          if (!openChildren.value.size && !props.persistent && (e == null || overlay.value?.contentEl && !isClickInsideElement(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent?.closeParents();
          }
        }, 40);
      }
    });
    watch(isActive, (val) => {
      val ? parent?.register() : parent?.unregister();
    }, {
      immediate: true
    });
    function onClickOutside(e) {
      parent?.closeParents(e);
    }
    function onKeydown(e) {
      if (props.disabled) return;
      if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
        if (e.key === "Enter" && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest("form"))) return;
        if (e.key === "Enter") e.preventDefault();
        const nextElement = getNextElement(focusableChildren(overlay.value?.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement && !props.retainFocus) {
          isActive.value = false;
          overlay.value?.activatorEl?.focus();
        }
      } else if (props.submenu && e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
        isActive.value = false;
        overlay.value?.activatorEl?.focus();
      }
    }
    function onActivatorKeydown(e) {
      if (props.disabled) return;
      const el = overlay.value?.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "prev");
        } else if (props.submenu) {
          if (e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
            isActive.value = false;
          } else if (e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight")) {
            e.preventDefault();
            focusChild(el, "first");
          }
        }
      } else if (props.submenu ? e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-controls": id.value,
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "location": props.location ?? (props.submenu ? "end" : "bottom"),
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: (...args) => createVNode(VDefaultsProvider, {
          "root": "VMenu"
        }, {
          default: () => [slots.default?.(...args)]
        })
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, {
    slots
  }) {
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style])
    }, slots));
    return {};
  }
});
const makeVCounterProps = propsFactory({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition
    }
  })
}, "VCounter");
const VCounter = genericComponent()({
  name: "VCounter",
  functional: true,
  props: makeVCounterProps(),
  setup(props, {
    slots
  }) {
    const counter = toRef(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-counter", {
          "text-error": props.max && !props.disabled && parseFloat(props.value) > parseFloat(props.max)
        }, props.class]),
        "style": normalizeStyle(props.style)
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vShow, props.active]])]
    }));
    return {};
  }
});
const makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, "VFieldLabel");
const VFieldLabel = genericComponent()({
  name: "VFieldLabel",
  props: makeVFieldLabelProps(),
  setup(props, {
    slots
  }) {
    useRender(() => createVNode(VLabel, {
      "class": normalizeClass(["v-field-label", {
        "v-field-label--floating": props.floating
      }, props.class]),
      "style": normalizeStyle(props.style)
    }, slots));
    return {};
  }
});
const allowedVariants = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"];
const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (v) => allowedVariants.includes(v)
  },
  "onClick:clear": EventProp(),
  "onClick:appendInner": EventProp(),
  "onClick:prependInner": EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, "VField");
const VField = genericComponent()({
  name: "VField",
  inheritAttrs: false,
  props: {
    id: String,
    details: Boolean,
    labelId: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true
  },
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = toRef(() => props.dirty || props.active);
    const hasLabel = toRef(() => !!(props.label || slots.label));
    const hasFloatingLabel = toRef(() => !props.singleLine && hasLabel.value);
    const uid = useId();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = toRef(() => !props.details ? void 0 : `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const color = computed(() => {
      return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
    });
    const iconColor = computed(() => {
      if (props.iconColor === true || !props.iconColor && props.glow && isFocused.value) return color.value;
      if (!props.iconColor || props.glow && !isFocused.value) return void 0;
      return props.iconColor;
    });
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    watch(isActive, (val) => {
      if (hasFloatingLabel.value && true) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = new Box(targetEl);
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : void 0;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
          const color2 = targetStyle.getPropertyValue("color");
          el.style.visibility = "visible";
          targetEl.style.visibility = "hidden";
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color: color2,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? "normal" : "reverse"
          }).finished.then(() => {
            el.style.removeProperty("visibility");
            targetEl.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      iconColor,
      blur,
      focus
    }));
    const floatingLabelProps = toRef(() => {
      const ariaHidden = !isActive.value;
      return {
        "aria-hidden": ariaHidden,
        for: ariaHidden ? void 0 : id.value
      };
    });
    const mainLabelProps = toRef(() => {
      const ariaHidden = hasFloatingLabel.value && isActive.value;
      return {
        "aria-hidden": ariaHidden,
        for: ariaHidden ? void 0 : id.value
      };
    });
    function onClick(e) {
      if (e.target !== (void 0).activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      const isOutlined = props.variant === "outlined";
      const hasPrepend = !!(slots["prepend-inner"] || props.prependInnerIcon);
      const hasClear = !!(props.clearable || slots.clear) && !props.disabled;
      const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
      const label = () => slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createElementVNode("div", mergeProps({
        "class": ["v-field", {
          "v-field--active": isActive.value,
          "v-field--appended": hasAppend,
          "v-field--center-affix": props.centerAffix ?? !isPlainOrUnderlined.value,
          "v-field--disabled": props.disabled,
          "v-field--dirty": props.dirty,
          "v-field--error": props.error,
          "v-field--glow": props.glow,
          "v-field--flat": props.flat,
          "v-field--has-background": !!props.bgColor,
          "v-field--persistent-clear": props.persistentClear,
          "v-field--prepended": hasPrepend,
          "v-field--reverse": props.reverse,
          "v-field--single-line": props.singleLine,
          "v-field--no-label": !label(),
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [createElementVNode("div", {
        "class": "v-field__overlay"
      }, null), createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
      }, {
        default: slots.loader
      }), hasPrepend && createElementVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [slots["prepend-inner"] ? slots["prepend-inner"](slotProps.value) : props.prependInnerIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner",
        "color": iconColor.value
      }, null)]), createElementVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(props.variant) && hasFloatingLabel.value && createVNode(VFieldLabel, mergeProps({
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true
      }, floatingLabelProps.value, {
        "style": textColorStyles.value
      }), {
        default: () => [label()]
      }), hasLabel.value && createVNode(VFieldLabel, mergeProps({
        "key": "label",
        "ref": labelRef,
        "id": props.labelId
      }, mainLabelProps.value), {
        default: () => [label()]
      }), slots.default?.({
        ...slotProps.value,
        props: {
          id: id.value,
          class: "v-field__input",
          "aria-describedby": messagesId.value
        },
        focus,
        blur
      }) ?? createElementVNode("div", {
        "id": id.value,
        "class": "v-field__input",
        "aria-describedby": messagesId.value
      }, null)]), hasClear && createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [withDirectives(createElementVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [createVNode(VDefaultsProvider, {
          "defaults": {
            VIcon: {
              icon: props.clearIcon
            }
          }
        }, {
          default: () => [slots.clear ? slots.clear({
            ...slotProps.value,
            props: {
              onFocus: focus,
              onBlur: blur,
              onClick: props["onClick:clear"],
              tabindex: -1
            }
          }) : createVNode(InputIcon, {
            "name": "clear",
            "onFocus": focus,
            "onBlur": blur,
            "tabindex": -1
          }, null)]
        })]), [[vShow, props.dirty]])]
      }), hasAppend && createElementVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [slots["append-inner"] ? slots["append-inner"](slotProps.value) : props.appendInnerIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner",
        "color": iconColor.value
      }, null)]), createElementVNode("div", {
        "class": normalizeClass(["v-field__outline", textColorClasses.value]),
        "style": normalizeStyle(textColorStyles.value)
      }, [isOutlined && createElementVNode(Fragment, null, [createElementVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasFloatingLabel.value && createElementVNode("div", {
        "class": "v-field__outline__notch"
      }, [createVNode(VFieldLabel, mergeProps({
        "ref": floatingLabelRef,
        "floating": true
      }, floatingLabelProps.value), {
        default: () => [label()]
      })]), createElementVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasFloatingLabel.value && createVNode(VFieldLabel, mergeProps({
        "ref": floatingLabelRef,
        "floating": true
      }, floatingLabelProps.value), {
        default: () => [label()]
      })])]);
    });
    return {
      controlRef,
      fieldIconColor: iconColor
    };
  }
});
const makeAutocompleteProps = propsFactory({
  autocomplete: String
}, "autocomplete");
function useAutocomplete(props) {
  const uniqueId = useId();
  const reloadTrigger = shallowRef(0);
  const isSuppressing = toRef(() => props.autocomplete === "suppress");
  const fieldName = toRef(() => {
    if (!props.name) return void 0;
    return isSuppressing.value ? `${props.name}-${uniqueId}-${reloadTrigger.value}` : props.name;
  });
  const fieldAutocomplete = toRef(() => {
    return isSuppressing.value ? "off" : props.autocomplete;
  });
  return {
    isSuppressing,
    fieldAutocomplete,
    fieldName,
    update: () => reloadTrigger.value = (/* @__PURE__ */ new Date()).getTime()
  };
}
function useAutofocus(props) {
  function onIntersect(isIntersecting, entries) {
    if (!props.autofocus || !isIntersecting) return;
    const el = entries[0].target;
    const target = el.matches("input,textarea") ? el : el.querySelector("input,textarea");
    target?.focus();
  }
  return {
    onIntersect
  };
}
const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeAutocompleteProps(),
  ...omit(makeVInputProps(), ["direction"]),
  ...makeVFieldProps()
}, "VTextField");
const VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    vIntersect: Intersect
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    const model = useProxiedModel(props, "modelValue", void 0, (v) => {
      if (Object.is(v, -0)) return "-0";
      return v;
    });
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      onIntersect
    } = useAutofocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : (model.value ?? "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const autocomplete = useAutocomplete(props);
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (autocomplete.isSuppressing.value) {
        autocomplete.update();
      }
      if (!isFocused.value) focus();
      nextTick(() => {
        if (inputRef.value !== (void 0).activeElement) {
          inputRef.value?.focus();
        }
      });
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value) return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      emit("click:control", e);
    }
    function onClear(e, reset) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        reset();
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      if (!(props.modelModifiers?.trim && ["text", "search", "password", "tel", "url"].includes(props.type))) {
        model.value = el.value;
        return;
      }
      const value = el.value;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      model.value = value;
      nextTick(() => {
        let offset = 0;
        if (value.trimStart().length === el.value.length) {
          offset = value.length - el.value.length;
        }
        if (start != null) el.selectionStart = start - offset;
        if (end != null) el.selectionEnd = end - offset;
      });
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = VField.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value,
        "indentDetails": props.indentDetails ?? !isPlainOrUnderlined.value
      }), {
        ...slots,
        default: ({
          id,
          isDisabled,
          isDirty,
          isReadonly,
          isValid,
          hasDetails: hasDetails2,
          reset
        }) => createVNode(VField, mergeProps({
          "ref": vFieldRef,
          "onMousedown": onControlMousedown,
          "onClick": onControlClick,
          "onClick:clear": (e) => onClear(e, reset),
          "role": props.role
        }, omit(fieldProps, ["onClick:clear"]), {
          "id": id.value,
          "labelId": `${id.value}-label`,
          "active": isActive.value || isDirty.value,
          "dirty": isDirty.value || props.dirty,
          "disabled": isDisabled.value,
          "focused": isFocused.value,
          "details": hasDetails2.value,
          "error": isValid.value === false
        }), {
          ...slots,
          default: ({
            props: {
              class: fieldClass,
              ...slotProps
            },
            controlRef
          }) => {
            const inputNode = createElementVNode("input", mergeProps({
              "ref": (val) => inputRef.value = controlRef.value = val,
              "value": model.value,
              "onInput": onInput,
              "autofocus": props.autofocus,
              "readonly": isReadonly.value,
              "disabled": isDisabled.value,
              "name": autocomplete.fieldName.value,
              "autocomplete": autocomplete.fieldAutocomplete.value,
              "placeholder": props.placeholder,
              "size": 1,
              "role": props.role,
              "type": props.type,
              "onFocus": focus,
              "onBlur": blur,
              "aria-labelledby": `${id.value}-label`
            }, slotProps, inputAttrs), null);
            return createElementVNode(Fragment, null, [props.prefix && createElementVNode("span", {
              "class": "v-text-field__prefix"
            }, [createElementVNode("span", {
              "class": "v-text-field__prefix__text"
            }, [props.prefix])]), withDirectives(slots.default ? createElementVNode("div", {
              "class": normalizeClass(fieldClass),
              "data-no-activator": ""
            }, [slots.default({
              id
            }), inputNode]) : cloneVNode(inputNode, {
              class: fieldClass
            }), [[Intersect, onIntersect, null, {
              once: true
            }]]), props.suffix && createElementVNode("span", {
              "class": "v-text-field__suffix"
            }, [createElementVNode("span", {
              "class": "v-text-field__suffix__text"
            }, [props.suffix])])]);
          }
        }),
        details: hasDetails ? (slotProps) => createElementVNode(Fragment, null, [slots.details?.(slotProps), hasCounter && createElementVNode(Fragment, null, [createElementVNode("span", null, null), createVNode(VCounter, {
          "active": props.persistentCounter || isFocused.value,
          "value": counterValue.value,
          "max": max.value,
          "disabled": props.disabled
        }, slots.counter)])]) : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const makeVVirtualScrollItemProps = propsFactory({
  renderless: Boolean,
  ...makeComponentProps()
}, "VVirtualScrollItem");
const VVirtualScrollItem = genericComponent()({
  name: "VVirtualScrollItem",
  inheritAttrs: false,
  props: makeVVirtualScrollItemProps(),
  emits: {
    "update:height": (height) => true
  },
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    const {
      resizeRef,
      contentRect
    } = useResizeObserver(void 0, "border");
    watch(() => contentRect.value?.height, (height) => {
      if (height != null) emit("update:height", height);
    });
    useRender(() => props.renderless ? createElementVNode(Fragment, null, [slots.default?.({
      itemRef: resizeRef
    })]) : createElementVNode("div", mergeProps({
      "ref": resizeRef,
      "class": ["v-virtual-scroll__item", props.class],
      "style": props.style
    }, attrs), [slots.default?.()]));
  }
});
const UP = -1;
const DOWN = 1;
const BUFFER_PX = 100;
const makeVirtualProps = propsFactory({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function useVirtual(props, items) {
  const display = useDisplay();
  const itemHeight = shallowRef(0);
  watchEffect(() => {
    itemHeight.value = parseFloat(props.itemHeight || 0);
  });
  const first = shallowRef(0);
  const last = shallowRef(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(props.height) || display.height.value) / (itemHeight.value || 16)
  ) || 1);
  const paddingTop = shallowRef(0);
  const paddingBottom = shallowRef(0);
  const containerRef = ref();
  const markerRef = ref();
  let markerOffset = 0;
  const {
    resizeRef,
    contentRect
  } = useResizeObserver();
  watchEffect(() => {
    resizeRef.value = containerRef.value;
  });
  const viewportHeight = computed(() => {
    return containerRef.value === (void 0).documentElement ? display.height.value : contentRect.value?.height || parseInt(props.height) || 0;
  });
  const hasInitialRender = computed(() => {
    return !!(containerRef.value && markerRef.value && viewportHeight.value && itemHeight.value);
  });
  let sizes = Array.from({
    length: items.value.length
  });
  let offsets = Array.from({
    length: items.value.length
  });
  const updateTime = shallowRef(0);
  let targetScrollIndex = -1;
  function getSize(index) {
    return sizes[index] || itemHeight.value;
  }
  const updateOffsets = debounce(() => {
    const start = performance.now();
    offsets[0] = 0;
    const length = items.value.length;
    for (let i = 1; i <= length; i++) {
      offsets[i] = (offsets[i - 1] || 0) + getSize(i - 1);
    }
    updateTime.value = Math.max(updateTime.value, performance.now() - start);
  }, updateTime);
  const unwatch = watch(hasInitialRender, (v) => {
    if (!v) return;
    unwatch();
    markerOffset = markerRef.value.offsetTop;
    updateOffsets.immediate();
    calculateVisibleItems();
    if (!~targetScrollIndex) return;
    nextTick(() => {
    });
  });
  onScopeDispose(() => {
    updateOffsets.clear();
  });
  function handleItemResize(index, height) {
    const prevHeight = sizes[index];
    const prevMinHeight = itemHeight.value;
    itemHeight.value = prevMinHeight ? Math.min(itemHeight.value, height) : height;
    if (prevHeight !== height || prevMinHeight !== itemHeight.value) {
      sizes[index] = height;
      updateOffsets();
    }
  }
  function calculateOffset(index) {
    index = clamp(index, 0, items.value.length);
    const whole = Math.floor(index);
    const fraction = index % 1;
    const next = whole + 1;
    const wholeOffset = offsets[whole] || 0;
    const nextOffset = offsets[next] || wholeOffset;
    return wholeOffset + (nextOffset - wholeOffset) * fraction;
  }
  function calculateIndex(scrollTop) {
    return binaryClosest(offsets, scrollTop);
  }
  let lastScrollTop = 0;
  let scrollVelocity = 0;
  let lastScrollTime = 0;
  watch(viewportHeight, (val, oldVal) => {
    calculateVisibleItems();
    if (val < oldVal) {
      requestAnimationFrame(() => {
        scrollVelocity = 0;
        calculateVisibleItems();
      });
    }
  });
  let scrollTimeout = -1;
  function handleScroll() {
    if (!containerRef.value || !markerRef.value) return;
    const scrollTop = containerRef.value.scrollTop;
    const scrollTime = performance.now();
    const scrollDeltaT = scrollTime - lastScrollTime;
    if (scrollDeltaT > 500) {
      scrollVelocity = Math.sign(scrollTop - lastScrollTop);
      markerOffset = markerRef.value.offsetTop;
    } else {
      scrollVelocity = scrollTop - lastScrollTop;
    }
    lastScrollTop = scrollTop;
    lastScrollTime = scrollTime;
    (void 0).clearTimeout(scrollTimeout);
    scrollTimeout = (void 0).setTimeout(handleScrollend, 500);
    calculateVisibleItems();
  }
  function handleScrollend() {
    if (!containerRef.value || !markerRef.value) return;
    scrollVelocity = 0;
    lastScrollTime = 0;
    (void 0).clearTimeout(scrollTimeout);
    calculateVisibleItems();
  }
  let raf2 = -1;
  function calculateVisibleItems() {
    cancelAnimationFrame(raf2);
    raf2 = requestAnimationFrame(_calculateVisibleItems);
  }
  function _calculateVisibleItems() {
    if (!containerRef.value || !viewportHeight.value || !itemHeight.value) return;
    const scrollTop = lastScrollTop - markerOffset;
    const direction = Math.sign(scrollVelocity);
    const startPx = Math.max(0, scrollTop - BUFFER_PX);
    const start = clamp(calculateIndex(startPx), 0, items.value.length);
    const endPx = scrollTop + viewportHeight.value + BUFFER_PX;
    const end = clamp(calculateIndex(endPx) + 1, start + 1, items.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (direction !== UP || start < first.value) && (direction !== DOWN || end > last.value)
    ) {
      const topOverflow = calculateOffset(first.value) - calculateOffset(start);
      const bottomOverflow = calculateOffset(end) - calculateOffset(last.value);
      const bufferOverflow = Math.max(topOverflow, bottomOverflow);
      if (bufferOverflow > BUFFER_PX) {
        first.value = start;
        last.value = end;
      } else {
        if (start <= 0) first.value = start;
        if (end >= items.value.length) last.value = end;
      }
    }
    paddingTop.value = calculateOffset(first.value);
    paddingBottom.value = calculateOffset(items.value.length) - calculateOffset(last.value);
  }
  function scrollToIndex(index) {
    const offset = calculateOffset(index);
    if (!containerRef.value || index && !offset) {
      targetScrollIndex = index;
    } else {
      containerRef.value.scrollTop = offset;
    }
  }
  const computedItems = computed(() => {
    return items.value.slice(first.value, last.value).map((item, index) => {
      const _index = index + first.value;
      return {
        raw: item,
        index: _index,
        key: getPropertyFromItem(item, props.itemKey, _index)
      };
    });
  });
  watch(items, () => {
    sizes = Array.from({
      length: items.value.length
    });
    offsets = Array.from({
      length: items.value.length
    });
    updateOffsets.immediate();
    calculateVisibleItems();
  }, {
    deep: 1
  });
  return {
    calculateVisibleItems,
    containerRef,
    markerRef,
    computedItems,
    paddingTop,
    paddingBottom,
    scrollToIndex,
    handleScroll,
    handleScrollend,
    handleItemResize
  };
}
function binaryClosest(arr, val) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;
  let item = null;
  let target = -1;
  if (arr[high] < val) {
    return high;
  }
  while (low <= high) {
    mid = low + high >> 1;
    item = arr[mid];
    if (item > val) {
      high = mid - 1;
    } else if (item < val) {
      target = mid;
      low = mid + 1;
    } else if (item === val) {
      return mid;
    } else {
      return low;
    }
  }
  return target;
}
const makeVVirtualScrollProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VVirtualScroll");
const VVirtualScroll = genericComponent()({
  name: "VVirtualScroll",
  props: makeVVirtualScrollProps(),
  setup(props, {
    slots
  }) {
    getCurrentInstance("VVirtualScroll");
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      calculateVisibleItems,
      containerRef,
      markerRef,
      handleScroll,
      handleScrollend,
      handleItemResize,
      scrollToIndex,
      paddingTop,
      paddingBottom,
      computedItems
    } = useVirtual(props, toRef(() => props.items));
    useToggleScope(() => props.renderless, () => {
      function handleListeners(add = false) {
        return;
      }
      onScopeDispose(handleListeners);
    });
    useRender(() => {
      const children = computedItems.value.map((item) => createVNode(VVirtualScrollItem, {
        "key": item.key,
        "renderless": props.renderless,
        "onUpdate:height": (height) => handleItemResize(item.index, height)
      }, {
        default: (slotProps) => slots.default?.({
          item: item.raw,
          index: item.index,
          ...slotProps
        })
      }));
      return props.renderless ? createElementVNode(Fragment, null, [createElementVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingTop: convertToUnit(paddingTop.value)
        }
      }, null), children, createElementVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, null)]) : createElementVNode("div", {
        "ref": containerRef,
        "class": normalizeClass(["v-virtual-scroll", props.class]),
        "onScrollPassive": handleScroll,
        "onScrollend": handleScrollend,
        "style": normalizeStyle([dimensionStyles.value, props.style])
      }, [createElementVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__container",
        "style": {
          paddingTop: convertToUnit(paddingTop.value),
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, [children])]);
    });
    return {
      calculateVisibleItems,
      scrollToIndex
    };
  }
});
function useScrolling(listRef, textFieldRef) {
  const isScrolling = shallowRef(false);
  let scrollTimeout;
  function onListScroll(e) {
    cancelAnimationFrame(scrollTimeout);
    isScrolling.value = true;
    scrollTimeout = requestAnimationFrame(() => {
      scrollTimeout = requestAnimationFrame(() => {
        isScrolling.value = false;
      });
    });
  }
  async function finishScrolling() {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => {
      if (isScrolling.value) {
        const stop = watch(isScrolling, () => {
          stop();
          resolve();
        });
      } else resolve();
    });
  }
  async function onListKeydown(e) {
    if (e.key === "Tab") {
      textFieldRef.value?.focus();
    }
    if (!["PageDown", "PageUp", "Home", "End"].includes(e.key)) return;
    const el = listRef.value?.$el;
    if (!el) return;
    if (e.key === "Home" || e.key === "End") {
      el.scrollTo({
        top: e.key === "Home" ? 0 : el.scrollHeight,
        behavior: "smooth"
      });
    }
    await finishScrolling();
    const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (e.key === "PageDown" || e.key === "Home") {
      const top = el.getBoundingClientRect().top;
      for (const child of children) {
        if (child.getBoundingClientRect().top >= top) {
          child.focus();
          break;
        }
      }
    } else {
      const bottom = el.getBoundingClientRect().bottom;
      for (const child of [...children].reverse()) {
        if (child.getBoundingClientRect().bottom <= bottom) {
          child.focus();
          break;
        }
      }
    }
  }
  return {
    onScrollPassive: onListScroll,
    onKeydown: onListKeydown
  };
}
function useFocusGroups({
  groups,
  onLeave
}) {
  function getContentRef(group) {
    return group.type === "list" ? group.contentRef.value?.$el : group.contentRef.value;
  }
  function getChildren2(group) {
    const contentRef = getContentRef(group);
    return contentRef ? focusableChildren(contentRef) : [];
  }
  function onTabKeydown(e) {
    const target = e.target;
    const direction = e.shiftKey ? "backward" : "forward";
    const children = groups.map(getChildren2);
    const currentGroupIndex = groups.map((g) => g.type === "list" ? g.contentRef.value?.$el : g.contentRef.value).findIndex((el) => el?.contains(target));
    const nextIndex = nextFocusGroup(children, currentGroupIndex, direction, target);
    if (nextIndex === null) {
      const originGroup = groups[currentGroupIndex];
      const origin = children[currentGroupIndex];
      const isListGroup = originGroup.type === "list";
      const atEdge = isListGroup || (direction === "forward" ? origin.at(-1) === e.target : origin.at(0) === e.target);
      if (atEdge) {
        onLeave();
      }
    } else {
      e.preventDefault();
      e.stopImmediatePropagation();
      const nextGroup = groups[nextIndex];
      if (nextGroup.type === "list" && toValue(nextGroup.displayItemsCount) > 0) {
        nextGroup.contentRef.value?.focus(0);
      } else {
        const fromBefore = direction === "forward";
        children[nextIndex].at(fromBefore ? 0 : -1).focus();
      }
    }
  }
  function nextFocusGroup(children, currentIndex, direction, target) {
    const originGroup = groups[currentIndex];
    const origin = children[currentIndex];
    if (originGroup.type !== "list") {
      const isAtEdge = direction === "forward" ? origin.at(-1) === target : origin.at(0) === target;
      if (!isAtEdge) return null;
    }
    const step = direction === "forward" ? 1 : -1;
    for (let i = currentIndex + step; i >= 0 && i < groups.length; i += step) {
      const group = groups[i];
      if (children[i].length > 0 || group.type === "list" && toValue(group.displayItemsCount) > 0) {
        return i;
      }
    }
    return null;
  }
  return {
    onTabKeydown
  };
}
const defaultFilter = (value, query, item) => {
  if (value == null || query == null) return -1;
  if (!query.length) return 0;
  value = value.toString().toLocaleLowerCase();
  query = query.toString().toLocaleLowerCase();
  const result = [];
  let idx = value.indexOf(query);
  while (~idx) {
    result.push([idx, idx + query.length]);
    idx = value.indexOf(query, idx + query.length);
  }
  return result.length ? result : -1;
};
function normaliseMatch(match, query) {
  if (match == null || typeof match === "boolean" || match === -1) return;
  if (typeof match === "number") return [[match, match + query.length]];
  if (Array.isArray(match[0])) return match;
  return [match];
}
const makeFilterProps = propsFactory({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function filterItems(items, query, options) {
  const array = [];
  const filter = options?.default ?? defaultFilter;
  const keys = options?.filterKeys ? wrapInArray(options.filterKeys) : false;
  const customFiltersLength = Object.keys(options?.customKeyFilter ?? {}).length;
  if (!items?.length) return array;
  let lookAheadItems = [];
  loop: for (let i = 0; i < items.length; i++) {
    const [item, transformed = item] = wrapInArray(items[i]);
    const customMatches = {};
    const defaultMatches = {};
    let match = -1;
    if ((query || customFiltersLength > 0) && !options?.noFilter) {
      let hasOnlyCustomFilters = false;
      if (typeof item === "object") {
        if (item.type === "divider" || item.type === "subheader") {
          if (lookAheadItems.at(-1)?.type !== "divider" || item.type !== "subheader") {
            lookAheadItems = [];
          }
          lookAheadItems.push({
            index: i,
            matches: {},
            type: item.type
          });
          continue;
        }
        const filterKeys = keys || Object.keys(transformed);
        hasOnlyCustomFilters = filterKeys.length === customFiltersLength;
        for (const key of filterKeys) {
          const value = getPropertyFromItem(transformed, key);
          const keyFilter = options?.customKeyFilter?.[key];
          match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
          if (match !== -1 && match !== false) {
            if (keyFilter) customMatches[key] = normaliseMatch(match, query);
            else defaultMatches[key] = normaliseMatch(match, query);
          } else if (options?.filterMode === "every") {
            continue loop;
          }
        }
      } else {
        match = filter(item, query, item);
        if (match !== -1 && match !== false) {
          defaultMatches.title = normaliseMatch(match, query);
        }
      }
      const defaultMatchesLength = Object.keys(defaultMatches).length;
      const customMatchesLength = Object.keys(customMatches).length;
      if (!defaultMatchesLength && !customMatchesLength) continue;
      if (options?.filterMode === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength) continue;
      if (options?.filterMode === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength && customFiltersLength > 0 && !hasOnlyCustomFilters)) continue;
    }
    if (lookAheadItems.length) {
      array.push(...lookAheadItems);
      lookAheadItems = [];
    }
    array.push({
      index: i,
      matches: {
        ...defaultMatches,
        ...customMatches
      }
    });
  }
  return array;
}
function useFilter(props, items, query, options) {
  const filteredItems = shallowRef([]);
  const filteredMatches = shallowRef(/* @__PURE__ */ new Map());
  const transformedItems = computed(() => unref(items));
  watchEffect(() => {
    const _query = typeof query === "function" ? query() : unref(query);
    const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
    const results = filterItems(transformedItems.value, strQuery, {
      customKeyFilter: {
        ...props.customKeyFilter,
        ...unref(options?.customKeyFilter)
      },
      default: props.customFilter,
      filterKeys: props.filterKeys,
      filterMode: props.filterMode,
      noFilter: props.noFilter
    });
    const originalItems = unref(items);
    const _filteredItems = [];
    const _filteredMatches = /* @__PURE__ */ new Map();
    results.forEach(({
      index,
      matches
    }) => {
      const item = originalItems[index];
      _filteredItems.push(item);
      _filteredMatches.set(item.value, matches);
    });
    filteredItems.value = _filteredItems;
    filteredMatches.value = _filteredMatches;
  });
  function getMatches(item) {
    return filteredMatches.value.get(item.value);
  }
  return {
    filteredItems,
    filteredMatches,
    getMatches
  };
}
function highlightResult(name, text, matches) {
  if (matches == null || !matches.length) return text;
  return matches.map((match, i) => {
    const start = i === 0 ? 0 : matches[i - 1][1];
    const result = [createElementVNode("span", {
      "class": normalizeClass(`${name}__unmask`)
    }, [text.slice(start, match[0])]), createElementVNode("span", {
      "class": normalizeClass(`${name}__mask`)
    }, [text.slice(match[0], match[1])])];
    if (i === matches.length - 1) {
      result.push(createElementVNode("span", {
        "class": normalizeClass(`${name}__unmask`)
      }, [text.slice(match[1])]));
    }
    return createElementVNode(Fragment, null, [result]);
  });
}
const makeMenuActivatorProps = propsFactory({
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  }
}, "autocomplete");
function useMenuActivator(props, isOpen) {
  const uid = useId();
  const menuId = computed(() => `menu-${uid}`);
  const ariaExpanded = toRef(() => toValue(isOpen));
  const ariaControls = toRef(() => menuId.value);
  return {
    menuId,
    ariaExpanded,
    ariaControls
  };
}
const makeSelectProps = propsFactory({
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuElevation: [Number, String],
  menuIcon: {
    type: IconValue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,
  ...makeMenuActivatorProps(),
  ...makeItemsProps({
    itemChildren: false
  })
}, "Select");
const makeVSelectProps = propsFactory({
  search: String,
  ...makeFilterProps({
    filterKeys: ["title"]
  }),
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"]),
  ...makeTransitionProps({
    transition: {
      component: VDialogTransition
    }
  })
}, "VSelect");
const VSelect = genericComponent()({
  name: "VSelect",
  props: makeVSelectProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:menu": (ue) => true,
    "update:search": (value) => true
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const vMenuRef = ref();
    const headerRef = ref();
    const footerRef = ref();
    const vVirtualScrollRef = ref();
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const search = useProxiedModel(props, "search", "");
    const {
      filteredItems,
      getMatches
    } = useFilter(props, items, () => search.value);
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
    });
    const form = useForm(props);
    const autocomplete = useAutocomplete(props);
    const selectedValues = computed(() => model.value.map((selection) => selection.value));
    const isFocused = shallowRef(false);
    const closableChips = toRef(() => props.closableChips && !form.isReadonly.value && !form.isDisabled.value);
    const {
      InputIcon
    } = useInputIcon(props);
    let keyboardLookupPrefix = "";
    let keyboardLookupIndex = 0;
    let keyboardLookupLastTime;
    const displayItems = computed(() => {
      const baseItems = search.value ? filteredItems.value : items.value;
      if (props.hideSelected) {
        return baseItems.filter((item) => !model.value.some((s) => (props.valueComparator || deepEqual)(s, item)));
      }
      return baseItems;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        if (_menu.value && !v && vMenuRef.value?.ΨopenChildren.size) return;
        if (v && menuDisabled.value) return;
        _menu.value = v;
      }
    });
    const {
      menuId,
      ariaExpanded,
      ariaControls
    } = useMenuActivator(props, menu);
    const computedMenuProps = computed(() => {
      return {
        ...props.menuProps,
        activatorProps: {
          ...props.menuProps?.activatorProps || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    });
    const listRef = ref();
    const listEvents = useScrolling(listRef, vTextFieldRef);
    const {
      onTabKeydown
    } = useFocusGroups({
      groups: [{
        type: "element",
        contentRef: headerRef
      }, {
        type: "list",
        contentRef: listRef,
        displayItemsCount: () => displayItems.value.length
      }, {
        type: "element",
        contentRef: footerRef
      }],
      onLeave: () => {
        menu.value = false;
        vTextFieldRef.value?.focus();
      }
    });
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = !menu.value;
    }
    function onMenuKeydown(e) {
      if (e.key === "Tab") {
        onTabKeydown(e);
      }
      if (listRef.value?.$el.contains(e.target) && checkPrintable(e)) {
        onKeydown(e);
      }
    }
    function onKeydown(e) {
      if (!e.key || form.isReadonly.value) return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown", " "].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape", "Tab"].includes(e.key)) {
        menu.value = false;
      }
      if (props.clearable && e.key === "Backspace") {
        e.preventDefault();
        model.value = [];
        onClear();
        return;
      }
      if (e.key === "Home") {
        listRef.value?.focus("first");
      } else if (e.key === "End") {
        listRef.value?.focus("last");
      }
      const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
      if (!checkPrintable(e)) return;
      const now = performance.now();
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = "";
        keyboardLookupIndex = 0;
      }
      keyboardLookupPrefix += e.key.toLowerCase();
      keyboardLookupLastTime = now;
      const items2 = displayItems.value;
      function findItem() {
        let result2 = findItemBase();
        if (result2) return result2;
        if (keyboardLookupPrefix.at(-1) === keyboardLookupPrefix.at(-2)) {
          keyboardLookupPrefix = keyboardLookupPrefix.slice(0, -1);
          keyboardLookupIndex++;
          result2 = findItemBase();
          if (result2) return result2;
        }
        keyboardLookupIndex = 0;
        result2 = findItemBase();
        if (result2) return result2;
        keyboardLookupPrefix = e.key.toLowerCase();
        return findItemBase();
      }
      function findItemBase() {
        for (let i = keyboardLookupIndex; i < items2.length; i++) {
          const _item = items2[i];
          if (_item.title.toLowerCase().startsWith(keyboardLookupPrefix)) {
            return [_item, i];
          }
        }
        return void 0;
      }
      const result = findItem();
      if (!result) return;
      const [item, index] = result;
      keyboardLookupIndex = index;
      listRef.value?.focus(index);
      if (!props.multiple) {
        model.value = [item];
      }
    }
    function select(item, set = true) {
      if (item.props.disabled) return;
      if (props.multiple) {
        const index = model.value.findIndex((selection) => (props.valueComparator || deepEqual)(selection.value, item.value));
        const add = set == null ? !~index : set;
        if (~index) {
          const value = add ? [...model.value, item] : [...model.value];
          value.splice(index, 1);
          model.value = value;
        } else if (add) {
          model.value = [...model.value, item];
        }
      } else {
        const add = set !== false;
        model.value = add ? [item] : [];
        nextTick(() => {
          menu.value = false;
        });
      }
    }
    function onBlur(e) {
      const target = e.target;
      if (!vTextFieldRef.value?.$el.contains(target)) {
        menu.value = false;
      }
    }
    function getSelectedIndex() {
      return displayItems.value.findIndex((item) => model.value.some((s) => (props.valueComparator || deepEqual)(s.value, item.value)));
    }
    function getSelectedFocusableIndex() {
      if (!model.value.length) return -1;
      const comparator = props.valueComparator || deepEqual;
      let focusableIndex = 0;
      for (const item of displayItems.value) {
        const isSelected = model.value.some((s) => comparator(s.value, item.value));
        if (isSelected) return item.props.disabled ? -1 : focusableIndex;
        if (!item.props.disabled) focusableIndex++;
      }
      return -1;
    }
    function onAfterEnter() {
      if (props.eager) {
        vVirtualScrollRef.value?.calculateVisibleItems();
      }
      if (listRef.value && isFocused.value) {
        const index = getSelectedFocusableIndex();
        listRef.value.focus(index >= 0 ? index : "first", {
          focusVisible: false
        });
      }
    }
    function onAfterLeave() {
      search.value = "";
      if (isFocused.value) {
        vTextFieldRef.value?.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      if (!vTextFieldRef.value?.$el.contains(e.relatedTarget) && !e.currentTarget.contains(e.relatedTarget)) {
        isFocused.value = false;
      }
    }
    function onModelUpdate(v) {
      if (v == null) model.value = [];
      else if (matchesSelector(vTextFieldRef.value) || matchesSelector(vTextFieldRef.value)) ; else if (vTextFieldRef.value) {
        vTextFieldRef.value.value = "";
      }
    }
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        getSelectedIndex();
      }
    });
    watch(items, (newVal, oldVal) => {
      if (menu.value) return;
      if (isFocused.value && props.hideNoData && !oldVal.length && newVal.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
      const menuSlotProps = {
        search,
        filteredItems: filteredItems.value
      };
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": model.value.map((v) => v.props.title).join(", "),
        "name": void 0,
        "onUpdate:modelValue": onModelUpdate,
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "class": ["v-select", {
          "v-select--active-menu": menu.value,
          "v-select--chips": !!props.chips,
          [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
          "v-select--selected": model.value.length,
          "v-select--selection-slot": !!slots.selection
        }, props.class],
        "style": props.style,
        "inputmode": "none",
        "placeholder": placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "aria-expanded": ariaExpanded.value,
        "aria-controls": ariaControls.value
      }), {
        ...slots,
        default: ({
          id
        }) => createElementVNode(Fragment, null, [createElementVNode("select", {
          "hidden": true,
          "multiple": props.multiple,
          "name": autocomplete.fieldName.value
        }, [items.value.map((item) => createElementVNode("option", {
          "key": item.value,
          "value": item.value,
          "selected": selectedValues.value.includes(item.value)
        }, null))]), createVNode(VMenu, mergeProps({
          "id": menuId.value,
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": ($event) => menu.value = $event,
          "activator": "parent",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterEnter": onAfterEnter,
          "onAfterLeave": onAfterLeave
        }, computedMenuProps.value, {
          "contentClass": ["v-select__content", computedMenuProps.value.contentClass]
        }), {
          default: () => [createVNode(VSheet, {
            "elevation": props.menuElevation,
            "onFocusin": onFocusin,
            "onFocusout": onFocusout,
            "onKeydown": onMenuKeydown
          }, {
            default: () => [slots["menu-header"] && createElementVNode("header", {
              "ref": headerRef
            }, [slots["menu-header"](menuSlotProps)]), hasList && createVNode(VList, mergeProps({
              "key": "select-list",
              "ref": listRef,
              "selected": selectedValues.value,
              "selectStrategy": props.multiple ? "independent" : "single-independent",
              "tabindex": "-1",
              "selectable": !!displayItems.value.length,
              "aria-live": "polite",
              "aria-labelledby": `${id.value}-label`,
              "aria-multiselectable": props.multiple,
              "color": props.itemColor ?? props.color
            }, listEvents, props.listProps), {
              default: () => [slots["prepend-item"]?.(), !displayItems.value.length && !props.hideNoData && (slots["no-data"]?.() ?? createVNode(VListItem, {
                "key": "no-data",
                "title": t(props.noDataText)
              }, null)), createVNode(VVirtualScroll, {
                "ref": vVirtualScrollRef,
                "renderless": true,
                "items": displayItems.value,
                "itemKey": "value"
              }, {
                default: ({
                  item,
                  index,
                  itemRef
                }) => {
                  const camelizedProps = camelizeProps(item.props);
                  const itemProps = mergeProps(item.props, {
                    ref: itemRef,
                    key: item.value,
                    onClick: () => select(item, null),
                    "aria-posinset": index + 1,
                    "aria-setsize": displayItems.value.length
                  });
                  if (item.type === "divider") {
                    return slots.divider?.({
                      props: item.raw,
                      index
                    }) ?? createVNode(VDivider, mergeProps(item.props, {
                      "key": `divider-${index}`
                    }), null);
                  }
                  if (item.type === "subheader") {
                    return slots.subheader?.({
                      props: item.raw,
                      index
                    }) ?? createVNode(VListSubheader, mergeProps(item.props, {
                      "key": `subheader-${index}`
                    }), null);
                  }
                  return slots.item?.({
                    item: item.raw,
                    internalItem: item,
                    index,
                    props: itemProps
                  }) ?? createVNode(VListItem, mergeProps(itemProps, {
                    "role": "option"
                  }), {
                    prepend: ({
                      isSelected
                    }) => createElementVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                      "key": item.value,
                      "modelValue": isSelected,
                      "ripple": false,
                      "tabindex": "-1",
                      "aria-hidden": true,
                      "onClick": (event) => event.preventDefault()
                    }, null) : void 0, camelizedProps.prependAvatar && createVNode(VAvatar, {
                      "image": camelizedProps.prependAvatar
                    }, null), camelizedProps.prependIcon && createVNode(VIcon, {
                      "icon": camelizedProps.prependIcon
                    }, null)]),
                    title: () => {
                      return search.value ? highlightResult("v-select", item.title, getMatches(item)?.title) : item.title;
                    }
                  });
                }
              }), slots["append-item"]?.()]
            }), slots["menu-footer"] && createElementVNode("footer", {
              "ref": footerRef
            }, [slots["menu-footer"](menuSlotProps)])]
          })]
        }), model.value.map((item, index) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item, false);
          }
          const slotProps = mergeProps(VChip.filterProps(item.props), {
            "onClick:close": onChipClose,
            onKeydown(e) {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              e.stopPropagation();
              onChipClose(e);
            },
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            "onUpdate:modelValue": void 0
          });
          const hasSlot = hasChips ? !!slots.chip : !!slots.selection;
          const slotContent = hasSlot ? ensureValidVNode(hasChips ? slots.chip({
            item: item.raw,
            internalItem: item,
            index,
            props: slotProps
          }) : slots.selection({
            item: item.raw,
            internalItem: item,
            index
          })) : void 0;
          if (hasSlot && !slotContent) return void 0;
          return createElementVNode("div", {
            "key": item.value,
            "class": "v-select__selection"
          }, [hasChips ? !slots.chip ? createVNode(VChip, mergeProps({
            "key": "chip",
            "closable": closableChips.value,
            "size": "small",
            "text": item.title,
            "disabled": item.props.disabled
          }, slotProps), null) : createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: closableChips.value,
                size: "small",
                text: item.title
              }
            }
          }, {
            default: () => [slotContent]
          }) : slotContent ?? createElementVNode("span", {
            "class": "v-select__selection-text"
          }, [item.title, props.multiple && index < model.value.length - 1 && createElementVNode("span", {
            "class": "v-select__selection-comma"
          }, [createTextVNode(",")])])]);
        })]),
        "append-inner": (...args) => createElementVNode(Fragment, null, [slots["append-inner"]?.(...args), props.menuIcon ? createVNode(VIcon, {
          "class": "v-select__menu-icon",
          "color": vTextFieldRef.value?.fieldIconColor,
          "icon": props.menuIcon,
          "aria-hidden": true
        }, null) : void 0, props.appendInnerIcon && createVNode(InputIcon, {
          "key": "append-icon",
          "name": "appendInner",
          "color": args[0].iconColor.value
        }, null)])
      });
    });
    return forwardRefs({
      isFocused,
      menu,
      search,
      filteredItems,
      select
    }, vTextFieldRef);
  }
});
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxHeight: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeAutocompleteProps(),
  ...omit(makeVInputProps(), ["direction"]),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    vIntersect: Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true,
    "update:rows": (rows) => true
  },
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      onIntersect
    } = useAutofocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const scrollbarWidth = ref(0);
    const {
      platform
    } = useDisplay();
    const autocomplete = useAutocomplete(props);
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (autocomplete.isSuppressing.value) {
        autocomplete.update();
      }
      if (textareaRef.value !== (void 0).activeElement) {
        textareaRef.value?.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      if (!props.modelModifiers?.trim) {
        model.value = el.value;
        return;
      }
      const value = el.value;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      model.value = value;
      nextTick(() => {
        let offset = 0;
        if (value.trimStart().length === el.value.length) {
          offset = value.length - el.value.length;
        }
        if (start != null) el.selectionStart = start - offset;
        if (end != null) el.selectionEnd = end - offset;
      });
    }
    const sizerRef = ref();
    const rows = ref(Number(props.rows));
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = Number(props.rows);
    });
    function calculateInputHeight() {
      nextTick(() => {
        if (!textareaRef.value) return;
        if (platform.value.firefox) {
          scrollbarWidth.value = 12;
          return;
        }
        const {
          offsetWidth,
          clientWidth
        } = textareaRef.value;
        scrollbarWidth.value = Math.max(0, offsetWidth - clientWidth);
      });
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = props.maxHeight ? parseFloat(props.maxHeight) : parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height ?? 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxHeight, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    watch(rows, (val) => {
      emit("update:rows", val);
    });
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer?.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = {
        ...VField.filterProps(props),
        "onClick:clear": onClear
      };
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": [{
          "--v-textarea-max-height": props.maxHeight ? convertToUnit(props.maxHeight) : void 0,
          "--v-textarea-scroll-bar-width": convertToUnit(scrollbarWidth.value)
        }, props.style]
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value,
        "indentDetails": props.indentDetails ?? !isPlainOrUnderlined.value
      }), {
        ...slots,
        default: ({
          id,
          isDisabled,
          isDirty,
          isReadonly,
          isValid,
          hasDetails: hasDetails2
        }) => createVNode(VField, mergeProps({
          "ref": vFieldRef,
          "style": {
            "--v-textarea-control-height": controlHeight.value
          },
          "onClick": onControlClick,
          "onMousedown": onControlMousedown,
          "onClick:prependInner": props["onClick:prependInner"],
          "onClick:appendInner": props["onClick:appendInner"]
        }, fieldProps, {
          "id": id.value,
          "active": isActive.value || isDirty.value,
          "labelId": `${id.value}-label`,
          "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
          "dirty": isDirty.value || props.dirty,
          "disabled": isDisabled.value,
          "focused": isFocused.value,
          "details": hasDetails2.value,
          "error": isValid.value === false
        }), {
          ...slots,
          default: ({
            props: {
              class: fieldClass,
              ...slotProps
            },
            controlRef
          }) => createElementVNode(Fragment, null, [props.prefix && createElementVNode("span", {
            "class": "v-text-field__prefix"
          }, [props.prefix]), withDirectives(createElementVNode("textarea", mergeProps({
            "ref": (val) => textareaRef.value = controlRef.value = val,
            "class": fieldClass,
            "value": model.value,
            "onInput": onInput,
            "autofocus": props.autofocus,
            "readonly": isReadonly.value,
            "disabled": isDisabled.value,
            "placeholder": props.placeholder,
            "rows": props.rows,
            "name": autocomplete.fieldName.value,
            "autocomplete": autocomplete.fieldAutocomplete.value,
            "onFocus": onFocus,
            "onBlur": blur,
            "aria-labelledby": `${id.value}-label`
          }, slotProps, inputAttrs), null), [[Intersect, {
            handler: onIntersect
          }, null, {
            once: true
          }]]), props.autoGrow && withDirectives(createElementVNode("textarea", {
            "class": normalizeClass([fieldClass, "v-textarea__sizer"]),
            "id": `${slotProps.id}-sizer`,
            "onUpdate:modelValue": ($event) => model.value = $event,
            "ref": sizerRef,
            "readonly": true,
            "aria-hidden": "true"
          }, null), [[vModelText, model.value]]), props.suffix && createElementVNode("span", {
            "class": "v-text-field__suffix"
          }, [props.suffix])])
        }),
        details: hasDetails ? (slotProps) => createElementVNode(Fragment, null, [slots.details?.(slotProps), hasCounter && createElementVNode(Fragment, null, [createElementVNode("span", null, null), createVNode(VCounter, {
          "active": props.persistentCounter || isFocused.value,
          "value": counterValue.value,
          "max": max.value,
          "disabled": props.disabled
        }, slots.counter)])]) : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
const _sfc_main = {
  __name: "introduccion",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(true);
    const vistaActiva = ref("temas");
    const maxTemaDesbloqueado = useState("maxTemaDesbloqueado", () => 1);
    const actividadesDesbloqueadas = useState("actividadesDesbloqueadas", () => false);
    const progresoActividades = useState("progresoActividades", () => 0);
    const saveProgress = () => {
      localStorage.setItem("ovaProgress", JSON.stringify({
        maxTema: maxTemaDesbloqueado.value,
        actDesbloqueadas: actividadesDesbloqueadas.value,
        progresoAct: progresoActividades.value,
        quizEnviado: quizEnviado.value,
        respuestasQuiz: respuestasQuiz.value,
        puntajeQuiz: puntajeQuiz.value,
        casosEnviados: casosEnviados.value,
        respuestasCasos: respuestasCasos.value,
        reflexionEnviada: reflexionEnviada.value,
        reflexiones: reflexiones.value
      }));
    };
    watch([maxTemaDesbloqueado, actividadesDesbloqueadas, progresoActividades], saveProgress, { deep: true });
    const menuTemas = [
      {
        id: 1,
        titulo: "1. Introducción y Conceptos",
        subtitulo: "¿Qué son los Derechos Fundamentales?",
        icon: "mdi-book-open-variant",
        imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
        contenido: "Los derechos fundamentales son garantías inherentes a toda persona por el solo hecho de ser humana. En Colombia, la Constitución Política de 1991 los consagra en el Título II, Capítulo 1 (artículos 11 al 41), y los eleva a la categoría de normas de aplicación inmediata que vinculan a todas las autoridades del Estado. Su fundamento más profundo es la dignidad humana: nadie puede ser tratado como un medio, sino siempre como un fin en sí mismo. A diferencia de otros derechos, los fundamentales son inalienables (no se pueden transferir), imprescriptibles (no se extinguen con el tiempo) e irrenunciables. La Corte Constitucional colombiana ha ampliado progresivamente su catálogo mediante el principio de conexidad, reconociendo que derechos como la salud o el mínimo vital también son fundamentales cuando su vulneración amenaza directamente la vida digna.",
        importante: "La dignidad humana, la vida, la igualdad y la libertad son el núcleo esencial del que derivan todos los demás derechos fundamentales consagrados en la Constitución de 1991.",
        puntosClave: ["Aplicación inmediata (Art. 85 C.P.)", "Inalienables e irrenunciables", "Protegidos por la Acción de Tutela", "Catálogo ampliado por jurisprudencia"],
        video: "https://www.youtube.com/embed/K5W3hYwfNuc"
      },
      {
        id: 2,
        titulo: "2. Derechos de Primera Generación",
        subtitulo: "Libertades Civiles y Derechos Políticos",
        icon: "mdi-shield-account",
        imagen: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800",
        contenido: "Los derechos de primera generación nacieron de las grandes revoluciones liberales del siglo XVIII (Revolución Francesa y Americana) y buscan proteger al individuo frente a los abusos del poder estatal. Su lógica es de abstención: el Estado no debe interferir en la esfera privada del ciudadano. En Colombia, la Constitución de 1991 los recoge de forma exhaustiva: el derecho a la vida e integridad personal (Art. 11-12), la prohibición de la tortura y la esclavitud (Art. 12-17), la libertad de conciencia y de culto (Art. 18-19), la libertad de expresión e información (Art. 20), el derecho de reunión y asociación (Art. 37-38), el debido proceso (Art. 29), y los derechos políticos como el sufragio universal y el acceso a cargos públicos (Art. 40). Estos derechos son de aplicación inmediata y pueden defenderse directamente mediante la Acción de Tutela cuando el Estado o un particular con posición de dominio los vulnera.",
        importante: "En Colombia, entre los Arts. 11 y 41 de la Constitución se consagran los derechos civiles y políticos. El derecho a la vida es el más fundamental de todos: sin él, los demás carecen de sentido.",
        puntosClave: ["Derecho a la vida (Art. 11)", "Libertad de expresión (Art. 20)", "Debido proceso (Art. 29)", "Derecho al voto (Art. 40)"],
        video: "https://www.youtube.com/embed/12hWT4U69yU"
      },
      {
        id: 3,
        titulo: "3. Derechos de Segunda Generación",
        subtitulo: "Derechos Económicos, Sociales y Culturales",
        icon: "mdi-scale-balance",
        imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        contenido: "Los derechos de segunda generación —también conocidos como DESC (Derechos Económicos, Sociales y Culturales)— surgieron como respuesta a las profundas desigualdades generadas por la Revolución Industrial. A diferencia de los de primera generación, exigen una conducta activa y prestacional del Estado: este debe invertir recursos, crear instituciones y garantizar condiciones materiales mínimas de vida. En la Constitución colombiana de 1991, se ubican principalmente en el Capítulo 2 del Título II (Arts. 42 al 77) y comprenden: el derecho al trabajo en condiciones dignas (Art. 25), la seguridad social (Art. 48), el derecho a la salud (Art. 49), la educación gratuita hasta el noveno grado (Art. 67), y el derecho a la vivienda digna (Art. 51). La Corte Constitucional ha reconocido que estos derechos son justiciables cuando su núcleo esencial está amenazado, especialmente en el caso de niños, adultos mayores y personas en situación de vulnerabilidad.",
        importante: "La Corte Constitucional ha protegido mediante tutela el derecho a la salud (Art. 49) y a la seguridad social (Art. 48) cuando su negación constituye una amenaza inminente para la vida o la dignidad humana.",
        puntosClave: ["Trabajo digno (Art. 25)", "Salud y seguridad social (Arts. 48-49)", "Educación gratuita (Art. 67)", "Vivienda digna (Art. 51)"],
        video: "https://www.youtube.com/embed/IY6yYklnI7Y"
      },
      {
        id: 4,
        titulo: "4. Derechos de Tercera Generación",
        subtitulo: "Derechos Solidarios, Colectivos y del Medio Ambiente",
        icon: "mdi-dove",
        imagen: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
        contenido: "Los derechos de tercera generación emergen en la segunda mitad del siglo XX como respuesta a problemáticas que ningún individuo ni Estado puede resolver por sí solo: la crisis ambiental, los conflictos bélicos globales y la desigualdad entre naciones. Su principio rector es la solidaridad: obligan tanto a los Estados como a las empresas, las organizaciones internacionales y a cada ciudadano. En Colombia, el Capítulo 3 del Título II (Arts. 78 al 82) consagra los derechos colectivos y del ambiente: el derecho a un ambiente sano (Art. 79), el deber del Estado de prevenir el deterioro ambiental (Art. 80), y la protección de los consumidores (Art. 78). La Corte Constitucional ha reconocido además el derecho a la paz (Art. 22) como un derecho y un deber ciudadano de obligatorio cumplimiento. Las Acciones Populares y de Grupo son los mecanismos judiciales diseñados para proteger estos derechos colectivos.",
        importante: 'El Acuerdo de Paris (2015) y la jurisprudencia de la Corte Suprema colombiana (STC4360-2018) reconocieron a la Amazonía colombiana como "sujeto de derechos", ampliando la protección ambiental de tercera generación.',
        puntosClave: ["Derecho al ambiente sano (Art. 79)", "Derecho a la paz (Art. 22)", "Protección del consumidor (Art. 78)", "Acciones Populares como mecanismo de defensa"],
        video: "https://www.youtube.com/embed/AQ2GvHg0icg"
      },
      {
        id: 5,
        titulo: "5. Garantías de Protección Constitucional",
        subtitulo: "Mecanismos para Defender tus Derechos",
        icon: "mdi-gavel",
        imagen: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800",
        contenido: "La Constitución de 1991 diseñó un robusto sistema de garantías judiciales para que los derechos no sean simples declaraciones. El más importante es la Acción de Tutela (Art. 86): cualquier persona puede acudir ante cualquier juez de la República, sin necesidad de abogado, para solicitar la protección inmediata de un derecho fundamental. El juez tiene máximo 10 días para fallar. El Habeas Corpus (Art. 30) protege la libertad personal ante detenciones arbitrarias y debe resolverse en 36 horas. El Habeas Data (Art. 15) garantiza el derecho a controlar la información personal en bases de datos. Las Acciones Populares (Art. 88) defienden derechos e intereses colectivos como el ambiente sano y el espacio público. Finalmente, la Acción de Cumplimiento (Art. 87) obliga a las autoridades a ejecutar leyes o actos administrativos que incumplan. Conocer estos mecanismos es esencial para ejercer una ciudadanía activa.",
        importante: "La Acción de Tutela es el mecanismo más utilizado en Colombia: solo en 2023 se presentaron más de 1.400.000 tutelas, lo que la convierte en una de las herramientas de democracia directa más activas del mundo.",
        puntosClave: ["Acción de Tutela (Art. 86) — 10 días", "Habeas Corpus (Art. 30) — 36 horas", "Habeas Data (Art. 15)", "Acciones Populares (Art. 88)"],
        video: "https://www.youtube.com/embed/hp8hqeWI8dE"
      }
    ];
    const temaActual = ref(menuTemas[0]);
    const quizEnviado = ref(false);
    const puntajeQuiz = ref(0);
    const respuestasQuiz = ref([null, null, null, null, null]);
    const casosEnviados = ref(false);
    const respuestasCasos = ref(["", "", ""]);
    const reflexionEnviada = ref(false);
    const reflexiones = ref(["", "", ""]);
    const opcionesDerechos = [
      "Derecho a la vida",
      "Derecho a la libertad de expresión",
      "Derecho a la salud",
      "Derecho a la educación",
      "Derecho a la igualdad",
      "Derecho al trabajo digno",
      "Derecho a un medio ambiente sano",
      "Derecho a la paz",
      "Derecho al debido proceso",
      "Derecho a la intimidad"
    ];
    const listaActividades = [
      {
        tipo: "Quiz Interactivo",
        titulo: "¿Cuánto sabes sobre los Derechos Fundamentales?",
        icono: "mdi-help-circle",
        descripcion: "Responde las siguientes preguntas de selección múltiple para evaluar tu comprensión de los temas estudiados. Necesitas al menos 3 de 5 respuestas correctas para avanzar.",
        preguntas: [
          {
            pregunta: "¿Cuál es el fundamento absoluto de todos los derechos fundamentales?",
            opciones: ["La soberanía del Estado", "La dignidad humana", "La Constitución Política", "El poder legislativo"],
            correcta: 1,
            explicacion: "La dignidad humana es el valor supremo que justifica la existencia y protección de todos los derechos fundamentales."
          },
          {
            pregunta: "¿Qué tipo de derechos protegen las libertades civiles frente al Estado?",
            opciones: ["Derechos de tercera generación", "Derechos de segunda generación", "Derechos de primera generación", "Derechos colectivos"],
            correcta: 2,
            explicacion: "Los derechos de primera generación (civiles y políticos) limitan la intervención estatal en la esfera individual."
          },
          {
            pregunta: "¿Qué mecanismo constitucional protege derechos individuales de forma inmediata en Colombia?",
            opciones: ["Acción Popular", "Habeas Data", "Acción de Tutela", "Acción de Cumplimiento"],
            correcta: 2,
            explicacion: "La Acción de Tutela permite acudir ante cualquier juez para exigir protección inmediata de derechos fundamentales."
          },
          {
            pregunta: "¿Cuál de los siguientes pertenece a los derechos de segunda generación?",
            opciones: ["Derecho a la paz", "Derecho a la educación", "Derecho a la libertad de expresión", "Derecho al voto"],
            correcta: 1,
            explicacion: "El derecho a la educación es un derecho económico, social y cultural (segunda generación) que requiere acción positiva del Estado."
          },
          {
            pregunta: "¿Qué caracteriza a los derechos de tercera generación?",
            opciones: ["Son derechos individuales absolutos", "Protegen solo intereses económicos", "Requieren cooperación internacional y solidaridad colectiva", "Los ejerce únicamente el Estado"],
            correcta: 2,
            explicacion: "Los derechos de tercera generación (paz, ambiente sano, desarrollo) trascienden al individuo y requieren solidaridad global."
          }
        ]
      },
      {
        tipo: "Análisis de Casos",
        titulo: "Identifica el Derecho Vulnerado",
        icono: "mdi-file-document-edit",
        descripcion: "Lee cada caso de la vida real y selecciona cuál derecho fundamental fue vulnerado. Analiza con cuidado los detalles de cada situación.",
        casos: [
          {
            titulo: "El despido injusto",
            descripcion: "María fue despedida de su trabajo sin justa causa y sin el pago de sus prestaciones sociales después de 5 años de servicio. El empleador argumentó razones económicas, pero no siguió el procedimiento legal establecido.",
            respuesta: "Derecho al trabajo digno",
            explicacion: "El trabajo digno (segunda generación) incluye el derecho a la estabilidad laboral y al pago justo de prestaciones."
          },
          {
            titulo: "El periodista silenciado",
            descripcion: 'Un periodista fue amenazado y sus publicaciones en redes sociales fueron eliminadas por funcionarios del gobierno después de publicar una investigación sobre corrupción. Las autoridades argumentaron que "generaba desorden público".',
            respuesta: "Derecho a la libertad de expresión",
            explicacion: "La libertad de expresión (primera generación) protege el derecho a emitir opiniones e información sin censura previa del Estado."
          },
          {
            titulo: "El río contaminado",
            descripcion: "Una empresa minera vertió desechos químicos al río del pueblo, contaminando el agua que consumen sus habitantes. Las familias presentaron enfermedades y la fauna local desapareció. La empresa tiene permisos oficiales pero ignoró los límites de emisión.",
            respuesta: "Derecho a un medio ambiente sano",
            explicacion: "El derecho a un medio ambiente sano (tercera generación) protege a las comunidades de la degradación ambiental que afecta su calidad de vida."
          }
        ]
      },
      {
        tipo: "Reflexión Personal",
        titulo: "Conecta los Derechos con tu Vida",
        icono: "mdi-lightbulb-on",
        descripcion: "Las siguientes preguntas no tienen respuestas incorrectas. El objetivo es que reflexiones críticamente sobre cómo los derechos fundamentales se manifiestan en tu propia experiencia de vida. Escribe al menos una oración completa en cada respuesta.",
        reflexiones: [
          "¿Cuál derecho fundamental consideras más importante en tu vida cotidiana y por qué?",
          "¿Has presenciado alguna situación en la que un derecho fundamental haya sido vulnerado? Descríbela brevemente.",
          "¿Qué acciones concretas podrías tomar para defender los derechos fundamentales en tu comunidad?"
        ]
      }
    ];
    const handleImageError = (event) => {
      event.target.src = "https://images.unsplash.com/photo-1589829016171-28862114348b?auto=format&fit=crop&q=80&w=1200";
    };
    const marcarCompletadoYSiguiente = () => {
      if (temaActual.value.id === maxTemaDesbloqueado.value) {
        maxTemaDesbloqueado.value++;
      }
      cambiarTema(1);
      saveProgress();
    };
    const marcarComoTerminado = () => {
      if (temaActual.value.id === maxTemaDesbloqueado.value) {
        maxTemaDesbloqueado.value++;
      }
      actividadesDesbloqueadas.value = true;
      vistaActiva.value = "actividades";
      saveProgress();
    };
    const cambiarTema = (direccion) => {
      const index = menuTemas.findIndex((t) => t.id === temaActual.value.id);
      const nuevoIndex = index + direccion;
      if (nuevoIndex >= 0 && nuevoIndex < menuTemas.length && menuTemas[nuevoIndex].id <= maxTemaDesbloqueado.value) {
        temaActual.value = menuTemas[nuevoIndex];
        (void 0).scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const enviarQuiz = (idx) => {
      let correctas = 0;
      listaActividades[0].preguntas.forEach((p, i) => {
        if (respuestasQuiz.value[i] === p.correcta) correctas++;
      });
      puntajeQuiz.value = correctas;
      quizEnviado.value = true;
      saveProgress();
    };
    const reiniciarQuiz = () => {
      respuestasQuiz.value = [null, null, null, null, null];
      quizEnviado.value = false;
      puntajeQuiz.value = 0;
      saveProgress();
    };
    const enviarCasos = (idx) => {
      casosEnviados.value = true;
      saveProgress();
    };
    const enviarReflexion = (idx) => {
      reflexionEnviada.value = true;
      saveProgress();
    };
    const completarActividad = (idx) => {
      if (idx === progresoActividades.value) {
        progresoActividades.value++;
        saveProgress();
        (void 0).scrollTo({ top: 0, behavior: "smooth" });
      }
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
                  _push3(ssrRenderComponent(VAppBarNavIcon, {
                    onClick: ($event) => drawer.value = !drawer.value,
                    color: "gold"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VToolbarTitle, { class: "font-serif text-gold" }, {
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
                    color: "gold",
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
                    createVNode(VAppBarNavIcon, {
                      onClick: ($event) => drawer.value = !drawer.value,
                      color: "gold"
                    }, null, 8, ["onClick"]),
                    createVNode(VToolbarTitle, { class: "font-serif text-gold" }, {
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
                      color: "gold",
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
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: drawer.value,
              "onUpdate:modelValue": ($event) => drawer.value = $event,
              app: "",
              theme: "dark",
              width: "320",
              class: "sidebar-glass"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-4" data-v-f0a1638e${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    block: "",
                    variant: "tonal",
                    color: "white",
                    to: "/",
                    "prepend-icon": "mdi-home",
                    class: "rounded-pill"
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pa-4" }, [
                      createVNode(VBtn, {
                        block: "",
                        variant: "tonal",
                        color: "white",
                        to: "/",
                        "prepend-icon": "mdi-home",
                        class: "rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Inicio")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="sidebar-header pa-5" data-v-f0a1638e${_scopeId2}><div class="d-flex align-center mb-3" data-v-f0a1638e${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    color: "gold",
                    size: "28",
                    class: "mr-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-shield-account`);
                      } else {
                        return [
                          createTextVNode("mdi-shield-account")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div data-v-f0a1638e${_scopeId2}><div class="font-serif text-gold" style="${ssrRenderStyle({ "font-size": "0.9rem", "letter-spacing": "1px" })}" data-v-f0a1638e${_scopeId2}>TEMARIO OVA</div><div class="text-caption text-grey-lighten-1" data-v-f0a1638e${_scopeId2}>Derechos Fundamentales</div></div></div><div class="progress-section mt-4" data-v-f0a1638e${_scopeId2}><div class="d-flex justify-space-between align-center mb-2" data-v-f0a1638e${_scopeId2}><span class="text-caption text-grey-lighten-1" data-v-f0a1638e${_scopeId2}>Progreso</span><span class="text-caption text-gold font-weight-bold" data-v-f0a1638e${_scopeId2}>${ssrInterpolate(Math.round((unref(maxTemaDesbloqueado) - 1) / menuTemas.length * 100))}%</span></div><div class="progress-track" data-v-f0a1638e${_scopeId2}><div class="progress-fill" style="${ssrRenderStyle({ width: (unref(maxTemaDesbloqueado) - 1) / menuTemas.length * 100 + "%" })}" data-v-f0a1638e${_scopeId2}></div></div><div class="text-caption text-grey mt-1" data-v-f0a1638e${_scopeId2}>${ssrInterpolate(unref(maxTemaDesbloqueado) - 1)} de ${ssrInterpolate(menuTemas.length)} completados</div></div></div>`);
                  _push3(ssrRenderComponent(VDivider, { class: "border-opacity-25" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VList, {
                    nav: "",
                    class: "pa-3 sidebar-list"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(menuTemas, (item, i) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: i,
                            value: item,
                            rounded: "lg",
                            class: ["mb-1 sidebar-item", {
                              "locked-item": item.id > unref(maxTemaDesbloqueado),
                              "completed-item": item.id < unref(maxTemaDesbloqueado),
                              "active-item": vistaActiva.value === "temas" && temaActual.value.id === item.id
                            }],
                            onClick: ($event) => item.id <= unref(maxTemaDesbloqueado) ? (vistaActiva.value = "temas", temaActual.value = item) : null,
                            active: vistaActiva.value === "temas" && temaActual.value.id === item.id,
                            disabled: item.id > unref(maxTemaDesbloqueado)
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="sidebar-icon-wrapper mr-3" data-v-f0a1638e${_scopeId4}>`);
                                if (item.id > unref(maxTemaDesbloqueado)) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    size: "18",
                                    color: "grey"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-lock`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-lock")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else if (item.id < unref(maxTemaDesbloqueado)) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    size: "18",
                                    color: "green-accent-3"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-check-circle`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-check-circle")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(VIcon, {
                                    size: "18",
                                    color: "gold"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.icon)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.icon), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                                    item.id > unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                      key: 0,
                                      size: "18",
                                      color: "grey"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-lock")
                                      ]),
                                      _: 1
                                    })) : item.id < unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                      key: 1,
                                      size: "18",
                                      color: "green-accent-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check-circle")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(VIcon, {
                                      key: 2,
                                      size: "18",
                                      color: "gold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.icon), 1)
                                      ]),
                                      _: 2
                                    }, 1024))
                                  ])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, {
                                  class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "temas" && temaActual.value.id === item.id }]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.titulo)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.titulo), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, {
                                    class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "temas" && temaActual.value.id === item.id }]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.titulo), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-3 border-opacity-25" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          rounded: "lg",
                          class: ["mb-1 sidebar-item", {
                            "locked-item": !unref(actividadesDesbloqueadas),
                            "active-item": vistaActiva.value === "actividades"
                          }],
                          disabled: !unref(actividadesDesbloqueadas),
                          onClick: ($event) => unref(actividadesDesbloqueadas) ? vistaActiva.value = "actividades" : null,
                          active: vistaActiva.value === "actividades"
                        }, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="sidebar-icon-wrapper mr-3" data-v-f0a1638e${_scopeId4}>`);
                              if (!unref(actividadesDesbloqueadas)) {
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "18",
                                  color: "grey"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-lock`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-lock")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "18",
                                  color: vistaActiva.value === "actividades" ? "gold" : "white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-controller-classic`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-controller-classic")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              }
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                                  !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    size: "18",
                                    color: "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-lock")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VIcon, {
                                    key: 1,
                                    size: "18",
                                    color: vistaActiva.value === "actividades" ? "gold" : "white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-controller-classic")
                                    ]),
                                    _: 1
                                  }, 8, ["color"]))
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, {
                                class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "actividades" }]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Actividades `);
                                    if (!unref(actividadesDesbloqueadas)) {
                                      _push6(ssrRenderComponent(VChip, {
                                        size: "x-small",
                                        color: "grey",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Bloqueado`);
                                          } else {
                                            return [
                                              createTextVNode("Bloqueado")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createTextVNode(" Actividades "),
                                      !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "x-small",
                                        color: "grey",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bloqueado")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, {
                                  class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "actividades" }]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Actividades "),
                                    !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      size: "x-small",
                                      color: "grey",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Bloqueado")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(menuTemas, (item, i) => {
                            return createVNode(VListItem, {
                              key: i,
                              value: item,
                              rounded: "lg",
                              class: ["mb-1 sidebar-item", {
                                "locked-item": item.id > unref(maxTemaDesbloqueado),
                                "completed-item": item.id < unref(maxTemaDesbloqueado),
                                "active-item": vistaActiva.value === "temas" && temaActual.value.id === item.id
                              }],
                              onClick: ($event) => item.id <= unref(maxTemaDesbloqueado) ? (vistaActiva.value = "temas", temaActual.value = item) : null,
                              active: vistaActiva.value === "temas" && temaActual.value.id === item.id,
                              disabled: item.id > unref(maxTemaDesbloqueado)
                            }, {
                              prepend: withCtx(() => [
                                createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                                  item.id > unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    size: "18",
                                    color: "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-lock")
                                    ]),
                                    _: 1
                                  })) : item.id < unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                    key: 1,
                                    size: "18",
                                    color: "green-accent-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-check-circle")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VIcon, {
                                    key: 2,
                                    size: "18",
                                    color: "gold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.icon), 1)
                                    ]),
                                    _: 2
                                  }, 1024))
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "temas" && temaActual.value.id === item.id }]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.titulo), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["value", "onClick", "active", "disabled", "class"]);
                          }), 64)),
                          createVNode(VDivider, { class: "my-3 border-opacity-25" }),
                          createVNode(VListItem, {
                            rounded: "lg",
                            class: ["mb-1 sidebar-item", {
                              "locked-item": !unref(actividadesDesbloqueadas),
                              "active-item": vistaActiva.value === "actividades"
                            }],
                            disabled: !unref(actividadesDesbloqueadas),
                            onClick: ($event) => unref(actividadesDesbloqueadas) ? vistaActiva.value = "actividades" : null,
                            active: vistaActiva.value === "actividades"
                          }, {
                            prepend: withCtx(() => [
                              createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                                !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VIcon, {
                                  key: 0,
                                  size: "18",
                                  color: "grey"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-lock")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VIcon, {
                                  key: 1,
                                  size: "18",
                                  color: vistaActiva.value === "actividades" ? "gold" : "white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-controller-classic")
                                  ]),
                                  _: 1
                                }, 8, ["color"]))
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "actividades" }]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Actividades "),
                                  !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    size: "x-small",
                                    color: "grey",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Bloqueado")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["class"])
                            ]),
                            _: 1
                          }, 8, ["class", "disabled", "onClick", "active"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "sidebar-header pa-5" }, [
                      createVNode("div", { class: "d-flex align-center mb-3" }, [
                        createVNode(VIcon, {
                          color: "gold",
                          size: "28",
                          class: "mr-3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-shield-account")
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode("div", {
                            class: "font-serif text-gold",
                            style: { "font-size": "0.9rem", "letter-spacing": "1px" }
                          }, "TEMARIO OVA"),
                          createVNode("div", { class: "text-caption text-grey-lighten-1" }, "Derechos Fundamentales")
                        ])
                      ]),
                      createVNode("div", { class: "progress-section mt-4" }, [
                        createVNode("div", { class: "d-flex justify-space-between align-center mb-2" }, [
                          createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Progreso"),
                          createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round((unref(maxTemaDesbloqueado) - 1) / menuTemas.length * 100)) + "%", 1)
                        ]),
                        createVNode("div", { class: "progress-track" }, [
                          createVNode("div", {
                            class: "progress-fill",
                            style: { width: (unref(maxTemaDesbloqueado) - 1) / menuTemas.length * 100 + "%" }
                          }, null, 4)
                        ]),
                        createVNode("div", { class: "text-caption text-grey mt-1" }, toDisplayString(unref(maxTemaDesbloqueado) - 1) + " de " + toDisplayString(menuTemas.length) + " completados", 1)
                      ])
                    ]),
                    createVNode(VDivider, { class: "border-opacity-25" }),
                    createVNode(VList, {
                      nav: "",
                      class: "pa-3 sidebar-list"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(menuTemas, (item, i) => {
                          return createVNode(VListItem, {
                            key: i,
                            value: item,
                            rounded: "lg",
                            class: ["mb-1 sidebar-item", {
                              "locked-item": item.id > unref(maxTemaDesbloqueado),
                              "completed-item": item.id < unref(maxTemaDesbloqueado),
                              "active-item": vistaActiva.value === "temas" && temaActual.value.id === item.id
                            }],
                            onClick: ($event) => item.id <= unref(maxTemaDesbloqueado) ? (vistaActiva.value = "temas", temaActual.value = item) : null,
                            active: vistaActiva.value === "temas" && temaActual.value.id === item.id,
                            disabled: item.id > unref(maxTemaDesbloqueado)
                          }, {
                            prepend: withCtx(() => [
                              createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                                item.id > unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                  key: 0,
                                  size: "18",
                                  color: "grey"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-lock")
                                  ]),
                                  _: 1
                                })) : item.id < unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                  key: 1,
                                  size: "18",
                                  color: "green-accent-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-circle")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VIcon, {
                                  key: 2,
                                  size: "18",
                                  color: "gold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.icon), 1)
                                  ]),
                                  _: 2
                                }, 1024))
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "temas" && temaActual.value.id === item.id }]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.titulo), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["value", "onClick", "active", "disabled", "class"]);
                        }), 64)),
                        createVNode(VDivider, { class: "my-3 border-opacity-25" }),
                        createVNode(VListItem, {
                          rounded: "lg",
                          class: ["mb-1 sidebar-item", {
                            "locked-item": !unref(actividadesDesbloqueadas),
                            "active-item": vistaActiva.value === "actividades"
                          }],
                          disabled: !unref(actividadesDesbloqueadas),
                          onClick: ($event) => unref(actividadesDesbloqueadas) ? vistaActiva.value = "actividades" : null,
                          active: vistaActiva.value === "actividades"
                        }, {
                          prepend: withCtx(() => [
                            createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                              !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VIcon, {
                                key: 0,
                                size: "18",
                                color: "grey"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-lock")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(VIcon, {
                                key: 1,
                                size: "18",
                                color: vistaActiva.value === "actividades" ? "gold" : "white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-controller-classic")
                                ]),
                                _: 1
                              }, 8, ["color"]))
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, {
                              class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "actividades" }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Actividades "),
                                !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VChip, {
                                  key: 0,
                                  size: "x-small",
                                  color: "grey",
                                  class: "ml-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bloqueado")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["class", "disabled", "onClick", "active"])
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
                  _push3(`<div class="floating-shapes" data-v-f0a1638e${_scopeId2}><div class="shape shape-1" data-v-f0a1638e${_scopeId2}></div><div class="shape shape-2" data-v-f0a1638e${_scopeId2}></div><div class="shape shape-3" data-v-f0a1638e${_scopeId2}></div><div class="shape shape-4" data-v-f0a1638e${_scopeId2}></div><div class="shape shape-5" data-v-f0a1638e${_scopeId2}></div></div>`);
                  _push3(ssrRenderComponent(VContainer, {
                    fluid: "",
                    class: "pa-8 position-relative z-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VFadeTransition, { mode: "out-in" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (vistaActiva.value === "temas") {
                                _push5(ssrRenderComponent(VRow, {
                                  key: "temas-" + temaActual.value.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "10",
                                        lg: "8",
                                        class: "mx-auto"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              elevation: "0",
                                              class: "rounded-xl overflow-hidden glass-card content-card"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="tema-header pa-6" data-v-f0a1638e${_scopeId7}><div class="d-flex align-center justify-center" data-v-f0a1638e${_scopeId7}><div class="tema-number mr-4" data-v-f0a1638e${_scopeId7}>${ssrInterpolate(String(temaActual.value.id).padStart(2, "0"))}</div><div data-v-f0a1638e${_scopeId7}><h2 class="font-serif text-h5 text-gold" data-v-f0a1638e${_scopeId7}>${ssrInterpolate(temaActual.value.titulo)}</h2>`);
                                                  if (temaActual.value.subtitulo) {
                                                    _push8(`<div class="text-caption text-grey-lighten-1 mt-1" data-v-f0a1638e${_scopeId7}>${ssrInterpolate(temaActual.value.subtitulo)}</div>`);
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  _push8(`</div></div></div>`);
                                                  _push8(ssrRenderComponent(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        if (temaActual.value.imagen) {
                                                          _push9(ssrRenderComponent(VImg, {
                                                            src: temaActual.value.imagen,
                                                            onError: handleImageError,
                                                            height: "340",
                                                            cover: "",
                                                            class: "mb-8 rounded-xl main-image",
                                                            gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                                          }, {
                                                            placeholder: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<div class="d-flex align-center justify-center fill-height" style="${ssrRenderStyle({ "background": "rgba(30,30,30,0.5)" })}" data-v-f0a1638e${_scopeId9}>`);
                                                                _push10(ssrRenderComponent(VProgressCircular, {
                                                                  color: "gold",
                                                                  indeterminate: "",
                                                                  size: "48"
                                                                }, null, _parent10, _scopeId9));
                                                                _push10(`</div>`);
                                                              } else {
                                                                return [
                                                                  createVNode("div", {
                                                                    class: "d-flex align-center justify-center fill-height",
                                                                    style: { "background": "rgba(30,30,30,0.5)" }
                                                                  }, [
                                                                    createVNode(VProgressCircular, {
                                                                      color: "gold",
                                                                      indeterminate: "",
                                                                      size: "48"
                                                                    })
                                                                  ])
                                                                ];
                                                              }
                                                            }),
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<div class="d-flex align-end fill-height pa-6" data-v-f0a1638e${_scopeId9}>`);
                                                                _push10(ssrRenderComponent(VIcon, {
                                                                  size: "32",
                                                                  color: "gold",
                                                                  class: "mr-3 pulse-icon"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(temaActual.value.icon)}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 1
                                                                }, _parent10, _scopeId9));
                                                                _push10(`<span class="font-serif-italic text-h6 text-white" style="${ssrRenderStyle({ "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" })}" data-v-f0a1638e${_scopeId9}>${ssrInterpolate(temaActual.value.subtitulo)}</span></div>`);
                                                              } else {
                                                                return [
                                                                  createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                                    createVNode(VIcon, {
                                                                      size: "32",
                                                                      color: "gold",
                                                                      class: "mr-3 pulse-icon"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode("span", {
                                                                      class: "font-serif-italic text-h6 text-white",
                                                                      style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                                    }, toDisplayString(temaActual.value.subtitulo), 1)
                                                                  ])
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                        _push9(`<div class="content-text" data-v-f0a1638e${_scopeId8}><p class="text-body-1 text-justify" style="${ssrRenderStyle({ "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" })}" data-v-f0a1638e${_scopeId8}>${ssrInterpolate(temaActual.value.contenido)}</p></div>`);
                                                        if (temaActual.value.video) {
                                                          _push9(ssrRenderComponent(VResponsive, {
                                                            "aspect-ratio": 16 / 9,
                                                            class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<iframe${ssrRenderAttr("src", temaActual.value.video)} title="Video explicativo" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen="" loading="lazy" style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0" })}" data-v-f0a1638e${_scopeId9}></iframe>`);
                                                              } else {
                                                                return [
                                                                  createVNode("iframe", {
                                                                    src: temaActual.value.video,
                                                                    title: "Video explicativo",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                                    allowfullscreen: "",
                                                                    loading: "lazy",
                                                                    style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                                  }, null, 8, ["src"])
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                        if (temaActual.value.importante) {
                                                          _push9(ssrRenderComponent(VAlert, {
                                                            border: "start",
                                                            color: "gold",
                                                            theme: "light",
                                                            variant: "tonal",
                                                            class: "mt-6",
                                                            icon: "mdi-information"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(temaActual.value.importante)}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                      } else {
                                                        return [
                                                          temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                                            key: 0,
                                                            src: temaActual.value.imagen,
                                                            onError: handleImageError,
                                                            height: "340",
                                                            cover: "",
                                                            class: "mb-8 rounded-xl main-image",
                                                            gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                                          }, {
                                                            placeholder: withCtx(() => [
                                                              createVNode("div", {
                                                                class: "d-flex align-center justify-center fill-height",
                                                                style: { "background": "rgba(30,30,30,0.5)" }
                                                              }, [
                                                                createVNode(VProgressCircular, {
                                                                  color: "gold",
                                                                  indeterminate: "",
                                                                  size: "48"
                                                                })
                                                              ])
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                                createVNode(VIcon, {
                                                                  size: "32",
                                                                  color: "gold",
                                                                  class: "mr-3 pulse-icon"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode("span", {
                                                                  class: "font-serif-italic text-h6 text-white",
                                                                  style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                                }, toDisplayString(temaActual.value.subtitulo), 1)
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }, 8, ["src"])) : createCommentVNode("", true),
                                                          createVNode("div", { class: "content-text" }, [
                                                            createVNode("p", {
                                                              class: "text-body-1 text-justify",
                                                              style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                                            }, toDisplayString(temaActual.value.contenido), 1)
                                                          ]),
                                                          temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                                            key: 1,
                                                            "aspect-ratio": 16 / 9,
                                                            class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("iframe", {
                                                                src: temaActual.value.video,
                                                                title: "Video explicativo",
                                                                width: "100%",
                                                                height: "100%",
                                                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                                allowfullscreen: "",
                                                                loading: "lazy",
                                                                style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 1
                                                          })) : createCommentVNode("", true),
                                                          temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                                            key: 2,
                                                            border: "start",
                                                            color: "gold",
                                                            theme: "light",
                                                            variant: "tonal",
                                                            class: "mt-6",
                                                            icon: "mdi-information"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                                            ]),
                                                            _: 1
                                                          })) : createCommentVNode("", true)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VDivider, {
                                                    class: "border-opacity-50",
                                                    color: "white"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          variant: "tonal",
                                                          color: "white",
                                                          "prepend-icon": "mdi-chevron-left",
                                                          onClick: ($event) => cambiarTema(-1),
                                                          disabled: temaActual.value.id === 1,
                                                          class: "hover-btn px-6 py-2 rounded-pill"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`Anterior`);
                                                            } else {
                                                              return [
                                                                createTextVNode("Anterior")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        if (temaActual.value.id < menuTemas.length) {
                                                          _push9(ssrRenderComponent(VBtn, {
                                                            color: "gold-btn",
                                                            "append-icon": "mdi-chevron-right",
                                                            onClick: marcarCompletadoYSiguiente,
                                                            class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                        if (temaActual.value.id === menuTemas.length) {
                                                          _push9(ssrRenderComponent(VBtn, {
                                                            color: "green-accent-4",
                                                            variant: "flat",
                                                            "append-icon": "mdi-flag-checkered",
                                                            onClick: marcarComoTerminado,
                                                            class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Ir a Actividades`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Ir a Actividades")
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                      } else {
                                                        return [
                                                          createVNode(VBtn, {
                                                            variant: "tonal",
                                                            color: "white",
                                                            "prepend-icon": "mdi-chevron-left",
                                                            onClick: ($event) => cambiarTema(-1),
                                                            disabled: temaActual.value.id === 1,
                                                            class: "hover-btn px-6 py-2 rounded-pill"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Anterior")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["onClick", "disabled"]),
                                                          temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                            key: 0,
                                                            color: "gold-btn",
                                                            "append-icon": "mdi-chevron-right",
                                                            onClick: marcarCompletadoYSiguiente,
                                                            class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                                            ]),
                                                            _: 1
                                                          })) : createCommentVNode("", true),
                                                          temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                            key: 1,
                                                            color: "green-accent-4",
                                                            variant: "flat",
                                                            "append-icon": "mdi-flag-checkered",
                                                            onClick: marcarComoTerminado,
                                                            class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Ir a Actividades")
                                                            ]),
                                                            _: 1
                                                          })) : createCommentVNode("", true)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "tema-header pa-6" }, [
                                                      createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                        createVNode("div", { class: "tema-number mr-4" }, toDisplayString(String(temaActual.value.id).padStart(2, "0")), 1),
                                                        createVNode("div", null, [
                                                          createVNode("h2", { class: "font-serif text-h5 text-gold" }, toDisplayString(temaActual.value.titulo), 1),
                                                          temaActual.value.subtitulo ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "text-caption text-grey-lighten-1 mt-1"
                                                          }, toDisplayString(temaActual.value.subtitulo), 1)) : createCommentVNode("", true)
                                                        ])
                                                      ])
                                                    ]),
                                                    createVNode(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                                      default: withCtx(() => [
                                                        temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                                          key: 0,
                                                          src: temaActual.value.imagen,
                                                          onError: handleImageError,
                                                          height: "340",
                                                          cover: "",
                                                          class: "mb-8 rounded-xl main-image",
                                                          gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                                        }, {
                                                          placeholder: withCtx(() => [
                                                            createVNode("div", {
                                                              class: "d-flex align-center justify-center fill-height",
                                                              style: { "background": "rgba(30,30,30,0.5)" }
                                                            }, [
                                                              createVNode(VProgressCircular, {
                                                                color: "gold",
                                                                indeterminate: "",
                                                                size: "48"
                                                              })
                                                            ])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                              createVNode(VIcon, {
                                                                size: "32",
                                                                color: "gold",
                                                                class: "mr-3 pulse-icon"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("span", {
                                                                class: "font-serif-italic text-h6 text-white",
                                                                style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                              }, toDisplayString(temaActual.value.subtitulo), 1)
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }, 8, ["src"])) : createCommentVNode("", true),
                                                        createVNode("div", { class: "content-text" }, [
                                                          createVNode("p", {
                                                            class: "text-body-1 text-justify",
                                                            style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                                          }, toDisplayString(temaActual.value.contenido), 1)
                                                        ]),
                                                        temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                                          key: 1,
                                                          "aspect-ratio": 16 / 9,
                                                          class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("iframe", {
                                                              src: temaActual.value.video,
                                                              title: "Video explicativo",
                                                              width: "100%",
                                                              height: "100%",
                                                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                              allowfullscreen: "",
                                                              loading: "lazy",
                                                              style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 1
                                                        })) : createCommentVNode("", true),
                                                        temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                                          key: 2,
                                                          border: "start",
                                                          color: "gold",
                                                          theme: "light",
                                                          variant: "tonal",
                                                          class: "mt-6",
                                                          icon: "mdi-information"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                                          ]),
                                                          _: 1
                                                        })) : createCommentVNode("", true)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VDivider, {
                                                      class: "border-opacity-50",
                                                      color: "white"
                                                    }),
                                                    createVNode(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          variant: "tonal",
                                                          color: "white",
                                                          "prepend-icon": "mdi-chevron-left",
                                                          onClick: ($event) => cambiarTema(-1),
                                                          disabled: temaActual.value.id === 1,
                                                          class: "hover-btn px-6 py-2 rounded-pill"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Anterior")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["onClick", "disabled"]),
                                                        temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                          key: 0,
                                                          color: "gold-btn",
                                                          "append-icon": "mdi-chevron-right",
                                                          onClick: marcarCompletadoYSiguiente,
                                                          class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                                          ]),
                                                          _: 1
                                                        })) : createCommentVNode("", true),
                                                        temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                          key: 1,
                                                          color: "green-accent-4",
                                                          variant: "flat",
                                                          "append-icon": "mdi-flag-checkered",
                                                          onClick: marcarComoTerminado,
                                                          class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Ir a Actividades")
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
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                elevation: "0",
                                                class: "rounded-xl overflow-hidden glass-card content-card"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "tema-header pa-6" }, [
                                                    createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                      createVNode("div", { class: "tema-number mr-4" }, toDisplayString(String(temaActual.value.id).padStart(2, "0")), 1),
                                                      createVNode("div", null, [
                                                        createVNode("h2", { class: "font-serif text-h5 text-gold" }, toDisplayString(temaActual.value.titulo), 1),
                                                        temaActual.value.subtitulo ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "text-caption text-grey-lighten-1 mt-1"
                                                        }, toDisplayString(temaActual.value.subtitulo), 1)) : createCommentVNode("", true)
                                                      ])
                                                    ])
                                                  ]),
                                                  createVNode(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                                    default: withCtx(() => [
                                                      temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                                        key: 0,
                                                        src: temaActual.value.imagen,
                                                        onError: handleImageError,
                                                        height: "340",
                                                        cover: "",
                                                        class: "mb-8 rounded-xl main-image",
                                                        gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                                      }, {
                                                        placeholder: withCtx(() => [
                                                          createVNode("div", {
                                                            class: "d-flex align-center justify-center fill-height",
                                                            style: { "background": "rgba(30,30,30,0.5)" }
                                                          }, [
                                                            createVNode(VProgressCircular, {
                                                              color: "gold",
                                                              indeterminate: "",
                                                              size: "48"
                                                            })
                                                          ])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                            createVNode(VIcon, {
                                                              size: "32",
                                                              color: "gold",
                                                              class: "mr-3 pulse-icon"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("span", {
                                                              class: "font-serif-italic text-h6 text-white",
                                                              style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                            }, toDisplayString(temaActual.value.subtitulo), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }, 8, ["src"])) : createCommentVNode("", true),
                                                      createVNode("div", { class: "content-text" }, [
                                                        createVNode("p", {
                                                          class: "text-body-1 text-justify",
                                                          style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                                        }, toDisplayString(temaActual.value.contenido), 1)
                                                      ]),
                                                      temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                                        key: 1,
                                                        "aspect-ratio": 16 / 9,
                                                        class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("iframe", {
                                                            src: temaActual.value.video,
                                                            title: "Video explicativo",
                                                            width: "100%",
                                                            height: "100%",
                                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                            allowfullscreen: "",
                                                            loading: "lazy",
                                                            style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true),
                                                      temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                                        key: 2,
                                                        border: "start",
                                                        color: "gold",
                                                        theme: "light",
                                                        variant: "tonal",
                                                        class: "mt-6",
                                                        icon: "mdi-information"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VDivider, {
                                                    class: "border-opacity-50",
                                                    color: "white"
                                                  }),
                                                  createVNode(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        variant: "tonal",
                                                        color: "white",
                                                        "prepend-icon": "mdi-chevron-left",
                                                        onClick: ($event) => cambiarTema(-1),
                                                        disabled: temaActual.value.id === 1,
                                                        class: "hover-btn px-6 py-2 rounded-pill"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Anterior")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick", "disabled"]),
                                                      temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                        key: 0,
                                                        color: "gold-btn",
                                                        "append-icon": "mdi-chevron-right",
                                                        onClick: marcarCompletadoYSiguiente,
                                                        class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true),
                                                      temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                        key: 1,
                                                        color: "green-accent-4",
                                                        variant: "flat",
                                                        "append-icon": "mdi-flag-checkered",
                                                        onClick: marcarComoTerminado,
                                                        class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Ir a Actividades")
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "10",
                                          lg: "8",
                                          class: "mx-auto"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              elevation: "0",
                                              class: "rounded-xl overflow-hidden glass-card content-card"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "tema-header pa-6" }, [
                                                  createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                    createVNode("div", { class: "tema-number mr-4" }, toDisplayString(String(temaActual.value.id).padStart(2, "0")), 1),
                                                    createVNode("div", null, [
                                                      createVNode("h2", { class: "font-serif text-h5 text-gold" }, toDisplayString(temaActual.value.titulo), 1),
                                                      temaActual.value.subtitulo ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "text-caption text-grey-lighten-1 mt-1"
                                                      }, toDisplayString(temaActual.value.subtitulo), 1)) : createCommentVNode("", true)
                                                    ])
                                                  ])
                                                ]),
                                                createVNode(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                                  default: withCtx(() => [
                                                    temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                                      key: 0,
                                                      src: temaActual.value.imagen,
                                                      onError: handleImageError,
                                                      height: "340",
                                                      cover: "",
                                                      class: "mb-8 rounded-xl main-image",
                                                      gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                                    }, {
                                                      placeholder: withCtx(() => [
                                                        createVNode("div", {
                                                          class: "d-flex align-center justify-center fill-height",
                                                          style: { "background": "rgba(30,30,30,0.5)" }
                                                        }, [
                                                          createVNode(VProgressCircular, {
                                                            color: "gold",
                                                            indeterminate: "",
                                                            size: "48"
                                                          })
                                                        ])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                          createVNode(VIcon, {
                                                            size: "32",
                                                            color: "gold",
                                                            class: "mr-3 pulse-icon"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode("span", {
                                                            class: "font-serif-italic text-h6 text-white",
                                                            style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                          }, toDisplayString(temaActual.value.subtitulo), 1)
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }, 8, ["src"])) : createCommentVNode("", true),
                                                    createVNode("div", { class: "content-text" }, [
                                                      createVNode("p", {
                                                        class: "text-body-1 text-justify",
                                                        style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                                      }, toDisplayString(temaActual.value.contenido), 1)
                                                    ]),
                                                    temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                                      key: 1,
                                                      "aspect-ratio": 16 / 9,
                                                      class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("iframe", {
                                                          src: temaActual.value.video,
                                                          title: "Video explicativo",
                                                          width: "100%",
                                                          height: "100%",
                                                          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                          allowfullscreen: "",
                                                          loading: "lazy",
                                                          style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true),
                                                    temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                                      key: 2,
                                                      border: "start",
                                                      color: "gold",
                                                      theme: "light",
                                                      variant: "tonal",
                                                      class: "mt-6",
                                                      icon: "mdi-information"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VDivider, {
                                                  class: "border-opacity-50",
                                                  color: "white"
                                                }),
                                                createVNode(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      variant: "tonal",
                                                      color: "white",
                                                      "prepend-icon": "mdi-chevron-left",
                                                      onClick: ($event) => cambiarTema(-1),
                                                      disabled: temaActual.value.id === 1,
                                                      class: "hover-btn px-6 py-2 rounded-pill"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Anterior")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick", "disabled"]),
                                                    temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                      key: 0,
                                                      color: "gold-btn",
                                                      "append-icon": "mdi-chevron-right",
                                                      onClick: marcarCompletadoYSiguiente,
                                                      class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true),
                                                    temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                      key: 1,
                                                      color: "green-accent-4",
                                                      variant: "flat",
                                                      "append-icon": "mdi-flag-checkered",
                                                      onClick: marcarComoTerminado,
                                                      class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Ir a Actividades")
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
                                }, _parent5, _scopeId4));
                              } else if (vistaActiva.value === "actividades") {
                                _push5(ssrRenderComponent(VRow, { key: "actividades" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "10",
                                        lg: "9",
                                        class: "mx-auto"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-center mb-10 slide-fade-enter-active" data-v-f0a1638e${_scopeId6}><div class="d-flex justify-center align-center mb-4" data-v-f0a1638e${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: "gold",
                                              size: "36",
                                              class: "mr-3 pulse-icon"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-trophy`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-trophy")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`<h1 class="font-serif text-h4 text-gold text-glow" data-v-f0a1638e${_scopeId6}>ACTIVIDADES INTERACTIVAS</h1></div><p class="text-subtitle-1 font-serif-italic text-grey-lighten-2" data-v-f0a1638e${_scopeId6}> Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente. </p><div class="mt-4 mx-auto" style="${ssrRenderStyle({ "max-width": "420px" })}" data-v-f0a1638e${_scopeId6}><div class="d-flex justify-space-between mb-1" data-v-f0a1638e${_scopeId6}><span class="text-caption text-grey-lighten-1" data-v-f0a1638e${_scopeId6}>Actividades completadas</span><span class="text-caption text-gold font-weight-bold" data-v-f0a1638e${_scopeId6}>${ssrInterpolate(unref(progresoActividades))} / ${ssrInterpolate(listaActividades.length)}</span></div><div class="progress-track" data-v-f0a1638e${_scopeId6}><div class="progress-fill" style="${ssrRenderStyle({ width: unref(progresoActividades) / listaActividades.length * 100 + "%" })}" data-v-f0a1638e${_scopeId6}></div></div></div></div>`);
                                            _push7(ssrRenderComponent(VRow, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(listaActividades, (act, idx) => {
                                                    _push8(ssrRenderComponent(VCol, {
                                                      key: idx,
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VCard, {
                                                            elevation: "0",
                                                            class: ["rounded-xl glass-card activity-card mb-4", {
                                                              "locked-activity": idx > unref(progresoActividades),
                                                              "completed-activity": idx < unref(progresoActividades)
                                                            }],
                                                            style: { animationDelay: `${idx * 0.15}s` }
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<div class="activity-header pa-5 d-flex align-center" data-v-f0a1638e${_scopeId9}><div class="activity-number-badge mr-4" data-v-f0a1638e${_scopeId9}>`);
                                                                if (idx < unref(progresoActividades)) {
                                                                  _push10(ssrRenderComponent(VIcon, {
                                                                    color: "green-accent-3",
                                                                    size: "28"
                                                                  }, {
                                                                    default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                      if (_push11) {
                                                                        _push11(`mdi-check-circle`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-check-circle")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent10, _scopeId9));
                                                                } else if (idx > unref(progresoActividades)) {
                                                                  _push10(ssrRenderComponent(VIcon, {
                                                                    color: "grey",
                                                                    size: "28"
                                                                  }, {
                                                                    default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                      if (_push11) {
                                                                        _push11(`mdi-lock`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-lock")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent10, _scopeId9));
                                                                } else {
                                                                  _push10(`<span class="font-serif text-gold" style="${ssrRenderStyle({ "font-size": "1.4rem", "font-weight": "700" })}" data-v-f0a1638e${_scopeId9}>${ssrInterpolate(idx + 1)}</span>`);
                                                                }
                                                                _push10(`</div><div class="flex-grow-1" data-v-f0a1638e${_scopeId9}><div class="text-overline text-amber-lighten-3" style="${ssrRenderStyle({ "letter-spacing": "2px" })}" data-v-f0a1638e${_scopeId9}>${ssrInterpolate(act.tipo)}</div><h3 class="font-serif text-h6 text-white" data-v-f0a1638e${_scopeId9}>${ssrInterpolate(act.titulo)}</h3></div>`);
                                                                _push10(ssrRenderComponent(VIcon, {
                                                                  color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                                  size: "32"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(act.icono)}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(act.icono), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                _push10(`</div>`);
                                                                _push10(ssrRenderComponent(VDivider, { class: "border-opacity-20" }, null, _parent10, _scopeId9));
                                                                _push10(ssrRenderComponent(VExpandTransition, null, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      if (idx <= unref(progresoActividades)) {
                                                                        _push11(`<div data-v-f0a1638e${_scopeId10}>`);
                                                                        if (idx === 0) {
                                                                          _push11(`<div class="pa-6" data-v-f0a1638e${_scopeId10}><p class="text-body-2 text-grey-lighten-2 mb-6" style="${ssrRenderStyle({ "line-height": "1.8" })}" data-v-f0a1638e${_scopeId10}>${ssrInterpolate(act.descripcion)}</p><!--[-->`);
                                                                          ssrRenderList(act.preguntas, (preg, pi) => {
                                                                            _push11(`<div class="quiz-question mb-6" data-v-f0a1638e${_scopeId10}><p class="text-body-1 text-white font-weight-bold mb-3" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VIcon, {
                                                                              color: "gold",
                                                                              size: "16",
                                                                              class: "mr-1"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`mdi-help-circle`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("mdi-help-circle")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(` ${ssrInterpolate(pi + 1)}. ${ssrInterpolate(preg.pregunta)}</p>`);
                                                                            _push11(ssrRenderComponent(VRadioGroup, {
                                                                              modelValue: respuestasQuiz.value[pi],
                                                                              "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                              disabled: quizEnviado.value,
                                                                              class: "mt-0"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`<!--[-->`);
                                                                                  ssrRenderList(preg.opciones, (op, oi) => {
                                                                                    _push12(ssrRenderComponent(VRadio, {
                                                                                      key: oi,
                                                                                      label: op,
                                                                                      value: oi,
                                                                                      color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                                      class: "quiz-radio mb-1"
                                                                                    }, null, _parent12, _scopeId11));
                                                                                  });
                                                                                  _push12(`<!--]-->`);
                                                                                } else {
                                                                                  return [
                                                                                    (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                                      return openBlock(), createBlock(VRadio, {
                                                                                        key: oi,
                                                                                        label: op,
                                                                                        value: oi,
                                                                                        color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                                        class: "quiz-radio mb-1"
                                                                                      }, null, 8, ["label", "value", "color"]);
                                                                                    }), 128))
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(ssrRenderComponent(VExpandTransition, null, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  if (quizEnviado.value) {
                                                                                    _push12(ssrRenderComponent(VAlert, {
                                                                                      variant: "tonal",
                                                                                      color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                                      icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                                      density: "compact",
                                                                                      class: "mt-2"
                                                                                    }, {
                                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                                        if (_push13) {
                                                                                          if (respuestasQuiz.value[pi] === preg.correcta) {
                                                                                            _push13(`<span data-v-f0a1638e${_scopeId12}>¡Correcto! ${ssrInterpolate(preg.explicacion)}</span>`);
                                                                                          } else {
                                                                                            _push13(`<span data-v-f0a1638e${_scopeId12}>Incorrecto. La respuesta correcta es: <strong data-v-f0a1638e${_scopeId12}>${ssrInterpolate(preg.opciones[preg.correcta])}</strong>. ${ssrInterpolate(preg.explicacion)}</span>`);
                                                                                          }
                                                                                        } else {
                                                                                          return [
                                                                                            respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                              createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                              createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                              createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                                            ]))
                                                                                          ];
                                                                                        }
                                                                                      }),
                                                                                      _: 2
                                                                                    }, _parent12, _scopeId11));
                                                                                  } else {
                                                                                    _push12(`<!---->`);
                                                                                  }
                                                                                } else {
                                                                                  return [
                                                                                    quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                                      key: 0,
                                                                                      variant: "tonal",
                                                                                      color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                                      icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                                      density: "compact",
                                                                                      class: "mt-2"
                                                                                    }, {
                                                                                      default: withCtx(() => [
                                                                                        respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                          createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                          createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                          createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                                        ]))
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`</div>`);
                                                                          });
                                                                          _push11(`<!--]-->`);
                                                                          if (!quizEnviado.value) {
                                                                            _push11(`<div class="d-flex justify-end mt-2" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VBtn, {
                                                                              color: "gold-btn",
                                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                              disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                              onClick: ($event) => enviarQuiz(),
                                                                              "append-icon": "mdi-send"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`Enviar respuestas`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("Enviar respuestas")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`</div>`);
                                                                          } else {
                                                                            _push11(`<!---->`);
                                                                          }
                                                                          if (quizEnviado.value && idx === unref(progresoActividades)) {
                                                                            _push11(ssrRenderComponent(VAlert, {
                                                                              color: "gold",
                                                                              variant: "tonal",
                                                                              icon: "mdi-trophy",
                                                                              class: "mt-4"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(` Obtuviste <strong data-v-f0a1638e${_scopeId11}>${ssrInterpolate(puntajeQuiz.value)}</strong> de <strong data-v-f0a1638e${_scopeId11}>${ssrInterpolate(act.preguntas.length)}</strong> respuestas correctas. `);
                                                                                  if (puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6)) {
                                                                                    _push12(`<span data-v-f0a1638e${_scopeId11}> ¡Muy bien! Puedes continuar.</span>`);
                                                                                  } else {
                                                                                    _push12(`<span data-v-f0a1638e${_scopeId11}> Intenta repasar los temas e inténtalo de nuevo.</span>`);
                                                                                  }
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode(" Obtuviste "),
                                                                                    createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                                    createTextVNode(" de "),
                                                                                    createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                                    createTextVNode(" respuestas correctas. "),
                                                                                    puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                          } else {
                                                                            _push11(`<!---->`);
                                                                          }
                                                                          if (quizEnviado.value && idx === unref(progresoActividades)) {
                                                                            _push11(`<div class="d-flex justify-end mt-4 gap-3" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VBtn, {
                                                                              variant: "outlined",
                                                                              color: "white",
                                                                              class: "rounded-pill",
                                                                              onClick: reiniciarQuiz,
                                                                              "prepend-icon": "mdi-refresh"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`Reintentar`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("Reintentar")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            if (puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6)) {
                                                                              _push11(ssrRenderComponent(VBtn, {
                                                                                color: "green-accent-4",
                                                                                variant: "flat",
                                                                                class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                                onClick: ($event) => completarActividad(idx),
                                                                                "append-icon": "mdi-arrow-right"
                                                                              }, {
                                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                  if (_push12) {
                                                                                    _push12(`Siguiente Actividad`);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode("Siguiente Actividad")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 2
                                                                              }, _parent11, _scopeId10));
                                                                            } else {
                                                                              _push11(`<!---->`);
                                                                            }
                                                                            _push11(`</div>`);
                                                                          } else {
                                                                            _push11(`<!---->`);
                                                                          }
                                                                          _push11(`</div>`);
                                                                        } else if (idx === 1) {
                                                                          _push11(`<div class="pa-6" data-v-f0a1638e${_scopeId10}><p class="text-body-2 text-grey-lighten-2 mb-6" style="${ssrRenderStyle({ "line-height": "1.8" })}" data-v-f0a1638e${_scopeId10}>${ssrInterpolate(act.descripcion)}</p><!--[-->`);
                                                                          ssrRenderList(act.casos, (caso, ci) => {
                                                                            _push11(`<div class="caso-card mb-6 pa-4 rounded-lg" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" })}" data-v-f0a1638e${_scopeId10}><div class="d-flex align-start mb-3" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VIcon, {
                                                                              color: "amber-lighten-2",
                                                                              size: "20",
                                                                              class: "mr-2 mt-1"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`mdi-file-document-edit`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("mdi-file-document-edit")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`<p class="text-body-1 text-white font-weight-bold" data-v-f0a1638e${_scopeId10}>Caso ${ssrInterpolate(ci + 1)}: ${ssrInterpolate(caso.titulo)}</p></div><p class="text-body-2 text-grey-lighten-2 mb-4" style="${ssrRenderStyle({ "line-height": "1.8" })}" data-v-f0a1638e${_scopeId10}>${ssrInterpolate(caso.descripcion)}</p>`);
                                                                            _push11(ssrRenderComponent(VSelect, {
                                                                              modelValue: respuestasCasos.value[ci],
                                                                              "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                              items: opcionesDerechos,
                                                                              label: "¿Qué derecho fundamental fue vulnerado?",
                                                                              variant: "outlined",
                                                                              color: "gold",
                                                                              theme: "dark",
                                                                              disabled: casosEnviados.value,
                                                                              density: "comfortable",
                                                                              class: "caso-select"
                                                                            }, null, _parent11, _scopeId10));
                                                                            _push11(ssrRenderComponent(VExpandTransition, null, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  if (casosEnviados.value) {
                                                                                    _push12(ssrRenderComponent(VAlert, {
                                                                                      variant: "tonal",
                                                                                      color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                                      icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                                      density: "compact",
                                                                                      class: "mt-2"
                                                                                    }, {
                                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                                        if (_push13) {
                                                                                          if (respuestasCasos.value[ci] === caso.respuesta) {
                                                                                            _push13(`<span data-v-f0a1638e${_scopeId12}>¡Correcto! ${ssrInterpolate(caso.explicacion)}</span>`);
                                                                                          } else {
                                                                                            _push13(`<span data-v-f0a1638e${_scopeId12}>La respuesta esperada era: <strong data-v-f0a1638e${_scopeId12}>${ssrInterpolate(caso.respuesta)}</strong>. ${ssrInterpolate(caso.explicacion)}</span>`);
                                                                                          }
                                                                                        } else {
                                                                                          return [
                                                                                            respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                              createTextVNode("La respuesta esperada era: "),
                                                                                              createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                              createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                                            ]))
                                                                                          ];
                                                                                        }
                                                                                      }),
                                                                                      _: 2
                                                                                    }, _parent12, _scopeId11));
                                                                                  } else {
                                                                                    _push12(`<!---->`);
                                                                                  }
                                                                                } else {
                                                                                  return [
                                                                                    casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                                      key: 0,
                                                                                      variant: "tonal",
                                                                                      color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                                      icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                                      density: "compact",
                                                                                      class: "mt-2"
                                                                                    }, {
                                                                                      default: withCtx(() => [
                                                                                        respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                          createTextVNode("La respuesta esperada era: "),
                                                                                          createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                          createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                                        ]))
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`</div>`);
                                                                          });
                                                                          _push11(`<!--]-->`);
                                                                          if (!casosEnviados.value) {
                                                                            _push11(`<div class="d-flex justify-end" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VBtn, {
                                                                              color: "gold-btn",
                                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                              disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                              onClick: ($event) => enviarCasos(),
                                                                              "append-icon": "mdi-send"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`Enviar análisis`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("Enviar análisis")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`</div>`);
                                                                          } else {
                                                                            _push11(`<!---->`);
                                                                          }
                                                                          if (casosEnviados.value && idx === unref(progresoActividades)) {
                                                                            _push11(`<div class="d-flex justify-end mt-4" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VBtn, {
                                                                              color: "green-accent-4",
                                                                              variant: "flat",
                                                                              class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                              onClick: ($event) => completarActividad(idx),
                                                                              "append-icon": "mdi-arrow-right"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`Siguiente Actividad`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("Siguiente Actividad")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`</div>`);
                                                                          } else {
                                                                            _push11(`<!---->`);
                                                                          }
                                                                          _push11(`</div>`);
                                                                        } else if (idx === 2) {
                                                                          _push11(`<div class="pa-6" data-v-f0a1638e${_scopeId10}><p class="text-body-2 text-grey-lighten-2 mb-6" style="${ssrRenderStyle({ "line-height": "1.8" })}" data-v-f0a1638e${_scopeId10}>${ssrInterpolate(act.descripcion)}</p><!--[-->`);
                                                                          ssrRenderList(act.reflexiones, (preg, ri) => {
                                                                            _push11(`<div class="mb-6" data-v-f0a1638e${_scopeId10}><p class="text-body-1 text-white font-weight-bold mb-3" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VIcon, {
                                                                              color: "gold",
                                                                              size: "16",
                                                                              class: "mr-1"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`mdi-pencil`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("mdi-pencil")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(` ${ssrInterpolate(ri + 1)}. ${ssrInterpolate(preg)}</p>`);
                                                                            _push11(ssrRenderComponent(VTextarea, {
                                                                              modelValue: reflexiones.value[ri],
                                                                              "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                              variant: "outlined",
                                                                              color: "gold",
                                                                              theme: "dark",
                                                                              rows: "3",
                                                                              "auto-grow": "",
                                                                              disabled: reflexionEnviada.value,
                                                                              placeholder: "Escribe tu reflexión aquí...",
                                                                              class: "reflexion-textarea"
                                                                            }, null, _parent11, _scopeId10));
                                                                            _push11(`</div>`);
                                                                          });
                                                                          _push11(`<!--]-->`);
                                                                          if (!reflexionEnviada.value) {
                                                                            _push11(`<div class="d-flex justify-end" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VBtn, {
                                                                              color: "gold-btn",
                                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                              disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                              onClick: ($event) => enviarReflexion(),
                                                                              "append-icon": "mdi-check"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`Enviar reflexión`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("Enviar reflexión")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`</div>`);
                                                                          } else {
                                                                            _push11(`<!---->`);
                                                                          }
                                                                          if (reflexionEnviada.value && idx === unref(progresoActividades)) {
                                                                            _push11(`<div data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VAlert, {
                                                                              color: "green",
                                                                              variant: "tonal",
                                                                              icon: "mdi-star",
                                                                              class: "mt-4"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(` ¡Excelente reflexión! Has completado todas las actividades del OVA. `);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`<div class="d-flex justify-center mt-6" data-v-f0a1638e${_scopeId10}>`);
                                                                            _push11(ssrRenderComponent(VBtn, {
                                                                              color: "gold-btn",
                                                                              size: "large",
                                                                              class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                              onClick: ($event) => completarActividad(idx),
                                                                              "append-icon": "mdi-trophy"
                                                                            }, {
                                                                              default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                                if (_push12) {
                                                                                  _push12(`¡Finalizar OVA!`);
                                                                                } else {
                                                                                  return [
                                                                                    createTextVNode("¡Finalizar OVA!")
                                                                                  ];
                                                                                }
                                                                              }),
                                                                              _: 2
                                                                            }, _parent11, _scopeId10));
                                                                            _push11(`</div></div>`);
                                                                          } else {
                                                                            _push11(`<!---->`);
                                                                          }
                                                                          _push11(`</div>`);
                                                                        } else {
                                                                          _push11(`<!---->`);
                                                                        }
                                                                        if (idx < unref(progresoActividades)) {
                                                                          _push11(`<div class="pa-4 d-flex align-center justify-center" style="${ssrRenderStyle({ "background": "rgba(105,240,174,0.05)" })}" data-v-f0a1638e${_scopeId10}>`);
                                                                          _push11(ssrRenderComponent(VIcon, {
                                                                            color: "green-accent-3",
                                                                            size: "20",
                                                                            class: "mr-2"
                                                                          }, {
                                                                            default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                              if (_push12) {
                                                                                _push12(`mdi-check-all`);
                                                                              } else {
                                                                                return [
                                                                                  createTextVNode("mdi-check-all")
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent11, _scopeId10));
                                                                          _push11(`<span class="text-green-accent-3 font-weight-bold" data-v-f0a1638e${_scopeId10}>Actividad completada</span></div>`);
                                                                        } else {
                                                                          _push11(`<!---->`);
                                                                        }
                                                                        _push11(`</div>`);
                                                                      } else {
                                                                        _push11(`<!---->`);
                                                                      }
                                                                    } else {
                                                                      return [
                                                                        idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                                          idx === 0 ? (openBlock(), createBlock("div", {
                                                                            key: 0,
                                                                            class: "pa-6"
                                                                          }, [
                                                                            createVNode("p", {
                                                                              class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                              style: { "line-height": "1.8" }
                                                                            }, toDisplayString(act.descripcion), 1),
                                                                            (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                                              return openBlock(), createBlock("div", {
                                                                                key: pi,
                                                                                class: "quiz-question mb-6"
                                                                              }, [
                                                                                createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                                  createVNode(VIcon, {
                                                                                    color: "gold",
                                                                                    size: "16",
                                                                                    class: "mr-1"
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createTextVNode("mdi-help-circle")
                                                                                    ]),
                                                                                    _: 1
                                                                                  }),
                                                                                  createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                                ]),
                                                                                createVNode(VRadioGroup, {
                                                                                  modelValue: respuestasQuiz.value[pi],
                                                                                  "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                                  disabled: quizEnviado.value,
                                                                                  class: "mt-0"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                                      return openBlock(), createBlock(VRadio, {
                                                                                        key: oi,
                                                                                        label: op,
                                                                                        value: oi,
                                                                                        color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                                        class: "quiz-radio mb-1"
                                                                                      }, null, 8, ["label", "value", "color"]);
                                                                                    }), 128))
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                                createVNode(VExpandTransition, null, {
                                                                                  default: withCtx(() => [
                                                                                    quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                                      key: 0,
                                                                                      variant: "tonal",
                                                                                      color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                                      icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                                      density: "compact",
                                                                                      class: "mt-2"
                                                                                    }, {
                                                                                      default: withCtx(() => [
                                                                                        respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                          createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                          createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                          createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                                        ]))
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1024)
                                                                              ]);
                                                                            }), 128)),
                                                                            !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                                              key: 0,
                                                                              class: "d-flex justify-end mt-2"
                                                                            }, [
                                                                              createVNode(VBtn, {
                                                                                color: "gold-btn",
                                                                                class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                                disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                                onClick: ($event) => enviarQuiz(),
                                                                                "append-icon": "mdi-send"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Enviar respuestas")
                                                                                ]),
                                                                                _: 1
                                                                              }, 8, ["disabled", "onClick"])
                                                                            ])) : createCommentVNode("", true),
                                                                            quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                                              key: 1,
                                                                              color: "gold",
                                                                              variant: "tonal",
                                                                              icon: "mdi-trophy",
                                                                              class: "mt-4"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" Obtuviste "),
                                                                                createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                                createTextVNode(" de "),
                                                                                createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                                createTextVNode(" respuestas correctas. "),
                                                                                puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)) : createCommentVNode("", true),
                                                                            quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                              key: 2,
                                                                              class: "d-flex justify-end mt-4 gap-3"
                                                                            }, [
                                                                              createVNode(VBtn, {
                                                                                variant: "outlined",
                                                                                color: "white",
                                                                                class: "rounded-pill",
                                                                                onClick: reiniciarQuiz,
                                                                                "prepend-icon": "mdi-refresh"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Reintentar")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                                key: 0,
                                                                                color: "green-accent-4",
                                                                                variant: "flat",
                                                                                class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                                onClick: ($event) => completarActividad(idx),
                                                                                "append-icon": "mdi-arrow-right"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Siguiente Actividad")
                                                                                ]),
                                                                                _: 1
                                                                              }, 8, ["onClick"])) : createCommentVNode("", true)
                                                                            ])) : createCommentVNode("", true)
                                                                          ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                                            key: 1,
                                                                            class: "pa-6"
                                                                          }, [
                                                                            createVNode("p", {
                                                                              class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                              style: { "line-height": "1.8" }
                                                                            }, toDisplayString(act.descripcion), 1),
                                                                            (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                                              return openBlock(), createBlock("div", {
                                                                                key: ci,
                                                                                class: "caso-card mb-6 pa-4 rounded-lg",
                                                                                style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                                              }, [
                                                                                createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                                  createVNode(VIcon, {
                                                                                    color: "amber-lighten-2",
                                                                                    size: "20",
                                                                                    class: "mr-2 mt-1"
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createTextVNode("mdi-file-document-edit")
                                                                                    ]),
                                                                                    _: 1
                                                                                  }),
                                                                                  createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                                ]),
                                                                                createVNode("p", {
                                                                                  class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                                  style: { "line-height": "1.8" }
                                                                                }, toDisplayString(caso.descripcion), 1),
                                                                                createVNode(VSelect, {
                                                                                  modelValue: respuestasCasos.value[ci],
                                                                                  "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                                  items: opcionesDerechos,
                                                                                  label: "¿Qué derecho fundamental fue vulnerado?",
                                                                                  variant: "outlined",
                                                                                  color: "gold",
                                                                                  theme: "dark",
                                                                                  disabled: casosEnviados.value,
                                                                                  density: "comfortable",
                                                                                  class: "caso-select"
                                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                                createVNode(VExpandTransition, null, {
                                                                                  default: withCtx(() => [
                                                                                    casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                                      key: 0,
                                                                                      variant: "tonal",
                                                                                      color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                                      icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                                      density: "compact",
                                                                                      class: "mt-2"
                                                                                    }, {
                                                                                      default: withCtx(() => [
                                                                                        respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                          createTextVNode("La respuesta esperada era: "),
                                                                                          createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                          createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                                        ]))
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1024)
                                                                              ]);
                                                                            }), 128)),
                                                                            !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                                              key: 0,
                                                                              class: "d-flex justify-end"
                                                                            }, [
                                                                              createVNode(VBtn, {
                                                                                color: "gold-btn",
                                                                                class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                                disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                                onClick: ($event) => enviarCasos(),
                                                                                "append-icon": "mdi-send"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Enviar análisis")
                                                                                ]),
                                                                                _: 1
                                                                              }, 8, ["disabled", "onClick"])
                                                                            ])) : createCommentVNode("", true),
                                                                            casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                              key: 1,
                                                                              class: "d-flex justify-end mt-4"
                                                                            }, [
                                                                              createVNode(VBtn, {
                                                                                color: "green-accent-4",
                                                                                variant: "flat",
                                                                                class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                                onClick: ($event) => completarActividad(idx),
                                                                                "append-icon": "mdi-arrow-right"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Siguiente Actividad")
                                                                                ]),
                                                                                _: 1
                                                                              }, 8, ["onClick"])
                                                                            ])) : createCommentVNode("", true)
                                                                          ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                                            key: 2,
                                                                            class: "pa-6"
                                                                          }, [
                                                                            createVNode("p", {
                                                                              class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                              style: { "line-height": "1.8" }
                                                                            }, toDisplayString(act.descripcion), 1),
                                                                            (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                                              return openBlock(), createBlock("div", {
                                                                                key: ri,
                                                                                class: "mb-6"
                                                                              }, [
                                                                                createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                                  createVNode(VIcon, {
                                                                                    color: "gold",
                                                                                    size: "16",
                                                                                    class: "mr-1"
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createTextVNode("mdi-pencil")
                                                                                    ]),
                                                                                    _: 1
                                                                                  }),
                                                                                  createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                                ]),
                                                                                createVNode(VTextarea, {
                                                                                  modelValue: reflexiones.value[ri],
                                                                                  "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                                  variant: "outlined",
                                                                                  color: "gold",
                                                                                  theme: "dark",
                                                                                  rows: "3",
                                                                                  "auto-grow": "",
                                                                                  disabled: reflexionEnviada.value,
                                                                                  placeholder: "Escribe tu reflexión aquí...",
                                                                                  class: "reflexion-textarea"
                                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                                              ]);
                                                                            }), 128)),
                                                                            !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                                              key: 0,
                                                                              class: "d-flex justify-end"
                                                                            }, [
                                                                              createVNode(VBtn, {
                                                                                color: "gold-btn",
                                                                                class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                                disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                                onClick: ($event) => enviarReflexion(),
                                                                                "append-icon": "mdi-check"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Enviar reflexión")
                                                                                ]),
                                                                                _: 1
                                                                              }, 8, ["disabled", "onClick"])
                                                                            ])) : createCommentVNode("", true),
                                                                            reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                                              createVNode(VAlert, {
                                                                                color: "green",
                                                                                variant: "tonal",
                                                                                icon: "mdi-star",
                                                                                class: "mt-4"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                                createVNode(VBtn, {
                                                                                  color: "gold-btn",
                                                                                  size: "large",
                                                                                  class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                                  onClick: ($event) => completarActividad(idx),
                                                                                  "append-icon": "mdi-trophy"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode("¡Finalizar OVA!")
                                                                                  ]),
                                                                                  _: 1
                                                                                }, 8, ["onClick"])
                                                                              ])
                                                                            ])) : createCommentVNode("", true)
                                                                          ])) : createCommentVNode("", true),
                                                                          idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                            key: 3,
                                                                            class: "pa-4 d-flex align-center justify-center",
                                                                            style: { "background": "rgba(105,240,174,0.05)" }
                                                                          }, [
                                                                            createVNode(VIcon, {
                                                                              color: "green-accent-3",
                                                                              size: "20",
                                                                              class: "mr-2"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("mdi-check-all")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                                          ])) : createCommentVNode("", true)
                                                                        ])) : createCommentVNode("", true)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                if (idx > unref(progresoActividades)) {
                                                                  _push10(`<div class="pa-4 d-flex align-center justify-center locked-msg" data-v-f0a1638e${_scopeId9}>`);
                                                                  _push10(ssrRenderComponent(VIcon, {
                                                                    color: "grey",
                                                                    size: "18",
                                                                    class: "mr-2"
                                                                  }, {
                                                                    default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                      if (_push11) {
                                                                        _push11(`mdi-lock`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-lock")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent10, _scopeId9));
                                                                  _push10(`<span class="text-grey text-caption" data-v-f0a1638e${_scopeId9}>Completa la actividad anterior para desbloquear</span></div>`);
                                                                } else {
                                                                  _push10(`<!---->`);
                                                                }
                                                              } else {
                                                                return [
                                                                  createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                                    createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                                      idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                        key: 0,
                                                                        color: "green-accent-3",
                                                                        size: "28"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("mdi-check-circle")
                                                                        ]),
                                                                        _: 1
                                                                      })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                        key: 1,
                                                                        color: "grey",
                                                                        size: "28"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("mdi-lock")
                                                                        ]),
                                                                        _: 1
                                                                      })) : (openBlock(), createBlock("span", {
                                                                        key: 2,
                                                                        class: "font-serif text-gold",
                                                                        style: { "font-size": "1.4rem", "font-weight": "700" }
                                                                      }, toDisplayString(idx + 1), 1))
                                                                    ]),
                                                                    createVNode("div", { class: "flex-grow-1" }, [
                                                                      createVNode("div", {
                                                                        class: "text-overline text-amber-lighten-3",
                                                                        style: { "letter-spacing": "2px" }
                                                                      }, toDisplayString(act.tipo), 1),
                                                                      createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                                    ]),
                                                                    createVNode(VIcon, {
                                                                      color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                                      size: "32"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(act.icono), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["color"])
                                                                  ]),
                                                                  createVNode(VDivider, { class: "border-opacity-20" }),
                                                                  createVNode(VExpandTransition, null, {
                                                                    default: withCtx(() => [
                                                                      idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                                        idx === 0 ? (openBlock(), createBlock("div", {
                                                                          key: 0,
                                                                          class: "pa-6"
                                                                        }, [
                                                                          createVNode("p", {
                                                                            class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                            style: { "line-height": "1.8" }
                                                                          }, toDisplayString(act.descripcion), 1),
                                                                          (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                                            return openBlock(), createBlock("div", {
                                                                              key: pi,
                                                                              class: "quiz-question mb-6"
                                                                            }, [
                                                                              createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                                createVNode(VIcon, {
                                                                                  color: "gold",
                                                                                  size: "16",
                                                                                  class: "mr-1"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode("mdi-help-circle")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                              ]),
                                                                              createVNode(VRadioGroup, {
                                                                                modelValue: respuestasQuiz.value[pi],
                                                                                "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                                disabled: quizEnviado.value,
                                                                                class: "mt-0"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                                    return openBlock(), createBlock(VRadio, {
                                                                                      key: oi,
                                                                                      label: op,
                                                                                      value: oi,
                                                                                      color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                                      class: "quiz-radio mb-1"
                                                                                    }, null, 8, ["label", "value", "color"]);
                                                                                  }), 128))
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                              createVNode(VExpandTransition, null, {
                                                                                default: withCtx(() => [
                                                                                  quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                                    key: 0,
                                                                                    variant: "tonal",
                                                                                    color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                                    icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                                    density: "compact",
                                                                                    class: "mt-2"
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                        createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                        createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                        createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                                      ]))
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024)
                                                                            ]);
                                                                          }), 128)),
                                                                          !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                                            key: 0,
                                                                            class: "d-flex justify-end mt-2"
                                                                          }, [
                                                                            createVNode(VBtn, {
                                                                              color: "gold-btn",
                                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                              disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                              onClick: ($event) => enviarQuiz(),
                                                                              "append-icon": "mdi-send"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Enviar respuestas")
                                                                              ]),
                                                                              _: 1
                                                                            }, 8, ["disabled", "onClick"])
                                                                          ])) : createCommentVNode("", true),
                                                                          quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                                            key: 1,
                                                                            color: "gold",
                                                                            variant: "tonal",
                                                                            icon: "mdi-trophy",
                                                                            class: "mt-4"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Obtuviste "),
                                                                              createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                              createTextVNode(" de "),
                                                                              createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                              createTextVNode(" respuestas correctas. "),
                                                                              puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024)) : createCommentVNode("", true),
                                                                          quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                            key: 2,
                                                                            class: "d-flex justify-end mt-4 gap-3"
                                                                          }, [
                                                                            createVNode(VBtn, {
                                                                              variant: "outlined",
                                                                              color: "white",
                                                                              class: "rounded-pill",
                                                                              onClick: reiniciarQuiz,
                                                                              "prepend-icon": "mdi-refresh"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Reintentar")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                              key: 0,
                                                                              color: "green-accent-4",
                                                                              variant: "flat",
                                                                              class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                              onClick: ($event) => completarActividad(idx),
                                                                              "append-icon": "mdi-arrow-right"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Siguiente Actividad")
                                                                              ]),
                                                                              _: 1
                                                                            }, 8, ["onClick"])) : createCommentVNode("", true)
                                                                          ])) : createCommentVNode("", true)
                                                                        ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                                          key: 1,
                                                                          class: "pa-6"
                                                                        }, [
                                                                          createVNode("p", {
                                                                            class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                            style: { "line-height": "1.8" }
                                                                          }, toDisplayString(act.descripcion), 1),
                                                                          (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                                            return openBlock(), createBlock("div", {
                                                                              key: ci,
                                                                              class: "caso-card mb-6 pa-4 rounded-lg",
                                                                              style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                                            }, [
                                                                              createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                                createVNode(VIcon, {
                                                                                  color: "amber-lighten-2",
                                                                                  size: "20",
                                                                                  class: "mr-2 mt-1"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode("mdi-file-document-edit")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                              ]),
                                                                              createVNode("p", {
                                                                                class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                                style: { "line-height": "1.8" }
                                                                              }, toDisplayString(caso.descripcion), 1),
                                                                              createVNode(VSelect, {
                                                                                modelValue: respuestasCasos.value[ci],
                                                                                "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                                items: opcionesDerechos,
                                                                                label: "¿Qué derecho fundamental fue vulnerado?",
                                                                                variant: "outlined",
                                                                                color: "gold",
                                                                                theme: "dark",
                                                                                disabled: casosEnviados.value,
                                                                                density: "comfortable",
                                                                                class: "caso-select"
                                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                              createVNode(VExpandTransition, null, {
                                                                                default: withCtx(() => [
                                                                                  casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                                    key: 0,
                                                                                    variant: "tonal",
                                                                                    color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                                    icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                                    density: "compact",
                                                                                    class: "mt-2"
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                        createTextVNode("La respuesta esperada era: "),
                                                                                        createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                        createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                                      ]))
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024)
                                                                            ]);
                                                                          }), 128)),
                                                                          !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                                            key: 0,
                                                                            class: "d-flex justify-end"
                                                                          }, [
                                                                            createVNode(VBtn, {
                                                                              color: "gold-btn",
                                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                              disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                              onClick: ($event) => enviarCasos(),
                                                                              "append-icon": "mdi-send"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Enviar análisis")
                                                                              ]),
                                                                              _: 1
                                                                            }, 8, ["disabled", "onClick"])
                                                                          ])) : createCommentVNode("", true),
                                                                          casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                            key: 1,
                                                                            class: "d-flex justify-end mt-4"
                                                                          }, [
                                                                            createVNode(VBtn, {
                                                                              color: "green-accent-4",
                                                                              variant: "flat",
                                                                              class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                              onClick: ($event) => completarActividad(idx),
                                                                              "append-icon": "mdi-arrow-right"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Siguiente Actividad")
                                                                              ]),
                                                                              _: 1
                                                                            }, 8, ["onClick"])
                                                                          ])) : createCommentVNode("", true)
                                                                        ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                                          key: 2,
                                                                          class: "pa-6"
                                                                        }, [
                                                                          createVNode("p", {
                                                                            class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                            style: { "line-height": "1.8" }
                                                                          }, toDisplayString(act.descripcion), 1),
                                                                          (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                                            return openBlock(), createBlock("div", {
                                                                              key: ri,
                                                                              class: "mb-6"
                                                                            }, [
                                                                              createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                                createVNode(VIcon, {
                                                                                  color: "gold",
                                                                                  size: "16",
                                                                                  class: "mr-1"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode("mdi-pencil")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                              ]),
                                                                              createVNode(VTextarea, {
                                                                                modelValue: reflexiones.value[ri],
                                                                                "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                                variant: "outlined",
                                                                                color: "gold",
                                                                                theme: "dark",
                                                                                rows: "3",
                                                                                "auto-grow": "",
                                                                                disabled: reflexionEnviada.value,
                                                                                placeholder: "Escribe tu reflexión aquí...",
                                                                                class: "reflexion-textarea"
                                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                                            ]);
                                                                          }), 128)),
                                                                          !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                                            key: 0,
                                                                            class: "d-flex justify-end"
                                                                          }, [
                                                                            createVNode(VBtn, {
                                                                              color: "gold-btn",
                                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                              disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                              onClick: ($event) => enviarReflexion(),
                                                                              "append-icon": "mdi-check"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Enviar reflexión")
                                                                              ]),
                                                                              _: 1
                                                                            }, 8, ["disabled", "onClick"])
                                                                          ])) : createCommentVNode("", true),
                                                                          reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                                            createVNode(VAlert, {
                                                                              color: "green",
                                                                              variant: "tonal",
                                                                              icon: "mdi-star",
                                                                              class: "mt-4"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                              createVNode(VBtn, {
                                                                                color: "gold-btn",
                                                                                size: "large",
                                                                                class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                                onClick: ($event) => completarActividad(idx),
                                                                                "append-icon": "mdi-trophy"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("¡Finalizar OVA!")
                                                                                ]),
                                                                                _: 1
                                                                              }, 8, ["onClick"])
                                                                            ])
                                                                          ])) : createCommentVNode("", true)
                                                                        ])) : createCommentVNode("", true),
                                                                        idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                          key: 3,
                                                                          class: "pa-4 d-flex align-center justify-center",
                                                                          style: { "background": "rgba(105,240,174,0.05)" }
                                                                        }, [
                                                                          createVNode(VIcon, {
                                                                            color: "green-accent-3",
                                                                            size: "20",
                                                                            class: "mr-2"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("mdi-check-all")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                                        ])) : createCommentVNode("", true)
                                                                      ])) : createCommentVNode("", true)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                    key: 0,
                                                                    class: "pa-4 d-flex align-center justify-center locked-msg"
                                                                  }, [
                                                                    createVNode(VIcon, {
                                                                      color: "grey",
                                                                      size: "18",
                                                                      class: "mr-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-lock")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                                  ])) : createCommentVNode("", true)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VCard, {
                                                              elevation: "0",
                                                              class: ["rounded-xl glass-card activity-card mb-4", {
                                                                "locked-activity": idx > unref(progresoActividades),
                                                                "completed-activity": idx < unref(progresoActividades)
                                                              }],
                                                              style: { animationDelay: `${idx * 0.15}s` }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                                  createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                                    idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                      key: 0,
                                                                      color: "green-accent-3",
                                                                      size: "28"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-check-circle")
                                                                      ]),
                                                                      _: 1
                                                                    })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                      key: 1,
                                                                      color: "grey",
                                                                      size: "28"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-lock")
                                                                      ]),
                                                                      _: 1
                                                                    })) : (openBlock(), createBlock("span", {
                                                                      key: 2,
                                                                      class: "font-serif text-gold",
                                                                      style: { "font-size": "1.4rem", "font-weight": "700" }
                                                                    }, toDisplayString(idx + 1), 1))
                                                                  ]),
                                                                  createVNode("div", { class: "flex-grow-1" }, [
                                                                    createVNode("div", {
                                                                      class: "text-overline text-amber-lighten-3",
                                                                      style: { "letter-spacing": "2px" }
                                                                    }, toDisplayString(act.tipo), 1),
                                                                    createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                                  ]),
                                                                  createVNode(VIcon, {
                                                                    color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                                    size: "32"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(act.icono), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color"])
                                                                ]),
                                                                createVNode(VDivider, { class: "border-opacity-20" }),
                                                                createVNode(VExpandTransition, null, {
                                                                  default: withCtx(() => [
                                                                    idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                                      idx === 0 ? (openBlock(), createBlock("div", {
                                                                        key: 0,
                                                                        class: "pa-6"
                                                                      }, [
                                                                        createVNode("p", {
                                                                          class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                          style: { "line-height": "1.8" }
                                                                        }, toDisplayString(act.descripcion), 1),
                                                                        (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                                          return openBlock(), createBlock("div", {
                                                                            key: pi,
                                                                            class: "quiz-question mb-6"
                                                                          }, [
                                                                            createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                              createVNode(VIcon, {
                                                                                color: "gold",
                                                                                size: "16",
                                                                                class: "mr-1"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("mdi-help-circle")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                            ]),
                                                                            createVNode(VRadioGroup, {
                                                                              modelValue: respuestasQuiz.value[pi],
                                                                              "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                              disabled: quizEnviado.value,
                                                                              class: "mt-0"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                                  return openBlock(), createBlock(VRadio, {
                                                                                    key: oi,
                                                                                    label: op,
                                                                                    value: oi,
                                                                                    color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                                    class: "quiz-radio mb-1"
                                                                                  }, null, 8, ["label", "value", "color"]);
                                                                                }), 128))
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                            createVNode(VExpandTransition, null, {
                                                                              default: withCtx(() => [
                                                                                quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                                  key: 0,
                                                                                  variant: "tonal",
                                                                                  color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                                  icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                                  density: "compact",
                                                                                  class: "mt-2"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                      createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                      createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                      createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                                    ]))
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)
                                                                          ]);
                                                                        }), 128)),
                                                                        !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                                          key: 0,
                                                                          class: "d-flex justify-end mt-2"
                                                                        }, [
                                                                          createVNode(VBtn, {
                                                                            color: "gold-btn",
                                                                            class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                            disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                            onClick: ($event) => enviarQuiz(),
                                                                            "append-icon": "mdi-send"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Enviar respuestas")
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["disabled", "onClick"])
                                                                        ])) : createCommentVNode("", true),
                                                                        quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                                          key: 1,
                                                                          color: "gold",
                                                                          variant: "tonal",
                                                                          icon: "mdi-trophy",
                                                                          class: "mt-4"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Obtuviste "),
                                                                            createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                            createTextVNode(" de "),
                                                                            createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                            createTextVNode(" respuestas correctas. "),
                                                                            puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)) : createCommentVNode("", true),
                                                                        quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                          key: 2,
                                                                          class: "d-flex justify-end mt-4 gap-3"
                                                                        }, [
                                                                          createVNode(VBtn, {
                                                                            variant: "outlined",
                                                                            color: "white",
                                                                            class: "rounded-pill",
                                                                            onClick: reiniciarQuiz,
                                                                            "prepend-icon": "mdi-refresh"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Reintentar")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                            key: 0,
                                                                            color: "green-accent-4",
                                                                            variant: "flat",
                                                                            class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                            onClick: ($event) => completarActividad(idx),
                                                                            "append-icon": "mdi-arrow-right"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Siguiente Actividad")
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["onClick"])) : createCommentVNode("", true)
                                                                        ])) : createCommentVNode("", true)
                                                                      ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                                        key: 1,
                                                                        class: "pa-6"
                                                                      }, [
                                                                        createVNode("p", {
                                                                          class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                          style: { "line-height": "1.8" }
                                                                        }, toDisplayString(act.descripcion), 1),
                                                                        (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                                          return openBlock(), createBlock("div", {
                                                                            key: ci,
                                                                            class: "caso-card mb-6 pa-4 rounded-lg",
                                                                            style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                                          }, [
                                                                            createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                              createVNode(VIcon, {
                                                                                color: "amber-lighten-2",
                                                                                size: "20",
                                                                                class: "mr-2 mt-1"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("mdi-file-document-edit")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                            ]),
                                                                            createVNode("p", {
                                                                              class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                              style: { "line-height": "1.8" }
                                                                            }, toDisplayString(caso.descripcion), 1),
                                                                            createVNode(VSelect, {
                                                                              modelValue: respuestasCasos.value[ci],
                                                                              "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                              items: opcionesDerechos,
                                                                              label: "¿Qué derecho fundamental fue vulnerado?",
                                                                              variant: "outlined",
                                                                              color: "gold",
                                                                              theme: "dark",
                                                                              disabled: casosEnviados.value,
                                                                              density: "comfortable",
                                                                              class: "caso-select"
                                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                            createVNode(VExpandTransition, null, {
                                                                              default: withCtx(() => [
                                                                                casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                                  key: 0,
                                                                                  variant: "tonal",
                                                                                  color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                                  icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                                  density: "compact",
                                                                                  class: "mt-2"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                      createTextVNode("La respuesta esperada era: "),
                                                                                      createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                      createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                                    ]))
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)
                                                                          ]);
                                                                        }), 128)),
                                                                        !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                                          key: 0,
                                                                          class: "d-flex justify-end"
                                                                        }, [
                                                                          createVNode(VBtn, {
                                                                            color: "gold-btn",
                                                                            class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                            disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                            onClick: ($event) => enviarCasos(),
                                                                            "append-icon": "mdi-send"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Enviar análisis")
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["disabled", "onClick"])
                                                                        ])) : createCommentVNode("", true),
                                                                        casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                          key: 1,
                                                                          class: "d-flex justify-end mt-4"
                                                                        }, [
                                                                          createVNode(VBtn, {
                                                                            color: "green-accent-4",
                                                                            variant: "flat",
                                                                            class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                            onClick: ($event) => completarActividad(idx),
                                                                            "append-icon": "mdi-arrow-right"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Siguiente Actividad")
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["onClick"])
                                                                        ])) : createCommentVNode("", true)
                                                                      ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                                        key: 2,
                                                                        class: "pa-6"
                                                                      }, [
                                                                        createVNode("p", {
                                                                          class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                          style: { "line-height": "1.8" }
                                                                        }, toDisplayString(act.descripcion), 1),
                                                                        (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                                          return openBlock(), createBlock("div", {
                                                                            key: ri,
                                                                            class: "mb-6"
                                                                          }, [
                                                                            createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                              createVNode(VIcon, {
                                                                                color: "gold",
                                                                                size: "16",
                                                                                class: "mr-1"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("mdi-pencil")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                            ]),
                                                                            createVNode(VTextarea, {
                                                                              modelValue: reflexiones.value[ri],
                                                                              "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                              variant: "outlined",
                                                                              color: "gold",
                                                                              theme: "dark",
                                                                              rows: "3",
                                                                              "auto-grow": "",
                                                                              disabled: reflexionEnviada.value,
                                                                              placeholder: "Escribe tu reflexión aquí...",
                                                                              class: "reflexion-textarea"
                                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                                          ]);
                                                                        }), 128)),
                                                                        !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                                          key: 0,
                                                                          class: "d-flex justify-end"
                                                                        }, [
                                                                          createVNode(VBtn, {
                                                                            color: "gold-btn",
                                                                            class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                            disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                            onClick: ($event) => enviarReflexion(),
                                                                            "append-icon": "mdi-check"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Enviar reflexión")
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["disabled", "onClick"])
                                                                        ])) : createCommentVNode("", true),
                                                                        reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                                          createVNode(VAlert, {
                                                                            color: "green",
                                                                            variant: "tonal",
                                                                            icon: "mdi-star",
                                                                            class: "mt-4"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                            createVNode(VBtn, {
                                                                              color: "gold-btn",
                                                                              size: "large",
                                                                              class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                              onClick: ($event) => completarActividad(idx),
                                                                              "append-icon": "mdi-trophy"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("¡Finalizar OVA!")
                                                                              ]),
                                                                              _: 1
                                                                            }, 8, ["onClick"])
                                                                          ])
                                                                        ])) : createCommentVNode("", true)
                                                                      ])) : createCommentVNode("", true),
                                                                      idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                        key: 3,
                                                                        class: "pa-4 d-flex align-center justify-center",
                                                                        style: { "background": "rgba(105,240,174,0.05)" }
                                                                      }, [
                                                                        createVNode(VIcon, {
                                                                          color: "green-accent-3",
                                                                          size: "20",
                                                                          class: "mr-2"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("mdi-check-all")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                                      ])) : createCommentVNode("", true)
                                                                    ])) : createCommentVNode("", true)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                  key: 0,
                                                                  class: "pa-4 d-flex align-center justify-center locked-msg"
                                                                }, [
                                                                  createVNode(VIcon, {
                                                                    color: "grey",
                                                                    size: "18",
                                                                    class: "mr-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-lock")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                                ])) : createCommentVNode("", true)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["class", "style"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(), createBlock(Fragment, null, renderList(listaActividades, (act, idx) => {
                                                      return createVNode(VCol, {
                                                        key: idx,
                                                        cols: "12"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCard, {
                                                            elevation: "0",
                                                            class: ["rounded-xl glass-card activity-card mb-4", {
                                                              "locked-activity": idx > unref(progresoActividades),
                                                              "completed-activity": idx < unref(progresoActividades)
                                                            }],
                                                            style: { animationDelay: `${idx * 0.15}s` }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                                createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                                  idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                    key: 0,
                                                                    color: "green-accent-3",
                                                                    size: "28"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-check-circle")
                                                                    ]),
                                                                    _: 1
                                                                  })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                    key: 1,
                                                                    color: "grey",
                                                                    size: "28"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-lock")
                                                                    ]),
                                                                    _: 1
                                                                  })) : (openBlock(), createBlock("span", {
                                                                    key: 2,
                                                                    class: "font-serif text-gold",
                                                                    style: { "font-size": "1.4rem", "font-weight": "700" }
                                                                  }, toDisplayString(idx + 1), 1))
                                                                ]),
                                                                createVNode("div", { class: "flex-grow-1" }, [
                                                                  createVNode("div", {
                                                                    class: "text-overline text-amber-lighten-3",
                                                                    style: { "letter-spacing": "2px" }
                                                                  }, toDisplayString(act.tipo), 1),
                                                                  createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                                ]),
                                                                createVNode(VIcon, {
                                                                  color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                                  size: "32"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(act.icono), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ]),
                                                              createVNode(VDivider, { class: "border-opacity-20" }),
                                                              createVNode(VExpandTransition, null, {
                                                                default: withCtx(() => [
                                                                  idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                                    idx === 0 ? (openBlock(), createBlock("div", {
                                                                      key: 0,
                                                                      class: "pa-6"
                                                                    }, [
                                                                      createVNode("p", {
                                                                        class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                        style: { "line-height": "1.8" }
                                                                      }, toDisplayString(act.descripcion), 1),
                                                                      (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                                        return openBlock(), createBlock("div", {
                                                                          key: pi,
                                                                          class: "quiz-question mb-6"
                                                                        }, [
                                                                          createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                            createVNode(VIcon, {
                                                                              color: "gold",
                                                                              size: "16",
                                                                              class: "mr-1"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("mdi-help-circle")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                          ]),
                                                                          createVNode(VRadioGroup, {
                                                                            modelValue: respuestasQuiz.value[pi],
                                                                            "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                            disabled: quizEnviado.value,
                                                                            class: "mt-0"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                                return openBlock(), createBlock(VRadio, {
                                                                                  key: oi,
                                                                                  label: op,
                                                                                  value: oi,
                                                                                  color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                                  class: "quiz-radio mb-1"
                                                                                }, null, 8, ["label", "value", "color"]);
                                                                              }), 128))
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                          createVNode(VExpandTransition, null, {
                                                                            default: withCtx(() => [
                                                                              quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                                key: 0,
                                                                                variant: "tonal",
                                                                                color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                                icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                                density: "compact",
                                                                                class: "mt-2"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                    createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                    createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                    createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                                  ]))
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024)
                                                                        ]);
                                                                      }), 128)),
                                                                      !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                                        key: 0,
                                                                        class: "d-flex justify-end mt-2"
                                                                      }, [
                                                                        createVNode(VBtn, {
                                                                          color: "gold-btn",
                                                                          class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                          disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                          onClick: ($event) => enviarQuiz(),
                                                                          "append-icon": "mdi-send"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Enviar respuestas")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["disabled", "onClick"])
                                                                      ])) : createCommentVNode("", true),
                                                                      quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                                        key: 1,
                                                                        color: "gold",
                                                                        variant: "tonal",
                                                                        icon: "mdi-trophy",
                                                                        class: "mt-4"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Obtuviste "),
                                                                          createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                          createTextVNode(" de "),
                                                                          createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                          createTextVNode(" respuestas correctas. "),
                                                                          puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)) : createCommentVNode("", true),
                                                                      quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                        key: 2,
                                                                        class: "d-flex justify-end mt-4 gap-3"
                                                                      }, [
                                                                        createVNode(VBtn, {
                                                                          variant: "outlined",
                                                                          color: "white",
                                                                          class: "rounded-pill",
                                                                          onClick: reiniciarQuiz,
                                                                          "prepend-icon": "mdi-refresh"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Reintentar")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                          key: 0,
                                                                          color: "green-accent-4",
                                                                          variant: "flat",
                                                                          class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                          onClick: ($event) => completarActividad(idx),
                                                                          "append-icon": "mdi-arrow-right"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Siguiente Actividad")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["onClick"])) : createCommentVNode("", true)
                                                                      ])) : createCommentVNode("", true)
                                                                    ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                                      key: 1,
                                                                      class: "pa-6"
                                                                    }, [
                                                                      createVNode("p", {
                                                                        class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                        style: { "line-height": "1.8" }
                                                                      }, toDisplayString(act.descripcion), 1),
                                                                      (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                                        return openBlock(), createBlock("div", {
                                                                          key: ci,
                                                                          class: "caso-card mb-6 pa-4 rounded-lg",
                                                                          style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                                        }, [
                                                                          createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                            createVNode(VIcon, {
                                                                              color: "amber-lighten-2",
                                                                              size: "20",
                                                                              class: "mr-2 mt-1"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("mdi-file-document-edit")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                          ]),
                                                                          createVNode("p", {
                                                                            class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                            style: { "line-height": "1.8" }
                                                                          }, toDisplayString(caso.descripcion), 1),
                                                                          createVNode(VSelect, {
                                                                            modelValue: respuestasCasos.value[ci],
                                                                            "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                            items: opcionesDerechos,
                                                                            label: "¿Qué derecho fundamental fue vulnerado?",
                                                                            variant: "outlined",
                                                                            color: "gold",
                                                                            theme: "dark",
                                                                            disabled: casosEnviados.value,
                                                                            density: "comfortable",
                                                                            class: "caso-select"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                          createVNode(VExpandTransition, null, {
                                                                            default: withCtx(() => [
                                                                              casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                                key: 0,
                                                                                variant: "tonal",
                                                                                color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                                icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                                density: "compact",
                                                                                class: "mt-2"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                    createTextVNode("La respuesta esperada era: "),
                                                                                    createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                    createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                                  ]))
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024)
                                                                        ]);
                                                                      }), 128)),
                                                                      !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                                        key: 0,
                                                                        class: "d-flex justify-end"
                                                                      }, [
                                                                        createVNode(VBtn, {
                                                                          color: "gold-btn",
                                                                          class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                          disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                          onClick: ($event) => enviarCasos(),
                                                                          "append-icon": "mdi-send"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Enviar análisis")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["disabled", "onClick"])
                                                                      ])) : createCommentVNode("", true),
                                                                      casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                        key: 1,
                                                                        class: "d-flex justify-end mt-4"
                                                                      }, [
                                                                        createVNode(VBtn, {
                                                                          color: "green-accent-4",
                                                                          variant: "flat",
                                                                          class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                          onClick: ($event) => completarActividad(idx),
                                                                          "append-icon": "mdi-arrow-right"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Siguiente Actividad")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["onClick"])
                                                                      ])) : createCommentVNode("", true)
                                                                    ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                                      key: 2,
                                                                      class: "pa-6"
                                                                    }, [
                                                                      createVNode("p", {
                                                                        class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                        style: { "line-height": "1.8" }
                                                                      }, toDisplayString(act.descripcion), 1),
                                                                      (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                                        return openBlock(), createBlock("div", {
                                                                          key: ri,
                                                                          class: "mb-6"
                                                                        }, [
                                                                          createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                            createVNode(VIcon, {
                                                                              color: "gold",
                                                                              size: "16",
                                                                              class: "mr-1"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("mdi-pencil")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                          ]),
                                                                          createVNode(VTextarea, {
                                                                            modelValue: reflexiones.value[ri],
                                                                            "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                            variant: "outlined",
                                                                            color: "gold",
                                                                            theme: "dark",
                                                                            rows: "3",
                                                                            "auto-grow": "",
                                                                            disabled: reflexionEnviada.value,
                                                                            placeholder: "Escribe tu reflexión aquí...",
                                                                            class: "reflexion-textarea"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                                        ]);
                                                                      }), 128)),
                                                                      !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                                        key: 0,
                                                                        class: "d-flex justify-end"
                                                                      }, [
                                                                        createVNode(VBtn, {
                                                                          color: "gold-btn",
                                                                          class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                          disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                          onClick: ($event) => enviarReflexion(),
                                                                          "append-icon": "mdi-check"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Enviar reflexión")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["disabled", "onClick"])
                                                                      ])) : createCommentVNode("", true),
                                                                      reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                                        createVNode(VAlert, {
                                                                          color: "green",
                                                                          variant: "tonal",
                                                                          icon: "mdi-star",
                                                                          class: "mt-4"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                          createVNode(VBtn, {
                                                                            color: "gold-btn",
                                                                            size: "large",
                                                                            class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                            onClick: ($event) => completarActividad(idx),
                                                                            "append-icon": "mdi-trophy"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("¡Finalizar OVA!")
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["onClick"])
                                                                        ])
                                                                      ])) : createCommentVNode("", true)
                                                                    ])) : createCommentVNode("", true),
                                                                    idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                      key: 3,
                                                                      class: "pa-4 d-flex align-center justify-center",
                                                                      style: { "background": "rgba(105,240,174,0.05)" }
                                                                    }, [
                                                                      createVNode(VIcon, {
                                                                        color: "green-accent-3",
                                                                        size: "20",
                                                                        class: "mr-2"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("mdi-check-all")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                                    ])) : createCommentVNode("", true)
                                                                  ])) : createCommentVNode("", true)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "pa-4 d-flex align-center justify-center locked-msg"
                                                              }, [
                                                                createVNode(VIcon, {
                                                                  color: "grey",
                                                                  size: "18",
                                                                  class: "mr-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-lock")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                              ])) : createCommentVNode("", true)
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
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VExpandTransition, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  if (unref(progresoActividades) >= listaActividades.length) {
                                                    _push8(ssrRenderComponent(VCard, {
                                                      class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                                      elevation: "0"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VIcon, {
                                                            color: "gold",
                                                            size: "72",
                                                            class: "mb-4 pulse-icon"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`mdi-trophy`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("mdi-trophy")
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                          _push9(`<h2 class="font-serif text-h4 text-gold mb-3 text-glow" data-v-f0a1638e${_scopeId8}>¡FELICITACIONES!</h2><p class="text-body-1 text-grey-lighten-2 mb-6" data-v-f0a1638e${_scopeId8}>Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!</p>`);
                                                          _push9(ssrRenderComponent(VBtn, {
                                                            to: "/",
                                                            color: "gold-btn",
                                                            size: "large",
                                                            class: "rounded-pill font-weight-bold px-10",
                                                            "prepend-icon": "mdi-home"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Volver al Inicio`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Volver al Inicio")
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VIcon, {
                                                              color: "gold",
                                                              size: "72",
                                                              class: "mb-4 pulse-icon"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-trophy")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                                            createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                                            createVNode(VBtn, {
                                                              to: "/",
                                                              color: "gold-btn",
                                                              size: "large",
                                                              class: "rounded-pill font-weight-bold px-10",
                                                              "prepend-icon": "mdi-home"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Volver al Inicio")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      _: 1
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                } else {
                                                  return [
                                                    unref(progresoActividades) >= listaActividades.length ? (openBlock(), createBlock(VCard, {
                                                      key: 0,
                                                      class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                                      elevation: "0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: "gold",
                                                          size: "72",
                                                          class: "mb-4 pulse-icon"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-trophy")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                                        createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                                        createVNode(VBtn, {
                                                          to: "/",
                                                          color: "gold-btn",
                                                          size: "large",
                                                          class: "rounded-pill font-weight-bold px-10",
                                                          "prepend-icon": "mdi-home"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Volver al Inicio")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-center mb-10 slide-fade-enter-active" }, [
                                                createVNode("div", { class: "d-flex justify-center align-center mb-4" }, [
                                                  createVNode(VIcon, {
                                                    color: "gold",
                                                    size: "36",
                                                    class: "mr-3 pulse-icon"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-trophy")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("h1", { class: "font-serif text-h4 text-gold text-glow" }, "ACTIVIDADES INTERACTIVAS")
                                                ]),
                                                createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2" }, " Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente. "),
                                                createVNode("div", {
                                                  class: "mt-4 mx-auto",
                                                  style: { "max-width": "420px" }
                                                }, [
                                                  createVNode("div", { class: "d-flex justify-space-between mb-1" }, [
                                                    createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Actividades completadas"),
                                                    createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length), 1)
                                                  ]),
                                                  createVNode("div", { class: "progress-track" }, [
                                                    createVNode("div", {
                                                      class: "progress-fill",
                                                      style: { width: unref(progresoActividades) / listaActividades.length * 100 + "%" }
                                                    }, null, 4)
                                                  ])
                                                ])
                                              ]),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(listaActividades, (act, idx) => {
                                                    return createVNode(VCol, {
                                                      key: idx,
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCard, {
                                                          elevation: "0",
                                                          class: ["rounded-xl glass-card activity-card mb-4", {
                                                            "locked-activity": idx > unref(progresoActividades),
                                                            "completed-activity": idx < unref(progresoActividades)
                                                          }],
                                                          style: { animationDelay: `${idx * 0.15}s` }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                              createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                                idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                  key: 0,
                                                                  color: "green-accent-3",
                                                                  size: "28"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-check-circle")
                                                                  ]),
                                                                  _: 1
                                                                })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                  key: 1,
                                                                  color: "grey",
                                                                  size: "28"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-lock")
                                                                  ]),
                                                                  _: 1
                                                                })) : (openBlock(), createBlock("span", {
                                                                  key: 2,
                                                                  class: "font-serif text-gold",
                                                                  style: { "font-size": "1.4rem", "font-weight": "700" }
                                                                }, toDisplayString(idx + 1), 1))
                                                              ]),
                                                              createVNode("div", { class: "flex-grow-1" }, [
                                                                createVNode("div", {
                                                                  class: "text-overline text-amber-lighten-3",
                                                                  style: { "letter-spacing": "2px" }
                                                                }, toDisplayString(act.tipo), 1),
                                                                createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                              ]),
                                                              createVNode(VIcon, {
                                                                color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                                size: "32"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(act.icono), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            createVNode(VDivider, { class: "border-opacity-20" }),
                                                            createVNode(VExpandTransition, null, {
                                                              default: withCtx(() => [
                                                                idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                                  idx === 0 ? (openBlock(), createBlock("div", {
                                                                    key: 0,
                                                                    class: "pa-6"
                                                                  }, [
                                                                    createVNode("p", {
                                                                      class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                      style: { "line-height": "1.8" }
                                                                    }, toDisplayString(act.descripcion), 1),
                                                                    (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                                      return openBlock(), createBlock("div", {
                                                                        key: pi,
                                                                        class: "quiz-question mb-6"
                                                                      }, [
                                                                        createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                          createVNode(VIcon, {
                                                                            color: "gold",
                                                                            size: "16",
                                                                            class: "mr-1"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("mdi-help-circle")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                        ]),
                                                                        createVNode(VRadioGroup, {
                                                                          modelValue: respuestasQuiz.value[pi],
                                                                          "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                          disabled: quizEnviado.value,
                                                                          class: "mt-0"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                              return openBlock(), createBlock(VRadio, {
                                                                                key: oi,
                                                                                label: op,
                                                                                value: oi,
                                                                                color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                                class: "quiz-radio mb-1"
                                                                              }, null, 8, ["label", "value", "color"]);
                                                                            }), 128))
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                        createVNode(VExpandTransition, null, {
                                                                          default: withCtx(() => [
                                                                            quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                              key: 0,
                                                                              variant: "tonal",
                                                                              color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                              icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                              density: "compact",
                                                                              class: "mt-2"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                  createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                  createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                  createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                                ]))
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ]);
                                                                    }), 128)),
                                                                    !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                                      key: 0,
                                                                      class: "d-flex justify-end mt-2"
                                                                    }, [
                                                                      createVNode(VBtn, {
                                                                        color: "gold-btn",
                                                                        class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                        disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                        onClick: ($event) => enviarQuiz(),
                                                                        "append-icon": "mdi-send"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Enviar respuestas")
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["disabled", "onClick"])
                                                                    ])) : createCommentVNode("", true),
                                                                    quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                                      key: 1,
                                                                      color: "gold",
                                                                      variant: "tonal",
                                                                      icon: "mdi-trophy",
                                                                      class: "mt-4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Obtuviste "),
                                                                        createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                        createTextVNode(" de "),
                                                                        createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                        createTextVNode(" respuestas correctas. "),
                                                                        puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)) : createCommentVNode("", true),
                                                                    quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                      key: 2,
                                                                      class: "d-flex justify-end mt-4 gap-3"
                                                                    }, [
                                                                      createVNode(VBtn, {
                                                                        variant: "outlined",
                                                                        color: "white",
                                                                        class: "rounded-pill",
                                                                        onClick: reiniciarQuiz,
                                                                        "prepend-icon": "mdi-refresh"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Reintentar")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                        key: 0,
                                                                        color: "green-accent-4",
                                                                        variant: "flat",
                                                                        class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                        onClick: ($event) => completarActividad(idx),
                                                                        "append-icon": "mdi-arrow-right"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Siguiente Actividad")
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["onClick"])) : createCommentVNode("", true)
                                                                    ])) : createCommentVNode("", true)
                                                                  ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                                    key: 1,
                                                                    class: "pa-6"
                                                                  }, [
                                                                    createVNode("p", {
                                                                      class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                      style: { "line-height": "1.8" }
                                                                    }, toDisplayString(act.descripcion), 1),
                                                                    (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                                      return openBlock(), createBlock("div", {
                                                                        key: ci,
                                                                        class: "caso-card mb-6 pa-4 rounded-lg",
                                                                        style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                                      }, [
                                                                        createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                          createVNode(VIcon, {
                                                                            color: "amber-lighten-2",
                                                                            size: "20",
                                                                            class: "mr-2 mt-1"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("mdi-file-document-edit")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                        ]),
                                                                        createVNode("p", {
                                                                          class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                          style: { "line-height": "1.8" }
                                                                        }, toDisplayString(caso.descripcion), 1),
                                                                        createVNode(VSelect, {
                                                                          modelValue: respuestasCasos.value[ci],
                                                                          "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                          items: opcionesDerechos,
                                                                          label: "¿Qué derecho fundamental fue vulnerado?",
                                                                          variant: "outlined",
                                                                          color: "gold",
                                                                          theme: "dark",
                                                                          disabled: casosEnviados.value,
                                                                          density: "comfortable",
                                                                          class: "caso-select"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                        createVNode(VExpandTransition, null, {
                                                                          default: withCtx(() => [
                                                                            casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                              key: 0,
                                                                              variant: "tonal",
                                                                              color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                              icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                              density: "compact",
                                                                              class: "mt-2"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                  createTextVNode("La respuesta esperada era: "),
                                                                                  createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                  createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                                ]))
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ]);
                                                                    }), 128)),
                                                                    !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                                      key: 0,
                                                                      class: "d-flex justify-end"
                                                                    }, [
                                                                      createVNode(VBtn, {
                                                                        color: "gold-btn",
                                                                        class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                        disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                        onClick: ($event) => enviarCasos(),
                                                                        "append-icon": "mdi-send"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Enviar análisis")
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["disabled", "onClick"])
                                                                    ])) : createCommentVNode("", true),
                                                                    casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                      key: 1,
                                                                      class: "d-flex justify-end mt-4"
                                                                    }, [
                                                                      createVNode(VBtn, {
                                                                        color: "green-accent-4",
                                                                        variant: "flat",
                                                                        class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                        onClick: ($event) => completarActividad(idx),
                                                                        "append-icon": "mdi-arrow-right"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Siguiente Actividad")
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["onClick"])
                                                                    ])) : createCommentVNode("", true)
                                                                  ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                                    key: 2,
                                                                    class: "pa-6"
                                                                  }, [
                                                                    createVNode("p", {
                                                                      class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                      style: { "line-height": "1.8" }
                                                                    }, toDisplayString(act.descripcion), 1),
                                                                    (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                                      return openBlock(), createBlock("div", {
                                                                        key: ri,
                                                                        class: "mb-6"
                                                                      }, [
                                                                        createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                          createVNode(VIcon, {
                                                                            color: "gold",
                                                                            size: "16",
                                                                            class: "mr-1"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("mdi-pencil")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                        ]),
                                                                        createVNode(VTextarea, {
                                                                          modelValue: reflexiones.value[ri],
                                                                          "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                          variant: "outlined",
                                                                          color: "gold",
                                                                          theme: "dark",
                                                                          rows: "3",
                                                                          "auto-grow": "",
                                                                          disabled: reflexionEnviada.value,
                                                                          placeholder: "Escribe tu reflexión aquí...",
                                                                          class: "reflexion-textarea"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                                      ]);
                                                                    }), 128)),
                                                                    !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                                      key: 0,
                                                                      class: "d-flex justify-end"
                                                                    }, [
                                                                      createVNode(VBtn, {
                                                                        color: "gold-btn",
                                                                        class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                        disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                        onClick: ($event) => enviarReflexion(),
                                                                        "append-icon": "mdi-check"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Enviar reflexión")
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["disabled", "onClick"])
                                                                    ])) : createCommentVNode("", true),
                                                                    reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                                      createVNode(VAlert, {
                                                                        color: "green",
                                                                        variant: "tonal",
                                                                        icon: "mdi-star",
                                                                        class: "mt-4"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                        createVNode(VBtn, {
                                                                          color: "gold-btn",
                                                                          size: "large",
                                                                          class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                          onClick: ($event) => completarActividad(idx),
                                                                          "append-icon": "mdi-trophy"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("¡Finalizar OVA!")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["onClick"])
                                                                      ])
                                                                    ])) : createCommentVNode("", true)
                                                                  ])) : createCommentVNode("", true),
                                                                  idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                    key: 3,
                                                                    class: "pa-4 d-flex align-center justify-center",
                                                                    style: { "background": "rgba(105,240,174,0.05)" }
                                                                  }, [
                                                                    createVNode(VIcon, {
                                                                      color: "green-accent-3",
                                                                      size: "20",
                                                                      class: "mr-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-check-all")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                                  ])) : createCommentVNode("", true)
                                                                ])) : createCommentVNode("", true)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "pa-4 d-flex align-center justify-center locked-msg"
                                                            }, [
                                                              createVNode(VIcon, {
                                                                color: "grey",
                                                                size: "18",
                                                                class: "mr-2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-lock")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                            ])) : createCommentVNode("", true)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["class", "style"])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VExpandTransition, null, {
                                                default: withCtx(() => [
                                                  unref(progresoActividades) >= listaActividades.length ? (openBlock(), createBlock(VCard, {
                                                    key: 0,
                                                    class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                                    elevation: "0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "gold",
                                                        size: "72",
                                                        class: "mb-4 pulse-icon"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-trophy")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                                      createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                                      createVNode(VBtn, {
                                                        to: "/",
                                                        color: "gold-btn",
                                                        size: "large",
                                                        class: "rounded-pill font-weight-bold px-10",
                                                        "prepend-icon": "mdi-home"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Volver al Inicio")
                                                        ]),
                                                        _: 1
                                                      })
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "10",
                                          lg: "9",
                                          class: "mx-auto"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-center mb-10 slide-fade-enter-active" }, [
                                              createVNode("div", { class: "d-flex justify-center align-center mb-4" }, [
                                                createVNode(VIcon, {
                                                  color: "gold",
                                                  size: "36",
                                                  class: "mr-3 pulse-icon"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-trophy")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("h1", { class: "font-serif text-h4 text-gold text-glow" }, "ACTIVIDADES INTERACTIVAS")
                                              ]),
                                              createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2" }, " Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente. "),
                                              createVNode("div", {
                                                class: "mt-4 mx-auto",
                                                style: { "max-width": "420px" }
                                              }, [
                                                createVNode("div", { class: "d-flex justify-space-between mb-1" }, [
                                                  createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Actividades completadas"),
                                                  createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length), 1)
                                                ]),
                                                createVNode("div", { class: "progress-track" }, [
                                                  createVNode("div", {
                                                    class: "progress-fill",
                                                    style: { width: unref(progresoActividades) / listaActividades.length * 100 + "%" }
                                                  }, null, 4)
                                                ])
                                              ])
                                            ]),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(listaActividades, (act, idx) => {
                                                  return createVNode(VCol, {
                                                    key: idx,
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCard, {
                                                        elevation: "0",
                                                        class: ["rounded-xl glass-card activity-card mb-4", {
                                                          "locked-activity": idx > unref(progresoActividades),
                                                          "completed-activity": idx < unref(progresoActividades)
                                                        }],
                                                        style: { animationDelay: `${idx * 0.15}s` }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                            createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                              idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                key: 0,
                                                                color: "green-accent-3",
                                                                size: "28"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-check-circle")
                                                                ]),
                                                                _: 1
                                                              })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                                key: 1,
                                                                color: "grey",
                                                                size: "28"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-lock")
                                                                ]),
                                                                _: 1
                                                              })) : (openBlock(), createBlock("span", {
                                                                key: 2,
                                                                class: "font-serif text-gold",
                                                                style: { "font-size": "1.4rem", "font-weight": "700" }
                                                              }, toDisplayString(idx + 1), 1))
                                                            ]),
                                                            createVNode("div", { class: "flex-grow-1" }, [
                                                              createVNode("div", {
                                                                class: "text-overline text-amber-lighten-3",
                                                                style: { "letter-spacing": "2px" }
                                                              }, toDisplayString(act.tipo), 1),
                                                              createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                            ]),
                                                            createVNode(VIcon, {
                                                              color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                              size: "32"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(act.icono), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          createVNode(VDivider, { class: "border-opacity-20" }),
                                                          createVNode(VExpandTransition, null, {
                                                            default: withCtx(() => [
                                                              idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                                idx === 0 ? (openBlock(), createBlock("div", {
                                                                  key: 0,
                                                                  class: "pa-6"
                                                                }, [
                                                                  createVNode("p", {
                                                                    class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                    style: { "line-height": "1.8" }
                                                                  }, toDisplayString(act.descripcion), 1),
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                                    return openBlock(), createBlock("div", {
                                                                      key: pi,
                                                                      class: "quiz-question mb-6"
                                                                    }, [
                                                                      createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                        createVNode(VIcon, {
                                                                          color: "gold",
                                                                          size: "16",
                                                                          class: "mr-1"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("mdi-help-circle")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                      ]),
                                                                      createVNode(VRadioGroup, {
                                                                        modelValue: respuestasQuiz.value[pi],
                                                                        "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                        disabled: quizEnviado.value,
                                                                        class: "mt-0"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                            return openBlock(), createBlock(VRadio, {
                                                                              key: oi,
                                                                              label: op,
                                                                              value: oi,
                                                                              color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                              class: "quiz-radio mb-1"
                                                                            }, null, 8, ["label", "value", "color"]);
                                                                          }), 128))
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                      createVNode(VExpandTransition, null, {
                                                                        default: withCtx(() => [
                                                                          quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                            key: 0,
                                                                            variant: "tonal",
                                                                            color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                            icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                            density: "compact",
                                                                            class: "mt-2"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                                createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                                createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                              ]))
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]);
                                                                  }), 128)),
                                                                  !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                                    key: 0,
                                                                    class: "d-flex justify-end mt-2"
                                                                  }, [
                                                                    createVNode(VBtn, {
                                                                      color: "gold-btn",
                                                                      class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                      disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                      onClick: ($event) => enviarQuiz(),
                                                                      "append-icon": "mdi-send"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Enviar respuestas")
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["disabled", "onClick"])
                                                                  ])) : createCommentVNode("", true),
                                                                  quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                                    key: 1,
                                                                    color: "gold",
                                                                    variant: "tonal",
                                                                    icon: "mdi-trophy",
                                                                    class: "mt-4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Obtuviste "),
                                                                      createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                      createTextVNode(" de "),
                                                                      createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                      createTextVNode(" respuestas correctas. "),
                                                                      puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)) : createCommentVNode("", true),
                                                                  quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                    key: 2,
                                                                    class: "d-flex justify-end mt-4 gap-3"
                                                                  }, [
                                                                    createVNode(VBtn, {
                                                                      variant: "outlined",
                                                                      color: "white",
                                                                      class: "rounded-pill",
                                                                      onClick: reiniciarQuiz,
                                                                      "prepend-icon": "mdi-refresh"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Reintentar")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                      key: 0,
                                                                      color: "green-accent-4",
                                                                      variant: "flat",
                                                                      class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                      onClick: ($event) => completarActividad(idx),
                                                                      "append-icon": "mdi-arrow-right"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Siguiente Actividad")
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["onClick"])) : createCommentVNode("", true)
                                                                  ])) : createCommentVNode("", true)
                                                                ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                                  key: 1,
                                                                  class: "pa-6"
                                                                }, [
                                                                  createVNode("p", {
                                                                    class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                    style: { "line-height": "1.8" }
                                                                  }, toDisplayString(act.descripcion), 1),
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                                    return openBlock(), createBlock("div", {
                                                                      key: ci,
                                                                      class: "caso-card mb-6 pa-4 rounded-lg",
                                                                      style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                                    }, [
                                                                      createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                        createVNode(VIcon, {
                                                                          color: "amber-lighten-2",
                                                                          size: "20",
                                                                          class: "mr-2 mt-1"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("mdi-file-document-edit")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                      ]),
                                                                      createVNode("p", {
                                                                        class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                        style: { "line-height": "1.8" }
                                                                      }, toDisplayString(caso.descripcion), 1),
                                                                      createVNode(VSelect, {
                                                                        modelValue: respuestasCasos.value[ci],
                                                                        "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                        items: opcionesDerechos,
                                                                        label: "¿Qué derecho fundamental fue vulnerado?",
                                                                        variant: "outlined",
                                                                        color: "gold",
                                                                        theme: "dark",
                                                                        disabled: casosEnviados.value,
                                                                        density: "comfortable",
                                                                        class: "caso-select"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                      createVNode(VExpandTransition, null, {
                                                                        default: withCtx(() => [
                                                                          casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                            key: 0,
                                                                            variant: "tonal",
                                                                            color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                            icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                            density: "compact",
                                                                            class: "mt-2"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                                createTextVNode("La respuesta esperada era: "),
                                                                                createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                                createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                              ]))
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]);
                                                                  }), 128)),
                                                                  !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                                    key: 0,
                                                                    class: "d-flex justify-end"
                                                                  }, [
                                                                    createVNode(VBtn, {
                                                                      color: "gold-btn",
                                                                      class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                      disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                      onClick: ($event) => enviarCasos(),
                                                                      "append-icon": "mdi-send"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Enviar análisis")
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["disabled", "onClick"])
                                                                  ])) : createCommentVNode("", true),
                                                                  casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                    key: 1,
                                                                    class: "d-flex justify-end mt-4"
                                                                  }, [
                                                                    createVNode(VBtn, {
                                                                      color: "green-accent-4",
                                                                      variant: "flat",
                                                                      class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                      onClick: ($event) => completarActividad(idx),
                                                                      "append-icon": "mdi-arrow-right"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Siguiente Actividad")
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["onClick"])
                                                                  ])) : createCommentVNode("", true)
                                                                ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                                  key: 2,
                                                                  class: "pa-6"
                                                                }, [
                                                                  createVNode("p", {
                                                                    class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                    style: { "line-height": "1.8" }
                                                                  }, toDisplayString(act.descripcion), 1),
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                                    return openBlock(), createBlock("div", {
                                                                      key: ri,
                                                                      class: "mb-6"
                                                                    }, [
                                                                      createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                        createVNode(VIcon, {
                                                                          color: "gold",
                                                                          size: "16",
                                                                          class: "mr-1"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("mdi-pencil")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                      ]),
                                                                      createVNode(VTextarea, {
                                                                        modelValue: reflexiones.value[ri],
                                                                        "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                        variant: "outlined",
                                                                        color: "gold",
                                                                        theme: "dark",
                                                                        rows: "3",
                                                                        "auto-grow": "",
                                                                        disabled: reflexionEnviada.value,
                                                                        placeholder: "Escribe tu reflexión aquí...",
                                                                        class: "reflexion-textarea"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                                    ]);
                                                                  }), 128)),
                                                                  !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                                    key: 0,
                                                                    class: "d-flex justify-end"
                                                                  }, [
                                                                    createVNode(VBtn, {
                                                                      color: "gold-btn",
                                                                      class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                      disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                      onClick: ($event) => enviarReflexion(),
                                                                      "append-icon": "mdi-check"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Enviar reflexión")
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["disabled", "onClick"])
                                                                  ])) : createCommentVNode("", true),
                                                                  reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                                    createVNode(VAlert, {
                                                                      color: "green",
                                                                      variant: "tonal",
                                                                      icon: "mdi-star",
                                                                      class: "mt-4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                      createVNode(VBtn, {
                                                                        color: "gold-btn",
                                                                        size: "large",
                                                                        class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                        onClick: ($event) => completarActividad(idx),
                                                                        "append-icon": "mdi-trophy"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("¡Finalizar OVA!")
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["onClick"])
                                                                    ])
                                                                  ])) : createCommentVNode("", true)
                                                                ])) : createCommentVNode("", true),
                                                                idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                  key: 3,
                                                                  class: "pa-4 d-flex align-center justify-center",
                                                                  style: { "background": "rgba(105,240,174,0.05)" }
                                                                }, [
                                                                  createVNode(VIcon, {
                                                                    color: "green-accent-3",
                                                                    size: "20",
                                                                    class: "mr-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-check-all")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                                ])) : createCommentVNode("", true)
                                                              ])) : createCommentVNode("", true)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "pa-4 d-flex align-center justify-center locked-msg"
                                                          }, [
                                                            createVNode(VIcon, {
                                                              color: "grey",
                                                              size: "18",
                                                              class: "mr-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-lock")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                          ])) : createCommentVNode("", true)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class", "style"])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VExpandTransition, null, {
                                              default: withCtx(() => [
                                                unref(progresoActividades) >= listaActividades.length ? (openBlock(), createBlock(VCard, {
                                                  key: 0,
                                                  class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                                  elevation: "0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      color: "gold",
                                                      size: "72",
                                                      class: "mb-4 pulse-icon"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-trophy")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                                    createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                                    createVNode(VBtn, {
                                                      to: "/",
                                                      color: "gold-btn",
                                                      size: "large",
                                                      class: "rounded-pill font-weight-bold px-10",
                                                      "prepend-icon": "mdi-home"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Volver al Inicio")
                                                      ]),
                                                      _: 1
                                                    })
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
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                vistaActiva.value === "temas" ? (openBlock(), createBlock(VRow, {
                                  key: "temas-" + temaActual.value.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "10",
                                      lg: "8",
                                      class: "mx-auto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          elevation: "0",
                                          class: "rounded-xl overflow-hidden glass-card content-card"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "tema-header pa-6" }, [
                                              createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                createVNode("div", { class: "tema-number mr-4" }, toDisplayString(String(temaActual.value.id).padStart(2, "0")), 1),
                                                createVNode("div", null, [
                                                  createVNode("h2", { class: "font-serif text-h5 text-gold" }, toDisplayString(temaActual.value.titulo), 1),
                                                  temaActual.value.subtitulo ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "text-caption text-grey-lighten-1 mt-1"
                                                  }, toDisplayString(temaActual.value.subtitulo), 1)) : createCommentVNode("", true)
                                                ])
                                              ])
                                            ]),
                                            createVNode(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                              default: withCtx(() => [
                                                temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                                  key: 0,
                                                  src: temaActual.value.imagen,
                                                  onError: handleImageError,
                                                  height: "340",
                                                  cover: "",
                                                  class: "mb-8 rounded-xl main-image",
                                                  gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                                }, {
                                                  placeholder: withCtx(() => [
                                                    createVNode("div", {
                                                      class: "d-flex align-center justify-center fill-height",
                                                      style: { "background": "rgba(30,30,30,0.5)" }
                                                    }, [
                                                      createVNode(VProgressCircular, {
                                                        color: "gold",
                                                        indeterminate: "",
                                                        size: "48"
                                                      })
                                                    ])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                      createVNode(VIcon, {
                                                        size: "32",
                                                        color: "gold",
                                                        class: "mr-3 pulse-icon"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", {
                                                        class: "font-serif-italic text-h6 text-white",
                                                        style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                      }, toDisplayString(temaActual.value.subtitulo), 1)
                                                    ])
                                                  ]),
                                                  _: 1
                                                }, 8, ["src"])) : createCommentVNode("", true),
                                                createVNode("div", { class: "content-text" }, [
                                                  createVNode("p", {
                                                    class: "text-body-1 text-justify",
                                                    style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                                  }, toDisplayString(temaActual.value.contenido), 1)
                                                ]),
                                                temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                                  key: 1,
                                                  "aspect-ratio": 16 / 9,
                                                  class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("iframe", {
                                                      src: temaActual.value.video,
                                                      title: "Video explicativo",
                                                      width: "100%",
                                                      height: "100%",
                                                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                      allowfullscreen: "",
                                                      loading: "lazy",
                                                      style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true),
                                                temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                                  key: 2,
                                                  border: "start",
                                                  color: "gold",
                                                  theme: "light",
                                                  variant: "tonal",
                                                  class: "mt-6",
                                                  icon: "mdi-information"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, {
                                              class: "border-opacity-50",
                                              color: "white"
                                            }),
                                            createVNode(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  variant: "tonal",
                                                  color: "white",
                                                  "prepend-icon": "mdi-chevron-left",
                                                  onClick: ($event) => cambiarTema(-1),
                                                  disabled: temaActual.value.id === 1,
                                                  class: "hover-btn px-6 py-2 rounded-pill"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Anterior")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick", "disabled"]),
                                                temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                  key: 0,
                                                  color: "gold-btn",
                                                  "append-icon": "mdi-chevron-right",
                                                  onClick: marcarCompletadoYSiguiente,
                                                  class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true),
                                                temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                  key: 1,
                                                  color: "green-accent-4",
                                                  variant: "flat",
                                                  "append-icon": "mdi-flag-checkered",
                                                  onClick: marcarComoTerminado,
                                                  class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Ir a Actividades")
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
                                  ]),
                                  _: 1
                                })) : vistaActiva.value === "actividades" ? (openBlock(), createBlock(VRow, { key: "actividades" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "10",
                                      lg: "9",
                                      class: "mx-auto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-center mb-10 slide-fade-enter-active" }, [
                                          createVNode("div", { class: "d-flex justify-center align-center mb-4" }, [
                                            createVNode(VIcon, {
                                              color: "gold",
                                              size: "36",
                                              class: "mr-3 pulse-icon"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-trophy")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("h1", { class: "font-serif text-h4 text-gold text-glow" }, "ACTIVIDADES INTERACTIVAS")
                                          ]),
                                          createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2" }, " Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente. "),
                                          createVNode("div", {
                                            class: "mt-4 mx-auto",
                                            style: { "max-width": "420px" }
                                          }, [
                                            createVNode("div", { class: "d-flex justify-space-between mb-1" }, [
                                              createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Actividades completadas"),
                                              createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length), 1)
                                            ]),
                                            createVNode("div", { class: "progress-track" }, [
                                              createVNode("div", {
                                                class: "progress-fill",
                                                style: { width: unref(progresoActividades) / listaActividades.length * 100 + "%" }
                                              }, null, 4)
                                            ])
                                          ])
                                        ]),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(listaActividades, (act, idx) => {
                                              return createVNode(VCol, {
                                                key: idx,
                                                cols: "12"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    elevation: "0",
                                                    class: ["rounded-xl glass-card activity-card mb-4", {
                                                      "locked-activity": idx > unref(progresoActividades),
                                                      "completed-activity": idx < unref(progresoActividades)
                                                    }],
                                                    style: { animationDelay: `${idx * 0.15}s` }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                        createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                          idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                            key: 0,
                                                            color: "green-accent-3",
                                                            size: "28"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-check-circle")
                                                            ]),
                                                            _: 1
                                                          })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                            key: 1,
                                                            color: "grey",
                                                            size: "28"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-lock")
                                                            ]),
                                                            _: 1
                                                          })) : (openBlock(), createBlock("span", {
                                                            key: 2,
                                                            class: "font-serif text-gold",
                                                            style: { "font-size": "1.4rem", "font-weight": "700" }
                                                          }, toDisplayString(idx + 1), 1))
                                                        ]),
                                                        createVNode("div", { class: "flex-grow-1" }, [
                                                          createVNode("div", {
                                                            class: "text-overline text-amber-lighten-3",
                                                            style: { "letter-spacing": "2px" }
                                                          }, toDisplayString(act.tipo), 1),
                                                          createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                        ]),
                                                        createVNode(VIcon, {
                                                          color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                          size: "32"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(act.icono), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      createVNode(VDivider, { class: "border-opacity-20" }),
                                                      createVNode(VExpandTransition, null, {
                                                        default: withCtx(() => [
                                                          idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                            idx === 0 ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "pa-6"
                                                            }, [
                                                              createVNode("p", {
                                                                class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                style: { "line-height": "1.8" }
                                                              }, toDisplayString(act.descripcion), 1),
                                                              (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                                return openBlock(), createBlock("div", {
                                                                  key: pi,
                                                                  class: "quiz-question mb-6"
                                                                }, [
                                                                  createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                    createVNode(VIcon, {
                                                                      color: "gold",
                                                                      size: "16",
                                                                      class: "mr-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-help-circle")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                  ]),
                                                                  createVNode(VRadioGroup, {
                                                                    modelValue: respuestasQuiz.value[pi],
                                                                    "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                    disabled: quizEnviado.value,
                                                                    class: "mt-0"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                        return openBlock(), createBlock(VRadio, {
                                                                          key: oi,
                                                                          label: op,
                                                                          value: oi,
                                                                          color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                          class: "quiz-radio mb-1"
                                                                        }, null, 8, ["label", "value", "color"]);
                                                                      }), 128))
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                  createVNode(VExpandTransition, null, {
                                                                    default: withCtx(() => [
                                                                      quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                        key: 0,
                                                                        variant: "tonal",
                                                                        color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                        icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                        density: "compact",
                                                                        class: "mt-2"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                            createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                            createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                            createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                          ]))
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]);
                                                              }), 128)),
                                                              !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "d-flex justify-end mt-2"
                                                              }, [
                                                                createVNode(VBtn, {
                                                                  color: "gold-btn",
                                                                  class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                  disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                  onClick: ($event) => enviarQuiz(),
                                                                  "append-icon": "mdi-send"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Enviar respuestas")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["disabled", "onClick"])
                                                              ])) : createCommentVNode("", true),
                                                              quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                                key: 1,
                                                                color: "gold",
                                                                variant: "tonal",
                                                                icon: "mdi-trophy",
                                                                class: "mt-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Obtuviste "),
                                                                  createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                  createTextVNode(" de "),
                                                                  createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                  createTextVNode(" respuestas correctas. "),
                                                                  puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                                ]),
                                                                _: 2
                                                              }, 1024)) : createCommentVNode("", true),
                                                              quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                key: 2,
                                                                class: "d-flex justify-end mt-4 gap-3"
                                                              }, [
                                                                createVNode(VBtn, {
                                                                  variant: "outlined",
                                                                  color: "white",
                                                                  class: "rounded-pill",
                                                                  onClick: reiniciarQuiz,
                                                                  "prepend-icon": "mdi-refresh"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Reintentar")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                  key: 0,
                                                                  color: "green-accent-4",
                                                                  variant: "flat",
                                                                  class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                  onClick: ($event) => completarActividad(idx),
                                                                  "append-icon": "mdi-arrow-right"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Siguiente Actividad")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["onClick"])) : createCommentVNode("", true)
                                                              ])) : createCommentVNode("", true)
                                                            ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                              key: 1,
                                                              class: "pa-6"
                                                            }, [
                                                              createVNode("p", {
                                                                class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                style: { "line-height": "1.8" }
                                                              }, toDisplayString(act.descripcion), 1),
                                                              (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                                return openBlock(), createBlock("div", {
                                                                  key: ci,
                                                                  class: "caso-card mb-6 pa-4 rounded-lg",
                                                                  style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                                }, [
                                                                  createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                    createVNode(VIcon, {
                                                                      color: "amber-lighten-2",
                                                                      size: "20",
                                                                      class: "mr-2 mt-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-file-document-edit")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                  ]),
                                                                  createVNode("p", {
                                                                    class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                    style: { "line-height": "1.8" }
                                                                  }, toDisplayString(caso.descripcion), 1),
                                                                  createVNode(VSelect, {
                                                                    modelValue: respuestasCasos.value[ci],
                                                                    "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                    items: opcionesDerechos,
                                                                    label: "¿Qué derecho fundamental fue vulnerado?",
                                                                    variant: "outlined",
                                                                    color: "gold",
                                                                    theme: "dark",
                                                                    disabled: casosEnviados.value,
                                                                    density: "comfortable",
                                                                    class: "caso-select"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                  createVNode(VExpandTransition, null, {
                                                                    default: withCtx(() => [
                                                                      casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                        key: 0,
                                                                        variant: "tonal",
                                                                        color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                        icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                        density: "compact",
                                                                        class: "mt-2"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                            createTextVNode("La respuesta esperada era: "),
                                                                            createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                            createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                          ]))
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]);
                                                              }), 128)),
                                                              !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "d-flex justify-end"
                                                              }, [
                                                                createVNode(VBtn, {
                                                                  color: "gold-btn",
                                                                  class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                  disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                  onClick: ($event) => enviarCasos(),
                                                                  "append-icon": "mdi-send"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Enviar análisis")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["disabled", "onClick"])
                                                              ])) : createCommentVNode("", true),
                                                              casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                                key: 1,
                                                                class: "d-flex justify-end mt-4"
                                                              }, [
                                                                createVNode(VBtn, {
                                                                  color: "green-accent-4",
                                                                  variant: "flat",
                                                                  class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                  onClick: ($event) => completarActividad(idx),
                                                                  "append-icon": "mdi-arrow-right"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Siguiente Actividad")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["onClick"])
                                                              ])) : createCommentVNode("", true)
                                                            ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                              key: 2,
                                                              class: "pa-6"
                                                            }, [
                                                              createVNode("p", {
                                                                class: "text-body-2 text-grey-lighten-2 mb-6",
                                                                style: { "line-height": "1.8" }
                                                              }, toDisplayString(act.descripcion), 1),
                                                              (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                                return openBlock(), createBlock("div", {
                                                                  key: ri,
                                                                  class: "mb-6"
                                                                }, [
                                                                  createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                    createVNode(VIcon, {
                                                                      color: "gold",
                                                                      size: "16",
                                                                      class: "mr-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-pencil")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                  ]),
                                                                  createVNode(VTextarea, {
                                                                    modelValue: reflexiones.value[ri],
                                                                    "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                    variant: "outlined",
                                                                    color: "gold",
                                                                    theme: "dark",
                                                                    rows: "3",
                                                                    "auto-grow": "",
                                                                    disabled: reflexionEnviada.value,
                                                                    placeholder: "Escribe tu reflexión aquí...",
                                                                    class: "reflexion-textarea"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                                ]);
                                                              }), 128)),
                                                              !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "d-flex justify-end"
                                                              }, [
                                                                createVNode(VBtn, {
                                                                  color: "gold-btn",
                                                                  class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                  disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                  onClick: ($event) => enviarReflexion(),
                                                                  "append-icon": "mdi-check"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Enviar reflexión")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["disabled", "onClick"])
                                                              ])) : createCommentVNode("", true),
                                                              reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                                createVNode(VAlert, {
                                                                  color: "green",
                                                                  variant: "tonal",
                                                                  icon: "mdi-star",
                                                                  class: "mt-4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                  createVNode(VBtn, {
                                                                    color: "gold-btn",
                                                                    size: "large",
                                                                    class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                    onClick: ($event) => completarActividad(idx),
                                                                    "append-icon": "mdi-trophy"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("¡Finalizar OVA!")
                                                                    ]),
                                                                    _: 1
                                                                  }, 8, ["onClick"])
                                                                ])
                                                              ])) : createCommentVNode("", true)
                                                            ])) : createCommentVNode("", true),
                                                            idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                              key: 3,
                                                              class: "pa-4 d-flex align-center justify-center",
                                                              style: { "background": "rgba(105,240,174,0.05)" }
                                                            }, [
                                                              createVNode(VIcon, {
                                                                color: "green-accent-3",
                                                                size: "20",
                                                                class: "mr-2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-check-all")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                            ])) : createCommentVNode("", true)
                                                          ])) : createCommentVNode("", true)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "pa-4 d-flex align-center justify-center locked-msg"
                                                      }, [
                                                        createVNode(VIcon, {
                                                          color: "grey",
                                                          size: "18",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-lock")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                      ])) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class", "style"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VExpandTransition, null, {
                                          default: withCtx(() => [
                                            unref(progresoActividades) >= listaActividades.length ? (openBlock(), createBlock(VCard, {
                                              key: 0,
                                              class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                              elevation: "0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  color: "gold",
                                                  size: "72",
                                                  class: "mb-4 pulse-icon"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-trophy")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                                createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                                createVNode(VBtn, {
                                                  to: "/",
                                                  color: "gold-btn",
                                                  size: "large",
                                                  class: "rounded-pill font-weight-bold px-10",
                                                  "prepend-icon": "mdi-home"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Volver al Inicio")
                                                  ]),
                                                  _: 1
                                                })
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
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VFadeTransition, { mode: "out-in" }, {
                            default: withCtx(() => [
                              vistaActiva.value === "temas" ? (openBlock(), createBlock(VRow, {
                                key: "temas-" + temaActual.value.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "10",
                                    lg: "8",
                                    class: "mx-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        elevation: "0",
                                        class: "rounded-xl overflow-hidden glass-card content-card"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "tema-header pa-6" }, [
                                            createVNode("div", { class: "d-flex align-center justify-center" }, [
                                              createVNode("div", { class: "tema-number mr-4" }, toDisplayString(String(temaActual.value.id).padStart(2, "0")), 1),
                                              createVNode("div", null, [
                                                createVNode("h2", { class: "font-serif text-h5 text-gold" }, toDisplayString(temaActual.value.titulo), 1),
                                                temaActual.value.subtitulo ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "text-caption text-grey-lighten-1 mt-1"
                                                }, toDisplayString(temaActual.value.subtitulo), 1)) : createCommentVNode("", true)
                                              ])
                                            ])
                                          ]),
                                          createVNode(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                            default: withCtx(() => [
                                              temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                                key: 0,
                                                src: temaActual.value.imagen,
                                                onError: handleImageError,
                                                height: "340",
                                                cover: "",
                                                class: "mb-8 rounded-xl main-image",
                                                gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                              }, {
                                                placeholder: withCtx(() => [
                                                  createVNode("div", {
                                                    class: "d-flex align-center justify-center fill-height",
                                                    style: { "background": "rgba(30,30,30,0.5)" }
                                                  }, [
                                                    createVNode(VProgressCircular, {
                                                      color: "gold",
                                                      indeterminate: "",
                                                      size: "48"
                                                    })
                                                  ])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                    createVNode(VIcon, {
                                                      size: "32",
                                                      color: "gold",
                                                      class: "mr-3 pulse-icon"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", {
                                                      class: "font-serif-italic text-h6 text-white",
                                                      style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                    }, toDisplayString(temaActual.value.subtitulo), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["src"])) : createCommentVNode("", true),
                                              createVNode("div", { class: "content-text" }, [
                                                createVNode("p", {
                                                  class: "text-body-1 text-justify",
                                                  style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                                }, toDisplayString(temaActual.value.contenido), 1)
                                              ]),
                                              temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                                key: 1,
                                                "aspect-ratio": 16 / 9,
                                                class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("iframe", {
                                                    src: temaActual.value.video,
                                                    title: "Video explicativo",
                                                    width: "100%",
                                                    height: "100%",
                                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                    allowfullscreen: "",
                                                    loading: "lazy",
                                                    style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                                key: 2,
                                                border: "start",
                                                color: "gold",
                                                theme: "light",
                                                variant: "tonal",
                                                class: "mt-6",
                                                icon: "mdi-information"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, {
                                            class: "border-opacity-50",
                                            color: "white"
                                          }),
                                          createVNode(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                variant: "tonal",
                                                color: "white",
                                                "prepend-icon": "mdi-chevron-left",
                                                onClick: ($event) => cambiarTema(-1),
                                                disabled: temaActual.value.id === 1,
                                                class: "hover-btn px-6 py-2 rounded-pill"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Anterior")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick", "disabled"]),
                                              temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                key: 0,
                                                color: "gold-btn",
                                                "append-icon": "mdi-chevron-right",
                                                onClick: marcarCompletadoYSiguiente,
                                                class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                                key: 1,
                                                color: "green-accent-4",
                                                variant: "flat",
                                                "append-icon": "mdi-flag-checkered",
                                                onClick: marcarComoTerminado,
                                                class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Ir a Actividades")
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
                                ]),
                                _: 1
                              })) : vistaActiva.value === "actividades" ? (openBlock(), createBlock(VRow, { key: "actividades" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "10",
                                    lg: "9",
                                    class: "mx-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center mb-10 slide-fade-enter-active" }, [
                                        createVNode("div", { class: "d-flex justify-center align-center mb-4" }, [
                                          createVNode(VIcon, {
                                            color: "gold",
                                            size: "36",
                                            class: "mr-3 pulse-icon"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-trophy")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("h1", { class: "font-serif text-h4 text-gold text-glow" }, "ACTIVIDADES INTERACTIVAS")
                                        ]),
                                        createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2" }, " Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente. "),
                                        createVNode("div", {
                                          class: "mt-4 mx-auto",
                                          style: { "max-width": "420px" }
                                        }, [
                                          createVNode("div", { class: "d-flex justify-space-between mb-1" }, [
                                            createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Actividades completadas"),
                                            createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length), 1)
                                          ]),
                                          createVNode("div", { class: "progress-track" }, [
                                            createVNode("div", {
                                              class: "progress-fill",
                                              style: { width: unref(progresoActividades) / listaActividades.length * 100 + "%" }
                                            }, null, 4)
                                          ])
                                        ])
                                      ]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(listaActividades, (act, idx) => {
                                            return createVNode(VCol, {
                                              key: idx,
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  elevation: "0",
                                                  class: ["rounded-xl glass-card activity-card mb-4", {
                                                    "locked-activity": idx > unref(progresoActividades),
                                                    "completed-activity": idx < unref(progresoActividades)
                                                  }],
                                                  style: { animationDelay: `${idx * 0.15}s` }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                      createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                        idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                          key: 0,
                                                          color: "green-accent-3",
                                                          size: "28"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-check-circle")
                                                          ]),
                                                          _: 1
                                                        })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                          key: 1,
                                                          color: "grey",
                                                          size: "28"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-lock")
                                                          ]),
                                                          _: 1
                                                        })) : (openBlock(), createBlock("span", {
                                                          key: 2,
                                                          class: "font-serif text-gold",
                                                          style: { "font-size": "1.4rem", "font-weight": "700" }
                                                        }, toDisplayString(idx + 1), 1))
                                                      ]),
                                                      createVNode("div", { class: "flex-grow-1" }, [
                                                        createVNode("div", {
                                                          class: "text-overline text-amber-lighten-3",
                                                          style: { "letter-spacing": "2px" }
                                                        }, toDisplayString(act.tipo), 1),
                                                        createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                      ]),
                                                      createVNode(VIcon, {
                                                        color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                        size: "32"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(act.icono), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    createVNode(VDivider, { class: "border-opacity-20" }),
                                                    createVNode(VExpandTransition, null, {
                                                      default: withCtx(() => [
                                                        idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                          idx === 0 ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "pa-6"
                                                          }, [
                                                            createVNode("p", {
                                                              class: "text-body-2 text-grey-lighten-2 mb-6",
                                                              style: { "line-height": "1.8" }
                                                            }, toDisplayString(act.descripcion), 1),
                                                            (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                              return openBlock(), createBlock("div", {
                                                                key: pi,
                                                                class: "quiz-question mb-6"
                                                              }, [
                                                                createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                  createVNode(VIcon, {
                                                                    color: "gold",
                                                                    size: "16",
                                                                    class: "mr-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-help-circle")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                                ]),
                                                                createVNode(VRadioGroup, {
                                                                  modelValue: respuestasQuiz.value[pi],
                                                                  "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                  disabled: quizEnviado.value,
                                                                  class: "mt-0"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                      return openBlock(), createBlock(VRadio, {
                                                                        key: oi,
                                                                        label: op,
                                                                        value: oi,
                                                                        color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                        class: "quiz-radio mb-1"
                                                                      }, null, 8, ["label", "value", "color"]);
                                                                    }), 128))
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                createVNode(VExpandTransition, null, {
                                                                  default: withCtx(() => [
                                                                    quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                      key: 0,
                                                                      variant: "tonal",
                                                                      color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                      icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                      density: "compact",
                                                                      class: "mt-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                          createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                          createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                          createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                        ]))
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]);
                                                            }), 128)),
                                                            !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "d-flex justify-end mt-2"
                                                            }, [
                                                              createVNode(VBtn, {
                                                                color: "gold-btn",
                                                                class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                                onClick: ($event) => enviarQuiz(),
                                                                "append-icon": "mdi-send"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Enviar respuestas")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["disabled", "onClick"])
                                                            ])) : createCommentVNode("", true),
                                                            quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                              key: 1,
                                                              color: "gold",
                                                              variant: "tonal",
                                                              icon: "mdi-trophy",
                                                              class: "mt-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Obtuviste "),
                                                                createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                                createTextVNode(" de "),
                                                                createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                                createTextVNode(" respuestas correctas. "),
                                                                puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                              ]),
                                                              _: 2
                                                            }, 1024)) : createCommentVNode("", true),
                                                            quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                              key: 2,
                                                              class: "d-flex justify-end mt-4 gap-3"
                                                            }, [
                                                              createVNode(VBtn, {
                                                                variant: "outlined",
                                                                color: "white",
                                                                class: "rounded-pill",
                                                                onClick: reiniciarQuiz,
                                                                "prepend-icon": "mdi-refresh"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Reintentar")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                                key: 0,
                                                                color: "green-accent-4",
                                                                variant: "flat",
                                                                class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                onClick: ($event) => completarActividad(idx),
                                                                "append-icon": "mdi-arrow-right"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Siguiente Actividad")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["onClick"])) : createCommentVNode("", true)
                                                            ])) : createCommentVNode("", true)
                                                          ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                            key: 1,
                                                            class: "pa-6"
                                                          }, [
                                                            createVNode("p", {
                                                              class: "text-body-2 text-grey-lighten-2 mb-6",
                                                              style: { "line-height": "1.8" }
                                                            }, toDisplayString(act.descripcion), 1),
                                                            (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                              return openBlock(), createBlock("div", {
                                                                key: ci,
                                                                class: "caso-card mb-6 pa-4 rounded-lg",
                                                                style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                              }, [
                                                                createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                  createVNode(VIcon, {
                                                                    color: "amber-lighten-2",
                                                                    size: "20",
                                                                    class: "mr-2 mt-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-file-document-edit")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                                ]),
                                                                createVNode("p", {
                                                                  class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                  style: { "line-height": "1.8" }
                                                                }, toDisplayString(caso.descripcion), 1),
                                                                createVNode(VSelect, {
                                                                  modelValue: respuestasCasos.value[ci],
                                                                  "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                  items: opcionesDerechos,
                                                                  label: "¿Qué derecho fundamental fue vulnerado?",
                                                                  variant: "outlined",
                                                                  color: "gold",
                                                                  theme: "dark",
                                                                  disabled: casosEnviados.value,
                                                                  density: "comfortable",
                                                                  class: "caso-select"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                                createVNode(VExpandTransition, null, {
                                                                  default: withCtx(() => [
                                                                    casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                      key: 0,
                                                                      variant: "tonal",
                                                                      color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                      icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                      density: "compact",
                                                                      class: "mt-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                          createTextVNode("La respuesta esperada era: "),
                                                                          createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                          createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                        ]))
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]);
                                                            }), 128)),
                                                            !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "d-flex justify-end"
                                                            }, [
                                                              createVNode(VBtn, {
                                                                color: "gold-btn",
                                                                class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                                onClick: ($event) => enviarCasos(),
                                                                "append-icon": "mdi-send"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Enviar análisis")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["disabled", "onClick"])
                                                            ])) : createCommentVNode("", true),
                                                            casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                              key: 1,
                                                              class: "d-flex justify-end mt-4"
                                                            }, [
                                                              createVNode(VBtn, {
                                                                color: "green-accent-4",
                                                                variant: "flat",
                                                                class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                                onClick: ($event) => completarActividad(idx),
                                                                "append-icon": "mdi-arrow-right"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Siguiente Actividad")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["onClick"])
                                                            ])) : createCommentVNode("", true)
                                                          ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                            key: 2,
                                                            class: "pa-6"
                                                          }, [
                                                            createVNode("p", {
                                                              class: "text-body-2 text-grey-lighten-2 mb-6",
                                                              style: { "line-height": "1.8" }
                                                            }, toDisplayString(act.descripcion), 1),
                                                            (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                              return openBlock(), createBlock("div", {
                                                                key: ri,
                                                                class: "mb-6"
                                                              }, [
                                                                createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                  createVNode(VIcon, {
                                                                    color: "gold",
                                                                    size: "16",
                                                                    class: "mr-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-pencil")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                                ]),
                                                                createVNode(VTextarea, {
                                                                  modelValue: reflexiones.value[ri],
                                                                  "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                  variant: "outlined",
                                                                  color: "gold",
                                                                  theme: "dark",
                                                                  rows: "3",
                                                                  "auto-grow": "",
                                                                  disabled: reflexionEnviada.value,
                                                                  placeholder: "Escribe tu reflexión aquí...",
                                                                  class: "reflexion-textarea"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                              ]);
                                                            }), 128)),
                                                            !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "d-flex justify-end"
                                                            }, [
                                                              createVNode(VBtn, {
                                                                color: "gold-btn",
                                                                class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                                disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                                onClick: ($event) => enviarReflexion(),
                                                                "append-icon": "mdi-check"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Enviar reflexión")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["disabled", "onClick"])
                                                            ])) : createCommentVNode("", true),
                                                            reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                              createVNode(VAlert, {
                                                                color: "green",
                                                                variant: "tonal",
                                                                icon: "mdi-star",
                                                                class: "mt-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                                createVNode(VBtn, {
                                                                  color: "gold-btn",
                                                                  size: "large",
                                                                  class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                  onClick: ($event) => completarActividad(idx),
                                                                  "append-icon": "mdi-trophy"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("¡Finalizar OVA!")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["onClick"])
                                                              ])
                                                            ])) : createCommentVNode("", true)
                                                          ])) : createCommentVNode("", true),
                                                          idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                            key: 3,
                                                            class: "pa-4 d-flex align-center justify-center",
                                                            style: { "background": "rgba(105,240,174,0.05)" }
                                                          }, [
                                                            createVNode(VIcon, {
                                                              color: "green-accent-3",
                                                              size: "20",
                                                              class: "mr-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-check-all")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                          ])) : createCommentVNode("", true)
                                                        ])) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "pa-4 d-flex align-center justify-center locked-msg"
                                                    }, [
                                                      createVNode(VIcon, {
                                                        color: "grey",
                                                        size: "18",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-lock")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                    ])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class", "style"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VExpandTransition, null, {
                                        default: withCtx(() => [
                                          unref(progresoActividades) >= listaActividades.length ? (openBlock(), createBlock(VCard, {
                                            key: 0,
                                            class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                            elevation: "0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                color: "gold",
                                                size: "72",
                                                class: "mb-4 pulse-icon"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-trophy")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                              createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                              createVNode(VBtn, {
                                                to: "/",
                                                color: "gold-btn",
                                                size: "large",
                                                class: "rounded-pill font-weight-bold px-10",
                                                "prepend-icon": "mdi-home"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Volver al Inicio")
                                                ]),
                                                _: 1
                                              })
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
                    createVNode(VContainer, {
                      fluid: "",
                      class: "pa-8 position-relative z-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(VFadeTransition, { mode: "out-in" }, {
                          default: withCtx(() => [
                            vistaActiva.value === "temas" ? (openBlock(), createBlock(VRow, {
                              key: "temas-" + temaActual.value.id
                            }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10",
                                  lg: "8",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      elevation: "0",
                                      class: "rounded-xl overflow-hidden glass-card content-card"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "tema-header pa-6" }, [
                                          createVNode("div", { class: "d-flex align-center justify-center" }, [
                                            createVNode("div", { class: "tema-number mr-4" }, toDisplayString(String(temaActual.value.id).padStart(2, "0")), 1),
                                            createVNode("div", null, [
                                              createVNode("h2", { class: "font-serif text-h5 text-gold" }, toDisplayString(temaActual.value.titulo), 1),
                                              temaActual.value.subtitulo ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "text-caption text-grey-lighten-1 mt-1"
                                              }, toDisplayString(temaActual.value.subtitulo), 1)) : createCommentVNode("", true)
                                            ])
                                          ])
                                        ]),
                                        createVNode(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                          default: withCtx(() => [
                                            temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                              key: 0,
                                              src: temaActual.value.imagen,
                                              onError: handleImageError,
                                              height: "340",
                                              cover: "",
                                              class: "mb-8 rounded-xl main-image",
                                              gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                            }, {
                                              placeholder: withCtx(() => [
                                                createVNode("div", {
                                                  class: "d-flex align-center justify-center fill-height",
                                                  style: { "background": "rgba(30,30,30,0.5)" }
                                                }, [
                                                  createVNode(VProgressCircular, {
                                                    color: "gold",
                                                    indeterminate: "",
                                                    size: "48"
                                                  })
                                                ])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                  createVNode(VIcon, {
                                                    size: "32",
                                                    color: "gold",
                                                    class: "mr-3 pulse-icon"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", {
                                                    class: "font-serif-italic text-h6 text-white",
                                                    style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                  }, toDisplayString(temaActual.value.subtitulo), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode("div", { class: "content-text" }, [
                                              createVNode("p", {
                                                class: "text-body-1 text-justify",
                                                style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                              }, toDisplayString(temaActual.value.contenido), 1)
                                            ]),
                                            temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                              key: 1,
                                              "aspect-ratio": 16 / 9,
                                              class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("iframe", {
                                                  src: temaActual.value.video,
                                                  title: "Video explicativo",
                                                  width: "100%",
                                                  height: "100%",
                                                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                  allowfullscreen: "",
                                                  loading: "lazy",
                                                  style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                              key: 2,
                                              border: "start",
                                              color: "gold",
                                              theme: "light",
                                              variant: "tonal",
                                              class: "mt-6",
                                              icon: "mdi-information"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, {
                                          class: "border-opacity-50",
                                          color: "white"
                                        }),
                                        createVNode(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              variant: "tonal",
                                              color: "white",
                                              "prepend-icon": "mdi-chevron-left",
                                              onClick: ($event) => cambiarTema(-1),
                                              disabled: temaActual.value.id === 1,
                                              class: "hover-btn px-6 py-2 rounded-pill"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Anterior")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick", "disabled"]),
                                            temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                              key: 0,
                                              color: "gold-btn",
                                              "append-icon": "mdi-chevron-right",
                                              onClick: marcarCompletadoYSiguiente,
                                              class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                              key: 1,
                                              color: "green-accent-4",
                                              variant: "flat",
                                              "append-icon": "mdi-flag-checkered",
                                              onClick: marcarComoTerminado,
                                              class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Ir a Actividades")
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
                              ]),
                              _: 1
                            })) : vistaActiva.value === "actividades" ? (openBlock(), createBlock(VRow, { key: "actividades" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "10",
                                  lg: "9",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center mb-10 slide-fade-enter-active" }, [
                                      createVNode("div", { class: "d-flex justify-center align-center mb-4" }, [
                                        createVNode(VIcon, {
                                          color: "gold",
                                          size: "36",
                                          class: "mr-3 pulse-icon"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-trophy")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h1", { class: "font-serif text-h4 text-gold text-glow" }, "ACTIVIDADES INTERACTIVAS")
                                      ]),
                                      createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2" }, " Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente. "),
                                      createVNode("div", {
                                        class: "mt-4 mx-auto",
                                        style: { "max-width": "420px" }
                                      }, [
                                        createVNode("div", { class: "d-flex justify-space-between mb-1" }, [
                                          createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Actividades completadas"),
                                          createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length), 1)
                                        ]),
                                        createVNode("div", { class: "progress-track" }, [
                                          createVNode("div", {
                                            class: "progress-fill",
                                            style: { width: unref(progresoActividades) / listaActividades.length * 100 + "%" }
                                          }, null, 4)
                                        ])
                                      ])
                                    ]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(listaActividades, (act, idx) => {
                                          return createVNode(VCol, {
                                            key: idx,
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                elevation: "0",
                                                class: ["rounded-xl glass-card activity-card mb-4", {
                                                  "locked-activity": idx > unref(progresoActividades),
                                                  "completed-activity": idx < unref(progresoActividades)
                                                }],
                                                style: { animationDelay: `${idx * 0.15}s` }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                    createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                      idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                        key: 0,
                                                        color: "green-accent-3",
                                                        size: "28"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-check-circle")
                                                        ]),
                                                        _: 1
                                                      })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                        key: 1,
                                                        color: "grey",
                                                        size: "28"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-lock")
                                                        ]),
                                                        _: 1
                                                      })) : (openBlock(), createBlock("span", {
                                                        key: 2,
                                                        class: "font-serif text-gold",
                                                        style: { "font-size": "1.4rem", "font-weight": "700" }
                                                      }, toDisplayString(idx + 1), 1))
                                                    ]),
                                                    createVNode("div", { class: "flex-grow-1" }, [
                                                      createVNode("div", {
                                                        class: "text-overline text-amber-lighten-3",
                                                        style: { "letter-spacing": "2px" }
                                                      }, toDisplayString(act.tipo), 1),
                                                      createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                    ]),
                                                    createVNode(VIcon, {
                                                      color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                      size: "32"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(act.icono), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  createVNode(VDivider, { class: "border-opacity-20" }),
                                                  createVNode(VExpandTransition, null, {
                                                    default: withCtx(() => [
                                                      idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                        idx === 0 ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "pa-6"
                                                        }, [
                                                          createVNode("p", {
                                                            class: "text-body-2 text-grey-lighten-2 mb-6",
                                                            style: { "line-height": "1.8" }
                                                          }, toDisplayString(act.descripcion), 1),
                                                          (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                            return openBlock(), createBlock("div", {
                                                              key: pi,
                                                              class: "quiz-question mb-6"
                                                            }, [
                                                              createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                createVNode(VIcon, {
                                                                  color: "gold",
                                                                  size: "16",
                                                                  class: "mr-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-help-circle")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                              ]),
                                                              createVNode(VRadioGroup, {
                                                                modelValue: respuestasQuiz.value[pi],
                                                                "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                                disabled: quizEnviado.value,
                                                                class: "mt-0"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                    return openBlock(), createBlock(VRadio, {
                                                                      key: oi,
                                                                      label: op,
                                                                      value: oi,
                                                                      color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                      class: "quiz-radio mb-1"
                                                                    }, null, 8, ["label", "value", "color"]);
                                                                  }), 128))
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                              createVNode(VExpandTransition, null, {
                                                                default: withCtx(() => [
                                                                  quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                    key: 0,
                                                                    variant: "tonal",
                                                                    color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                    icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                    density: "compact",
                                                                    class: "mt-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                        createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                        createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                        createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                      ]))
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]);
                                                          }), 128)),
                                                          !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "d-flex justify-end mt-2"
                                                          }, [
                                                            createVNode(VBtn, {
                                                              color: "gold-btn",
                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                              disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                              onClick: ($event) => enviarQuiz(),
                                                              "append-icon": "mdi-send"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Enviar respuestas")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["disabled", "onClick"])
                                                          ])) : createCommentVNode("", true),
                                                          quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                            key: 1,
                                                            color: "gold",
                                                            variant: "tonal",
                                                            icon: "mdi-trophy",
                                                            class: "mt-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Obtuviste "),
                                                              createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                              createTextVNode(" de "),
                                                              createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                              createTextVNode(" respuestas correctas. "),
                                                              puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                            ]),
                                                            _: 2
                                                          }, 1024)) : createCommentVNode("", true),
                                                          quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                            key: 2,
                                                            class: "d-flex justify-end mt-4 gap-3"
                                                          }, [
                                                            createVNode(VBtn, {
                                                              variant: "outlined",
                                                              color: "white",
                                                              class: "rounded-pill",
                                                              onClick: reiniciarQuiz,
                                                              "prepend-icon": "mdi-refresh"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Reintentar")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                              key: 0,
                                                              color: "green-accent-4",
                                                              variant: "flat",
                                                              class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                              onClick: ($event) => completarActividad(idx),
                                                              "append-icon": "mdi-arrow-right"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Siguiente Actividad")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["onClick"])) : createCommentVNode("", true)
                                                          ])) : createCommentVNode("", true)
                                                        ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                          key: 1,
                                                          class: "pa-6"
                                                        }, [
                                                          createVNode("p", {
                                                            class: "text-body-2 text-grey-lighten-2 mb-6",
                                                            style: { "line-height": "1.8" }
                                                          }, toDisplayString(act.descripcion), 1),
                                                          (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                            return openBlock(), createBlock("div", {
                                                              key: ci,
                                                              class: "caso-card mb-6 pa-4 rounded-lg",
                                                              style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                            }, [
                                                              createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                                createVNode(VIcon, {
                                                                  color: "amber-lighten-2",
                                                                  size: "20",
                                                                  class: "mr-2 mt-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-file-document-edit")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                              ]),
                                                              createVNode("p", {
                                                                class: "text-body-2 text-grey-lighten-2 mb-4",
                                                                style: { "line-height": "1.8" }
                                                              }, toDisplayString(caso.descripcion), 1),
                                                              createVNode(VSelect, {
                                                                modelValue: respuestasCasos.value[ci],
                                                                "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                                items: opcionesDerechos,
                                                                label: "¿Qué derecho fundamental fue vulnerado?",
                                                                variant: "outlined",
                                                                color: "gold",
                                                                theme: "dark",
                                                                disabled: casosEnviados.value,
                                                                density: "comfortable",
                                                                class: "caso-select"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                              createVNode(VExpandTransition, null, {
                                                                default: withCtx(() => [
                                                                  casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                    key: 0,
                                                                    variant: "tonal",
                                                                    color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                    icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                    density: "compact",
                                                                    class: "mt-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                        createTextVNode("La respuesta esperada era: "),
                                                                        createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                        createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                      ]))
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]);
                                                          }), 128)),
                                                          !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "d-flex justify-end"
                                                          }, [
                                                            createVNode(VBtn, {
                                                              color: "gold-btn",
                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                              disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                              onClick: ($event) => enviarCasos(),
                                                              "append-icon": "mdi-send"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Enviar análisis")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["disabled", "onClick"])
                                                          ])) : createCommentVNode("", true),
                                                          casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                            key: 1,
                                                            class: "d-flex justify-end mt-4"
                                                          }, [
                                                            createVNode(VBtn, {
                                                              color: "green-accent-4",
                                                              variant: "flat",
                                                              class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                              onClick: ($event) => completarActividad(idx),
                                                              "append-icon": "mdi-arrow-right"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Siguiente Actividad")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["onClick"])
                                                          ])) : createCommentVNode("", true)
                                                        ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                          key: 2,
                                                          class: "pa-6"
                                                        }, [
                                                          createVNode("p", {
                                                            class: "text-body-2 text-grey-lighten-2 mb-6",
                                                            style: { "line-height": "1.8" }
                                                          }, toDisplayString(act.descripcion), 1),
                                                          (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                            return openBlock(), createBlock("div", {
                                                              key: ri,
                                                              class: "mb-6"
                                                            }, [
                                                              createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                                createVNode(VIcon, {
                                                                  color: "gold",
                                                                  size: "16",
                                                                  class: "mr-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-pencil")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                              ]),
                                                              createVNode(VTextarea, {
                                                                modelValue: reflexiones.value[ri],
                                                                "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                                variant: "outlined",
                                                                color: "gold",
                                                                theme: "dark",
                                                                rows: "3",
                                                                "auto-grow": "",
                                                                disabled: reflexionEnviada.value,
                                                                placeholder: "Escribe tu reflexión aquí...",
                                                                class: "reflexion-textarea"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                            ]);
                                                          }), 128)),
                                                          !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "d-flex justify-end"
                                                          }, [
                                                            createVNode(VBtn, {
                                                              color: "gold-btn",
                                                              class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                              disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                              onClick: ($event) => enviarReflexion(),
                                                              "append-icon": "mdi-check"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Enviar reflexión")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["disabled", "onClick"])
                                                          ])) : createCommentVNode("", true),
                                                          reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                            createVNode(VAlert, {
                                                              color: "green",
                                                              variant: "tonal",
                                                              icon: "mdi-star",
                                                              class: "mt-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                              createVNode(VBtn, {
                                                                color: "gold-btn",
                                                                size: "large",
                                                                class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                                onClick: ($event) => completarActividad(idx),
                                                                "append-icon": "mdi-trophy"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("¡Finalizar OVA!")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["onClick"])
                                                            ])
                                                          ])) : createCommentVNode("", true)
                                                        ])) : createCommentVNode("", true),
                                                        idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                          key: 3,
                                                          class: "pa-4 d-flex align-center justify-center",
                                                          style: { "background": "rgba(105,240,174,0.05)" }
                                                        }, [
                                                          createVNode(VIcon, {
                                                            color: "green-accent-3",
                                                            size: "20",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-check-all")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                        ])) : createCommentVNode("", true)
                                                      ])) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "pa-4 d-flex align-center justify-center locked-msg"
                                                  }, [
                                                    createVNode(VIcon, {
                                                      color: "grey",
                                                      size: "18",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-lock")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                  ])) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["class", "style"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VExpandTransition, null, {
                                      default: withCtx(() => [
                                        unref(progresoActividades) >= listaActividades.length ? (openBlock(), createBlock(VCard, {
                                          key: 0,
                                          class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                          elevation: "0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              color: "gold",
                                              size: "72",
                                              class: "mb-4 pulse-icon"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-trophy")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                            createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                            createVNode(VBtn, {
                                              to: "/",
                                              color: "gold-btn",
                                              size: "large",
                                              class: "rounded-pill font-weight-bold px-10",
                                              "prepend-icon": "mdi-home"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Volver al Inicio")
                                              ]),
                                              _: 1
                                            })
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
                color: "rgba(20, 20, 20, 0.85)",
                class: "glass-header",
                theme: "dark",
                elevation: "0"
              }, {
                default: withCtx(() => [
                  createVNode(VAppBarNavIcon, {
                    onClick: ($event) => drawer.value = !drawer.value,
                    color: "gold"
                  }, null, 8, ["onClick"]),
                  createVNode(VToolbarTitle, { class: "font-serif text-gold" }, {
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
                    color: "gold",
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
              createVNode(VNavigationDrawer, {
                modelValue: drawer.value,
                "onUpdate:modelValue": ($event) => drawer.value = $event,
                app: "",
                theme: "dark",
                width: "320",
                class: "sidebar-glass"
              }, {
                append: withCtx(() => [
                  createVNode("div", { class: "pa-4" }, [
                    createVNode(VBtn, {
                      block: "",
                      variant: "tonal",
                      color: "white",
                      to: "/",
                      "prepend-icon": "mdi-home",
                      class: "rounded-pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Inicio")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "sidebar-header pa-5" }, [
                    createVNode("div", { class: "d-flex align-center mb-3" }, [
                      createVNode(VIcon, {
                        color: "gold",
                        size: "28",
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-shield-account")
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("div", {
                          class: "font-serif text-gold",
                          style: { "font-size": "0.9rem", "letter-spacing": "1px" }
                        }, "TEMARIO OVA"),
                        createVNode("div", { class: "text-caption text-grey-lighten-1" }, "Derechos Fundamentales")
                      ])
                    ]),
                    createVNode("div", { class: "progress-section mt-4" }, [
                      createVNode("div", { class: "d-flex justify-space-between align-center mb-2" }, [
                        createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Progreso"),
                        createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(Math.round((unref(maxTemaDesbloqueado) - 1) / menuTemas.length * 100)) + "%", 1)
                      ]),
                      createVNode("div", { class: "progress-track" }, [
                        createVNode("div", {
                          class: "progress-fill",
                          style: { width: (unref(maxTemaDesbloqueado) - 1) / menuTemas.length * 100 + "%" }
                        }, null, 4)
                      ]),
                      createVNode("div", { class: "text-caption text-grey mt-1" }, toDisplayString(unref(maxTemaDesbloqueado) - 1) + " de " + toDisplayString(menuTemas.length) + " completados", 1)
                    ])
                  ]),
                  createVNode(VDivider, { class: "border-opacity-25" }),
                  createVNode(VList, {
                    nav: "",
                    class: "pa-3 sidebar-list"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(menuTemas, (item, i) => {
                        return createVNode(VListItem, {
                          key: i,
                          value: item,
                          rounded: "lg",
                          class: ["mb-1 sidebar-item", {
                            "locked-item": item.id > unref(maxTemaDesbloqueado),
                            "completed-item": item.id < unref(maxTemaDesbloqueado),
                            "active-item": vistaActiva.value === "temas" && temaActual.value.id === item.id
                          }],
                          onClick: ($event) => item.id <= unref(maxTemaDesbloqueado) ? (vistaActiva.value = "temas", temaActual.value = item) : null,
                          active: vistaActiva.value === "temas" && temaActual.value.id === item.id,
                          disabled: item.id > unref(maxTemaDesbloqueado)
                        }, {
                          prepend: withCtx(() => [
                            createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                              item.id > unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                key: 0,
                                size: "18",
                                color: "grey"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-lock")
                                ]),
                                _: 1
                              })) : item.id < unref(maxTemaDesbloqueado) ? (openBlock(), createBlock(VIcon, {
                                key: 1,
                                size: "18",
                                color: "green-accent-3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check-circle")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(VIcon, {
                                key: 2,
                                size: "18",
                                color: "gold"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.icon), 1)
                                ]),
                                _: 2
                              }, 1024))
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, {
                              class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "temas" && temaActual.value.id === item.id }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.titulo), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick", "active", "disabled", "class"]);
                      }), 64)),
                      createVNode(VDivider, { class: "my-3 border-opacity-25" }),
                      createVNode(VListItem, {
                        rounded: "lg",
                        class: ["mb-1 sidebar-item", {
                          "locked-item": !unref(actividadesDesbloqueadas),
                          "active-item": vistaActiva.value === "actividades"
                        }],
                        disabled: !unref(actividadesDesbloqueadas),
                        onClick: ($event) => unref(actividadesDesbloqueadas) ? vistaActiva.value = "actividades" : null,
                        active: vistaActiva.value === "actividades"
                      }, {
                        prepend: withCtx(() => [
                          createVNode("div", { class: "sidebar-icon-wrapper mr-3" }, [
                            !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VIcon, {
                              key: 0,
                              size: "18",
                              color: "grey"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-lock")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VIcon, {
                              key: 1,
                              size: "18",
                              color: vistaActiva.value === "actividades" ? "gold" : "white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-controller-classic")
                              ]),
                              _: 1
                            }, 8, ["color"]))
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VListItemTitle, {
                            class: ["sidebar-item-text", { "text-gold": vistaActiva.value === "actividades" }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Actividades "),
                              !unref(actividadesDesbloqueadas) ? (openBlock(), createBlock(VChip, {
                                key: 0,
                                size: "x-small",
                                color: "grey",
                                class: "ml-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Bloqueado")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ]),
                        _: 1
                      }, 8, ["class", "disabled", "onClick", "active"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
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
                      createVNode(VFadeTransition, { mode: "out-in" }, {
                        default: withCtx(() => [
                          vistaActiva.value === "temas" ? (openBlock(), createBlock(VRow, {
                            key: "temas-" + temaActual.value.id
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                lg: "8",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    elevation: "0",
                                    class: "rounded-xl overflow-hidden glass-card content-card"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "tema-header pa-6" }, [
                                        createVNode("div", { class: "d-flex align-center justify-center" }, [
                                          createVNode("div", { class: "tema-number mr-4" }, toDisplayString(String(temaActual.value.id).padStart(2, "0")), 1),
                                          createVNode("div", null, [
                                            createVNode("h2", { class: "font-serif text-h5 text-gold" }, toDisplayString(temaActual.value.titulo), 1),
                                            temaActual.value.subtitulo ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "text-caption text-grey-lighten-1 mt-1"
                                            }, toDisplayString(temaActual.value.subtitulo), 1)) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]),
                                      createVNode(VCardText, { class: "pa-8 text-white slide-fade-enter-active" }, {
                                        default: withCtx(() => [
                                          temaActual.value.imagen ? (openBlock(), createBlock(VImg, {
                                            key: 0,
                                            src: temaActual.value.imagen,
                                            onError: handleImageError,
                                            height: "340",
                                            cover: "",
                                            class: "mb-8 rounded-xl main-image",
                                            gradient: "to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65)"
                                          }, {
                                            placeholder: withCtx(() => [
                                              createVNode("div", {
                                                class: "d-flex align-center justify-center fill-height",
                                                style: { "background": "rgba(30,30,30,0.5)" }
                                              }, [
                                                createVNode(VProgressCircular, {
                                                  color: "gold",
                                                  indeterminate: "",
                                                  size: "48"
                                                })
                                              ])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-end fill-height pa-6" }, [
                                                createVNode(VIcon, {
                                                  size: "32",
                                                  color: "gold",
                                                  class: "mr-3 pulse-icon"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(temaActual.value.icon), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", {
                                                  class: "font-serif-italic text-h6 text-white",
                                                  style: { "text-shadow": "0 2px 8px rgba(0,0,0,0.8)" }
                                                }, toDisplayString(temaActual.value.subtitulo), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode("div", { class: "content-text" }, [
                                            createVNode("p", {
                                              class: "text-body-1 text-justify",
                                              style: { "line-height": "2", "font-size": "1.1rem !important", "color": "rgba(255,255,255,0.85)" }
                                            }, toDisplayString(temaActual.value.contenido), 1)
                                          ]),
                                          temaActual.value.video ? (openBlock(), createBlock(VResponsive, {
                                            key: 1,
                                            "aspect-ratio": 16 / 9,
                                            class: "mb-6 mt-6 rounded-lg overflow-hidden elevation-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("iframe", {
                                                src: temaActual.value.video,
                                                title: "Video explicativo",
                                                width: "100%",
                                                height: "100%",
                                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                                                allowfullscreen: "",
                                                loading: "lazy",
                                                style: { "border": "none", "position": "absolute", "top": "0", "left": "0" }
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          temaActual.value.importante ? (openBlock(), createBlock(VAlert, {
                                            key: 2,
                                            border: "start",
                                            color: "gold",
                                            theme: "light",
                                            variant: "tonal",
                                            class: "mt-6",
                                            icon: "mdi-information"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(temaActual.value.importante), 1)
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, {
                                        class: "border-opacity-50",
                                        color: "white"
                                      }),
                                      createVNode(VCardActions, { class: "pa-6 justify-space-between bg-transparent" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            variant: "tonal",
                                            color: "white",
                                            "prepend-icon": "mdi-chevron-left",
                                            onClick: ($event) => cambiarTema(-1),
                                            disabled: temaActual.value.id === 1,
                                            class: "hover-btn px-6 py-2 rounded-pill"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Anterior")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick", "disabled"]),
                                          temaActual.value.id < menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            color: "gold-btn",
                                            "append-icon": "mdi-chevron-right",
                                            onClick: marcarCompletadoYSiguiente,
                                            class: "hover-btn pulse-animation px-8 py-2 rounded-pill font-weight-bold"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(temaActual.value.id === unref(maxTemaDesbloqueado) ? "Completar y Siguiente" : "Siguiente Tema"), 1)
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          temaActual.value.id === menuTemas.length ? (openBlock(), createBlock(VBtn, {
                                            key: 1,
                                            color: "green-accent-4",
                                            variant: "flat",
                                            "append-icon": "mdi-flag-checkered",
                                            onClick: marcarComoTerminado,
                                            class: "hover-btn bounce-animation px-8 py-2 rounded-pill font-weight-bold text-black"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Ir a Actividades")
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
                            ]),
                            _: 1
                          })) : vistaActiva.value === "actividades" ? (openBlock(), createBlock(VRow, { key: "actividades" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "10",
                                lg: "9",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center mb-10 slide-fade-enter-active" }, [
                                    createVNode("div", { class: "d-flex justify-center align-center mb-4" }, [
                                      createVNode(VIcon, {
                                        color: "gold",
                                        size: "36",
                                        class: "mr-3 pulse-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-trophy")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h1", { class: "font-serif text-h4 text-gold text-glow" }, "ACTIVIDADES INTERACTIVAS")
                                    ]),
                                    createVNode("p", { class: "text-subtitle-1 font-serif-italic text-grey-lighten-2" }, " Fortalece tu comprensión de los Derechos Fundamentales. Completa cada actividad para avanzar a la siguiente. "),
                                    createVNode("div", {
                                      class: "mt-4 mx-auto",
                                      style: { "max-width": "420px" }
                                    }, [
                                      createVNode("div", { class: "d-flex justify-space-between mb-1" }, [
                                        createVNode("span", { class: "text-caption text-grey-lighten-1" }, "Actividades completadas"),
                                        createVNode("span", { class: "text-caption text-gold font-weight-bold" }, toDisplayString(unref(progresoActividades)) + " / " + toDisplayString(listaActividades.length), 1)
                                      ]),
                                      createVNode("div", { class: "progress-track" }, [
                                        createVNode("div", {
                                          class: "progress-fill",
                                          style: { width: unref(progresoActividades) / listaActividades.length * 100 + "%" }
                                        }, null, 4)
                                      ])
                                    ])
                                  ]),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(listaActividades, (act, idx) => {
                                        return createVNode(VCol, {
                                          key: idx,
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              elevation: "0",
                                              class: ["rounded-xl glass-card activity-card mb-4", {
                                                "locked-activity": idx > unref(progresoActividades),
                                                "completed-activity": idx < unref(progresoActividades)
                                              }],
                                              style: { animationDelay: `${idx * 0.15}s` }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "activity-header pa-5 d-flex align-center" }, [
                                                  createVNode("div", { class: "activity-number-badge mr-4" }, [
                                                    idx < unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                      key: 0,
                                                      color: "green-accent-3",
                                                      size: "28"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-check-circle")
                                                      ]),
                                                      _: 1
                                                    })) : idx > unref(progresoActividades) ? (openBlock(), createBlock(VIcon, {
                                                      key: 1,
                                                      color: "grey",
                                                      size: "28"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-lock")
                                                      ]),
                                                      _: 1
                                                    })) : (openBlock(), createBlock("span", {
                                                      key: 2,
                                                      class: "font-serif text-gold",
                                                      style: { "font-size": "1.4rem", "font-weight": "700" }
                                                    }, toDisplayString(idx + 1), 1))
                                                  ]),
                                                  createVNode("div", { class: "flex-grow-1" }, [
                                                    createVNode("div", {
                                                      class: "text-overline text-amber-lighten-3",
                                                      style: { "letter-spacing": "2px" }
                                                    }, toDisplayString(act.tipo), 1),
                                                    createVNode("h3", { class: "font-serif text-h6 text-white" }, toDisplayString(act.titulo), 1)
                                                  ]),
                                                  createVNode(VIcon, {
                                                    color: idx < unref(progresoActividades) ? "green-accent-3" : idx > unref(progresoActividades) ? "grey" : "gold",
                                                    size: "32"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(act.icono), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                createVNode(VDivider, { class: "border-opacity-20" }),
                                                createVNode(VExpandTransition, null, {
                                                  default: withCtx(() => [
                                                    idx <= unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                      idx === 0 ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "pa-6"
                                                      }, [
                                                        createVNode("p", {
                                                          class: "text-body-2 text-grey-lighten-2 mb-6",
                                                          style: { "line-height": "1.8" }
                                                        }, toDisplayString(act.descripcion), 1),
                                                        (openBlock(true), createBlock(Fragment, null, renderList(act.preguntas, (preg, pi) => {
                                                          return openBlock(), createBlock("div", {
                                                            key: pi,
                                                            class: "quiz-question mb-6"
                                                          }, [
                                                            createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                              createVNode(VIcon, {
                                                                color: "gold",
                                                                size: "16",
                                                                class: "mr-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-help-circle")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createTextVNode(" " + toDisplayString(pi + 1) + ". " + toDisplayString(preg.pregunta), 1)
                                                            ]),
                                                            createVNode(VRadioGroup, {
                                                              modelValue: respuestasQuiz.value[pi],
                                                              "onUpdate:modelValue": ($event) => respuestasQuiz.value[pi] = $event,
                                                              disabled: quizEnviado.value,
                                                              class: "mt-0"
                                                            }, {
                                                              default: withCtx(() => [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(preg.opciones, (op, oi) => {
                                                                  return openBlock(), createBlock(VRadio, {
                                                                    key: oi,
                                                                    label: op,
                                                                    value: oi,
                                                                    color: quizEnviado.value ? oi === preg.correcta ? "green-accent-3" : respuestasQuiz.value[pi] === oi ? "red-accent-2" : "grey" : "gold",
                                                                    class: "quiz-radio mb-1"
                                                                  }, null, 8, ["label", "value", "color"]);
                                                                }), 128))
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                            createVNode(VExpandTransition, null, {
                                                              default: withCtx(() => [
                                                                quizEnviado.value ? (openBlock(), createBlock(VAlert, {
                                                                  key: 0,
                                                                  variant: "tonal",
                                                                  color: respuestasQuiz.value[pi] === preg.correcta ? "green" : "red",
                                                                  icon: respuestasQuiz.value[pi] === preg.correcta ? "mdi-check-circle" : "mdi-close-circle",
                                                                  density: "compact",
                                                                  class: "mt-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    respuestasQuiz.value[pi] === preg.correcta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(preg.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                      createTextVNode("Incorrecto. La respuesta correcta es: "),
                                                                      createVNode("strong", null, toDisplayString(preg.opciones[preg.correcta]), 1),
                                                                      createTextVNode(". " + toDisplayString(preg.explicacion), 1)
                                                                    ]))
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]);
                                                        }), 128)),
                                                        !quizEnviado.value ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "d-flex justify-end mt-2"
                                                        }, [
                                                          createVNode(VBtn, {
                                                            color: "gold-btn",
                                                            class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                            disabled: respuestasQuiz.value.filter((r) => r !== null).length < act.preguntas.length,
                                                            onClick: ($event) => enviarQuiz(),
                                                            "append-icon": "mdi-send"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Enviar respuestas")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["disabled", "onClick"])
                                                        ])) : createCommentVNode("", true),
                                                        quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock(VAlert, {
                                                          key: 1,
                                                          color: "gold",
                                                          variant: "tonal",
                                                          icon: "mdi-trophy",
                                                          class: "mt-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Obtuviste "),
                                                            createVNode("strong", null, toDisplayString(puntajeQuiz.value), 1),
                                                            createTextVNode(" de "),
                                                            createVNode("strong", null, toDisplayString(act.preguntas.length), 1),
                                                            createTextVNode(" respuestas correctas. "),
                                                            puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock("span", { key: 0 }, " ¡Muy bien! Puedes continuar.")) : (openBlock(), createBlock("span", { key: 1 }, " Intenta repasar los temas e inténtalo de nuevo."))
                                                          ]),
                                                          _: 2
                                                        }, 1024)) : createCommentVNode("", true),
                                                        quizEnviado.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                          key: 2,
                                                          class: "d-flex justify-end mt-4 gap-3"
                                                        }, [
                                                          createVNode(VBtn, {
                                                            variant: "outlined",
                                                            color: "white",
                                                            class: "rounded-pill",
                                                            onClick: reiniciarQuiz,
                                                            "prepend-icon": "mdi-refresh"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Reintentar")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          puntajeQuiz.value >= Math.ceil(act.preguntas.length * 0.6) ? (openBlock(), createBlock(VBtn, {
                                                            key: 0,
                                                            color: "green-accent-4",
                                                            variant: "flat",
                                                            class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                            onClick: ($event) => completarActividad(idx),
                                                            "append-icon": "mdi-arrow-right"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Siguiente Actividad")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["onClick"])) : createCommentVNode("", true)
                                                        ])) : createCommentVNode("", true)
                                                      ])) : idx === 1 ? (openBlock(), createBlock("div", {
                                                        key: 1,
                                                        class: "pa-6"
                                                      }, [
                                                        createVNode("p", {
                                                          class: "text-body-2 text-grey-lighten-2 mb-6",
                                                          style: { "line-height": "1.8" }
                                                        }, toDisplayString(act.descripcion), 1),
                                                        (openBlock(true), createBlock(Fragment, null, renderList(act.casos, (caso, ci) => {
                                                          return openBlock(), createBlock("div", {
                                                            key: ci,
                                                            class: "caso-card mb-6 pa-4 rounded-lg",
                                                            style: { "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" }
                                                          }, [
                                                            createVNode("div", { class: "d-flex align-start mb-3" }, [
                                                              createVNode(VIcon, {
                                                                color: "amber-lighten-2",
                                                                size: "20",
                                                                class: "mr-2 mt-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-file-document-edit")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("p", { class: "text-body-1 text-white font-weight-bold" }, "Caso " + toDisplayString(ci + 1) + ": " + toDisplayString(caso.titulo), 1)
                                                            ]),
                                                            createVNode("p", {
                                                              class: "text-body-2 text-grey-lighten-2 mb-4",
                                                              style: { "line-height": "1.8" }
                                                            }, toDisplayString(caso.descripcion), 1),
                                                            createVNode(VSelect, {
                                                              modelValue: respuestasCasos.value[ci],
                                                              "onUpdate:modelValue": ($event) => respuestasCasos.value[ci] = $event,
                                                              items: opcionesDerechos,
                                                              label: "¿Qué derecho fundamental fue vulnerado?",
                                                              variant: "outlined",
                                                              color: "gold",
                                                              theme: "dark",
                                                              disabled: casosEnviados.value,
                                                              density: "comfortable",
                                                              class: "caso-select"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                                            createVNode(VExpandTransition, null, {
                                                              default: withCtx(() => [
                                                                casosEnviados.value ? (openBlock(), createBlock(VAlert, {
                                                                  key: 0,
                                                                  variant: "tonal",
                                                                  color: respuestasCasos.value[ci] === caso.respuesta ? "green" : "orange",
                                                                  icon: respuestasCasos.value[ci] === caso.respuesta ? "mdi-check-circle" : "mdi-alert-circle",
                                                                  density: "compact",
                                                                  class: "mt-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    respuestasCasos.value[ci] === caso.respuesta ? (openBlock(), createBlock("span", { key: 0 }, "¡Correcto! " + toDisplayString(caso.explicacion), 1)) : (openBlock(), createBlock("span", { key: 1 }, [
                                                                      createTextVNode("La respuesta esperada era: "),
                                                                      createVNode("strong", null, toDisplayString(caso.respuesta), 1),
                                                                      createTextVNode(". " + toDisplayString(caso.explicacion), 1)
                                                                    ]))
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color", "icon"])) : createCommentVNode("", true)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]);
                                                        }), 128)),
                                                        !casosEnviados.value ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "d-flex justify-end"
                                                        }, [
                                                          createVNode(VBtn, {
                                                            color: "gold-btn",
                                                            class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                            disabled: respuestasCasos.value.filter((r) => r).length < act.casos.length,
                                                            onClick: ($event) => enviarCasos(),
                                                            "append-icon": "mdi-send"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Enviar análisis")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["disabled", "onClick"])
                                                        ])) : createCommentVNode("", true),
                                                        casosEnviados.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                          key: 1,
                                                          class: "d-flex justify-end mt-4"
                                                        }, [
                                                          createVNode(VBtn, {
                                                            color: "green-accent-4",
                                                            variant: "flat",
                                                            class: "rounded-pill font-weight-bold text-black hover-btn pulse-animation",
                                                            onClick: ($event) => completarActividad(idx),
                                                            "append-icon": "mdi-arrow-right"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Siguiente Actividad")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["onClick"])
                                                        ])) : createCommentVNode("", true)
                                                      ])) : idx === 2 ? (openBlock(), createBlock("div", {
                                                        key: 2,
                                                        class: "pa-6"
                                                      }, [
                                                        createVNode("p", {
                                                          class: "text-body-2 text-grey-lighten-2 mb-6",
                                                          style: { "line-height": "1.8" }
                                                        }, toDisplayString(act.descripcion), 1),
                                                        (openBlock(true), createBlock(Fragment, null, renderList(act.reflexiones, (preg, ri) => {
                                                          return openBlock(), createBlock("div", {
                                                            key: ri,
                                                            class: "mb-6"
                                                          }, [
                                                            createVNode("p", { class: "text-body-1 text-white font-weight-bold mb-3" }, [
                                                              createVNode(VIcon, {
                                                                color: "gold",
                                                                size: "16",
                                                                class: "mr-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-pencil")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createTextVNode(" " + toDisplayString(ri + 1) + ". " + toDisplayString(preg), 1)
                                                            ]),
                                                            createVNode(VTextarea, {
                                                              modelValue: reflexiones.value[ri],
                                                              "onUpdate:modelValue": ($event) => reflexiones.value[ri] = $event,
                                                              variant: "outlined",
                                                              color: "gold",
                                                              theme: "dark",
                                                              rows: "3",
                                                              "auto-grow": "",
                                                              disabled: reflexionEnviada.value,
                                                              placeholder: "Escribe tu reflexión aquí...",
                                                              class: "reflexion-textarea"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                                          ]);
                                                        }), 128)),
                                                        !reflexionEnviada.value ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "d-flex justify-end"
                                                        }, [
                                                          createVNode(VBtn, {
                                                            color: "gold-btn",
                                                            class: "rounded-pill font-weight-bold px-8 hover-btn",
                                                            disabled: reflexiones.value.filter((r) => r && r.trim().length >= 10).length < act.reflexiones.length,
                                                            onClick: ($event) => enviarReflexion(),
                                                            "append-icon": "mdi-check"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Enviar reflexión")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["disabled", "onClick"])
                                                        ])) : createCommentVNode("", true),
                                                        reflexionEnviada.value && idx === unref(progresoActividades) ? (openBlock(), createBlock("div", { key: 1 }, [
                                                          createVNode(VAlert, {
                                                            color: "green",
                                                            variant: "tonal",
                                                            icon: "mdi-star",
                                                            class: "mt-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" ¡Excelente reflexión! Has completado todas las actividades del OVA. ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode("div", { class: "d-flex justify-center mt-6" }, [
                                                            createVNode(VBtn, {
                                                              color: "gold-btn",
                                                              size: "large",
                                                              class: "rounded-pill font-weight-bold bounce-animation px-10",
                                                              onClick: ($event) => completarActividad(idx),
                                                              "append-icon": "mdi-trophy"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("¡Finalizar OVA!")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["onClick"])
                                                          ])
                                                        ])) : createCommentVNode("", true)
                                                      ])) : createCommentVNode("", true),
                                                      idx < unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                        key: 3,
                                                        class: "pa-4 d-flex align-center justify-center",
                                                        style: { "background": "rgba(105,240,174,0.05)" }
                                                      }, [
                                                        createVNode(VIcon, {
                                                          color: "green-accent-3",
                                                          size: "20",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-check-all")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", { class: "text-green-accent-3 font-weight-bold" }, "Actividad completada")
                                                      ])) : createCommentVNode("", true)
                                                    ])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                idx > unref(progresoActividades) ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "pa-4 d-flex align-center justify-center locked-msg"
                                                }, [
                                                  createVNode(VIcon, {
                                                    color: "grey",
                                                    size: "18",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-lock")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", { class: "text-grey text-caption" }, "Completa la actividad anterior para desbloquear")
                                                ])) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "style"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VExpandTransition, null, {
                                    default: withCtx(() => [
                                      unref(progresoActividades) >= listaActividades.length ? (openBlock(), createBlock(VCard, {
                                        key: 0,
                                        class: "rounded-xl glass-card mt-6 pa-8 text-center completion-banner",
                                        elevation: "0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "gold",
                                            size: "72",
                                            class: "mb-4 pulse-icon"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-trophy")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("h2", { class: "font-serif text-h4 text-gold mb-3 text-glow" }, "¡FELICITACIONES!"),
                                          createVNode("p", { class: "text-body-1 text-grey-lighten-2 mb-6" }, "Has completado todas las actividades del OVA de Derechos Fundamentales. ¡Excelente trabajo!"),
                                          createVNode(VBtn, {
                                            to: "/",
                                            color: "gold-btn",
                                            size: "large",
                                            class: "rounded-pill font-weight-bold px-10",
                                            "prepend-icon": "mdi-home"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Volver al Inicio")
                                            ]),
                                            _: 1
                                          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/introduccion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduccion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f0a1638e"]]);

export { introduccion as default };
//# sourceMappingURL=introduccion-BsrirB0U.mjs.map
