import axios from "axios";
import { EquipmentModuleIssue, EquipmentModuleIssueStatus, EquipmentModuleIssueType } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleIssue";

export default async function updateIssue({
  id,
  issue,
  description,
  owner,
  status,
  issueType,
  actions,
  forecastUp,
}: {
  id: number;
  issue: string;
  description?: string | null;
  /** User ID of the owner */
  owner: number;
  status: EquipmentModuleIssueStatus;
  issueType: EquipmentModuleIssueType;
  actions?: string | null;
  forecastUp?: string | null;
}): Promise<EquipmentModuleIssue> {
  const response = await axios.patch<EquipmentModuleIssue>("update/equipment/module/issue/" + id, {
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
