import { describe, test } from '@jest/globals';
import { mockData } from './mock.data';

describe('Tesing Cloud Function: getUser', () => {
  test(`getting user with userId = ${mockData.userId} \n using endPoint`, async () => {
    const getUserRequest = {
      data: {
        user: {
          userId: '0104fa66-5a7b-429c-aedd-acab833be72e',
        },
      },
    };

    const res = await fetch('http://127.0.0.1:5005/demo-project/us-central1/getUser', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(getUserRequest),
    });
    const getUserResponse = (await res.json()).result.user;
    console.debug('getUserResponse: ', getUserResponse);
    expect(getUserResponse.userId).toBe(mockData.userId);
    expect(getUserResponse.username).toBe(mockData.username);
    expect(getUserResponse.email).toBe(mockData.email);
    expect(getUserResponse.profileImgUrl).toBe(mockData.profileImgUrl);
  });
  test(`Getting user with invalid username, using endPoint`, async () => {
    const getUserRequest = {
      data: {
        user: {
          userId: 'An Invalid userId',
        },
      },
    };

    const res = await fetch('http://127.0.0.1:5005/demo-project/us-central1/getUser', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(getUserRequest),
    });
    const getUserResponse = await res.json();
    const errorResponse = {
      error: {
        message: 'Could not retrieve user. Info: Error: User not found',
        status: 'NOT_FOUND',
      },
    };
    console.debug(getUserResponse);
    expect(getUserResponse).toEqual(errorResponse);
  });
});