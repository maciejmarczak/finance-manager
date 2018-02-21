export interface Operation {
  id: number;
  issuerId?: number;
  date: Date;
  value: number;
  currency: string;
  category: string;
}
