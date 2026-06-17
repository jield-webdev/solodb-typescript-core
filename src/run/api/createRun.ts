import axios from "axios";
import {Run, RunTypeEnum} from "@jield/solodb-typescript-core/run/interfaces/run";

export default async function createRun(
    {
        name,
        motivation,
        group_id,
        team_id,
        project_id,
        parts,
        location,
        run_type,
    }: {
        name: string;
        motivation: string;
        group_id: number;
        team_id: number;
        project_id: number;
        parts: number;
        location?: string | null;
        run_type: RunTypeEnum;
    }): Promise<Run> {
    const response = await axios.post<Run>("create/run", {
        name,
        motivation,
        group_id,
        team_id,
        project_id,
        ...(parts !== undefined ? {parts} : {}),
        ...(location !== undefined ? {location} : {}),
        ...(run_type !== undefined ? {run_type} : {}),
    });

    return response.data;
}
