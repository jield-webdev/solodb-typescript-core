import { Run } from '../interfaces/run';
export default function getRun({ id }: {
    id: number;
}): Promise<Run>;
