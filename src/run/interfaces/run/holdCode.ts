import { RunHoldCode as HoldCodeInterface } from "@/run/interfaces/runHoldCode";

export interface HoldCode {
  id: number;
  hold_code: HoldCodeInterface;
  description: string;
}
