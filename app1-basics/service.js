angular.module('angDrills').service('angService', function(){
  var portal = {};
  this.getTransporter = function(){
    return portal;
  };
});
