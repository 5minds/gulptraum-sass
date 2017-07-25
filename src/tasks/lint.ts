import * as fs from 'fs';
import * as path from 'path';
import * as sasslint from 'gulp-sass-lint';

export function generate(gulp, config, gulptraum): void {

  gulptraum.task('lint-sass', {
    help: 'Performs a style check on your SASS files using sass-lint'
  }, (callback) => {

    let sassLintConfigPath = config.paths.sasslintConfig;

    if (!sassLintConfigPath) {
      sassLintConfigPath = path.resolve(__dirname, '../setup/sass-lint.yml');
    }

    return gulp.src(config.paths.source)
      .pipe(sasslint({
        options: {
          'config-file': sassLintConfigPath,
        },
      }))
      .pipe(sasslint.format())
      .pipe(sasslint.failOnError());
  });
}

module.exports.generate = generate;
