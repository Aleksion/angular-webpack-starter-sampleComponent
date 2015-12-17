'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _sample = require('./sample.config');

var _sample2 = _interopRequireDefault(_sample);

var _sample3 = require('./sample.routes');

var _sample4 = _interopRequireDefault(_sample3);

var _sample5 = require('./sample.controller');

var _sample6 = _interopRequireDefault(_sample5);

var _sample7 = require('./sample.service');

var _sample8 = _interopRequireDefault(_sample7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import internal modules

// Import base modules
exports.default = _angular2.default.module('app.sample', [_angularUiRouter2.default]).config(_sample2.default).config(_sample4.default).controller(_sample6.default.UID, _sample6.default).service(_sample8.default.UID(), _sample8.default).name;