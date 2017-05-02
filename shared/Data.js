angular.module('app')
    .factory('Data',['DataCache','$http', function(DataCache, $http){
        var data;
          return{
              get:function(callback){
                  var results = DataCache.get('myCache');
                  if(results){
                      console.log('from cache');
                      callback(results);
                  }
                  else{
                      $http.get('../assets/data.json')
                      .then(function(result){
                          var results = result.data;
                          data = results;
                          DataCache.put('myCache', results);
                          callback(results);
                      });
                  }
              },
              getOne:function(id){
                  return data[id];
              }
          }   
}]);