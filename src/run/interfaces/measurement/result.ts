import { MeasurementResultValue } from "@/run/interfaces/measurement/result/value";

export interface MeasurementResult {
  id: number;
  values: MeasurementResultValue[];
}
