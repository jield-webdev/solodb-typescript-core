import { Run } from '../../../run/interfaces/run';
export default function getRun({ id }: {
    id: number;
}): Promise<Run>;
