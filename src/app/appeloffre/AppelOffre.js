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
import { IoIosList,IoMdGrid } from 'react-icons/io';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { 
    config, 
} from '../../constants/AppConfig';

import '../documentation/documentation.css';

import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';

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
                    <Link 
                        to={{
                            pathname : `/article/${pub.slug}`,  
                        }}  
                        style={{ textDecoration: 'none' }}>
                        <Jumbotron className="documentBox">
                            <Row>
                                <Col xs={12} xl={4}>
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

                                <Col xs={12} xl={8}>
                                    {
                                        pub.title.rendered.length > 50
                                        ?
                                        <h4 className="documentTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered.substr(0,47)+"..."}}></h4>
                                        :
                                        <h4 className="documentTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered}}></h4>
                                    }
                                    {
                                        pub.excerpt.rendered.length > 0 
                                        ?
                                        <p className="documentDesc" dangerouslySetInnerHTML={{__html: pub.excerpt.rendered.substr(0,47)+"..."}}></p>
                                        :
                                        <p className="documentDesc" dangerouslySetInnerHTML={{__html: pub.content.rendered.substr(0,47)+"..."}}></p>
                                    }
                                    
                                    <p style={{float : 'right'}}>
                                        <Link  
                                            className="documentButton"
                                            to={{
                                                pathname : `/article/${pub.slug}`,  
                                            }}
                                        >
                                            <IoIosEye size={'20px'} />  Voir Plus
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Link>       
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
                    <Col xs={12} xl={4}>
                    <Link 
                        to={{
                            pathname : `/article/${pub.slug}`,  
                        }}  
                        style={{ textDecoration: 'none' }}>
                            <Jumbotron className="documentGridBox">
                            <Row>
                                <Col xs={6} xl={5}>
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

                                <Col xs={6} xl={7}>
                                    {
                                        pub.title.rendered.length > 30
                                        ?
                                        <h4 className="documentGridTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered.substr(0,30)+"..."}}></h4>
                                        :
                                        <h4 className="documentGridTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered}}></h4>
                                    }
                                    
                                    <p className="documentGridButtonContainer">
                                        <Link  
                                            className="documentGridButton"
                                            to={{
                                                pathname : `/article/${pub.slug}`,  
                                            }}
                                        >
                                            <IoIosEye size={'20px'} /> Voir Plus
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Link>
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
                  <p className="pageTitle">Appel d'offre</p>
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

