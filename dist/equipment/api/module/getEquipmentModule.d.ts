import { EquipmentModule } from '../../interfaces/equipment/equipmentModule';
export default function getEquipmentModule({ id }: {
    id: number;
}): Promise<EquipmentModule>;
