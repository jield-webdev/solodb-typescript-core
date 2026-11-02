import { Zone } from '../interfaces/zone';
export default function getZone({ id }: {
    id: number;
}): Promise<Zone>;
