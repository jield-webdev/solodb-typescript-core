import { RunStep } from '../../../run/interfaces/runStep';
export default function getRunStep({ id }: {
    id: number;
}): Promise<RunStep>;
