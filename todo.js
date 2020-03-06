// Submit button
var button = document.querySelector('button'),
    textarea = document.querySelector('textarea');
button.disabled = true;
textarea.addEventListener('keyup', function() {
  button.disabled = !this.value;
})
// Close button
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
//
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
  }
}
// New list item
function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("listItem").value;
  var today = new Date();
  var date = new Date().toLocaleString();
  var textNode = document.createTextNode(inputValue);
  var dateNode = document.createTextNode(date);

  li.appendChild(textNode);
  li.appendChild(document.createElement("br"));
  li.appendChild(dateNode)

  document.getElementById("myUL").appendChild(li);
  document.getElementById("listItem").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
