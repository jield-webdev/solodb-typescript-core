export type TrayTypeOrientation = "ltr" | "ttb";
export interface TrayType {
    id: number;
    type: string;
    description: string;
    rows: number;
    columns: number;
    orientation: TrayTypeOrientation;
}
