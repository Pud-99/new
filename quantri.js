if (localStorage.getItem('checkLog') != 'logged'){
    window.location.href='login.html';
}

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
            <a href="#" class="del" id="del_${data[i].id}">&#10007</a>
        </td>
    </tr>`
    // console.log(document.getElementById(`delete_${data[i].id}`));
    // document.getElementById(`delete_${data[i].id}`).addEventListener("click",() => deleteApi(data[i].id));
    }
};
demoApiGetAll();

let contactNumb = Number(localStorage.getItem("contactNumb"));
let contacNumber = document.getElementById("contactNumber");
contacNumber.innerText = contactNumb;

table.addEventListener("click",function(e){
    if (e.target.classList.contains("tick")) {
        if(confirm("Done this contact?")) {
            e.target.parentElement.parentElement.remove()
            deleteApi(Number(e.target.id.split("_")[1]));
            contactNumb++;
            localStorage.setItem("contactNumb",contactNumb)
        }
    }
    if(e.target.classList.contains("del")){
        if(confirm("Delete this contact?")){
            e.target.parentElement.parentElement.remove()
            deleteApi(Number(e.target.id.split("_")[1]));
        }
    }
});



let btnHome = document.getElementById('home-btn');
let btnAcc = document.getElementById('account-btn');
let btnHelp = document.getElementById('helpdesk-btn');
let btnEdit = document.getElementById('edit-btn');
let home = document.getElementById('home');
let display = document.getElementById('display');
let file = document.getElementById('file');
let aboutchanges = document.getElementById('about-changes');
let aboutText = document.getElementById('about-text');


btnHome.addEventListener('click',function(){
    home.style.display='block';
    display.style.display='none';
})

btnEdit.addEventListener('click',function(){
    display.style.display='block';
    home.style.display='none';
})


aboutchanges.addEventListener("click",function(){
    let fileName = file.value.split( '\\' ).pop();
    const demoApiPost = async () => {
        
        const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/About/1',
        {
            method:'PUT',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                text:aboutText.value,
                img:`./anh/${fileName}`
            }),
        });
        const content = await response.json();
        alert('Changes success')
    };
    demoApiPost();
})


let homee = document.getElementById('home');
let abUs = document.getElementById('abUs');
let port = document.getElementById('port');
let serv = document.getElementById('serv');
let team = document.getElementById('team');
let contact = document.getElementById('contact');
let abUscontent = document.getElementById('abUscontent');
let portcontent = document.getElementById('portcontent');
let pickProDay = document.getElementById('pickProDay');
let proFileDay = document.getElementById('proFileDay');
let proDesginDay = document.getElementById('proDesginDay');
let proContentDay = document.getElementById('proContentDay');
let proInfoDay = document.getElementById('proInfoDay');
let pickProNight = document.getElementById('pickProNight');
let proFileNight = document.getElementById('proFileNight');
let proDesginNight = document.getElementById('proDesginNight');
let proContentNight = document.getElementById('proContentNight');
let proInfoNight = document.getElementById('proInfoNight');
let proChanges = document.getElementById('proChanges');
let logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click",function(){
    localStorage.setItem("checkLog",'logout');
    window.location.href='login.html';
});

abUs.addEventListener('click',function(){
    abUscontent.style.display='flex';
    portcontent.style.display='none';
})
port.addEventListener('click',function(){
    portcontent.style.display='flex';
    abUscontent.style.display='none';
})


if(proContentDay.text!='' && pickProDay.text!='' && proDesginDay.text!='' && proInfoDay.text!=''){
    proChanges.addEventListener("click",function(){
        async function demoApiPutProDay (position){   
            const response = await fetch(`https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/Portfolio/${position}`,
            {
                method:'PUT',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    desgin:proDesginDay.value,
                    content:proContentDay.value,
                    info:proInfoDay.value,
                    img:`./anh/${proFileDay.value.split( '\\' ).pop()}`,
                }),
            });
            const content = await response.json();
            alert('Changes success')
        };
        let prodayNumb = Number(pickProDay.value);
        demoApiPutProDay(prodayNumb);
    })
}  else (alert('You must input all information!'));

if (proContentNight.text!='' && pickProNight.text!='' && proDesginNight.text!='' && proInfoNight.text!=''){
    proChanges.addEventListener("click",function(){
        let pronightNumb = Number(pickProNight.value)+4;
        async function demoApiPutProNight(position){
        
            const response = await fetch(`https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/Portfolio/${position}`,
            {
                method:'PUT',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    desgin:proDesginNight.value,
                    content:proContentNight.value,
                    info:proInfoNight.value,
                    img:`./anh/${proFileNight.value.split( '\\' ).pop()}`,
                }),
            });
            const content = await response.json();
            alert('Changes success');
        };    
        demoApiPutProNight(pronightNumb);
    })
} else (alert('You must input all information!'));

