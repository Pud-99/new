let input_name = document.getElementById("input_name");
let input_email = document.getElementById("input_email");
let input_mess = document.getElementById("input_mess");
let send_mess = document.getElementById("send_mess");
let timenow = new Date();
let timeString = dayjs(timenow).format('DD/MM/YYYY:HH:mm');
console.log(timeString.value);
//get
async function demoApiGetAll (){
    const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/contact');
    const data = await response.json();
    console.log(data);
};

demoApiGetAll();

const contactApiPost = async () => {
    const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/contact',
    {
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            ten:input_name.value,
            email:input_email.value,
            mess:input_mess.value,
            time:timeString
        }),
    });
    const content = await response.json();
    alert('Send message success');
    input_name.value='';
    input_email.value='';
    input_mess.value='';
};

send_mess.addEventListener("click",() => contactApiPost());
console.log(send_mess);

// create 

// put 
// const demoApiPost = async () => {
//     const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/login/id',
//     {
//         method:'PUT',
//         headers:{
//             Accept:'application/json',
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify({
//             uid:'admin1',
//             pass:'abc123'
//         }),
//     });
//     const content = await response.json();
//     console.log(content);
// };
// demoApiPost();

