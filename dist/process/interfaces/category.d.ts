import { Type } from './type';
export interface Category {
    id: number;
    name: string;
    number: number | null;
    types: Type[];
    amount_of_processes: number;
}
