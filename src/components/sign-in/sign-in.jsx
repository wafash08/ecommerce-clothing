import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";

import "./sign-in.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
