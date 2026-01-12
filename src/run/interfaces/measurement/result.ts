import { MeasurementResultValue } from "@jield/solodb-typescript-core/run/interfaces/measurement/result/value";

export interface MeasurementResult {
  id: number;
  values: MeasurementResultValue[];
}
