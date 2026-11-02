import { EquipmentModuleReservation } from '../../interfaces/equipment/module/equipmentModuleReservation';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { Equipment } from '../../interfaces/equipment';
import { EquipmentModule } from '../../interfaces/equipment/equipmentModule';
export default function listReservations({ equipment, module, which, order, direction, page, pageSize, }: {
    equipment?: Equipment;
    module?: EquipmentModule;
    which?: "active" | "past" | "upcoming";
    order?: "default" | "id" | "title" | "start" | "end";
    direction?: "asc" | "desc";
    page?: number;
    pageSize?: number;
}): Promise<ApiFormattedResponse<EquipmentModuleReservation>>;
