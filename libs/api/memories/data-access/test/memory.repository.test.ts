import {describe, expect, test} from '@jest/globals';
import { IMemory } from '../../util/src/interfaces/memory.interface';
import { MemoryRepository } from './../src/memory.repository';

describe('testing memory repository',()=>{
    test("createMemory()",()=>{
        const memory:IMemory={
            userId:null,
            displayName:null,
            imgUrl:null, 
            alive : null,
            time:null,
            comments: null
        };
        const memoryRepository:MemoryRepository=new MemoryRepository();
        memoryRepository.createMemory(memory)
        .then((createMemoryResponse)=>{
            expect(createMemoryResponse).toBe(null);
        });
    })
});