System.register(['reflect-metadata', './Test'], function(exports_1) {
    var Test_1;
    return {
        setters:[
            function (_1) {},
            function (Test_1_1) {
                Test_1 = Test_1_1;
            }],
        execute: function() {
            describe('Test.ts spec for validating json', function () {
                var test;
                beforeEach(function () {
                    test = new Test_1.Test();
                });
                it('Is "A" a not valid JSON?', function () {
                    expect(test.validate("A")).toEqual(false);
                });
                it('Is "A" a valid JSON?', function () {
                    var jsonString = '{ "Id": 1, "Name": 2 }';
                    expect(test.validate(jsonString)).not.toBe(true);
                });
            });
        }
    }
});
//# sourceMappingURL=Test.spec.js.map