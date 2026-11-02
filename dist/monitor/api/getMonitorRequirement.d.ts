import { MonitorRequirement } from '../interfaces/monitorRequirement';
export default function getMonitorRequirement({ id }: {
    id: number;
}): Promise<MonitorRequirement>;
