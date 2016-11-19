$(document).ready(function(){
  'use strict';
  /*global angular*/
  angular
    .module("TCC")
    .controller('GameController', GameController);
  GameController.$inject = ['$scope', '$http', 'myFactory', '$location', '$translate'];

  function GameController($scope, $http, myFactory, $location, $translate) {

    var vm = this;
    vm.showAnswer = true;
    vm.getDataController = getDataController;
    vm.changeLanguage = changeLanguage;
    vm.game = game;
    activate();

    function activate() {}

    function getDataController() {
      myFactory.getData().
      then(function(response) {});
    }

    function changeLanguage(langKey) {
      $translate.use(langKey);
    }

    function game() {
      //to be implemented - the player must begin with a white belt
      if ($scope.name > 0) {
        $("#PlayerImage").attr("src", "https://sites.google.com/site/ndsukarate/_/rsrc/1255812160270/info/testing/whitebelt.gif");
      }
    }

    var correctWord = "mela";

    window.SpeechRecognition = window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      null;

    if (window.SpeechRecognition === null) {
      alert("Browser Not supported.");
    } else {
      //instantiates the speech API
      var recognizer = new window.SpeechRecognition();
      recognizer.lang = 'it-IT';
      var resultTextBox = $("#ResultTextBox");
      //it does not continuously try to recognize the speech
      recognizer.continuous = false;
      //event handler
      recognizer.onresult = function(event) {
        resultTextBox.textContent = '';
        console.log(event);
        for (var i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            resultTextBox.val(event.results[i][0].transcript + ' (Confidence: ' + event.results[i][0].confidence + ')');

          } else {
            resultTextBox.val(event.results[i][0].transcript);
          }
          //Shows an image of  correct or wrong answer
          if (event.results[i][0].transcript == correctWord) {
            $("#PlayerImage").attr("src", "http://images.digopaul.com/wp-content/uploads/related_images/2015/09/08/correct_1.jpg");
          } else {
            $("#PlayerImage").attr("src", "http://cormack.uwaterloo.ca/abademo/120218TryAgain.png");
          }
        }
      };
      //error
      recognizer.onerror = function(event) {
        resultTextBox.innerHTML = 'Recognition error: ' + event.message + '<br />';
      };
      //When the recognize button is clicked
      $("#RecognizeButton").on('click', function() {
        // Set if we need interim results
        //recognizer.interimResults = document.querySelector('input[name="recognition-type"][value="interim"]').checked;
        //throws the error message if the try does not succeed
        try {
          recognizer.start();
          //log.innerHTML = 'Recognition started' + '<br />' + log.innerHTML;
        } catch (ex) {
          resultTextBox.innerHTML = 'Recognition error: ' + ex.message + '<br />';
        }
      });
    }
  }
  
  new GameController()
})