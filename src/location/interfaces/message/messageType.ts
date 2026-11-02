export interface MessageType {
  id: number;
  type: string;
  date_created: string;
  date_updated: string | null; // matches PHP provider (not last_update)
}
