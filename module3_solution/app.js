(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.component('foundItems', {
  templateUrl: 'foundItems.html',
  bindings: {
  items: '<',
  title: '@',
  onRemove: '&',
  search: '<'
  }
 });


NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
  
  var menu = this;
  menu.searchTerm = '';

  menu.searchedMenuItems = function (searchTerm) {

    console.log("IN menu.searchedMenuItems searchTerm is: " + searchTerm);

    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      menu.found = response;
      menu.title = (menu.found.length + " item(s) found");
      menu.filter = searchTerm;

      console.log("\n\nresponse List is as follows: ");
      var x;
      for (x in response) {
        console.log("\nname: " + response[x].name);
        console.log("short_name: " + response[x].short_name);
        console.log("description: " + response[x].description);
      }


    })
    .catch(function (error) {
      console.log(error);
    })
  };


  menu.removeItem = function(itemIndex) {
    menu.found.splice(itemIndex, 1);
    menu.title = (menu.found.length + " item(s) found");
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];

function MenuSearchService($http, ApiBasePath) {
  
  var service = this;

  service.getMatchedMenuItems = function (searchItem) {

    console.log("IN service.getMatchedMenuItems searchItem is: " + searchItem);

    return $http({method: "GET", url: (ApiBasePath + "/menu_items.json")})
        .then(function (response) {
          
          var allMenuItems = response.data.menu_items;
          var foundItems = [];

          if (searchItem.length == 0)
          {
            foundItems = [];
          }
          else{
            var item;
            for (item in allMenuItems) {
            var descriptionStr = allMenuItems[item].description;
            console.log("\ndescriptionStr: " + descriptionStr);

            var n = descriptionStr.toLowerCase().search(searchItem.toLowerCase());
          
            if (n >= 0) {
              foundItems.push(allMenuItems[item]);
            }

          }

          }

        return foundItems;
        })

  };

}

})();
