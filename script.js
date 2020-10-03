//Player Script
function submit(){
document.getElementById('if').src=
"https://snap.berkeley.edu/embed?project="+
document.getElementById('txt1').value+
"&user="+
document.getElementById('txt2').value+
"&showTitle=true&showAuthor=true&editButton=true&pauseButton=true";
//Embed Script
var x = document.getElementById('code'); 
x.value =  "https://snap.berkeley.edu/embed?project="+
document.getElementById('txt1').value+
"&user="+
document.getElementById('txt2').value+
"&showTitle=true&showAuthor=true&editButton=true&pauseButton=true";
//Error Script
}
function errorFive(){
  alert("Error")
}
