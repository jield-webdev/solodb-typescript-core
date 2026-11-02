import { Equipment } from '../../interfaces/equipment';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { StatusMail } from '../../interfaces/statusMail';
import { EquipmentModule, EquipmentModuleType } from '../../interfaces/equipment/equipmentModule';
import { Run } from '../../../run/interfaces/run';
export default function listModules({ equipment, statusMail, run, type, query, page, pageSize, }: {
    equipment?: Equipment;
    statusMail?: StatusMail;
    run?: Run;
    type?: EquipmentModuleType | number;
    query?: string;
    page?: number;
    pageSize?: number;
}): Promise<ApiFormattedResponse<EquipmentModule>>;
