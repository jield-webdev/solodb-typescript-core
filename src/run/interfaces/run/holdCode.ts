import { RunHoldCode as HoldCodeInterface } from "@jield/solodb-typescript-core/run/interfaces/runHoldCode";
import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export interface HoldCode {
  id: number;
  hold_code: HoldCodeInterface;
  description: string | null;
  user: User;
  date_created: string;
}
