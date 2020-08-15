let table = document.getElementById("table");

const deleteApi = async (a) => {
    console.log(a);
    const response = await fetch(`https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/contact/${a}`,
    {
        method:'DELETE',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        }
    });
    const content = await response.json();
    console.log(content);
};

async function demoApiGetAll (){
    const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/contact');
    const data = await response.json();
    console.log(data);
    for(let i =0 ; i< data.length ; i++){
        table.innerHTML+=` <tr>
        <td>${i+1}</td>
        <td>${data[i].ten}</td>
        <td>${data[i].email}</td>
        <td>${data[i].mess}</td>
        <td>${data[i].time}</td>
        <td>
            <a class = "tick" href="#" id="delete_${data[i].id}">&#10003</a>
            <a href="#">&#10007</a>
        </td>
    </tr>`
    // console.log(document.getElementById(`delete_${data[i].id}`));
    // document.getElementById(`delete_${data[i].id}`).addEventListener("click",() => deleteApi(data[i].id));
    }
};
demoApiGetAll();

table.addEventListener("click",function(e){
    if (e.target.classList.contains("tick")) {
        if(confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove()
            deleteApi(Number(e.target.id.split("_")[1]));
        }
    }
});

