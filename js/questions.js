// js/traduire.js
'use strict';

var demoApp = angular.module('app', [
    // Dépendances du "module"
    'question'
]);

var question = angular.module('question',[]);

question.controller('quesCtrl', ['$scope',
    function ($scope) {
      $scope.questions = resource.charger("questions.arr"),
      $scope.questions.forEach(function (element, index, array) {
        array[index] = array[index] + '\n' + traduire(array[index]);
      })
    }
]);