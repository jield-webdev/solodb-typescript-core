import axios from "axios";
import { MonitorRequirement } from "@jield/solodb-typescript-core/monitor/interfaces/monitorRequirement";

export default async function createMonitorRequirementResult({
  requirement,
  date,
  values,
}: {
  requirement: MonitorRequirement;
  /** Date of the result (JS date/datetime string) */
  date: string;
  values: { logging_parameter_id: number; value: number | string }[];
}): Promise<void> {
  await axios.post("create/monitor/requirement/result", {
    requirement: requirement.id,
    date,
    values,
  });
}
