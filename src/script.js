const pass = document.querySelector('#pass');
const newPassword = document.querySelector('#newPassword');

function generatePass(){
    newPassword.innerHTML ='';
    if(pass.value === ''){
        alert('Enter the password length!!');
        return;
    }

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for(var i = 0, n = charset.length; i < pass.value; i++){
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    let result = document.createTextNode(password);
    return newPassword.appendChild(result);
}