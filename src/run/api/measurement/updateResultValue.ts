import { MeasurementResultValue } from "@jield/solodb-typescript-core/run/interfaces/measurement/result/value";
import axios from "axios";

/** Update a measurement result value. Mirrors PATCH /api/update/run/measurement/result/value/{id}. */
export default async function updateMeasurementResultValue({
  resultValue,
  value,
}: {
  resultValue: MeasurementResultValue;
  value: string;
}): Promise<MeasurementResultValue> {
  const response = await axios.patch<MeasurementResultValue>(`update/run/measurement/result/value/${resultValue.id}`, {
    value,
  });
  return response.data;
}
