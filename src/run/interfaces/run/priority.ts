import { RunPriority as PriorityInterface } from "@jield/solodb-typescript-core/run/interfaces/runPriority";

export interface Priority {
  id: number;
  priority: PriorityInterface;
  description: string;
}
