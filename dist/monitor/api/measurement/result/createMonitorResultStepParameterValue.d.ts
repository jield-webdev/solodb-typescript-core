import { MonitorMeasurementResult } from '../../../interfaces/measurement/monitorMeasurementResult';
import { MonitorStepParameter } from '../../../interfaces/monitor/step/parameter';
export default function createMonitorResultStepParameterValue({ result, stepParameter, value, }: {
    result: MonitorMeasurementResult;
    stepParameter: MonitorStepParameter;
    value: number | string;
}): Promise<void>;
