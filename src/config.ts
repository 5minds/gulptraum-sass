import {ISassPluginConfiguration, ISassPluginPathsConfiguration} from './index';
import {IConfigurationHook, IBuildSystemConfiguration } from 'gulptraum';

import * as fs from 'fs';
import * as path from 'path';

export const getDefaultConfig: IConfigurationHook
= function (buildSystemConfig: IBuildSystemConfiguration): ISassPluginConfiguration {

  let paths: ISassPluginPathsConfiguration = Object.assign({}, buildSystemConfig.paths);
  
  paths.source = `${path.resolve(buildSystemConfig.paths.root, buildSystemConfig.paths.source)}/**/*.s+(a|c)ss`;
  
  const sasslintConfigPath = path.resolve(buildSystemConfig.paths.root, 'scss-lint.yml');
  const sasslintConfigExists = fs.existsSync(sasslintConfigPath);
  if (sasslintConfigExists) {
    paths.sasslintConfig = sasslintConfigPath;
  } else {
    paths.sasslintConfig = undefined;
  }

  const config: ISassPluginConfiguration = Object.assign({}, buildSystemConfig);

  config.pluginName = 'Sass';
  config.paths = paths;

  return config;
}