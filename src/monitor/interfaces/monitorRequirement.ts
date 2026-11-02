import { MonitorMeasurementResult } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/monitorMeasurementResult";
import { MonitorRequirementTarget } from "@jield/solodb-typescript-core/monitor/interfaces/requirement/monitorRequirementTarget";
import { MonitorStep } from "@jield/solodb-typescript-core/monitor/interfaces/monitorStep";

export interface MonitorRequirement {
  id: number;
  title: string;
  definition: string;
  method: string;
  sequence: number;
  step: MonitorStep;
  targets: MonitorRequirementTarget[];
  latest_result: MonitorMeasurementResult | null;
}
