import { RunPriority as PriorityInterface } from "@/run/interfaces/runPriority";

export interface Priority {
  id: number;
  priority: PriorityInterface;
  description: string;
}
