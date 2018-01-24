const app = angular.module('xchem_app', ['ngRoute']);

app.controller("bodyController", ['$http', function($http) {
  this.test = "IT WORKS!!";
  this.brains = [];

  $http({
    method: 'GET',
    url: 'http://localhost:3000/brains/1'
  }).then(function(response) {
    console.log(response);
    this.brains.push(response.data);
  }.bind(this));

}]);
