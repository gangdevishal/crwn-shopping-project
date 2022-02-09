import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sign-up.style.scss";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, password, confirmPassword, email } = this.state;

    if (password !== confirmPassword) {
      alert("Password dont match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      toast.success("New User Registered Successfully!!!");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, password, confirmPassword, email } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
          autoFocus
            type="text"
            name="displayName"
            label="DISPLAY NAME"
            onChange={this.handleChange}
            value={displayName}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="EMAIL"
            onChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="PASSWORD"
            onChange={this.handleChange}
            value={password}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="CONFIRM PASSWORD"
            onChange={this.handleChange}
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
