const view = {

}
view.setActiveScreen = (screenName) => {
        switch(screenName){
            case "RegisterPage" :
            document.getElementById("app").innerHTML = components.registerPage
            break;
            case "LoginPage" :
            document.getElementById("app").innerHTML = components.loginPage
            break;
        }
}