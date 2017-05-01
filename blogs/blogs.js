angular.module('app')
    .controller('blogsCtrl',['$scope', '$http', function($scope, $http){
        $http.get('../assets/data.json')
            .then(function(result){
                $scope.stories = result.data;
                console.log($scope.stories);
        });
}]);