import React from "react";
import { Route } from "react-router-dom";

//Reference: https://serverless-stack.com/chapters/add-the-session-to-the-state.html
//Component C represents the route to be rendered.
//This is the component we want the child props on being passed from App.js

//Normally a route looks like this: <Route path="/" exact component={Home} />
//The Route component can also take a render method in place of the component.
//This allows us to control what is passed in to our component.
//Note, the props variable in this case is what the Route component passes us.
//For example the push method from Route...
//Whereas, the cProps is the childProps that want to set.
//This has reference to our hasAuthenticated() function
export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
