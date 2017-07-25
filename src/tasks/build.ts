import * as path from 'path';
import * as sass from 'gulp-sass';

export function generate(gulp, config, gulptraum): void {

  const outputFolderPath = path.resolve(config.paths.root, config.paths.output);

  gulptraum.task('build-sass', {
    help: 'Builds your sass files into css'
  }, (callback) => {

    return gulp.src(config.paths.source)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(outputFolderPath));
  });
}
