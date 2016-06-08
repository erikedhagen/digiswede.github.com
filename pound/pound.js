
var qs = function(str) {
  return document.querySelectorAll(str);
}

var getInputValue = function(inputName) {
  return qs('input[name='+ inputName + ']')[0].value;
}
var calculate = function(){
  var v = ['initial','monthly','interest','years','period'].map(function(name) {
    return Number(getInputValue(name)) || 0;
  });
  qs('#output')[0].value = compound(v[0], v[1], v[2], v[3], v[4]);
}
document.addEventListener('DOMContentLoaded', function() {
  qs('#pound-form')[0].addEventListener('click', function(event) {
    event.preventDefault();
    calculate();
  });
});
