import React, { Component } from 'react'
import {
   Container,
   Row,
   Col,
} from 'react-bootstrap';

import { Link } from "react-router-dom";

// IMAGES & STYLING :
import './Header.css';
import LOGO from '../../assets/images/Header/logo.png';
import ARROW from '../../assets/images/Header/downArrow.png';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <Container fluid>
                <Row > 
                    <Col />
                    <Col />
                    <Col>
                        <Link style={styles.TopBarLinks} to="/"> Appel d'offre </Link>
                        <Link style={styles.TopBarLinks} to="/"> Recrutement </Link>
                        <Link style={styles.TopBarLinks} to="/"> Contact </Link>
                    </Col>
                </Row>
                <hr style={{marginBottom : -5 + "px",borderColor : '##BCBCBC'}} />
                <Row>
                    <Col />
                    <Col sm={10} lg={10}>
                        <nav className="navbar">
                            <Col md={4}>
                            <a className="navbar-brand" href="#">
                                <img
                                src={LOGO}
                                // width={200}
                                height={65}
                                className="d-inline-block align-top"
                                
                                />                            
                            </a>
                            </Col>

                            <Col md={8}>
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/"> Présentation <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/"> Présentation </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Présentation </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Présentation </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/"> Nos Activités <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/"> Nos Activités </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Nos Activités </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Nos Activités </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/"> Actualités <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/"> Actualités </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Actualités </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Actualités </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/"> Evenements <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/"> Evenements </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Evenements </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Evenements </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/"> Documentation <img src={ARROW} height={7} /> </Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/"> Documentation </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Documentation </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> Documentation </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                    
                            </Col>
                        </nav>
                    </Col>
                </Row>
                <hr style={{marginTop : -5 + "px", borderColor : '##BCBCBC', marginBottom : 50 + "px"}} />
            </Container>
        )
    }
}

const styles = {
    TopBarLinks : {
        color : 'black', 
        fontSize : 13, 
        fontFamily : 'Roboto',
        marginRight : 20,
    },
    MainMenuLinks : {
        backgroundColor : 'transparent',
        borderWidth : 0,
        fontSize : 14, 
        fontFamily : 'PopiExtraLight',
        color : 'black', 
        marginRight : 20,
    },

}
