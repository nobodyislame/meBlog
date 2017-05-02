angular.module('app')
    .directive('blogBox',['$location', function($location){
        return{
            restrict:'E',
            templateUrl:'./blogs/blog.html',
            scope:{
                blog : "=",
                index: "="
            },
            link:function(scope, elems, attrs, controller){
                scope.view = function(index){
                    $location.path('/story/'+index);
                }
            }
        }
}])