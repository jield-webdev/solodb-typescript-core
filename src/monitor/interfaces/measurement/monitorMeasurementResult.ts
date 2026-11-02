import { MonitorMeasurementResultValue } from "@jield/solodb-typescript-core/monitor/interfaces/measurement/result/monitorStepParameterValue";

export interface MonitorMeasurementResult {
  id: number;
  date_create: string;
  values: MonitorMeasurementResultValue[];
}
