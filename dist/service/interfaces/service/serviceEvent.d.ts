import { ServiceEventPlace } from './event/serviceEventPlace';
import { ExternalCompany } from '../externalCompany';
import { Service } from '.';
export interface ServiceEvent {
    id: number;
    guid: string | null;
    date_created: string;
    last_update: string | null;
    date_planned: string;
    date_executed: string | null;
    service: Service;
    place: ServiceEventPlace | null;
    external_company: ExternalCompany | null;
}
