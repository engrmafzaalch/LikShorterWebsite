var optional = document.querySelector("#optional");
var outputField = document.querySelector(".output-field");
document.querySelector("#form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.querySelector(".display").style.display = "block";
  var optional = document.querySelector("#optional");
  var outputField = document.querySelector(".output-field");
  outputField.value = `http://shorten.rigrex.com/${optional.value}`;
  optional.value = "";
  document.querySelector(".userLink").value = "";
  copy();
});
document.querySelector(".btn-copy").addEventListener("click", function() {
  copy();
  document.querySelector(".btn-copy").classList.add('bounceIn');
  setTimeout(function() {
    document.querySelector(".btn-copy").classList.remove('bounceIn');
  }, 2000);
});
function copy() {
  outputField.select();
  outputField.setSelectionRange(0, 99999);
  document.execCommand("copy");
  optional.focus();
  outputField.blur();
  copied();
}
function copied() {
  let msg = document.querySelector(".msg");
  msg.style.display = "block";
  setTimeout(function() {
    msg.style.display = "none";
  }, 6000);
}
