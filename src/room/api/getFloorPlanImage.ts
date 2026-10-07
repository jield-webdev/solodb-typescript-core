import axios from "axios";

// The floor plan image is served from the server root (/i/r/fp/...), not from the API root (/api/).
// Prefer passing FloorPlan.url, which is already an absolute URL.
export default async function getFloorPlanImage(
  params: { url: string } | { id: number; lastUpdate: number; ext: string },
): Promise<Blob> {
  let url: string;

  if ("url" in params) {
    url = params.url;
  } else {
    const baseUrl = axios.defaults.baseURL ?? "";
    url = new URL(
      "../i/r/fp/" + params.id + "-" + params.lastUpdate + "." + encodeURIComponent(params.ext),
      baseUrl.endsWith("/") ? baseUrl : baseUrl + "/",
    ).toString();
  }

  const response = await axios.get<Blob>(url, { responseType: "blob" });

  return response.data;
}
