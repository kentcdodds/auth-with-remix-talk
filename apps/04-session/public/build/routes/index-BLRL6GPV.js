import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-ZH4TLLH6.js";

// browser-route-module:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/03-login/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/styles/index.css
var styles_default = "/build/_assets/index-LQJHUV2J.css";

// app/routes/index.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "jokes"
  }, "Read Jokes"))))));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-BLRL6GPV.js.map
