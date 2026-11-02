import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { ServiceType } from "@jield/solodb-typescript-core/service/interfaces/serviceType";
import { EquipmentModule } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/equipmentModule";
import { ServiceEventPlace } from "@jield/solodb-typescript-core/service/interfaces/service/event/serviceEventPlace";
import { ExternalCompany } from "@jield/solodb-typescript-core/service/interfaces/externalCompany";
import { ServiceTeam } from "@jield/solodb-typescript-core/service/interfaces/serviceTeam";

export interface Service {
  id: number;
  name: string;
  description: string | null;
  minutes_needed_for_service: number;
  service_valid_months: number;
  date_created: string;
  last_update: string | null;
  type: ServiceType;
  place: ServiceEventPlace | null;
  team: ServiceTeam;
  external_company: ExternalCompany | null;
  equipment: Equipment;
  modules: EquipmentModule[];
  latest_event_id: number | null;
  latest_event_report_id: number | null;
}
