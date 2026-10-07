import { RunPriority as PriorityInterface } from "@jield/solodb-typescript-core/run/interfaces/runPriority";
import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export interface Priority {
  id: number;
  priority: PriorityInterface;
  description: string | null;
  user: User;
  date_created: string;
}
