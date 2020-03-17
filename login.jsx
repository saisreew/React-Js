import React, { Component } from "react";
import Input from "./input";
import { Link } from "react-router-dom";
//import Button from "./button";
class Login extends Component {
  //creating ref object
  username = React.createRef();
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const errors = {};
    const { username, password } = this.state.account;
    console.log(username);
    console.log(password);
    if (username.trim() === "") errors.username = "Username is required";
    if (password.trim() === "") errors.password = "Password is required";
    console.log(errors);
    this.setState({ errors });
    if (username === "testuser" && password === "abc@123") {
      this.props.history.replace("/home");
    } else {
      alert("Enter valid credentials!");
    }
  };

  handleInputField = event => {
    const account = this.state.account;
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    account[event.currentTarget.name] = event.currentTarget.value;
    console.log(account);
    this.setState({ account: account });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="w-50 mx-auto mt-5 pt-0 border border-secondary rounded bg-light"
        >
          <p className="h3 bg-secondary text-white text-center p-3">
            Login Form
          </p>
          <div className="form-group">
            <Input
              inputName="username"
              value={this.state.account.username}
              type="text"
              handleInputField={this.handleInputField}
              label="Username"
              error={this.state.errors.username}
            />
          </div>
          <div className="form-group">
            <Input
              inputName="password"
              value={this.state.account.password}
              type="password"
              handleInputField={this.handleInputField}
              label="password"
              error={this.state.errors.password}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block"
            onClick={() => this.props.setLogin(true)}
            value="Login"
          />
          <p className="small text-center mt-3">
            Don't have an account? Register<Link to="/registration">here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
