import { Run, RunTypeEnum } from '../interfaces/run';
export default function createRun({ name, motivation, group_id, team_id, project_id, parts, location, run_type, }: {
    name: string;
    motivation: string;
    group_id: number;
    team_id: number;
    project_id: number;
    parts: number;
    location?: string | null;
    run_type: RunTypeEnum;
}): Promise<Run>;
