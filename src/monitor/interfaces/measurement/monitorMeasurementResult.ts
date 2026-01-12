import { MonitorResultStepParameterValue } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/result/monitorResultStepParameterValue";
import { MonitorMeasurementResultValue } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/result/monitorStepParameterValue";

export interface MonitorMeasurementResult {
  id: number;
  date_created: string;
  values: MonitorMeasurementResultValue[];
}
