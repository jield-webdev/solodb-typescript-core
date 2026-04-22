import { Room } from '../../../room/interfaces/room';
export default function getRoom({ id }: {
    id: number;
}): Promise<Room>;
