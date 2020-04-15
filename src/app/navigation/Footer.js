import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
    Nav
} from 'react-bootstrap';

import {
    Link
  } from "react-router-dom";
// Images : 
    import LOGO from '../../assets/images/Footer/Logo.png';
    import fb from '../../assets/images/Footer/fb.png';
    import twitter from '../../assets/images/Footer/twit.png';
    import linkedIn from '../../assets/images/Footer/lin.png';
    import youtube from '../../assets/images/Footer/ytb.png';

export default class Footer extends Component {
    render() {
        return (
            <>
            <span className="d-block p-1 bg-primary text-white"></span>
            <Container style={{backgroundColor : '#313131'}} fluid>

                <Row>
                    <Col />

                    <Col style={{textAlign : 'center'}} xs={10}>
                        <Row style={{marginTop : 20+"px"}}>
                            <Col>
                                <Link>
                                    <Image src={LOGO} width={220}  />
                                </Link>

                                <Row style={{marginTop : 10+"px", marginBottom : 20+"px"}}>
                                    <Col>
                                        <Link to="/">
                                            <Image src={fb} width={35} />
                                        </Link>
                                    </Col>
                                    
                                    <Col>
                                        <Link>
                                            <Image src={twitter} width={35} style={{marginTop : 4+"px"}}/>
                                        </Link>
                                    </Col>
                                    
                                    <Col>
                                        <Link>
                                            <Image src={linkedIn} width={35} />
                                        </Link>
                                    </Col>
                                    
                                    <Col>
                                        <Link>
                                            <Image src={youtube} width={35} style={{marginTop : 4+"px"}}/>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <div style={{marginTop : 30+"px"}}>
                                    <h2 style={styles.footerTitle}> ACCÈS RAPIDES </h2>

                                    <Nav style={{textAlign : 'left',marginLeft : 30+"px"}} className="flex-column">
                                        <Link to="#" style={styles.link}>Conditions d’utilisation</Link>
                                        <Link to="#" style={styles.link}>Confidentialité de l’information</Link>
                                        <Link to="#" style={styles.link}>Contactez-nous</Link>
                                        <Link to="#" style={styles.link}>Plan de site</Link>
                                        <Link to="#" style={styles.link}>FAQ</Link>
                                    </Nav>
                                </div>
                            </Col>

                            <Col>
                                <div style={{marginTop : 30+"px"}}>
                                    <h2 style={styles.footerTitle}> SITEMAP </h2>

                                    <Nav style={{textAlign : 'left',marginLeft : 30+"px"}} className="flex-column">
                                        <Link to="#" style={styles.link}>Présentation</Link>
                                        <Link to="#" style={styles.link}>Nos activités</Link>
                                        <Link to="#" style={styles.link}>Actualités</Link>
                                        <Link to="#" style={styles.link}>Evénements</Link>
                                        <Link to="#" style={styles.link}>Documentations</Link>
                                    </Nav>
                                </div>
                            </Col>

                            <Col>
                                <div style={{marginTop : 30+"px"}}>
                                    <h2 style={styles.footerTitle}> LIENS UTILES </h2>

                                    <Nav style={{textAlign : 'left',marginLeft : 30+"px"}} className="flex-column">
                                        <Link to="#" style={styles.link}>Programmes d’Investissements Prioritaires (PIP)</Link>
                                        <Link to="#" style={styles.link}>Stratégie de défense et de sécurité (SDS)</Link>
                                    </Nav>
                                </div>
                            </Col>
                            
                        </Row>
                        
                    </Col>
                    
                    <Col />
                </Row>

                <Row>
                    <Col />
                    <Col style={{textAlign : 'center'}} xs={11}>
                        <hr style={{borderWidth : 1+"px", borderColor : '#BCBCBC'}} />
                        <h4 style={styles.footerSign}>G5 Sahel 2020. © Tous droits réservés</h4>
                    </Col>
                    <Col />
                </Row>
            
            </Container>
        </>
        )
    }
}

const styles = {
    activityTitle : {
        color : '#0099CC',
        fontSize : 17,
        fontFamily : 'PopiBold',
        marginTop : 10+"px",
    },
    footerTitle : {
        color : '#BCBCBC',
        fontFamily : 'PopiBold',
        fontSize : 20,
        textAlign : 'left',
    },
    link : {
        color : '#BCBCBC',
        fontFamily : 'PopiMed',
        fontSize : 13,
        marginTop : 6+"px", 
        marginBottom : 6+"px",
    },
    footerSign : {
        fontFamily : 'PopiSemiBold',
        fontSize : 15,
        color : '#BCBCBC',
    }
};
