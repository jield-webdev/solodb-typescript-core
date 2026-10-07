import { Measurement } from "@jield/solodb-typescript-core/run/interfaces/measurement";
import { MeasurementResult } from "@jield/solodb-typescript-core/run/interfaces/measurement/result";
import axios from "axios";

/**
 * Create a measurement result with values.
 *
 * Mirrors POST /api/create/run/measurement/result. `step`, `part` and `stepPart` are optional but are
 * used together (all three are sent when `stepPart` is given).
 */
export default async function createMeasurementResult({
  measurement,
  values,
  stepId,
  partId,
  stepPartId,
}: {
  measurement: Measurement;
  values: { logging_parameter: number; value: string }[];
  stepId?: number;
  partId?: number;
  stepPartId?: number;
}): Promise<MeasurementResult> {
  const response = await axios.post<MeasurementResult>("create/run/measurement/result", {
    measurement: measurement.id,
    values,
    ...(stepPartId !== undefined ? { step_part: stepPartId, part: partId ?? 0, step: stepId ?? 0 } : {}),
  });
  return response.data;
}
