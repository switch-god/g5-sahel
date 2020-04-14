import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
 } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col />

                    <Col xs md="auto" lg={10} style={{backgroundColor : 'red'}}>
                        
                            <h1>SHHHE</h1>
                        
                    </Col>
                    
                    <Col />
                </Row>

            </Container>
        )
    }
}

const styles = {

};