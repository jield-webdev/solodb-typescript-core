import { RunStepParameter } from '../../../interfaces/step/runStepParameter';
import { StepParameterValue } from '../../../interfaces/step/parameter/stepParameterValue';
/**
 * Create (POST /api/create/run/step/parameter/value) or update
 * (PATCH /api/update/run/step/parameter/value/{id}) the value of a run step parameter.
 *
 * When `value.id` is undefined the value is created for `parameter`, otherwise the existing value is patched.
 * Returns the stored value.
 */
export default function saveStepParameterValue({ parameter, value, newValue, }: {
    parameter: RunStepParameter;
    value?: StepParameterValue;
    newValue: string;
}): Promise<StepParameterValue>;
