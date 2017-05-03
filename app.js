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
            .when('/story/:id',{
                templateUrl : 'story/story.html',
                controller : 'storyCtrl'
            })
            .when('/new', {
                templateUrl:'newpost/newpost.html',
                controller: 'newpostCtrl'
            })
            .when('/contactme',{
                templateUrl:'contactme/contactme.html',
                controller:'contactmeCtrl'
            })
            .otherwise({
                redirectTo : '/home'
            });
});