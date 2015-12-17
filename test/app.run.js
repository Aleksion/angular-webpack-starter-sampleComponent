"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

/**
 * Specify any dependencies here. Alternatively shift to ngAnnotate
 * @type {string}
 */
run.$inject = [];

/* @ngInject */
function run() {
  console.log("Run loaded");
}