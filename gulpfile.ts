import {src, dest, parallel} from 'gulp';
import ts from 'gulp-typescript';

function copy() {
  return src('lib/templates/**')
    .pipe(dest('dist/lib/templates'));
}

function scriptLib() {
  return src('lib/actions/*.ts')
    .pipe(ts.createProject('tsconfig.json')())
    .pipe(dest('dist/lib/actions'));
}
function scriptPlop() {
  return src(['plopfile.ts', 'index.ts'])
    .pipe(ts.createProject('tsconfig.json')())
    .pipe(dest('dist'));
}
export const build = parallel(copy, scriptLib, scriptPlop);
