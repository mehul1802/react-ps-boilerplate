import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "../components/AppliedRoute";
import asyncComponent from './AsyncComponent'

const Home = asyncComponent(() =>
    import('../containers/Home').then(module => module.default)
)
const Login = asyncComponent(() =>
    import('../containers/Login').then(module => module.default)
)
const Signup = asyncComponent(() =>
    import('../containers/Signup').then(module => module.default)
)
// const NewVisit = asyncComponent(() =>
//     import('../containers/NewVisit').then(module => module.default)
// )
const ServiceArea = asyncComponent(() =>
    import('../containers/ServiceArea').then(module => module.default)
)
const ServiceDetail = asyncComponent(() =>
    import('../containers/ServiceDetail').then(module => module.default)
)
const LastUsedPackages = asyncComponent(() =>
    import('../containers/LastUsedPackages').then(module => module.default)
)
const About = asyncComponent(() =>
    import('../containers/About').then(module => module.default)
)
const Contact = asyncComponent(() =>
    import('../containers/Contact').then(module => module.default)
)
const Terms = asyncComponent(() =>
    import('../containers/Terms').then(module => module.default)
)
const Services = asyncComponent(() =>
    import('../containers/Services').then(module => module.default)
)
const NotFound = asyncComponent(() =>
    import('../containers/NotFound').then(module => module.default)
)

// import Home from "../containers/Home";
// import Login from "../containers/Login";
// import Signup from "../containers/Signup";
// import NewVisit from "../containers/NewVisit";
// import ServiceArea from "../containers/ServiceArea";
// import ServiceDetail from "../containers/ServiceDetail";
// import About from "../containers/About";
// import Contact from "../containers/Contact";
// import NotFound from "../containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    {/* <AppliedRoute path="/visits/new" exact component={NewVisit} props={childProps} />    */}
    <AppliedRoute path="/service-area" exact component={ServiceArea} props={childProps} />   
    <AppliedRoute path="/service-detail" exact component={ServiceDetail} props={childProps} />
    <AppliedRoute path="/last-used-packages" exact component={LastUsedPackages} props={childProps} />
    <AppliedRoute path="/about" exact component={About} props={childProps} />       
    <AppliedRoute path="/contact" exact component={Contact} props={childProps} />
    <AppliedRoute path="/terms" exact component={Terms} props={childProps} />                  
    <AppliedRoute path="/services" exact component={Services} props={childProps} />                  
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
