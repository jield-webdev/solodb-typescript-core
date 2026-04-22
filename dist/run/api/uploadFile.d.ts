import { Run } from '../interfaces/run';
import { RunStep } from '../interfaces/runStep';
export default function uploadFile({ filename, type, content, run, step, }: {
    filename: string;
    type: string;
    content: string;
    run?: Run;
    step?: RunStep;
}): Promise<Record<string, unknown>>;
