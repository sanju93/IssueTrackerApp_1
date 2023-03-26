var form = document.getElementById('issue_form');
var desc = document.getElementById('desc');
var severity = document.getElementById('severity');
var assign = document.getElementById('assign');
var url = window.location.href;


var id_1 = url.substring(url.lastIndexOf('/')+1);




form.addEventListener('submit', async (e) => {

    e.preventDefault();

    var data = {
        desc : desc.value,
        severity : severity.value,
        assign : assign.value,
        id : id_1
    };

    desc.value = "";
    severity.value = "";
    assign.value = "";


    var res = await fetch('/create_issue',{
                    method : 'POST',
                    headers : {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(data)
                });


             
           
                if (res.status === 200) {

                    window.location.href = '/';

                }
                else{
                    window.location.href = 'back';
                }


    

    



})