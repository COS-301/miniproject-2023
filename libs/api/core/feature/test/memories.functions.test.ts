import { describe, test } from '@jest/globals';
import { createMemory } from '../src';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions-test';

const mockData = { //change according to seeded data
  userId:"0301b908-4fd3-4b2d-af8c-29dd90b4c2fd",
  username:"Dessie.Lebsack@yahoo.com",
  title: "Summer Holiday",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  imgUrl: "https://bit.ly/3MCrcnB" // optional, will be generated
};

describe('Tesing Cloud Function: createMemory', () => {
  test(`Creating Memory for userID = ${mockData.userId}`, async () => {
    const createMemoryRequest = {
      body:{
         data:{
                memory: {
                username: mockData.username,
                userId: mockData.userId,
                title: mockData.title,
                description: mockData.description,
                imgUrl: mockData.imgUrl
              }
          }
        }
    };
    const memoryResponse = {
        username: mockData.username,
        userId: mockData.userId,
        title: mockData.title,
        description: mockData.description,
        imgUrl: mockData.imgUrl
    };
    const createMemoryResponse = {
      memory: memoryResponse
      };
      const response = {
        send: (payload) => {
          console.debug(createMemoryResponse);
          expect(payload).toBe(createMemoryResponse);
        }, 
      };
      await createMemory(createMemoryRequest as any,createMemoryResponse as any);
  });
});
