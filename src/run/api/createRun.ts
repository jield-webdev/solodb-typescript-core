import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";

export default async function createRun({
  name,
  motivation,
  group_id,
  team_id,
  project_id,
  experimental_split,
  location,
  conclusion,
  run_type,
}: {
  name: string;
  motivation: string;
  group_id: number;
  team_id: number;
  project_id: number;
  experimental_split?: number;
  location?: string | null;
  conclusion?: string | null;
  run_type?: "research" | "production" | null;
}): Promise<Run> {
  const response = await axios.post<Run>("create/run", {
    name,
    motivation,
    group_id,
    team_id,
    project_id,
    ...(experimental_split !== undefined ? { experimental_split } : {}),
    ...(location !== undefined ? { location } : {}),
    ...(conclusion !== undefined ? { conclusion } : {}),
    ...(run_type !== undefined ? { run_type } : {}),
  });

  return response.data;
}
