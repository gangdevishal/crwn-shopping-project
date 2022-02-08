import "./App.css";

import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.util";


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:null
    }
  }
unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
      console.log("currentuser", user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth() 
  }
  
  render() {
    const {currentUser} = this.state;
    return(
      <div>
      <Header  currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUp} />
      </Switch>
    </div>
    )
  }
}


