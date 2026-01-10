import { MonitorMeasurementResult } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/monitorMeasurementResult";
import { MonitorStep } from "@jield/solodb-typescript-core/monitor/interfaces/monitorStep";

export interface MonitorRequirement {
  id: number;
  title: string;
  definition: string;
  method: string;
  sequence: number;
  step: MonitorStep;
  latest_result: MonitorMeasurementResult | null;
}
