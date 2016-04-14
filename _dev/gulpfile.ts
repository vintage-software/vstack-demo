import {Gulpclass, Task} from 'gulpclass/Decorators';
import * as gulp from 'gulp';
import * as concat from 'gulp-concat';
import * as sourcemaps from 'gulp-sourcemaps';
import * as typescript from 'gulp-typescript';
import * as del from 'del';

class ServerConfig {
  outDir: string = '../dist/server';
  tsConfig: string = '../_server/tsconfig.json';
  sourceFiles: string[] = ['../_server/**/*.ts', '!../_server/typings/browser/**/*.*', '!../_server/typings/browser.d.ts'];
}

@Gulpclass()
export class Gulpfile {
  private _serverConfig: ServerConfig = new ServerConfig();

  @Task()
  cleanServer() {
    return del(`${this._serverConfig.outDir}/**`, { force: true });
  }

  @Task()
  buildServer() {
    let tsProject = typescript.createProject(this._serverConfig.tsConfig);
    let tsResult = gulp
      .src(this._serverConfig.sourceFiles)
      .pipe(sourcemaps.init())
      .pipe(typescript(tsProject));

    return tsResult.js
      .pipe(concat('server.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(this._serverConfig.outDir));
  }
}
