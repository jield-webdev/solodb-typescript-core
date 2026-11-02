import { Measurement } from '../../interfaces/measurement';
import { MeasurementResult } from '../../interfaces/measurement/result';
/**
 * Create a measurement result with values.
 *
 * Mirrors POST /api/create/run/measurement/result. `step`, `part` and `stepPart` are optional but are
 * used together (all three are sent when `stepPart` is given).
 */
export default function createMeasurementResult({ measurement, values, stepId, partId, stepPartId, }: {
    measurement: Measurement;
    values: {
        logging_parameter: number;
        value: string;
    }[];
    stepId?: number;
    partId?: number;
    stepPartId?: number;
}): Promise<MeasurementResult>;
