import axios from "axios";
import {RunStepPart} from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import {RunStep} from "@jield/solodb-typescript-core/run/interfaces/runStep";
import {ApiFormattedResponse, ApiResponse} from "@jield/solodb-typescript-core/core/interfaces/response";
import {Run} from "@jield/solodb-typescript-core/run/interfaces/run";
import {RunPart} from "@jield/solodb-typescript-core/run/interfaces/run/runPart";

export default async function listRunStepParts({
                                                   step,
                                                   run,
                                                   runPart,
                                                   page_size,
                                                   page,
                                               }: {
    step?: RunStep;
    run?: Run;
    runPart?: RunPart,
    page_size?: number;
    page?: number;
}): Promise<ApiFormattedResponse<RunStepPart>> {
    const searchParams = new URLSearchParams();

    if (step !== undefined) {
        searchParams.append("step", step.id.toString());
    }

    if (run !== undefined) {
        searchParams.append("run", run.id.toString());
    }

    if (runPart !== undefined) {
        searchParams.append("part", runPart.id.toString());
    }

    if (page !== undefined) {
        searchParams.append("page", page.toString());
    }

    if (page_size !== undefined) {
        searchParams.append("page_size", page_size.toString());
    } else {
        searchParams.append("page_size", "1000");
    }

    let url = "list/run/step/part?" + searchParams.toString();

    const response = await axios.get<ApiResponse<RunStepPart>>(url);
    const {data} = response;

    return {
        items: data._embedded.items,
        amountOfPages: data.page_count,
        currentPage: data.page,
        totalItems: data.total_items,
        hasMore: data.page < data.page_count,
    };
}
