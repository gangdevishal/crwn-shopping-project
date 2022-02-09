import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sign-in.style.scss";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // notify = () => toast("Wow so easy !");
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      toast.success("Sign-In Successfully!!!");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        })}
        render={({ errors, status, touched }) => (
          <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
              autoFocus
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="EMAIL"
                required
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="PASSWORD"
                required
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
              <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle} googleSignInButton>
                  Sign In With Google
                </CustomButton>
              </div>
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
        )}
      />
    );
  }
}

export default SignIn;
