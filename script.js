//Player Script
const iframe = document.getElementById('iframe');
const user = document.getElementById('project-author');
const project = document.getElementById('project-name');
const projectURLTextarea = document.getElementById('code')
function submit(){
  const encodedUsername = encodeURIComponent(user.value);
  const encodedProjectName = encodeURIComponent(project.value)
  iframe.src=`https://snap.berkeley.edu/embed?project=${encodedProjectName}&user=${encodedUsername}&showTitle=true&showAuthor=true&editButton=true&pauseButton=true`; 
  projectURLTextarea.value =  `https://snap.berkeley.edu/embed?project=${encodedProjectName}user=${encodedUsername}&showTitle=true&showAuthor=true&editButton=true&pauseButton=true`;
}
function errorFive(){
  alert("Error")
}

function tailError(string){
  alert("Could not fetch project:\n" + string +"\n Please make sure the project is shared")
}
