export interface Plan {
  title: string;
  id: string;
}

export interface BillingSubscription {
  object: string;
  has_payment_method: boolean;
  canceled: boolean;
  canceled_at: number | null;
  delinquent: boolean | null;
  access_until: number;
  soft_limit: number;
  hard_limit: number;
  system_hard_limit: number;
  soft_limit_usd: number;
  hard_limit_usd: number;
  system_hard_limit_usd: number;
  plan: Plan;
  account_name: string;
  po_number: string | null;
  billing_email: string | null;
  tax_ids: any | null;
  billing_address: any | null;
  business_address: any | null;
}
