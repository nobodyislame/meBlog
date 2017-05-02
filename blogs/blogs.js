angular.module('app')
    .controller('blogsCtrl',['$scope','Data', function($scope, Data){
        
        function initialize(){
            Data.get(function(data){
                $scope.stories = data;
            });
        }
        initialize();
        
}]);