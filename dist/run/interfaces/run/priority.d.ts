import { RunPriority as PriorityInterface } from '../runPriority';
import { User } from '../../../core/interfaces/user';
export interface Priority {
    id: number;
    priority: PriorityInterface;
    description: string | null;
    user: User;
    date_created: string;
}
