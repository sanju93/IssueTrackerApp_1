window.addEventListener('load',() => {
    alert("click on the resolve butoon to resolve the issue");
})
var home = document.getElementById('home');
home.addEventListener('click',()=>{
    window.location.href = '/';
})
var btn = document.getElementsByClassName('resolve');
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', async (e) => {
        var id = e.target.getAttribute('id');
      var res = await fetch(`/resolve_issue/${id}`,{method : 'DELETE'});
      if (res.status == 200) {
        location.reload();
      }else{
        alert("error in resolving the issue");
      }
       
      
    })
}