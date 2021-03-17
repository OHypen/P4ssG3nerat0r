const pass = document.querySelector('#pass');
const newPassword = document.querySelector('#newPassword');

document.querySelector("#checkbox").addEventListener("change", () => {
    document.querySelector(".theame").classList.toggle("dark") 
  });

function generatePass(){
    newPassword.innerHTML = '';
    if(pass.value === ''){
        alert('Adcione o tamanho da senha! 😀');
        return;
    }

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@.-_;*"
    let password = "";

    for(var i = 0, n = charset.length; i < pass.value; i++){
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    let result = document.createTextNode(password);
    return newPassword.appendChild(result)
}