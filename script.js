var project = document.getElementById('txt1').value;
var projectnametocheckfor = project.replace(/#/g, "%23");
function submit(){
document.getElementById('if').src=
"https://snap.berkeley.edu/embed?project="+
projectnametocheckfor +
"&user="+
document.getElementById('txt2').value+
"&showTitle=true&showAuthor=true&editButton=true&pauseButton=true";

var x = document.getElementById('code'); 
x.value =  "https://snap.berkeley.edu/embed?project="+
document.getElementById('txt1').value+
"&user="+
document.getElementById('txt2').value+
"&showTitle=true&showAuthor=true&editButton=true&pauseButton=true";

}
function errorFive(){
  alert("Error")
}

