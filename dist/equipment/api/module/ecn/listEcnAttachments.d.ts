import { ApiFormattedResponse } from '../../../../../core/interfaces/response';
import { Equipment } from '../../../../../equipment/interfaces/equipment';
import { EquipmentModule } from '../../../../../equipment/interfaces/equipment/equipmentModule';
import { StatusMail } from '../../../../../equipment/interfaces/statusMail';
import { EquipmentModuleEcnAttachment } from '../../../../../equipment/interfaces/equipment/module/ecn/equipmentModuleEcnAttachment';
export default function listEcnAttachments({ equipment, module, statusMail, }: {
    equipment?: Equipment;
    module?: EquipmentModule;
    statusMail?: StatusMail;
}): Promise<ApiFormattedResponse<EquipmentModuleEcnAttachment>>;
