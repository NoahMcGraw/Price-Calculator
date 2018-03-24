priceCalc.controller('mainCtrl', ['$scope', function($scope){
    $scope.project = {
        interest: 10.25
    };
    $scope.formSubmit = function(){
        console.log("Submitted");
        var compareUrl = "/compare.html";
        compareUrl += "?name=" + encodeURIComponent($scope.project.name);
        compareUrl += "&type=" + encodeURIComponent($scope.project.type);
        compareUrl += "&basePrice=" + encodeURIComponent($scope.project.basePrice);
        compareUrl += "&interest=" + encodeURIComponent($scope.project.interest);
        compareUrl += "&months=" + encodeURIComponent($scope.project.months);
        window.open(compareUrl, '_blank');
        // window.location.href = compareUrl;
    }
    $scope.copyUrl = function(){
        var compareUrl = window.location.href;
        compareUrl += "/compare.html";
        compareUrl += "?name=" + encodeURIComponent($scope.project.name);
        compareUrl += "&type=" + encodeURIComponent($scope.project.type);
        compareUrl += "&basePrice=" + encodeURIComponent($scope.project.basePrice);
        compareUrl += "&interest=" + encodeURIComponent($scope.project.interest);
        compareUrl += "&months=" + encodeURIComponent($scope.project.months);
        $scope.copyUrlBox = compareUrl;
        
    }
    $scope.copyClipboard = function(){
        var url = document.getElementById("copyUrl");
        url.select();
        document.execCommand("Copy");
        console.log("Copied to Clipboard");
        alert("Copied to Clipboard!");
    }
}]);