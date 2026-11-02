import { EquipmentModuleIssue, EquipmentModuleIssueStatus, EquipmentModuleIssueType } from '../../interfaces/equipment/module/equipmentModuleIssue';
export default function createIssue({ moduleId, issue, description, owner, status, issueType, actions, forecastUp, }: {
    moduleId: number;
    issue: string;
    description?: string | null;
    /** User ID of the owner */
    owner: number;
    /** The API currently only accepts ACTIVE for new issues */
    status?: EquipmentModuleIssueStatus;
    /** The API currently accepts DEFAULT and PRIORITY; ESCALATION is rejected */
    issueType: EquipmentModuleIssueType;
    actions?: string | null;
    forecastUp?: string | null;
}): Promise<EquipmentModuleIssue>;
