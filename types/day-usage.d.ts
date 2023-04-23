export interface DataItem {
  aggregation_timestamp: number;
  n_requests: number;
  operation: string;
  snapshot_id: string;
  n_context: number;
  n_context_tokens_total: number;
  n_generated: number;
  n_generated_tokens_total: number;
}

export interface DalleApiDataItem {
  timestamp: number;
  num_images: number;
  num_requests: number;
  image_size: string;
  operation: string;
}

export interface DayUsage {
  object: string;
  data: DataItem[];
  ft_data: any[];
  dalle_api_data: DalleApiDataItem[];
  whisper_api_data: any[];
  current_usage_usd: number;
}
