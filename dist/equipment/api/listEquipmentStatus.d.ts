import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { EquipmentStatus } from '../../../equipment/interfaces/equipmentStatus';
export default function listEquipmentStatus(): Promise<ApiFormattedResponse<EquipmentStatus>>;
