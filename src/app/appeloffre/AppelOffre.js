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
import Category1 from './Category1/Category1';

// Icons & Images & Styling :
// import ORGANIGRAMME from '../../assets/pdf/organigramme.pdf';
// import PDF_THUMB from '../../assets/images/Documentation/pdf_thumb.png';
import '../documentation/documentation.css';


import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';

export default class AppelOffre extends Component {
    
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

                        <Route path="/appel-offre/cat-1">
                            <Category1 />
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
                    <p className="pageTitle">APPEL D'OFFRE</p>  
                </Col>

                <Link to="/appel-offre/cat-1"
                      className={activePathName == '/appel-offre/cat-1' ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                      onClick={() => this.setState({ pathName : window.location.pathname })}
                >Category 1</Link>
             
            </Nav>
            </>
        );
    };  
}

