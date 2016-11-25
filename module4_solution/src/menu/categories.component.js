/* 6 Create categories.component.js file and create component 
called categories that shows all available categories in the 
menu to the user.*/
(function () {
  'use strict';
  
/*8: The categories and the items components should NOT directly 
use the MenuDataService to fetch their own data. Instead, the 
proper data should be simply passed into the component. 
(Hint: use the one-way < binding).*/

  angular.module('MenuApp')
  .component('categoriesList', {
    templateUrl: 'src/templates/categories.template.html',
    bindings: {
      categories: '<' 
    }
  });
})();
