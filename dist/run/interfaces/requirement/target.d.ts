import { EquipmentLoggingParameter } from '../../../equipment/interfaces/equipment/logging/equipmentLoggingParameter';
export interface Target {
    id: number;
    min_value: number | null;
    max_value: number | null;
    inclusive: boolean;
    unit: string | null;
    logging_parameter: EquipmentLoggingParameter;
}
