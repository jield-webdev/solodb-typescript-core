import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export enum ShowIssuesOptionEnum {
  HIDE_ISSUES = 1,
  SHOW_ISSUES = 2,
  COLLAPSE_ISSUES = 3,
}

export enum OrderOptionEnum {
  NAME = 1,
  MES_NAME = 2,
  NUMBER = 3,
}

export enum ClassificationsOptionEnum {
  AREA = 1,
  AREA_PER_FACILITY = 2,
  ROOM = 3,
  NONE = 4,
}

export enum DirectionOptionEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export interface StatusMail {
  id: number;
  name: string;
  date_created: string;
  last_update: string | null;
  filter: {
    facility?: (string | number)[];
    area?: (string | number)[];
    MESStatus?: (string | number)[];
    messageType?: (string | number)[];
  } | null;
  equipment_filter: string | null;
  sequence: number;
  show_issues_with_priority: boolean;
  show_in_navigation: boolean;
  show_issues: ShowIssuesOptionEnum;
  show_reservations: boolean;
  classification: ClassificationsOptionEnum;
  order: OrderOptionEnum;
  direction: DirectionOptionEnum;
  user: User;
  to: string;
  cc: string | null;
  bcc: string | null;
  subject: string;
}
