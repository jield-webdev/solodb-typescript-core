import { Location } from '../interfaces/location';
export default function getLocation({ id }: {
    id: number;
}): Promise<Location>;
