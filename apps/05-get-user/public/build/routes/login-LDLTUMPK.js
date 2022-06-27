import {
  require_session
} from "/build/_shared/chunk-H6PVDRPU.js";
import {
  Link,
  React,
  __toESM,
  init_react,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-ZH4TLLH6.js";

// browser-route-module:/Users/kentcdodds/Desktop/auth-with-remix-talk/apps/05-get-user/app/routes/login.tsx?browser
init_react();

// app/routes/login.tsx
init_react();
var import_session = __toESM(require_session());

// app/styles/login.css
var login_default = "/build/_assets/login-TB27ASMI.css";

// app/routes/login.tsx
var links = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
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
    value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Login or Register?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) || ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.loginType) === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username",
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.username,
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.username),
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.username) ? "username-error" : void 0
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.username) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "username-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.username) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    defaultValue: (_i = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _i.password,
    type: "password",
    "aria-invalid": Boolean((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.password) || void 0,
    "aria-describedby": ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password) ? "password-error" : void 0
  }), ((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) ? /* @__PURE__ */ React.createElement("p", {
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
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/jokes"
  }, "Jokes")))));
}
export {
  Login as default,
  links
};
//# sourceMappingURL=/build/routes/login-LDLTUMPK.js.map
