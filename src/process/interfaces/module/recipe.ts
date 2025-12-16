import { ProcessModule } from "@/process/interfaces/module";

export interface Recipe {
  id: number;
  name: string;
  process_module: ProcessModule;
}
