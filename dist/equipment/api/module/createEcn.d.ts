import { EquipmentModuleEcn } from '../../interfaces/equipment/module/equipmentModuleEcn';
export default function createEcn({ moduleId, ecn, description, owner, }: {
    moduleId: number;
    ecn: string;
    description?: string | null;
    /** User ID of the owner */
    owner: number;
}): Promise<EquipmentModuleEcn>;
