import { MeasurementResult } from '../../interfaces/measurement/result';
/** Delete a measurement result. Mirrors DELETE /api/delete/run/measurement/result/{id}. */
export default function deleteMeasurementResult({ result }: {
    result: MeasurementResult;
}): Promise<void>;
