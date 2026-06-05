import e from "axios";
//#region src/core/api/getFilter.ts
function t(e) {
	let t = { ...e };
	return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([e, t]) => t.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function n({ service: n, environment: r, formResult: i }) {
	let a = new URLSearchParams();
	if (n !== void 0 && a.append("service", n), r !== void 0 && a.append("environment", r), i !== void 0) {
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
async function i({ query: t, selection: n }) {
	let r = new URLSearchParams();
	t && r.append("query", t), n && r.append("selection", n.toString());
	let i = "list/user?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
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
//#region src/chemical/api/listChemicalContainerExternalLabels.ts
async function c({ qrCodeContent: t }) {
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
async function l({ query: t }) {
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
async function u({ query: t }) {
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
async function d({ query: t }) {
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
async function f({ query: t }) {
	let n = new URLSearchParams();
	t && n.append("query", t);
	let r = "list/chemical?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/equipment/api/getEquipment.ts
async function p({ id: t }) {
	let { data: n } = await e.get("view/equipment/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/getSetup.ts
async function m({ id: t }) {
	let { data: n } = await e.get("view/setup/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/getStatusMail.ts
async function ee({ id: t }) {
	let { data: n } = await e.get("view/status-mail/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/listEquipment.ts
function te(e) {
	let t = { ...e };
	return t.facet = Object.fromEntries(Object.entries(e.facet).filter(([e, t]) => t.values.length > 0)), e.filter.general.length <= 0 && (t.filter = {}), t;
}
async function ne({ environment: t, run: n, room: r, statusMail: i, hasWorkstationComponents: a = !1, page: o = 1, pageSize: s = 25, query: c, filter: l, order: u, direction: d }) {
	let f = new URLSearchParams();
	t !== void 0 && f.append("environment", t), n !== void 0 && f.append("run", n.id.toString()), r !== void 0 && f.append("room", r.id.toString()), a && f.append("has_workstation_components", "true"), c !== void 0 && f.append("query", c), u !== void 0 && f.append("order", u), d !== void 0 && f.append("direction", d), i !== void 0 && (f.append("status_mail", i.id.toString()), f.append("page_size", "200")), l !== void 0 && (l = te(l), f.append("filter", btoa(JSON.stringify(l)))), f.append("page", o.toString()), f.append("page_size", s.toString());
	let p = "list/equipment?" + f.toString(), { data: m } = await e.get(p);
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
async function re() {
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
async function ie({ equipment: t, module: n, statusMail: r }) {
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
async function h({ id: t }) {
	if (isNaN(t)) return null;
	let { data: n } = await e.get("view/equipment/module/" + t);
	return n;
}
//#endregion
//#region src/equipment/api/module/issue/listIssueAttachments.ts
async function g({ equipment: t, module: n, statusMail: r }) {
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
async function _({ equipment: t, module: n, statusMail: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("equipment", t.id.toString()), n !== void 0 && i.append("module", n.id.toString()), r !== void 0 && (i.append("status_mail", r.id.toString()), i.append("page_size", "1000"));
	let a = "list/equipment/module/ecn?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listEquipmentModuleParameters.ts
async function v({ module: t, pageSize: n, order: r, direction: i }) {
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
async function y({ equipment: t, module: n, statusMail: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("equipment", t.id.toString()), n !== void 0 && i.append("module", n.id.toString()), r !== void 0 && (i.append("status_mail", r.id.toString()), i.append("page_size", "1000"));
	let a = "list/equipment/module/issue?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listModules.ts
async function b({ equipment: t, statusMail: n, run: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("equipment", t.id.toString()), n !== void 0 && (i.append("status_mail", n.id.toString()), i.append("page_size", "10000")), r !== void 0 && i.append("run", r.id.toString());
	let a = "list/equipment/module?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/equipment/api/module/listReservations.ts
async function x({ equipment: t, module: n, which: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("equipment", t.id.toString()), n !== void 0 && i.append("module", n.id.toString()), r !== void 0 && i.append("which", r);
	let a = "list/equipment/reservation?" + i.toString(), { data: o } = await e.get(a);
	if (r == "active") for (let e = 0; e < o._embedded.items.length; e++) o._embedded.items[e].active = !0;
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/location/api/listLocationMessages.ts
async function S({ statusMail: t }) {
	let n = new URLSearchParams();
	t !== void 0 && (n.append("status_mail", t.id.toString()), n.append("page_size", "1000"));
	let r = "list/location/message?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/room/api/getLocation.ts
async function C({ id: t }) {
	let { data: n } = await e.get("view/location/" + t);
	return n;
}
//#endregion
//#region src/room/api/getRoom.ts
async function w({ id: t }) {
	let { data: n } = await e.get("view/room/" + t);
	return n;
}
//#endregion
//#region src/room/api/listLocations.ts
async function T({ environment: t, room: n, pageSize: r = 25 }) {
	let i = new URLSearchParams();
	t && i.append("environment", t), n && i.append("room", n.id.toString()), i.append("page_size", r.toString());
	let a = "list/location?" + i.toString(), { data: o } = await e.get(a);
	return {
		items: o._embedded.items,
		amountOfPages: o.page_count,
		currentPage: o.page,
		totalItems: o.total_items,
		hasMore: o.page < o.page_count
	};
}
//#endregion
//#region src/room/api/listRooms.ts
async function E({ environment: t, withLocations: n }) {
	let r = new URLSearchParams();
	t && r.append("environment", t), n && r.append("which", "with_locations");
	let i = "list/room?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/monitor/api/getMonitor.ts
async function D({ id: t }) {
	let { data: n } = await e.get("view/monitor/" + t);
	return n;
}
//#endregion
//#region src/monitor/api/listMonitorRequirements.ts
async function O({ equipmentId: t, monitorId: n }) {
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
async function k({ equipment: t }) {
	let n = new URLSearchParams();
	t !== void 0 && n.append("equipment", t.id.toString()), n.append("ad_hoc", "true");
	let r = "list/monitor?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/monitor/api/measurement/listMonitorRequirementResults.ts
async function A({ requirement: t, order: n, direction: r, pageSize: i, page: a }) {
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
async function j({ requirement: t, result: n, order: r, direction: i, pageSize: a, page: o }) {
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
async function M({ requirement: t }) {
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
async function N({ step: t, pageSize: n, order: r, direction: i }) {
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
async function P({ step: t, requirement: n, pageSize: r, order: i, direction: a }) {
	let o = new URLSearchParams();
	t !== void 0 && o.append("step", t.id.toString()), n !== void 0 && o.append("requirement", n.id.toString()), r !== void 0 && o.append("page_size", r.toString()), i && o.append("order", i), a && o.append("direction", a);
	let s = "list/monitor/step/parameter?" + o.toString(), { data: c } = await e.get(s);
	return {
		items: c._embedded.items,
		amountOfPages: c.page_count,
		currentPage: c.page,
		totalItems: c.total_items,
		hasMore: c.page < c.page_count
	};
}
//#endregion
//#region src/run/api/deleteFile.ts
async function F({ file: t }) {
	let n = "delete/run/file/" + t.id;
	await e.delete(n);
}
//#endregion
//#region src/run/api/getRun.ts
async function I({ id: t }) {
	let n = "view/run/" + t, { data: r } = await e.get(n);
	return r;
}
//#endregion
//#region src/run/api/getRunStep.ts
async function L({ id: t }) {
	let n = "view/run/step/" + t, { data: r } = await e.get(n);
	return r;
}
//#endregion
//#region src/run/api/listFile.ts
async function R({ run: t, query: n, order: r, direction: i, pageSize: a, page: o }) {
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
async function z({ step: t, run: n }) {
	let r = new URLSearchParams();
	t !== void 0 && r.append("step", String(t.id)), n !== void 0 && r.append("run", String(n.id));
	let i = "list/run/requirement?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/run/api/listRunChangelog.ts
async function B({ run: t, page: n }) {
	let r = new URLSearchParams();
	t !== void 0 && r.append("run", t.id.toString()), r.append("page", n.toString());
	let i = "list/run/changelog?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/run/api/listRunParts.ts
async function V({ run: t, level: n }) {
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
async function H({ run: t, page: n = 1, pageSize: r = 25 }) {
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
async function U({ environment: t, firstUnfinishedStepEquipment: n }) {
	let r = new URLSearchParams();
	n !== void 0 && (r.append("operator", "1"), r.append("first_unfinished_step_equipment_id", n.id.toString())), t !== void 0 && r.append("environment", t);
	let i = "list/run?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/run/api/uploadFile.ts
async function W({ filename: t, type: n, content: r, run: i, step: a }) {
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
async function G({ measurement: t }) {
	let n = new URLSearchParams();
	n.append("measurement", String(t.id));
	let r = "/list/run/measurement/result?" + n.toString(), { data: i } = await e.get(r);
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
async function K({ runStep: t }) {
	let n = new URLSearchParams();
	t !== void 0 && n.append("step", t.id.toString());
	let r = "list/run/step/checklist?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/run/api/step/startStep.ts
async function q(t) {
	if (!t) throw Error("Run step is undefined when trying to start step");
	return await e.create().patch("update/run/step/start/" + t.id, {});
}
//#endregion
//#region src/run/api/step/finishStep.ts
async function J(t) {
	if (!t) throw Error("Run step is undefined when trying to finish step");
	return await e.create().patch("update/run/step/finish/" + t.id, {});
}
//#endregion
//#region src/run/api/step/listRunStepFiles.ts
async function Y({ step: t, pageSize: n }) {
	let r = new URLSearchParams();
	t !== void 0 && r.append("step", t.id.toString()), n !== void 0 && r.append("page_size", n.toString()), r.append("order", "date-created"), r.append("direction", "DESC");
	let i = "list/run/step/file?" + r.toString(), { data: a } = await e.get(i);
	return {
		items: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items,
		hasMore: a.page < a.page_count
	};
}
//#endregion
//#region src/run/api/step/listRunStepParameters.ts
async function ae({ runStep: t }) {
	let n = new URLSearchParams();
	t !== void 0 && n.append("step", t.id.toString());
	let r = "list/run/step/parameter?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/run/api/step/listRunStepParts.ts
async function oe({ step: t, run: n, runPart: r, page_size: i, page: a }) {
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
async function se({ part: t, step: n, page_size: r }) {
	let i = new URLSearchParams();
	t !== void 0 && i.append("part", t.id.toString()), n !== void 0 && i.append("step", n.id.toString()), r !== void 0 && i.append("page_size", r.toString());
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
async function ce(t, n, r, i) {
	if (!t || !n || !i || !r) throw Error("Invalid values when trying to update run step part tray");
	return await e.create().patch(`update/run/step/part/${t.id}/tray`, {
		tray_id: n.id,
		tray_row: r,
		tray_column: i
	});
}
//#endregion
//#region src/run/api/step/part/performRunStepPartAction.ts
async function le({ runStepPart: t, runStepPartAction: n }) {
	let { data: r } = await e.post("create/run/step/part/action", {
		run_step_part_id: t.id,
		type: n
	});
	return r;
}
//#endregion
//#region src/run/api/step/part/performRunStepPartActions.ts
async function ue({ runStepPartActions: t }) {
	let { data: n } = await e.post("create/run/step/part/action", { items: t.map(({ runStepPart: e, runStepPartAction: t, comment: n }) => ({
		run_step_part_id: e.id,
		type: t,
		...n === void 0 ? {} : { comment: n }
	})) });
	return n;
}
//#endregion
//#region src/run/enum/runStepPartActionsEnum.ts
var X = /* @__PURE__ */ function(e) {
	return e[e.START = 1] = "START", e[e.FINISH = 2] = "FINISH", e[e.FAIL = 3] = "FAIL", e[e.REWORK = 4] = "REWORK", e[e.SET_REPAIR = 5] = "SET_REPAIR", e[e.CLEAR_REPAIR = 6] = "CLEAR_REPAIR", e[e.SET_TESTING = 7] = "SET_TESTING", e[e.CLEAR_TESTING = 8] = "CLEAR_TESTING", e;
}({});
//#endregion
//#region src/run/functions/parseRunStepPartActions.ts
function de(e) {
	return new Map([
		[X.START, "start_processing"],
		[X.FINISH, "finish_processing"],
		[X.FAIL, "fail_processing"],
		[X.REWORK, "rework"],
		[X.SET_REPAIR, "repair"],
		[X.CLEAR_REPAIR, "clear_repairing"],
		[X.SET_TESTING, "test"],
		[X.CLEAR_TESTING, "clear_testing"]
	]).get(e) ?? null;
}
function fe(e) {
	return new Map([
		["start_processing", X.START],
		["finish_processing", X.FINISH],
		["fail_processing", X.FAIL],
		["rework", X.REWORK],
		["repair", X.SET_REPAIR],
		["clear_repairing", X.CLEAR_REPAIR],
		["test", X.SET_TESTING],
		["clear_testing", X.CLEAR_TESTING]
	]).get(e) ?? null;
}
//#endregion
//#region src/service/api/getReportResult.ts
async function pe({ id: t }) {
	let n = new URLSearchParams();
	t !== void 0 && n.append("report", t.toString());
	let r = "list/service/event/report/results?" + n.toString(), { data: i } = await e.get(r);
	return i._embedded.items;
}
//#endregion
//#region src/service/api/getServiceEventReport.ts
async function me({ id: t }) {
	let { data: n } = await e.get("view/service/event/report/" + t);
	return n;
}
//#endregion
//#region src/service/api/listServiceEventReportResult.ts
async function he({ id: t }) {
	let n = new URLSearchParams();
	n.append("report", t.toString());
	let r = "list/service/event/report/results?" + n.toString(), { data: i } = await e.get(r);
	return i._embedded.items;
}
//#endregion
//#region src/service/api/listServices.ts
async function ge({ equipmentId: t }) {
	let n = new URLSearchParams();
	t !== void 0 && n.append("equipment", t.toString());
	let r = "list/service?" + n.toString(), { data: i } = await e.get(r);
	return {
		items: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items,
		hasMore: i.page < i.page_count
	};
}
//#endregion
//#region src/template/api/getTemplateSteps.ts
async function _e({ template: t, pageSize: n }) {
	let r = new URLSearchParams();
	t !== void 0 && r.append("template", t.id.toString()), n !== void 0 && r.append("page_size", n.toString());
	let i = "list/template/step?" + r.toString(), { data: a } = await e.get(i);
	return {
		steps: a._embedded.items,
		amountOfPages: a.page_count,
		currentPage: a.page,
		totalItems: a.total_items
	};
}
//#endregion
//#region src/template/api/listTemplates.ts
async function ve({ reworkRecipes: t }) {
	let n = new URLSearchParams();
	t !== void 0 && t.map((e) => e.id).forEach((e) => {
		n.append("rework_recipe_id[]", e.toString());
	});
	let r = "list/template?" + n.toString(), { data: i } = await e.get(r);
	return {
		templates: i._embedded.items,
		amountOfPages: i.page_count,
		currentPage: i.page,
		totalItems: i.total_items
	};
}
//#endregion
//#region src/iris/api/createClient.ts
function Z(t) {
	return t ? e.create({ baseURL: t }) : e;
}
//#endregion
//#region src/iris/api/startUpload.ts
async function ye({ context: e, autoApprove: t, TTL: n, irisServerUrl: r }) {
	let i = Z(r), a = `/v1/${encodeURIComponent(e)}/start_upload`, o = {};
	return t !== void 0 && (o.autoApprove = t), n !== void 0 && (o.TTL = n), (await i.post(a, o)).data;
}
//#endregion
//#region src/iris/api/createEventSource.ts
function be(e, t) {
	return t ? new URL(e, t).toString() : e;
}
function Q({ path: t, irisServerUrl: n, onEvent: r, onOpen: i, onError: a }) {
	let o = new AbortController(), s = e.defaults.headers.common.Authorization;
	return {
		start: async () => {
			try {
				let e = await fetch(be(t, n), {
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
						let t = xe(e);
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
function xe(e) {
	let t = e.split("\n"), n = {};
	for (let e of t) e.startsWith("data:") ? n.data = (n.data || "") + e.slice(5).trim() : e.startsWith("event:") ? n.type = e.slice(6).trim() : e.startsWith("id:") && (n.id = e.slice(3).trim());
	return n;
}
//#endregion
//#region src/iris/api/streamEventsInContext.ts
function Se({ context: e, ...t }) {
	return Q({
		...t,
		path: `/v1/${encodeURIComponent(e)}/stream/events`
	});
}
//#endregion
//#region src/iris/api/listEvents.ts
async function Ce({ context: e, irisServerUrl: t }) {
	let n = Z(t), r = `/v1/${encodeURIComponent(e)}/list/events`;
	return (await n.get(r)).data;
}
//#endregion
//#region src/iris/api/uploadContent.ts
async function we({ fileUploadEventUid: e, files: t, irisServerUrl: n }) {
	let r = Z(n), i = `/v1/event/${encodeURIComponent(e)}/upload_content`, a = new FormData();
	return t.forEach((e, t) => {
		a.append(`files[${t}][fileName]`, e.fileName), a.append(`files[${t}][file]`, e.file, e.fileName);
	}), (await r.post(i, a)).data;
}
//#endregion
//#region src/iris/api/streamEvent.ts
function Te({ fileUploadEventUid: e, ...t }) {
	return Q({
		...t,
		path: `/v1/event/stream/status/${encodeURIComponent(e)}`
	});
}
//#endregion
//#region src/iris/api/viewEvent.ts
async function Ee({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = Z(t), r = `/v1/event/view/event/${encodeURIComponent(e)}`;
	return (await n.get(r)).data;
}
//#endregion
//#region src/iris/api/failUpload.ts
async function De({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = Z(t), r = `/v1/event/${encodeURIComponent(e)}/fail`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/api/finishUpload.ts
async function Oe({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = Z(t), r = `/v1/event/${encodeURIComponent(e)}/finish`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/api/approveUpload.ts
async function ke({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = Z(t), r = `/v1/event/${encodeURIComponent(e)}/approve`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/api/rejectUpload.ts
async function Ae({ fileUploadEventUid: e, irisServerUrl: t }) {
	let n = Z(t), r = `/v1/event/${encodeURIComponent(e)}/reject`;
	return (await n.post(r, {})).data;
}
//#endregion
//#region src/iris/interfaces/state.ts
var je = /* @__PURE__ */ function(e) {
	return e.AwaitingApproval = "awaiting_approval", e.Completed = "completed", e.Error = "error", e.Rejected = "rejected", e.Started = "started", e.Syncing = "syncing", e.Uploading = "uploading", e;
}({}), Me = /* @__PURE__ */ function(e) {
	return e[e.STANDARD_PRODUCT = 1] = "STANDARD_PRODUCT", e[e.NON_STANDARD_PRODUCT = 2] = "NON_STANDARD_PRODUCT", e;
}({}), Ne = /* @__PURE__ */ function(e) {
	return e[e.SOLID = 1] = "SOLID", e[e.LIQUID = 2] = "LIQUID", e[e.GAS = 3] = "GAS", e[e.OTHER = 4] = "OTHER", e;
}({}), Pe = /* @__PURE__ */ function(e) {
	return e[e.Equipment = 1] = "Equipment", e[e.Accessory = 2] = "Accessory", e[e.Storage = 3] = "Storage", e;
}({}), $ = /* @__PURE__ */ function(e) {
	return e.ProcessNextStepInEquipment = "ProcessNextStepInEquipment", e;
}({}), Fe = /* @__PURE__ */ function(e) {
	return e[e.DEFAULT = 1] = "DEFAULT", e[e.PRIORITY = 2] = "PRIORITY", e[e.ESCALATION = 3] = "ESCALATION", e;
}({}), Ie = /* @__PURE__ */ function(e) {
	return e[e.ACTIVE = 1] = "ACTIVE", e[e.CLOSED = 2] = "CLOSED", e;
}({}), Le = /* @__PURE__ */ function(e) {
	return e[e.HIDE_ISSUES = 1] = "HIDE_ISSUES", e[e.SHOW_ISSUES = 2] = "SHOW_ISSUES", e[e.COLLAPSE_ISSUES = 3] = "COLLAPSE_ISSUES", e;
}({}), Re = /* @__PURE__ */ function(e) {
	return e[e.NAME = 1] = "NAME", e[e.MES_NAME = 2] = "MES_NAME", e[e.NUMBER = 3] = "NUMBER", e;
}({}), ze = /* @__PURE__ */ function(e) {
	return e[e.AREA = 1] = "AREA", e[e.AREA_PER_FACILITY = 2] = "AREA_PER_FACILITY", e[e.ROOM = 3] = "ROOM", e;
}({}), Be = /* @__PURE__ */ function(e) {
	return e.ASC = "ASC", e.DESC = "DESC", e;
}({}), Ve = /* @__PURE__ */ function(e) {
	return e[e.RESEARCH = 1] = "RESEARCH", e[e.PRODUCTION = 2] = "PRODUCTION", e;
}({}), He = /* @__PURE__ */ function(e) {
	return e[e.IDLE = 0] = "IDLE", e[e.STARTED = 1] = "STARTED", e[e.FINISHED = 2] = "FINISHED", e[e.FAILED = 3] = "FAILED", e[e.REWORK = 4] = "REWORK", e[e.REPAIRING = 5] = "REPAIRING", e[e.TESTING = 6] = "TESTING", e;
}({});
//#endregion
export { Ne as ChemicalPhysicalStateEnum, Me as ChemicalStandardProductEnum, ze as ClassificationsOptionEnum, Be as DirectionOptionEnum, Pe as EquipmentGrade, Ie as EquipmentModuleIssueStatus, Fe as EquipmentModuleIssueType, je as FileUploadEventState, Re as OrderOptionEnum, X as RunStepPartActionEnum, He as RunStepPartStateEnum, Ve as RunTypeEnum, Le as ShowIssuesOptionEnum, $ as WorkstationComponent, de as actionEnumToName, fe as actionLabelToEnum, o as configureAxiosHeaders, F as deleteRunFile, a as fileToBase64, J as finishStep, s as getChemicalContainer, p as getEquipment, h as getEquipmentModule, n as getFilter, C as getLocation, r as getMe, D as getMonitor, w as getRoom, I as getRun, L as getRunStep, me as getServiceEventReport, m as getSetup, ee as getStatusMail, _e as getTemplateSteps, ke as irisApproveUpload, De as irisFailUpload, Oe as irisFinishUpload, Ce as irisListContextEvents, Ae as irisRejectUpload, ye as irisStartUpload, Te as irisStreamEvent, Se as irisStreamEventsInContext, we as irisUploadContent, Ee as irisViewEvent, c as listChemicalContainerExternalLabels, l as listChemicalContainerMethodsOfUse, u as listChemicalContainerPurposes, d as listChemicalContainerTypes, f as listChemicals, _ as listEcn, ie as listEcnAttachments, ne as listEquipment, v as listEquipmentModuleParameters, re as listEquipmentStatus, g as listIssueAttachments, y as listIssues, S as listLocationMessages, T as listLocations, G as listMeasurementResults, b as listModules, j as listMonitorRequirementResultMonitorStepParameterValues, A as listMonitorRequirementResults, M as listMonitorRequirementTargets, O as listMonitorRequirements, N as listMonitorStepFiles, P as listMonitorStepParameters, k as listMonitors, pe as listReportResult, z as listRequirements, x as listReservations, E as listRooms, B as listRunChangelog, R as listRunFile, V as listRunParts, K as listRunStepChecklistItems, Y as listRunStepFiles, ae as listRunStepParameters, se as listRunStepPartActions, oe as listRunStepParts, H as listRunSteps, U as listRuns, he as listServiceEventReportResult, ge as listServices, ve as listTemplates, i as listUsers, le as performRunStepPartAction, ue as performRunStepPartActions, q as startStep, ce as updateRunStepPartTray, W as uploadRunFile };

//# sourceMappingURL=index.js.map