import i from "axios";
function R(e) {
  let t = { ...e };
  return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([a, s]) => s.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function $({
  service: e,
  environment: t,
  formResult: a
}) {
  const s = new URLSearchParams();
  if (e !== void 0 && s.append("service", e), t !== void 0 && s.append("environment", t), a !== void 0) {
    let c = JSON.stringify(R(a));
    s.append("formResult", btoa(c));
  }
  let n = "view/filter?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    filter: o._embedded.items[0],
    facet: o._embedded.items[1]
  };
}
async function W() {
  const e = await i.get("me"), { data: t } = e;
  return t;
}
async function j({ query: e, selection: t }) {
  const a = new URLSearchParams();
  e && a.append("query", e), t && a.append("selection", t.toString());
  let s = "list/user?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
function x(e) {
  return new Promise((t, a) => {
    const s = new FileReader();
    s.onload = () => {
      const n = s.result;
      t(n);
    }, s.onerror = a, s.readAsDataURL(e);
  });
}
const G = (e, t) => {
  i.defaults.headers.common.Authorization = "Bearer " + e, i.defaults.headers.common.Accept = "application/json", i.defaults.headers.common["Content-Type"] = "application/json", i.defaults.baseURL = t;
};
async function k({ id: e }) {
  const t = await i.get("view/chemical/container/" + e), { data: a } = t;
  return a;
}
async function K({
  qrCodeContent: e
}) {
  const t = new URLSearchParams();
  t.append("qr_code_content", e);
  let a = "list/chemical/container/external-label?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function B({
  query: e
}) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let a = "list/chemical/container/method-of-use?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function V({
  query: e
}) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let a = "list/chemical/container/purpose?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function Y({
  query: e
}) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let a = "list/chemical/container/type?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function J({ query: e }) {
  const t = new URLSearchParams();
  e && t.append("query", e);
  let a = "list/chemical?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function Q({ id: e }) {
  const t = await i.get("view/equipment/" + e), { data: a } = t;
  return a;
}
async function X({ id: e }) {
  const t = await i.get("view/setup/" + e), { data: a } = t;
  return a;
}
async function Z({ id: e }) {
  const t = await i.get("view/status-mail/" + e), { data: a } = t;
  return a;
}
function I(e) {
  let t = { ...e };
  return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([a, s]) => s.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function ee({
  environment: e,
  run: t,
  room: a,
  statusMail: s,
  hasWorkstationComponents: n = !1,
  page: r = 1,
  pageSize: o = 25,
  query: c,
  filter: p,
  order: m,
  direction: f
}) {
  const d = new URLSearchParams();
  e !== void 0 && d.append("environment", e), t !== void 0 && d.append("run", t.id.toString()), a !== void 0 && d.append("room", a.id.toString()), n && d.append("has_workstation_components", "true"), c !== void 0 && d.append("query", c), m !== void 0 && d.append("order", m), f !== void 0 && d.append("direction", f), s !== void 0 && (d.append("status_mail", s.id.toString()), d.append("page_size", "200")), p !== void 0 && (p = I(p), d.append("filter", btoa(JSON.stringify(p)))), d.append("page", r.toString()), d.append("page_size", o.toString());
  let _ = "list/equipment?" + d.toString();
  const S = await i.get(_), { data: u } = S;
  return {
    items: u._embedded.items,
    amountOfPages: u.page_count,
    currentPage: u.page,
    totalItems: u.total_items,
    hasMore: u.page < u.page_count
  };
}
async function te() {
  let t = "list/equipment/status?" + new URLSearchParams().toString();
  const a = await i.get(t), { data: s } = a;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function ae({
  equipment: e,
  module: t,
  statusMail: a
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("equipment", e.id.toString()), t !== void 0 && s.append("module", t.id.toString()), a !== void 0 && (s.append("status_mail", a.id.toString()), s.append("page_size", "1000"));
  let n = "list/equipment/module/ecn/attachment?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function ne({ id: e }) {
  if (isNaN(e))
    return null;
  const t = await i.get("view/equipment/module/" + e), { data: a } = t;
  return a;
}
async function se({
  equipment: e,
  module: t,
  statusMail: a
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("equipment", e.id.toString()), t !== void 0 && s.append("module", t.id.toString()), a !== void 0 && (s.append("status_mail", a.id.toString()), s.append("page_size", "1000"));
  let n = "list/equipment/module/issue/attachment?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function re({
  equipment: e,
  module: t,
  statusMail: a
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("equipment", e.id.toString()), t !== void 0 && s.append("module", t.id.toString()), a !== void 0 && (s.append("status_mail", a.id.toString()), s.append("page_size", "1000"));
  let n = "list/equipment/module/ecn?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function oe({
  module: e,
  pageSize: t,
  order: a,
  direction: s
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("module", e.id.toString()), t !== void 0 && n.append("page_size", t.toString()), a && n.append("order", a), s && n.append("direction", s);
  let r = "list/equipment/module/parameter?" + n.toString();
  const o = await i.get(r), { data: c } = o;
  return {
    items: c._embedded.items,
    amountOfPages: c.page_count,
    currentPage: c.page,
    totalItems: c.total_items,
    hasMore: c.page < c.page_count
  };
}
async function ie({
  equipment: e,
  module: t,
  statusMail: a
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("equipment", e.id.toString()), t !== void 0 && s.append("module", t.id.toString()), a !== void 0 && (s.append("status_mail", a.id.toString()), s.append("page_size", "1000"));
  let n = "list/equipment/module/issue?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function ce({
  equipment: e,
  statusMail: t,
  run: a
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("equipment", e.id.toString()), t !== void 0 && (s.append("status_mail", t.id.toString()), s.append("page_size", "10000")), a !== void 0 && s.append("run", a.id.toString());
  let n = "list/equipment/module?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function pe({
  equipment: e,
  module: t,
  which: a
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("equipment", e.id.toString()), t !== void 0 && s.append("module", t.id.toString()), a !== void 0 && s.append("which", a);
  let n = "list/equipment/reservation?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  if (a == "active")
    for (let c = 0; c < o._embedded.items.length; c++)
      o._embedded.items[c].active = !0;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function de({
  statusMail: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && (t.append("status_mail", e.id.toString()), t.append("page_size", "1000"));
  let a = "list/location/message?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function ge({ id: e }) {
  const t = await i.get("view/location/" + e), { data: a } = t;
  return a;
}
async function me({ id: e }) {
  const t = await i.get("view/room/" + e), { data: a } = t;
  return a;
}
async function ue({
  environment: e,
  room: t,
  pageSize: a = 25
}) {
  const s = new URLSearchParams();
  e && s.append("environment", e), t && s.append("room", t.id.toString()), s.append("page_size", a.toString());
  let n = "list/location?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function le({
  environment: e,
  withLocations: t
}) {
  const a = new URLSearchParams();
  e && a.append("environment", e), t && a.append("which", "with_locations");
  let s = "list/room?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function fe({ id: e }) {
  let t = await i.get("view/monitor/" + e);
  const { data: a } = t;
  return a;
}
async function _e({
  equipmentId: e,
  monitorId: t
}) {
  const a = new URLSearchParams();
  e !== void 0 && a.append("equipment", e.toString()), t && a.append("monitor", t.toString());
  let s = "list/monitor/requirement?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function Se({
  equipment: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("equipment", e.id.toString()), t.append("ad_hoc", "true");
  let a = "list/monitor?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function he({
  requirement: e,
  order: t,
  direction: a,
  pageSize: s,
  page: n
}) {
  const r = new URLSearchParams();
  e && r.append("requirement", e.id.toString()), t && r.append("order", t), a && r.append("direction", a), s && r.append("page_size", s.toString()), n && r.append("page", n.toString());
  let o = "list/monitor/measurement/result?" + r.toString();
  const c = await i.get(o), { data: p } = c;
  return {
    items: p._embedded.items,
    amountOfPages: p.page_count,
    currentPage: p.page,
    totalItems: p.total_items,
    hasMore: p.page < p.page_count
  };
}
async function Pe({
  requirement: e,
  result: t,
  order: a,
  direction: s,
  pageSize: n,
  page: r
}) {
  const o = new URLSearchParams();
  e && o.append("requirement", e.id.toString()), t && o.append("result", t.id.toString()), a && o.append("order", a), s && o.append("direction", s), n && o.append("page_size", n.toString()), r && o.append("page", r.toString());
  let c = "list/monitor/measurement/result/step-parameter-value?" + o.toString();
  const p = await i.get(c), { data: m } = p;
  return {
    items: m._embedded.items,
    amountOfPages: m.page_count,
    currentPage: m.page,
    totalItems: m.total_items,
    hasMore: m.page < m.page_count
  };
}
async function we({
  requirement: e
}) {
  const t = new URLSearchParams();
  e && t.append("requirement", e.id.toString());
  let a = "list/monitor/requirement/target?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function ve({
  step: e,
  pageSize: t,
  order: a,
  direction: s
}) {
  const n = new URLSearchParams();
  e !== void 0 && n.append("step", e.id.toString()), t !== void 0 && n.append("page_size", t.toString()), a && n.append("order", a), s && n.append("direction", s);
  let r = "list/monitor/step/file?" + n.toString();
  const o = await i.get(r), { data: c } = o;
  return {
    items: c._embedded.items,
    amountOfPages: c.page_count,
    currentPage: c.page,
    totalItems: c.total_items,
    hasMore: c.page < c.page_count
  };
}
async function Re({
  step: e,
  requirement: t,
  pageSize: a,
  order: s,
  direction: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("step", e.id.toString()), t !== void 0 && r.append("requirement", t.id.toString()), a !== void 0 && r.append("page_size", a.toString()), s && r.append("order", s), n && r.append("direction", n);
  let o = "list/monitor/step/parameter?" + r.toString();
  const c = await i.get(o), { data: p } = c;
  return {
    items: p._embedded.items,
    amountOfPages: p.page_count,
    currentPage: p.page,
    totalItems: p.total_items,
    hasMore: p.page < p.page_count
  };
}
async function Ie({ id: e }) {
  let t = "view/run/" + e;
  const a = await i.get(t), { data: s } = a;
  return s;
}
async function Le({ id: e }) {
  let t = "view/run/step/" + e;
  const a = await i.get(t), { data: s } = a;
  return s;
}
async function Ue({
  step: e,
  run: t
}) {
  const a = new URLSearchParams();
  e !== void 0 && a.append("step", String(e.id)), t !== void 0 && a.append("run", String(t.id));
  let s = "list/run/requirement?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function ye({
  run: e,
  page: t
}) {
  const a = new URLSearchParams();
  e !== void 0 && a.append("run", e.id.toString()), a.append("page", t.toString());
  let s = "list/run/changelog?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function Ae({ run: e, level: t }) {
  const a = new URLSearchParams();
  a.append("run", e.id.toString()), a.append("page_size", "10000"), t !== void 0 && a.append("level", `${t}`);
  let s = "list/run/parts?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function Te({
  run: e,
  page: t = 1,
  pageSize: a = 25
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("run", e.id.toString()), s.append("page", t.toString()), s.append("page_size", a.toString());
  let n = "list/run/step?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function be({
  environment: e,
  firstUnfinishedStepEquipment: t
}) {
  const a = new URLSearchParams();
  t !== void 0 && (a.append("operator", "1"), a.append("first_unfinished_step_equipment_id", t.id.toString())), e !== void 0 && a.append("environment", e);
  let s = "list/run?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function Oe({
  measurement: e
}) {
  const t = new URLSearchParams();
  t.append("measurement", String(e.id));
  let a = "/list/run/measurement/result?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function Me({
  runStep: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("step", e.id.toString());
  let a = "list/run/step/checklist?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function Ne(e) {
  if (!e)
    throw new Error("Run step is undefined when trying to start step");
  return await i.create().patch("update/run/step/start/" + e.id, {});
}
async function Ce(e) {
  if (!e)
    throw new Error("Run step is undefined when trying to finish step");
  return await i.create().patch("update/run/step/finish/" + e.id, {});
}
async function Ee({
  step: e,
  pageSize: t
}) {
  const a = new URLSearchParams();
  e !== void 0 && a.append("step", e.id.toString()), t !== void 0 && a.append("page_size", t.toString()), a.append("order", "date-created"), a.append("direction", "DESC");
  let s = "list/run/step/file?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function De({
  runStep: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("step", e.id.toString());
  let a = "list/run/step/parameter?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function Fe({
  step: e,
  run: t,
  runPart: a,
  page_size: s,
  page: n
}) {
  const r = new URLSearchParams();
  e !== void 0 && r.append("step", e.id.toString()), t !== void 0 && r.append("run", t.id.toString()), a !== void 0 && r.append("part", a.id.toString()), n !== void 0 && r.append("page", n.toString()), s !== void 0 ? r.append("page_size", s.toString()) : r.append("page_size", "1000");
  let o = "list/run/step/part?" + r.toString();
  const c = await i.get(o), { data: p } = c;
  return {
    items: p._embedded.items,
    amountOfPages: p.page_count,
    currentPage: p.page,
    totalItems: p.total_items,
    hasMore: p.page < p.page_count
  };
}
async function He({
  part: e,
  step: t,
  page_size: a
}) {
  const s = new URLSearchParams();
  e !== void 0 && s.append("part", e.id.toString()), t !== void 0 && s.append("step", t.id.toString()), a !== void 0 && s.append("page_size", a.toString());
  let n = "list/run/step/part/state?" + s.toString();
  const r = await i.get(n), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function qe({
  runStepPart: e,
  runStepPartAction: t
}) {
  const s = await i.post("create/run/step/part/action", {
    run_step_part_id: e.id,
    type: t
  }), { data: n } = s;
  return n;
}
async function ze({
  runStepPartActions: e
}) {
  const a = await i.post("create/run/step/part/action", {
    items: e.map(({ runStepPart: n, runStepPartAction: r, comment: o }) => ({
      run_step_part_id: n.id,
      type: r,
      ...o !== void 0 ? { comment: o } : {}
    }))
  }), { data: s } = a;
  return s;
}
var g = /* @__PURE__ */ ((e) => (e[e.START = 1] = "START", e[e.FINISH = 2] = "FINISH", e[e.FAIL = 3] = "FAIL", e[e.REWORK = 4] = "REWORK", e[e.SET_REPAIR = 5] = "SET_REPAIR", e[e.CLEAR_REPAIR = 6] = "CLEAR_REPAIR", e[e.SET_TESTING = 7] = "SET_TESTING", e[e.CLEAR_TESTING = 8] = "CLEAR_TESTING", e))(g || {});
function $e(e) {
  return (/* @__PURE__ */ new Map([
    [g.START, "start_processing"],
    [g.FINISH, "finish_processing"],
    [g.FAIL, "fail_processing"],
    [g.REWORK, "rework"],
    [g.SET_REPAIR, "repair"],
    [g.CLEAR_REPAIR, "clear_repairing"],
    [g.SET_TESTING, "test"],
    [g.CLEAR_TESTING, "clear_testing"]
  ])).get(e) ?? null;
}
function We(e) {
  return (/* @__PURE__ */ new Map([
    ["start_processing", g.START],
    ["finish_processing", g.FINISH],
    ["fail_processing", g.FAIL],
    ["rework", g.REWORK],
    ["repair", g.SET_REPAIR],
    ["clear_repairing", g.CLEAR_REPAIR],
    ["test", g.SET_TESTING],
    ["clear_testing", g.CLEAR_TESTING]
  ])).get(e) ?? null;
}
async function je({ id: e }) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("report", e.toString());
  let a = "list/service/event/report/results?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return n._embedded.items;
}
async function xe({ id: e }) {
  let t = await i.get("view/service/event/report/" + e);
  const { data: a } = t;
  return a;
}
async function Ge({ id: e }) {
  const t = new URLSearchParams();
  t.append("report", e.toString());
  let a = "list/service/event/report/results?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return n._embedded.items;
}
async function ke({
  equipmentId: e
}) {
  const t = new URLSearchParams();
  e !== void 0 && t.append("equipment", e.toString());
  let a = "list/service?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function Ke({ template: e, pageSize: t }) {
  const a = new URLSearchParams();
  e !== void 0 && a.append("template", e.id.toString()), t !== void 0 && a.append("page_size", t.toString());
  let s = "list/template/step?" + a.toString();
  const n = await i.get(s), { data: r } = n;
  return {
    steps: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items
  };
}
async function Be({ reworkRecipes: e }) {
  const t = new URLSearchParams();
  e !== void 0 && e.map((r) => r.id).forEach((r) => {
    t.append("rework_recipe_id[]", r.toString());
  });
  let a = "list/template?" + t.toString();
  const s = await i.get(a), { data: n } = s;
  return {
    templates: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items
  };
}
function l(e) {
  return e ? i.create({ baseURL: e }) : i;
}
async function Ve({
  context: e,
  autoApprove: t,
  TTL: a,
  irisServerUrl: s
}) {
  const n = l(s), r = `/v1/${encodeURIComponent(e)}/start_upload`, o = {};
  return t !== void 0 && (o.autoApprove = t), a !== void 0 && (o.TTL = a), (await n.post(r, o)).data;
}
function L(e, t) {
  return t ? new URL(e, t).toString() : e;
}
function P({
  path: e,
  irisServerUrl: t,
  onEvent: a,
  onOpen: s,
  onError: n
}) {
  const r = new AbortController(), o = i.defaults.headers.common.Authorization;
  return {
    start: async () => {
      try {
        const p = await fetch(L(e, t), {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            ...typeof o == "string" ? { Authorization: o } : {}
          },
          signal: r.signal
        });
        if (!p.ok)
          throw new Error(`HTTP ${p.status}`);
        s && s(new Event("open"));
        const m = p.body?.getReader();
        if (!m)
          throw new Error("ReadableStream not supported");
        const f = new TextDecoder();
        let d = "";
        for (; ; ) {
          const { value: _, done: S } = await m.read();
          if (S) break;
          d += f.decode(_, { stream: !0 });
          const u = d.split(`

`);
          d = u.pop() || "";
          for (const w of u) {
            const h = U(w);
            if (h.data && a)
              try {
                const v = JSON.parse(h.data);
                a(v);
              } catch {
                a(h.data);
              }
          }
        }
      } catch {
        n && n(new Event("error"));
      }
    },
    close: () => r.abort()
  };
}
function U(e) {
  const t = e.split(`
`), a = {};
  for (const s of t)
    s.startsWith("data:") ? a.data = (a.data || "") + s.slice(5).trim() : s.startsWith("event:") ? a.type = s.slice(6).trim() : s.startsWith("id:") && (a.id = s.slice(3).trim());
  return a;
}
function Ye({
  context: e,
  ...t
}) {
  return P({
    ...t,
    path: `/v1/${encodeURIComponent(e)}/stream/events`
  });
}
async function Je({
  context: e,
  irisServerUrl: t
}) {
  const a = l(t), s = `/v1/${encodeURIComponent(e)}/list/events`;
  return (await a.get(s)).data;
}
async function Qe({
  fileUploadEventUid: e,
  files: t,
  irisServerUrl: a
}) {
  const s = l(a), n = `/v1/event/${encodeURIComponent(e)}/upload_content`, r = new FormData();
  return t.forEach((c, p) => {
    r.append(`files[${p}][fileName]`, c.fileName), r.append(`files[${p}][file]`, c.file, c.fileName);
  }), (await s.post(n, r)).data;
}
function Xe({
  fileUploadEventUid: e,
  ...t
}) {
  return P({
    ...t,
    path: `/v1/event/stream/status/${encodeURIComponent(e)}`
  });
}
async function Ze({
  fileUploadEventUid: e,
  irisServerUrl: t
}) {
  const a = l(t), s = `/v1/event/view/event/${encodeURIComponent(e)}`;
  return (await a.get(s)).data;
}
async function et({
  fileUploadEventUid: e,
  irisServerUrl: t
}) {
  const a = l(t), s = `/v1/event/${encodeURIComponent(e)}/fail`;
  return (await a.post(s, {})).data;
}
async function tt({
  fileUploadEventUid: e,
  irisServerUrl: t
}) {
  const a = l(t), s = `/v1/event/${encodeURIComponent(e)}/finish`;
  return (await a.post(s, {})).data;
}
async function at({
  fileUploadEventUid: e,
  irisServerUrl: t
}) {
  const a = l(t), s = `/v1/event/${encodeURIComponent(e)}/approve`;
  return (await a.post(s, {})).data;
}
async function nt({
  fileUploadEventUid: e,
  irisServerUrl: t
}) {
  const a = l(t), s = `/v1/event/${encodeURIComponent(e)}/reject`;
  return (await a.post(s, {})).data;
}
var y = /* @__PURE__ */ ((e) => (e.AwaitingApproval = "awaiting_approval", e.Completed = "completed", e.Error = "error", e.Rejected = "rejected", e.Started = "started", e.Syncing = "syncing", e.Uploading = "uploading", e))(y || {}), A = /* @__PURE__ */ ((e) => (e[e.STANDARD_PRODUCT = 1] = "STANDARD_PRODUCT", e[e.NON_STANDARD_PRODUCT = 2] = "NON_STANDARD_PRODUCT", e))(A || {}), T = /* @__PURE__ */ ((e) => (e[e.SOLID = 1] = "SOLID", e[e.LIQUID = 2] = "LIQUID", e[e.GAS = 3] = "GAS", e[e.OTHER = 4] = "OTHER", e))(T || {}), b = /* @__PURE__ */ ((e) => (e[e.Equipment = 1] = "Equipment", e[e.Accessory = 2] = "Accessory", e[e.Storage = 3] = "Storage", e))(b || {}), O = /* @__PURE__ */ ((e) => (e.ProcessNextStepInEquipment = "ProcessNextStepInEquipment", e))(O || {}), M = /* @__PURE__ */ ((e) => (e[e.DEFAULT = 1] = "DEFAULT", e[e.PRIORITY = 2] = "PRIORITY", e[e.ESCALATION = 3] = "ESCALATION", e))(M || {}), N = /* @__PURE__ */ ((e) => (e[e.ACTIVE = 1] = "ACTIVE", e[e.CLOSED = 2] = "CLOSED", e))(N || {}), C = /* @__PURE__ */ ((e) => (e[e.HIDE_ISSUES = 1] = "HIDE_ISSUES", e[e.SHOW_ISSUES = 2] = "SHOW_ISSUES", e[e.COLLAPSE_ISSUES = 3] = "COLLAPSE_ISSUES", e))(C || {}), E = /* @__PURE__ */ ((e) => (e[e.NAME = 1] = "NAME", e[e.MES_NAME = 2] = "MES_NAME", e[e.NUMBER = 3] = "NUMBER", e))(E || {}), D = /* @__PURE__ */ ((e) => (e[e.AREA = 1] = "AREA", e[e.AREA_PER_FACILITY = 2] = "AREA_PER_FACILITY", e[e.ROOM = 3] = "ROOM", e))(D || {}), F = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e))(F || {}), H = /* @__PURE__ */ ((e) => (e[e.RESEARCH = 1] = "RESEARCH", e[e.PRODUCTION = 2] = "PRODUCTION", e))(H || {}), q = /* @__PURE__ */ ((e) => (e[e.IDLE = 0] = "IDLE", e[e.STARTED = 1] = "STARTED", e[e.FINISHED = 2] = "FINISHED", e[e.FAILED = 3] = "FAILED", e[e.REWORK = 4] = "REWORK", e[e.REPAIRING = 5] = "REPAIRING", e[e.TESTING = 6] = "TESTING", e))(q || {});
export {
  T as ChemicalPhysicalStateEnum,
  A as ChemicalStandardProductEnum,
  D as ClassificationsOptionEnum,
  F as DirectionOptionEnum,
  b as EquipmentGrade,
  N as EquipmentModuleIssueStatus,
  M as EquipmentModuleIssueType,
  y as FileUploadEventState,
  E as OrderOptionEnum,
  g as RunStepPartActionEnum,
  q as RunStepPartStateEnum,
  H as RunTypeEnum,
  C as ShowIssuesOptionEnum,
  O as WorkstationComponent,
  $e as actionEnumToName,
  We as actionLabelToEnum,
  G as configureAxiosHeaders,
  x as fileToBase64,
  Ce as finishStep,
  k as getChemicalContainer,
  Q as getEquipment,
  ne as getEquipmentModule,
  $ as getFilter,
  ge as getLocation,
  W as getMe,
  fe as getMonitor,
  me as getRoom,
  Ie as getRun,
  Le as getRunStep,
  xe as getServiceEventReport,
  X as getSetup,
  Z as getStatusMail,
  Ke as getTemplateSteps,
  at as irisApproveUpload,
  et as irisFailUpload,
  tt as irisFinishUpload,
  Je as irisListContextEvents,
  nt as irisRejectUpload,
  Ve as irisStartUpload,
  Xe as irisStreamEvent,
  Ye as irisStreamEventsInContext,
  Qe as irisUploadContent,
  Ze as irisViewEvent,
  K as listChemicalContainerExternalLabels,
  B as listChemicalContainerMethodsOfUse,
  V as listChemicalContainerPurposes,
  Y as listChemicalContainerTypes,
  J as listChemicals,
  re as listEcn,
  ae as listEcnAttachments,
  ee as listEquipment,
  oe as listEquipmentModuleParameters,
  te as listEquipmentStatus,
  se as listIssueAttachments,
  ie as listIssues,
  de as listLocationMessages,
  ue as listLocations,
  Oe as listMeasurementResults,
  ce as listModules,
  Pe as listMonitorRequirementResultMonitorStepParameterValues,
  he as listMonitorRequirementResults,
  we as listMonitorRequirementTargets,
  _e as listMonitorRequirements,
  ve as listMonitorStepFiles,
  Re as listMonitorStepParameters,
  Se as listMonitors,
  je as listReportResult,
  Ue as listRequirements,
  pe as listReservations,
  le as listRooms,
  ye as listRunChangelog,
  Ae as listRunParts,
  Me as listRunStepChecklistItems,
  Ee as listRunStepFiles,
  De as listRunStepParameters,
  He as listRunStepPartActions,
  Fe as listRunStepParts,
  Te as listRunSteps,
  be as listRuns,
  Ge as listServiceEventReportResult,
  ke as listServices,
  Be as listTemplates,
  j as listUsers,
  qe as performRunStepPartAction,
  ze as performRunStepPartActions,
  Ne as startStep
};
//# sourceMappingURL=index.js.map
