import { ServiceEventReportResult } from '../../../service/interfaces/service/event/report/serviceEventReportResult';
export default function listReportResult({ id }: {
    id: number;
}): Promise<ServiceEventReportResult[]>;
