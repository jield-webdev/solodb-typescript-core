import { ProcessModule } from '.';
export interface Recipe {
    id: number;
    name: string;
    description: string | null;
    process_module: ProcessModule;
}
