import { EquipmentModuleEcn } from '../../interfaces/equipment/module/equipmentModuleEcn';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { Equipment } from '../../interfaces/equipment';
import { EquipmentModule } from '../../interfaces/equipment/equipmentModule';
import { StatusMail } from '../../interfaces/statusMail';
export default function listEcn({ equipment, module, statusMail, query, filterGeneral, order, direction, page, pageSize, }: {
    equipment?: Equipment;
    module?: EquipmentModule;
    statusMail?: StatusMail;
    query?: string;
    /** Sent as filter[general][]=...; include_inactive includes closed items, my_issues only items owned by the current user */
    filterGeneral?: ("include_inactive" | "my_issues")[];
    order?: "default" | "owner" | "updated_by" | "area" | "number" | "module" | "facility" | "date-created" | "last-update" | "forecast-up";
    direction?: "asc" | "desc";
    page?: number;
    pageSize?: number;
}): Promise<ApiFormattedResponse<EquipmentModuleEcn>>;
