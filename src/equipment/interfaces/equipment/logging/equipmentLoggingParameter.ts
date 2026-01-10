import { Parameter as ProcessParameter } from "@jield/solodb-typescript-core/process/interfaces/parameter";
import { Unit } from "@jield/solodb-typescript-core/process/interfaces/unit";

export interface EquipmentLoggingParameter {
  id: number;
  name: string;
  parameter: ProcessParameter | null;
  unit: Unit | null;
}
