import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            password: ""
        }
    }

    LoginHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    login = () => {
        if (this.state.mobile === "8121222266" && this.state.password === "123") alert("Login successful");
        else console.log(this.state);
    }

    render() {
        return (
            <div>
                <input type="text" id="mobileNumber" name="mobile" placeholder="Mobile Number" onChange={this.LoginHandler}></input>
                <input type="password" id="password" name="password" placeholder="Password" onChange={this.LoginHandler}></input>
                <button type="button" onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;