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

import {
    Grid,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';


// Components :
    import Layout from '../../components/Layout';
    import Newsletter from '../../components/Newsletter';
    import { IoMdPin } from 'react-icons/io';
    import { FaRegClock } from 'react-icons/fa';


// Images & styiling :
    import JOB from '../../assets/images/Recrutement/job.png';
    import './recrutement.css';

    const age = 19;
    const handleChange = () => {

    };
    const classes = {

    }

export default class Recrutement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            choix : 2,
        };
    }
    
    render() {
        return (
            <>    
                <div className="bg-overlay justify-elements">
                    <div className="row text-center">
                        <Col/>

                        <Col>
                            <h1 style={{fontFamily : 'Poppins SemiBold'}}>Browse career resources</h1>
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
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{marginTop : 30+"px", marginBottom : 30+"px"}}
            >
                <div>
                    <h5 style={{fontFamily : 'Poppins Light'}}>9 JOBS FOUND</h5>
                </div>

                <div>

                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center" 
                    >
                        <div>
                            <p style={{fontFamily : 'Poppins Light'}}>Sort By</p>
                        </div>

                        <div>
                            <FormControl variant="outlined" style={{width : 200+"px",marginLeft : 20+"px",marginTop : -14+"px"}}>
                                <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
                                <Select
                                    native
                                    value={2}
                                    onChange={(choix) => this.setState({choix : choix})}
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={1}>Last month</option>
                                    <option value={2}>Last two months</option>
                                    <option value={3}>Last tree months</option>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                </div>
            </Grid>
            <hr style={{marginTop : -20+"px", borderColor : '#666666'}} />
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
                                <Col md={5}>
                                    <p className="TimePartJob">FULL TIME</p>
                                </Col>

                                <Col/>

                                <Col md={5}>
                                    <p className="TimePartJobDate">
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
                                <Col md={5}>
                                    <p className="TimePartJob">FULL TIME</p>
                                </Col>

                                <Col/>

                                <Col md={5}>
                                    <p className="TimePartJobDate">
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
                                <Col md={5}>
                                    <p className="TimePartJob">FULL TIME</p>
                                </Col>

                                <Col/>

                                <Col md={5}>
                                    <p className="TimePartJobDate">
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
