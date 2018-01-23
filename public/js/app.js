const app = angular.module('xchem_app', ['ngRoute', 'ngMaterial', 'ui']);

app.controller("BodyController", ['$http', function($http) {
  this.test = "It works!"

  $http({
    method: 'GET',
    url: 'http://localhost:3000/brains/1'
  }).then(response => {
    console.log('response: ', response);
  }).catch(reject => {
    console.log('reject: ', reject);
  });

}]);
