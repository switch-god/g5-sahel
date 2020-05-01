/* eslint-disable import/first */
import React, { Component } from 'react'

import {
    Col,
    Row,
    Jumbotron,
    Nav,
    Button,
    Image,
} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

// COMPONENTS :
import Organigramme from './Organigramme/Organigramme';
import Publications from './Publications/Publications';
import Correspondance from './Correspondance/Correspondance';
import Discours from './Discours/Discours';
import Multimedias from './Multimedias/Multimedias';
import Reglementation from './Reglementation/Reglementation';
import AutresDocuments from './AutresDocuments/AutresDocuments';

// Icons & Images & Styling :
// import ORGANIGRAMME from '../../assets/pdf/organigramme.pdf';
// import PDF_THUMB from '../../assets/images/Documentation/pdf_thumb.png';
import './documentation.css';


import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';

export default class Documentation extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            showMode : 'LIST',
            pathName : '',
        };
    }

    render() {
        
        const { showMode } = this.state;
        let { pathname } = window.location;
        return (
            <>
               <Layout>

                   <Row>

                    <Col xs={12} xl={2} className="stickyNavbar">
                       
                        {this.renderSideBar(pathname)}
                    </Col>

                    <Switch>   

                        <Route path="/documentation/organigramme">
                            <Organigramme />
                        </Route>

                        <Route  path="/documentation/reglementation">
                            <Reglementation />
                        </Route>

                        <Route  path="/documentation/publications">
                            <Publications />
                        </Route>

                        <Route  path="/documentation/discours">
                            <Discours />
                        </Route>

                        <Route  path="/documentation/correspondance">
                            <Correspondance />
                        </Route>

                        <Route  path="/documentation/multimedias">
                            <Multimedias />
                        </Route>

                        <Route  path="/documentation/autres-documents">
                            <AutresDocuments />
                        </Route>
   
                    </Switch> 

                    </Row>

                    <Newsletter />
                
                </Layout> 



            </>
        )
    }



    renderSideBar = (activePathName) => {
    
        return (
            <>
            <Nav className="flex-column mtNavbar">

                <Col className="pageTitleContainer">
                    {/* <Row> */}
                        <p className="pageTitle">DOCUMENTATION</p>
                    {/* </Row> */}
                </Col>

                <Link to="/documentation/organigramme"
                      className={activePathName == '/documentation/organigramme' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Organigramme</Link>

                <Link to="/documentation/reglementation" 
                      className={activePathName == '/documentation/reglementation' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"}
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Réglementation
                </Link>

                <Link to="/documentation/publications"
                      className={activePathName == '/documentation/publications' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"}      
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Publications</Link>
                    
                <Link to="/documentation/discours"
                      className={activePathName == '/documentation/discours' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Discours</Link>
                    
                <Link to="/documentation/correspondance"
                      className={activePathName == '/documentation/correspondance' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Correspondance</Link>

                <Link to="/documentation/multimedias"
                      className={activePathName == '/documentation/multimedias' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Multimédias</Link>

                <Link to="/documentation/autres-documents"
                      className={activePathName== '/documentation/autres-documents' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Autres documents</Link>
            </Nav>
            </>
        );
    };  
}

