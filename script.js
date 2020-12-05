;(function () {
let username, project, url;
document.getElementById('submitBtn').addEventListener('click', async function () {
  project = encodeURIComponent(document.getElementById('txt1').value);
  username = encodeURIComponent(document.getElementById('txt2').value);
  if(!project || !username) {
    alert('That project does not exist');
    return;
  }
  const req = await fetch(`https://cors-anywhere.herokuapp.com/https://snap.berkeley.edu/projects/${username}/${project}`);
  if (req.ok) 
    loadProject();
  else if (req.status === 404) 
    alert('That project does not exist');
  else 
    alert('Error ' + req.status + ' while fetching project');
});
function loadProject() {  
  url=`https://snap.berkeley.edu/embed?project=${project}&user=${username}&showTitle=true&showAuthor=true&editButton=true&pauseButton=true`;
  document.getElementById('if').src = url;
  document.getElementById('code').value = url;
}
})();
