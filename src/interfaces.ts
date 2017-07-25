import {IPluginConfiguration, IBuildSystemPathsConfiguration} from 'new_gulptraum';

export interface ISassPluginPathsConfiguration extends IBuildSystemPathsConfiguration {
  sasslintConfig: string;
}

export interface ISassPluginConfiguration extends IPluginConfiguration<ISassPluginPathsConfiguration> {
}