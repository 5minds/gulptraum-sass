"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.getDefaultConfig = function (buildSystemConfig) {
    let paths = Object.assign({}, buildSystemConfig.paths);
    paths.source = `${path.resolve(buildSystemConfig.paths.root, buildSystemConfig.paths.source)}/**/*.s+(a|c)ss`;
    const sasslintConfigPath = path.resolve(buildSystemConfig.paths.root, 'scss-lint.yml');
    const sasslintConfigExists = fs.existsSync(sasslintConfigPath);
    if (sasslintConfigExists) {
        paths.sasslintConfig = sasslintConfigPath;
    }
    else {
        paths.sasslintConfig = undefined;
    }
    const config = Object.assign({}, buildSystemConfig);
    config.pluginName = 'Sass';
    config.paths = paths;
    return config;
};

//# sourceMappingURL=config.js.map
