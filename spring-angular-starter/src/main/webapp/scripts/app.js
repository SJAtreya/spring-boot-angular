'use strict';

/**
 * @ngdoc overview
 * @name springAngularStarterApp
 * @description
 * # springAngularStarterApp
 *
 * Main module of the application.
 */
angular
  .module('springAngularStarterApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
