import { MonitorMeasurementResultValue } from '../../../../monitor/interfaces/measurement/result/monitorStepParameterValue';
export interface MonitorMeasurementResult {
    id: number;
    date_created: string;
    values: MonitorMeasurementResultValue[];
}
