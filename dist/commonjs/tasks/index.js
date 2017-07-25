"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = require("./build");
const clean_1 = require("./clean");
const lint_1 = require("./lint");
const setup_dev_1 = require("./setup_dev");
function initializePluginTasks(gulp, config, gulptraum) {
    build_1.generate(gulp, config, gulptraum);
    clean_1.generate(gulp, config, gulptraum);
    lint_1.generate(gulp, config, gulptraum);
    setup_dev_1.generate(gulp, config, gulptraum);
}
exports.initializePluginTasks = initializePluginTasks;

//# sourceMappingURL=index.js.map
