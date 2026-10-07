import axios from "axios";
import { MonitorRequirement } from "@jield/solodb-typescript-core/monitor/interfaces/monitorRequirement";

export default async function uploadMonitorRequirementFile({
  requirement,
  filename,
  type,
  content,
}: {
  requirement: MonitorRequirement;
  filename: string;
  type: string;
  /** Data URL (e.g. from FileReader.readAsDataURL) */
  content: string;
}): Promise<Record<string, unknown>> {
  const response = await axios.post<Record<string, unknown>>("update/monitor/requirement/upload-file/" + requirement.id, {
    filename,
    type,
    content,
  });
  return response.data;
}
