import { BillingApi } from '../src';

let api: BillingApi;

describe('index', () => {
  beforeAll(() => {
    api = new BillingApi({
      apiKey: 'sk-xxx',
      sesssionKey: 'sess-xxxx',
      // organization: 'org-xxx',
    });
  });
  describe('openai-api', () => {
    it('getSubscriptions', async () => {
      await api.getSubscriptions().then(res => {
        console.log(res);
      });
    });

    it('getCreditGrants', async () => {
      await api.getCreditGrants().then(res => {
        console.log(JSON.stringify(res));
      });
    });

    it('getBillingUsage', async () => {
      await api.getBillingUsage('2023-03-01', '2023-04-01').then(res => {
        console.log(JSON.stringify(res));
      });
    });

    it('getDayUsage', async () => {
      await api.getDayUsage('2023-04-22').then(res => {
        console.log(res);
      });
    });
  });
});
