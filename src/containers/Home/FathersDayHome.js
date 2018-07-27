import React from "react";
import { Grid, Row, Col, FormGroup, FormControl, Button, Image } from "react-bootstrap";

import bgpoolservice from '../../assets/images/fathers-day/pool-service-software.jpg';
import servicesofticon from '../../assets/images/fathers-day/father-son.png';
import Logo from "../../assets/images/logo.png";
import fathert from "../../assets/images/fathers-day/father-t.png";
import bgpoolservicemobile from "../../assets/images/fathers-day/pool-service-software-mobile.png";

//@JA - Test to prove development stages (Staging, Dev, Prod)
console.log("stage=" + process.env.REACT_APP_STAGE);

export default ({ data }) =>
<div className="fathers-day">
<div className="home-component">
    <section className="banner-section">
      <div className="free-quote">
        <div className="form-head">
          <div className="quote-title"> FREE QUOTE</div>
        </div>
        <form>
          <FormGroup
            controlId="formBasicText"
            // validationState={this.getValidationState()}
            className="quote-fields"
          >
            <FormControl
              type="text"
              // value={this.state.value}
              placeholder="Name"
              className="form-field"
            // onChange={this.handleChange}
            />
            <FormControl
              type="text"
              // value={this.state.value}
              placeholder="Phone"
              className="form-field"
            // onChange={this.handleChange}
            />
            <FormControl
              type="email"
              // value={this.state.value}
              placeholder="Email"
              className="form-field"
            // onChange={this.handleChange}
            />
            <FormControl
              type="text"
              // value={this.state.value}
              placeholder="City"
              className="form-field"
            // onChange={this.handleChange}
            />
          </FormGroup>
          <div className="send-btn"><Button type="submit">Send <i className="fa fa-angle-right"></i> <i className="fa fa-angle-right"></i></Button></div>
        </form>
      </div>
    </section>
    <section className="service-section">
      <div className="service-head text-center">
        <h2>Let us help starting with our</h2>
        <div>
          <h1>Fa<Image className="father-t" src={fathert}  />her's <span>D</span>ay</h1>
          <h3 className="special">Special</h3>
        </div>
        {/* <h1>Pool Services</h1>
    <h1 className="special">Special</h1> */}
      </div>
      <Grid fluid={true}>
        <Row className="service-packages">
          <Col md={4} sm={4} xs={12}>
            <div className="col">
              <div className="box">
                <div className="header blue">
                  <h2>1</h2>
                </div>
                <div className="desc">
                  <p>Starting at </p>
                  <b>${data.packages.basic.price}/mo</b>
                </div>
                <Button className="more-info"><a href={data.packages.basic.link}>MORE INFO</a>  </Button>
              </div>
            </div>
          </Col>
          <Col md={4} sm={4} xs={12}>  <div className="col">
            <div className="box">
              <div className="header pink">
                <h2>2</h2>
              </div>
              <div className="desc">
                <p>Starting at</p>
                <b>${data.packages.advanced.price}/mo</b>
              </div>
              <Button className="more-info pink-btn"><a href={data.packages.advanced.link}>MORE INFO</a>  </Button>
            </div>
          </div></Col>
          <Col md={4} sm={4} xs={12}>  <div className="col">
            <div className="box">
              <div className="header yellow">
                <h2>3</h2>
              </div>
              <div className="desc">
                <p>Starting at </p>
                <b>${data.packages.advanced.price}/mo</b>
              </div>
              <Button className="more-info yellow-btn"><a href={data.packages.premium.link}>MORE INFO</a>  </Button>
            </div>
          </div></Col>
        </Row>
        <Row className="service-features">
          <h2>Get ${data.discountPrice} off for the first month of service!</h2>
          <Col md={6} sm={6} xs={12} className="col-left" >
            <h2>Service<span>Area</span></h2>
            <h4>Currently serving at</h4>
            <ul>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i> <a href="#">Orange</a></li>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i> <a href="#">Mission Viejo</a></li>
            </ul>
            <h6>Other service areas coming soon!</h6>
          </Col>
          <Col md={6} sm={6} xs={12} className="col-right" >
            <h2>Referral<span>program</span></h2>
            <div className="rate"><span className="dollar">{data.referral.price}$</span><br /><span>/mo</span></div>            
            <h4>Refer a friend <br /> and get ${data.referral.price} every month! </h4>
            <h6><a href={data.referral.link}>Click to view details</a></h6>
          </Col>
        </Row>
      </Grid>
    </section>
    <section className="service-software">
      <Grid >
        <Row>
          <Col md={11} sm={11} >
            <div className="header-service-software">
              <div className="head-service-soft">
                <h4>We keep in touch with our</h4>
                <h1 className="service-software-head">Pool Service Software</h1>
              </div>
              <div>
                <Image src={servicesofticon} className="" />
              </div>
            </div>
            <Image src={bgpoolservice} className="img-pool-service hidden-xs" responsive={true} />
            <Image src={bgpoolservicemobile} className="img-pool-service-mobile hidden-md hidden-sm hidden-lg" responsive={true} />
            <h2>with our state of the art technology!</h2>
          </Col>
        </Row>
        <Row className="hidden-md hidden-sm hidden-lg"><Image className="additional-logo" src={Logo} responsive /></Row>
      </Grid>
    </section>
  </div>
</div>
  