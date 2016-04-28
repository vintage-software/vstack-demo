import {Gulpclass, Task, SequenceTask} from 'gulpclass/Decorators';
import * as gulp from 'gulp';
import * as concat from 'gulp-concat';
import * as sourcemaps from 'gulp-sourcemaps';
import * as typescript from 'gulp-typescript';
import * as inject from 'gulp-inject';
import * as sass from 'gulp-sass';
import * as del from 'del';
import * as browserSync from 'browser-sync';
import * as runSequence from 'run-sequence';

class ServerConfig {
  outDir: any = {
    root: '../../dist'
  };
  tsConfig: string = '../server/tsconfig.json';
  sourceFiles: string[] = [
    '../server/**/*.ts',
    '!../server/typings/browser/**/*.*',
    '!../server/typings/browser.d.ts'];
}

class ClientConfig {
  outDir: any = {
    root: '../../dist',
    javaScript: '../../dist/assets/js',
    css: '../../dist/assets/styles',
    html: '../../dist/app'
  };
  html: any = {
    rootSrc: '../client/index.html',
    src: '../client/app/**/*.html'
  };
  sass: any = {
    src: [
      '../client/assets/styles/app.scss'
    ]
  };
  javascript: any = {
    src: [
      '../../node_modules/es6-shim/es6-shim.js',
      '../../node_modules/angular2/bundles/angular2-polyfills.js',
      '../../node_modules/systemjs/dist/system.src.js',
      '../../node_modules/rxjs/bundles/Rx.js',
      '../../node_modules/angular2/bundles/angular2.dev.js',
      '../../node_modules/angular2/bundles/http.dev.js',
      '../../node_modules/angular2/bundles/router.dev.js',
      '../../node_modules/vstack-graph/bundles/vstack-graph.min.js'
    ]
  };
  css: any = {
    src: [
      '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]
  };
  tsConfig: string = '../client/tsconfig.json';
  sourceFiles: string[] = [
    '../client/**/*.ts',
    '!../client/typings/main/**/*.*',
    '!../client/typings/main.d.ts'];
}

@Gulpclass()
export class GulpFile {
  private _serverConfig: ServerConfig = new ServerConfig();

  private _clientConfig: ClientConfig = new ClientConfig();

  @Task()
  clean() {
    return del([`${this._clientConfig.outDir.root}/**`, `${this._serverConfig.outDir.root}/**`], { force: true });
  }

  @SequenceTask()
  build() {
    return ['clean', 'buildServer', 'buildClient'];
  }

  @SequenceTask()
  buildServer() {
    return ['_buildServerApp'];
  }

  @SequenceTask()
  buildClient() {
    return ['_buildClientApp', '_transferJsDependencies', '_transferCssDependencies', '_buildSass', '_transferHtml', '_buildClientIndex'];
  }

  @Task('serve', ['build', '_browserSync', '_watch'])
  serve() {
  }

  @Task()
  _watch() {
    gulp.watch(['../client/**/*.ts'], () => runSequence('_buildClientApp', '_browserSyncReload'));
  }

  @Task()
  _browserSyncReload() {
    browserSync.reload();
  }

  @Task()
  _browserSync() {
    browserSync.init({
      server: {
        baseDir: '../../dist'
      },
      logFileChanges: false
    });

    console.log('sync');
  }

  @Task()
  _buildServerApp() {
    let tsProject = typescript.createProject(this._serverConfig.tsConfig);
    let tsResult = gulp
      .src(this._serverConfig.sourceFiles)
      .pipe(sourcemaps.init())
      .pipe(typescript(tsProject));

    return tsResult.js
      .pipe(concat('server.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(this._clientConfig.outDir.root));
  }

  @Task()
  _buildClientApp() {
    let tsProject = typescript.createProject(this._clientConfig.tsConfig);
    let tsResult = gulp
      .src(this._clientConfig.sourceFiles)
      .pipe(sourcemaps.init())
      .pipe(typescript(tsProject));

    return tsResult.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(this._clientConfig.outDir.root));
  }

  @Task()
  _buildSass() {
    return gulp.src(this._clientConfig.sass.src)
      .pipe(sass())
      .pipe(gulp.dest(this._clientConfig.outDir.css));
  }

  @Task()
  _transferJsDependencies() {
    return gulp.src(this._clientConfig.javascript.src)
      .pipe(gulp.dest(this._clientConfig.outDir.javaScript));
  }

  @Task()
  _transferCssDependencies() {
    return gulp.src(this._clientConfig.css.src)
      .pipe(gulp.dest(this._clientConfig.outDir.css));
  }

  @Task()
  _transferHtml() {
    return gulp.src(this._clientConfig.html.src)
      .pipe(gulp.dest(this._clientConfig.outDir.html));
  }

  @Task()
  _buildClientIndex() {
    let target = gulp.src(this._clientConfig.html.rootSrc);
    let jsFiles = this._clientConfig.javascript.src.map(file => `${this._clientConfig.outDir.javaScript}/${file.replace(/^.*[\\\/]/, '')}`);
    let cssFiles = `${this._clientConfig.outDir.css}/**/*.css`;
    let sources = gulp.src(jsFiles.concat(cssFiles), { read: false });

    return target
      .pipe(inject(sources, { ignorePath: '../../dist' }))
      .pipe(gulp.dest(this._clientConfig.outDir.root));
  }
}
