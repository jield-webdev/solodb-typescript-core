import { MonitorMeasurementResult } from '../../../../../monitor/interfaces/measurement/monitorMeasurementResult';
import { MonitorRequirement } from '../../../../../monitor/interfaces/monitorRequirement';
import { ApiFormattedResponse } from '../../../../../core/interfaces/response';
import { MonitorResultStepParameterValue } from '../../../../../monitor/interfaces/measurement/result/monitorResultStepParameterValue';
export default function listMonitorRequirementResultMonitorStepParameterValues({ requirement, result, order, direction, pageSize, page, }: {
    requirement?: MonitorRequirement;
    result?: MonitorMeasurementResult;
    order?: "id" | "date-created";
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<MonitorResultStepParameterValue>>;
