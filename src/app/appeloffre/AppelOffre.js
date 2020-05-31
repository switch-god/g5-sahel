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
// import moment from 'moment';
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
                pubs.map((pub,index) => 
                <> 
                <Jumbotron className="documentBox">
                    <Row>
                    <Col md={6} xl={6}>
                    {
                        pub.fimg_url !== false ?
                        <Image src={pub.fimg_url} fluid style={{minWidth: '100%'}} />
                        :
                        <ThumbDoc 
                            title={title} 
                            containerClass="thumbListModeContainer" 
                            imageClass="thumbListImage" 
                            titleClass="thumbPageTitle" 
                            descClass="thumbDesc" 
                        />
                    }
                    </Col>
                    
                    <Col md={6} xl={6} className="d-flex align-content-between flex-wrap">
                        <h4 className="documentTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered}}></h4>
                        
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
                    </Col>

                    </Row>
                </Jumbotron>    
                </>
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
                <Col xs={12} md={12} lg={6} xl={6}>
                <Jumbotron className="documentGridBox">
                    <Row>
                    <Col xs={6} md={6} lg={6} xl={6}>
                    {
                        pub.fimg_url !== false ?
                        <Image src={pub.fimg_url} fluid className={"documentGridImage"} />
                        :
                        <ThumbDoc 
                            title={title} 
                            containerClass="thumbListModeContainer" 
                            imageClass="thumbListImage" 
                            titleClass="thumbPageTitle" 
                            descClass="thumbDesc" 
                        />
                    }
                    </Col>
                    
                    <Col xs={6} md={6} lg={6} xl={6} className="d-flex align-content-between flex-wrap">
                        <h4 className="documentGridTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered}}></h4>
                        
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
                    </Col>

                    </Row>
                </Jumbotron>
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

