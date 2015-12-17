"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This i a SampleController
 * This file is deliberately not using flowtype, to showcase how
 * an ES6 class is normally assigned
 */

var SampleController = (function () {
  _createClass(SampleController, null, [{
    key: "UID",

    /**
     * Static getter, that returns the unique identifier of the class. Used for registration with modules.
     */
    get: function get() {
      return "SampleController";
    }

    /* @ngInject */

  }]);

  function SampleController(SampleService) {
    _classCallCheck(this, SampleController);

    // Properties of the class are defined in the constructor with this
    this.greeting = SampleService.generateGreeting();
  }

  return SampleController;
})();

exports.default = SampleController;