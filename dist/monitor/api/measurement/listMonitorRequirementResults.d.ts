import { MonitorMeasurementResult } from '../../interfaces/measurement/monitorMeasurementResult';
import { MonitorRequirement } from '../../interfaces/monitorRequirement';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
export default function listMonitorRequirementResults({ requirement, order, direction, pageSize, page, }: {
    requirement?: MonitorRequirement;
    order?: "id" | "date-created";
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<MonitorMeasurementResult>>;
