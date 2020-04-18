import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { Player, BigPlayButton} from 'video-react';

/* COMPONENTS */

import HomeImagesBloc from '../../components/HomeImagesBloc';
import HomeNews from '../../components/HomeNews';
import HomeEvents from '../../components/HomeEvents';
import HomeNosActivites from '../../components/HomeNosActivites';
import Newsletter from '../../components/Newsletter';

/* ./COMPONENTS */



export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <HomeImagesBloc />


                {/* NEW & EVENTS */}
                <Row style={{marginTop : 50 + "px", marginBottom : 50+"px"}}>
                    <Col />

                    <Col md={10}>
                        <Row>
                            <Col md={6}>
                                <HomeNews />
                            </Col>
                            
                            <Col md={6}>
                                <HomeEvents />
                            </Col>
                        </Row>
                    </Col>
            
                    <Col />
                </Row>
                {/* NEW & EVENTS */}

                <Row>
                    <Col />
                    
                    <Col md={10}>
                        <HomeNosActivites />  
                        <Newsletter />

                        {/* VIDEO */}
                            <Row style={{marginBottom : 50+"px"}}>
                                <Col />

                                <Col style={{textAlign : 'center'}} md={8}>
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