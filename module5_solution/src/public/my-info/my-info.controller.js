(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'ApiPath'];
  function MyInfoController(MenuService, ApiPath) {
    var myInfoCtrl = this;

    var myInfoDataStatus = MenuService.myInfoMenuData();
    myInfoCtrl.basePath = ApiPath;

    if (myInfoDataStatus) {
      myInfoCtrl.notregistered = false;
      myInfoCtrl.menu_data = myInfoDataStatus;
      myInfoCtrl.user_data = MenuService.getMyInfoSavedData();

      console.log("\n\nFROM my-info.controller.js: myInfoCtrl.menu_data is:");
      console.log(myInfoCtrl.menu_data);
      console.log("basePath: " + myInfoCtrl.basePath);

    } else {
      myInfoCtrl.notregistered = true;
    }
  }

})();
