import { Equipment } from '../interfaces/equipment';
export default function getEquipment({ id }: {
    id: number;
}): Promise<Equipment>;
