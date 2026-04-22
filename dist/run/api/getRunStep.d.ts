import { RunStep } from '../interfaces/runStep';
export default function getRunStep({ id }: {
    id: number;
}): Promise<RunStep>;
