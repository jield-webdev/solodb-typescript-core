import axios from "axios";
import { LocationMessage } from "@jield/solodb-typescript-core/location/interfaces/locationMessage";

export default async function createLocationMessage({
  title,
  description,
  owner,
  type,
  rooms,
}: {
  title: string;
  description?: string;
  /** User id. Required by the API (400 if the user is not found). */
  owner: number;
  /** Message type id. Required by the API (400 if the type is not found). */
  type: number;
  /** Room ids where the message should be visible. */
  rooms?: number[];
}): Promise<LocationMessage> {
  const response = await axios.post<LocationMessage>("create/location/message", {
    title,
    description,
    owner,
    type,
    rooms: rooms ?? [],
  });

  return response.data;
}
