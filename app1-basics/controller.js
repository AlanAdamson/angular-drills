angular.module('angDrills').controller('mainCtrl', function($scope, angService){

$scope.portal = angService.getTransporter();

});
