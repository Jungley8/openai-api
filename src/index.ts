import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';
import {
  DataOrError,
  BillingSubscription,
  CreditSummary,
  DailyCostsList,
  DayUsage,
  Config,
} from '../types';

const erorrHandler = (error: AxiosError) => {
  if (error.response) {
    const statusCode = error.response.status;
    if (statusCode < 500) {
      console.log(error.response.data);
      return {
        data: {
          message: error.response.statusText,
          statusCode,
          data: error.response.data,
        },
      };
    }
  }
  throw error;
};

export class BillingApi {
  private request: AxiosInstance;
  constructor(readonly config: Config) {
    const { apiKey, sesssionKey, organization, host } = config;
    const key = apiKey || sesssionKey;
    const axiosConfig: CreateAxiosDefaults = {
      baseURL: host || 'https://api.openai.com',
      headers: {
        Authorization: key ? `Bearer ${key}` : undefined,
        'OpenAI-Organization': organization,
      },
    };
    this.request = axios.create(axiosConfig);
  }

  async getSubscriptions(): Promise<DataOrError<BillingSubscription>> {
    try {
      const response = await this.request
        .get('/v1/dashboard/billing/subscription')
        .catch(erorrHandler);
      return response.data as DataOrError<BillingSubscription>;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCreditGrants(): Promise<DataOrError<CreditSummary>> {
    try {
      if (!this.config.sesssionKey) {
        throw new Error('sessionKey is required');
      }
      const response = await this.request
        .get('/v1/dashboard/billing/credit_grants', {
          headers: {
            Authorization: `Bearer ${this.config.sesssionKey}`,
          },
        })
        .catch(erorrHandler);
      return response.data as DataOrError<CreditSummary>;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getBillingUsage(
    start_date: string,
    end_date: string
  ): Promise<DataOrError<DailyCostsList>> {
    const startDate = start_date || '';
    const endDate = end_date || '';
    try {
      const response = await this.request
        .get(
          `/v1/dashboard/billing/usage?start_date=${startDate}&end_date=${endDate}`
        )
        .catch(erorrHandler);
      return response.data as DataOrError<DailyCostsList>;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getDayUsage(date: string): Promise<DataOrError<DayUsage>> {
    const dateStr = date || '';
    try {
      const response = await this.request
        .get(`/v1/usage?date=${dateStr}`)
        .catch(erorrHandler);
      return response.data as DataOrError<DayUsage>;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default {
  BillingApi,
};
