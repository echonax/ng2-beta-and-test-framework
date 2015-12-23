System.register(['reflect-metadata', './ForMyTest'], function(exports_1) {
    var ForMyTest_1;
    return {
        setters:[
            function (_1) {},
            function (ForMyTest_1_1) {
                ForMyTest_1 = ForMyTest_1_1;
            }],
        execute: function() {
            describe('Sanity tests', function () {
                it('should do math', function () {
                    expect(1 + 1).toBe(2);
                    expect(5).toBeGreaterThan(4);
                });
                it('should provide default id', function () {
                    var test = new ForMyTest_1.ForMyTest(1);
                    expect(test.id).toBe(1);
                });
            });
        }
    }
});
//# sourceMappingURL=ForMyTest.spec.js.map