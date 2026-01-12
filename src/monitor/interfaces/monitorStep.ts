import { ProcessModule } from "@jield/solodb-typescript-core/process/interfaces/module";

export interface MonitorStep {
  id: number;
  process_module: ProcessModule;
}
