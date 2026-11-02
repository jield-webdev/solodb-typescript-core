import { MonitorMeasurementResult } from './measurement/monitorMeasurementResult';
import { MonitorRequirementTarget } from './requirement/monitorRequirementTarget';
import { MonitorStep } from './monitorStep';
export interface MonitorRequirement {
    id: number;
    title: string;
    definition: string;
    method: string;
    sequence: number;
    step: MonitorStep;
    targets: MonitorRequirementTarget[];
    latest_result: MonitorMeasurementResult | null;
}
