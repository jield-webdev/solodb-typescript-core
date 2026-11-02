import { MeasurementResultValue } from '../../interfaces/measurement/result/value';
/** Update a measurement result value. Mirrors PATCH /api/update/run/measurement/result/value/{id}. */
export default function updateMeasurementResultValue({ resultValue, value, }: {
    resultValue: MeasurementResultValue;
    value: string;
}): Promise<MeasurementResultValue>;
