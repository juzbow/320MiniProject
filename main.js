"use strict";

const hiddenElement = document.querySelector("#hidden");
hiddenElement.style.display = "none";

const firstButtonDiv = document.getElementById("first-button-div");
firstButtonDiv.style.display = "block";

const infoDiv = document.getElementById("info-container");
infoDiv.style.display = "none";

const passwordPrompt = () => {
    let passInput = prompt("Enter your password", "Enter 'password' as password. Leave the prompt blank to exit");

    if(passInput === ""){
        return;
    }
    if(passInput != "password"){
        passwordPrompt();
    }else{
        document.querySelector("#page").innerHTML = "Login Successful. Information on To-Do Application below";
        hiddenElement.style.display = "block";
        firstButtonDiv.style.display = "none";
        infoDiv.style.display = "block";
    }
}
