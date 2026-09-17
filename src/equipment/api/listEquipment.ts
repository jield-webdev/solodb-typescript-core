import axios from "axios";
import { FilterData } from "@jield/solodb-typescript-core/core/interfaces/filter";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { StatusMail } from "@jield/solodb-typescript-core/equipment/interfaces/statusMail";
import { Room } from "@jield/solodb-typescript-core/room/interfaces/room";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";

function cleanFilterData(data: FilterData): FilterData {
    let cleanedData = {...data};
    cleanedData.facet = Object.fromEntries(Object.entries(data.facet).filter(([_, facet]) => facet.values.length > 0));

    if (data.filter.general.length <= 0) {
        // @ts-expect-error
        cleanedData.filter = {};
    }
    return cleanedData;
}

export default async function listEquipment(
    {
        environment,
        run,
        room,
        statusMail,
        hasWorkstationComponents,
        page,
        pageSize,
        number,
        query,
        filter,
        order,
        direction
    }: {
        environment?: string;
        run?: Run | number;
        room?: Room | number;
        statusMail?: StatusMail | number;
        hasWorkstationComponents?: boolean;
        page?: number;
        pageSize?: number;
        number?: string;
        query?: string;
        filter?: FilterData;
        order?: string;
        direction?: "desc" | "asc";
    } = {}): Promise<ApiFormattedResponse<Equipment>> {
    const searchParams = new URLSearchParams();

    if (environment !== undefined) {
        searchParams.append("environment", environment);
    }

    if (run !== undefined) {
        searchParams.append("run", (typeof run === "number" ? run : run.id).toString());
    }

    if (room !== undefined) {
        searchParams.append("room", (typeof room === "number" ? room : room.id).toString());
    }

    if (hasWorkstationComponents !== undefined) {
        searchParams.append("has_workstation_components", hasWorkstationComponents.toString());
    }

    if (number !== undefined) {
        searchParams.append("number", number);
    }

    if (query !== undefined) {
        searchParams.append("query", query);
    }

    if (order !== undefined) {
        searchParams.append("order", order);
    }

    if (direction !== undefined) {
        searchParams.append("direction", direction);
    }

    if (statusMail !== undefined) {
        searchParams.append("status_mail", (typeof statusMail === "number" ? statusMail : statusMail.id).toString());
    }

    if (filter !== undefined) {
        filter = cleanFilterData(filter);
        searchParams.append("filter", btoa(JSON.stringify(filter)));
    }

    if (page !== undefined) {
        searchParams.append("page", page.toString());
    }

    if (pageSize !== undefined) {
        searchParams.append("page_size", pageSize.toString());
    }

    const response = await axios.get<ApiResponse<Equipment>>(
        "list/equipment?" + searchParams.toString(),
    );
    const { data } = response;

    return {
        items: data._embedded.items,
        amountOfPages: data.page_count,
        currentPage: data.page,
        totalItems: data.total_items,
        hasMore: data.page < data.page_count,
    };
}
