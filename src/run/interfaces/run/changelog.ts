import { RunStepChecklistItem } from "@jield/solodb-typescript-core/run/interfaces/step/runStepChecklistItem";
import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export interface Changelog {
  id: number;
  date_created: string;
  user: User;
  message: string;
  type: string;
  source: string;
  /** Ids of the steps linked to the changelog entry */
  steps: number[];
  run_step_checklist: RunStepChecklistItem | null;
}
