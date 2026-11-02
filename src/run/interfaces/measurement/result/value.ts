import { EquipmentLoggingParameter } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/logging/equipmentLoggingParameter";

export interface MeasurementResultValue {
  id: number;
  float_value: number | null;
  string_value: string | null;
  int_value: number | null;
  std_dev: number | null;
  unit: string | null;
  logging_parameter: EquipmentLoggingParameter;
  step_part_id: number | null;
}
