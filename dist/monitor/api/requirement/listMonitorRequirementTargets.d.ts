import { MonitorRequirement } from '../../../../monitor/interfaces/monitorRequirement';
import { MonitorRequirementTarget } from '../../../../monitor/interfaces/requirement/monitorRequirementTarget';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
export default function listMonitorRequirementTargets({ requirement, }: {
    requirement?: MonitorRequirement;
}): Promise<ApiFormattedResponse<MonitorRequirementTarget>>;
