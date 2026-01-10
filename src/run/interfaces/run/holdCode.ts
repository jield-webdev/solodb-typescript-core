import { RunHoldCode as HoldCodeInterface } from "@jield/solodb-typescript-core/run/interfaces/runHoldCode";

export interface HoldCode {
  id: number;
  hold_code: HoldCodeInterface;
  description: string;
}
