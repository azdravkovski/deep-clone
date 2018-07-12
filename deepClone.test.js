import {deepClone} from './deepClone';

describe('deepClone()', () => {
    test('should clone arrays', () => {
        expect([1, 2, 3]).toBe([1, 2, 3]);
    })    
})