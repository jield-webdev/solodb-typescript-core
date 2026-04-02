import setRunStepPartAction from "../api/step/part/setRunStepPartAction";
import startStep from "../api/step/startStep";
import {RunStepPartActionEnum} from "../enum/runStepPartActionEnum";
import {RunStepPart} from "../interfaces/step/runStepPart";
import {RunStepPartAction} from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartAction";
import {RunStep} from "@jield/solodb-typescript-core/run/interfaces/runStep";

/*
 * Performs a action in a runStepPart
 * Also it makes sure the step state is what it should be
 */
export default async function performRunStepPartAction(
    part: RunStepPart,
    action: RunStepPartActionEnum,
    step: RunStep
): Promise<RunStepPartAction> {
    // start step if it isnt
    if (!step.is_started) {
        await startStep(step);
    }

    return await setRunStepPartAction({runStepPart: part, runStepPartAction: action});
}
