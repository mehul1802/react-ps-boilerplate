import React from 'react';
import { Link } from "react-router-dom";
import { Col, Image, Nav, Navbar, NavItem, Button } from "react-bootstrap";

import RouteNavItem from "../RouteNavItem"; //@JA - Custom Bootstrap NavItem
import Logo from "../../assets/images/logo.png";


export default ({ isAuthenticated, handleLogout, data }) =>
  <header>
    <section className="header-section-fathersday hidden-xs">
      <div className="container-fluid">
        <Col md={4} mdPush={8} className="header-topright"><a href="tel:1-548-854-8899">+{data.contact.text}</a></Col>        
      </div>
      <Navbar fluid={true} collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><Image src={Logo} responsive /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="pull-right">
            {isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              : [
                <RouteNavItem key={1} href="#">
                  Start Quote
                </RouteNavItem>,
                <RouteNavItem key={2} href="/service-area">
                  Service Area
                </RouteNavItem>,
                <RouteNavItem key={3} href="/service-detail">
                  Service Detail
                </RouteNavItem>,
                <RouteNavItem key={4} href="/contact">
                  Contact
                </RouteNavItem>,
                <RouteNavItem key={5} href="/about">
                  About
                </RouteNavItem>
              ]}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </section>
    {/* // Header Section for mobile view */}
    <section className="header-section-fathersday hidden-md hidden-sm hidden-lg">
      <Col md={4}> <Navbar fluid={true} collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle className="pull-left" />
            <div className="header-topright"><a href="tel:1-548-854-8899">+{data.contact.text}</a></div>          
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="pull-left">
            { isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              : [
                <RouteNavItem key={1} href="#">
                  Start Quote
                </RouteNavItem>,
                <RouteNavItem key={2} href="/service-area">
                  Service Area
                </RouteNavItem>,
                <RouteNavItem key={3} href="/service-detail">
                  Service Detail
                </RouteNavItem>,
                <RouteNavItem key={4} href="/contact">
                  Contact
                </RouteNavItem>,
                <RouteNavItem key={5} href="/about">
                  About
                </RouteNavItem>
              ]}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/"><Image src={Logo} responsive /></Link>
        </Navbar.Brand>
      </Navbar></Col>
      <div>
        <Button className="quote-btn"><Link to="#">Get Your Quote</Link></Button>
      </div>
    </section>
  </header>