import { ApiFormattedResponse } from '../../../../../core/interfaces/response';
import { Equipment } from '../../../../../equipment/interfaces/equipment';
import { EquipmentModule } from '../../../../../equipment/interfaces/equipment/equipmentModule';
import { StatusMail } from '../../../../../equipment/interfaces/statusMail';
import { EquipmentModuleIssueAttachment } from '../../../../../equipment/interfaces/equipment/module/issue/equipmentModuleIssueAttachment';
export default function listIssueAttachments({ equipment, module, statusMail, }: {
    equipment?: Equipment;
    module?: EquipmentModule;
    statusMail?: StatusMail;
}): Promise<ApiFormattedResponse<EquipmentModuleIssueAttachment>>;
