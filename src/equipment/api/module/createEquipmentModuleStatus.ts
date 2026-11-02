import axios from "axios";
import { EquipmentModuleStatus } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleStatus";

export default async function createEquipmentModuleStatus({
  moduleId,
  status,
  description,
  emailTrainedUsers,
  emailResponsibleUsers,
  user,
}: {
  moduleId: number;
  /** Equipment status ID */
  status: number;
  description?: string | null;
  emailTrainedUsers?: boolean;
  emailResponsibleUsers?: boolean;
  /** Optional user ID */
  user?: number;
}): Promise<EquipmentModuleStatus> {
  const response = await axios.post<EquipmentModuleStatus>("create/equipment/module/status", {
    module: moduleId,
    status,
    description,
    email_trained_users: emailTrainedUsers,
    email_responsible_users: emailResponsibleUsers,
    user,
  });
  return response.data;
}
