priceCalc.controller('compareCtrl', ['$scope', '$location', function($scope, $location){
    console.log($location.search().name)
    $scope.getParse = function(){
        var arr = {};
        var urlSplit1 = window.location.href.split("?");
        var urlSplit2 = urlSplit1[1].split("&").map(function(val){
            // console.log(val);
            var thing = val.split("=");
            arr[thing[0]] = decodeURIComponent(thing[1]);
            // console.log(thing);
        });
        return arr;
    }
    $scope.urlParams = $scope.getParse();
    $scope.project = {
        name: $scope.urlParams.name,
        type: $scope.urlParams.type
    };
    $scope.months = $scope.urlParams.months;
    $scope.basePrice = $scope.urlParams.basePrice;
    $scope.interest = $scope.urlParams.interest;
    $scope.calcProjectCost = $scope.basePrice;
    $scope.changeMonthsAdjusted = function(){
        $scope.calcProjectCost = $scope.interestCalc();
    }
    $scope.monthsTotal = function(){
        return $scope.months - $scope.monthsAdjusted;
    }
    $scope.interestCalc = function(){
        return $scope.basePrice * Math.pow($scope.interest * 0.01 + 1, $scope.monthsAdjusted);
        // return $scope.basePrice * (1 + (($scope.interest * 0.01)/12))^(12 * ($scope.months/12));
    }
    $scope.setupCalcTotal = function(){
        var priceMod = ($scope.basePrice / $scope.months);
        return $scope.interestCalc() * $scope.months;
    }
    $scope.compareCalcTotal = function(){
        console.log("Hi");
        if ($scope.monthsTotal() == $scope.months){
            return $scope.setupCalcTotal();
        }
        else if ($scope.monthsTotal() < $scope.months){
            var priceMod = ($scope.basePrice / ($scope.monthsTotal() / 4));
            return $scope.setupCalcTotal() + priceMod;
        }
        else if ($scope.monthsTotal() > $scope.months){
            var priceMod = ($scope.basePrice * $scope.monthsTotal()) * 0.1;
            return $scope.setupCalcTotal() - priceMod;
        }
        else {
            return "Error";
        }
    }
}]);