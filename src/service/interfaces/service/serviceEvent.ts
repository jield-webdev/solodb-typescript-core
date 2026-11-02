import { ServiceEventPlace } from "@jield/solodb-typescript-core/service/interfaces/service/event/serviceEventPlace";
import { ExternalCompany } from "@jield/solodb-typescript-core/service/interfaces/externalCompany";
import { Service } from "@jield/solodb-typescript-core/service/interfaces/service";

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
