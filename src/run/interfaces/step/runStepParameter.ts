import { Unit } from "@jield/solodb-typescript-core/process/interfaces/unit";
import { Parameter as ProcessParameter } from "@jield/solodb-typescript-core/process/interfaces/parameter";
import { StepParameterValue } from "@jield/solodb-typescript-core/run/interfaces/step/parameter/stepParameterValue";

export interface RunStepParameter {
  id: number;
  sequence: number;
  show_in_name: boolean;
  required: boolean;
  emphasize: boolean;
  is_header: boolean;
  locked: boolean;
  parameter: ProcessParameter;
  has_unit: boolean;
  unit?: Unit;
  values: Array<StepParameterValue>;
}
