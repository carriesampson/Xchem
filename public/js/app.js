const app = angular.module('xchem_app', ['ngRoute']);
// const api = 'https://xchem-api.herokuapp.com'

app.controller("bodyController", ['$http', function($http) {
  this.allBrands = [];
  this.oneBrand = {};
  this.searchData = '';
  this.searchResult = [];
  this.showBrand = false;

  this.processSearch = () => {
    console.log('Search data is: ', this.searchData);
    $http({
      method: 'GET',
      url: 'http://localhost:3000/brands?query=' + this.searchData
    }).then(function(response) {
      this.searchResult = response.data;
      console.log(response.data);
    }.bind(this));
  }

  this.handleClick = (id) => {
    console.log(id);
    $http({
      method: 'GET',
      url: 'http://localhost:3000/brands/' + id
    }).then(function(response) {
      this.oneBrand = response.data;
      this.showBrand = true;
      console.log(response.data);
    }.bind(this));
  }

}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
  });

  $routeProvider.when('/brands', {
    templateUrl: 'partials/all-brands.html',
  });

  $routeProvider.when('/brands/one-brand', {
    templateUrl: 'partials/one-brand.html',
  });

  $routeProvider.when('/top-toxins', {
    templateUrl: 'partials/top-toxins.html',
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
