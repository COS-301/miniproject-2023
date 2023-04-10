import { appInboxFeature } from './app-inbox-feature';

describe('apiMessageUtil', () => {
  it('should work', () => {
    const myIMessage = {
        id:"1", //will have to get the message id
        content : {
          textData: "Hello At Thabo Testing Testing here",
          video: null,
          photo:null
        },
        metaData : {
          timePosted : 655000000,
          sender : {
            userID:"User 1"
          }
        }
      };
    
    expect(appInboxFeature()).toEqual(myIMessage);
  });
});
