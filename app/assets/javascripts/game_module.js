/*global $*/
$(document).ready(function(){
(function() {
  'use strict';
  /*global angular*/
  var app = angular.module("TCC", ['ngRoute', 'ngCookies', 'pascalprecht.translate']);
  app.config(['$translateProvider', function($translateProvider) {

    $translateProvider.translations('en');
    // configures staticFilesLoader
    $translateProvider.useStaticFilesLoader({
      prefix: 'locale_',
      suffix: ''
    });

    // load 'en' table on startup
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
  }]);
  
  app.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "main.html",
        controller: "MainController",
        controllerAs: "vm"
      })
      .when("/index", {
        templateUrl: "index.html",
        controller: "NavbarController",
        controllerAs: "vm"
      })
      .when("/pages/game", {
        templateUrl: "pages/game",
        controller: "GameController",
        controllerAs: "vm"
      })
      .otherwise({
        templateUrl: "pages/game",
        controller: "GameController",
        controllerAs: "vm"
      });
  });
}());
})