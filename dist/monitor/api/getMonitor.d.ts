import { Monitor } from '../../../monitor/interfaces/monitor';
export default function getMonitor({ id }: {
    id: number;
}): Promise<Monitor>;
