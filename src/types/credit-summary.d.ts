export interface CreditGrant {
  object: string;
  id: string;
  grant_amount: number;
  used_amount: number;
  effective_at: number;
  expires_at: number;
}

export interface GrantsList {
  object: string;
  data: CreditGrant[];
}

export interface CreditSummary {
  object: string;
  total_granted: number;
  total_used: number;
  total_available: number;
  grants: GrantsList;
}
