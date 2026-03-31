import i from "axios";
function v(t) {
  let e = { ...t };
  return e.facet = Object.fromEntries(Object.entries(t.facet).filter(([a, n]) => n.values.length > 0)), t.filter.general.length <= 0 && (e.filter = {}), e;
}
async function W({
  service: t,
  environment: e,
  formResult: a
}) {
  const n = new URLSearchParams();
  if (t !== void 0 && n.append("service", t), e !== void 0 && n.append("environment", e), a !== void 0) {
    let c = JSON.stringify(v(a));
    n.append("formResult", btoa(c));
  }
  let s = "view/filter?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    filter: o._embedded.items[0],
    facet: o._embedded.items[1]
  };
}
async function j() {
  const t = await i.get("me"), { data: e } = t;
  return e;
}
async function x({ query: t, selection: e }) {
  const a = new URLSearchParams();
  t && a.append("query", t), e && a.append("selection", e.toString());
  let n = "list/user?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
function k(t) {
  return new Promise((e, a) => {
    const n = new FileReader();
    n.onload = () => {
      const s = n.result;
      e(s);
    }, n.onerror = a, n.readAsDataURL(t);
  });
}
const B = (t, e) => {
  i.defaults.headers.common.Authorization = "Bearer " + t, i.defaults.headers.common.Accept = "application/json", i.defaults.headers.common["Content-Type"] = "application/json", i.defaults.baseURL = e;
};
async function K({ id: t }) {
  const e = await i.get("view/chemical/container/" + t), { data: a } = e;
  return a;
}
async function V({
  qrCodeContent: t
}) {
  const e = new URLSearchParams();
  e.append("qr_code_content", t);
  let a = "list/chemical/container/external-label?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Y({
  query: t
}) {
  const e = new URLSearchParams();
  t && e.append("query", t);
  let a = "list/chemical/container/method-of-use?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function J({
  query: t
}) {
  const e = new URLSearchParams();
  t && e.append("query", t);
  let a = "list/chemical/container/purpose?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Q({
  query: t
}) {
  const e = new URLSearchParams();
  t && e.append("query", t);
  let a = "list/chemical/container/type?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function X({ query: t }) {
  const e = new URLSearchParams();
  t && e.append("query", t);
  let a = "list/chemical?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Z({ id: t }) {
  const e = await i.get("view/equipment/" + t), { data: a } = e;
  return a;
}
async function tt({ id: t }) {
  const e = await i.get("view/setup/" + t), { data: a } = e;
  return a;
}
async function et({ id: t }) {
  const e = await i.get("view/status-mail/" + t), { data: a } = e;
  return a;
}
function I(t) {
  let e = { ...t };
  return e.facet = Object.fromEntries(Object.entries(t.facet).filter(([a, n]) => n.values.length > 0)), t.filter.general.length <= 0 && (e.filter = {}), e;
}
async function at({
  environment: t,
  run: e,
  room: a,
  statusMail: n,
  hasWorkstationComponents: s = !1,
  page: r = 1,
  pageSize: o = 25,
  query: c,
  filter: p,
  order: g,
  direction: f
}) {
  const u = new URLSearchParams();
  t !== void 0 && u.append("environment", t), e !== void 0 && u.append("run", e.id.toString()), a !== void 0 && u.append("room", a.id.toString()), s && u.append("has_workstation_components", "true"), c !== void 0 && u.append("query", c), g !== void 0 && u.append("order", g), f !== void 0 && u.append("direction", f), n !== void 0 && (u.append("status_mail", n.id.toString()), u.append("page_size", "200")), p !== void 0 && (p = I(p), u.append("filter", btoa(JSON.stringify(p)))), u.append("page", r.toString()), u.append("page_size", o.toString());
  let _ = "list/equipment?" + u.toString();
  const S = await i.get(_), { data: m } = S;
  return {
    items: m._embedded.items,
    amountOfPages: m.page_count,
    currentPage: m.page,
    totalItems: m.total_items,
    hasMore: m.page < m.page_count
  };
}
async function nt() {
  let e = "list/equipment/status?" + new URLSearchParams().toString();
  const a = await i.get(e), { data: n } = a;
  return {
    items: n._embedded.items,
    amountOfPages: n.page_count,
    currentPage: n.page,
    totalItems: n.total_items,
    hasMore: n.page < n.page_count
  };
}
async function st({
  equipment: t,
  module: e,
  statusMail: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("equipment", t.id.toString()), e !== void 0 && n.append("module", e.id.toString()), a !== void 0 && (n.append("status_mail", a.id.toString()), n.append("page_size", "1000"));
  let s = "list/equipment/module/ecn/attachment?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function rt({ id: t }) {
  if (isNaN(t))
    return null;
  const e = await i.get("view/equipment/module/" + t), { data: a } = e;
  return a;
}
async function ot({
  equipment: t,
  module: e,
  statusMail: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("equipment", t.id.toString()), e !== void 0 && n.append("module", e.id.toString()), a !== void 0 && (n.append("status_mail", a.id.toString()), n.append("page_size", "1000"));
  let s = "list/equipment/module/issue/attachment?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function it({
  equipment: t,
  module: e,
  statusMail: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("equipment", t.id.toString()), e !== void 0 && n.append("module", e.id.toString()), a !== void 0 && (n.append("status_mail", a.id.toString()), n.append("page_size", "1000"));
  let s = "list/equipment/module/ecn?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function ct({
  module: t,
  pageSize: e,
  order: a,
  direction: n
}) {
  const s = new URLSearchParams();
  t !== void 0 && s.append("module", t.id.toString()), e !== void 0 && s.append("page_size", e.toString()), a && s.append("order", a), n && s.append("direction", n);
  let r = "list/equipment/module/parameter?" + s.toString();
  const o = await i.get(r), { data: c } = o;
  return {
    items: c._embedded.items,
    amountOfPages: c.page_count,
    currentPage: c.page,
    totalItems: c.total_items,
    hasMore: c.page < c.page_count
  };
}
async function pt({
  equipment: t,
  module: e,
  statusMail: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("equipment", t.id.toString()), e !== void 0 && n.append("module", e.id.toString()), a !== void 0 && (n.append("status_mail", a.id.toString()), n.append("page_size", "1000"));
  let s = "list/equipment/module/issue?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function dt({
  equipment: t,
  statusMail: e,
  run: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("equipment", t.id.toString()), e !== void 0 && (n.append("status_mail", e.id.toString()), n.append("page_size", "10000")), a !== void 0 && n.append("run", a.id.toString());
  let s = "list/equipment/module?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function gt({
  equipment: t,
  module: e,
  which: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("equipment", t.id.toString()), e !== void 0 && n.append("module", e.id.toString()), a !== void 0 && n.append("which", a);
  let s = "list/equipment/reservation?" + n.toString();
  const r = await i.get(s), { data: o } = r;
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
async function ut({
  statusMail: t
}) {
  const e = new URLSearchParams();
  t !== void 0 && (e.append("status_mail", t.id.toString()), e.append("page_size", "1000"));
  let a = "list/location/message?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function mt({ id: t }) {
  const e = await i.get("view/location/" + t), { data: a } = e;
  return a;
}
async function lt({ id: t }) {
  const e = await i.get("view/room/" + t), { data: a } = e;
  return a;
}
async function ft({
  environment: t,
  room: e,
  pageSize: a = 25
}) {
  const n = new URLSearchParams();
  t && n.append("environment", t), e && n.append("room", e.id.toString()), n.append("page_size", a.toString());
  let s = "list/location?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function _t({
  environment: t,
  withLocations: e
}) {
  const a = new URLSearchParams();
  t && a.append("environment", t), e && a.append("which", "with_locations");
  let n = "list/room?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function St({ id: t }) {
  let e = await i.get("view/monitor/" + t);
  const { data: a } = e;
  return a;
}
async function Pt({
  equipmentId: t,
  monitorId: e
}) {
  const a = new URLSearchParams();
  t !== void 0 && a.append("equipment", t.toString()), e && a.append("monitor", e.toString());
  let n = "list/monitor/requirement?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function ht({
  equipment: t
}) {
  const e = new URLSearchParams();
  t !== void 0 && e.append("equipment", t.id.toString()), e.append("ad_hoc", "true");
  let a = "list/monitor?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Rt({
  requirement: t,
  order: e,
  direction: a,
  pageSize: n,
  page: s
}) {
  const r = new URLSearchParams();
  t && r.append("requirement", t.id.toString()), e && r.append("order", e), a && r.append("direction", a), n && r.append("page_size", n.toString()), s && r.append("page", s.toString());
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
async function wt({
  requirement: t,
  result: e,
  order: a,
  direction: n,
  pageSize: s,
  page: r
}) {
  const o = new URLSearchParams();
  t && o.append("requirement", t.id.toString()), e && o.append("result", e.id.toString()), a && o.append("order", a), n && o.append("direction", n), s && o.append("page_size", s.toString()), r && o.append("page", r.toString());
  let c = "list/monitor/measurement/result/step-parameter-value?" + o.toString();
  const p = await i.get(c), { data: g } = p;
  return {
    items: g._embedded.items,
    amountOfPages: g.page_count,
    currentPage: g.page,
    totalItems: g.total_items,
    hasMore: g.page < g.page_count
  };
}
async function vt({
  requirement: t
}) {
  const e = new URLSearchParams();
  t && e.append("requirement", t.id.toString());
  let a = "list/monitor/requirement/target?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function It({
  step: t,
  pageSize: e,
  order: a,
  direction: n
}) {
  const s = new URLSearchParams();
  t !== void 0 && s.append("step", t.id.toString()), e !== void 0 && s.append("page_size", e.toString()), a && s.append("order", a), n && s.append("direction", n);
  let r = "list/monitor/step/file?" + s.toString();
  const o = await i.get(r), { data: c } = o;
  return {
    items: c._embedded.items,
    amountOfPages: c.page_count,
    currentPage: c.page,
    totalItems: c.total_items,
    hasMore: c.page < c.page_count
  };
}
async function yt({
  step: t,
  requirement: e,
  pageSize: a,
  order: n,
  direction: s
}) {
  const r = new URLSearchParams();
  t !== void 0 && r.append("step", t.id.toString()), e !== void 0 && r.append("requirement", e.id.toString()), a !== void 0 && r.append("page_size", a.toString()), n && r.append("order", n), s && r.append("direction", s);
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
async function Ot({ id: t }) {
  let e = "view/run/" + t;
  const a = await i.get(e), { data: n } = a;
  return n;
}
async function Lt({ id: t }) {
  let e = "view/run/step/" + t;
  const a = await i.get(e), { data: n } = a;
  return n;
}
async function Ut({
  step: t,
  run: e
}) {
  const a = new URLSearchParams();
  t !== void 0 && a.append("step", String(t.id)), e !== void 0 && a.append("run", String(e.id));
  let n = "list/run/requirement?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function At({
  run: t,
  page: e
}) {
  const a = new URLSearchParams();
  t !== void 0 && a.append("run", t.id.toString()), a.append("page", e.toString());
  let n = "list/run/changelog?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function bt({ run: t, level: e }) {
  const a = new URLSearchParams();
  a.append("run", t.id.toString()), a.append("page_size", "10000"), e !== void 0 && a.append("level", `${e}`);
  let n = "list/run/parts?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function Nt({
  run: t,
  page: e = 1,
  pageSize: a = 25
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("run", t.id.toString()), n.append("page", e.toString()), n.append("page_size", a.toString());
  let s = "list/run/step?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Ct({
  environment: t,
  firstUnfinishedStepEquipment: e
}) {
  const a = new URLSearchParams();
  e !== void 0 && (a.append("operator", "1"), a.append("first_unfinished_step_equipment_id", e.id.toString())), t !== void 0 && a.append("environment", t);
  let n = "list/run?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
var d = /* @__PURE__ */ ((t) => (t[t.START_PROCESSING = 1] = "START_PROCESSING", t[t.FINISH_PROCESSING = 2] = "FINISH_PROCESSING", t[t.FAILED_PROCESSING = 3] = "FAILED_PROCESSING", t[t.REWORK = 4] = "REWORK", t[t.REPAIR = 5] = "REPAIR", t[t.TESTING = 6] = "TESTING", t))(d || {});
function Mt(t) {
  if (t.part_processing_failed_in_previous_step)
    return [];
  const e = t.latest_action?.type.id, a = t.latest_action?.type.name?.toLowerCase() ?? "", n = a.includes("fail"), s = a.includes("finish"), r = a.includes("start"), o = t.failed || e === d.FAILED_PROCESSING || n, c = t.processed || e === d.FINISH_PROCESSING || o || s, p = t.started || t.actions > 0 || c || r, g = [];
  return p || g.push(d.START_PROCESSING), p && !c && g.push(d.FINISH_PROCESSING, d.FAILED_PROCESSING), o && (g.push(d.REWORK), g.push(d.REPAIR)), c && !o && g.push(d.TESTING), g;
}
async function Et({
  measurement: t
}) {
  const e = new URLSearchParams();
  e.append("measurement", String(t.id));
  let a = "/list/run/measurement/result?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Tt({
  runStep: t
}) {
  const e = new URLSearchParams();
  t !== void 0 && e.append("step", t.id.toString());
  let a = "list/run/step/checklist?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function y(t) {
  if (!t)
    throw new Error("Run step is undefined when trying to start step");
  return await i.create().patch("update/run/step/start/" + t.id, {});
}
async function O(t) {
  if (!t)
    throw new Error("Run step is undefined when trying to finish step");
  return await i.create().patch("update/run/step/finish/" + t.id, {});
}
async function Dt({
  step: t,
  pageSize: e
}) {
  const a = new URLSearchParams();
  t !== void 0 && a.append("step", t.id.toString()), e !== void 0 && a.append("page_size", e.toString()), a.append("order", "date-created"), a.append("direction", "DESC");
  let n = "list/run/step/file?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    items: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items,
    hasMore: r.page < r.page_count
  };
}
async function Ft({
  runStep: t
}) {
  const e = new URLSearchParams();
  t !== void 0 && e.append("step", t.id.toString());
  let a = "list/run/step/parameter?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Gt({
  step: t,
  run: e,
  page_size: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("step", t.id.toString()), e !== void 0 && n.append("run", e.id.toString()), a !== void 0 ? n.append("page_size", a.toString()) : n.append("page_size", "10000");
  let s = "list/run/step/part?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function Ht({
  part: t,
  step: e,
  page_size: a
}) {
  const n = new URLSearchParams();
  t !== void 0 && n.append("part", t.id.toString()), e !== void 0 && n.append("step", e.id.toString()), a !== void 0 && n.append("page_size", a.toString());
  let s = "list/run/step/part/action?" + n.toString();
  const r = await i.get(s), { data: o } = r;
  return {
    items: o._embedded.items,
    amountOfPages: o.page_count,
    currentPage: o.page,
    totalItems: o.total_items,
    hasMore: o.page < o.page_count
  };
}
async function L({
  runStepPart: t,
  runStepPartAction: e
}) {
  const n = await i.post("create/run/step/part/action", {
    run_step_part_id: t.id,
    type: e
  }), { data: s } = n;
  return s;
}
async function qt(t, e) {
  const a = t.step;
  return a.is_started || await y(a), await L({ runStepPart: t, runStepPartAction: e });
}
async function zt(t, e) {
  if (t.is_finished || e.length <= 0)
    return !1;
  for (const a of e)
    if (a.latest_action?.type.id !== d.FINISH_PROCESSING)
      return !1;
  return O(t).then(() => !0).catch(() => !1);
}
function $t(t) {
  return (/* @__PURE__ */ new Map([
    [d.START_PROCESSING, "start_processing"],
    [d.FINISH_PROCESSING, "finish_processing"],
    [d.FAILED_PROCESSING, "failed_processing"],
    [d.REWORK, "rework"],
    [d.REPAIR, "repair"],
    [d.TESTING, "testing"]
  ])).get(t) ?? null;
}
function Wt(t) {
  return (/* @__PURE__ */ new Map([
    ["run_step_part_start_processing", d.START_PROCESSING],
    ["run_step_part_finish_processing", d.FINISH_PROCESSING],
    ["run_step_part_failed_processing", d.FAILED_PROCESSING],
    ["run_step_part_rework", d.REWORK],
    ["run_step_part_repair", d.REPAIR],
    ["run_step_part_testing", d.TESTING]
  ])).get(t) ?? null;
}
async function jt({ id: t }) {
  const e = new URLSearchParams();
  t !== void 0 && e.append("report", t.toString());
  let a = "list/service/event/report/results?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return s._embedded.items;
}
async function xt({ id: t }) {
  let e = await i.get("view/service/event/report/" + t);
  const { data: a } = e;
  return a;
}
async function kt({ id: t }) {
  const e = new URLSearchParams();
  e.append("report", t.toString());
  let a = "list/service/event/report/results?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return s._embedded.items;
}
async function Bt({
  equipmentId: t
}) {
  const e = new URLSearchParams();
  t !== void 0 && e.append("equipment", t.toString());
  let a = "list/service?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    items: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items,
    hasMore: s.page < s.page_count
  };
}
async function Kt({ template: t, pageSize: e }) {
  const a = new URLSearchParams();
  t !== void 0 && a.append("template", t.id.toString()), e !== void 0 && a.append("page_size", e.toString());
  let n = "list/template/step?" + a.toString();
  const s = await i.get(n), { data: r } = s;
  return {
    steps: r._embedded.items,
    amountOfPages: r.page_count,
    currentPage: r.page,
    totalItems: r.total_items
  };
}
async function Vt({ reworkRecipes: t }) {
  const e = new URLSearchParams();
  t !== void 0 && t.map((r) => r.id).forEach((r) => {
    e.append("rework_recipe_id[]", r.toString());
  });
  let a = "list/template?" + e.toString();
  const n = await i.get(a), { data: s } = n;
  return {
    templates: s._embedded.items,
    amountOfPages: s.page_count,
    currentPage: s.page,
    totalItems: s.total_items
  };
}
function l(t) {
  return t ? i.create({ baseURL: t }) : i;
}
async function Yt({
  context: t,
  autoApprove: e,
  TTL: a,
  irisServerUrl: n
}) {
  const s = l(n), r = `/v1/${encodeURIComponent(t)}/start_upload`, o = {};
  return e !== void 0 && (o.autoApprove = e), a !== void 0 && (o.TTL = a), (await s.post(r, o)).data;
}
function U(t, e) {
  return e ? new URL(t, e).toString() : t;
}
function h({
  path: t,
  irisServerUrl: e,
  onEvent: a,
  onOpen: n,
  onError: s
}) {
  const r = new AbortController(), o = i.defaults.headers.common.Authorization;
  return {
    start: async () => {
      try {
        const p = await fetch(U(t, e), {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            ...typeof o == "string" ? { Authorization: o } : {}
          },
          signal: r.signal
        });
        if (!p.ok)
          throw new Error(`HTTP ${p.status}`);
        n && n(new Event("open"));
        const g = p.body?.getReader();
        if (!g)
          throw new Error("ReadableStream not supported");
        const f = new TextDecoder();
        let u = "";
        for (; ; ) {
          const { value: _, done: S } = await g.read();
          if (S) break;
          u += f.decode(_, { stream: !0 });
          const m = u.split(`

`);
          u = m.pop() || "";
          for (const R of m) {
            const P = A(R);
            if (P.data && a)
              try {
                const w = JSON.parse(P.data);
                a(w);
              } catch {
                a(P.data);
              }
          }
        }
      } catch {
        s && s(new Event("error"));
      }
    },
    close: () => r.abort()
  };
}
function A(t) {
  const e = t.split(`
`), a = {};
  for (const n of e)
    n.startsWith("data:") ? a.data = (a.data || "") + n.slice(5).trim() : n.startsWith("event:") ? a.type = n.slice(6).trim() : n.startsWith("id:") && (a.id = n.slice(3).trim());
  return a;
}
function Jt({
  context: t,
  ...e
}) {
  return h({
    ...e,
    path: `/v1/${encodeURIComponent(t)}/stream/events`
  });
}
async function Qt({
  context: t,
  irisServerUrl: e
}) {
  const a = l(e), n = `/v1/${encodeURIComponent(t)}/list/events`;
  return (await a.get(n)).data;
}
async function Xt({
  fileUploadEventUid: t,
  files: e,
  irisServerUrl: a
}) {
  const n = l(a), s = `/v1/event/${encodeURIComponent(t)}/upload_content`, r = new FormData();
  return e.forEach((c, p) => {
    r.append(`files[${p}][fileName]`, c.fileName), r.append(`files[${p}][file]`, c.file, c.fileName);
  }), (await n.post(s, r)).data;
}
function Zt({
  fileUploadEventUid: t,
  ...e
}) {
  return h({
    ...e,
    path: `/v1/event/stream/status/${encodeURIComponent(t)}`
  });
}
async function te({
  fileUploadEventUid: t,
  irisServerUrl: e
}) {
  const a = l(e), n = `/v1/event/view/event/${encodeURIComponent(t)}`;
  return (await a.get(n)).data;
}
async function ee({
  fileUploadEventUid: t,
  irisServerUrl: e
}) {
  const a = l(e), n = `/v1/event/${encodeURIComponent(t)}/fail`;
  return (await a.post(n, {})).data;
}
async function ae({
  fileUploadEventUid: t,
  irisServerUrl: e
}) {
  const a = l(e), n = `/v1/event/${encodeURIComponent(t)}/finish`;
  return (await a.post(n, {})).data;
}
async function ne({
  fileUploadEventUid: t,
  irisServerUrl: e
}) {
  const a = l(e), n = `/v1/event/${encodeURIComponent(t)}/approve`;
  return (await a.post(n, {})).data;
}
async function se({
  fileUploadEventUid: t,
  irisServerUrl: e
}) {
  const a = l(e), n = `/v1/event/${encodeURIComponent(t)}/reject`;
  return (await a.post(n, {})).data;
}
var b = /* @__PURE__ */ ((t) => (t.AwaitingApproval = "awaiting_approval", t.Completed = "completed", t.Error = "error", t.Rejected = "rejected", t.Started = "started", t.Syncing = "syncing", t.Uploading = "uploading", t))(b || {}), N = /* @__PURE__ */ ((t) => (t[t.STANDARD_PRODUCT = 1] = "STANDARD_PRODUCT", t[t.NON_STANDARD_PRODUCT = 2] = "NON_STANDARD_PRODUCT", t))(N || {}), C = /* @__PURE__ */ ((t) => (t[t.SOLID = 1] = "SOLID", t[t.LIQUID = 2] = "LIQUID", t[t.GAS = 3] = "GAS", t[t.OTHER = 4] = "OTHER", t))(C || {}), M = /* @__PURE__ */ ((t) => (t[t.Equipment = 1] = "Equipment", t[t.Accessory = 2] = "Accessory", t[t.Storage = 3] = "Storage", t))(M || {}), E = /* @__PURE__ */ ((t) => (t.ProcessNextStepInEquipment = "ProcessNextStepInEquipment", t))(E || {}), T = /* @__PURE__ */ ((t) => (t[t.DEFAULT = 1] = "DEFAULT", t[t.PRIORITY = 2] = "PRIORITY", t[t.ESCALATION = 3] = "ESCALATION", t))(T || {}), D = /* @__PURE__ */ ((t) => (t[t.ACTIVE = 1] = "ACTIVE", t[t.CLOSED = 2] = "CLOSED", t))(D || {}), F = /* @__PURE__ */ ((t) => (t[t.HIDE_ISSUES = 1] = "HIDE_ISSUES", t[t.SHOW_ISSUES = 2] = "SHOW_ISSUES", t[t.COLLAPSE_ISSUES = 3] = "COLLAPSE_ISSUES", t))(F || {}), G = /* @__PURE__ */ ((t) => (t[t.NAME = 1] = "NAME", t[t.MES_NAME = 2] = "MES_NAME", t[t.NUMBER = 3] = "NUMBER", t))(G || {}), H = /* @__PURE__ */ ((t) => (t[t.AREA = 1] = "AREA", t[t.AREA_PER_FACILITY = 2] = "AREA_PER_FACILITY", t[t.ROOM = 3] = "ROOM", t))(H || {}), q = /* @__PURE__ */ ((t) => (t.ASC = "ASC", t.DESC = "DESC", t))(q || {}), z = /* @__PURE__ */ ((t) => (t[t.RESEARCH = 1] = "RESEARCH", t[t.PRODUCTION = 2] = "PRODUCTION", t))(z || {});
export {
  C as ChemicalPhysicalStateEnum,
  N as ChemicalStandardProductEnum,
  H as ClassificationsOptionEnum,
  q as DirectionOptionEnum,
  M as EquipmentGrade,
  D as EquipmentModuleIssueStatus,
  T as EquipmentModuleIssueType,
  b as FileUploadEventState,
  G as OrderOptionEnum,
  d as RunStepPartActionEnum,
  z as RunTypeEnum,
  F as ShowIssuesOptionEnum,
  E as WorkstationComponent,
  $t as actionEnumToName,
  Wt as actionLabelToEnum,
  B as configureAxiosHeaders,
  k as fileToBase64,
  O as finishStep,
  zt as finishStepWhenAllPartsAreFinished,
  Mt as getAvailableRunStepPartActions,
  K as getChemicalContainer,
  Z as getEquipment,
  rt as getEquipmentModule,
  W as getFilter,
  mt as getLocation,
  j as getMe,
  St as getMonitor,
  lt as getRoom,
  Ot as getRun,
  Lt as getRunStep,
  xt as getServiceEventReport,
  tt as getSetup,
  et as getStatusMail,
  Kt as getTemplateSteps,
  ne as irisApproveUpload,
  ee as irisFailUpload,
  ae as irisFinishUpload,
  Qt as irisListContextEvents,
  se as irisRejectUpload,
  Yt as irisStartUpload,
  Zt as irisStreamEvent,
  Jt as irisStreamEventsInContext,
  Xt as irisUploadContent,
  te as irisViewEvent,
  V as listChemicalContainerExternalLabels,
  Y as listChemicalContainerMethodsOfUse,
  J as listChemicalContainerPurposes,
  Q as listChemicalContainerTypes,
  X as listChemicals,
  it as listEcn,
  st as listEcnAttachments,
  at as listEquipment,
  ct as listEquipmentModuleParameters,
  nt as listEquipmentStatus,
  ot as listIssueAttachments,
  pt as listIssues,
  ut as listLocationMessages,
  ft as listLocations,
  Et as listMeasurementResults,
  dt as listModules,
  wt as listMonitorRequirementResultMonitorStepParameterValues,
  Rt as listMonitorRequirementResults,
  vt as listMonitorRequirementTargets,
  Pt as listMonitorRequirements,
  It as listMonitorStepFiles,
  yt as listMonitorStepParameters,
  ht as listMonitors,
  jt as listReportResult,
  Ut as listRequirements,
  gt as listReservations,
  _t as listRooms,
  At as listRunChangelog,
  bt as listRunParts,
  Tt as listRunStepChecklistItems,
  Dt as listRunStepFiles,
  Ft as listRunStepParameters,
  Ht as listRunStepPartActions,
  Gt as listRunStepParts,
  Nt as listRunSteps,
  Ct as listRuns,
  kt as listServiceEventReportResult,
  Bt as listServices,
  Vt as listTemplates,
  x as listUsers,
  qt as performRunStepPartAction,
  L as setRunStepPartAction,
  y as startStep
};
//# sourceMappingURL=index.js.map
