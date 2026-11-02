import { EquipmentStatus } from '../../equipmentStatus';
import { User } from '../../../../core/interfaces/user';
import { EquipmentModuleStatusAttachment } from './status/equipmentModuleStatusAttachment';
export interface EquipmentModuleStatus {
    id: number;
    status: EquipmentStatus;
    description: string | null;
    user: User;
    date_created: string;
    attachments: EquipmentModuleStatusAttachment[];
}
