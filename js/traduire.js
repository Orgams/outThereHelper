// js/traduire.js
'use strict';

var demoApp = angular.module('app', [
    // Dépendances du "module"
    'traducteur'
]);

/**
 * Déclaration du module todoList
 */
var traducteur = angular.module('traducteur',[]);

traducteur.controller('tradCtrl', ['$scope',
    function ($scope) {
      $scope.cherhcerDialogue = function () {
        var dialogues = resource.charger("dialogues.json");

        //Recuperer le dialogue qui correspond au code dialogue
        var dialogue = dialogues[$scope.codeDialogue];
        
        //Ajouter le dialogue traduit si le code coresspond à un dialogue
        if (dialogue != undefined) {
          dialogue = $scope.dialogueOrigine = dialogue.replaceAll(" NL ", " \n");
          dialogue = traduire(dialogue);
          $scope.textDialogue = dialogue;
        }else{
          $scope.textDialogue = "";
        }
      },
      $scope.supprimerDialogue = function () {
        resource.supprimer("dico.json");
        notification("Dialogue supprimé");
      },
      $scope.traiterDialogue = function () {
        var motsATaiter = $scope.textDialogue.split(" ");

        if (typeof $scope.dialogueOrigine != undefined) {
          var motDialogue = $scope.dialogueOrigine.split(" ");
          var dico = resource.charger("dico.json");
          for (var i = 0; i < motsATaiter.length; i++) {
            if (motsATaiter[i] != motDialogue[i]) {
              dico[motsATaiter[i]] = motDialogue[i];
            }
          }
        }
        resource.sauver("dico.json",dico);
        notification("Mots sauvé");
      }
    }
]);