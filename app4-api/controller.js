angular.module('apiApp').controller('aController', function($scope, aService){

  $scope.test = "test";

  $scope.getApi = function(){
    aService.getApi().then(function(response){
      $scope.apiData = response.data.data;
    });
  };

});
