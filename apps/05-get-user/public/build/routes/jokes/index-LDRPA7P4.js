import {
  require_db
} from "/build/_shared/chunk-KPULPI6M.js";
import {
  Link,
  React,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-ZH4TLLH6.js";

// browser-route-module:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/03-login/app/routes/jokes/index.tsx?browser
init_react();

// app/routes/jokes/index.tsx
init_react();
var import_db = __toESM(require_db());
function JokesIndexRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}
export {
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-LDRPA7P4.js.map
