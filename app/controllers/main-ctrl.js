priceCalc.controller('mainCtrl', ['$scope', function($scope){
    $scope.appTitle = "Price Calculator"
    $scope.starterTemplate = {
        baseprice: 100,
        basetimeframe: 1
    };
    $scope.timemodifier = 0;
    $scope.project = 
        {
            name: 'Your Project',
            type: 'Angular App',
            timeframe: 1,
            price: 100.00,
            timemodifier: 0,
            pricemodifier: 0
        }
    $scope.plusOne = function(){
        $scope.timemodifier += 1;
    }
    $scope.minusOne = function(){
        $scope.timemodifier -= 1;
    }
    $scope.update = function(){
        $scope.project.timeframe = $scope.starterTemplate.basetimeframe + $scope.timemodifier;
        $scope.project.pricemodifier = $scope.starterTemplate.baseprice * 0.1 * $scope.timemodifier;
        $scope.project.price = $scope.starterTemplate.baseprice + $scope.project.pricemodifier;
    }
    $scope.newName = "";
    $scope.newType = "";
    class Project {
        constructor (name, type){
            this.name = name;
            this.type = type;
            this.timeframe = 1;
            this.price = 100.00;
            this.timemodifier = 0;
            this.pricemodifier = 0;
        }
    }
    $scope.newProject = function(name, type){
        $scope.project = new Project(name, type);
    }
}]);