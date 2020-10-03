const components = {

}
components.registerPage=`    <div class="register_container">
<div class="form_wrapper">
        <div class="register_header">
            <h1>Mindx Chat</h1>
        </div>
        <form action="" id="register_form">
                <div class="input_first_last_name">
                    <input type="text" name="firstName" class="input_wapper" placeholder="First Name...">
                    <input type="text" name="lastName" class="input_wapper" placeholder="Last Name...">
                </div>
                <input type="text" name="email" class="input_wapper" placeholder="Email...">
                <div id="email_error" class="error">
                </div>
                    <input type="password" name="password" class="input_wapper" placeholder="Password..">
                <div id="password_error" class="error">
                </div>
                <input type="password" name="confirmPassword" class="input_wapper" placeholder=" Confirm Password..">
                <div id="confirm_password_error" class="error">
                </div>
                <div class="register_action">
                    <div>
                        Already have an account ?<span id="redirect-login" class="cursor_pointer">Login</span>
                    </div>
                    <input type="button" name="register" class="btn" value="Register">
                </div>
        </form>
</div>
</div>`
components.loginPage = `<div class="login_container">
<div class="form_wrapper">
        <div class="login_header">
            <h1>Mindx Chat</h1>
        </div>
        <form action="" id="login_form">
                <input type="text" name="email" class="input_wapper" placeholder="Email...">
                <div id="email_error" class="error">
                </div>
                    <input type="password" name="password" class="input_wapper" placeholder="Password..">
                <div id="password_error" class="error">
                </div>
                <div class="login_action">
                    <div>
                        Don't have an account ?<span  id="redirect-register" class="cursor_pointer">Registers</span>
                    </div>
                    <input type="button" name="login" class="btn" value="Login">
                </div>
        </form>
</div>
</div>`