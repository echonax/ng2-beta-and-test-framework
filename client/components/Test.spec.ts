import 'reflect-metadata';
import {Test} from './Test';

describe('Test.ts spec for validating json', ()=> {
    let test:Test;
    beforeEach(() => {
        test = new Test();
    });

    it('Is "A" a not valid JSON?', ()=> {
        expect(test.validate("A")).toEqual(false);
    });

    it('Is "A" a valid JSON?', ()=> {
        var jsonString = '{ "Id": 1, "Name": 2 }';
        expect(test.validate(jsonString)).not.toBe(true);
    });
});
