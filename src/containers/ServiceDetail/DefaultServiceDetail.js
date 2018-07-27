import React from "react";
import { Grid, Row, Col, Button, Image } from "react-bootstrap";
import generic from '../../assets/images/generic.png';

export default ({ data }) =>
    <div className="service-detail-component">
        <section className="banner-section">
            <div className="caption">
                <h1>{data.type} USED PACKAGE</h1>
                <h3>STARTING AT ${data.price}/MONTH</h3>
            </div>
        </section>
        <section className="service-area">
            <Grid fluid={true}>
                <Row className="service-area-detail">
                    <Col md={12} sm={12} xs={12}  >
                        <h1>This service includes...</h1>
                        <h3><Image src={generic} alt /> Generic Design </h3>
                        <p>{data.content.desc}</p>
                        <p>*NOTE* {data.content.note}</p>
                        <p>{data.content.note2}</p>
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
                            <h1>{data.otherPackages[0].title}</h1>
                            <p>{data.otherPackages[0].summary}</p>
                            <Button className="btn btn-default"> More Info</Button>
                        </div>

                    </Col>
                    <Col md={6} sm={6} xs={12}  >
                    <div className="last-used box">
                        <h1>{data.otherPackages[1].title}</h1>
                        <p>{data.otherPackages[1].summary}</p>
                        <Button className="btn btn-default"> More Info</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>