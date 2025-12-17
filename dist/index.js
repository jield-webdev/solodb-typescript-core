function ze(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mt } = Object.prototype, { getPrototypeOf: Se } = Object, { iterator: re, toStringTag: $e } = Symbol, se = /* @__PURE__ */ ((e) => (t) => {
  const n = mt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => se(t) === e), oe = (e) => (t) => typeof t === e, { isArray: q } = Array, j = oe("undefined");
function J(e) {
  return e !== null && !j(e) && e.constructor !== null && !j(e.constructor) && O(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Je = L("ArrayBuffer");
function gt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Je(e.buffer), t;
}
const ht = oe("string"), O = oe("function"), Ve = oe("number"), V = (e) => e !== null && typeof e == "object", St = (e) => e === !0 || e === !1, Z = (e) => {
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
}, _t = L("Date"), yt = L("File"), bt = L("Blob"), Rt = L("FileList"), Pt = (e) => V(e) && O(e.pipe), Ot = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || O(e.append) && ((t = se(e)) === "formdata" || // detect form-data instance
  t === "object" && O(e.toString) && e.toString() === "[object FormData]"));
}, Et = L("URLSearchParams"), [At, Tt, Ut, Lt] = ["ReadableStream", "Request", "Response", "Headers"].map(L), Ct = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function W(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), q(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (J(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (r = 0; r < a; r++)
      i = o[r], t.call(null, e[i], i, e);
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
const D = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ke = (e) => !j(e) && e !== D;
function fe() {
  const { caseless: e, skipUndefined: t } = Ke(this) && this || {}, n = {}, r = (s, o) => {
    const a = e && We(n, o) || o;
    Z(n[a]) && Z(s) ? n[a] = fe(n[a], s) : Z(s) ? n[a] = fe({}, s) : q(s) ? n[a] = s.slice() : (!t || !j(s)) && (n[a] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && W(arguments[s], r);
  return n;
}
const Nt = (e, t, n, { allOwnKeys: r } = {}) => (W(t, (s, o) => {
  n && O(s) ? e[o] = ze(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), xt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, It = (e, t, n, r) => {
  let s, o, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && Se(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ft = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Dt = (e) => {
  if (!e) return null;
  if (q(e)) return e;
  let t = e.length;
  if (!Ve(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Mt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Se(Uint8Array)), Bt = (e, t) => {
  const r = (e && e[re]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, kt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, jt = L("HTMLFormElement"), qt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Te = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ht = L("RegExp"), Xe = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  W(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, zt = (e) => {
  Xe(e, (t, n) => {
    if (O(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (O(r)) {
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
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return q(e) ? r(e) : r(String(e).split(t)), n;
}, Jt = () => {
}, Vt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Wt(e) {
  return !!(e && O(e.append) && e[$e] === "FormData" && e[re]);
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
        const o = q(r) ? [] : {};
        return W(r, (a, i) => {
          const p = n(a, s + 1);
          !j(p) && (o[i] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Xt = L("AsyncFunction"), Gt = (e) => e && (V(e) || O(e)) && O(e.then) && O(e.catch), Ge = ((e, t) => e ? setImmediate : t ? ((n, r) => (D.addEventListener("message", ({ source: s, data: o }) => {
  s === D && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), D.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  O(D.postMessage)
), Qt = typeof queueMicrotask < "u" ? queueMicrotask.bind(D) : typeof process < "u" && process.nextTick || Ge, Yt = (e) => e != null && O(e[re]), c = {
  isArray: q,
  isArrayBuffer: Je,
  isBuffer: J,
  isFormData: Ot,
  isArrayBufferView: gt,
  isString: ht,
  isNumber: Ve,
  isBoolean: St,
  isObject: V,
  isPlainObject: Z,
  isEmptyObject: wt,
  isReadableStream: At,
  isRequest: Tt,
  isResponse: Ut,
  isHeaders: Lt,
  isUndefined: j,
  isDate: _t,
  isFile: yt,
  isBlob: bt,
  isRegExp: Ht,
  isFunction: O,
  isStream: Pt,
  isURLSearchParams: Et,
  isTypedArray: Mt,
  isFileList: Rt,
  forEach: W,
  merge: fe,
  extend: Nt,
  trim: Ct,
  stripBOM: xt,
  inherits: vt,
  toFlatObject: It,
  kindOf: se,
  kindOfTest: L,
  endsWith: Ft,
  toArray: Dt,
  forEachEntry: Bt,
  matchAll: kt,
  isHTMLForm: jt,
  hasOwnProperty: Te,
  hasOwnProp: Te,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xe,
  freezeMethods: zt,
  toObjectSet: $t,
  toCamelCase: qt,
  noop: Jt,
  toFiniteNumber: Vt,
  findKey: We,
  global: D,
  isContextDefined: Ke,
  isSpecCompliantForm: Wt,
  toJSONObject: Kt,
  isAsyncFn: Xt,
  isThenable: Gt,
  setImmediate: Ge,
  asap: Qt,
  isIterable: Yt
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
const Qe = S.prototype, Ye = {};
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
  Ye[e] = { value: e };
});
Object.defineProperties(S, Ye);
Object.defineProperty(Qe, "isAxiosError", { value: !0 });
S.from = (e, t, n, r, s, o) => {
  const a = Object.create(Qe);
  c.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const i = e && e.message ? e.message : "Error", p = t == null && e ? e.code : t;
  return S.call(a, i, p, n, r, s), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", o && Object.assign(a, o), a;
};
const Zt = null;
function me(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Ze(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ue(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ze(s), !n && o ? "[" + s + "]" : s;
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
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, a = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
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
    let y = d;
    if (d && !m && typeof d == "object") {
      if (c.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && en(d) || (c.isFileList(d) || c.endsWith(h, "[]")) && (y = c.toArray(d)))
        return h = Ze(h), y.forEach(function(b, P) {
          !(c.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ue([h], P, o) : a === null ? h : h + "[]",
            l(b)
          );
        }), !1;
    }
    return me(d) ? !0 : (t.append(Ue(m, h, o), l(d)), !1);
  }
  const g = [], w = Object.assign(tn, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: me
  });
  function _(d, h) {
    if (!c.isUndefined(d)) {
      if (g.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      g.push(d), c.forEach(d, function(y, A) {
        (!(c.isUndefined(y) || y === null) && s.call(
          t,
          y,
          c.isString(A) ? A.trim() : A,
          h,
          w
        )) === !0 && _(y, h ? h.concat(A) : [A]);
      }), g.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Le(e) {
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
    return t.call(this, r, Le);
  } : Le;
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
  let o;
  if (s ? o = s(t, n) : o = c.isURLSearchParams(t) ? t.toString() : new we(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ce {
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
}, _e = typeof window < "u" && typeof document < "u", ge = typeof navigator == "object" && navigator || void 0, cn = _e && (!ge || ["ReactNative", "NativeScript", "NS"].indexOf(ge.product) < 0), un = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ln = _e && window.location.href || "http://localhost", dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _e,
  hasStandardBrowserEnv: cn,
  hasStandardBrowserWebWorkerEnv: un,
  navigator: ge,
  origin: ln
}, Symbol.toStringTag, { value: "Module" })), R = {
  ...dn,
  ...an
};
function pn(e, t) {
  return ae(e, new R.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return R.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
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
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function rt(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), p = o >= n.length;
    return a = !a && c.isArray(s) ? s.length : a, p ? (c.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !i) : ((!s[a] || !c.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && c.isArray(s[a]) && (s[a] = mn(s[a])), !i);
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
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = c.isObject(t);
    if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s ? JSON.stringify(rt(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (o) {
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
    return o || s ? (n.setContentType("application/json", !1), gn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || K.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (i) {
        if (a)
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
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
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
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && hn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ne = /* @__PURE__ */ Symbol("internals");
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
const _n = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function yn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function bn(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, a) {
        return this[r].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
let E = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(i, p, l) {
      const u = $(p);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const g = c.findKey(s, u);
      (!g || s[g] === void 0 || l === !0 || l === void 0 && s[g] !== !1) && (s[g || p] = ee(i));
    }
    const a = (i, p) => c.forEach(i, (l, u) => o(l, u, p));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (c.isString(t) && (t = t.trim()) && !_n(t))
      a(Sn(t), n);
    else if (c.isObject(t) && c.isIterable(t)) {
      let i = {}, p, l;
      for (const u of t) {
        if (!c.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = u[0]] = (p = i[l]) ? c.isArray(p) ? [...p, u[1]] : [p, u[1]] : u[1];
      }
      a(i, n);
    } else
      t != null && o(n, t, r);
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
    function o(a) {
      if (a = $(a), a) {
        const i = c.findKey(r, a);
        i && (!n || le(r, r[i], i, n)) && (delete r[i], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || le(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (s, o) => {
      const a = c.findKey(r, o);
      if (a) {
        n[a] = ee(s), delete n[o];
        return;
      }
      const i = t ? yn(o) : String(o).trim();
      i !== o && delete n[o], n[i] = ee(s), r[i] = !0;
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
    const r = (this[Ne] = this[Ne] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = $(a);
      r[i] || (bn(s, a), r[i] = !0);
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
E.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(E.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(E);
function de(e, t) {
  const n = this || K, r = t || n, s = E.from(r.headers);
  let o = r.data;
  return c.forEach(e, function(i) {
    o = i.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
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
function Rn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Pn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const l = Date.now(), u = r[o];
    a || (a = l), n[s] = p, r[s] = l;
    let g = o, w = 0;
    for (; g !== s; )
      w += n[g++], g = g % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - a < t)
      return;
    const _ = u && l - u;
    return _ ? Math.round(w * 1e3 / _) : void 0;
  };
}
function On(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const a = (l, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), g = u - n;
    g >= r ? a(l, u) : (s = l, o || (o = setTimeout(() => {
      o = null, a(s);
    }, r - g)));
  }, () => s && a(s)];
}
const ne = (e, t, n = 3) => {
  let r = 0;
  const s = Pn(50, 250);
  return On((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, p = a - r, l = s(p), u = a <= i;
    r = a;
    const g = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: p,
      rate: l || void 0,
      estimated: l && i && u ? (i - a) / l : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(g);
  }, n);
}, xe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, ve = (e) => (...t) => c.asap(() => e(...t)), En = R.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, R.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(R.origin),
  R.navigator && /(msie|trident)/i.test(R.navigator.userAgent)
) : () => !0, An = R.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      c.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), c.isString(r) && i.push(`path=${r}`), c.isString(s) && i.push(`domain=${s}`), o === !0 && i.push("secure"), c.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
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
function Un(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function at(e, t, n) {
  let r = !Tn(t);
  return e && (r || n == !1) ? Un(e, t) : t;
}
const Ie = (e) => e instanceof E ? { ...e } : e;
function B(e, t) {
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
  function o(l, u) {
    if (!c.isUndefined(u))
      return r(void 0, u);
  }
  function a(l, u) {
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
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (l, u, g) => s(Ie(l), Ie(u), g, !0)
  };
  return c.forEach(Object.keys({ ...e, ...t }), function(u) {
    const g = p[u] || s, w = g(e[u], t[u], u);
    c.isUndefined(w) && g !== i || (n[u] = w);
  }), n;
}
const it = (e) => {
  const t = B({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = E.from(a), t.url = tt(at(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  ), c.isFormData(n)) {
    if (R.hasStandardBrowserEnv || R.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (c.isFunction(n.getHeaders)) {
      const p = n.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(p).forEach(([u, g]) => {
        l.includes(u.toLowerCase()) && a.set(u, g);
      });
    }
  }
  if (R.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(t)), r || r !== !1 && En(t.url))) {
    const p = s && o && An.read(o);
    p && a.set(s, p);
  }
  return t;
}, Ln = typeof XMLHttpRequest < "u", Cn = Ln && function(e) {
  return new Promise(function(n, r) {
    const s = it(e);
    let o = s.data;
    const a = E.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: p, onDownloadProgress: l } = s, u, g, w, _, d;
    function h() {
      _ && _(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function y() {
      if (!m)
        return;
      const b = E.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), U = {
        data: !i || i === "text" || i === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: b,
        config: e,
        request: m
      };
      ot(function(T) {
        n(T), h();
      }, function(T) {
        r(T), h();
      }, U), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      m && (r(new S("Request aborted", S.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(P) {
      const U = P && P.message ? P.message : "Network Error", I = new S(U, S.ERR_NETWORK, e, m);
      I.event = P || null, r(I), m = null;
    }, m.ontimeout = function() {
      let P = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const U = s.transitional || nt;
      s.timeoutErrorMessage && (P = s.timeoutErrorMessage), r(new S(
        P,
        U.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in m && c.forEach(a.toJSON(), function(P, U) {
      m.setRequestHeader(U, P);
    }), c.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), i && i !== "json" && (m.responseType = s.responseType), l && ([w, d] = ne(l, !0), m.addEventListener("progress", w)), p && m.upload && ([g, _] = ne(p), m.upload.addEventListener("progress", g), m.upload.addEventListener("loadend", _)), (s.cancelToken || s.signal) && (u = (b) => {
      m && (r(!b || b.type ? new H(null, e, m) : b), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const A = Rn(s.url);
    if (A && R.protocols.indexOf(A) === -1) {
      r(new S("Unsupported protocol " + A + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, Nn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(l) {
      if (!s) {
        s = !0, i();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof S ? u : new H(u instanceof Error ? u.message : u));
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", o));
    const { signal: p } = r;
    return p.unsubscribe = () => c.asap(i), p;
  }
}, xn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, vn = async function* (e, t) {
  for await (const n of In(e))
    yield* xn(n, t);
}, In = async function* (e) {
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
}, Fe = (e, t, n, r) => {
  const s = vn(e, t);
  let o = 0, a, i = (p) => {
    a || (a = !0, r && r(p));
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
          let w = o += g;
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
}, De = 64 * 1024, { isFunction: Y } = c, Fn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(c.global), {
  ReadableStream: Me,
  TextEncoder: Be
} = c.global, ke = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Dn = (e) => {
  e = c.merge.call({
    skipUndefined: !0
  }, Fn, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? Y(t) : typeof fetch == "function", o = Y(n), a = Y(r);
  if (!s)
    return !1;
  const i = s && Y(Me), p = s && (typeof Be == "function" ? /* @__PURE__ */ ((d) => (h) => d.encode(h))(new Be()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), l = o && i && ke(() => {
    let d = !1;
    const h = new n(R.origin, {
      body: new Me(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !h;
  }), u = a && i && ke(() => c.isReadableStream(new r("").body)), g = {
    stream: u && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !g[d] && (g[d] = (h, m) => {
      let y = h && h[d];
      if (y)
        return y.call(h);
      throw new S(`Response type '${d}' is not supported`, S.ERR_NOT_SUPPORT, m);
    });
  });
  const w = async (d) => {
    if (d == null)
      return 0;
    if (c.isBlob(d))
      return d.size;
    if (c.isSpecCompliantForm(d))
      return (await new n(R.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(d) || c.isArrayBuffer(d))
      return d.byteLength;
    if (c.isURLSearchParams(d) && (d = d + ""), c.isString(d))
      return (await p(d)).byteLength;
  }, _ = async (d, h) => {
    const m = c.toFiniteNumber(d.getContentLength());
    return m ?? w(h);
  };
  return async (d) => {
    let {
      url: h,
      method: m,
      data: y,
      signal: A,
      cancelToken: b,
      timeout: P,
      onDownloadProgress: U,
      onUploadProgress: I,
      responseType: T,
      headers: ce,
      withCredentials: X = "same-origin",
      fetchOptions: be
    } = it(d), Re = t || fetch;
    T = T ? (T + "").toLowerCase() : "text";
    let G = Nn([A, b && b.toAbortSignal()], P), z = null;
    const F = G && G.unsubscribe && (() => {
      G.unsubscribe();
    });
    let Pe;
    try {
      if (I && l && m !== "get" && m !== "head" && (Pe = await _(ce, y)) !== 0) {
        let v = new n(h, {
          method: "POST",
          body: y,
          duplex: "half"
        }), k;
        if (c.isFormData(y) && (k = v.headers.get("content-type")) && ce.setContentType(k), v.body) {
          const [ue, Q] = xe(
            Pe,
            ne(ve(I))
          );
          y = Fe(v.body, De, ue, Q);
        }
      }
      c.isString(X) || (X = X ? "include" : "omit");
      const C = o && "credentials" in n.prototype, Oe = {
        ...be,
        signal: G,
        method: m.toUpperCase(),
        headers: ce.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: C ? X : void 0
      };
      z = o && new n(h, Oe);
      let x = await (o ? Re(z, be) : Re(h, Oe));
      const Ee = u && (T === "stream" || T === "response");
      if (u && (U || Ee && F)) {
        const v = {};
        ["status", "statusText", "headers"].forEach((Ae) => {
          v[Ae] = x[Ae];
        });
        const k = c.toFiniteNumber(x.headers.get("content-length")), [ue, Q] = U && xe(
          k,
          ne(ve(U), !0)
        ) || [];
        x = new r(
          Fe(x.body, De, ue, () => {
            Q && Q(), F && F();
          }),
          v
        );
      }
      T = T || "text";
      let ft = await g[c.findKey(g, T) || "text"](x, d);
      return !Ee && F && F(), await new Promise((v, k) => {
        ot(v, k, {
          data: ft,
          headers: E.from(x.headers),
          status: x.status,
          statusText: x.statusText,
          config: d,
          request: z
        });
      });
    } catch (C) {
      throw F && F(), C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message) ? Object.assign(
        new S("Network Error", S.ERR_NETWORK, d, z),
        {
          cause: C.cause || C
        }
      ) : S.from(C, C && C.code, d, z);
    }
  };
}, Mn = /* @__PURE__ */ new Map(), ct = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [
    r,
    s,
    n
  ];
  let a = o.length, i = a, p, l, u = Mn;
  for (; i--; )
    p = o[i], l = u.get(p), l === void 0 && u.set(p, l = i ? /* @__PURE__ */ new Map() : Dn(t)), u = l;
  return l;
};
ct();
const ye = {
  http: Zt,
  xhr: Cn,
  fetch: {
    get: ct
  }
};
c.forEach(ye, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const je = (e) => `- ${e}`, Bn = (e) => c.isFunction(e) || e === null || e === !1;
function kn(e, t) {
  e = c.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let i;
    if (s = r, !Bn(r) && (s = ye[(i = String(r)).toLowerCase()], s === void 0))
      throw new S(`Unknown adapter '${i}'`);
    if (s && (c.isFunction(s) || (s = s.get(t))))
      break;
    o[i || "#" + a] = s;
  }
  if (!s) {
    const a = Object.entries(o).map(
      ([p, l]) => `adapter ${p} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? a.length > 1 ? `since :
` + a.map(je).join(`
`) : " " + je(a[0]) : "as no adapter specified";
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
  adapters: ye
};
function pe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new H(null, e);
}
function qe(e) {
  return pe(e), e.headers = E.from(e.headers), e.data = de.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ut.getAdapter(e.adapter || K.adapter, e)(e).then(function(r) {
    return pe(e), r.data = de.call(
      e,
      e.transformResponse,
      r
    ), r.headers = E.from(r.headers), r;
  }, function(r) {
    return st(r) || (pe(e), r && r.response && (r.response.data = de.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = E.from(r.response.headers))), Promise.reject(r);
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
  function s(o, a) {
    return "[Axios v" + lt + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new S(
        s(a, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !He[a] && (He[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
ie.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function jn(e, t, n) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = t[o];
    if (a) {
      const i = e[o], p = i === void 0 || a(i, o, e);
      if (p !== !0)
        throw new S("option " + o + " must be " + p, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
  }
}
const te = {
  assertOptions: jn,
  validators: ie
}, N = te.validators;
let M = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ce(),
      response: new Ce()
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
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = B(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && te.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : te.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), te.assertOptions(n, {
      baseUrl: N.spelling("baseURL"),
      withXsrfToken: N.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && c.merge(
      o.common,
      o[n.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = E.concat(a, o);
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
      const d = [qe.bind(this), void 0];
      for (d.unshift(...i), d.push(...l), w = d.length, u = Promise.resolve(n); g < w; )
        u = u.then(d[g++], d[g++]);
      return u;
    }
    w = i.length;
    let _ = n;
    for (; g < w; ) {
      const d = i[g++], h = i[g++];
      try {
        _ = d(_);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      u = qe.call(this, _);
    } catch (d) {
      return Promise.reject(d);
    }
    for (g = 0, w = l.length; g < w; )
      u = u.then(l[g++], l[g++]);
    return u;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = at(t.baseURL, t.url, t.allowAbsoluteUrls);
    return tt(n, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, r) {
    return this.request(B(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, i) {
      return this.request(B(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  M.prototype[t] = n(), M.prototype[t + "Form"] = n(!0);
});
let qn = class dt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const a = new Promise((i) => {
        r.subscribe(i), o = i;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, t(function(o, a, i) {
      r.reason || (r.reason = new H(o, a, i), n(r.reason));
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
  const t = new M(e), n = ze(M.prototype.request, t);
  return c.extend(n, M.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return pt(B(e, s));
  }, n;
}
const f = pt(K);
f.Axios = M;
f.CanceledError = H;
f.CancelToken = qn;
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
f.mergeConfig = B;
f.AxiosHeaders = E;
f.formToJSON = (e) => rt(c.isHTMLForm(e) ? new FormData(e) : e);
f.getAdapter = ut.getAdapter;
f.HttpStatusCode = he;
f.default = f;
const {
  Axios: or,
  AxiosError: ar,
  CanceledError: ir,
  isCancel: cr,
  CancelToken: ur,
  VERSION: lr,
  all: dr,
  Cancel: pr,
  isAxiosError: fr,
  spread: mr,
  toFormData: gr,
  AxiosHeaders: hr,
  HttpStatusCode: Sr,
  formToJSON: wr,
  getAdapter: _r,
  mergeConfig: yr
} = f;
function $n(e) {
  let t = { ...e };
  return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([n, r]) => r.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function br({
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
  const o = await f.get(s), { data: a } = o;
  return {
    filter: a._embedded.items[0],
    facet: a._embedded.items[1]
  };
}
async function Rr() {
  const e = await f.get("me"), { data: t } = e;
  return t;
}
async function Pr({ query: e, selection: t }) {
  const n = new URLSearchParams();
  e && n.append("query", e), t && n.append("selection", t.toString());
  let r = "list/user?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
function Or(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = () => {
      const s = r.result;
      t(s);
    }, r.onerror = n, r.readAsDataURL(e);
  });
}
const Er = (e, t) => {
  f.defaults.headers.common.Authorization = "Bearer " + e, f.defaults.headers.common.Accept = "application/json", f.defaults.headers.common["Content-Type"] = "application/json", f.defaults.baseURL = t;
};
async function Ar({ id: e }) {
  const t = await f.get("view/chemical/container/" + e), { data: n } = t;
  return n;
}
async function Tr({
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
async function Ur({
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
async function Lr({
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
async function Cr({
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
async function Nr({ query: e }) {
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
async function xr({ id: e }) {
  const t = await f.get("view/equipment/" + e), { data: n } = t;
  return n;
}
async function vr({ id: e }) {
  const t = await f.get("view/setup/" + e), { data: n } = t;
  return n;
}
async function Ir({ id: e }) {
  const t = await f.get("view/status-mail/" + e), { data: n } = t;
  return n;
}
function Jn(e) {
  let t = { ...e };
  return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([n, r]) => r.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function Fr({
  environment: e,
  run: t,
  room: n,
  statusMail: r,
  page: s = 1,
  pageSize: o = 25,
  query: a,
  filter: i,
  order: p,
  direction: l
}) {
  const u = new URLSearchParams();
  e !== void 0 && u.append("environment", e), t !== void 0 && u.append("run", t.id.toString()), n !== void 0 && u.append("room", n.id.toString()), a !== void 0 && u.append("query", a), p !== void 0 && u.append("order", p), l !== void 0 && u.append("direction", l), r !== void 0 && (u.append("status_mail", r.id.toString()), u.append("page_size", "200")), i !== void 0 && (i = Jn(i), u.append("filter", btoa(JSON.stringify(i)))), u.append("page", s.toString()), u.append("page_size", o.toString());
  let g = "list/equipment?" + u.toString();
  const w = await f.get(g), { data: _ } = w;
  return {
    items: _._embedded.items,
    amountOfPages: _.page_count,
    currentPage: _.page,
    totalItems: _.total_items,
    hasMore: _.page < _.page_count
  };
}
async function Dr() {
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
async function Mr({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/ecn/attachment?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Br({ id: e }) {
  const t = await f.get("view/equipment/module/" + e), { data: n } = t;
  return n;
}
async function kr({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/issue/attachment?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function jr({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/ecn?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function qr({
  module: e,
  pageSize: t,
  order: n,
  direction: r
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("module", e.id.toString()), t !== void 0 && s.append("page_size", t.toString()), n && s.append("order", n), r && s.append("direction", r);
  let o = "list/equipment/module/parameter?" + s.toString();
  const a = await f.get(o), { data: i } = a;
  return {
    items: i._embedded.items,
    amountOfPages: i.page_count,
    currentPage: i.page,
    totalItems: i.total_items,
    hasMore: i.page < i.page_count
  };
}
async function Hr({
  equipment: e,
  module: t,
  statusMail: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && (r.append("status_mail", n.id.toString()), r.append("page_size", "1000"));
  let s = "list/equipment/module/issue?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function zr({
  equipment: e,
  statusMail: t,
  run: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && (r.append("status_mail", t.id.toString()), r.append("page_size", "10000")), n !== void 0 && r.append("run", n.id.toString());
  let s = "list/equipment/module?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function $r({
  equipment: e,
  module: t,
  which: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("equipment", e.id.toString()), t !== void 0 && r.append("module", t.id.toString()), n !== void 0 && r.append("which", n);
  let s = "list/equipment/reservation?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  if (n == "active")
    for (let i = 0; i < a._embedded.items.length; i++)
      a._embedded.items[i].active = !0;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Jr({
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
async function Vr({ id: e }) {
  const t = await f.get("view/location/" + e), { data: n } = t;
  return n;
}
async function Wr({ id: e }) {
  const t = await f.get("view/room/" + e), { data: n } = t;
  return n;
}
async function Kr({
  environment: e,
  room: t,
  pageSize: n = 25
}) {
  const r = new URLSearchParams();
  e && r.append("environment", e), t && r.append("room", t.id.toString()), r.append("page_size", n.toString());
  let s = "list/location?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Xr({
  environment: e,
  withLocations: t
}) {
  const n = new URLSearchParams();
  e && n.append("environment", e), t && n.append("which", "with_locations");
  let r = "list/room?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Gr({ id: e }) {
  let t = await f.get("view/monitor/" + e);
  const { data: n } = t;
  return n;
}
async function Qr({
  equipmentId: e,
  monitorId: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("equipment", e.toString()), t && n.append("monitor", t.toString());
  let r = "list/monitor/requirement?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Yr({
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
async function Zr({
  requirement: e,
  order: t,
  direction: n,
  pageSize: r,
  page: s
}) {
  const o = new URLSearchParams();
  e && o.append("requirement", e.id.toString()), t && o.append("order", t), n && o.append("direction", n), r && o.append("page_size", r.toString()), s && o.append("page", s.toString());
  let a = "list/monitor/measurement/result?" + o.toString();
  const i = await f.get(a), { data: p } = i;
  return {
    items: p._embedded.items,
    amountOfPages: p.page_count,
    currentPage: p.page,
    totalItems: p.total_items,
    hasMore: p.page < p.page_count
  };
}
async function es({
  requirement: e,
  result: t,
  order: n,
  direction: r,
  pageSize: s,
  page: o
}) {
  const a = new URLSearchParams();
  e && a.append("requirement", e.id.toString()), t && a.append("result", t.id.toString()), n && a.append("order", n), r && a.append("direction", r), s && a.append("page_size", s.toString()), o && a.append("page", o.toString());
  let i = "list/monitor/measurement/result/step-parameter-value?" + a.toString();
  const p = await f.get(i), { data: l } = p;
  return {
    items: l._embedded.items,
    amountOfPages: l.page_count,
    currentPage: l.page,
    totalItems: l.total_items,
    hasMore: l.page < l.page_count
  };
}
async function ts({
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
async function ns({
  step: e,
  pageSize: t,
  order: n,
  direction: r
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("step", e.id.toString()), t !== void 0 && s.append("page_size", t.toString()), n && s.append("order", n), r && s.append("direction", r);
  let o = "list/monitor/step/file?" + s.toString();
  const a = await f.get(o), { data: i } = a;
  return {
    items: i._embedded.items,
    amountOfPages: i.page_count,
    currentPage: i.page,
    totalItems: i.total_items,
    hasMore: i.page < i.page_count
  };
}
async function rs({
  step: e,
  requirement: t,
  pageSize: n,
  order: r,
  direction: s
}) {
  const o = new URLSearchParams();
  e !== void 0 && o.append("step", e.id.toString()), t !== void 0 && o.append("requirement", t.id.toString()), n !== void 0 && o.append("page_size", n.toString()), r && o.append("order", r), s && o.append("direction", s);
  let a = "list/monitor/step/parameter?" + o.toString();
  const i = await f.get(a), { data: p } = i;
  return {
    items: p._embedded.items,
    amountOfPages: p.page_count,
    currentPage: p.page,
    totalItems: p.total_items,
    hasMore: p.page < p.page_count
  };
}
async function ss({ id: e }) {
  let t = "view/run/" + e;
  const n = await f.get(t), { data: r } = n;
  return r;
}
async function os({ id: e }) {
  let t = "view/run/step/" + e;
  const n = await f.get(t), { data: r } = n;
  return r;
}
async function as({
  step: e,
  run: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("step", String(e.id)), t !== void 0 && n.append("run", String(t.id));
  let r = "list/run/requirement?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function is({
  run: e,
  page: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("run", e.id.toString()), n.append("page", t.toString());
  let r = "list/run/changelog?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function cs({ run: e }) {
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
async function us({
  run: e,
  page: t = 1,
  pageSize: n = 25
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("run", e.id.toString()), r.append("page", t.toString()), r.append("page_size", n.toString());
  let s = "list/run/step?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function ls({
  environment: e,
  firstUnfinishedStepEquipment: t
}) {
  const n = new URLSearchParams();
  t !== void 0 && (n.append("operator", "1"), n.append("first_unfinished_step_equipment_id", t.id.toString())), e !== void 0 && n.append("environment", e);
  let r = "list/run?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function ds({
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
async function ps({
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
async function fs({
  step: e,
  pageSize: t
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("step", e.id.toString()), t !== void 0 && n.append("page_size", t.toString()), n.append("order", "date-created"), n.append("direction", "DESC");
  let r = "list/run/step/file?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function ms({
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
async function gs({
  step: e,
  run: t,
  page_size: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("step", e.id.toString()), t !== void 0 && r.append("run", t.id.toString()), n !== void 0 ? r.append("page_size", n.toString()) : r.append("page_size", "10000");
  let s = "list/run/step/part?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function hs({
  part: e,
  step: t,
  page_size: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("part", e.id.toString()), t !== void 0 && r.append("step", t.id.toString()), n !== void 0 && r.append("page_size", n.toString());
  let s = "list/run/step/part/action?" + r.toString();
  const o = await f.get(s), { data: a } = o;
  return {
    items: a._embedded.items,
    amountOfPages: a.page_count,
    currentPage: a.page,
    totalItems: a.total_items,
    hasMore: a.page < a.page_count
  };
}
async function Ss({
  runStepPart: e,
  runStepPartAction: t
}) {
  const r = await f.post("create/run/step/part/action", {
    run_step_part_id: e.id,
    type: t
  }), { data: s } = r;
  return s;
}
async function ws({ id: e }) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("report", e.toString());
  let n = "list/service/event/report/results?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return s._embedded.items;
}
async function _s({ id: e }) {
  let t = await f.get("view/service/event/report/" + e);
  const { data: n } = t;
  return n;
}
async function ys({ id: e }) {
  const t = new URLSearchParams();
  t.append("report", e.toString());
  let n = "list/service/event/report/results?" + t.toString();
  const r = await f.get(n), { data: s } = r;
  return s._embedded.items;
}
async function bs({
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
async function Rs({ template: e, pageSize: t }) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("template", e.id.toString()), t !== void 0 && n.append("page_size", t.toString());
  let r = "list/template/step?" + n.toString();
  const s = await f.get(r), { data: o } = s;
  return {
    steps: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items
  };
}
async function Ps({ reworkRecipes: e }) {
  const t = new URLSearchParams();
  e !== void 0 && e.map((o) => o.id).forEach((o) => {
    t.append("rework_recipe_id[]", o.toString());
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
var Vn = /* @__PURE__ */ ((e) => (e[e.STANDARD_PRODUCT = 1] = "STANDARD_PRODUCT", e[e.NON_STANDARD_PRODUCT = 2] = "NON_STANDARD_PRODUCT", e))(Vn || {}), Wn = /* @__PURE__ */ ((e) => (e[e.SOLID = 1] = "SOLID", e[e.LIQUID = 2] = "LIQUID", e[e.GAS = 3] = "GAS", e[e.OTHER = 4] = "OTHER", e))(Wn || {}), Kn = /* @__PURE__ */ ((e) => (e[e.Equipment = 1] = "Equipment", e[e.Accessory = 2] = "Accessory", e[e.Storage = 3] = "Storage", e))(Kn || {}), Xn = /* @__PURE__ */ ((e) => (e[e.DEFAULT = 1] = "DEFAULT", e[e.PRIORITY = 2] = "PRIORITY", e[e.ESCALATION = 3] = "ESCALATION", e))(Xn || {}), Gn = /* @__PURE__ */ ((e) => (e[e.ACTIVE = 1] = "ACTIVE", e[e.CLOSED = 2] = "CLOSED", e))(Gn || {}), Qn = /* @__PURE__ */ ((e) => (e[e.HIDE_ISSUES = 1] = "HIDE_ISSUES", e[e.SHOW_ISSUES = 2] = "SHOW_ISSUES", e[e.COLLAPSE_ISSUES = 3] = "COLLAPSE_ISSUES", e))(Qn || {}), Yn = /* @__PURE__ */ ((e) => (e[e.NAME = 1] = "NAME", e[e.MES_NAME = 2] = "MES_NAME", e[e.NUMBER = 3] = "NUMBER", e))(Yn || {}), Zn = /* @__PURE__ */ ((e) => (e[e.AREA = 1] = "AREA", e[e.AREA_PER_FACILITY = 2] = "AREA_PER_FACILITY", e[e.ROOM = 3] = "ROOM", e))(Zn || {}), er = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e))(er || {}), tr = /* @__PURE__ */ ((e) => (e[e.RESEARCH = 1] = "RESEARCH", e[e.PRODUCTION = 2] = "PRODUCTION", e))(tr || {}), nr = /* @__PURE__ */ ((e) => (e[e.START_PROCESSING = 1] = "START_PROCESSING", e[e.FINISH_PROCESSING = 2] = "FINISH_PROCESSING", e[e.FAILED_PROCESSING = 3] = "FAILED_PROCESSING", e[e.REWORK = 4] = "REWORK", e))(nr || {});
export {
  Wn as ChemicalPhysicalStateEnum,
  Vn as ChemicalStandardProductEnum,
  Zn as ClassificationsOptionEnum,
  er as DirectionOptionEnum,
  Kn as EquipmentGrade,
  Gn as EquipmentModuleIssueStatus,
  Xn as EquipmentModuleIssueType,
  Yn as OrderOptionEnum,
  nr as RunStepPartActionEnum,
  tr as RunTypeEnum,
  Qn as ShowIssuesOptionEnum,
  Er as configureAxiosHeaders,
  Or as fileToBase64,
  Ar as getChemicalContainer,
  xr as getEquipment,
  Br as getEquipmentModule,
  br as getFilter,
  Vr as getLocation,
  Rr as getMe,
  Gr as getMonitor,
  Wr as getRoom,
  ss as getRun,
  os as getRunStep,
  _s as getServiceEventReport,
  vr as getSetup,
  Ir as getStatusMail,
  Rs as getTemplateSteps,
  Tr as listChemicalContainerExternalLabels,
  Ur as listChemicalContainerMethodsOfUse,
  Lr as listChemicalContainerPurposes,
  Cr as listChemicalContainerTypes,
  Nr as listChemicals,
  jr as listEcn,
  Mr as listEcnAttachments,
  Fr as listEquipment,
  qr as listEquipmentModuleParameters,
  Dr as listEquipmentStatus,
  kr as listIssueAttachments,
  Hr as listIssues,
  Jr as listLocationMessages,
  Kr as listLocations,
  ds as listMeasurementResults,
  zr as listModules,
  es as listMonitorRequirementResultMonitorStepParameterValues,
  Zr as listMonitorRequirementResults,
  ts as listMonitorRequirementTargets,
  Qr as listMonitorRequirements,
  ns as listMonitorStepFiles,
  rs as listMonitorStepParameters,
  Yr as listMonitors,
  ws as listReportResult,
  as as listRequirements,
  $r as listReservations,
  Xr as listRooms,
  is as listRunChangelog,
  cs as listRunParts,
  ps as listRunStepChecklistItems,
  fs as listRunStepFiles,
  ms as listRunStepParameters,
  hs as listRunStepPartActions,
  gs as listRunStepParts,
  us as listRunSteps,
  ls as listRuns,
  ys as listServiceEventReportResult,
  bs as listServices,
  Ps as listTemplates,
  Pr as listUsers,
  Ss as setRunStepPartAction
};
//# sourceMappingURL=index.js.map
