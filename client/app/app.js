// Import Style
import './app.scss';

import angular from 'angular';

// Import base modules
import config from './app.config';
import run from './app.run';
import appConstants from 'appConstants';

// Import internal modules
import sampleComponent from './components/test';

export default angular.module('sampleComponent', [sampleComponent])
  .config(config)
  .constant("AppConstants", appConstants)
  .run(run)
  .name;
