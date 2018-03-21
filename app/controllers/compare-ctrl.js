priceCalc.controller('compareCtrl', ['$scope', function($scope){
    $scope.getParse = function(){
        var arr = [];
        var urlSplit1 = window.location.href.split("?");
        var urlSplit2 = urlSplit1[1].split("&").map(function(val){
            // console.log(val);
            var thing = val.split("=");
            arr.push(thing[1].replace("+", " "));
            // console.log(thing);
        });
        return arr;
    }
    $scope.project = {
        name: $scope.getParse()[0],
        type: $scope.getParse()[1]
    };
    $scope.months = $scope.getParse()[4];
    $scope.basePrice = $scope.getParse()[2];
    $scope.interest = $scope.getParse()[3];
    $scope.monthsTotal = function(){
        return $scope.months - $scope.monthsAdjusted;
    }
    $scope.interestCalc = function(){
        return $scope.basePrice * (1 + (($scope.interest * 0.1)/12))^(12 * ($scope.months/12));
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