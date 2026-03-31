import { RunStepPartActionEnum } from "../enum/runStepPartActionEnum";
import { RunStepPart } from "../interfaces/step/runStepPart";

export default function getAvailableRunStepPartActions(runStepPart: RunStepPart): RunStepPartActionEnum[] {
  // if it already failed in a previous step, nothing can be done
  if (runStepPart.part.part_processing_failed) {
    return [];
  }

  const latestActionId = runStepPart.latest_action?.type.id;
  const latestActionName = runStepPart.latest_action?.type.name?.toLowerCase() ?? "";
  const latestActionFailedByName = latestActionName.includes("fail");
  const latestActionFinishedByName = latestActionName.includes("finish");
  const latestActionStartedByName = latestActionName.includes("start");

  const processingFailed =
    runStepPart.failed ||
    latestActionId === RunStepPartActionEnum.FAILED_PROCESSING ||
    latestActionFailedByName;
  const processingFinished =
    runStepPart.processed ||
    latestActionId === RunStepPartActionEnum.FINISH_PROCESSING ||
    processingFailed ||
    latestActionFinishedByName;
  const processingStarted =
    runStepPart.started ||
    runStepPart.actions > 0 ||
    processingFinished ||
    latestActionStartedByName;

  const actions: RunStepPartActionEnum[] = [];

  if (!processingStarted) {
    actions.push(RunStepPartActionEnum.START_PROCESSING);
  }

  if (processingStarted && !processingFinished) {
    actions.push(RunStepPartActionEnum.FINISH_PROCESSING, RunStepPartActionEnum.FAILED_PROCESSING);
  }

  if (processingFailed) {
    actions.push(RunStepPartActionEnum.REWORK);
    actions.push(RunStepPartActionEnum.REPAIR);
  }

  if (processingFinished && !processingFailed) {
    actions.push(RunStepPartActionEnum.TESTING);
  }

  return actions;
};
