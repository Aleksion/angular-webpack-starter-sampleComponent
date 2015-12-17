'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

/* @ngInject */
function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/sample');
}