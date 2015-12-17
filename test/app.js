'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./app.scss');

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _app = require('./app.config');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.routes');

var _app4 = _interopRequireDefault(_app3);

var _app5 = require('./app.run');

var _app6 = _interopRequireDefault(_app5);

var _appConstants = require('appConstants');

var _appConstants2 = _interopRequireDefault(_appConstants);

var _sample = require('./features/sample');

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
exports.default = _angular2.default.module('app', [_angularUiRouter2.default, _sample2.default]).config(_app2.default).config(_app4.default).constant("AppConstants", _appConstants2.default).run(_app6.default);

// Import internal modules

// Import base modules