const app = angular.module('xchem_app', ['ngRoute']);

app.controller("bodyController", ['$http', function($http) {
  this.brands = [];
  this.products = [];

  $http({
    method: 'GET',
    url: 'http://localhost:3000/brands'
  }).then(function(response) {
    console.log(response);
    this.brands = response.data;
  }.bind(this));

  $http({
    method: 'GET',
    url: 'http://localhost:3000/products'
  }).then(function(response) {
    console.log(response);
    this.products = response.data;
  }.bind(this));

}]);
