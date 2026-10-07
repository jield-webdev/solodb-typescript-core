import { Chemical } from "../chemical";
import { Project } from "../../../core/interfaces/project";
import { ChemicalContainerType } from "./container/chemicalContainerType";
import { ChemicalContainerPurpose } from "./container/chemicalContainerPurpose";
import { ChemicalContainerMethodOfUse } from "./container/chemicalContainerMethodOfUse";
import { Location } from "../../../room/interfaces/location";

export enum ChemicalContainerAmountUnitEnum {
  GRAM = "g",
  KILOGRAM = "kg",
  US_POUND = "lb",
  MICROGRAM = "mc",
  MILLIGRAM = "mg",
  OUNCE = "oz",
  TONNES = "to",
  US_TON = "ton",
  CUBIC_INCH = '"3',
  CUBIC_CENTIMETER = "ccm",
  CENTILITER = "cl",
  CUBIC_DECIMETER = "dm3",
  FLUID_OUNCE_US = "foz",
  CUBIC_FOOT = "ft3",
  US_GALLON = "gal",
  HECTOLITERS = "hl",
  KIT = "kit",
  LITER = "l",
  CUBIC = "m3",
  MILLILITER = "ml",
  CUBIC_MILLIMETER = "mm3",
  ITEM = "pc",
  PIECE = "pce",
  PINT_UL_LIQUID = "pt",
  QUART_UC_LIQUID = "qt",
  CUBIC_YARD = "yd3",
  MICROLITER = "µl",
  TABLETS = "tablets",
}

export interface ChemicalContainer {
  id: number;
  chemical: Chemical;
  location: Location;
  project?: Project;
  is_marked_for_removal: boolean;
  marked_for_removal_date?: string;
  is_deleted: boolean;
  supplier: string | null;
  concentration: string | null;
  amount: string | null;
  amount_unit: ChemicalContainerAmountUnitEnum | null;
  order_number: string | null;
  type?: ChemicalContainerType;
  purpose: ChemicalContainerPurpose | null;
  method_of_use: ChemicalContainerMethodOfUse | null;
  amount_of_users: number;
  amount_of_active_users: number;
  amount_of_inactive_users: number;
  date_arrived: string | null;
  // Legacy rows may contain placeholder values such as 1900-01-01T11:44:29+00:19 instead of null
  date_expire: string | null;
  date_opened: string | null;
  i_am_user?: boolean;
  i_am_responsible?: boolean;
}
