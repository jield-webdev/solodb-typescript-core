import { Location } from '../../../room/interfaces/location';
export default function getLocation({ id }: {
    id: number;
}): Promise<Location>;
