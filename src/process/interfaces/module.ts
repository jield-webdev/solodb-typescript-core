import { Process } from "@jield/solodb-typescript-core/process/interfaces/process";
import { EquipmentModule } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/equipmentModule";

export interface ProcessModule {
  id: number;
  process: Process;
  module: EquipmentModule;
  in_use: boolean;
  is_assembly_process: boolean;
  has_local_parameters: boolean;
}
