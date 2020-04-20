import React, { Component } from 'react'
import {
   Container,
   Row,
   Col,
} from 'react-bootstrap';

import { Link } from "react-router-dom";
import Layout from '../../components/Layout';

// IMAGES & STYLING :
import './Header.css';
import LOGO from '../../assets/images/Header/logo3.png';
// import LOGO2 from '../../assets/images/Header/logo2.png';
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
                    <Col />
                    <Col style={{marginRight : 50+"px"}} >
                        <Link style={styles.TopBarLinks} to="#"> Appel d'offre </Link>
                        <Link style={styles.TopBarLinks} to="/recrutement"> Recrutement </Link>
                        <Link style={styles.TopBarLinks} to="/contact-g5"> Contact </Link>
                    </Col>
                </Row>
                <hr style={{marginBottom : -5 + "px",borderColor : '##BCBCBC'}} />
                <Row>
                    <Col md={1}/>
                    <Col>
                        <nav className="navbar">

                            <Col className="mobileInvisible">
                                <Link className="navbar-brand" to="/">
                                    <img src={LOGO} height={80} className="d-inline-block align-top" />                            
                                </Link>
                            </Col>

                            {/* DESKTOP MENU */}
                            <Col className="mobileInvisible">
                                {this.renderMenuElements()}    
                            </Col>
                        </nav>
                    </Col>
                </Row>
                <hr style={{marginTop : -5 + "px", borderColor : '##BCBCBC', marginBottom : 50 + "px"}} />
            </Container>
        )
    }

    renderMenuElements = () => (
       <>   
       <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/presentation"> Présentation <img src={ARROW} height={7} /></Link>
            <div className="dropdown-content">
                {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Secrétariat Exécutif</Link>
                </Row>
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Communes Nationales De Coordination</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Structures Rattachées</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Organigramme</Link>
                </Row>
                {/* NESTED LINKS */}
            </div>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/nos-activites"> Nos Activités <img src={ARROW} height={7} /></Link>
            <div className="dropdown-content">
                {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Défense et sécurité</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Gouvernance</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Infrastructures</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Résilience et Développement humain</Link>
                </Row>
                {/* NESTED LINKS */}
            </div>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/actualites">Actualités</Link>
            {/* <div className="dropdown-content">
                <Link style={styles.MainMenuLinks} to="/"> Actualités </Link>
                <Link style={styles.MainMenuLinks} to="/"> Actualités </Link>
                <Link style={styles.MainMenuLinks} to="/"> Actualités </Link>
            </div> */}
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/events">Evenements</Link>
            {/* <div className="dropdown-content">
                <Link style={styles.MainMenuLinks} to="/"> Evenements </Link>
                <Link style={styles.MainMenuLinks} to="/"> Evenements </Link>
                <Link style={styles.MainMenuLinks} to="/"> Evenements </Link>
            </div> */}
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/documentation"> Documentation <img src={ARROW} height={7} /> </Link>
            <div className="dropdown-content">
                {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">Règlementation</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">Newsletter</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">SDS, PIP</Link>
                </Row>
                {/* NESTED LINKS */}                
            </div>
        </div>
       </>
    );
}

const styles = {
    TopBarLinks : {
        color : 'black', 
        fontSize : 13, 
        fontFamily : 'Poppins Light',
        marginRight : 20+"px",
    },
    MainMenuLinks : {
        backgroundColor : 'transparent',
        borderWidth : 0,
        fontSize : 14, 
        fontFamily : 'Poppins Light',
        fontWeight : '200',
        color : 'black', 
        marginRight : 20,
    },

}
