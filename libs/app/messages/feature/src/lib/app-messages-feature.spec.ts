import { MessagesModule } from './messages.module';

describe('appMessagesFeature', () => {
  it('should work', () => {
    expect(new MessagesModule()).toEqual('app-messages-feature');
  });
});
