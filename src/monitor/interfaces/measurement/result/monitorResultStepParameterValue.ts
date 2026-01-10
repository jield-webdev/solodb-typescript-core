import { MonitorStepParameter } from "@jield/solodb-typescript-core/monitor/interfaces/monitor/step/parameter";
import { MonitorMeasurementResult } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/monitorMeasurementResult";

export interface MonitorResultStepParameterValue {
  id: number;
  date_created: string;
  last_updated: string | null;
  result: MonitorMeasurementResult;
  step_parameter: MonitorStepParameter;
  value: number;
}
