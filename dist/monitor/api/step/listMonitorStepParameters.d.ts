import { MonitorStep } from '../../interfaces/monitorStep';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { MonitorStepParameter } from '../../interfaces/monitor/step/parameter';
import { MonitorRequirement } from '../../interfaces/monitorRequirement';
export default function listMonitorStepParameters({ step, requirement, pageSize, page, }: {
    step?: MonitorStep;
    requirement?: MonitorRequirement;
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<MonitorStepParameter>>;
