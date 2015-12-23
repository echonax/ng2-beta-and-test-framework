System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    //map tells the System loader where to look for things
    defaultJSExtensions: true,
    map: {
        RootComponent: "./components/RootComponent"
    }
});