import React, { Component } from 'react'
import './Footer.css';

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

import {
    Grid
} from '@material-ui/core';

import axios from 'axios';
import {config, SDS, PIP} from '../../constants/AppConfig';

// Images : 
    import LOGO from '../../assets/images/Footer/Logo.png';
    import fb from '../../assets/images/Footer/fb.png';
    import twitter from '../../assets/images/Footer/twit.png';
    import linkedIn from '../../assets/images/Footer/lin.png';
    import youtube from '../../assets/images/Footer/ytb.png';

    /*
     * 
     * 
     *  onClick={() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}
     * 
     * 
     * 
     */

export default class Footer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sds: [],
            pip: [],
        }

        this.getDynamicLinks();
    }

    render() {

        return (
            <>
            <span className="d-block p-1 text-white" style={{backgroundColor : '#0099CC'}}></span>
            <Container style={{backgroundColor : '#313131'}} fluid>

                <Row>
                    <Col md={3} lg={1} xl={1}/>

                    <Col xs={10} md={6} lg={10} xl={10} style={{textAlign : 'center'}} >
                        <Row style={{marginTop : 20+"px"}}>
                            
                            <Col md={12} lg={3} xl={3}>
                                <Link to="/">
                                    <Image src={LOGO} width={180} alt={"Logo G5 Sahel"} style={{marginTop : 20+"px"}}  />
                                </Link>

                                <Grid
                                    container
                                    direction="row"
                                    // justify="space-around"
                                    justify="space-evenly"
                                    alignItems="center"
                                    style={{marginTop : 10+"px", marginBottom : 20+"px"}}
                                >

                                    <div>
                                        <a href="https://www.facebook.com/g5sahel" target="_blank">
                                            <Image src={fb} width={35} />
                                        </a>
                                    </div>
                                   
                                    <div>
                                        <a href="https://twitter.com/g5_sahel_se" target="_blank">
                                            <Image src={twitter} width={35} style={{marginTop : 4+"px"}}/>
                                        </a>
                                    </div>
                                   
                                    <div>
                                        <a href="https://www.linkedin.com/in/g5-sahel-00187a188/" target="_blank">
                                            <Image src={linkedIn} width={35} />
                                        </a>
                                    </div>
                                   
                                    <div>
                                        <a href="https://www.youtube.com/channel/UC3CqmhBt9mTvd6Lx3bf3OMg/featured" target="_blank">
                                            <Image src={youtube} width={35} style={{marginTop : 4+"px"}}/>
                                        </a>
                                    </div>
                                </Grid>
                            </Col>

                            <Col md={12} lg={3} xl={3}>
                                <div style={{marginTop : 30+"px"}}>
                                    <h2 className="footerTitle"> ACCÈS RAPIDES </h2>

                                    <Nav style={{textAlign : 'left',marginLeft : 30+"px"}} className="flex-column">
                                        <Link to="/cgu" className="links">Conditions d’utilisation</Link>
                                        <Link to="#" className="links">Confidentialité de l’information</Link>
                                        <Link  to="/contact-g5" className="links">Contactez-nous</Link>
                                        <Link to="#" className="links">Plan du site</Link>
                                        <Link to="#" className="links">FAQ</Link>
                                    </Nav>
                                </div>
                            </Col>

                            <Col md={12} lg={3} xl={3}>
                                <div style={{marginTop : 30+"px"}}>
                                    <h2 className="footerTitle">PLAN DU SITE</h2>

                                    <Nav style={{textAlign : 'left',marginLeft : 30+"px"}} className="flex-column">
                                        <a href="/presentation" className="links">Présentation</a>
                                        <a href="/nos-activites" className="links">Nos activités</a>
                                        <a href="/actualites" className="links">Actualités</a>
                                        <a href="/events" className="links">Evénements</a>
                                        <a href="/documentations/last-4" className="links">Documentation</a>
                                    </Nav>
                                </div>
                            </Col>

                            <Col md={12} lg={3} xl={3}>
                                <div style={{marginTop : 30+"px"}}>
                                    {this.state.pip[0] && this.state.sds[0] &&
                                        <h2 className="footerTitle"> LIENS UTILES </h2>
                                    }

                                    <Nav style={{textAlign : 'left',marginLeft : 30+"px"}} className="flex-column">
                                        {/* <a href="/article/programme-dinvestissements-prioritaires-pip-g5-sahel" className="links">Programmes d’Investissements Prioritaires (PIP)</a> */}
                                        {this.state.pip[0] &&
                                            <a 
                                                className="links"
                                                href={
                                                    this.state.pip[0].fpdf_url !== false 
                                                    ?
                                                    `${this.state.pip[0].fpdf_url}`
                                                    :
                                                    '/article/programme-dinvestissements-prioritaires-pip-g5-sahel'
                                                }
                                            >
                                               {this.state.pip[0].fcategory[0].category_name}
                                            </a>
                                        }

                                        {/* <a href="/article/strategie-de-defense-et-de-securite-sds" className="links">Stratégie de défense et de sécurité (SDS)</a> */}
                                        {this.state.sds[0] &&
                                            <a 
                                                className="links"
                                                href={
                                                    this.state.sds[0].fpdf_url !== false 
                                                    ?
                                                    `${this.state.sds[0].fpdf_url}`
                                                    :
                                                    '/article/strategie-de-defense-et-de-securite-sds'
                                                }
                                            >
                                               {this.state.sds[0].fcategory[0].category_name}
                                            </a>
                                        }
                                    </Nav>
                                </div>
                            </Col>
                            
                        </Row>
                        
                    </Col>
                    
                    <Col md={3} lg={1} xl={1} />
                </Row>

                <Row>
                    <Col />
                    <Col style={{textAlign : 'center'}} xs={11}>
                        <hr style={{borderWidth : 1+"px", borderColor : '#BCBCBC'}} />
                        <h4 style={styles.footerSign}>Secrétariat exécutif du G5 Sahel 2020 © Tous droits réservés</h4>
                    </Col>
                    <Col />
                </Row>
            
            </Container>
        </>
        )
    };


    getDynamicLinks = async () => {

        axios.get(`${config.url}wp/v2/posts?categories=${PIP}&per_page=1`)
        .then(async response => {
            // console.log("Rep PIP", response.data)

            await this.setState({
                pip: response.data
            });
        })
        .catch(error => {
          // console.log("erreur axios getActualitesPaysG5/ActualitesActions",error);
        });  
        
        axios.get(`${config.url}wp/v2/posts?categories=${SDS}&per_page=1`)
        .then(async response => {
            // console.log("Rep SDS", response.data)

            await this.setState({
                sds: response.data
            });
        })
        .catch(error => {
          // console.log("erreur axios getActualitesPaysG5/ActualitesActions",error);
        });

         
    };
}

const styles = {
    footerTitle : {
        color : '#BCBCBC',
        fontFamily : 'Poppins SemiBold',
        fontSize : 20,
        textAlign : 'left',
    },
    link : {
        color : '#BCBCBC',
        fontFamily : 'Poppins Medium',
        fontSize : 13,
        marginTop : 6+"px", 
        marginBottom : 6+"px",
    },
    footerSign : {
        fontFamily : 'Poppins SemiBold',
        fontSize : 15,
        color : '#BCBCBC',
    }
};
