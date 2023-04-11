import { apiMessageDataAccess } from './api-message-data-access';

describe('apiPostDataAccess', () => {
  it('should work', () => {
    expect(apiMessageDataAccess()).toEqual('api-post-data-access');
  });
});
