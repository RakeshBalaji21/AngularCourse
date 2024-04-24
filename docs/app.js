(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    function LunchCheckController() {
      var ctrl = this;
  
      ctrl.items = '';
      ctrl.message = '';
  
      ctrl.checkItems = function () {
        if (!ctrl.items.trim()) {
          ctrl.message = "Please enter data first";
          return;
        }
  
        var itemCount = ctrl.items.split(',')
          .filter(function (item) {
            return item.trim() !== '';
          }).length;
  
        ctrl.message = itemCount <= 3 ? "Enjoy!" : "Too much!";
      };
    }
  })();
  