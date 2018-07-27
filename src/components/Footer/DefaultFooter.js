import React from 'react';
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import FooterLogo from "../../assets/images/footer-logo.png";

const year = new Date().getFullYear();

export default ({ data }) =>
  <div>
    <section className="footer-section">
      <Grid fluid={true}>
        <Row>
          <Col md={3} sm={4} xs={12} className="footer-logo-section text-center">
            <Image src={FooterLogo} />
            <Row className="social-links">
              <h5>Get Social With Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href={data.socialLinks.facebook}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={data.socialLinks.twitter}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={data.socialLinks.instagram}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={data.socialLinks.googleplus}>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </Row>
          </Col>
          <Col md={9} sm={8} xs={12} className="footer-info-section">
            <div className="footer-inner-section float-right">
              <h2>Contact Info</h2>
              <div className="footer-right-inner">
                <div className="footer-icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <a className="footer-text" href={`tel:${data.contact.text}`} >
                  {data.contact.text}
                </a>
              </div>
              <div className="footer-right-inner">
                <div className="footer-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <a className="footer-text" href={`mailto:${data.email.text}`} >
                  {data.email.text}
                </a>
              </div>
              <div className="footer-right-inner">
                <div className="footer-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="footer-text">
                  459, 0 Pyay Rd, Yangon 000000, <br />
                  Myanmar (Burma)
            </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
    <section className="container-fluid copyright-section text-center">
      Copyright @ Pool Service 123 { year }
      <Link to="#">Privacy Policy</Link>
      <Link to="/terms">Terms of  Uses</Link>
    </section>
  </div>