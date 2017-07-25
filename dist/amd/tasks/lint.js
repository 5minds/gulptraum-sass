define(["require", "exports", "path", "gulp-sass-lint"], function (require, exports, path, sasslint) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function generate(gulp, config, gulptraum) {
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
    exports.generate = generate;
    module.exports.generate = generate;
});

//# sourceMappingURL=lint.js.map
