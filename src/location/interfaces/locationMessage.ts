import { MessageType } from "@jield/solodb-typescript-core/location/interfaces/message/messageType";
import { User } from "@jield/solodb-typescript-core/core/interfaces/user";
import { Room } from "@jield/solodb-typescript-core/room/interfaces/room";

export interface LocationMessage {
  id: number;
  title: string;
  description: string;
  date_created: string;
  last_update: string | null;
  type: MessageType;
  owner: User;
  updated_by: User | null;
  rooms: Room[];
}
