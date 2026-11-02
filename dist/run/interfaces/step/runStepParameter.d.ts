import { Unit } from '../../../process/interfaces/unit';
import { Parameter as ProcessParameter } from '../../../process/interfaces/parameter';
import { StepParameterValue } from './parameter/stepParameterValue';
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
