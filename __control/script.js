document.addEventListener("DOMContentLoaded", function() {
  var cursor = document.getElementById("bubles");

  document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});


function isPasswordValid(password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W)(?!.*\s).{6,}$/;
    return passwordRegex.test(password);
}
function isEmailValid(mail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
}  
function log(){
    var mail = document.getElementById("mail");
    var password = document.getElementById("pswd");
    var c = document.getElementById("emilerror");
    var d = document.getElementById("paserror");
    var valMail = isEmailValid(mail.value);
    if(mail.value=="" || valMail===0){
        mail.style.border = "2px solid red";
        c.innerText = "Enter Email ";
        c.style.color = "Red";
        c.style.fontSize='16px';
        c.style.paddingLeft='10%';
    }
    else if(valMail == false){
        mail.style.border = "2px solid red";
        c.innerText = "Invalid Email ";
        c.style.color = "Red";
        c.style.fontSize='16px';
        c.style.paddingLeft='10%';
    }
    else{
        mail.style.border="none";
        mail.style.borderBottom = "2px solid #000";
        c.innerText="";
    }
    var valid = isPasswordValid(password.value);
    if(valid == false){
        password.style.border = "2px solid red";
        d.innerText = "Invalid Password";
        d.style.color = "Red";
        d.style.fontSize='16px';
        d.style.paddingLeft='10%';
    }
    else
        window.open("../__src/apply.html","_self");
};

function sign(){
    var name = document.getElementById("uName");
    var mail = document.getElementById("signMail");
    var password = document.getElementById("paswd");
    var c = document.getElementById("mailError");
    var d = document.getElementById("pasError");
    var e = document.getElementById("nameError");
    var valMail = isEmailValid(mail.value);
    if(name.value===""){
        name.style.border = "2px solid red";
        e.innerText = "Enter Username ";
        e.style.fontSize='16px';
        e.style.color = "Red";
        e.style.paddingLeft='10%';
    }
    else if(name.value.length<6){
      name.style.border = "2px solid red";
      e.innerText = "Minimum Username length is 6 ";
      e.style.fontSize='16px';
      e.style.color = "Red";
      e.style.paddingLeft='10%';
    }
    else{
        name.style.border="none";
        name.style.borderBottom="2px solid #000";
        e.innerText="";
    }
    
    if(mail.value=="" || valMail==false){
        mail.style.border = "2px solid red";
        c.innerText = "Enter Email ";
        c.style.fontSize='16px';
        c.style.color = "Red";
        c.style.paddingLeft='10%';
    }
    else{
        mail.style.border="none";
        mail.style.borderBottom = "2px solid #000";
        c.innerText="";
    }
    
    var valid = isPasswordValid(password.value);
    if(valid == false){
        password.style.border = "2px solid red";
        d.innerText = "Password length is minimum 6.It contains characters,Numbers,Symbols";
        d.style.fontSize='16px';
        d.style.color = "Red";
    }
    else window.open("../__src/personal.html","_self");
};

function redirect() {
    var a = document.getElementById("pass");
    var b = document.getElementById("repas");
    var c = document.getElementById("pasError");
    var d = document.getElementById("repassError");
    var e = document.getElementById("notSame");
    var val1 = isPasswordValid(a.value);
    var val2 = isPasswordValid(b.value);
    if (a.value === "") {
      a.style.border = "2px solid red";
      c.style.color = "Red";
      c.innerText = "Invalid Password";
      c.style.fontSize = "16px";
      c.style.paddingLeft = "10%";
    } 
    else if (val1 === false) {
      a.style.border = "2px solid red";
      c.innerText = "Invalid Password";
      c.style.color = "Red";
      c.style.fontSize = "16px";
      c.style.paddingLeft = "10%";
    }
    else {
      a.style.border = "none";
      a.style.borderBottom = "2px solid #000";
      c.innerText = "";
    }
    if (b.value === "") {
      b.style.border = "2px solid red";
      d.innerText = "Invalid Password";
      d.style.fontSize = "16px";
      d.style.color = "Red";
      d.style.paddingLeft = "10%";
    } 
    else if (val2 === false) {
      b.style.border = "2px solid red";
      d.innerText = "Invalid Password";
      d.style.color = "Red";
      d.style.fontSize = "16px";
      d.style.paddingLeft = "10%";
    } 
    else {
      b.style.border = "none";
      b.style.borderBottom = "2px solid #000";
      d.innerText = "";
    }
    if (val1 && val2 && a.value === b.value) {
      window.open("login.html", "_self");
    } 
    else if(val1 == val2 && a.value!=b.value) {
      e.innerText = "Passwords are different";
      e.style.fontSize = "25px";
      e.style.paddingLeft = "20%";
      a.style.border = "2px solid red";
      e.style.color = "Red";
      b.style.border = "2px solid red";
    }
  }
  