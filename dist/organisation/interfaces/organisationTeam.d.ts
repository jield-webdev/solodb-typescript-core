export declare enum TeamPurpose {
    Run = 1,
    Service = 2,
    Quota = 3
}
export type OrganisationTeam = {
    id: number;
    name: string;
    abbr: string;
    label: string;
    is_active: boolean;
    date_created?: string;
    last_update?: string | null;
};
