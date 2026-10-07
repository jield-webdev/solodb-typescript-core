import { ProcessModule } from "@jield/solodb-typescript-core/process/interfaces/module";

export interface Recipe {
  id: number;
  name: string;
  description: string | null;
  process_module: ProcessModule;
}
