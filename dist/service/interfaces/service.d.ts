import { Equipment } from '../../equipment/interfaces/equipment';
import { ServiceType } from './serviceType';
import { EquipmentModule } from '../../equipment/interfaces/equipment/equipmentModule';
import { ServiceEventPlace } from './service/event/serviceEventPlace';
import { ExternalCompany } from './externalCompany';
import { ServiceTeam } from './serviceTeam';
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
