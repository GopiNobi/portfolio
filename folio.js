let forms = document.querySelector("#forms");
let email=document.querySelector("#email");
let username=document.querySelector("#username")
let button = document.querySelector("#send");

forms.addEventListener("submit",(e)=>{
    if(!validateform()){
        e.preventDefault();
    }
    else{
        validateform();
    }
})
function validateform(){
    const emailval=email.value.trim()
    const usernameval=username.value.trim()
    if (emailval===""){
        error(email,"Please Enter Your Email")
    }
    else if(!emailvalidate(emailval)){
        error(email,"Please Enter Valid Email")
    }
    else{
        success(email)
    }
    if(usernameval===""){
        error(username,"Please Enter Your Name")
    }
    else{
        success(username)
    }

}
function error(element,message){
    const input = element.parentElement;
    const errorelement =input.querySelector(".error")
    errorelement.innerText=message;
    input.classList.add("error");
    input.classList.remove("success")
}
function success(element){
    const input = element.parentElement;
    const errorelement =input.querySelector(".error")
    errorelement.innerText="";
    input.classList.add("success");
    input.classList.remove("error")
}
const emailvalidate =(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}