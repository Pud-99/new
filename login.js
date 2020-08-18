let uid = document.getElementById('uid');
let pass = document.getElementById('pass');
let btnLogin = document.getElementById('btnLogin');
let checkLog = localStorage.getItem('checkLog')

btnLogin.addEventListener("click",function(){
    async function ApiGetLogin() {
        const response = await fetch('https://5f37ee6ebbfd1e00160bf74a.mockapi.io/api/login/1');
        const data = await response.json();
        console.log(data.uid , data.pass);
        if (uid.value == data.uid && pass.value == data.pass){
            checkLog = 'logged';
            localStorage.setItem('checkLog',checkLog);
            window.location.href="quantri.html";
        } else (alert('Wrong pass or id !'));
    };
    ApiGetLogin();
})
