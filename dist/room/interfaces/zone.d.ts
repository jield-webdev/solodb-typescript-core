import { ZoneGroup } from './zoneGroup';
export interface Zone {
    id: number;
    name: string;
    description: string | null;
    status: string;
    zone_group: ZoneGroup;
    amount: {
        equipment: number;
    };
}
