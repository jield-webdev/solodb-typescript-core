import { ApiFormattedResponse } from '../../core/interfaces/response';
import { EquipmentStatus } from '../interfaces/equipmentStatus';
export default function listEquipmentStatus(): Promise<ApiFormattedResponse<EquipmentStatus>>;
