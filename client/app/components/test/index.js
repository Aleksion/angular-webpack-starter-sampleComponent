// Import Style
import './test.scss';


import angular from 'angular';

// Import internal modules
import controller from './test.controller';
import directive from './test.directive';



export default angular.module("test" , [])


  .controller(controller.UID, controller)
  .directive("test", directive)
  .name;
