import { RunPriority as PriorityInterface } from '../runPriority';
export interface Priority {
    id: number;
    priority: PriorityInterface;
    description: string;
}
