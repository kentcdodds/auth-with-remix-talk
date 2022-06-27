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

// browser-route-module:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/05-get-user/app/routes/jokes/$jokeId.tsx?browser
init_react();

// app/routes/jokes/$jokeId.tsx
init_react();
var import_db = __toESM(require_db());
function JokeRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.joke.name, " Permalink"));
}
export {
  JokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-6BB272SL.js.map
