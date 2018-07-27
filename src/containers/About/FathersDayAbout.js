import React from "react";
import { Grid, Row, Col, Image, Panel, PanelGroup } from "react-bootstrap";
import ceosign from '../../assets/images/ceo-sign.png';

export default ({ data }) =>
    <div className="about-component">
        <section className="fathersday-banner-section">
            <div className="caption">
                <h1>About us</h1>
                <h3>Provides You Pool Decoration And Service</h3>
            </div>
        </section>
        <section className="details-section">
            <Grid fluid={true}>
                <Row className="about-detail">
                    <Col md={8} sm={8} xs={12} className="col-left" >
                        <h1><div className="header-top more"></div>{data.content.title}</h1>
                        <p>{data.content.paragraph1}</p>
                        <p>{data.content.paragraph2}</p>
                        <Image src={ceosign} responsive={true} />
                        <span>CEO / COFOUNDER</span>
                    </Col>
                    <Col md={4} sm={4} xs={12} className="col-right" >
                        <div className="what-we-do">
                            <h1><div className="header-top what"></div> WHAT WE DO!</h1>
                            <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="">
                                <Panel eventKey="1">
                                    <Panel.Heading>
                                        <Panel.Title toggle>{data.services[0].name}</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <ul>
                                            <li><a href={data.services[0].link}>{data.services[0].name}</a></li>
                                            <li><a href={data.services[1].link}>{data.services[1].name}</a></li>
                                            <li><a href={data.services[2].link}>{data.services[2].name}</a></li>
                                            <li><a href={data.services[3].link}>{data.services[3].name}</a></li>
                                        </ul>
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle>{data.services[1].name}</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <ul>
                                            <li><a href={data.services[1].link}>{data.services[1].name}</a></li>
                                        </ul>
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="3">
                                    <Panel.Heading>
                                        <Panel.Title toggle>{data.services[2].name}</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <ul>
                                            <li><a href={data.services[2].link}>{data.services[2].name}</a></li>
                                        </ul>
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="4">
                                    <Panel.Heading>
                                        <Panel.Title toggle>{data.services[3].name}</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <ul>
                                            <li><a href={data.services[3].link}>{data.services[3].name}</a></li>
                                        </ul>
                                    </Panel.Body>
                                </Panel>
                            </PanelGroup>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>