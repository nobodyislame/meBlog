angular.module('app')
    .directive('miNavbar',['$location', function($location){
        return{
            restrict:'E',
            templateUrl:'./shared/navbar.html',
            link:function(scope, el, attrs, ctrl){
                scope.changePage = function(state){
                    $location.path('/'+state);
                }
            }
        }
}]);