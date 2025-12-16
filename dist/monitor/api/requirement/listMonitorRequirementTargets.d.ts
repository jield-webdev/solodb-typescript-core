import { MonitorRequirement } from '../../interfaces/monitorRequirement';
import { MonitorRequirementTarget } from '../../interfaces/requirement/monitorRequirementTarget';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
export default function listMonitorRequirementTargets({ requirement, }: {
    requirement?: MonitorRequirement;
}): Promise<ApiFormattedResponse<MonitorRequirementTarget>>;
