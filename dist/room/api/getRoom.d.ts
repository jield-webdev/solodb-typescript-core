import { Room } from '../interfaces/room';
export default function getRoom({ id }: {
    id: number;
}): Promise<Room>;
