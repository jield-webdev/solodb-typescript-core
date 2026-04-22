import { RunHoldCode as HoldCodeInterface } from '../runHoldCode';
export interface HoldCode {
    id: number;
    hold_code: HoldCodeInterface;
    description: string;
}
