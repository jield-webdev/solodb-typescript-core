import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { Equipment } from '../../../../equipment/interfaces/equipment';
import { EquipmentModule } from '../../../../equipment/interfaces/equipment/equipmentModule';
import { StatusMail } from '../../../../equipment/interfaces/statusMail';
import { EquipmentModuleIssue } from '../../../../equipment/interfaces/equipment/module/equipmentModuleIssue';
export default function listIssues({ equipment, module, statusMail, }: {
    equipment?: Equipment;
    module?: EquipmentModule;
    statusMail?: StatusMail;
}): Promise<ApiFormattedResponse<EquipmentModuleIssue>>;
