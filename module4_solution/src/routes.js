(function () {
  
  /* Assignment Instruction 9. Create routes.js file and configure your routes and view states in it. */
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

  // default Home page redirection
  $urlRouterProvider.otherwise('/');

  /* 9: The home state will not need a controller. Just a template. */
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })

    /* 9c */
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: 'CategoriesController as categoriesController',
      resolve:{
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    /* 9d */
    .state('categories.items', {
      url: '/items/{categoryId}',
      templateUrl: 'src/templates/items.template.html',
      controller: "ItemsController as itemsController",
      resolve: {
        items: ['$stateParams','MenuDataService',
          function ($stateParams,MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }],
        categoryCode: ['$stateParams', function($stateParams) {
          return $stateParams.categoryId;
        }]
      }
    });
  }
})();
