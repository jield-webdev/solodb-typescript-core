export interface FilterFormData {
  filter: Filter;
  facet: Facet;
}

export interface Filter {
  name: string;
  /** Server sends "" when no label; null also possible */
  label: string | null;
  visibility: string;
  elements: FieldsetElement[];
  /** PHP serialises an empty fieldset collection as [] */
  fieldsets: Record<string, Fieldset> | [];
}

export interface Facet {
  name: string;
  label: string | null;
  visibility: string;
  elements: FieldsetElement[];
  /** PHP serialises an empty fieldset collection as [] */
  fieldsets: Record<string, Fieldset> | [];
}

export interface Fieldset {
  name: string;
  label: string | null;
  visibility: string;
  elements: FieldsetElement[];
  /** PHP serialises an empty fieldset collection as [] */
  fieldsets: Record<string, Fieldset> | [];
}

export interface FieldsetElement {
  name: string;
  type: string | null;
  label: string | null;
  options: Options;
  visibility: string;
  /** Server may send an array when there are no options */
  value_options: Record<string, string> | string[];
}

export interface Options {
  label?: string;
  value_options?: Record<string, string> | string[];
  inline?: boolean;
  type?: number;
  visibility?: string;
}

export interface FilterData {
  filter: { general: string[] };
  facet: { [fieldsetName: string]: {values: string[]} };
}
