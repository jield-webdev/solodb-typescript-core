import { MonitorMeasurementResult } from "@/monitor/interfaces/measurement/monitorMeasurementResult";
import { MonitorStep } from "@/monitor/interfaces/monitorStep";

export interface MonitorRequirement {
  id: number;
  title: string;
  definition: string;
  method: string;
  sequence: number;
  step: MonitorStep;
  latest_result: MonitorMeasurementResult | null;
}
