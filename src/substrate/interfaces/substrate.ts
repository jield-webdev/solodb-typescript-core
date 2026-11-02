export interface Substrate {
  id: number;
  /** Full parsed label of the substrate (SubstrateService::parseFullLabel) */
  label: string;
  /** Raw substrate label (Substrate::getLabel) */
  short_label: string;
}
