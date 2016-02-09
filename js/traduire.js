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

        var dialogue = getDialogueCourant($scope.codeDialogue);
        
        //Ajouter le dialogue traduit si le code coresspond à un dialogue
        if (dialogue != undefined) {
          dialogue = traduire(dialogue);
          $scope.textDialogue = dialogue;
        }
      }
    }
]);


$(function() {

  $("button.traiterDialogue").click(function() {
    var motsATaiter = $('textarea.textDialogue').val().split(" ");
    
    var dialogueOrigine = getDialogueCourant($("input.codeDialogue").val());

    if (typeof dialogueOrigine != undefined) {
      var motDialogue = dialogueOrigine.split(" ");
      var dico = resource.charger("dico.json");
      for (var i = 0; i < motsATaiter.length; i++) {
        if (motsATaiter[i] != motDialogue[i]) {
          dico[motsATaiter[i]] = motDialogue[i];
        }
      }
    }
    resource.sauver("dico.json",dico);
    notification("Mots sauvé");
  })

  $("button.supprimerDialogue").click(function() {
    resource.supprimer("dico.json");
    notification("Dialogue supprimé");
  });
});

function getDialogueCourant(codeDialogueCourant){
  var dialogues = resource.charger("dialogues.json");

  //Recuperer le dialogue qui correspond au code dialogue
  var dialogue = dialogues[codeDialogueCourant];
  
  //Ajouter le dialogue traduit si le code coresspond à un dialogue
  if (dialogue != undefined) {
    dialogue = dialogue.replaceAll(" NL ", " \n");
  }

  return dialogue;
}