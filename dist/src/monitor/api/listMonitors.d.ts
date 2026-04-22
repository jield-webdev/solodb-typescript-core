import { Monitor } from '../../../monitor/interfaces/monitor';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { Equipment } from '../../../equipment/interfaces/equipment';
export default function listMonitors({ equipment, }: {
    equipment?: Equipment;
}): Promise<ApiFormattedResponse<Monitor>>;
