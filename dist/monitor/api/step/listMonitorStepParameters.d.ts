import { MonitorStep } from '../../../../monitor/interfaces/monitorStep';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { MonitorStepParameter } from '../../../../monitor/interfaces/monitor/step/parameter';
import { MonitorRequirement } from '../../../../monitor/interfaces/monitorRequirement';
export default function listMonitorStepParameters({ step, requirement, pageSize, order, direction, }: {
    step?: MonitorStep;
    requirement?: MonitorRequirement;
    pageSize?: number;
    order?: "sequence";
    direction?: "asc" | "desc";
}): Promise<ApiFormattedResponse<MonitorStepParameter>>;
