import controller from './test.controller'

export default function test(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./test.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
