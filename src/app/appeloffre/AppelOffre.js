/* eslint-disable import/first */
import React, { Component } from 'react'

import {
    Col,
    Row,
    Jumbotron,
    Nav,
    Image,
    Button,
} from 'react-bootstrap';

import ThumbDoc from '../../components/ThumbDoc';
import { IoIosEye } from 'react-icons/io';
// import { IoIosList,IoMdGrid } from 'react-icons/io';
import { AiOutlineDownload } from 'react-icons/ai';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { 
    config, 
    APPEL_OFFRE
} from '../../constants/AppConfig';

import '../documentation/documentation.css';

import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';
import Publications from '../documentation/Publications/Publications';

export default class Documentation extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            pathName : '',
        };
    }

    render() {
        let { pathname } = window.location;
        return (
            <>
               <Layout>

                   <Row>
                        <Col xs={12} xl={2} className="stickyNavbar">
                            {this.renderSideBar(pathname)}
                        </Col>

                        <Publications 
                            category={APPEL_OFFRE} 
                            pageTitle="Appel d'offres" 
                            renderDocumentsListMode={this.renderDocumentsListMode.bind(this)} 
                            renderDocumentsGridMode={this.renderDocumentsGridMode.bind(this)}
                        />
                        {/* <Switch>   
                            <Route  path="/appel-offre">
                                <Category1 
                                    category={REGLEMENTATIONS} 
                                    pageTitle="REGLEMENTATIONS" 
                                    renderDocumentsListMode={this.renderDocumentsListMode.bind(this)} 
                                    renderDocumentsGridMode={this.renderDocumentsGridMode.bind(this)}
                                />
                            </Route>
                        </Switch>  */}
                    </Row>

                    <Newsletter />
                
                </Layout> 



            </>
        )
    }

    renderDocumentsListMode = (pubs,title) => {
     
        return (
            <>
            {
                pubs.map((pub) =>  
                    <a 
                        href={ pub.fpdf_url !== false ?  pub.fpdf_url : `/article/${pub.slug}`} 
                        target={pub.fpdf_url !== false && "_blank"} 
                        style={{ textDecoration: 'none' }}
                    >
                        <Jumbotron className="documentBox">
                            <Row>
                                <Col xs={12} md={4} xl={4}>
                                    <Row className="documentImageContainer">
                                        {
                                            pub.fimg_url !== false ?
                                            <Image src={pub.fimg_url} fluid className="documentThumb" />
                                            :
                                            <ThumbDoc 
                                                title={title} 
                                                containerClass="thumbListModeContainer" 
                                                imageClass="thumbListImage" 
                                                titleClass="thumbPageTitle" 
                                                descClass="thumbDesc" 
                                            />
                                        }
                                        
                                    </Row>
                                </Col>

                                <Col xs={12} md={8} xl={8}>
                                    <h4 className="documentTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered}}></h4>                                    
                                    {/*
                                        pub.excerpt.rendered.length > 0 
                                        ?
                                        <p className="documentDesc" dangerouslySetInnerHTML={{__html: pub.excerpt.rendered.substr(0,47)+"..."}}></p>
                                        :
                                        <p className="documentDesc" dangerouslySetInnerHTML={{__html: pub.content.rendered.substr(0,47)+"..."}}></p>
                                    */}
                                    

                                    <p style={{float : 'right'}}>
                                        {
                                            pub.fpdf_url !== false 
                                            ?
                                            <a  
                                                className="documentButton"
                                                href={`${pub.fpdf_url}`}
                                                target={pub.fpdf_url !== false && "_blank"} 
                                            >
                                                <AiOutlineDownload size={'20px'} />  Télécharger
                                            </a>
                                            :
                                            <a  
                                                className="documentButton"
                                                href={`/article/${pub.slug}`}
                                            >
                                                <IoIosEye size={'20px'} />  Voir Plus
                                            </a>
                                        }
                                    </p>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </a>       
                )
            }
            </>
        );
    };

    renderDocumentsGridMode = (pubs,title) => {
        
        return (
            <Row>

            {
                pubs.map(pub => 
                    <Col xs={12} md={6} xl={4}>
                    <a 
                        href={ pub.fpdf_url !== false ?  pub.fpdf_url : `/article/${pub.slug}`} 
                        target={pub.fpdf_url !== false && "_blank"} 
                        style={{ textDecoration: 'none' }}
                    >
                        <Jumbotron className="documentGridBox">
                            <Row>
                                <Col xs={6} md={5} xl={5}>
                                    <Row>
                                        {
                                            pub.fimg_url 
                                            ?
                                            <Image src={pub.fimg_url} fluid className="documentGridThumb" />
                                            :
                                            <ThumbDoc title={title} containerClass="thumbGridModeContainer" imageClass="thumbListGridImage" titleClass="thumbPageGridTitle" descClass="thumbGridDesc" />
                                        }
                                    </Row>
                                </Col>

                                <Col xs={6} md={7}  xl={7}>
                                    {
                                        window.innerWidth > 767 && pub.title.rendered.length > 30
                                        ?
                                        <h4 className="documentGridTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered.substr(0,30)+"..."}}></h4>
                                        :
                                        <h4 className="documentGridTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered}}></h4>
                                    }
                                    
                                    <p className="documentGridButtonContainer">
                                        {
                                            pub.fpdf_url !== false 
                                            ?
                                            <a  
                                                className="documentGridButton"
                                                href={`${pub.fpdf_url}`}
                                                target={pub.fpdf_url !== false && "_blank"} 
                                            >
                                                <AiOutlineDownload size={'20px'} />  Télécharger
                                            </a>
                                            :
                                            <a  
                                                className="documentGridButton"
                                                href={`/article/${pub.slug}`}
                                            >
                                                <IoIosEye size={'20px'} />  Voir Plus
                                            </a>
                                        }
                                    </p>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </a>
                    </Col>            
                )
            }


            </Row>
        );
    }

    renderSideBar = (activePathName) => {
    
        return (
            <>
            <Nav className="flex-column mtNavbar">

                <Col  className="pageTitleContainer">
                  <p className="pageTitle">Appel d'offres</p>
                </Col>

                {/* <Link to="/documentation/organigramme"
                      className={activePathName == '/documentation/organigramme' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Organigramme</Link> */}
            </Nav>
            </>
        );
    };  
}

