define(["require", "exports", "path", "gulp-sass"], function (require, exports, path, sass) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function generate(gulp, config, gulptraum) {
        const outputFolderPath = path.resolve(config.paths.root, config.paths.output);
        gulptraum.task('build-sass', {
            help: 'Builds your sass files into css'
        }, (callback) => {
            return gulp.src(config.paths.source)
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(outputFolderPath));
        });
    }
    exports.generate = generate;
});

//# sourceMappingURL=build.js.map
