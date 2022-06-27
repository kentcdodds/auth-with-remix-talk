var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// ../../node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-YOJIA7J5.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-DRHJR3JT.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-NKTQAWDZ.css";

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/root.tsx
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
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), false ? /* @__PURE__ */ React.createElement(LiveReload, {
    port: null.devServerPort
  }) : null));
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-LQJHUV2J.css";

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/index.tsx
var links2 = () => {
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
  }, /* @__PURE__ */ React.createElement("h1", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "jokes"
  }, "Read Jokes"))))));
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader
});
var import_react4 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client");
var db;
if (true) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-MGLBGUHK.css";

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/jokes.tsx
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: jokes_default
    }
  ];
};
var loader = async () => {
  const data = {
    jokeListItems: await db.joke.findMany({
      take: 5,
      select: { id: true, name: true },
      orderBy: { createdAt: "desc" }
    })
  };
  return data;
};
function JokesRoute() {
  const data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "jokes-list"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.jokeListItems.map((joke) => /* @__PURE__ */ React.createElement("li", {
    key: joke.id
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: joke.id
  }, joke.name)))), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "new",
    className: "button"
  }, "Add your own")), /* @__PURE__ */ React.createElement("div", {
    className: "jokes-outlet"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)))));
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => JokeRoute,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");
var loader2 = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Error("Joke not found");
  const data = { joke };
  return data;
};
function JokeRoute() {
  const data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "."
  }, data.joke.name, " Permalink"));
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute,
  loader: () => loader3
});
var import_react6 = require("@remix-run/react");
var loader3 = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber
  });
  const data = { randomJoke };
  return data;
};
function JokesIndexRoute() {
  const data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => NewJokeRoute
});
var import_node2 = require("@remix-run/node");
var import_react7 = require("@remix-run/react");

// app/utils/session.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_node = require("@remix-run/node");
async function login({ username, password }) {
  const user = await db.user.findFirst({ where: { username } });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcryptjs.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user;
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "RJ_SESSION",
    secrets: [sessionSecret],
    secure: true,
    httpOnly: true,
    path: "/",
    maxAge: 1e3 * 60 * 60 * 24 * 30
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function requireUserId(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    throw (0, import_node.redirect)("/login");
  }
  return userId;
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/jokes/new.tsx
function validateJokeContent(content) {
  if (content.length < 10) {
    return `That joke is too short`;
  }
}
function validateJokeName(name) {
  if (name.length < 2) {
    return `That joke's name is too short`;
  }
}
var badRequest = (data) => (0, import_node2.json)(data, { status: 400 });
var action = async ({ request }) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");
  if (typeof name !== "string" || typeof content !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content)
  };
  const fields = { name, content };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  const joke = await db.joke.create({
    data: __spreadProps(__spreadValues({}, fields), { jokesterId: userId })
  });
  return (0, import_node2.redirect)(`/jokes/${joke.id}`);
};
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = (0, import_react7.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    name: "name",
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
  })), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "name-error"
  }, actionData.fieldErrors.name) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content:", " ", /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
    name: "content",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
  })), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  links: () => links4
});
var import_node3 = require("@remix-run/node");
var import_react8 = require("@remix-run/react");

// app/styles/login.css
var login_default = "/build/_assets/login-TB27ASMI.css";

// route:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/99-finished/app/routes/login.tsx
var links4 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
var badRequest2 = (data) => (0, import_node3.json)(data, { status: 400 });
var action2 = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/jokes";
  if (typeof loginType !== "string" || typeof username !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return badRequest2({
      formError: `Form not submitted correctly.`
    });
  }
  const fields = { loginType, username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest2({ fieldErrors, fields });
  switch (loginType) {
    case "login": {
      const user = await login({ username, password });
      console.log({ user });
      if (!user) {
        return badRequest2({ formError: `Invalid username or password` });
      }
      return createUserSession(user.id, redirectTo);
    }
    case "register": {
      const userExists = await db.user.findFirst({
        where: { username }
      });
      if (userExists) {
        return badRequest2({
          fields,
          formError: `User with username ${username} already exists`
        });
      }
      return badRequest2({
        fields,
        formError: "Not implemented"
      });
    }
    default: {
      return badRequest2({
        fields,
        formError: `Login type invalid`
      });
    }
  }
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const actionData = (0, import_react8.useActionData)();
  const [searchParams] = (0, import_react8.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Login or Register?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username",
    defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username,
    "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username),
    "aria-describedby": ((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.username) ? "username-error" : void 0
  }), ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.username) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "username-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.username) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.password,
    type: "password",
    "aria-invalid": Boolean((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password) || void 0,
    "aria-describedby": ((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.password) ? "password-error" : void 0
  }), ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert"
  }, actionData == null ? void 0 : actionData.formError) : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))), /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/jokes"
  }, "Jokes")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "e0230a71", "entry": { "module": "/build/entry.client-A7MKWAL7.js", "imports": ["/build/_shared/chunk-6NMSYO2M.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-TGHLRCW2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-3YJKCTTB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes": { "id": "routes/jokes", "parentId": "root", "path": "jokes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes-YAAS5Q34.js", "imports": ["/build/_shared/chunk-XF54ETW2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/$jokeId": { "id": "routes/jokes/$jokeId", "parentId": "routes/jokes", "path": ":jokeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/$jokeId-BWQRRGV4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/index": { "id": "routes/jokes/index", "parentId": "routes/jokes", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/jokes/index-ZJJ55LPX.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/new": { "id": "routes/jokes/new", "parentId": "routes/jokes", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/new-KYJW2DB4.js", "imports": ["/build/_shared/chunk-S2MFY47R.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-HIVR7LDZ.js", "imports": ["/build/_shared/chunk-S2MFY47R.js", "/build/_shared/chunk-XF54ETW2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E0230A71.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
