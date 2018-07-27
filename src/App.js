import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";

//The following below disables the warning since BootstrapSlider won't be used but he css is needed
/* eslint-disable no-unused-vars*/

// import { authUser, signOutUser } from "./libs/awsLib";

import "./assets/scss/index.scss";

class App extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.theme);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  //This verifies that the session was read first for login status before rendering
  //This function is part of the React Event Library
  //https://reactjs.org/docs/react-component.html
  async componentDidMount() {
    try {
      // if (await authUser()) {
      if (true) {
        // this.userHasAuthenticated(true);
      }
    }
    catch (e) {
      alert(e);
    }

    this.setState({ isAuthenticating: false });
  }

  //This allows anything with access to App to set authenticated to true
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    // signOutUser(); //This clears the actual session/localstorage out
    this.userHasAuthenticated(false);//This clears the App state
    //We have access to <Route> properties and functions thanks to withRouter()
    this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      theme: this.props.theme
    };
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Header theme={this.props.theme} isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} />
        <Routes childProps={childProps} />
        <Footer theme={this.props.theme}/>
      </div>
    );
  }
}

//withRouter will give access to Route class properties/functions
//https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(App);
