import { User } from "@/core/interfaces/user";
import { ChemicalContainer } from "@/chemical/interfaces/chemical/chemicalContainer";

export interface ChemicalContainerUser {
  id: number;
  user: User;
  comment: string | null;
  date_created: string;
  deleted_at: string | null;
  container: ChemicalContainer;
}
