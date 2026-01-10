import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { ServiceType } from "@jield/solodb-typescript-core/service/interfaces/serviceType";
import { Department } from "@jield/solodb-typescript-core/organisation/interfaces/department";
import { ServiceEventPlace } from "@jield/solodb-typescript-core/service/interfaces/service/event/serviceEventPlace";
import { ServiceTeam } from "@jield/solodb-typescript-core/service/interfaces/serviceTeam";

export interface Service {
  id: number;
  name: string;
  description: string;
  minutes_needed_for_service: number;
  service_valid_months: number;
  date_created: string;
  last_update: string;
  type: ServiceType;
  place: ServiceEventPlace;
  team: ServiceTeam;
  department: Department;
  equipment: Equipment;
  latest_event_id: number;
  latest_event_report_id: number;
}
