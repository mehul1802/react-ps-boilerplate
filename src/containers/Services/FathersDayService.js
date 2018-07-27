import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Button, Image } from "react-bootstrap";

import commercial from '../../assets/images/commercial.png';
import decoration from '../../assets/images/decoration.png';
import residential from '../../assets/images/residential.png';
import termheadline from '../../assets/images/term-head-line.png';

export default ({ data }) =>
    <div className="services-component">
        <section className="fathersday-banner-section ">
            <div className="caption">
                <h1>SERVICES</h1>
                <h3>We pride ourselves in offering friendly, reliable and exceptional pool services.</h3>
            </div>
        </section>
        <section className="services">
            <Grid fluid={true}>
                <Row className="services-type">
                    <Col md={4} sm={4} xs={12}>
                        <div className="services-col">
                            <ul>
                                <li><Image src={commercial} alt="" /></li>
                                <li>
                                    <h3>{data.services[0].name}</h3>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} sm={4} xs={12}>
                        <div className="services-col">
                            <ul>
                                <li><Image src={decoration} alt="" /></li>
                                <li>
                                    <h3>{data.services[1].name}</h3>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} sm={4} xs={12}>
                        <div className="services-col">
                            <ul>
                                <li><Image src={residential} alt="" /></li>
                                <li>
                                    <h3>{data.services[2].name}</h3>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Grid>
            <Grid fluid={true}>
                <Row className="services">
                    <Col md={3} className="col-left">
                        <div className="services-list">
                            <div className="services-list-title">
                                {data.service.title}
                            </div>
                            <ul className="sub-services">
                                <li className="service-name"> <a href={data.service.subServices[0].link}>{data.service.subServices[0].name}</a></li>
                                <li className="service-name"> <a href={data.service.subServices[1].link}>{data.service.subServices[1].name}</a> </li>
                                <li className="service-name"> <a href={data.service.subServices[2].link}>{data.service.subServices[2].name}</a> </li>
                                <li className="service-name"> <a href={data.service.subServices[3].link}>{data.service.subServices[3].name}</a> </li>
                                <li className="service-name"> <a href={data.service.subServices[4].link}>{data.service.subServices[4].name}</a></li>
                                <li className="service-name"> <a href={data.service.subServices[5].link}>{data.service.subServices[5].name}</a></li>
                                <li className="service-name"> <a href={data.service.subServices[6].link}>{data.service.subServices[6].name}</a></li>
                                <li className="service-name"> <a href={data.service.subServices[7].link}>{data.service.subServices[7].name}</a></li>
                                <li className="service-name"> <a href={data.service.subServices[8].link}>{data.service.subServices[8].name}</a></li>
                                <li className="service-name"> <a href={data.service.subServices[9].link}>{data.service.subServices[9].name}</a></li>
                            </ul>
                        </div>
                        <div className="work-hours">
                            <h2> WORKING TIME</h2>
                            <div>
                                <div>
                                    <h4 className="timings">OFFICE WORK TIME</h4>
                                    <p>{data.service.workingTime.officeTime[0].timings}</p>
                                    <p>{data.service.workingTime.officeTime[1].timings}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4 className="address">OUR ADDRESS</h4>
                                    <p>{data.service.workingTime.address}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4 className="contact">CALL US</h4>
                                    <p>{data.service.workingTime.contact}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={9} className="col-right">
                        <div className="service-img"></div>
                        <div className="service-detail">
                            <h1>{data.service.title}</h1>
                            <div className="text-center">
                            <Image src={termheadline} alt="" />
                            </div >
                            <div className="service-content">
                                <p>
                                    {data.service.content.paragraph1}
                                </p>
                                <p>
                                    {data.service.content.paragraph2}
                                </p>
                                <p>
                                    {data.service.content.paragraph3}
                                </p>
                                <ul className="sub-services">
                                    <li className="service-name"> <a href={data.service.content.technologies[0].link}>{data.service.content.technologies[0].name}</a></li>
                                    <li className="service-name"> <a href={data.service.content.technologies[1].link}>{data.service.content.technologies[1].name}</a> </li>
                                    <li className="service-name"> <a href={data.service.content.technologies[2].link}>{data.service.content.technologies[2].name}</a> </li>
                                    <li className="service-name"> <a href={data.service.content.technologies[3].link}>{data.service.content.technologies[3].name}</a> </li>
                                    <li className="service-name"> <a href={data.service.content.technologies[4].link}>{data.service.content.technologies[4].name}</a></li>
                                </ul>
                                <p>
                                {data.service.content.paragraph4}
                                </p>
                                <h2>{data.service.content.subTitle}</h2>
                                <p>{data.service.content.paragraph5}</p>
                                <ul className="sub-services">
                                    <li className="service-name"> <a href={data.service.content.clients[0].link}>{data.service.content.clients[0].name}</a></li>
                                    <li className="service-name"> <a href={data.service.content.clients[1].link}>{data.service.content.clients[1].name}</a> </li>
                                    <li className="service-name"> <a href={data.service.content.clients[2].link}>{data.service.content.clients[2].name}</a> </li>
                                    <li className="service-name"> <a href={data.service.content.clients[3].link}>{data.service.content.clients[3].name}</a> </li>
                                    <li className="service-name"> <a href={data.service.content.clients[4].link}>{data.service.content.clients[4].name}</a></li>
                                    <li className="service-name"> <a href={data.service.content.clients[5].link}>{data.service.content.clients[5].name}</a></li>                                    
                                </ul>
                                <p>
                                    {data.service.content.paragraph6}
                                </p>
                                <Link to="#"><Button className="request-btn">{data.service.content.buttonLabel}</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>