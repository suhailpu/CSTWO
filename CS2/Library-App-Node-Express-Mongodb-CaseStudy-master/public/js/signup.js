let name = document.getElementById("name");

let email = document.getElementById("email");
let error = document.getElementById("error");
let errormobile = document.getElementById("errormobile");
let errorpass = document.getElementById("errorpass");
let pass = document.getElementById("pass");
let pass2 = document.getElementById("pass2");

let form = document.getElementById('form');

let username = document.getElementById("uname");
let errorusername = document.getElementById("errorusername");

function validateEmail()
{
// let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let regexp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
if(regexp.test(email.value))
{
    
    error.innerHTML="Valid Email Id Format";
    error.style.color= "green";
    return true;
}

else{
    error.innerHTML="Invalid Email Id Format";
    error.style.color= "red";
    return false ;
}



}

function validateMobile()
{
// let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

if(regexp.test(mobile.value))
{
    
    errormobile.innerHTML="Valid Mobile Number Format";
    errormobile.style.color= "green";
    return true;
}

else{
    errormobile.innerHTML="Invalid Mobile Number Format";
    errormobile.style.color= "red";
    return false ;
}



}

function validatePassword()
{
// let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
// let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

if(pass.value==pass2.value)
{
    
    errorpass.innerHTML="Passwords are Matching";
    errorpass.style.color= "green";
    return true;
}

else{
    errorpass.innerHTML="Passwords are not Matching";
    errorpass.style.color= "red";
    return false ;
}



}




