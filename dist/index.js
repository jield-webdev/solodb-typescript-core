import e from "axios";
//#region src/core/api/getFilter.ts
function t(e) {
	let t = { ...e };
	return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([e, t]) => t.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function n({ service: n, environment: r, formResult: i }) {
	let a = new URLSearchParams();
	if (a.append("service", n), r !== void 0 && a.append("environment", r), i !== void 0) {
		let e = JSON.stringify(t(i));
		a.append("formResult", btoa(e));
	}
	let o = "view/filter?" + a.toString(), { data: s } = await e.get(o);
	return {
		filter: s._embedded.items[0],
		facet: s._embedded.items[1]
	};
}
//#endregion
//#region src/core/api/getMe.ts
async function r() {
	let { data: t } = await e.get("me");
	return t;
}
//#endregion
//#region src/core/api/listUsers.ts
async function i({ query: t, selection: n, filter: r, order: i, direction: a, page: o, pageSize: s } = {}) {
	let c = new URLSearchParams();
	t && c.append("query", t), n && c.append("selection", n.toString()), r && Object.entries(r).forEach(([e, t]) => {
		t?.forEach((t) => c.append(`filter[${e}][]`, t.toString()));
	}), i && c.append("order", i), a && c.append("direction", a), o && c.append("page", o.toString()), s && c.append("page_size", s.toString());
	let l = "list/user?" + c.toString(), { data: u } = await e.get(l);
	return {
		items: u._embedded.items,
		amountOfPages: u.page_count,
		currentPage: u.page,
		totalItems: u.total_items,
		hasMore: u.page < u.page_count
	};
}
//#endregion
//#region src/core/functions/fileToBase64.ts
function a(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onload = () => {
			let e = r.result;
			t(e);
		}, r.onerror = n, r.readAsDataURL(e);
	});
}
//#endregion
//#region src/core/functions/configureAxiosHeaders.ts
var o = (t, n) => {
	e.defaults.headers.common.Authorization = "Bearer " + t, e.defaults.headers.common.Accept = "application/json", e.defaults.headers.common["Content-Type"] = "application/json", e.defaults.baseURL = n;
};
//#endregion
//#region src/chemical/api/getChemicalContainer.ts
async function s({ id: t }) {
	let { data: n } = await e.get("view/chemical/container/" + t);
	return n;
}
//#endregion
//#region src/chemical/api/getChemical.ts
async function c({ id: t }) {
	let { data: n } = await e.get("view/chemical/" + t);
	return n;
}
//#endregion
//#region src/chemical/api/getChemicalContainerExternalLabel.ts
async function l({ id: t }) {
	let { data: n } = await e.get("view/chemical/container/external-label/" + t);
	return n;
}
//#endregion
//#region src/chemical/api/listChemicalContainers.ts
async function u({ user: t, location: n, query: r, order: i, direction: a, page: o, page_size: s, filter: c } = {}) {
	let l = new URLSearchParams();
	if (t !== void 0 && l.append("user", t.toString()), n !== void 0 && l.append("location", n.toString()), r && l.append("query", r), i !== void 0 && l.append("order", i), a !== void 0 && l.append("direction", a), o !== void 0 && l.append("page", o.toString()), s !== void 0 && l.append("page_size", s.toString()), c !== void 0) for (let [e, t] of Object.entries(c)) for (let n of t ?? []) l.append(`filter[${e}][]`, String(n));
	let u = "list/chemical/container?" + l.toString(), { data: d } = await e.get(u);
	return {
		items: d._embedded.items,
		amountOfPages: d.page_count,
		currentPage: d.page,
		totalItems: d.total_items,
		hasMore: d.page < d.page_count
	};
}
//#endregion
//#region src/chemical/api/listChemicalContainerExternalLabels.ts
async function d({ qrCodeContent: t }) {
	let n = new URLSearchParams();
	n.append("qr_code_content", t);
	let r = "list/chemical/container/external-label?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/chemical/api/listChemicalContainerMethodsOfUse.ts
async function f({ query: t }) {
	let n = new URLSearchParams();
	t && n.append("query", t);
	let r = "list/chemical/container/method-of-use?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/chemical/api/listChemicalContainerPurposes.ts
async function p({ query: t }) {
	let n = new URLSearchParams();
	t && n.append("query", t);
	let r = "list/chemical/container/purpose?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/chemical/api/listChemicalContainerTypes.ts
async function m({ query: t }) {
	let n = new URLSearchParams();
	t && n.append("query", t);
	let r = "list/chemical/container/type?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/chemical/api/listChemicals.ts
async function ee({ query: t, order: n, direction: r, filter: i, page: a, page_size: o } = {}) {
	let s = new URLSearchParams();
	t && s.append("query", t), n !== void 0 && s.append("order", n), r !== void 0 && s.append("direction", r), a !== void 0 && s.append("page", a.toString()), o !== void 0 && s.append("page_size", o.toString());
	for (let e of i?.general ?? []) s.append("filter[general][]", e);
	let c = "list/chemical?" + s.toString(), { data: l } = await e.get(c);
	return {
		items: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items,
		hasMore: l.page < l.page_count
	};
}
//#endregion
//#region src/equipment/api/getEquipment.ts
async function te({ id: t }) {
	let { data: n } = await e.get("view/equipment/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/getSetup.ts
async function ne({ id: t }) {
	let { data: n } = await e.get("view/setup/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/getStatusMail.ts
async function re({ id: t }) {
	let { data: n } = await e.get("view/status-mail/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/listEquipment.ts
function ie(e) {
	let t = { ...e };
	return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([e, t]) => t.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function ae({ environment: t, run: n, room: r, statusMail: i, hasWorkstationComponents: a, page: o, pageSize: s, number: c, query: l, filter: u, order: d, direction: f } = {}) {
	let p = new URLSearchParams();
	t !== void 0 && p.append("environment", t), n !== void 0 && p.append("run", (typeof n == "number" ? n : n.id).toString()), r !== void 0 && p.append("room", (typeof r == "number" ? r : r.id).toString()), a !== void 0 && p.append("has_workstation_components", a.toString()), c !== void 0 && p.append("number", c), l !== void 0 && p.append("query", l), d !== void 0 && p.append("order", d), f !== void 0 && p.append("direction", f), i !== void 0 && (p.append("status_mail", (typeof i == "number" ? i : i.id).toString()), p.append("page_size", "1000")), u !== void 0 && (u = ie(u), p.append("filter", btoa(JSON.stringify(u)))), o !== void 0 && p.append("page", o.toString()), s !== void 0 && p.set("page_size", s.toString());
	let { data: m } = await e.get("list/equipment?" + p.toString());
	return {
		items: m._embedded.items,
		amountOfPages: m.page_count,
		currentPage: m.page,
		totalItems: m.total_items,
		hasMore: m.page < m.page_count
	};
}
//#endregion
//#region src/equipment/api/listEquipmentStatus.ts
async function oe() {
	let t = "list/equipment/status?" + new URLSearchParams().toString(), { data: n } = await e.get(t);
	return {
		items: n._embedded.items,
		amountOfPages: n.page_count,
		currentPage: n.page,
		totalItems: n.total_items,
		hasMore: n.page < n.page_count
	};
}
//#endregion
//#region src/equipment/api/module/ecn/listEcnAttachments.ts
async function h({ equipment: t, module: n, statusMail: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("equipment", t.id.toString()), n !== void 0 && i.append("module", n.id.toString()), r !== void 0 && (i.append("status_mail", r.id.toString()), i.append("page_size", "1000"));
	let a = "list/equipment/module/ecn/attachment?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/equipment/api/module/getEquipmentModule.ts
async function g({ id: t }) {
	if (isNaN(t)) return null;
	let { data: n } = await e.get("view/equipment/module/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/module/issue/listIssueAttachments.ts
async function _({ equipment: t, module: n, statusMail: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("equipment", t.id.toString()), n !== void 0 && i.append("module", n.id.toString()), r !== void 0 && (i.append("status_mail", r.id.toString()), i.append("page_size", "1000"));
	let a = "list/equipment/module/issue/attachment?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listEcn.ts
async function v({ equipment: t, module: n, statusMail: r, query: i, filterGeneral: a, order: o, direction: s, page: c, pageSize: l }) {
	let u = new URLSearchParams();
	t !== void 0 && u.append("equipment", t.id.toString()), n !== void 0 && u.append("module", n.id.toString()), r !== void 0 && (u.append("status_mail", r.id.toString()), u.append("page_size", "1000")), i !== void 0 && u.append("query", i), a !== void 0 && a.forEach((e) => u.append("filter[general][]", e)), o !== void 0 && u.append("order", o), s !== void 0 && u.append("direction", s), c !== void 0 && u.append("page", c.toString()), l !== void 0 && u.set("page_size", l.toString());
	let d = "list/equipment/module/ecn?" + u.toString(), { data: f } = await e.get(d);
	return {
		items: f._embedded.items,
		amountOfPages: f.page_count,
		currentPage: f.page,
		totalItems: f.total_items,
		hasMore: f.page < f.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listEquipmentModuleParameters.ts
async function y({ module: t, pageSize: n, order: r, direction: i }) {
	let a = new URLSearchParams();
	t !== void 0 && a.append("module", t.id.toString()), n !== void 0 && a.append("page_size", n.toString()), r && a.append("order", r), i && a.append("direction", i);
	let o = "list/equipment/module/parameter?" + a.toString(), { data: s } = await e.get(o);
	return {
		items: s._embedded.items,
		amountOfPages: s.page_count,
		currentPage: s.page,
		totalItems: s.total_items,
		hasMore: s.page < s.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listIssues.ts
async function b({ equipment: t, module: n, statusMail: r, query: i, filterGeneral: a, order: o, direction: s, page: c, pageSize: l }) {
	let u = new URLSearchParams();
	t !== void 0 && u.append("equipment", t.id.toString()), n !== void 0 && u.append("module", n.id.toString()), r !== void 0 && (u.append("status_mail", r.id.toString()), u.append("page_size", "1000")), i !== void 0 && u.append("query", i), a !== void 0 && a.forEach((e) => u.append("filter[general][]", e)), o !== void 0 && u.append("order", o), s !== void 0 && u.append("direction", s), c !== void 0 && u.append("page", c.toString()), l !== void 0 && u.set("page_size", l.toString());
	let d = "list/equipment/module/issue?" + u.toString(), { data: f } = await e.get(d);
	return {
		items: f._embedded.items,
		amountOfPages: f.page_count,
		currentPage: f.page,
		totalItems: f.total_items,
		hasMore: f.page < f.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listModules.ts
async function x({ equipment: t, statusMail: n, run: r, type: i, query: a, page: o, pageSize: s }) {
	let c = new URLSearchParams();
	t !== void 0 && c.append("equipment", t.id.toString()), n !== void 0 && (c.append("status_mail", n.id.toString()), c.append("page_size", "10000")), r !== void 0 && c.append("run", r.id.toString()), i !== void 0 && c.append("type", (typeof i == "number" ? i : i.id).toString()), a !== void 0 && c.append("query", a), o !== void 0 && c.append("page", o.toString()), s !== void 0 && c.set("page_size", s.toString());
	let l = "list/equipment/module?" + c.toString(), { data: u } = await e.get(l);
	return {
		items: u._embedded.items,
		amountOfPages: u.page_count,
		currentPage: u.page,
		totalItems: u.total_items,
		hasMore: u.page < u.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listReservations.ts
async function S({ equipment: t, module: n, which: r, order: i, direction: a, page: o, pageSize: s }) {
	let c = new URLSearchParams();
	t !== void 0 && c.append("equipment", t.id.toString()), n !== void 0 && c.append("module", n.id.toString()), r !== void 0 && c.append("which", r), i !== void 0 && c.append("order", i), a !== void 0 && c.append("direction", a), o !== void 0 && c.append("page", o.toString()), s !== void 0 && c.append("page_size", s.toString());
	let l = "list/equipment/reservation?" + c.toString(), { data: u } = await e.get(l);
	if (r === void 0 || r === "active") for (let e = 0; e < u._embedded.items.length; e++) u._embedded.items[e].active = !0;
	return {
		items: u._embedded.items,
		amountOfPages: u.page_count,
		currentPage: u.page,
		totalItems: u.total_items,
		hasMore: u.page < u.page_count
	};
}
//#endregion
//#region src/location/api/listLocationMessages.ts
async function C({ statusMail: t, query: n, order: r, direction: i, pageSize: a, page: o } = {}) {
	let s = new URLSearchParams();
	t !== void 0 && (s.append("status_mail", t.id.toString()), s.append("page_size", "1000")), n !== void 0 && s.append("query", n), r !== void 0 && s.append("order", r), i !== void 0 && s.append("direction", i), a !== void 0 && s.set("page_size", a.toString()), o !== void 0 && s.append("page", o.toString());
	let c = "list/location/message?" + s.toString(), { data: l } = await e.get(c);
	return {
		items: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items,
		hasMore: l.page < l.page_count
	};
}
//#endregion
//#region src/location/api/listLocationMessageTypes.ts
async function w({ query: t, order: n, direction: r, pageSize: i, page: a } = {}) {
	let o = new URLSearchParams();
	t !== void 0 && o.append("query", t), n !== void 0 && o.append("order", n), r !== void 0 && o.append("direction", r), i !== void 0 && o.append("page_size", i.toString()), a !== void 0 && o.append("page", a.toString());
	let { data: s } = await e.get("list/location/message/type?" + o.toString());
	return {
		items: s._embedded.items,
		amountOfPages: s.page_count,
		currentPage: s.page,
		totalItems: s.total_items,
		hasMore: s.page < s.page_count
	};
}
//#endregion
//#region src/room/api/getZone.ts
async function T({ id: t }) {
	return (await e.get("view/room/zone/" + t)).data;
}
//#endregion
//#region src/room/api/listZones.ts
async function E({ room: t, zoneGroup: n, query: r, order: i, direction: a, pageSize: o, page: s } = {}) {
	let c = new URLSearchParams();
	t !== void 0 && c.append("room", t.toString()), n !== void 0 && c.append("zone_group", n.toString()), r !== void 0 && c.append("query", r), i !== void 0 && c.append("order", i), a !== void 0 && c.append("direction", a), o !== void 0 && c.append("page_size", o.toString()), s !== void 0 && c.append("page", s.toString());
	let { data: l } = await e.get("list/room/zone?" + c.toString());
	return {
		items: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items,
		hasMore: l.page < l.page_count
	};
}
//#endregion
//#region src/room/api/getLocation.ts
async function D({ id: t }) {
	let { data: n } = await e.get("view/location/" + t);
	return n;
}
//#endregion
//#region src/room/api/getRoom.ts
async function O({ id: t }) {
	let { data: n } = await e.get("view/room/" + t);
	return n;
}
//#endregion
//#region src/room/api/getFloorPlanImage.ts
async function k(t) {
	let n;
	if ("url" in t) n = t.url;
	else {
		let r = e.defaults.baseURL ?? "";
		n = new URL("../i/r/fp/" + t.id + "-" + t.lastUpdate + "." + encodeURIComponent(t.ext), r.endsWith("/") ? r : r + "/").toString();
	}
	return (await e.get(n, { responseType: "blob" })).data;
}
//#endregion
//#region src/room/api/getZoneGroup.ts
async function A({ id: t }) {
	return (await e.get("view/room/zone/group/" + t)).data;
}
//#endregion
//#region src/room/api/createRoomFloorPlanItem.ts
async function j({ id: t, floor_plan_id: n, equipment_id: r, zone_group_id: i, points: a }) {
	return (await e.post("create/room/" + t + "/floor-plan/item", {
		floor_plan_id: n,
		equipment_id: r,
		zone_group_id: i,
		points: a
	})).data;
}
//#endregion
//#region src/room/api/deleteRoomFloorPlanItem.ts
async function M({ floorPlanItem: t }) {
	await e.delete("delete/room/floor-plan/item/" + t.id);
}
//#endregion
//#region src/room/api/listLocations.ts
async function N({ room: t, zoneGroup: n, which: r, query: i, order: a, direction: o, pageSize: s = 25, page: c }) {
	let l = new URLSearchParams();
	t && l.append("room", t.id.toString()), n !== void 0 && l.append("zone_group", n.toString()), r !== void 0 && l.append("which", r), i !== void 0 && l.append("query", i), a !== void 0 && l.append("order", a), o !== void 0 && l.append("direction", o), c !== void 0 && l.append("page", c.toString()), l.append("page_size", s.toString());
	let u = "list/location?" + l.toString(), { data: d } = await e.get(u);
	return {
		items: d._embedded.items,
		amountOfPages: d.page_count,
		currentPage: d.page,
		totalItems: d.total_items,
		hasMore: d.page < d.page_count
	};
}
//#endregion
//#region src/room/api/listRoomFloorPlans.ts
async function P({ room: t, pageSize: n, page: r }) {
	let i = new URLSearchParams();
	i.append("room", t.toString()), n !== void 0 && i.append("page_size", n.toString()), r !== void 0 && i.append("page", r.toString());
	let { data: a } = await e.get("list/room/floor-plan?" + i.toString());
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/room/api/listRooms.ts
async function F({ withLocations: t, which: n, query: r, filterGeneral: i, order: a, direction: o, pageSize: s, page: c } = {}) {
	let l = new URLSearchParams();
	n === void 0 ? t && l.append("which", "with_locations") : l.append("which", n), r !== void 0 && l.append("query", r), i !== void 0 && i.forEach((e) => l.append("filter[general][]", e)), a !== void 0 && l.append("order", a), o !== void 0 && l.append("direction", o), s !== void 0 && l.append("page_size", s.toString()), c !== void 0 && l.append("page", c.toString());
	let { data: u } = await e.get("list/room?" + l.toString());
	return {
		items: u._embedded.items,
		amountOfPages: u.page_count,
		currentPage: u.page,
		totalItems: u.total_items,
		hasMore: u.page < u.page_count
	};
}
//#endregion
//#region src/room/api/listZoneGroups.ts
async function I({ which: t, room: n, query: r, order: i, direction: a, pageSize: o, page: s } = {}) {
	let c = new URLSearchParams();
	t !== void 0 && c.append("which", t), n !== void 0 && c.append("room", n.toString()), r !== void 0 && c.append("query", r), i !== void 0 && c.append("order", i), a !== void 0 && c.append("direction", a), o !== void 0 && c.append("page_size", o.toString()), s !== void 0 && c.append("page", s.toString());
	let { data: l } = await e.get("list/room/zone/group?" + c.toString());
	return {
		items: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items,
		hasMore: l.page < l.page_count
	};
}
//#endregion
//#region src/monitor/api/getMonitor.ts
async function L({ id: t }) {
	let { data: n } = await e.get("view/monitor/" + t);
	return n;
}
//#endregion
//#region src/monitor/api/getMonitorRequirement.ts
async function R({ id: t }) {
	return (await e.get("view/monitor/requirement/" + t)).data;
}
//#endregion
//#region src/monitor/api/listMonitorRequirements.ts
async function z({ equipmentId: t, monitorId: n }) {
	let r = new URLSearchParams();
	t !== void 0 && r.append("equipment", t.toString()), n && r.append("monitor", n.toString());
	let i = "list/monitor/requirement?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/monitor/api/listMonitors.ts
async function B({ equipment: t, adHoc: n = !0, pageSize: r, page: i }) {
	let a = new URLSearchParams();
	t != null && a.append("equipment", t.id.toString()), n && a.append("ad_hoc", "true"), r !== void 0 && a.append("page_size", r.toString()), i !== void 0 && a.append("page", i.toString());
	let o = "list/monitor?" + a.toString(), { data: s } = await e.get(o);
	return {
		items: s._embedded.items,
		amountOfPages: s.page_count,
		currentPage: s.page,
		totalItems: s.total_items,
		hasMore: s.page < s.page_count
	};
}
//#endregion
//#region src/monitor/api/measurement/listMonitorRequirementResults.ts
async function V({ requirement: t, order: n, direction: r, pageSize: i, page: a }) {
	let o = new URLSearchParams();
	t && o.append("requirement", t.id.toString()), n && o.append("order", n), r && o.append("direction", r), i && o.append("page_size", i.toString()), a && o.append("page", a.toString());
	let s = "list/monitor/measurement/result?" + o.toString(), { data: c } = await e.get(s);
	return {
		items: c._embedded.items,
		amountOfPages: c.page_count,
		currentPage: c.page,
		totalItems: c.total_items,
		hasMore: c.page < c.page_count
	};
}
//#endregion
//#region src/monitor/api/measurement/result/listMonitorRequirementResultMonitorStepParameterValues.ts
async function H({ requirement: t, result: n, order: r, direction: i, pageSize: a, page: o }) {
	let s = new URLSearchParams();
	t && s.append("requirement", t.id.toString()), n && s.append("result", n.id.toString()), r && s.append("order", r), i && s.append("direction", i), a && s.append("page_size", a.toString()), o && s.append("page", o.toString());
	let c = "list/monitor/measurement/result/step-parameter-value?" + s.toString(), { data: l } = await e.get(c);
	return {
		items: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items,
		hasMore: l.page < l.page_count
	};
}
//#endregion
//#region src/monitor/api/requirement/listMonitorRequirementTargets.ts
async function U({ requirement: t }) {
	let n = new URLSearchParams();
	t && n.append("requirement", t.id.toString());
	let r = "list/monitor/requirement/target?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/monitor/api/step/listMonitorStepFiles.ts
async function W({ step: t, pageSize: n, order: r, direction: i }) {
	let a = new URLSearchParams();
	t !== void 0 && a.append("step", t.id.toString()), n !== void 0 && a.append("page_size", n.toString()), r && a.append("order", r), i && a.append("direction", i);
	let o = "list/monitor/step/file?" + a.toString(), { data: s } = await e.get(o);
	return {
		items: s._embedded.items,
		amountOfPages: s.page_count,
		currentPage: s.page,
		totalItems: s.total_items,
		hasMore: s.page < s.page_count
	};
}
//#endregion
//#region src/monitor/api/step/listMonitorStepParameters.ts
async function G({ step: t, requirement: n, pageSize: r, page: i }) {
	let a = new URLSearchParams();
	t !== void 0 && a.append("step", t.id.toString()), n !== void 0 && a.append("requirement", n.id.toString()), r !== void 0 && a.append("page_size", r.toString()), i !== void 0 && a.append("page", i.toString());
	let o = "list/monitor/step/parameter?" + a.toString(), { data: s } = await e.get(o);
	return {
		items: s._embedded.items,
		amountOfPages: s.page_count,
		currentPage: s.page,
		totalItems: s.total_items,
		hasMore: s.page < s.page_count
	};
}
//#endregion
//#region src/organisation/api/listOrganisationGroups.ts
async function K({ environment: t, query: n, order: r, direction: i, page: a, page_size: o, filter: s } = {}) {
	let c = new URLSearchParams();
	if (t !== void 0 && c.append("environment", t), n !== void 0 && c.append("query", n), r !== void 0 && c.append("order", r), i !== void 0 && c.append("direction", i), a !== void 0 && c.append("page", a.toString()), o !== void 0 && c.append("page_size", o.toString()), s !== void 0) for (let [e, t] of Object.entries(s)) for (let n of t ?? []) c.append(`filter[${e}][]`, String(n));
	let l = "list/organisation/group?" + c.toString(), { data: u } = await e.get(l);
	return {
		items: u._embedded.items,
		amountOfPages: u.page_count,
		currentPage: u.page,
		totalItems: u.total_items,
		hasMore: u.page < u.page_count
	};
}
//#endregion
//#region src/organisation/api/listOrganisationProjects.ts
async function q({ environment: t, query: n, order: r, direction: i, page: a, page_size: o, purpose: s, filter: c } = {}) {
	let l = new URLSearchParams();
	if (t !== void 0 && l.append("environment", t), n !== void 0 && l.append("query", n), r !== void 0 && l.append("order", r), i !== void 0 && l.append("direction", i), a !== void 0 && l.append("page", a.toString()), o !== void 0 && l.append("page_size", o.toString()), s !== void 0 && l.append("purpose", s.toString()), c !== void 0) for (let [e, t] of Object.entries(c)) for (let n of t ?? []) l.append(`filter[${e}][]`, String(n));
	let u = "list/organisation/project?" + l.toString(), { data: d } = await e.get(u);
	return {
		items: d._embedded.items,
		amountOfPages: d.page_count,
		currentPage: d.page,
		totalItems: d.total_items,
		hasMore: d.page < d.page_count
	};
}
//#endregion
//#region src/organisation/api/listOrganisationTeams.ts
async function se({ environment: t, query: n, order: r, direction: i, page: a, page_size: o, purpose: s, filter: c } = {}) {
	let l = new URLSearchParams();
	if (t !== void 0 && l.append("environment", t), n !== void 0 && l.append("query", n), r !== void 0 && l.append("order", r), i !== void 0 && l.append("direction", i), a !== void 0 && l.append("page", a.toString()), o !== void 0 && l.append("page_size", o.toString()), s !== void 0 && l.append("purpose", s.toString()), c !== void 0) for (let [e, t] of Object.entries(c)) for (let n of t ?? []) l.append(`filter[${e}][]`, String(n));
	let u = "list/organisation/team?" + l.toString(), { data: d } = await e.get(u);
	return {
		items: d._embedded.items,
		amountOfPages: d.page_count,
		currentPage: d.page,
		totalItems: d.total_items,
		hasMore: d.page < d.page_count
	};
}
//#endregion
//#region src/run/api/createRun.ts
async function ce({ name: t, motivation: n, group_id: r, team_id: i, project_id: a, parts: o, location: s, run_type: c }) {
	return (await e.post("create/run", {
		name: t,
		motivation: n,
		group_id: r,
		team_id: i,
		project_id: a,
		...o === void 0 ? {} : { parts: o },
		...s === void 0 ? {} : { location: s },
		...c === void 0 ? {} : { run_type: c }
	})).data;
}
//#endregion
//#region src/run/api/createRunParent.ts
async function le({ run_id: t, parent_run_id: n, part_ids: r, amount_per_part: i, description: a }) {
	return (await e.post("create/run/parent", {
		run_id: t,
		parent_run_id: n,
		...r === void 0 ? {} : { part_ids: r },
		...i === void 0 ? {} : { amount_per_part: i },
		...a === void 0 ? {} : { description: a }
	})).data;
}
//#endregion
//#region src/run/api/createSubstrate.ts
async function ue({ run_id: t, substrate_id: n, amount: r }) {
	return (await e.post("create/run/substrate", {
		run_id: t,
		substrate_id: n,
		amount: r
	})).data;
}
//#endregion
//#region src/run/api/deleteFile.ts
async function de({ file: t }) {
	let n = "delete/run/file/" + t.id;
	await e.delete(n);
}
//#endregion
//#region src/run/api/getRun.ts
async function fe({ id: t }) {
	let n = "view/run/" + t, { data: r } = await e.get(n);
	return r;
}
//#endregion
//#region src/run/api/getRunStep.ts
async function pe({ id: t }) {
	let n = "view/run/step/" + t, { data: r } = await e.get(n);
	return r;
}
//#endregion
//#region src/run/api/listFile.ts
async function me({ run: t, query: n, order: r, direction: i, pageSize: a, page: o }) {
	let s = new URLSearchParams();
	s.append("run", t.id.toString()), n !== void 0 && s.append("query", n), r !== void 0 && s.append("order", r), i !== void 0 && s.append("direction", i), a !== void 0 && s.append("page_size", a.toString()), o !== void 0 && s.append("page", o.toString());
	let c = "list/run/file?" + s.toString(), { data: l } = await e.get(c);
	return {
		items: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items,
		hasMore: l.page < l.page_count
	};
}
//#endregion
//#region src/run/api/listRequirements.ts
async function he({ step: t, run: n, pageSize: r, page: i }) {
	let a = new URLSearchParams();
	t !== void 0 && a.append("step", String(t.id)), n !== void 0 && a.append("run", String(n.id)), r !== void 0 && a.append("page_size", r.toString()), i !== void 0 && a.append("page", i.toString());
	let o = "list/run/requirement?" + a.toString(), { data: s } = await e.get(o);
	return {
		items: s._embedded.items,
		amountOfPages: s.page_count,
		currentPage: s.page,
		totalItems: s.total_items,
		hasMore: s.page < s.page_count
	};
}
//#endregion
//#region src/run/api/listRunChangelog.ts
async function ge({ run: t, page: n, pageSize: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("run", t.id.toString()), i.append("page", n.toString()), r !== void 0 && i.append("page_size", r.toString());
	let a = "list/run/changelog?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/run/api/listRunParts.ts
async function _e({ run: t, level: n }) {
	let r = new URLSearchParams();
	r.append("run", t.id.toString()), r.append("page_size", "10000"), n !== void 0 && r.append("level", `${n}`);
	let i = "list/run/parts?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/run/api/listRunSteps.ts
async function ve({ run: t, page: n = 1, pageSize: r = 25 }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("run", t.id.toString()), i.append("page", n.toString()), i.append("page_size", r.toString());
	let a = "list/run/step?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/run/api/listRuns.ts
async function ye({ environment: t, operator: n, firstUnfinishedStepEquipment: r, availableAsParentForRun: i, query: a, order: o, direction: s, pageSize: c, page: l, runLabel: u, generalFilter: d }) {
	let f = new URLSearchParams();
	if (n === !0 && f.append("operator", "1"), r !== void 0 && f.append("first_unfinished_step_equipment_id", r === null ? "" : r.id.toString()), t !== void 0 && f.append("environment", t), i != null && f.append("available_as_parent_for_run", i.id.toString()), u !== void 0 && f.append("run_label", u), d !== void 0) for (let e of d) f.append("filter[general][]", e);
	a !== void 0 && f.append("query", a), o !== void 0 && f.append("order", o), s !== void 0 && f.append("direction", s), c !== void 0 && f.append("page_size", c.toString()), l !== void 0 && f.append("page", l.toString());
	let p = "list/run?" + f.toString(), { data: m } = await e.get(p);
	return {
		items: m._embedded.items,
		amountOfPages: m.page_count,
		currentPage: m.page,
		totalItems: m.total_items,
		hasMore: m.page < m.page_count
	};
}
//#endregion
//#region src/run/api/uploadFile.ts
async function be({ filename: t, type: n, content: r, run: i, step: a }) {
	let { data: o } = await e.post("create/file/upload-file", {
		filename: t,
		type: n,
		content: r,
		...i === void 0 ? {} : { run: i.id },
		...a === void 0 ? {} : { step: a.id }
	});
	return o;
}
//#endregion
//#region src/run/api/measurement/listResults.ts
async function xe({ measurement: t }) {
	let n = new URLSearchParams();
	n.append("measurement", String(t.id));
	let r = "list/run/measurement/result?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/run/api/step/listRunStepChecklistItems.ts
async function Se({ runStep: t, pageSize: n, page: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("step", t.id.toString()), n !== void 0 && i.append("page_size", n.toString()), r !== void 0 && i.append("page", r.toString());
	let a = "list/run/step/checklist?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/run/api/step/startStep.ts
async function Ce(t) {
	if (!t) throw Error("Run step is undefined when trying to start step");
	return await e.create().patch("update/run/step/start/" + t.id, {});
}
//#endregion
//#region src/run/api/step/finishStep.ts
async function we(t) {
	if (!t) throw Error("Run step is undefined when trying to finish step");
	return await e.create().patch("update/run/step/finish/" + t.id, {});
}
//#endregion
//#region src/run/api/step/listRunStepFiles.ts
async function Te({ step: t, pageSize: n, page: r, query: i }) {
	let a = new URLSearchParams();
	t !== void 0 && a.append("step", t.id.toString()), r !== void 0 && a.append("page", r.toString()), i !== void 0 && a.append("query", i), n !== void 0 && a.append("page_size", n.toString()), a.append("order", "date-created"), a.append("direction", "DESC");
	let o = "list/run/step/file?" + a.toString(), { data: s } = await e.get(o);
	return {
		items: s._embedded.items,
		amountOfPages: s.page_count,
		currentPage: s.page,
		totalItems: s.total_items,
		hasMore: s.page < s.page_count
	};
}
//#endregion
//#region src/run/api/step/listRunStepParameters.ts
async function Ee({ runStep: t, pageSize: n, page: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("step", t.id.toString()), n !== void 0 && i.append("page_size", n.toString()), r !== void 0 && i.append("page", r.toString());
	let a = "list/run/step/parameter?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/run/api/step/listRunStepParts.ts
async function De({ step: t, run: n, runPart: r, page_size: i, page: a }) {
	let o = new URLSearchParams();
	if (t !== void 0 && o.append("step", t.id.toString()), n !== void 0 && o.append("run", n.id.toString()), r !== void 0) for (let e of r) o.append("part[]", e.id.toString());
	a !== void 0 && o.append("page", a.toString()), i === void 0 ? o.append("page_size", "1000") : o.append("page_size", i.toString());
	let s = "list/run/step/part?" + o.toString(), { data: c } = await e.get(s);
	return {
		items: c._embedded.items,
		amountOfPages: c.page_count,
		currentPage: c.page,
		totalItems: c.total_items,
		hasMore: c.page < c.page_count
	};
}
//#endregion
//#region src/run/api/step/part/listRunStepPartActions.ts
async function Oe({ part: t, step: n, page_size: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("stepPart", t.id.toString()), n !== void 0 && i.append("step", n.id.toString()), r !== void 0 && i.append("page_size", r.toString());
	let a = "list/run/step/part/state?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/run/api/step/part/updateRunStepPartTray.ts
async function ke(t, n, r, i, a, o) {
	if (!t || !n && !o || !i || !r) throw Error("Invalid values when trying to update run step part tray");
	let s = {
		tray_row: r,
		tray_column: i
	};
	return n && (s.tray_id = n.id), a != null && (s.update_subsequent = a), o != null && (s.extra_tray_id = o), await e.create().patch(`update/run/step/part/${t.id}/tray`, s);
}
//#endregion
//#region src/run/api/step/part/performRunStepPartAction.ts
async function Ae({ runStepPart: t, runStepPartAction: n, comment: r }) {
	let { data: i } = await e.post("create/run/step/part/action", {
		run_step_part_id: t.id,
		type: n,
		...r === void 0 ? {} : { comment: r }
	});
	return i;
}
//#endregion
//#region src/run/api/step/part/performRunStepPartActions.ts
async function je({ runStepPartActions: t }) {
	let { data: n } = await e.post("create/run/step/part/action", { items: t.map(({ runStepPart: e, runStepPartAction: t, comment: n }) => ({
		run_step_part_id: e.id,
		type: t,
		...n === void 0 ? {} : { comment: n }
	})) });
	return Array.isArray(n) ? n : n.items;
}
//#endregion
//#region src/run/enum/runStepPartActionsEnum.ts
var J = /* @__PURE__ */ function(e) {
	return e[e.START = 1] = "START", e[e.FINISH = 2] = "FINISH", e[e.FAIL = 3] = "FAIL", e[e.REWORK = 4] = "REWORK", e[e.SET_REPAIR = 5] = "SET_REPAIR", e[e.CLEAR_REPAIR = 6] = "CLEAR_REPAIR", e[e.SET_TESTING = 7] = "SET_TESTING", e[e.CLEAR_TESTING = 8] = "CLEAR_TESTING", e;
}({});
//#endregion
//#region src/run/functions/parseRunStepPartActions.ts
function Me(e) {
	return (/* @__PURE__ */ new Map([
		[J.START, "start_processing"],
		[J.FINISH, "finish_processing"],
		[J.FAIL, "fail_processing"],
		[J.REWORK, "rework"],
		[J.SET_REPAIR, "repair"],
		[J.CLEAR_REPAIR, "clear_repairing"],
		[J.SET_TESTING, "test"],
		[J.CLEAR_TESTING, "clear_testing"]
	])).get(e) ?? null;
}
function Ne(e) {
	return (/* @__PURE__ */ new Map([
		["start_processing", J.START],
		["finish_processing", J.FINISH],
		["fail_processing", J.FAIL],
		["rework", J.REWORK],
		["repair", J.SET_REPAIR],
		["clear_repairing", J.CLEAR_REPAIR],
		["test", J.SET_TESTING],
		["clear_testing", J.CLEAR_TESTING],
		["start", J.START],
		["finish", J.FINISH],
		["fail", J.FAIL],
		["set_repair", J.SET_REPAIR],
		["set_testing", J.SET_TESTING]
	])).get(e) ?? null;
}
//#endregion
//#region src/service/api/listServiceEventReportResult.ts
async function Y({ id: t }) {
	let n = [], r = 1, i = 1;
	do {
		let a = new URLSearchParams();
		a.append("report", t.toString()), a.append("page_size", "1000"), a.append("page", r.toString());
		let o = "list/service/event/report/results?" + a.toString(), { data: s } = await e.get(o);
		n.push(...s._embedded.items), i = s.page_count, r++;
	} while (r <= i);
	return n;
}
//#endregion
//#region src/service/api/getReportResult.ts
async function Pe({ id: e }) {
	return Y({ id: e });
}
//#endregion
//#region src/service/api/getServiceEventReport.ts
async function Fe({ id: t }) {
	let { data: n } = await e.get("view/service/event/report/" + t);
	return n;
}
//#endregion
//#region src/service/api/listServices.ts
async function Ie({ equipmentId: t, query: n, order: r, direction: i, pageSize: a = 30, page: o = 1 }) {
	let s = new URLSearchParams();
	t !== void 0 && s.append("equipment", t.toString()), n !== void 0 && s.append("query", n), r !== void 0 && s.append("order", r), i !== void 0 && s.append("direction", i), s.append("page_size", a.toString()), s.append("page", o.toString());
	let c = "list/service?" + s.toString(), { data: l } = await e.get(c);
	return {
		items: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items,
		hasMore: l.page < l.page_count
	};
}
//#endregion
//#region src/template/api/getTemplateSteps.ts
async function Le({ template: t, pageSize: n, page: r }) {
	let i = new URLSearchParams();
	i.append("template", t.id.toString()), r !== void 0 && i.append("page", r.toString()), n !== void 0 && i.append("page_size", n.toString());
	let a = "list/template/step?" + i.toString(), { data: o } = await e.get(a);
	return {
		steps: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items
	};
}
//#endregion
//#region src/template/api/listTemplates.ts
async function Re({ reworkRecipes: t, query: n, order: r, direction: i, pageSize: a, page: o } = {}) {
	let s = new URLSearchParams();
	t !== void 0 && t.map((e) => e.id).forEach((e) => {
		s.append("rework_recipe_id[]", e.toString());
	}), n !== void 0 && s.append("query", n), r !== void 0 && s.append("order", r), i !== void 0 && s.append("direction", i), a !== void 0 && s.append("page_size", a.toString()), o !== void 0 && s.append("page", o.toString());
	let c = "list/template?" + s.toString(), { data: l } = await e.get(c);
	return {
		templates: l._embedded.items,
		amountOfPages: l.page_count,
		currentPage: l.page,
		totalItems: l.total_items
	};
}
//#endregion
//#region src/process/api/getRecipe.ts
async function ze({ id: t }) {
	let { data: n } = await e.get("view/process/module/recipe/" + t);
	return n;
}
//#endregion
//#region src/process/api/getRecipeVersion.ts
async function Be({ id: t }) {
	let { data: n } = await e.get("view/process/module/recipe/version/" + t);
	return n;
}
//#endregion
//#region src/process/api/listRecipes.ts
async function Ve({ filter: t, query: n, order: r, direction: i, pageSize: a, page: o } = {}) {
	let s = new URLSearchParams();
	t?.forEach((e) => {
		s.append("filter[general][]", e);
	}), n !== void 0 && s.append("query", n), r !== void 0 && s.append("order", r), i !== void 0 && s.append("direction", i), a !== void 0 && s.append("page_size", a.toString()), o !== void 0 && s.append("page", o.toString());
	let { data: c } = await e.get("list/process/module/recipe?" + s.toString());
	return {
		recipes: c._embedded.items,
		amountOfPages: c.page_count,
		currentPage: c.page,
		totalItems: c.total_items
	};
}
//#endregion
//#region src/substrate/api/listSubstrate.ts
async function He({ pageSize: t = 25, page: n = 1 }) {
	let r = new URLSearchParams();
	r.append("page_size", t.toString()), r.append("page", n.toString());
	let i = "list/substrate?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/iris/api/createClient.ts
function X(t) {
	return t ? e.create({ baseURL: t }) : e;
}
//#endregion
//#region src/iris/api/startUpload.ts
var Ue = 3600;
async function We({ context: e, autoApprove: t, TTL: n, irisServerUrl: r }) {
	let i = X(r), a = `/v1/${encodeURIComponent(e)}/start_upload`, o = {
		autoApprove: t ?? !1,
		TTL: n ?? Ue
	};
	return (await i.post(a, o)).data;
}
//#endregion
//#region src/iris/api/createEventSource.ts
function Ge(e, t) {
	return t ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : e;
}
function Z({ path: t, irisServerUrl: n, onEvent: r, onOpen: i, onError: a }) {
	let o = new AbortController(), s = e.defaults.headers.common.Authorization;
	return {
		start: async () => {
			try {
				let e = await fetch(Ge(t, n), {
					method: "GET",
					headers: {
						Accept: "text/event-stream",
						...typeof s == "string" ? { Authorization: s } : {}
					},
					signal: o.signal
				});
				if (!e.ok) throw Error(`HTTP ${e.status}`);
				i && i(new Event("open"));
				let a = e.body?.getReader();
				if (!a) throw Error("ReadableStream not supported");
				let c = new TextDecoder(), l = "";
				for (;;) {
					let { value: e, done: t } = await a.read();
					if (t) break;
					l += c.decode(e, { stream: !0 });
					let n = l.split("\n\n");
					l = n.pop() || "";
					for (let e of n) {
						let t = Ke(e);
						if (t.data && r) try {
							r(JSON.parse(t.data));
						} catch {
							r(t.data);
						}
					}
				}
			} catch {
				a && a(new Event("error"));
			}
		},
		close: () => o.abort()
	};
}
function Ke(e) {
	let t = e.split("\n"), n = {};
	for (let e of t) e.startsWith("data:") ? n.data = (n.data || "") + e.slice(5).trim() : e.startsWith("event:") ? n.type = e.slice(6).trim() : e.startsWith("id:") && (n.id = e.slice(3).trim());
	return n;
}
//#endregion
//#region src/iris/api/streamEventsInContext.ts
function qe({ context: e, ...t }) {
	return Z({
		...t,
		path: `/v1/${encodeURIComponent(e)}/stream/events`
	});
}
//#endregion
//#region src/iris/api/listEvents.ts
async function Je({ context: e, irisServerUrl: t }) {
	let n = X(t), r = `/v1/${encodeURIComponent(e)}/list/events`;
	return (await n.get(r)).data;
}
//#endregion
//#region src/iris/api/uploadContent.ts
async function Ye({ fileUploadEventUid: e, files: t, irisServerUrl: n }) {
	let r = X(n), i = `/v1/event/${encodeURIComponent(e)}/upload_content`, a = new FormData();
	return t.forEach((e, t) => {
		a.append(`files[${t}][fileName]`, e.fileName), a.append(`files[${t}][file]`, e.file, e.fileName);
	}), (await r.post(i, a)).data;
}
//#endregion
//#region src/iris/api/streamEvent.ts
function Xe({ fileUploadEventUid: e, ...t }) {
	return Z({
		...t,
		path: `/v1/event/stream/status/${encodeURIComponent(e)}`
	});
}
//#endregion
//#region src/iris/api/viewEvent.ts
async function Ze({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = X(t), r = `/v1/event/view/event/${encodeURIComponent(e)}`;
	return (await n.get(r)).data;
}
//#endregion
//#region src/iris/api/failUpload.ts
async function Qe({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = X(t), r = `/v1/event/${encodeURIComponent(e)}/fail`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/api/finishUpload.ts
async function $e({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = X(t), r = `/v1/event/${encodeURIComponent(e)}/finish`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/api/approveUpload.ts
async function et({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = X(t), r = `/v1/event/${encodeURIComponent(e)}/approve`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/api/rejectUpload.ts
async function tt({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = X(t), r = `/v1/event/${encodeURIComponent(e)}/reject`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/interfaces/state.ts
var nt = /* @__PURE__ */ function(e) {
	return e.AwaitingApproval = "awaiting_approval", e.Completed = "completed", e.Error = "error", e.Rejected = "rejected", e.Started = "started", e.Syncing = "syncing", e.Uploading = "uploading", e;
}({}), rt = /* @__PURE__ */ function(e) {
	return e[e.STANDARD_PRODUCT = 1] = "STANDARD_PRODUCT", e[e.NON_STANDARD_PRODUCT = 2] = "NON_STANDARD_PRODUCT", e;
}({}), it = /* @__PURE__ */ function(e) {
	return e[e.SOLID = 1] = "SOLID", e[e.LIQUID = 2] = "LIQUID", e[e.GAS = 3] = "GAS", e[e.OTHER = 4] = "OTHER", e;
}({}), at = /* @__PURE__ */ function(e) {
	return e.GRAM = "g", e.KILOGRAM = "kg", e.US_POUND = "lb", e.MICROGRAM = "mc", e.MILLIGRAM = "mg", e.OUNCE = "oz", e.TONNES = "to", e.US_TON = "ton", e.CUBIC_INCH = "\"3", e.CUBIC_CENTIMETER = "ccm", e.CENTILITER = "cl", e.CUBIC_DECIMETER = "dm3", e.FLUID_OUNCE_US = "foz", e.CUBIC_FOOT = "ft3", e.US_GALLON = "gal", e.HECTOLITERS = "hl", e.KIT = "kit", e.LITER = "l", e.CUBIC = "m3", e.MILLILITER = "ml", e.CUBIC_MILLIMETER = "mm3", e.ITEM = "pc", e.PIECE = "pce", e.PINT_UL_LIQUID = "pt", e.QUART_UC_LIQUID = "qt", e.CUBIC_YARD = "yd3", e.MICROLITER = "µl", e.TABLETS = "tablets", e;
}({}), ot = /* @__PURE__ */ function(e) {
	return e[e.Equipment = 1] = "Equipment", e[e.Accessory = 2] = "Accessory", e[e.Storage = 3] = "Storage", e;
}({}), st = /* @__PURE__ */ function(e) {
	return e.ProcessNextStepInEquipment = "ProcessNextStepInEquipment", e.Iris = "Iris", e;
}({}), ct = /* @__PURE__ */ function(e) {
	return e[e.DEFAULT = 1] = "DEFAULT", e[e.PRIORITY = 2] = "PRIORITY", e[e.ESCALATION = 3] = "ESCALATION", e;
}({}), Q = /* @__PURE__ */ function(e) {
	return e[e.ACTIVE = 1] = "ACTIVE", e[e.CLOSED = 2] = "CLOSED", e;
}({}), lt = /* @__PURE__ */ function(e) {
	return e[e.HIDE_ISSUES = 1] = "HIDE_ISSUES", e[e.SHOW_ISSUES = 2] = "SHOW_ISSUES", e[e.COLLAPSE_ISSUES = 3] = "COLLAPSE_ISSUES", e;
}({}), ut = /* @__PURE__ */ function(e) {
	return e[e.NAME = 1] = "NAME", e[e.MES_NAME = 2] = "MES_NAME", e[e.NUMBER = 3] = "NUMBER", e;
}({}), dt = /* @__PURE__ */ function(e) {
	return e[e.AREA = 1] = "AREA", e[e.AREA_PER_FACILITY = 2] = "AREA_PER_FACILITY", e[e.ROOM = 3] = "ROOM", e[e.NONE = 4] = "NONE", e;
}({}), ft = /* @__PURE__ */ function(e) {
	return e.ASC = "ASC", e.DESC = "DESC", e;
}({}), pt = /* @__PURE__ */ function(e) {
	return e[e.RESEARCH = 1] = "RESEARCH", e[e.PRODUCTION = 2] = "PRODUCTION", e;
}({}), mt = /* @__PURE__ */ function(e) {
	return e[e.LTR = 1] = "LTR", e[e.TTB = 2] = "TTB", e;
}({}), ht = /* @__PURE__ */ function(e) {
	return e[e.IDLE = 1] = "IDLE", e[e.STARTED = 2] = "STARTED", e[e.FINISHED = 3] = "FINISHED", e[e.FAILED = 4] = "FAILED", e[e.REPAIRING = 5] = "REPAIRING", e[e.TESTING = 6] = "TESTING", e;
}({}), gt = /* @__PURE__ */ function(e) {
	return e[e.Run = 1] = "Run", e[e.Equipment = 2] = "Equipment", e[e.Sensors = 3] = "Sensors", e[e.Substrate = 4] = "Substrate", e[e.Chemicals = 5] = "Chemicals", e;
}({}), _t = /* @__PURE__ */ function(e) {
	return e[e.Run = 1] = "Run", e[e.Service = 2] = "Service", e[e.Quota = 3] = "Quota", e;
}({});
//#endregion
//#region src/chemical/api/createChemical.ts
async function vt({ name: t, standard_product: n, physical_state: r, cas_number: i, description: a, chemical_formula: o }) {
	let { data: s } = await e.post("create/chemical", {
		name: t,
		standard_product: n,
		physical_state: r,
		cas_number: i,
		description: a,
		chemical_formula: o
	});
	return s;
}
//#endregion
//#region src/chemical/api/createChemicalContainer.ts
async function yt({ chemical: t, location: n, user: r, type: i, method_of_use: a, purpose: o, sub_location: s, supplier: c, concentration: l, amount: u, amount_unit: d, expire_date: f }) {
	let { data: p } = await e.post("create/chemical/container", {
		chemical: t,
		location: n,
		user: r,
		type: i,
		method_of_use: a,
		purpose: o,
		sub_location: s,
		supplier: c,
		concentration: l,
		amount: u,
		amount_unit: d,
		expire_date: f
	});
	return p;
}
//#endregion
//#region src/chemical/api/createChemicalContainerExternalLabel.ts
async function bt({ container: t, qr_code_content: n }) {
	let { data: r } = await e.post("create/chemical/container/external-label", {
		container: t,
		qr_code_content: n
	});
	return r;
}
//#endregion
//#region src/equipment/api/module/createEcn.ts
async function xt({ moduleId: t, ecn: n, description: r, owner: i }) {
	return (await e.post("create/equipment/module/ecn", {
		module_id: t,
		ecn: n,
		description: r,
		owner: i
	})).data;
}
//#endregion
//#region src/equipment/api/module/updateEcn.ts
async function St({ id: t, moduleId: n, ecn: r, description: i, owner: a }) {
	return (await e.patch("update/equipment/module/ecn/" + t, {
		module_id: n,
		ecn: r,
		description: i,
		owner: a
	})).data;
}
//#endregion
//#region src/equipment/api/module/deleteEcn.ts
async function Ct({ id: t }) {
	await e.delete("delete/equipment/module/ecn/" + t);
}
//#endregion
//#region src/equipment/api/module/createIssue.ts
async function wt({ moduleId: t, issue: n, description: r, owner: i, status: a = Q.ACTIVE, issueType: o, actions: s, forecastUp: c }) {
	return (await e.post("create/equipment/module/issue", {
		module_id: t,
		issue: n,
		description: r,
		owner: i,
		status: a,
		issue_type: o,
		actions: s,
		forecast_up: c
	})).data;
}
//#endregion
//#region src/equipment/api/module/updateIssue.ts
async function Tt({ id: t, issue: n, description: r, owner: i, status: a, issueType: o, actions: s, forecastUp: c }) {
	return (await e.patch("update/equipment/module/issue/" + t, {
		issue: n,
		description: r,
		owner: i,
		status: a,
		issue_type: o,
		actions: s,
		forecast_up: c
	})).data;
}
//#endregion
//#region src/equipment/api/module/deleteIssue.ts
async function Et({ id: t }) {
	await e.delete("delete/equipment/module/issue/" + t);
}
//#endregion
//#region src/equipment/api/module/ecn/createEcnAttachment.ts
async function Dt(t) {
	await e.post("create/equipment/module/ecn/attachment", t);
}
//#endregion
//#region src/equipment/api/module/ecn/deleteEcnAttachment.ts
async function Ot({ id: t }) {
	await e.delete("delete/equipment/module/ecn/attachment/" + t);
}
//#endregion
//#region src/equipment/api/module/issue/createIssueAttachment.ts
async function kt(t) {
	await e.post("create/equipment/module/issue/attachment", t);
}
//#endregion
//#region src/equipment/api/module/issue/deleteIssueAttachment.ts
async function At({ id: t }) {
	await e.delete("delete/equipment/module/issue/attachment/" + t);
}
//#endregion
//#region src/equipment/api/module/createEquipmentModuleStatus.ts
async function jt({ moduleId: t, status: n, description: r, emailTrainedUsers: i, emailResponsibleUsers: a, user: o }) {
	return (await e.post("create/equipment/module/status", {
		module: t,
		status: n,
		description: r,
		email_trained_users: i,
		email_responsible_users: a,
		user: o
	})).data;
}
//#endregion
//#region src/equipment/api/setup/createSetupEquipment.ts
async function Mt({ setupId: t, equipmentId: n }) {
	return (await e.post("create/setup/equipment/" + t, { equipment_id: n })).data;
}
//#endregion
//#region src/equipment/api/setup/deleteSetupEquipment.ts
async function Nt({ id: t }) {
	await e.delete("delete/setup/equipment/" + t);
}
//#endregion
//#region src/location/api/createLocationMessage.ts
async function Pt({ title: t, description: n, owner: r, type: i, rooms: a }) {
	return (await e.post("create/location/message", {
		title: t,
		description: n,
		owner: r,
		type: i,
		rooms: a ?? []
	})).data;
}
//#endregion
//#region src/location/api/updateLocationMessage.ts
async function Ft({ id: t, title: n, description: r, owner: i, type: a, rooms: o }) {
	return (await e.patch(`update/location/message/${t}`, {
		title: n,
		description: r,
		owner: i,
		type: a,
		rooms: o ?? []
	})).data;
}
//#endregion
//#region src/monitor/api/requirement/createMonitorRequirementResult.ts
async function It({ requirement: t, date: n, values: r }) {
	await e.post("create/monitor/requirement/result", {
		requirement: t.id,
		date: n,
		values: r
	});
}
//#endregion
//#region src/monitor/api/requirement/uploadMonitorRequirementFile.ts
async function Lt({ requirement: t, filename: n, type: r, content: i }) {
	return (await e.post("update/monitor/requirement/upload-file/" + t.id, {
		filename: n,
		type: r,
		content: i
	})).data;
}
//#endregion
//#region src/monitor/api/measurement/result/createMonitorResultStepParameterValue.ts
async function Rt({ result: t, stepParameter: n, value: r }) {
	await e.post("create/monitor/requirement/result/step-parameter-value", {
		result: t.id,
		step_parameter: n.id,
		value: r
	});
}
//#endregion
//#region src/monitor/api/measurement/result/updateMonitorResultStepParameterValue.ts
async function zt({ stepParameterValue: t, value: n }) {
	await e.patch("update/monitor/requirement/result/step-parameter-value/" + t.id, { value: n });
}
//#endregion
//#region src/monitor/api/measurement/result/deleteMonitorResultStepParameterValue.ts
async function Bt({ stepParameterValue: t }) {
	await e.delete("delete/monitor/requirement/result/step-parameter-value/" + t.id);
}
//#endregion
//#region src/run/api/step/skipStep.ts
async function $(t) {
	if (!t) throw Error("Run step is undefined when trying to skip step");
	return e.create().patch("update/run/step/skip/" + t.id, {});
}
//#endregion
//#region src/run/api/step/unSkipStep.ts
async function Vt(t) {
	if (!t) throw Error("Run step is undefined when trying to un-skip step");
	return e.create().patch("update/run/step/un-skip/" + t.id, {});
}
//#endregion
//#region src/run/api/step/updateStep.ts
async function Ht({ runStep: t, remark: n, instructions: r }) {
	let i = {};
	return n !== void 0 && (i.remark = n), r !== void 0 && (i.instructions = r), (await e.create().patch("update/run/step/" + t.id, i)).data;
}
//#endregion
//#region src/run/api/step/reworkStep.ts
async function Ut({ runStep: t, reworkedRunSteps: n, templateSteps: r, comment: i }) {
	return (await e.create().patch("update/run/step/rework/" + t.id, {
		reworked_run_steps: n,
		...r === void 0 ? {} : { template_steps: r },
		...i === void 0 ? {} : { comment: i }
	})).data;
}
//#endregion
//#region src/run/api/step/uploadStepFile.ts
async function Wt({ runStep: t, content: n, filename: r, type: i }) {
	return (await e.create().post("update/run/step/upload-file/" + t.id, {
		content: n,
		filename: r,
		type: i
	})).data;
}
//#endregion
//#region src/run/api/step/deleteStepFile.ts
async function Gt({ file: t }) {
	await e.delete("delete/run/step/file/" + t.id);
}
//#endregion
//#region src/run/api/step/markChecklistItemDone.ts
async function Kt({ checklistItem: t }) {
	return (await e.create().patch("update/run/step/checklist/done/" + t.id, {})).data;
}
//#endregion
//#region src/run/api/step/parameter/saveStepParameterValue.ts
async function qt({ parameter: t, value: n, newValue: r }) {
	return n?.id === void 0 ? (await e.post("create/run/step/parameter/value", {
		parameter: t.id,
		value: r
	})).data : (await e.patch(`update/run/step/parameter/value/${n.id}`, { value: r })).data;
}
//#endregion
//#region src/run/api/step/part/createRunStepPart.ts
async function Jt({ runPart: t, runStep: n, comment: r }) {
	return (await e.post("create/run/step/part", {
		run_part_id: t.id,
		run_step_id: n.id,
		...r === void 0 ? {} : { comment: r }
	})).data;
}
//#endregion
//#region src/run/api/step/part/updateRunStepPartComment.ts
async function Yt({ runStepPart: t, comment: n }) {
	return (await e.create().patch("update/run/step/part/" + t.id, { comment: n })).data;
}
//#endregion
//#region src/run/api/listHoldCodes.ts
async function Xt({ pageSize: t, page: n } = {}) {
	let r = new URLSearchParams();
	t !== void 0 && r.append("page_size", t.toString()), n !== void 0 && r.append("page", n.toString());
	let { data: i } = await e.get("list/run/hold-code?" + r.toString());
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/run/api/updateHoldCode.ts
async function Zt({ run: t, holdCode: n, description: r }) {
	return (await e.patch("update/run/hold-code/" + t.id, {
		holdcode: n === null ? null : n.id,
		...r === void 0 ? {} : { description: r }
	})).data;
}
//#endregion
//#region src/run/api/updateBatchCard.ts
async function Qt({ run: t, content: n }) {
	return (await e.create().patch("update/run/batch-card/" + t.id, { content: n })).data;
}
//#endregion
//#region src/run/api/deleteBatchCard.ts
async function $t({ run: t }) {
	await e.create().delete("delete/run/batch-card/" + t.id);
}
//#endregion
//#region src/run/api/measurement/createResult.ts
async function en({ measurement: t, values: n, stepId: r, partId: i, stepPartId: a }) {
	return (await e.post("create/run/measurement/result", {
		measurement: t.id,
		values: n,
		...a === void 0 ? {} : {
			step_part: a,
			part: i ?? 0,
			step: r ?? 0
		}
	})).data;
}
//#endregion
//#region src/run/api/measurement/updateResultValue.ts
async function tn({ resultValue: t, value: n }) {
	return (await e.patch(`update/run/measurement/result/value/${t.id}`, { value: n })).data;
}
//#endregion
//#region src/run/api/measurement/deleteResult.ts
async function nn({ result: t }) {
	await e.delete(`delete/run/measurement/result/${t.id}`);
}
//#endregion
//#region src/equipment/interfaces/setup.ts
var rn = /* @__PURE__ */ function(e) {
	return e[e.FIXED = 1] = "FIXED", e[e.DYNAMIC = 2] = "DYNAMIC", e;
}({}), an = /* @__PURE__ */ function(e) {
	return e[e.NO_RESERVATION_POSSIBLE = 1] = "NO_RESERVATION_POSSIBLE", e[e.SCHEDULER = 2] = "SCHEDULER", e[e.CALENDAR = 3] = "CALENDAR", e;
}({});
//#endregion
export { at as ChemicalContainerAmountUnitEnum, it as ChemicalPhysicalStateEnum, rt as ChemicalStandardProductEnum, dt as ClassificationsOptionEnum, ft as DirectionOptionEnum, ot as EquipmentGrade, Q as EquipmentModuleIssueStatus, ct as EquipmentModuleIssueType, nt as FileUploadEventState, ut as OrderOptionEnum, gt as ProjectPurpose, J as RunStepPartActionEnum, ht as RunStepPartStateEnum, pt as RunTypeEnum, an as SetupReservationTypeEnum, rn as SetupTypeEnum, lt as ShowIssuesOptionEnum, _t as TeamPurpose, mt as TrayTypeOrientationEnum, st as WorkstationComponent, Me as actionEnumToName, Ne as actionLabelToEnum, o as configureAxiosHeaders, vt as createChemical, yt as createChemicalContainer, bt as createChemicalContainerExternalLabel, xt as createEcn, Dt as createEcnAttachment, jt as createEquipmentModuleStatus, wt as createIssue, kt as createIssueAttachment, Pt as createLocationMessage, en as createMeasurementResult, It as createMonitorRequirementResult, Rt as createMonitorResultStepParameterValue, j as createRoomFloorPlanItem, ce as createRun, le as createRunParent, Jt as createRunStepPart, ue as createRunSubstrate, Mt as createSetupEquipment, $t as deleteBatchCard, Ct as deleteEcn, Ot as deleteEcnAttachment, Et as deleteIssue, At as deleteIssueAttachment, nn as deleteMeasurementResult, Bt as deleteMonitorResultStepParameterValue, M as deleteRoomFloorPlanItem, de as deleteRunFile, Nt as deleteSetupEquipment, Gt as deleteStepFile, a as fileToBase64, we as finishStep, c as getChemical, s as getChemicalContainer, l as getChemicalContainerExternalLabel, te as getEquipment, g as getEquipmentModule, n as getFilter, k as getFloorPlanImage, D as getLocation, r as getMe, L as getMonitor, R as getMonitorRequirement, ze as getRecipe, Be as getRecipeVersion, O as getRoom, fe as getRun, pe as getRunStep, Fe as getServiceEventReport, ne as getSetup, re as getStatusMail, Le as getTemplateSteps, T as getZone, A as getZoneGroup, et as irisApproveUpload, Qe as irisFailUpload, $e as irisFinishUpload, Je as irisListContextEvents, tt as irisRejectUpload, We as irisStartUpload, Xe as irisStreamEvent, qe as irisStreamEventsInContext, Ye as irisUploadContent, Ze as irisViewEvent, d as listChemicalContainerExternalLabels, f as listChemicalContainerMethodsOfUse, p as listChemicalContainerPurposes, m as listChemicalContainerTypes, u as listChemicalContainers, ee as listChemicals, v as listEcn, h as listEcnAttachments, ae as listEquipment, y as listEquipmentModuleParameters, oe as listEquipmentStatus, _ as listIssueAttachments, b as listIssues, w as listLocationMessageTypes, C as listLocationMessages, N as listLocations, xe as listMeasurementResults, x as listModules, H as listMonitorRequirementResultMonitorStepParameterValues, V as listMonitorRequirementResults, U as listMonitorRequirementTargets, z as listMonitorRequirements, W as listMonitorStepFiles, G as listMonitorStepParameters, B as listMonitors, K as listOrganisationGroups, q as listOrganisationProjects, se as listOrganisationTeams, Ve as listRecipes, Pe as listReportResult, he as listRequirements, S as listReservations, P as listRoomFloorPlans, F as listRooms, ge as listRunChangelog, me as listRunFile, Xt as listRunHoldCodes, _e as listRunParts, Se as listRunStepChecklistItems, Te as listRunStepFiles, Ee as listRunStepParameters, Oe as listRunStepPartActions, De as listRunStepParts, ve as listRunSteps, ye as listRuns, Y as listServiceEventReportResult, Ie as listServices, He as listSubstrate, Re as listTemplates, i as listUsers, I as listZoneGroups, E as listZones, Kt as markChecklistItemDone, Ae as performRunStepPartAction, je as performRunStepPartActions, Ut as reworkStep, qt as saveStepParameterValue, $ as skipStep, Ce as startStep, Vt as unSkipStep, Qt as updateBatchCard, St as updateEcn, Tt as updateIssue, Ft as updateLocationMessage, tn as updateMeasurementResultValue, zt as updateMonitorResultStepParameterValue, Zt as updateRunHoldCode, Yt as updateRunStepPartComment, ke as updateRunStepPartTray, Ht as updateStep, Lt as uploadMonitorRequirementFile, be as uploadRunFile, Wt as uploadStepFile };

//# sourceMappingURL=index.js.map