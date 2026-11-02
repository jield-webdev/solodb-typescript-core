import { User } from '../../../core/interfaces/user';
export interface Rework {
    id: number;
    comment: string | null;
    user: User;
}
