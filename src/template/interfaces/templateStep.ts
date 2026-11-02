import { Version } from "@jield/solodb-typescript-core/process/interfaces/module/recipe/version";
import { ProcessModule } from "@jield/solodb-typescript-core/process/interfaces/module";

export interface TemplateStepGroup {
  id: number;
  label: string;
}

export interface TemplateStepLabel {
  id: number;
  label: string | null;
}

export interface TemplateStep {
  id: number;
  name: string;
  sequence: number;
  number: number | null;
  has_step_group: boolean;
  step_group?: TemplateStepGroup;

  has_label: boolean;
  is_own_label: boolean;
  label?: TemplateStepLabel;

  is_private: boolean;
  has_requirement: boolean;

  tags: string[];

  amount_of_files: number;
  has_instructions: boolean;
  instructions: string;
  has_remark: boolean;
  remark: string;
  remark_unparsed: string;
  sub_steps: number;

  process_module: ProcessModule;

  has_recipe: boolean;
  recipe_version?: Version;
  template_id: number;
}
