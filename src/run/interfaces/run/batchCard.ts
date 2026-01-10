import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export interface BatchCard {
  id: number;
  content: string;
  user: User;
  date_created: string;
  last_update?: string;
}
