import React from "react";

function Login() {

    function login() {
        let mobile = document.getElementById("mobileNumber").value;
        let password = document.getElementById("password").value;
        console.log(mobile + ", " + password);
    }

    return (
        <div>
            <input type="text" id="mobileNumber" name="mobile"></input>
            <input type="passworld" id="password" name="password"></input>
            <button type="button" onClick={login}>login</button>
        </div>
    )
}

export default Login;