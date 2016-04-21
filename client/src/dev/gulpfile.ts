import {Gulpclass, Task, SequenceTask} from 'gulpclass/Decorators';
import * as gulp from 'gulp';
import * as concat from 'gulp-concat';
import * as sourcemaps from 'gulp-sourcemaps';
import * as typescript from 'gulp-typescript';
import * as del from 'del';

class Config {
  outDir: string = '../../dist';
}

class ServerConfig {
  tsConfig: string = '../server/tsconfig.json';
  sourceFiles: string[] = [
    '../server/**/*.ts',
    '!../server/typings/browser/**/*.*',
    '!../server/typings/browser.d.ts'];
}

class ClientConfig {
  tsConfig: string = '../client/tsconfig.json';
  sourceFiles: string[] = [
    '../client/**/*.ts',
    '!../client/typings/main/**/*.*',
    '!../client/typings/main.d.ts'];
}

@Gulpclass()
export class GulpFile {
  private _config: Config = new Config();

  private _serverConfig: ServerConfig = new ServerConfig();

  private _clientConfig: ClientConfig = new ClientConfig();

  @Task()
  clean() {
    return del(`${this._config.outDir}/**`, { force: true });
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
    return ['_buildClientApp', '_buildClientIndex'];
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
      .pipe(gulp.dest(this._config.outDir));
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
      .pipe(gulp.dest(this._config.outDir));
  }

  @Task()
  _buildClientIndex() {
    let tsProject = typescript.createProject(this._clientConfig.tsConfig);
    let tsResult = gulp
      .src(this._clientConfig.sourceFiles)
      .pipe(sourcemaps.init())
      .pipe(typescript(tsProject));

    return tsResult.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(this._config.outDir));
  }
}
