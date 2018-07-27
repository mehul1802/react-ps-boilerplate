import React from "react";
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import { Gmaps, Marker } from 'react-gmaps';

const mapOptions = {
    lat: 41.51,
    lng: -87.96,
    zoom: 11
}

export default ({ data }) =>
    <div className="contact-component">
        <section className="map-section">
            <Gmaps
                width={'100%'}
                height={'575px'}
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
        </section>
        <section className="details-section">
            <Grid fluid={true}>
                <Row className="contact-details">

                    <Col md={6} sm={6} xs={12} className="col-left" >

                        <h1><div className="header-top"></div> Contact us</h1>
                        <h3>{data.message}</h3>
                        <div className="address">
                            <ul>
                                <li className="address"><h6>ADDRESS</h6>
                                    <span>{data.address}</span></li>
                                <li className="phone"><h6>PHONE</h6>
                                    <span>{data.phone}</span></li>
                                <li className="time"><h6>time</h6>
                                    <span>{data.time}</span></li>
                                <li className="mail"><h6>Mail</h6>
                                    <a href={`mailto: ${data.mail}`}>{data.mail}</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} sm={6} xs={12} className="col-right" >
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                                // validationState={this.getValidationState()}
                                className="quote-fields"
                            >
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    // value={this.state.value}
                                    placeholder="Name"
                                    className="form-field"
                                // onChange={this.handleChange}
                                />
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    type="email"
                                    // value={this.state.value}
                                    placeholder="Email"
                                    className="form-field"
                                // onChange={this.handleChange}
                                />
                                <ControlLabel>Subject</ControlLabel>
                                <FormControl
                                    type="text"
                                    // value={this.state.value}
                                    placeholder="Subject"
                                    className="form-field"
                                // onChange={this.handleChange}
                                />
                                <ControlLabel>Message</ControlLabel>
                                <FormControl
                                    type="text"
                                    // value={this.state.value}
                                    placeholder="Message"
                                    className="form-field"
                                // onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button type="reset">Reset</Button>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>