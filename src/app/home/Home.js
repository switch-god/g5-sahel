import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { Player, BigPlayButton} from 'video-react';

/* COMPONENTS */
import ImagesBloc from './components/ImagesBloc';
import News from './components/News';
import Events from './components/Events';
import NosActivites from './components/NosActivites';
import Newsletter from './components/Newsletter';
/* ./COMPONENTS */



export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <ImagesBloc />


                {/* NEW & EVENTS */}
                <Row style={{marginTop : 50 + "px", marginBottom : 50+"px"}}>
                    <Col />

                    <Col xs={10}>
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
                {/* NEW & EVENTS */}

                <Row>
                    <Col />
                    
                    <Col xs={10}>
                        <NosActivites />  
                        <Newsletter />

                        {/* VIDEO */}
                            <Row>
                                <Col />

                                <Col style={{textAlign : 'center'}} xs={8}>
                                    <p style={styles.activityTitle}>G5 Sahel pour une prospérité partagée</p>
                                    <hr style={{ borderColor : '#DEDEDE', marginTop : 13+"px",width : '80%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />
                                    <Player playsInline src="https://www.youtube.com/watch?v=f11pRhSVQ6U">
                                        <BigPlayButton position="center" />
                                    </Player>
                                </Col>
                                
                                <Col  />

                            </Row>
                        {/* VIDEO */}

                    </Col>
                   
                    <Col />
                </Row>


            </Container>


        )
    }
}

const styles = {
    activityTitle : {
        color : '#0099CC',
        fontSize : 20,
        fontFamily : 'PopiBold',
        marginTop : 10+"px",
    },
};