import React from "react";
import { Grid, Row, Col, Image, Button, Panel, PanelGroup } from "react-bootstrap";
import { Gmaps, Marker } from 'react-gmaps';

import location from '../../assets/images/location.png';

const mapOptions = {
    lat: 41.51,
    lng: -87.96,
    zoom: 11
}

export default ({ data }) =>
    <div className="service-area-component">
        <section className="banner-section">
            <div className="caption">
                <h1>Service Areas</h1>
                <h3>Provides You Pool Decoration And Service</h3>
            </div>
        </section>
        <section className="details-section">
            <Grid fluid={true}>
                <Row className="service-area-detail">
                    <Col md={12} sm={12} xs={12}  >
                        <h1>SERVICE AREAS</h1>
                        <p>{data.content}</p>
                        <Button className="btn btn-default"><Image src={location} alt /> Use current location</Button>
                        <div className="location-service">
                            <h3>CHOOSE YOUR LOCATION FOR SERVICE</h3>
                            <Row >
                                <Col md={6} sm={6} xs={12} className="col-left">
                                    <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="1">
                                        <Panel eventKey="1">
                                            <Panel.Heading>
                                                <Panel.Title toggle><i className="fa fa-map-marker" aria-hidden="true"></i> Western United States (PST)</Panel.Title>
                                            </Panel.Heading>
                                            <Panel.Body collapsible><ul>
                                                <li>California</li>
                                                <li>Nevada</li>
                                                <li>Oregon</li>
                                                <li>Washington</li>
                                            </ul>
                                            </Panel.Body>
                                        </Panel>
                                        <Panel eventKey="2">
                                            <Panel.Heading>
                                                <Panel.Title toggle><i className="fa fa-map-marker" aria-hidden="true"></i> Mountain States (MST)</Panel.Title>
                                            </Panel.Heading>
                                            <Panel.Body collapsible>Panel content 2</Panel.Body>
                                        </Panel>
                                    </PanelGroup>
                                </Col>
                                <Col md={6} sm={6} xs={12} className="col-right" >
                                    <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
                                        <Panel eventKey="3">
                                            <Panel.Heading>
                                                <Panel.Title toggle><i className="fa fa-map-marker" aria-hidden="true"></i> Central States (CST) </Panel.Title>
                                            </Panel.Heading>
                                            <Panel.Body collapsible>Panel content 1</Panel.Body>
                                        </Panel>
                                        <Panel eventKey="4">
                                            <Panel.Heading>
                                                <Panel.Title toggle><i className="fa fa-map-marker" aria-hidden="true"></i> Eastern United States (EST)</Panel.Title>
                                            </Panel.Heading>
                                            <Panel.Body collapsible>Panel content 2</Panel.Body>
                                        </Panel>
                                    </PanelGroup></Col>
                            </Row>
                            <Gmaps
                                width={'100%'}
                                height={'420px'}
                                lat={mapOptions.lat}
                                lng={mapOptions.lng}
                                zoom={mapOptions.zoom}
                                loadingMessage={'Find us at'}
                                params={{ key: "AIzaSyDLuOy5-v-gsOgWbpdIylv4RJD2V7q4Pjo" }}
                                onMapCreated={this.onMapCreated}>
                                <Marker
                                    lat={mapOptions.lat}
                                    lng={mapOptions.lng}
                                    draggable={true}
                                />
                            </Gmaps>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>