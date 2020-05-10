import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
} from 'react-bootstrap';

import { IoIosPin } from "react-icons/io";
import { MdPhone  } from "react-icons/md";
import {FaEnvelope} from 'react-icons/fa';

import MapImg from '../assets/images/Presentation/map.png';

export default class Map extends Component {
    render() {
        return (
            <>
                <Row>
                    {/* <Image src={MapImg} style={{padding : 50+"px"}} fluid/> */}
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width={'90%'} height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Route%20des%20Ambassades%20%E2%80%93%20Nouakchott%20-%20Mauritanie&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </Row>

                <Row className="mapInfosContainer">
                    <Col xs={12}  md={12} xl={4}>
                        <center>
                            <IoIosPin size={40+"px"} color={"#0099CC"} style={{marginBottom : 10+"px"}} />
                            <p style={{fontSize : 14+"px",fontFamily : 'Poppins SemiBold'}}>
                                Ilot A 742 Bis 
                                – Route des Ambassades –
                                Nouakchott - Mauritanie
                            </p>
                        </center>
                    </Col>

                    <Col xs={12} md={12} xl={4}>
                        <center>
                            <MdPhone size={40+"px"} color={"#0099CC"} style={{marginBottom : 10+"px"}} />
                            <p style={{fontSize : 14+"px",fontFamily : 'Poppins SemiBold'}}>
                                +222 45 25 77 30
                            </p>
                        </center>
                    </Col>

                    <Col xs={12} md={12} xl={4}>
                        <center>
                            <FaEnvelope size={40+"px"} color={"#0099CC"} style={{marginBottom : 10+"px"}} />
                            <p style={{fontSize : 14+"px",fontFamily : 'Poppins SemiBold'}}>
                                contact@g5sahel.org
                            </p>
                        </center>
                    </Col>
                      
                </Row>

            </>
        )
    }
}
