import { EquipmentModuleStatus } from '../../interfaces/equipment/module/equipmentModuleStatus';
export default function createEquipmentModuleStatus({ moduleId, status, description, emailTrainedUsers, emailResponsibleUsers, user, }: {
    moduleId: number;
    /** Equipment status ID */
    status: number;
    description?: string | null;
    emailTrainedUsers?: boolean;
    emailResponsibleUsers?: boolean;
    /** Optional user ID */
    user?: number;
}): Promise<EquipmentModuleStatus>;
