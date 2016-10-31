(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.food = "";
  $scope.messageCalculated = "";
  $scope.color = "color:black";
  $scope.bordercolor = "border-color:grey";


  $scope.checkFood = function () {

  		var foodEntered = $scope.food.trim();
  		var itemsCounter = 0; 
  		
  		console.log(foodEntered);


  		//If the textbox is empty and the user clicks the 
  		//"Check If Too Much" button, the messageCalculated 
  		//"Please enter data first" is sent to the view to show to the 
  		//user and the function does not execute anything after the 
  		//return in the if statement. 'Empty' here means 
  		//either "" (empty string) or a string with just spaces in it.

		if (foodEntered == '') 
		{
			$scope.bordercolor = "border-color:red";
			$scope.color = "color:red";
			$scope.messageCalculated = "Please enter data first";
			return;
		}


		//If the number of items in the textbox is less than or equal 
		//to 3 (e.g., 1, 2, or 3), a messageCalculated is sent saying 
		//"Enjoy!". If the number of items is greater than 3 (4, 5, and 
		//above), the messageCalculated is "Too much!". Note that the code
		//below DOES consider the case of , , as no food entered.

		foodEntered = $scope.food.split(',');
		console.log(foodEntered);

		for (var i = 0; i < foodEntered.length; i++) 
		{
			var item = foodEntered[i].trim();
			if (item.length > 0) 
			{
				itemsCounter++;
			} 
		}

		console.log("ItemCounter: " + itemsCounter);

		if (itemsCounter == 0)
		{
			$scope.bordercolor = "border-color:red";
			$scope.color = "color:red";
			$scope.messageCalculated = "Please enter data first";
		}
		else if((itemsCounter > 0 ) && (itemsCounter <= 3 ))
		{
        	$scope.bordercolor = "border-color:green";
          	$scope.color = "color:green";
          	$scope.messageCalculated = "Enjoy!";
        } 
        else 
        {
			$scope.bordercolor = "border-color:green";
			$scope.color = "color:green";
			$scope.messageCalculated = "Too much!";
        }


  }


}

})();
