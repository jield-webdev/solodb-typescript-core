import axios from "axios";
import {RunStepPartState} from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartState";
import {RunStepPart} from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import {RunStepPartStateEnum} from "@jield/solodb-typescript-core/run/enum/runStepPartStateEnum";

export default async function performRunStepPartAction(
    {
        runStepPart,
        runStepPartAction,
    }: {
        runStepPart: RunStepPart;
        runStepPartAction: RunStepPartStateEnum;
    }): Promise<RunStepPartState> {
    let url = "create/run/step/part/action";

    const response = await axios.post<RunStepPartState>(url, {
        run_step_part_id: runStepPart.id,
        type: runStepPartAction,
    });
    const {data} = response;
    return data;
}
