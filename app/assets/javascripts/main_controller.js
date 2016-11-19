$(document).ready(function(){
    (function() {
  'use strict';
  angular
    .module("TCC")
    .controller('MainController', MainController);
  MainController.$inject = ['$scope', '$http', 'myFactory', '$location', '$translate'];

  function MainController($scope, $http, myFactory, $location, $translate) {

    var vm = this;
    vm.showAnswer = true;
    vm.getDataController = getDataController;
    vm.changeLanguage = changeLanguage;
    activate();

    function activate() {}

    function getDataController() {
      myFactory.getData().
      then(function(response) {});
    }

    function changeLanguage(langKey) {
      $translate.use(langKey);
    }
  }
}());
})