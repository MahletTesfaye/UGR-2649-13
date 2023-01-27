
const username = document.querySelector("#login__form__username");
const username_message = document.querySelector("#login__form__username-message");
const login = document.querySelector(".button__login");
const password = document.querySelector("#login__form__password");
const password_message = document.querySelector("#login__form__password-message");

function Validator(){

    if( username.value=== ""){
        username_message.innerHTML = "This field is required";
    }
    else{
        username_message.innerHTML = "";
    }
    if (password.value === ""){
        password_message.innerHTML = "This field is required."; 
    }
    else if(password.value.length < 6){
        password_message.innerHTML = "Password length must have atleast 6 characters.";
    }
    else {
        password_message.innerHTML = "";
    }
    if (username_message.innerHTML == "" && password_message.innerHTML == ""){
        alert("You are succesfully logged in.");
    }
}
