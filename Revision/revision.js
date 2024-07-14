// let hiddenText = document.getElementById("hide");
// let checkButton = document.getElementById("check");

// checkButton.addEventListener('click', function() {
//     hiddenText.textContent="This message was hidden before"
//     console.log("This message was hidden before");
// });
let signIn = document.getElementById("sign-in")
// let localstorage = JSON.parse(localStorage.getItem())
signIn.addEventListener('click', function(){
    window.open("signup.html", "_blank");
})

function hash(str){

}

let login = document.getElementById("login")
let message = document.getElementById("message")
login.addEventListener('click', function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
   let storeUser =  localStorage.getItem('username', username)
    let storePass = localStorage.getItem('password', password)
    if(storeUser === username && storePass === password){
        window.open("Loggedin.html")
    }
    else if(storeUser === ' ' || storePass === ' '){
        message.textContent = "Username and password are mandatory"
    }
    else if(storeUser !== username ){
        message.textContent = "invalid username"
    }
    else if(storePass !== password){
        message.textContent = "invalif password"
    }
    
    // window.open("Loggedin.html", "_blank")
})
let signinPage = document.getElementById("signin")
 function signin(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    if(username && password){
        window.open("Loggedin.html")
    }
    // window.open("Loggedin.html", "_blank")

    
}
// function signIn() {
//     window.open("signup.html", "_blank");
// }

//