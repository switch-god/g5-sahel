import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

/* COMPONENTS */
import ImagesBloc from './components/ImagesBloc';
import News from './components/News';
import Events from './components/Events';
/* ./COMPONENTS */



export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <ImagesBloc />


                <Row style={{marginTop : 50 + "px"}}>
                    <Col />

                    <Col xs md="auto" lg={10}>
                        <Row>
                            <Col lg={6}>
                                <News />
                            </Col>
                            
                            <Col lg={6}>
                                <Events />
                            </Col>
                        </Row>
                    </Col>
            
                    <Col />
                </Row>
            </Container>


        )
    }
}

const styles = {

};