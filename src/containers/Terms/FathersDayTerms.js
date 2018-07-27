import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

export default ({ data }) =>
    <div className="terms-component">
        <section className="fathersday-banner-section ">
            <div className="caption">
                <h1>Terms of Service</h1>
                <h3>The use of this website is subject to the following terms of use</h3>
            </div>
        </section>
        <section className="terms-section">
            <Grid fluid={true}>
                <Row className="terms-detail">
                    <Col md={12} sm={12} xs={12}  >
                        <h1> {data.title}</h1>
                        <div className="terms-conditions">
                            <h3>Terms & Conditions</h3>
                            <h4>{data.desc}</h4>
                            <h4>The use of this website is subject to the following terms of use:</h4>
                            <div className="terms-child">
                                <h3>1. {data.terms[0].title}</h3>
                                <p> {data.terms[0].content} </p>
                                <h3>2. {data.terms[1].title}</h3>
                                <ul>
                                    <li><span>{data.terms[1].content[0]}</span></li>
                                    <li><span>{data.terms[1].content[1]}</span></li>
                                    <li><span>{data.terms[1].content[2]}</span></li>
                                    <li><span>{data.terms[1].content[3]}</span></li>
                                </ul>
                                <h3>3. {data.terms[2].title}</h3>
                                <ul>
                                    <li><span>{data.terms[2].content[0]}</span></li>
                                    <li><span>{data.terms[2].content[1]}</span></li>
                                    <li><span>{data.terms[2].content[2]}</span></li>
                                    <li><span>{data.terms[2].content[3]}</span></li>
                                </ul>
                                <h3>4. {data.terms[3].title}</h3>
                                <ul>
                                    <li><span>{data.terms[3].content[0]}</span></li>
                                    <li><span>{data.terms[3].content[1]}</span></li>
                                </ul>
                                <h3>5. {data.terms[4].title}</h3>
                                <p> {data.terms[4].content} </p>
                                <h3>6. {data.terms[5].title}</h3>
                                <p> {data.terms[5].content} </p>
                                <h3>7. {data.terms[6].title}</h3>
                                <ul>
                                    <li><span>{data.terms[6].content[0]}</span></li>
                                    <li><span>{data.terms[6].content[1]}</span></li>
                                    <li><span>{data.terms[6].content[2]}</span></li>
                                    <li><span>{data.terms[6].content[3]}</span></li>
                                </ul>
                                <h3>1. {data.terms[7].title}</h3>
                                <p> {data.terms[7].content} </p>
                                <h3>9. {data.terms[8].title}</h3>
                                <ul>
                                    <li><span>{data.terms[8].content[0]}</span></li>
                                    <li><span>{data.terms[8].content[1]}</span></li>
                                    <li><span>{data.terms[8].content[2]}</span></li>
                                    <li><span>{data.terms[8].content[3]}</span></li>
                                </ul>
                                <h3>10. {data.terms[9].title}</h3>
                                <ul>
                                    <li><span>{data.terms[9].content[0]}</span></li>
                                    <li><span>{data.terms[9].content[1]}</span></li>
                                    <li><span>{data.terms[9].content[2]}</span></li>
                                    <li><span>{data.terms[9].content[3]}</span></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>