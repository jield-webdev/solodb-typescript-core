import { MonitorMeasurementResultValue } from './result/monitorStepParameterValue';
export interface MonitorMeasurementResult {
    id: number;
    date_create: string;
    values: MonitorMeasurementResultValue[];
}
