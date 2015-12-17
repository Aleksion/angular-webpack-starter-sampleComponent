"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *	Example service intended to show how to use services
 *	Flowtype has been enabled for this file to showcase it's use.
 *
 */

var SampleService = (function () {
  _createClass(SampleService, null, [{
    key: "UID",

    // Define a unique identifier for the SampleService to avoid typo's when including it.
    value: function UID() {
      return "SampleService";
    }

    // With flowtype class variables can be defined with type.

  }]);

  /* @ngInject */

  function SampleService() {
    _classCallCheck(this, SampleService);

    /// Service properties are defined in the constructor with this.
    this.greeting = "Welcome to the sample";

    /// with flowtype enabled the following statement will result in an error
    //this.greeting = 2
  }

  /**
   * Example function to demonstrate how to use services
   * With flowtype the return type can be defined.
   * @return {[type]}
   */

  _createClass(SampleService, [{
    key: "generateGreeting",
    value: function generateGreeting() {
      return this.greeting;
    }
  }]);

  return SampleService;
})();

exports.default = SampleService;