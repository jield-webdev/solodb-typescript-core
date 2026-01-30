import { RunStep } from "@jield/solodb-typescript-core/index";
import axios, { AxiosResponse } from "axios";

export default async function finishStep(runStep: RunStep): Promise<AxiosResponse<RunStep>> {
    if (!runStep) {
        throw new Error("Run step is undefined when trying to finish step"); 
    }

    const resp = await axios.create().patch<RunStep>("update/run/step/finish/" + runStep.id, {});
    
    return resp;
}
