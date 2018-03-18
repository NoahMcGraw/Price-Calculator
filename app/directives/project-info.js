priceCalc.directive("projectInfo", function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'app/directives/project-info.html'
    };
});