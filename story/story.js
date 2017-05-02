angular.module('app')
    .controller('storyCtrl',['$scope','$routeParams','Data', function($scope, $routeParams, Data){
        var id = $routeParams.id;
        $scope.story = Data.getOne(id);
}])