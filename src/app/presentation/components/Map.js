import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
} from 'react-bootstrap';

import { IoIosPin } from "react-icons/io";
import { MdPhone  } from "react-icons/md";
import {FaEnvelope} from 'react-icons/fa';

import MapImg from '../../../assets/images/Presentation/map.png';

export default class Map extends Component {
    render() {
        return (
            <>
                <Row>
                    <Image src={MapImg} style={{padding : 50+"px"}} fluid/>
                </Row>

                <Row style={{textAlign : 'center'}}>
                
                    <Col>
                        <IoIosPin size={40+"px"} color={"#0099CC"} style={{marginBottom : 10+"px"}} />
                        <p style={{fontSize : 14+"px"}}>
                            Ilot A 742 Bis 
                            – Route des Ambassades –
                            Nouakchott - Mauritanie
                        </p>
                    </Col>
                    <Col>
                        <MdPhone size={40+"px"} color={"#0099CC"} style={{marginBottom : 10+"px"}} />
                        <p style={{fontSize : 14+"px"}}>
                            +222 45 25 77 30
                        </p>
                    </Col>

                    <Col>
                        <FaEnvelope size={40+"px"} color={"#0099CC"} style={{marginBottom : 10+"px"}} />
                        <p style={{fontSize : 14+"px"}}>
                            contact@g5sahel.org
                        </p>
                    </Col>
                      
                </Row>

            </>
        )
    }
}
