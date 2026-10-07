import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export enum EquipmentModuleIssueType {
  DEFAULT = 1,
  PRIORITY = 2,
  ESCALATION = 3,
}

export enum EquipmentModuleIssueStatus {
  ACTIVE = 1,
  CLOSED = 2,
}

export interface EquipmentModuleIssue {
  id: number;
  module_id: number;
  date_created: string;
  date_closed: string | null;
  last_update: string | null;
  issue: string;
  description: string | null;
  issue_type: EquipmentModuleIssueType;
  status: EquipmentModuleIssueStatus;
  owner: User;
  updated_by: User | null;
  forecast_up: string | null;
  actions: string | null;
  attachments: number;
}
