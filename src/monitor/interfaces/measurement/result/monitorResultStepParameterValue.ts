import { MonitorStepParameter } from "@/monitor/interfaces/monitor/step/parameter";
import { MonitorMeasurementResult } from "@/monitor/interfaces/measurement/monitorMeasurementResult";

export interface MonitorResultStepParameterValue {
  id: number;
  date_created: string;
  last_updated: string | null;
  result: MonitorMeasurementResult;
  step_parameter: MonitorStepParameter;
  value: number;
}
