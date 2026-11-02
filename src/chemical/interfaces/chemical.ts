import { MainChemical } from "@jield/solodb-typescript-core/chemical/interfaces/mainChemical";
import { SafetyStatement } from "@jield/solodb-typescript-core/chemical/interfaces/safetyStatement";
import { SafetyIcon } from "@jield/solodb-typescript-core/chemical/interfaces/safetyIcon";

export enum ChemicalStandardProductEnum {
  STANDARD_PRODUCT = 1,
  NON_STANDARD_PRODUCT = 2,
}

export enum ChemicalPhysicalStateEnum {
  SOLID = 1,
  LIQUID = 2,
  GAS = 3,
  OTHER = 4,
}

export interface Chemical {
  id: number;
  name: string;
  cas_number: string | null;
  ehs_link: string | null;
  cmr: string[];
  is_standard_product: boolean;
  // Entity default values are NON_STANDARD_PRODUCT / OTHER, but legacy rows can contain 0
  standard_product: ChemicalStandardProductEnum | 0;
  physical_state: ChemicalPhysicalStateEnum | 0;
  main_chemical: MainChemical | null;
  safety_statements: SafetyStatement[];
  safety_icons: SafetyIcon[];
  // Note: solodb accepts chemical_formula/description on create but does not return them
}
