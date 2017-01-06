(function() {

    var eduValidator = angular.module("eduValidator", []);

    eduValidator.controller("FormController", ["$scope", function($scope) {

        $scope.register = function() {
            $scope.successfullySubmitted = true;
        }

    }]);

})();