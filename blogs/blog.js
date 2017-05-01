angular.module('app')
    .directive('blogBox', function(){
        return{
            restrict:'E',
            templateUrl:'./blogs/blog.html',
            scope:{
                blog : "="
            },
            link:function(scope, elems, attrs, controller){
                
            }
        }
})