import { Parameter } from "@jield/solodb-typescript-core/process/interfaces/parameter";
import { Unit } from "@jield/solodb-typescript-core/process/interfaces/unit";

export interface MonitorStepParameter {
  id: number;
  label: string | null;
  parameter: Parameter;
  unit: Unit | null;
  version: number;
  sequence: number;
  fix_range: number;
  min_value: number | null;
  max_value: number | null;
  show_in_name: boolean;
  required: number;
  header: number;
  locked: boolean;
  visibility: number;
}
