import { Setup } from '../interfaces/setup';
export default function getSetup({ id }: {
    id: number;
}): Promise<Setup>;
