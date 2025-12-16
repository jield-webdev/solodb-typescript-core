import { MonitorRequirement } from '../interfaces/monitorRequirement';
import { ApiFormattedResponse } from '../../core/interfaces/response';
export default function listMonitorRequirements({ equipmentId, monitorId, }: {
    equipmentId?: number;
    monitorId?: number;
}): Promise<ApiFormattedResponse<MonitorRequirement>>;
