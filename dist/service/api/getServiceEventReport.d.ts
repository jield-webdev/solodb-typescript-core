import { ServiceEventReport } from '../../../service/interfaces/service/event/serviceEventReport';
export default function getServiceEventReport({ id }: {
    id: number;
}): Promise<ServiceEventReport>;
