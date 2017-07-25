import {generate as build} from './build';
import {generate as clean} from './clean';
import {generate as lint} from './lint';
import {generate as setup_dev} from './setup_dev';

export function initializePluginTasks(gulp, config, gulptraum) {
  build(gulp, config, gulptraum);
  clean(gulp, config, gulptraum);
  lint(gulp, config, gulptraum);
  setup_dev(gulp, config, gulptraum);
}