import axios from "axios";
import { MonitorResultStepParameterValue } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/result/monitorResultStepParameterValue";

export default async function updateMonitorResultStepParameterValue({
  stepParameterValue,
  value,
}: {
  stepParameterValue: MonitorResultStepParameterValue;
  value: number | string;
}): Promise<void> {
  await axios.patch("update/monitor/requirement/result/step-parameter-value/" + stepParameterValue.id, { value });
}
