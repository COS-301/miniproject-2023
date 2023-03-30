import { describe, expect, test } from '@jest/globals';
import { createMemory } from './../src/functions/memories.functions';
import { MemoriesService } from '@mp/api/memories/feature';
import { ICreateMemoryRequest, ICreateMemoryResponse } from '@mp/api/memories/util';
import { IMemory } from './../../../memories/util/src/interfaces/memory.interface';

describe('Tesing Cloud Function: memories.functions -- with a null memory', () => {
  test('Creating Memory', () => {
    const memory: IMemory = {
      userId: null,
      displayName: null,
      imgUrl: null,
      alive: null,
      time: null,
      comments: null,
    };
    const createMemoryRequest: ICreateMemoryRequest = {
      memory: memory,
    };
    const createMemoryResponse: ICreateMemoryRequest = {
      memory: memory,
    };
    createMemory(createMemoryRequest, createMemoryResponse);
  });
});
