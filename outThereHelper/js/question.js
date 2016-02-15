$(function() {
  var questions1 = resource.charger("questions1.arr");
  for (i = 0; i < questions1.length; i++) {
    $("body").append("</br><textarea class='form-control'>" + questions1[i] + "\n" + traduire(questions1[i]) + "</textarea>");
  }
});