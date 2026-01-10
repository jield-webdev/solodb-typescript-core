import { EquipmentLoggingParameter } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/logging/equipmentLoggingParameter";

export interface MonitorMeasurementResultValue {
  logging_parameter: EquipmentLoggingParameter;
  condition: string | null;
  value_is_valid: boolean | null;
  float_value: number;
}
