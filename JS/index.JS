window.onload = () => {
    console.log("windows loaded")
    view.setActiveScreen("RegisterPage")
    console.log()
    let btn_register = document.getElementById("redirect-login")
    btn_register.addEventListener("click",redirectLogin)
}
const redirectLogin  = () =>{
    console.log("login")
    view.setActiveScreen("LoginPage")
    let btn_register = document.getElementById("redirect-register")
    btn_register.addEventListener("click",redirectRegister)
}

const redirectRegister = () => {
    console.log("register")
    view.setActiveScreen("RegisterPage")
    let btn_register = document.getElementById("redirect-login")
    btn_register.addEventListener("click",redirectLogin)
}