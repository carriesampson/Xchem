const app = angular.module('xchem_app', ['ngRoute']);
// const api = 'https://xchem-api.herokuapp.com'

app.controller("bodyController", ['$http', function($http) {
  this.allBrands = [];
  this.oneBrand = {};

  $http({
    method: 'GET',
    url: 'http://localhost:3000/brands'
  }).then(function(response) {
    console.log(response);
    this.allBrands = response.data;
  }.bind(this));

  $http({
    method: 'GET',
    url: 'http://localhost:3000/brand/:id'
  }).then(function(response) {
    console.log(response);
    this.oneBrand = response.data;
  }.bind(this));

  }]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'homeController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/brands', {
    templateUrl: 'partials/all-brands.html',
    controller: 'allBrandsController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/brands/:id', {
    templateUrl: 'partials/one-brand.html',
    controller: 'oneBrandController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/what-is-Xchem', {
    templateUrl: 'partials/what-is-Xchem.html',
  });

  $routeProvider.when('/the-toxic-20', {
    templateUrl: 'partials/toxic20.html',
  });

  $routeProvider.when('/chem-dictionary', {
    templateUrl: 'partials/chem-dictionary.html',
  });

  $routeProvider.when('/data-integrity', {
    templateUrl: 'partials/data-integrity.html',
  });

  $routeProvider.when('/faq', {
    templateUrl: 'partials/faq.html',
  });

  $routeProvider.when('/contact-us', {
    templateUrl: 'partials/contact-us.html',
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });

}]);
