import { User } from "@jield/solodb-typescript-core/core/interfaces/user";
import { ChemicalContainer } from "@jield/solodb-typescript-core/chemical/interfaces/chemical/chemicalContainer";

export interface ChemicalContainerUser {
  id: number;
  user: User;
  comment: string | null;
  date_created: string;
  deleted_at: string | null;
  container: ChemicalContainer;
}
