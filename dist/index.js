function ze(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mt } = Object.prototype, { getPrototypeOf: Se } = Object, { iterator: re, toStringTag: $e } = Symbol, se = /* @__PURE__ */ ((e) => (t) => {
  const n = mt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => se(t) === e), oe = (e) => (t) => typeof t === e, { isArray: j } = Array, B = oe("undefined");
function J(e) {
  return e !== null && !B(e) && e.constructor !== null && !B(e.constructor) && E(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Je = U("ArrayBuffer");
function gt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Je(e.buffer), t;
}
const ht = oe("string"), E = oe("function"), Ve = oe("number"), V = (e) => e !== null && typeof e == "object", St = (e) => e === !0 || e === !1, Y = (e) => {
  if (se(e) !== "object")
    return !1;
  const t = Se(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !($e in e) && !(re in e);
}, wt = (e) => {
  if (!V(e) || J(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, yt = U("Date"), bt = U("File"), _t = U("Blob"), Pt = U("FileList"), Rt = (e) => V(e) && E(e.pipe), Et = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || E(e.append) && ((t = se(e)) === "formdata" || // detect form-data instance
  t === "object" && E(e.toString) && e.toString() === "[object FormData]"));
}, Ot = U("URLSearchParams"), [At, Tt, Ct, Ut] = ["ReadableStream", "Request", "Response", "Headers"].map(U), Lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function W(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), j(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (J(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let i;
    for (r = 0; r < o; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function We(e, t) {
  if (J(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const I = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ke = (e) => !B(e) && e !== I;
function fe() {
  const { caseless: e, skipUndefined: t } = Ke(this) && this || {}, n = {}, r = (s, a) => {
    const o = e && We(n, a) || a;
    Y(n[o]) && Y(s) ? n[o] = fe(n[o], s) : Y(s) ? n[o] = fe({}, s) : j(s) ? n[o] = s.slice() : (!t || !B(s)) && (n[o] = s);
  };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && W(arguments[s], r);
  return n;
}
const xt = (e, t, n, { allOwnKeys: r } = {}) => (W(t, (s, a) => {
  n && E(s) ? e[a] = ze(s, n) : e[a] = s;
}, { allOwnKeys: r }), e), Nt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ft = (e, t, n, r) => {
  let s, a, o;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!r || r(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = n !== !1 && Se(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Mt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, It = (e) => {
  if (!e) return null;
  if (j(e)) return e;
  let t = e.length;
  if (!Ve(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Dt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Se(Uint8Array)), qt = (e, t) => {
  const r = (e && e[re]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, kt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Bt = U("HTMLFormElement"), jt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Te = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ht = U("RegExp"), Xe = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  W(n, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (r[a] = o || s);
  }), Object.defineProperties(e, r);
}, zt = (e) => {
  Xe(e, (t, n) => {
    if (E(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (E(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, $t = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return j(e) ? r(e) : r(String(e).split(t)), n;
}, Jt = () => {
}, Vt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Wt(e) {
  return !!(e && E(e.append) && e[$e] === "FormData" && e[re]);
}
const Kt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (V(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (J(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const a = j(r) ? [] : {};
        return W(r, (o, i) => {
          const p = n(o, s + 1);
          !B(p) && (a[i] = p);
        }), t[s] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, Xt = U("AsyncFunction"), Gt = (e) => e && (V(e) || E(e)) && E(e.then) && E(e.catch), Ge = ((e, t) => e ? setImmediate : t ? ((n, r) => (I.addEventListener("message", ({ source: s, data: a }) => {
  s === I && a === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), I.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  E(I.postMessage)
), Qt = typeof queueMicrotask < "u" ? queueMicrotask.bind(I) : typeof process < "u" && process.nextTick || Ge, Zt = (e) => e != null && E(e[re]), c = {
  isArray: j,
  isArrayBuffer: Je,
  isBuffer: J,
  isFormData: Et,
  isArrayBufferView: gt,
  isString: ht,
  isNumber: Ve,
  isBoolean: St,
  isObject: V,
  isPlainObject: Y,
  isEmptyObject: wt,
  isReadableStream: At,
  isRequest: Tt,
  isResponse: Ct,
  isHeaders: Ut,
  isUndefined: B,
  isDate: yt,
  isFile: bt,
  isBlob: _t,
  isRegExp: Ht,
  isFunction: E,
  isStream: Rt,
  isURLSearchParams: Ot,
  isTypedArray: Dt,
  isFileList: Pt,
  forEach: W,
  merge: fe,
  extend: xt,
  trim: Lt,
  stripBOM: Nt,
  inherits: vt,
  toFlatObject: Ft,
  kindOf: se,
  kindOfTest: U,
  endsWith: Mt,
  toArray: It,
  forEachEntry: qt,
  matchAll: kt,
  isHTMLForm: Bt,
  hasOwnProperty: Te,
  hasOwnProp: Te,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xe,
  freezeMethods: zt,
  toObjectSet: $t,
  toCamelCase: jt,
  noop: Jt,
  toFiniteNumber: Vt,
  findKey: We,
  global: I,
  isContextDefined: Ke,
  isSpecCompliantForm: Wt,
  toJSONObject: Kt,
  isAsyncFn: Xt,
  isThenable: Gt,
  setImmediate: Ge,
  asap: Qt,
  isIterable: Zt
};
function S(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(S, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Qe = S.prototype, Ze = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ze[e] = { value: e };
});
Object.defineProperties(S, Ze);
Object.defineProperty(Qe, "isAxiosError", { value: !0 });
S.from = (e, t, n, r, s, a) => {
  const o = Object.create(Qe);
  c.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const i = e && e.message ? e.message : "Error", p = t == null && e ? e.code : t;
  return S.call(o, i, p, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", a && Object.assign(o, a), o;
};
const Yt = null;
function me(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Ye(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ce(e, t, n) {
  return e ? e.concat(t).map(function(s, a) {
    return s = Ye(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function en(e) {
  return c.isArray(e) && !e.some(me);
}
const tn = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ae(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !c.isUndefined(m[h]);
  });
  const r = n.metaTokens, s = n.visitor || u, a = n.dots, o = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (c.isDate(d))
      return d.toISOString();
    if (c.isBoolean(d))
      return d.toString();
    if (!p && c.isBlob(d))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(d) || c.isTypedArray(d) ? p && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, h, m) {
    let b = d;
    if (d && !m && typeof d == "object") {
      if (c.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && en(d) || (c.isFileList(d) || c.endsWith(h, "[]")) && (b = c.toArray(d)))
        return h = Ye(h), b.forEach(function(_, R) {
          !(c.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ce([h], R, a) : o === null ? h : h + "[]",
            l(_)
          );
        }), !1;
    }
    return me(d) ? !0 : (t.append(Ce(m, h, a), l(d)), !1);
  }
  const g = [], w = Object.assign(tn, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: me
  });
  function y(d, h) {
    if (!c.isUndefined(d)) {
      if (g.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      g.push(d), c.forEach(d, function(b, A) {
        (!(c.isUndefined(b) || b === null) && s.call(
          t,
          b,
          c.isString(A) ? A.trim() : A,
          h,
          w
        )) === !0 && y(b, h ? h.concat(A) : [A]);
      }), g.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Ue(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function we(e, t) {
  this._pairs = [], e && ae(e, this, t);
}
const et = we.prototype;
et.append = function(t, n) {
  this._pairs.push([t, n]);
};
et.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ue);
  } : Ue;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function nn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function tt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || nn;
  c.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let a;
  if (s ? a = s(t, n) : a = c.isURLSearchParams(t) ? t.toString() : new we(t, n).toString(r), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Le {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const nt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rn = typeof URLSearchParams < "u" ? URLSearchParams : we, sn = typeof FormData < "u" ? FormData : null, on = typeof Blob < "u" ? Blob : null, an = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rn,
    FormData: sn,
    Blob: on
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ye = typeof window < "u" && typeof document < "u", ge = typeof navigator == "object" && navigator || void 0, cn = ye && (!ge || ["ReactNative", "NativeScript", "NS"].indexOf(ge.product) < 0), un = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ln = ye && window.location.href || "http://localhost", dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ye,
  hasStandardBrowserEnv: cn,
  hasStandardBrowserWebWorkerEnv: un,
  navigator: ge,
  origin: ln
}, Symbol.toStringTag, { value: "Module" })), P = {
  ...dn,
  ...an
};
function pn(e, t) {
  return ae(e, new P.classes.URLSearchParams(), {
    visitor: function(n, r, s, a) {
      return P.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function fn(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function rt(e) {
  function t(n, r, s, a) {
    let o = n[a++];
    if (o === "__proto__") return !0;
    const i = Number.isFinite(+o), p = a >= n.length;
    return o = !o && c.isArray(s) ? s.length : o, p ? (c.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !i) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []), t(n, r, s[o], a) && c.isArray(s[o]) && (s[o] = mn(s[o])), !i);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, s) => {
      t(fn(r), s, n, 0);
    }), n;
  }
  return null;
}
function gn(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const K = {
  transitional: nt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = c.isObject(t);
    if (a && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s ? JSON.stringify(rt(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return pn(t, this.formSerializer).toString();
      if ((i = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return ae(
          i ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), gn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || K.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (i) {
        if (o)
          throw i.name === "SyntaxError" ? S.from(i, S.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: P.classes.FormData,
    Blob: P.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  K.headers[e] = {};
});
const hn = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Sn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && hn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, xe = /* @__PURE__ */ Symbol("internals");
function $(e) {
  return e && String(e).trim().toLowerCase();
}
function ee(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ee) : String(e);
}
function wn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const yn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function le(e, t, n, r, s) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function bn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _n(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, a, o) {
        return this[r].call(this, t, s, a, o);
      },
      configurable: !0
    });
  });
}
let O = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function a(i, p, l) {
      const u = $(p);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const g = c.findKey(s, u);
      (!g || s[g] === void 0 || l === !0 || l === void 0 && s[g] !== !1) && (s[g || p] = ee(i));
    }
    const o = (i, p) => c.forEach(i, (l, u) => a(l, u, p));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (c.isString(t) && (t = t.trim()) && !yn(t))
      o(Sn(t), n);
    else if (c.isObject(t) && c.isIterable(t)) {
      let i = {}, p, l;
      for (const u of t) {
        if (!c.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = u[0]] = (p = i[l]) ? c.isArray(p) ? [...p, u[1]] : [p, u[1]] : u[1];
      }
      o(i, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = $(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return wn(s);
        if (c.isFunction(n))
          return n.call(this, s, r);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = $(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || le(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(o) {
      if (o = $(o), o) {
        const i = c.findKey(r, o);
        i && (!n || le(r, r[i], i, n)) && (delete r[i], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || le(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (s, a) => {
      const o = c.findKey(r, a);
      if (o) {
        n[o] = ee(s), delete n[a];
        return;
      }
      const i = t ? bn(a) : String(a).trim();
      i !== a && delete n[a], n[i] = ee(s), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && c.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[xe] = this[xe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const i = $(o);
      r[i] || (_n(s, o), r[i] = !0);
    }
    return c.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
O.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(O.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(O);
function de(e, t) {
  const n = this || K, r = t || n, s = O.from(r.headers);
  let a = r.data;
  return c.forEach(e, function(i) {
    a = i.call(n, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function st(e) {
  return !!(e && e.__CANCEL__);
}
function H(e, t, n) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(H, S, {
  __CANCEL__: !0
});
function ot(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Pn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Rn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const l = Date.now(), u = r[a];
    o || (o = l), n[s] = p, r[s] = l;
    let g = a, w = 0;
    for (; g !== s; )
      w += n[g++], g = g % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), l - o < t)
      return;
    const y = u && l - u;
    return y ? Math.round(w * 1e3 / y) : void 0;
  };
}
function En(e, t) {
  let n = 0, r = 1e3 / t, s, a;
  const o = (l, u = Date.now()) => {
    n = u, s = null, a && (clearTimeout(a), a = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), g = u - n;
    g >= r ? o(l, u) : (s = l, a || (a = setTimeout(() => {
      a = null, o(s);
    }, r - g)));
  }, () => s && o(s)];
}
const ne = (e, t, n = 3) => {
  let r = 0;
  const s = Rn(50, 250);
  return En((a) => {
    const o = a.loaded, i = a.lengthComputable ? a.total : void 0, p = o - r, l = s(p), u = o <= i;
    r = o;
    const g = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: p,
      rate: l || void 0,
      estimated: l && i && u ? (i - o) / l : void 0,
      event: a,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(g);
  }, n);
}, Ne = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, ve = (e) => (...t) => c.asap(() => e(...t)), On = P.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, P.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(P.origin),
  P.navigator && /(msie|trident)/i.test(P.navigator.userAgent)
) : () => !0, An = P.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, a, o) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      c.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), c.isString(r) && i.push(`path=${r}`), c.isString(s) && i.push(`domain=${s}`), a === !0 && i.push("secure"), c.isString(o) && i.push(`SameSite=${o}`), document.cookie = i.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Tn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Cn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function at(e, t, n) {
  let r = !Tn(t);
  return e && (r || n == !1) ? Cn(e, t) : t;
}
const Fe = (e) => e instanceof O ? { ...e } : e;
function q(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, g, w) {
    return c.isPlainObject(l) && c.isPlainObject(u) ? c.merge.call({ caseless: w }, l, u) : c.isPlainObject(u) ? c.merge({}, u) : c.isArray(u) ? u.slice() : u;
  }
  function s(l, u, g, w) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l))
        return r(void 0, l, g, w);
    } else return r(l, u, g, w);
  }
  function a(l, u) {
    if (!c.isUndefined(u))
      return r(void 0, u);
  }
  function o(l, u) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function i(l, u, g) {
    if (g in t)
      return r(l, u);
    if (g in e)
      return r(void 0, l);
  }
  const p = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: i,
    headers: (l, u, g) => s(Fe(l), Fe(u), g, !0)
  };
  return c.forEach(Object.keys({ ...e, ...t }), function(u) {
    const g = p[u] || s, w = g(e[u], t[u], u);
    c.isUndefined(w) && g !== i || (n[u] = w);
  }), n;
}
const it = (e) => {
  const t = q({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: a, headers: o, auth: i } = t;
  if (t.headers = o = O.from(o), t.url = tt(at(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && o.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  ), c.isFormData(n)) {
    if (P.hasStandardBrowserEnv || P.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (c.isFunction(n.getHeaders)) {
      const p = n.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(p).forEach(([u, g]) => {
        l.includes(u.toLowerCase()) && o.set(u, g);
      });
    }
  }
  if (P.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(t)), r || r !== !1 && On(t.url))) {
    const p = s && a && An.read(a);
    p && o.set(s, p);
  }
  return t;
}, Un = typeof XMLHttpRequest < "u", Ln = Un && function(e) {
  return new Promise(function(n, r) {
    const s = it(e);
    let a = s.data;
    const o = O.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: p, onDownloadProgress: l } = s, u, g, w, y, d;
    function h() {
      y && y(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function b() {
      if (!m)
        return;
      const _ = O.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), C = {
        data: !i || i === "text" || i === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: _,
        config: e,
        request: m
      };
      ot(function(T) {
        n(T), h();
      }, function(T) {
        r(T), h();
      }, C), m = null;
    }
    "onloadend" in m ? m.onloadend = b : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, m.onabort = function() {
      m && (r(new S("Request aborted", S.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(R) {
      const C = R && R.message ? R.message : "Network Error", F = new S(C, S.ERR_NETWORK, e, m);
      F.event = R || null, r(F), m = null;
    }, m.ontimeout = function() {
      let R = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const C = s.transitional || nt;
      s.timeoutErrorMessage && (R = s.timeoutErrorMessage), r(new S(
        R,
        C.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        m
      )), m = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in m && c.forEach(o.toJSON(), function(R, C) {
      m.setRequestHeader(C, R);
    }), c.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), i && i !== "json" && (m.responseType = s.responseType), l && ([w, d] = ne(l, !0), m.addEventListener("progress", w)), p && m.upload && ([g, y] = ne(p), m.upload.addEventListener("progress", g), m.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (u = (_) => {
      m && (r(!_ || _.type ? new H(null, e, m) : _), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const A = Pn(s.url);
    if (A && P.protocols.indexOf(A) === -1) {
      r(new S("Unsupported protocol " + A + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(a || null);
  });
}, xn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const a = function(l) {
      if (!s) {
        s = !0, i();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof S ? u : new H(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, a(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(a) : l.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", a));
    const { signal: p } = r;
    return p.unsubscribe = () => c.asap(i), p;
  }
}, Nn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, vn = async function* (e, t) {
  for await (const n of Fn(e))
    yield* Nn(n, t);
}, Fn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Me = (e, t, n, r) => {
  const s = vn(e, t);
  let a = 0, o, i = (p) => {
    o || (o = !0, r && r(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: l, value: u } = await s.next();
        if (l) {
          i(), p.close();
          return;
        }
        let g = u.byteLength;
        if (n) {
          let w = a += g;
          n(w);
        }
        p.enqueue(new Uint8Array(u));
      } catch (l) {
        throw i(l), l;
      }
    },
    cancel(p) {
      return i(p), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ie = 64 * 1024, { isFunction: Z } = c, Mn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(c.global), {
  ReadableStream: De,
  TextEncoder: qe
} = c.global, ke = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, In = (e) => {
  e = c.merge.call({
    skipUndefined: !0
  }, Mn, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? Z(t) : typeof fetch == "function", a = Z(n), o = Z(r);
  if (!s)
    return !1;
  const i = s && Z(De), p = s && (typeof qe == "function" ? /* @__PURE__ */ ((d) => (h) => d.encode(h))(new qe()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), l = a && i && ke(() => {
    let d = !1;
    const h = new n(P.origin, {
      body: new De(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !h;
  }), u = o && i && ke(() => c.isReadableStream(new r("").body)), g = {
    stream: u && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !g[d] && (g[d] = (h, m) => {
      let b = h && h[d];
      if (b)
        return b.call(h);
      throw new S(`Response type '${d}' is not supported`, S.ERR_NOT_SUPPORT, m);
    });
  });
  const w = async (d) => {
    if (d == null)
      return 0;
    if (c.isBlob(d))
      return d.size;
    if (c.isSpecCompliantForm(d))
      return (await new n(P.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(d) || c.isArrayBuffer(d))
      return d.byteLength;
    if (c.isURLSearchParams(d) && (d = d + ""), c.isString(d))
      return (await p(d)).byteLength;
  }, y = async (d, h) => {
    const m = c.toFiniteNumber(d.getContentLength());
    return m ?? w(h);
  };
  return async (d) => {
    let {
      url: h,
      method: m,
      data: b,
      signal: A,
      cancelToken: _,
      timeout: R,
      onDownloadProgress: C,
      onUploadProgress: F,
      responseType: T,
      headers: ce,
      withCredentials: X = "same-origin",
      fetchOptions: _e
    } = it(d), Pe = t || fetch;
    T = T ? (T + "").toLowerCase() : "text";
    let G = xn([A, _ && _.toAbortSignal()], R), z = null;
    const M = G && G.unsubscribe && (() => {
      G.unsubscribe();
    });
    let Re;
    try {
      if (F && l && m !== "get" && m !== "head" && (Re = await y(ce, b)) !== 0) {
        let v = new n(h, {
          method: "POST",
          body: b,
          duplex: "half"
        }), k;
        if (c.isFormData(b) && (k = v.headers.get("content-type")) && ce.setContentType(k), v.body) {
          const [ue, Q] = Ne(
            Re,
            ne(ve(F))
          );
          b = Me(v.body, Ie, ue, Q);
        }
      }
      c.isString(X) || (X = X ? "include" : "omit");
      const L = a && "credentials" in n.prototype, Ee = {
        ..._e,
        signal: G,
        method: m.toUpperCase(),
        headers: ce.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: L ? X : void 0
      };
      z = a && new n(h, Ee);
      let N = await (a ? Pe(z, _e) : Pe(h, Ee));
      const Oe = u && (T === "stream" || T === "response");
      if (u && (C || Oe && M)) {
        const v = {};
        ["status", "statusText", "headers"].forEach((Ae) => {
          v[Ae] = N[Ae];
        });
        const k = c.toFiniteNumber(N.headers.get("content-length")), [ue, Q] = C && Ne(
          k,
          ne(ve(C), !0)
        ) || [];
        N = new r(
          Me(N.body, Ie, ue, () => {
            Q && Q(), M && M();
          }),
          v
        );
      }
      T = T || "text";
      let ft = await g[c.findKey(g, T) || "text"](N, d);
      return !Oe && M && M(), await new Promise((v, k) => {
        ot(v, k, {
          data: ft,
          headers: O.from(N.headers),
          status: N.status,
          statusText: N.statusText,
          config: d,
          request: z
        });
      });
    } catch (L) {
      throw M && M(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(
        new S("Network Error", S.ERR_NETWORK, d, z),
        {
          cause: L.cause || L
        }
      ) : S.from(L, L && L.code, d, z);
    }
  };
}, Dn = /* @__PURE__ */ new Map(), ct = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, a = [
    r,
    s,
    n
  ];
  let o = a.length, i = o, p, l, u = Dn;
  for (; i--; )
    p = a[i], l = u.get(p), l === void 0 && u.set(p, l = i ? /* @__PURE__ */ new Map() : In(t)), u = l;
  return l;
};
ct();
const be = {
  http: Yt,
  xhr: Ln,
  fetch: {
    get: ct
  }
};
c.forEach(be, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Be = (e) => `- ${e}`, qn = (e) => c.isFunction(e) || e === null || e === !1;
function kn(e, t) {
  e = c.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let i;
    if (s = r, !qn(r) && (s = be[(i = String(r)).toLowerCase()], s === void 0))
      throw new S(`Unknown adapter '${i}'`);
    if (s && (c.isFunction(s) || (s = s.get(t))))
      break;
    a[i || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(a).map(
      ([p, l]) => `adapter ${p} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? o.length > 1 ? `since :
` + o.map(Be).join(`
`) : " " + Be(o[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const ut = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: kn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: be
};
function pe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new H(null, e);
}
function je(e) {
  return pe(e), e.headers = O.from(e.headers), e.data = de.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ut.getAdapter(e.adapter || K.adapter, e)(e).then(function(r) {
    return pe(e), r.data = de.call(
      e,
      e.transformResponse,
      r
    ), r.headers = O.from(r.headers), r;
  }, function(r) {
    return st(r) || (pe(e), r && r.response && (r.response.data = de.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = O.from(r.response.headers))), Promise.reject(r);
  });
}
const lt = "1.13.2", ie = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ie[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const He = {};
ie.transitional = function(t, n, r) {
  function s(a, o) {
    return "[Axios v" + lt + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, i) => {
    if (t === !1)
      throw new S(
        s(o, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !He[o] && (He[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, i) : !0;
  };
};
ie.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Bn(e, t, n) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], o = t[a];
    if (o) {
      const i = e[a], p = i === void 0 || o(i, a, e);
      if (p !== !0)
        throw new S("option " + a + " must be " + p, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + a, S.ERR_BAD_OPTION);
  }
}
const te = {
  assertOptions: Bn,
  validators: ie
}, x = te.validators;
let D = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Le(),
      response: new Le()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = q(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 && te.assertOptions(r, {
      silentJSONParsing: x.transitional(x.boolean),
      forcedJSONParsing: x.transitional(x.boolean),
      clarifyTimeoutError: x.transitional(x.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : te.assertOptions(s, {
      encode: x.function,
      serialize: x.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), te.assertOptions(n, {
      baseUrl: x.spelling("baseURL"),
      withXsrfToken: x.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = a && c.merge(
      a.common,
      a[n.method]
    );
    a && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), n.headers = O.concat(o, a);
    const i = [];
    let p = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (p = p && h.synchronous, i.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let u, g = 0, w;
    if (!p) {
      const d = [je.bind(this), void 0];
      for (d.unshift(...i), d.push(...l), w = d.length, u = Promise.resolve(n); g < w; )
        u = u.then(d[g++], d[g++]);
      return u;
    }
    w = i.length;
    let y = n;
    for (; g < w; ) {
      const d = i[g++], h = i[g++];
      try {
        y = d(y);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      u = je.call(this, y);
    } catch (d) {
      return Promise.reject(d);
    }
    for (g = 0, w = l.length; g < w; )
      u = u.then(l[g++], l[g++]);
    return u;
  }
  getUri(t) {
    t = q(this.defaults, t);
    const n = at(t.baseURL, t.url, t.allowAbsoluteUrls);
    return tt(n, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(t) {
  D.prototype[t] = function(n, r) {
    return this.request(q(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, o, i) {
      return this.request(q(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  D.prototype[t] = n(), D.prototype[t + "Form"] = n(!0);
});
let jn = class dt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((i) => {
        r.subscribe(i), a = i;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(a);
      }, o;
    }, t(function(a, o, i) {
      r.reason || (r.reason = new H(a, o, i), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new dt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Hn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function zn(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const he = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(he).forEach(([e, t]) => {
  he[t] = e;
});
function pt(e) {
  const t = new D(e), n = ze(D.prototype.request, t);
  return c.extend(n, D.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return pt(q(e, s));
  }, n;
}
const f = pt(K);
f.Axios = D;
f.CanceledError = H;
f.CancelToken = jn;
f.isCancel = st;
f.VERSION = lt;
f.toFormData = ae;
f.AxiosError = S;
f.Cancel = f.CanceledError;
f.all = function(t) {
  return Promise.all(t);
};
f.spread = Hn;
f.isAxiosError = zn;
f.mergeConfig = q;
f.AxiosHeaders = O;
f.formToJSON = (e) => rt(c.isHTMLForm(e) ? new FormData(e) : e);
f.getAdapter = ut.getAdapter;
f.HttpStatusCode = he;
f.default = f;
const {
  Axios: Kn,
  AxiosError: Xn,
  CanceledError: Gn,
  isCancel: Qn,
  CancelToken: Zn,
  VERSION: Yn,
  all: er,
  Cancel: tr,
  isAxiosError: nr,
  spread: rr,
  toFormData: sr,
  AxiosHeaders: or,
  HttpStatusCode: ar,
  formToJSON: ir,
  getAdapter: cr,
  mergeConfig: ur
} = f;
function $n(e) {
  let t = { ...e };
  return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([n, r]) => r.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function lr({
  service: e,
  environment: t,
  formResult: n
}) {
  const r = new URLSearchParams();
  if (e !== void 0 && r.append("service", e), t !== void 0 && r.append("environment", t), n !== void 0) {
    let i = JSON.stringify($n(n));
    r.append("formResult", btoa(i));
  }
  let s = "view/filter?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    filter: o._embedded.items[0],
    facet: o._embedded.items[1]
  };
}
async function dr() {
  const e = await f.get("me"), { data: t } = e;
  return t;
}
const pr = (e, t) => {
  f.defaults.headers.common.Authorization = "Bearer " + e, f.defaults.headers.common.Accept = "application/json", f.defaults.headers.common["Content-Type"] = "application/json", f.defaults.baseURL = t;
};
async function fr({ id: e }) {
  const t = await f.get("view/chemical/container/" + e), { data: n } = t;
  return n;
}
async function mr({
  qrCodeContent: e
}) {
  const t = new URLSearchParams();
  t.append("qr_code_content", e);
  let n = "list/chemical/container/external-label?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function gr({
  query: e
}) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let n = "list/chemical/container/method-of-use?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function hr({
  query: e
}) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let n = "list/chemical/container/purpose?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Sr({
  query: e
}) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let n = "list/chemical/container/type?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function wr({ query: e }) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let n = "list/chemical?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function yr({ id: e }) {
  const t = await f.get("view/equipment/" + e), { data: n } = t;
  return n;
}
async function br({ id: e }) {
  const t = await f.get("view/setup/" + e), { data: n } = t;
  return n;
}
async function _r({ id: e }) {
  const t = await f.get("view/status-mail/" + e), { data: n } = t;
  return n;
}
function Jn(e) {
  let t = { ...e };
  return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([n, r]) => r.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function Pr({
  environment: e,
  run: t,
  room: n,
  statusMail: r,
  page: s = 1,
  pageSize: a = 25,
  query: o,
  filter: i,
  order: p,
  direction: l
}) {
  const u = new URLSearchParams();
  e !== void 0 && u.append("environment", e), t !== void 0 && u.append("run", t.id.toString()), n !== void 0 && u.append("room", n.id.toString()), o !== void 0 && u.append("query", o), p !== void 0 && u.append("order", p), l !== void 0 && u.append("direction", l), r !== void 0 && (u.append("status_mail", r.id.toString()), u.append("page_size", "200")), i !== void 0 && (i = Jn(i), u.append("filter", btoa(JSON.stringify(i)))), u.append("page", s.toString()), u.append("page_size", a.toString());
  let g = "list/equipment?" + u.toString();
  const w = await f.get(g), { data: y } = w;
  return {
    items: y._embedded.items,
    amountOfPages: y.page_count,
    currentPage: y.page,
    totalItems: y.total_items,
    hasMore: y.page < y.page_count
  };
}
async function Rr() {
  let t = "list/equipment/status?" + new URLSearchParams().toString();
  const n = await f.get(t), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function Er({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/ecn/attachment?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Or({ id: e }) {
  const t = await f.get("view/equipment/module/" + e), { data: n } = t;
  return n;
}
async function Ar({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/issue/attachment?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Tr({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/ecn?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Cr({
  module: e,
  pageSize: t,
  order: n,
  direction: r
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("module", e.id.toString()), t !== void 0 && s.append("page_size", t.toString()), n && s.append("order", n), r && s.append("direction", r);
  let a = "list/equipment/module/parameter?" + s.toString();
  const o = await f.get(a), { data: i } = o;
  return {
    items: i._embedded.items,
    amountOfPages: i.page_count,
    currentPage: i.page,
    totalItems: i.total_items,
    hasMore: i.page < i.page_count
  };
}
async function Ur({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/issue?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Lr({
  equipment: e,
  statusMail: t,
  run: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && (r.append("status_mail", t.id.toString()), r.append("page_size", "10000")), n !== void 0 && r.append("run", n.id.toString());
  let s = "list/equipment/module?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function xr({
  equipment: e,
  module: t,
  which: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && r.append("which", n);
  let s = "list/equipment/reservation?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  if (n == "active")
    for (let i = 0; i < o._embedded.items.length; i++)
      o._embedded.items[i].active = !0;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Nr({
  statusMail: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && (t.append("status_mail", e.id.toString()), t.append("page_size", "1000"));
  let n = "list/location/message?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function vr({ id: e }) {
  const t = await f.get("view/location/" + e), { data: n } = t;
  return n;
}
async function Fr({ id: e }) {
  const t = await f.get("view/room/" + e), { data: n } = t;
  return n;
}
async function Mr({
  environment: e,
  room: t,
  pageSize: n = 25
}) {
  const r = new URLSearchParams();
  e && r.append("environment", e), t && r.append("room", t.id.toString()), r.append("page_size", n.toString());
  let s = "list/location?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Ir({
  environment: e,
  withLocations: t
}) {
  const n = new URLSearchParams();
  e && n.append("environment", e), t && n.append("which", "with_locations");
  let r = "list/room?" + n.toString();
  const s = await f.get(r), { data: a } = s;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Dr({ id: e }) {
  let t = await f.get("view/monitor/" + e);
  const { data: n } = t;
  return n;
}
async function qr({
  equipmentId: e,
  monitorId: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("equipment", e.toString()), t && n.append("monitor", t.toString());
  let r = "list/monitor/requirement?" + n.toString();
  const s = await f.get(r), { data: a } = s;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function kr({
  equipment: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("equipment", e.id.toString()), t.append("ad_hoc", "true");
  let n = "list/monitor?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Br({
  requirement: e,
  order: t,
  direction: n,
  pageSize: r,
  page: s
}) {
  const a = new URLSearchParams();
  e && a.append("requirement", e.id.toString()), t && a.append("order", t), n && a.append("direction", n), r && a.append("page_size", r.toString()), s && a.append("page", s.toString());
  let o = "list/monitor/measurement/result?" + a.toString();
  const i = await f.get(o), { data: p } = i;
  return {
    items: p._embedded.items,
    amountOfPages: p.page_count,
    currentPage: p.page,
    totalItems: p.total_items,
    hasMore: p.page < p.page_count
  };
}
async function jr({
  requirement: e,
  result: t,
  order: n,
  direction: r,
  pageSize: s,
  page: a
}) {
  const o = new URLSearchParams();
  e && o.append("requirement", e.id.toString()), t && o.append("result", t.id.toString()), n && o.append("order", n), r && o.append("direction", r), s && o.append("page_size", s.toString()), a && o.append("page", a.toString());
  let i = "list/monitor/measurement/result/step-parameter-value?" + o.toString();
  const p = await f.get(i), { data: l } = p;
  return {
    items: l._embedded.items,
    amountOfPages: l.page_count,
    currentPage: l.page,
    totalItems: l.total_items,
    hasMore: l.page < l.page_count
  };
}
async function Hr({
  requirement: e
}) {
  const t = new URLSearchParams();
  e && t.append("requirement", e.id.toString());
  let n = "list/monitor/requirement/target?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function zr({
  step: e,
  pageSize: t,
  order: n,
  direction: r
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("step", e.id.toString()), t !== void 0 && s.append("page_size", t.toString()), n && s.append("order", n), r && s.append("direction", r);
  let a = "list/monitor/step/file?" + s.toString();
  const o = await f.get(a), { data: i } = o;
  return {
    items: i._embedded.items,
    amountOfPages: i.page_count,
    currentPage: i.page,
    totalItems: i.total_items,
    hasMore: i.page < i.page_count
  };
}
async function $r({
  step: e,
  requirement: t,
  pageSize: n,
  order: r,
  direction: s
}) {
  const a = new URLSearchParams();
  e !== void 0 && a.append("step", e.id.toString()), t !== void 0 && a.append("requirement", t.id.toString()), n !== void 0 && a.append("page_size", n.toString()), r && a.append("order", r), s && a.append("direction", s);
  let o = "list/monitor/step/parameter?" + a.toString();
  const i = await f.get(o), { data: p } = i;
  return {
    items: p._embedded.items,
    amountOfPages: p.page_count,
    currentPage: p.page,
    totalItems: p.total_items,
    hasMore: p.page < p.page_count
  };
}
async function Jr({ id: e }) {
  let t = "view/run/" + e;
  const n = await f.get(t), { data: r } = n;
  return r;
}
async function Vr({ id: e }) {
  let t = "view/run/step/" + e;
  const n = await f.get(t), { data: r } = n;
  return r;
}
async function Wr({
  step: e,
  run: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("step", String(e.id)), t !== void 0 && n.append("run", String(t.id));
  let r = "list/run/requirement?" + n.toString();
  const s = await f.get(r), { data: a } = s;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Kr({
  run: e,
  page: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("run", e.id.toString()), n.append("page", t.toString());
  let r = "list/run/changelog?" + n.toString();
  const s = await f.get(r), { data: a } = s;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Xr({ run: e }) {
  const t = new URLSearchParams();
  t.append("run", e.id.toString()), t.append("page_size", "10000");
  let n = "list/run/parts?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Gr({
  run: e,
  page: t = 1,
  pageSize: n = 25
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("run", e.id.toString()), r.append("page", t.toString()), r.append("page_size", n.toString());
  let s = "list/run/step?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Qr({
  environment: e,
  firstUnfinishedStepEquipment: t
}) {
  const n = new URLSearchParams();
  t !== void 0 && (n.append("operator", "1"), n.append("first_unfinished_step_equipment_id", t.id.toString())), e !== void 0 && n.append("environment", e);
  let r = "list/run?" + n.toString();
  const s = await f.get(r), { data: a } = s;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Zr({
  measurement: e
}) {
  const t = new URLSearchParams();
  t.append("measurement", String(e.id));
  let n = "/list/run/measurement/result?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Yr({
  runStep: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("step", e.id.toString());
  let n = "list/run/step/checklist?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function es({
  step: e,
  pageSize: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("step", e.id.toString()), t !== void 0 && n.append("page_size", t.toString()), n.append("order", "date-created"), n.append("direction", "DESC");
  let r = "list/run/step/file?" + n.toString();
  const s = await f.get(r), { data: a } = s;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function ts({
  runStep: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("step", e.id.toString());
  let n = "list/run/step/parameter?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function ns({
  step: e,
  run: t,
  page_size: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("step", e.id.toString()), t !== void 0 && r.append("run", t.id.toString()), n !== void 0 ? r.append("page_size", n.toString()) : r.append("page_size", "10000");
  let s = "list/run/step/part?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function rs({
  part: e,
  step: t,
  page_size: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("part", e.id.toString()), t !== void 0 && r.append("step", t.id.toString()), n !== void 0 && r.append("page_size", n.toString());
  let s = "list/run/step/part/action?" + r.toString();
  const a = await f.get(s), { data: o } = a;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function ss({
  runStepPart: e,
  runStepPartAction: t
}) {
  const r = await f.post("create/run/step/part/action", {
    run_step_part_id: e.id,
    type: t
  }), { data: s } = r;
  return s;
}
async function os({ id: e }) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("report", e.toString());
  let n = "list/service/event/report/results?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return s._embedded.items;
}
async function as({ id: e }) {
  let t = await f.get("view/service/event/report/" + e);
  const { data: n } = t;
  return n;
}
async function is({ id: e }) {
  const t = new URLSearchParams();
  t.append("report", e.toString());
  let n = "list/service/event/report/results?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return s._embedded.items;
}
async function cs({
  equipmentId: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("equipment", e.toString());
  let n = "list/service?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function us({ template: e, pageSize: t }) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("template", e.id.toString()), t !== void 0 && n.append("page_size", t.toString());
  let r = "list/template/step?" + n.toString();
  const s = await f.get(r), { data: a } = s;
  return {
    steps: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items
  };
}
async function ls({ reworkRecipes: e }) {
  const t = new URLSearchParams();
  e !== void 0 && e.map((a) => a.id).forEach((a) => {
    t.append("rework_recipe_id[]", a.toString());
  });
  let n = "list/template?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return {
    templates: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items
  };
}
export {
  pr as configureAxiosHeaders,
  fr as getChemicalContainer,
  yr as getEquipment,
  Or as getEquipmentModule,
  lr as getFilter,
  vr as getLocation,
  dr as getMe,
  Dr as getMonitor,
  Fr as getRoom,
  Jr as getRun,
  Vr as getRunStep,
  as as getServiceEventReport,
  br as getSetup,
  _r as getStatusMail,
  us as getTemplateSteps,
  mr as listChemicalContainerExternalLabels,
  gr as listChemicalContainerMethodsOfUse,
  hr as listChemicalContainerPurposes,
  Sr as listChemicalContainerTypes,
  wr as listChemicals,
  Tr as listEcn,
  Er as listEcnAttachments,
  Pr as listEquipment,
  Cr as listEquipmentModuleParameters,
  Rr as listEquipmentStatus,
  Ar as listIssueAttachments,
  Ur as listIssues,
  Nr as listLocationMessages,
  Mr as listLocations,
  Zr as listMeasurementResults,
  Lr as listModules,
  jr as listMonitorRequirementResultMonitorStepParameterValues,
  Br as listMonitorRequirementResults,
  Hr as listMonitorRequirementTargets,
  qr as listMonitorRequirements,
  zr as listMonitorStepFiles,
  $r as listMonitorStepParameters,
  kr as listMonitors,
  os as listReportResult,
  Wr as listRequirements,
  xr as listReservations,
  Ir as listRooms,
  Kr as listRunChangelog,
  Xr as listRunParts,
  Yr as listRunStepChecklistItems,
  es as listRunStepFiles,
  ts as listRunStepParameters,
  rs as listRunStepPartActions,
  ns as listRunStepParts,
  Gr as listRunSteps,
  Qr as listRuns,
  is as listServiceEventReportResult,
  cs as listServices,
  ls as listTemplates,
  ss as setRunStepPartAction
};
//# sourceMappingURL=index.js.map
