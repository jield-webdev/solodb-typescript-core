import { RunPart } from "@jield/solodb-typescript-core/run/interfaces/run/runPart";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { RunStepPartAction } from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartAction";

export interface RunStepPart {
  id: number;
  step: RunStep;
  part: RunPart;
  date_created: string;
  part_processing_failed_in_previous_step: boolean;
  comment: string | null;
  actions: number;
  latest_action?: RunStepPartAction;
  processed: boolean;
  failed: boolean;
  started: boolean;
}
