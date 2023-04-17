import { describe, test } from '@jest/globals';
import { createMemory } from '../src';

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
     data:{
            memory: {
            username: mockData.username,
            userId: mockData.userId,
            title: mockData.title,
            description: mockData.description,
            imgUrl: mockData.imgUrl
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
    
    fetch('http://127.0.0.1:5005/demo-project/us-central1/createMemory',{
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      mode: 'no-cors',
      body: JSON.stringify(createMemoryRequest)
    })
    .then((onSuccess)=>{
      console.log(onSuccess.body);
      expect(onSuccess).toBe('')
    },(e)=>{
      console.debug(e);
    })
});
