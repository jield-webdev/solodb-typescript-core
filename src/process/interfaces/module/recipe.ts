import { ProcessModule } from "@jield/solodb-typescript-core/process/interfaces/module";

export interface Recipe {
  id: number;
  name: string;
  process_module: ProcessModule;
}
