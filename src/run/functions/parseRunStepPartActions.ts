import { RunStepPartActionEnum } from "../enum/runStepPartActionsEnum"

export function actionEnumToName(actionId: RunStepPartActionEnum): string | null {
  const actionsMap: Map<number, string> = new Map([
    [RunStepPartActionEnum.START, "start_processing"],
    [RunStepPartActionEnum.FINISH, "finish_processing"],
    [RunStepPartActionEnum.FAIL, "fail_processing"],
    [RunStepPartActionEnum.REWORK, "rework"],
    [RunStepPartActionEnum.SET_REPAIR, "repair"],
    [RunStepPartActionEnum.CLEAR_REPAIR, "clear_repairing"],
    [RunStepPartActionEnum.SET_TESTING, "test"],
    [RunStepPartActionEnum.CLEAR_TESTING, "clear_testing"],
  ]);

  return actionsMap.get(actionId) ?? null;
}

export function actionLabelToEnum(label: string): RunStepPartActionEnum | null {
  const actionsMap: Map<string, RunStepPartActionEnum> = new Map([
    ["start_processing", RunStepPartActionEnum.START],
    ["finish_processing", RunStepPartActionEnum.FINISH],
    ["fail_processing", RunStepPartActionEnum.FAIL],
    ["rework", RunStepPartActionEnum.REWORK],
    ["repair", RunStepPartActionEnum.SET_REPAIR],
    ["clear_repairing", RunStepPartActionEnum.CLEAR_REPAIR],
    ["test", RunStepPartActionEnum.SET_TESTING],
    ["clear_testing", RunStepPartActionEnum.CLEAR_TESTING],
  ]);

  return actionsMap.get(label) ?? null;
}
