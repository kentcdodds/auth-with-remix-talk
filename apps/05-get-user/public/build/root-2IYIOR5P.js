import {
  Links,
  LiveReload,
  Outlet,
  React,
  __commonJS,
  init_react
} from "/build/_shared/chunk-ZH4TLLH6.js";

// remix.config.js
var require_remix_config = __commonJS({
  "remix.config.js"(exports, module) {
    init_react();
    module.exports = {
      appDirectory: "app",
      browserBuildDirectory: "public/build",
      publicPath: "/build/",
      serverBuildDirectory: "build",
      devServerPort: 7805
    };
  }
});

// browser-route-module:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/05-get-user/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-YOJIA7J5.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-DRHJR3JT.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-NKTQAWDZ.css";

// app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), true ? /* @__PURE__ */ React.createElement(LiveReload, {
    port: require_remix_config().devServerPort
  }) : null));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-2IYIOR5P.js.map
