import React from "react";
import { Grid, Row, Col, Button, Image } from "react-bootstrap";
import generic from '../../assets/images/generic.png';

export default () =>
    <div className="service-detail-component">
        <section className="fathersday-banner-section ">
            <div className="caption">
                <h1>Last used package</h1>
                <h3>STARTING AT $49.99/MONTH</h3>
            </div>
        </section>
        <section className="service-area">
            <Grid fluid={true}>
                <Row className="service-area-detail">
                    <Col md={12} sm={12} xs={12}  >
                        <h1>This service includes...</h1>
                        <h3><Image src={generic} alt /> Generic Design </h3>
                        <p>Our technician will be responsible for furnishing the required chemicals & maintaining the correct water chemistry in the pool. A series of water tests will be conducted on each weekly pool visit. The results of these tests will be interpreted to determine the corrections needed to maintain and ensure purity and water balance.</p>
                        <p>*NOTE* This package does not provide for the janitorial tasks such as filter cleaning, vacuum, brushing, or tile cleaning. These tasks are to be performed by a technician (You).</p>
                        <p>Our Bronze service price starts at $49.99/mo. for an average 30x15' pool without spa that is screened in. This price is subject to change based on other specifications.</p>
                        <Button className="btn btn-default"> Start Quote</Button>
                    </Col>
                </Row>
            </Grid>
        </section>
        
        <section className="package-suggestion">
            <Grid fluid={true}>
            <div className="line"></div>
                <Row className="service-area-detail-footer">
                    <h3>HOW DOES IT COMPARE?</h3>
                    <h5>See our other services</h5>
                    <Col md={6} sm={6} xs={12}  >
                        <div className="most-popular box">
                            <h1>Most Popular Package</h1>
                            <p>Our Medium Used service price starts at $49.99/mo.
This price is subject to change specifications. </p>
                            <Button className="btn btn-default"> More Info</Button>
                        </div>

                    </Col>
                    <Col md={6} sm={6} xs={12}  >
                    <div className="last-used box">
                        <h1>Medium Used Package</h1>
                        <p>Our Medium Used service price starts at $49.99/mo.
This price is subject to change specifications. </p>
                        <Button className="btn btn-default"> More Info</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>