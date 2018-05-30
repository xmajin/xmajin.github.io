app.controller("myCtrl", function($scope) {
    $scope.products = [];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {
            return;
        }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "Item already in your shopping list";
        }
    }
    
    $scope.removeItem = function (x){
        $scope.products.splice(x, 1);
    }
});
