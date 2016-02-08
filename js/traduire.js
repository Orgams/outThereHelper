$(function() {

  $("button.traiterDialogue").click(function() {
    var motsATaiter = $('textarea.textDialogue').val().split(" ");
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
  })

  $("button.supprimerDialogue").click(function() {
    resource.supprimer("dico.json");
  });

  $("input.codeDialogue").keyup(function() {

    dialogues = resource.charger("dialogues.json");
    dialogue = dialogues[$(this).val()];

    if (dialogue != undefined) {
      dialogueOrigine = dialogue = dialogue.replaceAll(" NL ", " \n");
    }
    dialogue = traduire(dialogue);

    $('textarea.textDialogue').val(dialogue);
  });
});