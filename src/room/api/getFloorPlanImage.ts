import axios from "axios";

export default async function getFloorPlanImage({
  id,
  lastUpdate,
  ext,
}: {
  id: number;
  lastUpdate: number;
  ext: string;
}): Promise<Blob> {
  const response = await axios.get<Blob>(
    "i/r/fp/" + id + "-" + lastUpdate + "." + encodeURIComponent(ext),
    { responseType: "blob" },
  );

  return response.data;
}
