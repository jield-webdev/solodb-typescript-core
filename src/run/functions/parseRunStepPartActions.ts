import { RunStepPartActionEnum } from "../enum/runStepPartActionEnum";

export function actionEnumToName(actionId: RunStepPartActionEnum): string | null {
  const actionsMap: Map<number, string> = new Map([
    [RunStepPartActionEnum.START_PROCESSING, "start_processing"],
    [RunStepPartActionEnum.FINISH_PROCESSING, "finish_processing"],
    [RunStepPartActionEnum.FAILED_PROCESSING, "failed_processing"],
    [RunStepPartActionEnum.REWORK, "rework"],
    [RunStepPartActionEnum.REPAIR, "repair"],
    [RunStepPartActionEnum.TESTING, "testing"],
  ]);

  return actionsMap.get(actionId) ?? null;
}

export function actionLabelToEnum(label: string): RunStepPartActionEnum | null {
  const actionsMap: Map<string, RunStepPartActionEnum> = new Map([
    ["run_step_part_start_processing", RunStepPartActionEnum.START_PROCESSING],
    ["run_step_part_finish_processing", RunStepPartActionEnum.FINISH_PROCESSING],
    ["run_step_part_failed_processing", RunStepPartActionEnum.FAILED_PROCESSING],
    ["run_step_part_rework", RunStepPartActionEnum.REWORK],
    ["run_step_part_repair", RunStepPartActionEnum.REPAIR],
    ["run_step_part_testing", RunStepPartActionEnum.TESTING],
  ]);

  return actionsMap.get(label) ?? null;
}
