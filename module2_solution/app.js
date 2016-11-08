(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


 ToBuyController.$inject = ['ShoppingListCheckOffService'];
 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


 function ToBuyController(ShoppingListCheckOffService) {
    var Buy = this;
    Buy.list = ShoppingListCheckOffService.getBuyList();

    Buy.item = function(itemIndex) {
      try {
        ShoppingListCheckOffService.buyItem(itemIndex);
      } catch (error) {
        Buy.errorMessage = error.message;
      }
    };
  }


 function AlreadyBoughtController(ShoppingListCheckOffService) {
    var Bought = this;
    Bought.list = ShoppingListCheckOffService.getBoughtList();
  }

 function ShoppingListCheckOffService() {
    var service = this;
    var bought_list = [];
    var buy_list = [
      {name: "Milk", quantity: 1},
      {name: "Bread", quantity: 2},
      {name: "Eggs", quantity: 3},
      {name: "Apples", quantity: 4},
      {name: "Bananas", quantity: 5}
    ];

    service.getBuyList = function() {
      return buy_list;
    };

    service.getBoughtList = function() {
      return bought_list;
    };

    service.buyItem = function(itemIndex) {
      var item = buy_list.splice(itemIndex, 1);
      bought_list.push(item[0]);
    };
  }

})();
