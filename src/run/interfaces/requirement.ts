import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { Target } from "@jield/solodb-typescript-core/run/interfaces/requirement/target";
import { Measurement } from "@jield/solodb-typescript-core/run/interfaces/measurement";

export interface Requirement {
  id: number;
  definition: string;
  step: RunStep;
  requirement_for_step: RunStep | null;
  targets: Target[];
  measurement: Measurement;
}
