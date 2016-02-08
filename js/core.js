/*
  motsPossible = resource.charger("motsPossible.arr");
  questions1 = resource.charger("questions1.arr");
  dialogues = resource.charger("dialogues.json");
  dico = resource.charger("dico.json");
*/

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function traduire(texte) {
  var dico = resource.charger("dico.json");
  for (var motInconnue in dico) {
    texte = texte.replaceAll(dico[motInconnue], motInconnue);
  }
  return texte;
}