import { Building } from './building';
export interface Room {
    id: number;
    name: string;
    code: string;
    phone: string | null;
    description: string;
    building: Building;
    amount: {
        zone_groups: number;
    };
}
