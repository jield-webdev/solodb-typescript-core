import { EquipmentModuleIssue, EquipmentModuleIssueStatus, EquipmentModuleIssueType } from '../../interfaces/equipment/module/equipmentModuleIssue';
export default function updateIssue({ id, issue, description, owner, status, issueType, actions, forecastUp, }: {
    id: number;
    issue: string;
    description?: string | null;
    /** User ID of the owner */
    owner: number;
    status: EquipmentModuleIssueStatus;
    issueType: EquipmentModuleIssueType;
    actions?: string | null;
    forecastUp?: string | null;
}): Promise<EquipmentModuleIssue>;
