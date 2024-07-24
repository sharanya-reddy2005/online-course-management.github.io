function validate() {
    const username = document.getElementById("username1").value;
    const password = document.getElementById("password1").value;

    const reg_exp_username = /^[a-zA-Z]{4,20}$/;
    const reg_exp_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;

    if (!reg_exp_username.test(username)) {
        document.getElementById("msg2").innerHTML = "Enter a valid username (4-20 characters, letters only)!";
        return false;
    }
    
    if (!reg_exp_password.test(password)) {
        document.getElementById("msg2").innerHTML = "Enter a valid password (6-20 characters, at least one digit, one lowercase and one uppercase letter, and one special character)!";
        return false;
    }
    
    return true;
}
