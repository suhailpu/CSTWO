const username = document.getElementById("uname");
const password = document.getElementById("pass");

function validate()
{
    

    
  if(username.value.trim()== "" && password.value.trim()=="")
  {
    alert("Blank Username and Password");
    uname.style.border = "solid 3px red";
   pass.style.border = "solid 3px red";
    error2.innerHTML="Blank Username and Password";
    error2.style.color= "red";
    
    setTimeout(function(){ 
      error2.innerHTML = "";
      pass.style.border = "";
      uname.style.border = "";
     
  }, 3000);
    return false;
  }
  else
    if(username.value.trim()=="")
    {
      alert("Blank Username");
      uname.style.border = "solid 3px red";
      error.innerHTML="Blank Username";
      error.style.color= "red";
      username.focus();
      setTimeout(function(){ 
        error.innerHTML = "";
        uname.style.border = "";
    }, 3000);
      return false;
    }

    else if(password.value.trim()=="")
    {
      alert("Blank Password");
      pass.style.border = "solid 3px red";
      error2.innerHTML="Blank Password";
      error2.style.color= "red";
      pass.focus();
      setTimeout(function(){ 
        error2.innerHTML = "";
        pass.style.border = "";
    }, 3000);
      return false;
    }
    
    else if(password.value.trim().length<8)
    {
      alert("Password too short, Please Retry");
      pass.style.border = "solid 3px red";
      error2.innerHTML="Minimum 8 charachters required";
      error2.style.color= "red";
      pass.focus();
      setTimeout(function(){ 
        error2.innerHTML = "";
        pass.style.border = "";
    }, 2000);
      return false
    }
    else{
      return true;
    }

    // if(username.value.trim()==""|| password.value.trim() == "")
    // {
    //     alert("No Blank Allowed");
    //     return false;
    // }
    // else
    // {
    //   true;
    // }
}


setTimeout(function(){ 
  logerror.innerHTML = "";
 
  
}, 4000);