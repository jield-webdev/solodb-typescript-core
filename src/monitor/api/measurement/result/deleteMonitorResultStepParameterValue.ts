import axios from "axios";
import { MonitorResultStepParameterValue } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/result/monitorResultStepParameterValue";

export default async function deleteMonitorResultStepParameterValue({
  stepParameterValue,
}: {
  stepParameterValue: MonitorResultStepParameterValue;
}): Promise<void> {
  await axios.delete("delete/monitor/requirement/result/step-parameter-value/" + stepParameterValue.id);
}
