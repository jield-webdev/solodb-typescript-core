import { LocationMessage } from '../interfaces/locationMessage';
export default function createLocationMessage({ title, description, owner, type, rooms, }: {
    title: string;
    description?: string;
    /** User id. Required by the API (400 if the user is not found). */
    owner: number;
    /** Message type id. Required by the API (400 if the type is not found). */
    type: number;
    /** Room ids where the message should be visible. */
    rooms?: number[];
}): Promise<LocationMessage>;
