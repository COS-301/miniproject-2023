import { describe, test, expect } from '@jest/globals';
import { mockData } from './mock.data';

describe('Tesing Cloud Function: createMemory', () => {
  test(`Creating Memory for userID = ${mockData.userId} \n using endPoint`, async () => {
    const createMemoryRequest = {
      data: {
        memory: {
          username: mockData.username,
          userId: mockData.userId,
          title: mockData.title,
          description: mockData.description,
          imgUrl: mockData.imgUrl,
        },
      },
    };

    const res = await fetch('http://127.0.0.1:5005/demo-project/us-central1/createMemory', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(createMemoryRequest),
    });
    const createMemoryResponse = (await res.json()).result.memory;
    console.debug('createMemoryResponse: ', createMemoryResponse);
    expect(createMemoryResponse.username).toBe(mockData.username);
    expect(createMemoryResponse.alive).toBe(true);
    expect(createMemoryResponse.remainingTime).toBe(86400);
    expect(createMemoryResponse.commentsCount).toBe(0);
  });
  test(`Creating Memory for user that does not exist using endPoint`, async () => {
    const createMemoryRequest = {
      data: {
        memory: {
          username: mockData.username,
          userId: '12437',
          title: mockData.title,
          description: mockData.description,
          imgUrl: mockData.imgUrl,
        },
      },
    };

    const res = await fetch('http://127.0.0.1:5005/demo-project/us-central1/createMemory', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(createMemoryRequest),
    });
    const createMemoryResponse = await res.json();
    const errorResponse = {
      error: {
        message: 'User not found',
        status: 'NOT_FOUND',
      },
    };
    console.debug(createMemoryResponse);
    expect(createMemoryResponse).toEqual(errorResponse);
  });
  
  test('hitting endpoint with invalid request structure', async()=>{
    const createMemoryRequest = {
      structure:{
        info: "this should return an error"
      }
    };
    const errorResponse = {
      error: {
        message: 'Bad Request',
        status: 'INVALID_ARGUMENT',
      },
    };
    const res = await fetch('http://127.0.0.1:5005/demo-project/us-central1/createMemory', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(createMemoryRequest),
    });
    const createMemoryResponse = await res.json();
    console.debug(createMemoryResponse);
    expect(createMemoryResponse).toEqual(errorResponse);
  })
});
