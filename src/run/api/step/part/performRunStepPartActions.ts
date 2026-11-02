import axios from "axios";
import {RunStepPartState} from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartState";
import {RunStepPart} from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import {RunStepPartActionEnum} from "@jield/solodb-typescript-core/run/enum/runStepPartActionsEnum";

export default async function performRunStepPartActions(
    {
        runStepPartActions,
    }: {
        runStepPartActions: {
            runStepPart: RunStepPart;
            runStepPartAction: RunStepPartActionEnum;
            comment?: string | null;
        }[];
    }): Promise<RunStepPartState[]> {
    let url = "create/run/step/part/action";

    // The bulk response is wrapped: { items: RunStepPartState[] }
    const response = await axios.post<{ items: RunStepPartState[] } | RunStepPartState[]>(url, {
        items: runStepPartActions.map(({runStepPart, runStepPartAction, comment}) => ({
            run_step_part_id: runStepPart.id,
            type: runStepPartAction,
            ...(comment !== undefined ? {comment} : {}),
        })),
    });
    const {data} = response;
    return Array.isArray(data) ? data : data.items;
}
