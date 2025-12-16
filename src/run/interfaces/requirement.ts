import { RunStep } from "@/run/interfaces/runStep";
import { Target } from "@/run/interfaces/requirement/target";
import { Measurement } from "@/run/interfaces/measurement";

export interface Requirement {
  id: number;
  definition: string;
  step: RunStep;
  requirement_for_step: RunStep | null;
  targets: Target[];
  measurement: Measurement;
}
