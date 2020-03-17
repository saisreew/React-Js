import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
class Registration extends Component {
  state = {
    account: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .min(3)
      .required(),
    lastName: Joi.string()
      .min(2)
      .required(),
    email: Joi.string().required(),
    password: Joi.string()
      .min(3)
      .required()
  };
  handleInputField = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    //account[event.currentTarget.name] = event.currentTarget.value;
    account[name] = value;
    this.setState({ account });

    //validation
    const obj = { [name]: value }; //{firstName : "test"}
    const sch = { [name]: this.schema[name] }; //{firstName: Joi.string().min(3).required() }

    console.log(obj);
    console.log(sch);
    console.log(Joi.validate(obj, sch));

    const result = Joi.validate(obj, sch);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      //alert("You have registered successfully!");
      this.setState({ errors });
    }
  };
  handleFormSubmit = event => {
    event.preventDefault();
    alert("Registration is Success!");
    this.props.history.replace("/login");
    /*
    const errors = {};
    const account = this.state.account;
    const options = { abortEarly: false };
    const result = Joi.validate(account, this.schema, options);
    //console.log(result);
    //console.log(result.error.details);
    /*for (let item of result.error.details) {
      console.log(item);
      console.log(item.path[0]);
      console.log(item.message);
      errors[item.path[0]] = item.message;
      this.setState({ errors });
    }*/
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="w-50 mx-auto mt-5 pt-0"
        >
          <p className="h3 p-3 text-center bg-secondary text-white">
            Registration
          </p>
          <div className="form-group">
            <Input
              label="Firstname"
              inputName="firstName"
              type="text"
              value={this.state.account.firstName}
              handleInputField={this.handleInputField}
              error={this.state.errors.firstName}
            />
          </div>
          <div className="form-group">
            <Input
              label="lastName"
              inputName="lastName"
              type="text"
              value={this.state.account.lastName}
              handleInputField={this.handleInputField}
              error={this.state.errors.lastName}
            />
          </div>
          <div className="form-group">
            <Input
              label="Email"
              inputName="email"
              type="email"
              value={this.state.account.email}
              handleInputField={this.handleInputField}
              error={this.state.errors.email}
            />
          </div>
          <div className="form-group">
            <Input
              label="Password"
              inputName="password"
              type="password"
              value={this.state.account.password}
              handleInputField={this.handleInputField}
              error={this.state.errors.password}
            />
          </div>
          <input
            type="submit"
            className="btn btn-secondary btn-block p-3"
          ></input>
        </form>
        <p className="text-center">
          Already had a account? Login <Link to="/login">here</Link>
        </p>
      </div>
    );
  }
}

export default Registration;
