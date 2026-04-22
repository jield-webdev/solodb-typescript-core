import { MonitorMeasurementResult } from '../../../../monitor/interfaces/measurement/monitorMeasurementResult';
import { MonitorRequirement } from '../../../../monitor/interfaces/monitorRequirement';
import { Monitor } from '../../../../monitor/interfaces/monitor';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
export default function listMonitorRequirementResults({ requirement, order, direction, pageSize, page, }: {
    requirement?: MonitorRequirement;
    monitor?: Monitor;
    order?: "id" | "date-created";
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<MonitorMeasurementResult>>;
