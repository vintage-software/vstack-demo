module.exports = {
    app: { baseName: 'app' },
    server: {
        baseDir: '../../dist',
        proxy: '',
        serverFile: '../server/server.ts', // temp fix
        serverFileDist: '../../dist'       // temp fix
    },
    sass: {
        src: ['../client/styles/**/*.scss'],
        lintSrc: [
            '../client/styles/**/*',
            '!../client/styles/libraries/**/*',
            '!../client/styles/_grid.scss',
            '!../client/styles/_normalize.scss'
        ]
    },
    typescript: {
        src: ['../client/**/*.ts', '../client/**/*.spec.ts'],
        typings: [
            '../client/typings/**',
            '!../client/node_modules',
            '!../client/typings/browser.d.ts',
            '!../client/typings/browser/**'
        ]
    },
    images: {
        src: ['../client/assets/images/**/*']
    },
    html: {
        src: ['../client/app/**/*.html', '!../client/index.html'],
        rootSrc: '../client/index.html',
        templateUrlReferences: ['../../dist/app/**/*.js']
    },
    font: {
        src: ['../client/assets/fonts/**/*.*']
    },
    javascript: {
        src: [
            '../../node_modules/es6-shim/es6-shim.js',
            '../../node_modules/angular2/bundles/angular2-polyfills.js',
            '../../node_modules/systemjs/dist/system.src.js',
            '../../node_modules/rxjs/bundles/Rx.js',
            '../../node_modules/angular2/bundles/angular2.dev.js',
            '../../node_modules/angular2/bundles/router.dev.js',
            '../../node_modules/angular2/bundles/http.dev.js',
            '../../node_modules/vstack-graph/bundles/vstack-graph.min.js'
        ]
    },
    buildLocations: {
        rootDist: /..\/..\/dist\//g,
        html: '../../dist/app/',
        index: '../../dist/',
        typescript: '../../dist/',
        css: '../../dist/styles/',
        img: '../../dist/assets/images/',
        js: '../../dist/assets/javascript/',
        fonts: '../../distassets/fonts/',
        clean: '../../dist/**/*'
    }
}