import axios from "axios";
import {RunStepPartState} from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartState";
import {RunStepPart} from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import {RunStepPartActionEnum} from "@jield/solodb-typescript-core/run/enum/runStepPartActionsEnum";

export default async function performRunStepPartAction(
    {
        runStepPart,
        runStepPartAction,
        comment,
    }: {
        runStepPart: RunStepPart;
        runStepPartAction: RunStepPartActionEnum;
        comment?: string | null;
    }): Promise<RunStepPartState> {
    let url = "create/run/step/part/action";

    const response = await axios.post<RunStepPartState>(url, {
        run_step_part_id: runStepPart.id,
        type: runStepPartAction,
        ...(comment !== undefined ? {comment} : {}),
    });
    const {data} = response;
    return data;
}
