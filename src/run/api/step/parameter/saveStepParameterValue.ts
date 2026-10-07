import { RunStepParameter } from "@jield/solodb-typescript-core/run/interfaces/step/runStepParameter";
import { StepParameterValue } from "@jield/solodb-typescript-core/run/interfaces/step/parameter/stepParameterValue";
import axios from "axios";

/**
 * Create (POST /api/create/run/step/parameter/value) or update
 * (PATCH /api/update/run/step/parameter/value/{id}) the value of a run step parameter.
 *
 * When `value.id` is undefined the value is created for `parameter`, otherwise the existing value is patched.
 * Returns the stored value.
 */
export default async function saveStepParameterValue({
  parameter,
  value,
  newValue,
}: {
  parameter: RunStepParameter;
  value?: StepParameterValue;
  newValue: string;
}): Promise<StepParameterValue> {
  if (value?.id !== undefined) {
    const response = await axios.patch<StepParameterValue>(`update/run/step/parameter/value/${value.id}`, {
      value: newValue,
    });
    return response.data;
  }

  const response = await axios.post<StepParameterValue>("create/run/step/parameter/value", {
    parameter: parameter.id,
    value: newValue,
  });
  return response.data;
}
