System.config({
    map: {
        angular2: 'node_modules/angular2',
        rxjs: 'node_modules/rxjs',
        app: 'dist'
    },
    packages: {
        angular2: {
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        app: {
            defaultExtension: 'js',
            main: 'main.js'
        }
    }
})