import React, { Component } from 'react'

import {
    Container,
    Col,
    Row,
    Image,
    Button,
    Jumbotron,
    Form
} from 'react-bootstrap';
import {Link} from 'react-router-dom';


// Components :
    import Layout from '../../components/Layout';
    import Newsletter from '../../components/Newsletter';
    import { IoMdPin } from 'react-icons/io';
    import { FaRegClock } from 'react-icons/fa';


// Images & styiling :
    import JOB from '../../assets/images/Recrutement/job.png';
    import './recrutement.css';

export default class Recrutement extends Component {
    render() {
        return (
            <>    
                <div className="bg-overlay justify-elements">
                    <div className="row text-center">
                        <Col/>

                        <Col>
                            <h1 style={{fontFamily : 'PopiSemiBold'}}>Browse career resources</h1>
                        </Col>

                        <Col/>
                    </div>
                </div>

                <Layout columns={9}>
                    {this.renderSearchContainer()}

                    {this.renderSortBar()}
                </Layout>


                <Layout>
                    {this.renderJobs()}
                    {this.renderJobs()}
                    {this.renderJobs()}

                    <div style={{marginTop : 50+"px",marginBottom : 50+"px"}}>
                        <Newsletter />
                    </div>
                </Layout>


                

            </>
        )
    }

    renderSearchContainer = () => {

        return (
            <>
            <div>
                <Row style={{padding : 25+"px",backgroundColor : '#F6F6F6',marginTop : -20+"px"}}>
                    
                    <Col style={{marginTop : 15+"px"}}>
                        <input type="text" className="form-control no-border" placeholder="Jobs Titles, keywords…" />
                    </Col>
                    
                    <Col style={{marginTop : 15+"px"}}>
                        <input type="text" className="form-control no-border" placeholder="City, State or ZIP" />
                    </Col>

                    <Col style={{marginTop : 15+"px"}}>
                        <Form.Group as={Col}>
                            <Form.Control className="no-border" as="select" value="...">
                                <option>Select Sector...</option>
                                <option>Sector 1</option>
                                <option>Sector 2</option>
                                <option>Sector 3</option>
                                <option>Sector 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Button className="button" style={{marginTop : 4+"px",marginLeft : 20+"px"}}>Find Job</Button>
                    </Col>
                </Row>
            </div>
            </>
        );
    };

    renderSortBar = () => {

        return (
            <>
            <div className="d-flex justify-content-between bd-highlight mb-3">
                <div className="p-2 bd-highlight">2269 Jobs found</div>
               
                <div className="p-2 bd-highlight">
                    <Row>
                        <Col>
                            <p>Sort By</p> 
                        </Col>

                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
            </div>
            <hr />

            </>
        );
    };

    renderJobs = () => {

        return (
            <Row>
                <Col>
                    <Jumbotron  className="box justify-elements">
                            <h4 className="boxTitle">ASSISTANT AU COORDONNATEUR REGIONAL </h4>
                            <p className="boxDesc">
                              <IoMdPin size={30} /> &nbsp;nouakchott mauritanie
                            </p>
                            <p className="boxDesc">
                               <FaRegClock size={25} /> &nbsp; Published 11 months ago
                            </p>
                            <Row>
                                <Col>
                                    <p>FULL TIME</p>
                                </Col>

                                <Col>
                                    <p>
                                        12 Sep - 12 Oct
                                    </p>
                                </Col>


                            </Row>
                    </Jumbotron>
                </Col>

                <Col>
                    <Jumbotron  className="box justify-elements">
                            <h4 className="boxTitle">ASSISTANT AU COORDONNATEUR REGIONAL </h4>
                            <p className="boxDesc">
                              <IoMdPin size={30} /> &nbsp;nouakchott mauritanie
                            </p>
                            <p className="boxDesc">
                               <FaRegClock size={25} /> &nbsp; Published 11 months ago
                            </p>
                            <Row>
                                <Col>
                                    <p>FULL TIME</p>
                                </Col>

                                <Col>
                                    <p>
                                        12 Sep - 12 Oct
                                    </p>
                                </Col>


                            </Row>
                    </Jumbotron>
                    
                </Col>


                <Col>
                 <Jumbotron  className="box justify-elements">
                            <h4 className="boxTitle">ASSISTANT AU COORDONNATEUR REGIONAL </h4>
                            <p className="boxDesc">
                              <IoMdPin size={30} /> &nbsp;nouakchott mauritanie
                            </p>
                            <p className="boxDesc">
                               <FaRegClock size={25} /> &nbsp; Published 11 months ago
                            </p>
                            <Row>
                                <Col>
                                    <p>FULL TIME</p>
                                </Col>

                                <Col>
                                    <p>
                                        12 Sep - 12 Oct
                                    </p>
                                </Col>


                            </Row>
                    </Jumbotron>
                </Col>
            </Row>
        );
    };
}

const styles = {
    searchTitle : {
        color : '#666666',
        
    },
}
