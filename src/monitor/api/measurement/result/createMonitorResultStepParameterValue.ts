import axios from "axios";
import { MonitorMeasurementResult } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/monitorMeasurementResult";
import { MonitorStepParameter } from "@jield/solodb-typescript-core/monitor/interfaces/monitor/step/parameter";

export default async function createMonitorResultStepParameterValue({
  result,
  stepParameter,
  value,
}: {
  result: MonitorMeasurementResult;
  stepParameter: MonitorStepParameter;
  value: number | string;
}): Promise<void> {
  await axios.post("create/monitor/requirement/result/step-parameter-value", {
    result: result.id,
    step_parameter: stepParameter.id,
    value,
  });
}
