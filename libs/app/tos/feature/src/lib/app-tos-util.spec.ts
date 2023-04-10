import { tosUtils } from './app-tos-util'

describe('tosUtils', () => {
    it('TOS test', () => {
        expect(tosUtils()).toEqual('app-tos-util');
    });
});