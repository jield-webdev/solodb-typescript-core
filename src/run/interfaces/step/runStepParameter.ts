import { Unit } from "@jield/solodb-typescript-core/process/interfaces/unit";
import { Parameter as ProcessParameter } from "@jield/solodb-typescript-core/process/interfaces/parameter";
import { StepParameterValue } from "@jield/solodb-typescript-core/run/interfaces/step/parameter/stepParameterValue";

export interface RunStepParameter {
  id: number;
  sequence: number;
  /** 0 = normal, 1 = emphasize */
  visibility: number;
  /** 0 = not shown in name, 1 = shown in name */
  show_in_name: number;
  required: boolean;
  emphasize: boolean;
  is_header: boolean;
  locked: boolean;
  parameter: ProcessParameter;
  has_unit: boolean;
  unit: Unit | null;
  values: Array<StepParameterValue>;
}
