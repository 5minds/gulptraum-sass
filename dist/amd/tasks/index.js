define(["require", "exports", "./build", "./clean", "./lint", "./setup_dev"], function (require, exports, build_1, clean_1, lint_1, setup_dev_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initializePluginTasks(gulp, config, gulptraum) {
        build_1.generate(gulp, config, gulptraum);
        clean_1.generate(gulp, config, gulptraum);
        lint_1.generate(gulp, config, gulptraum);
        setup_dev_1.generate(gulp, config, gulptraum);
    }
    exports.initializePluginTasks = initializePluginTasks;
});

//# sourceMappingURL=index.js.map
