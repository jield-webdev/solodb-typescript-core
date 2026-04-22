import { EquipmentModuleEcn } from '../../../../equipment/interfaces/equipment/module/equipmentModuleEcn';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { Equipment } from '../../../../equipment/interfaces/equipment';
import { EquipmentModule } from '../../../../equipment/interfaces/equipment/equipmentModule';
import { StatusMail } from '../../../../equipment/interfaces/statusMail';
export default function listEcn({ equipment, module, statusMail, }: {
    equipment?: Equipment;
    module?: EquipmentModule;
    statusMail?: StatusMail;
}): Promise<ApiFormattedResponse<EquipmentModuleEcn>>;
