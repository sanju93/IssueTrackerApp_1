document.getElementsByClassName('container')[0].style.backgroundColor = "white";
var projects = document.getElementsByClassName('container')[1];
window.addEventListener("load",() => {
    fetch("/projects")
    .then(response => response.json())
    .then((data) => {
    for (var i of data) {

        var Row_div = document.createElement('div');
        Row_div.setAttribute('class','row my-2 rounded-5');
        Row_div.style.backgroundColor = "white";
        
        var Col_div = document.createElement('div');
        Col_div.setAttribute("class","col-4");
        var project_img = document.createElement('img');
        project_img.setAttribute('src',"https://cdn-icons-png.flaticon.com/512/2717/2717499.png");
        project_img.style.height = "30px";
        project_img.style.width = "30px";


        var avatar_img = document.createElement('img');
        avatar_img.setAttribute('src',"https://cdn-icons-png.flaticon.com/512/924/924915.png");
        avatar_img.style.height = "30px";
        avatar_img.style.width = "30px";


        var desc_img = document.createElement('img');

        desc_img.setAttribute('src',"https://cdn-icons-png.flaticon.com/512/684/684831.png");
        desc_img.style.height = "30px";
        desc_img.style.width = "30px";



        Col_div.appendChild(project_img);
        
        

        var para_1 = document.createElement('p');
        var para_2 = document.createElement('p');
        var para_3 = document.createElement('p');
        
        var span_1 = document.createElement('span')
        span_1.innerHTML = "Project title: " +i.title;
        var span_2 = document.createElement('span');
        span_2.innerHTML = "Author Name: " + i.author;
        var span_3 = document.createElement('span');
        span_3.innerHTML = "Description: " + i.desc; 

        para_1.appendChild(project_img);
        para_1.appendChild(span_1);


        para_2.appendChild(avatar_img);
        para_2.appendChild(span_2);

        para_3.appendChild(desc_img);
        para_3.appendChild(span_3);
        para_1.style.marginTop = "10px";


        Col_div.appendChild(para_1)
        Col_div.appendChild(para_2);
        Col_div.appendChild(para_3);

        var Col_div_1 = document.createElement('div');
        Col_div_1.setAttribute("class","col-3");
        var AddIsueeButton = document.createElement('button');
        AddIsueeButton.setAttribute('id',i._id);
        AddIsueeButton.setAttribute('class','btn btn-primary mt-5');
        AddIsueeButton.innerHTML = "Add Issue";

        AddIsueeButton.addEventListener('click',(e) => {
            var id = e.target.getAttribute('id');
            window.location.href = `/create_issue/${id}`;
        })
        

        Col_div_1.appendChild(AddIsueeButton);

        var Col_div_2 = document.createElement('div');
        Col_div_2.setAttribute("class","col-3");
        var ViewIssue = document.createElement('button');
        ViewIssue.setAttribute('id',i._id);
        ViewIssue.setAttribute('class','btn btn-success mt-5');
      
        ViewIssue.innerHTML = "View Issue";
        if (i.issue.length == 0) {
            ViewIssue.setAttribute('disabled','true')
        }


        ViewIssue.addEventListener('click',async (e) => {
            var id = e.target.getAttribute('id');
            // var response = await fetch(`/get_issues/${id}`);
            window.location.href = `/get_issues/${id}`;
            
        });
     

        Col_div_2.appendChild(ViewIssue);


        var Col_div_3 = document.createElement('div');
        Col_div_3.setAttribute("class","col-2");
        var deleteProject = document.createElement('button');
        deleteProject.setAttribute('id',i._id);
        deleteProject.setAttribute('class','btn btn-danger mt-5');
        deleteProject.innerHTML = "Delete Project";
       

        deleteProject.addEventListener('click',async (e) => {
         
          
              let id = e.target.getAttribute('id');
              var response = await fetch(`/delete_project/${id}`,{method : 'DELETE'});
              if (response.status == 200) {
                location.reload();
              }else{
                alert("resolve all the issues");
              }
            
        })

        Col_div_3.appendChild(deleteProject);


        
         
        
        Row_div.appendChild(Col_div);
        Row_div.appendChild(Col_div_1);
        Row_div.appendChild(Col_div_2);
        Row_div.appendChild(Col_div_3);

    
        projects.appendChild(Row_div);



    }
});
})