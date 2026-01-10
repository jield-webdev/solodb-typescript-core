import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export interface Rework {
  id: number;
  comment: string;
  user: User;
}
