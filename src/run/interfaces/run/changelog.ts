import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { RunStepChecklistItem } from "@jield/solodb-typescript-core/run/interfaces/step/runStepChecklistItem";
import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export interface Changelog {
  id: number;
  date_created: string;
  user: User;
  message: string;
  type: string;
  source: string;
  steps: RunStep[];
  checklist: RunStepChecklistItem[];
}
