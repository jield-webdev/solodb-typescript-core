import { Equipment } from '../../../equipment/interfaces/equipment';
export default function getEquipment({ id }: {
    id: number;
}): Promise<Equipment>;
