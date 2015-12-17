"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _sample = require("./sample.controller");

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Routing function for sample
 * @param  $stateProvider
 */
/* @ngInject */
function routes($stateProvider) {
  $stateProvider.state("sample", {
    url: "/sample",
    template: require("./sample.tpl.html"),
    controller: _sample2.default.UID,
    controllerAs: "sample"
  });
}