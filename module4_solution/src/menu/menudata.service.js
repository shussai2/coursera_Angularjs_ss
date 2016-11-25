/* 5 Create menudata.service.js file and create a service called MenuDataService in it.*/
(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiServicePath', "https://davids-restaurant.herokuapp.com")

  MenuDataService.$inject = ['$http', 'ApiServicePath']


  /*5 getAllCategories - this method should return a promise which 
  is a result of using the $http service, using the following REST API 
  endpoint: https://davids-restaurant.herokuapp.com/categories.json */

  function MenuDataService($http, ApiServicePath) {
    var service=this;

    service.getAllCategories= function() {
      return $http({
        method: "GET",
        url: (ApiServicePath + "/categories.json")
      });
    };

    
    /* 5 getItemsForCategory(categoryShortName) - this method should 
    return a promise which is a result of using the $http service, using 
    the following REST API endpoint: 
    https://davids-restaurant.herokuapp.com/menu_items.json?category=, 
    where, before the call to the server, your code should append whatever 
    categoryShortName value was passed in as an argument into the 
    getItemsForCategory method.*/
    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiServicePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });
    };
  }
})();
