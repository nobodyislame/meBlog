angular.module('app')
    .factory('DataCache', ['$cacheFactory', function($cacheFactory){
        return $cacheFactory('myCache');
}]);