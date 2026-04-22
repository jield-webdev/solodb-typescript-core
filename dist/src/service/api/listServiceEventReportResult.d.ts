import { ServiceEventReportResult } from '../../../service/interfaces/service/event/report/serviceEventReportResult';
export default function listServiceEventReportResult({ id }: {
    id: number;
}): Promise<ServiceEventReportResult[]>;
