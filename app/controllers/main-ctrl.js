priceCalc.controller('mainCtrl', ['$scope', function($scope){
    $scope.project = {};
    // $scope.months = 6;
    $scope.basePrice = 500;
    $scope.interest = 10.25;
    $scope.interestCalc = function(){
        return $scope.basePrice * (1 + (($scope.interest * 0.1)/12))^(12 * ($scope.months/12));
    }
    $scope.setupCalcTotal = function(){
        var priceMod = ($scope.basePrice / $scope.months)
        return $scope.interestCalc() * $scope.months;
    }
    
    $scope.comparePopUp = function(){
        $('.comparePopUp').css('display', 'inline');
    }
    $scope.compareClick = function(){
        $('.mainContainer').fadeOut("slow");  
    }
}]);