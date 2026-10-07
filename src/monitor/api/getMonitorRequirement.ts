import axios from "axios";
import { MonitorRequirement } from "@jield/solodb-typescript-core/monitor/interfaces/monitorRequirement";

export default async function getMonitorRequirement({ id }: { id: number }): Promise<MonitorRequirement> {
  const response = await axios.get<MonitorRequirement>("view/monitor/requirement/" + id);
  return response.data;
}
