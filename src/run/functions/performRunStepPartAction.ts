import setRunStepPartAction from "../api/step/part/setRunStepPartAction";
import startStep from "../api/step/startStep";
import { RunStepPartActionEnum } from "../enum/runStepPartActionEnum";
import { RunStepPart } from "../interfaces/step/runStepPart";

/*
 * Performs a action in a runStepPart
 * Also it makes sure the step state is what it should be
 */
export default async function performRunStepPartAction(
  part: RunStepPart,
  action: RunStepPartActionEnum,
): Promise<void> {
  const step = part.step;

  // start step if it isnt
  if (!step.is_started) {
    await startStep(step);
  }

  await setRunStepPartAction({ runStepPart: part, runStepPartAction: action });
}
