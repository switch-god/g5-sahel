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
import LOGO2 from '../../assets/images/Header/logo2.png';
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
                <Row> 
                    <Col />
                    <Col />
                    <Col >
                        <Link style={styles.TopBarLinks} to="/"> Appel d'offre </Link>
                        <Link style={styles.TopBarLinks} to="/"> Recrutement </Link>
                        <Link style={styles.TopBarLinks} to="/contact-g5"> Contact </Link>
                    </Col>
                </Row>
                <hr style={{marginBottom : -5 + "px",borderColor : '##BCBCBC'}} />
                <Row>
                    <Col />
                    <Col md={10}>
                        <nav className="navbar">

                            <Col className="mobileVisible" xs={12}>
                                <a className="navbar-brand" href="#">
                                    <img
                                        src={LOGO2}
                                        height={65}
                                        className="d-inline-block align-top"
                                    />                            
                                </a>
                            </Col>

                            <Col className="mobileInvisible" md={4}>
                                <a className="navbar-brand" href="#">
                                    <img src={LOGO} height={65} className="d-inline-block align-top"  />                            
                                </a>
                            </Col>

                            {/* MOBILE MENU */}
                            <Col className="mobileVisible" xs={12}>
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
                             {/* ./MOBILE MENU */}
                            
                            <Col className="mobileInvisible" md={8}>
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/presentation"> Présentation <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/presentation"> Présentation </Link>
                                        <Link style={styles.MainMenuLinks} to="/presentation"> Présentation </Link>
                                        <Link style={styles.MainMenuLinks} to="/presentation"> Présentation </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/"> Nos Activités <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/"> NosActivités </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> NosActivités </Link>
                                        <Link style={styles.MainMenuLinks} to="/"> NosActivités </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/actualites"> Actualités <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/actualites"> Actualités </Link>
                                        <Link style={styles.MainMenuLinks} to="/actualites"> Actualités </Link>
                                        <Link style={styles.MainMenuLinks} to="/actualites"> Actualités </Link>
                                        {/* NESTED LINKS */}
                                    </div>
                                </div>
                                
                                <div className="dropdown">
                                    <Link style={styles.MainMenuLinks} to="/events"> Evenements <img src={ARROW} height={7} /></Link>
                                    <div className="dropdown-content">
                                        {/* NESTED LINKS */}
                                        <Link style={styles.MainMenuLinks} to="/events"> Evenements </Link>
                                        <Link style={styles.MainMenuLinks} to="/events"> Evenements </Link>
                                        <Link style={styles.MainMenuLinks} to="/events"> Evenements </Link>
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
