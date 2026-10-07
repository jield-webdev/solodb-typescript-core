export interface Department {
    id: number;
    name: string;
    date_created: string;
    last_update: string | null; // null until first update
}