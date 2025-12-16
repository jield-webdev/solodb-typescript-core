import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { Equipment } from '../../interfaces/equipment';
import { EquipmentModule } from '../../interfaces/equipment/equipmentModule';
import { StatusMail } from '../../interfaces/statusMail';
import { EquipmentModuleIssue } from '../../interfaces/equipment/module/equipmentModuleIssue';
export default function listIssues({ equipment, module, statusMail, }: {
    equipment?: Equipment;
    module?: EquipmentModule;
    statusMail?: StatusMail;
}): Promise<ApiFormattedResponse<EquipmentModuleIssue>>;
