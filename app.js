angular.module('app',['ngRoute'])
    .config(function($routeProvider, $qProvider){
        $qProvider.errorOnUnhandledRejections(false);
        $routeProvider
            .when('/home',{
                templateUrl : 'views/home.html'
            })
            .when('/stories',{
                templateUrl : 'blogs/blogs.html',
                controller : 'blogsCtrl'
            })
            .otherwise({
                redirectTo : '/home'
            });
});