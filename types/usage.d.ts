export interface LineItem {
  name: string;
  cost: number;
}

export interface DailyCost {
  timestamp: number;
  line_items: LineItem[];
}

export interface DailyCostsList {
  object: string;
  daily_costs: DailyCost[];
  total_usage: number;
}
