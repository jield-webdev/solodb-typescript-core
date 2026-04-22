import { Equipment } from '../../../../equipment/interfaces/equipment';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { StatusMail } from '../../../../equipment/interfaces/statusMail';
import { EquipmentModule } from '../../../../equipment/interfaces/equipment/equipmentModule';
import { Run } from '../../../../run/interfaces/run';
export default function listModules({ equipment, statusMail, run, }: {
    equipment?: Equipment;
    statusMail?: StatusMail;
    run?: Run;
}): Promise<ApiFormattedResponse<EquipmentModule>>;
