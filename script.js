let username, project, url;
async function submit() {
  project = encodeURIComponent(document.getElementById('txt1').value);
  username = encodeURIComponent(document.getElementById('txt2').value);
  const req = await fetch(`https://cors-anywhere.herokuapp.com/https://snap.berkeley.edu/projects/${username}/${project}`);
  if(req.ok) {
    //console.log('exists');
    loadProject();
  } else if(req.status === 404){
    alert('That project does not exist');
  }
}
function loadProject() {  
  url=`https://snap.berkeley.edu/embed?project=${project}&user=${username}&showTitle=true&showAuthor=true&editButton=true&pauseButton=true`;
  document.getElementById('if').src = url;
  document.getElementById('code').value = url;
}
