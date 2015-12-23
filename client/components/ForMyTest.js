System.register([], function(exports_1) {
    var ForMyTest;
    return {
        setters:[],
        execute: function() {
            ForMyTest = (function () {
                function ForMyTest(input) {
                    console.log("ForMyTest class");
                    this.id = input;
                }
                return ForMyTest;
            })();
            exports_1("ForMyTest", ForMyTest);
        }
    }
});
//# sourceMappingURL=ForMyTest.js.map