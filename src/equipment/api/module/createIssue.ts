import axios from "axios";
import { EquipmentModuleIssue, EquipmentModuleIssueStatus, EquipmentModuleIssueType } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleIssue";

export default async function createIssue({
  moduleId,
  issue,
  description,
  owner,
  status = EquipmentModuleIssueStatus.ACTIVE,
  issueType,
  actions,
  forecastUp,
}: {
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
}): Promise<EquipmentModuleIssue> {
  const response = await axios.post<EquipmentModuleIssue>("create/equipment/module/issue", {
    module_id: moduleId,
    issue,
    description,
    owner,
    status,
    issue_type: issueType,
    actions,
    forecast_up: forecastUp,
  });
  return response.data;
}
