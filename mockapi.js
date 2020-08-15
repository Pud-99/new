
//get
async function demoApiGetAll (){
    const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/login');
    const data = await response.json();
    console.log(data);
};

demoApiGetAll();

// create 
// const demoApiPost = async () => {
//     const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/login',
//     {
//         method:'POST',
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