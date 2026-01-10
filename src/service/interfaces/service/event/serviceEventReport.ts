import { ServiceEvent } from "@jield/solodb-typescript-core/service/interfaces/service/serviceEvent";
import { ServiceReportVersion } from "@jield/solodb-typescript-core/service/interfaces/report/serviceReportVersion";

export interface ServiceEventReport {
  id: number;
  event: ServiceEvent;
  date_created: string;
  last_update: string | null;
  version: ServiceReportVersion;
}
