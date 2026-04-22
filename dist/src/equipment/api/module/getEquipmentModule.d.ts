import { EquipmentModule } from '../../../../equipment/interfaces/equipment/equipmentModule';
export default function getEquipmentModule({ id }: {
    id: number;
}): Promise<EquipmentModule | null>;
