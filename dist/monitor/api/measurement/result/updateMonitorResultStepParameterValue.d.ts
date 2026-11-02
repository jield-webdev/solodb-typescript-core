import { MonitorResultStepParameterValue } from '../../../interfaces/measurement/result/monitorResultStepParameterValue';
export default function updateMonitorResultStepParameterValue({ stepParameterValue, value, }: {
    stepParameterValue: MonitorResultStepParameterValue;
    value: number | string;
}): Promise<void>;
