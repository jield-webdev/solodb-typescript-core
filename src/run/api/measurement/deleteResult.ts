import { MeasurementResult } from "@jield/solodb-typescript-core/run/interfaces/measurement/result";
import axios from "axios";

/** Delete a measurement result. Mirrors DELETE /api/delete/run/measurement/result/{id}. */
export default async function deleteMeasurementResult({ result }: { result: MeasurementResult }): Promise<void> {
  await axios.delete(`delete/run/measurement/result/${result.id}`);
}
