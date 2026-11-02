import { RunHoldCode as HoldCodeInterface } from '../runHoldCode';
import { User } from '../../../core/interfaces/user';
export interface HoldCode {
    id: number;
    hold_code: HoldCodeInterface;
    description: string | null;
    user: User;
    date_created: string;
}
