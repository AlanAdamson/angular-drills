angular.module('apiApp').service('aService', function($http){

  this.getApi = function(){
    return $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=2'
    });
   };

});
