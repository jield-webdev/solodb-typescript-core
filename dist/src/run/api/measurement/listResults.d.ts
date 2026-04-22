import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { Measurement } from '../../../../run/interfaces/measurement';
import { MeasurementResult } from '../../../../run/interfaces/measurement/result';
export default function listMeasurementResults({ measurement, }: {
    measurement: Measurement;
}): Promise<ApiFormattedResponse<MeasurementResult>>;
