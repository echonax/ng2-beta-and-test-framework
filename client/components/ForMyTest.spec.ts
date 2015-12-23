import 'reflect-metadata';
import {ForMyTest} from './ForMyTest';

describe('Sanity tests', () => {

    it('should do math', () => {
        expect(1+1).toBe(2);
        expect(5).toBeGreaterThan(4);
    });

    it('should provide default id', () => {
        var test = new ForMyTest(1);
        expect(test.id).toBe(1);
    });
});