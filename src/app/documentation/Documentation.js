/* eslint-disable import/first */
import React, { Component } from 'react'
import './documentation.css';

import {
    Col,
    Row,
    Jumbotron,
    Nav,
    Image,
    Button,
    Modal,
    Popover,
    OverlayTrigger
} from 'react-bootstrap';

import ThumbDoc from '../../components/ThumbDoc';
import { IoIosEye, } from 'react-icons/io';
import { AiOutlineDownload } from 'react-icons/ai';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import axios from 'axios';

// COMPONENTS :
import Organigramme from './Organigramme/Organigramme';
import Publications from './Publications/Publications';

import { 
    config, 
    DOCUMENTATIONS,
    AUTRES_DOCUMENTS,
} from '../../constants/AppConfig';



import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';

export default class Documentation extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            categories: [],
            pathName : '',
        };

        this.getCategories();
    }

    componentDidMount() {
        document.title = `${config.siteName} - Documentation`;
    }

    render() {
        let { categories } = this.state;
        let { pathname } = window.location;
        
        return (
            <>
               <Layout>
                    

                   <Row>

                    <Col xs={12} xl={2} className="stickyNavbar">
                        {this.renderSideBar(pathname)}
                    </Col>

                    <Switch>   

                        <Route path="/documentations/organigramme">
                            <Organigramme />
                        </Route>

                        <Route path={`/documentations/last-4`}>
                            <Publications 
                                pageTitle={"Derniers documents"} 
                                renderDocumentsListMode={this.renderDocumentsListMode.bind(this)} 
                                renderDocumentsGridMode={this.renderDocumentsGridMode.bind(this)}
                            />
                        </Route>                
                        {
                            categories.map((cat,index) =>
                                <Route key={index} path={`/documentations/${cat.slug}`}>
                                    <Publications 
                                        category={cat.id} 
                                        pageTitle={cat.name} 
                                        renderDocumentsListMode={this.renderDocumentsListMode.bind(this)} 
                                        renderDocumentsGridMode={this.renderDocumentsGridMode.bind(this)}
                                    />
                                </Route>                
                            )
                        }   
                    </Switch>

                    </Row>

                    <Newsletter />

                </Layout> 

            </>
        )
    }

    getCategories = () => {

        axios.get(`${config.url}wp/v2/categories?parent=${DOCUMENTATIONS}`)
        .then(rep => {
            // console.log(rep.data);
            this.setState({ categories: rep.data });
        })
        .catch(err => {
            
        });
    };
    
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
                        <Image src={pub.fimg_url} alt={pub.title.rendered} fluid style={{minWidth: '100%'}} />
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
                        <Image src={pub.fimg_url} alt={pub.title.rendered} fluid className={"documentGridImage"} />
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
        let {
            categories,
        } = this.state;

        return (
            <>
            <Nav className="flex-column mtNavbar">
                
                <Col  className="pageTitleContainer">
                    <p className="pageTitle">DOCUMENTATIONS</p>
                </Col>

                <Link  
                    to={`/documentations/last-4`}
                    className={activePathName == `/documentations/last-4` ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                    onClick={() => this.setState({ pathName : window.location.pathname })}
                >
                Derniers documents
                </Link>
                {
                categories.map((cat,index) => 
                    <Link key={index} to={`/documentations/${cat.slug}`}
                        className={activePathName == `/documentations/${cat.slug}` ? "stickyNavbarLinkActive nav-link" : "stickyNavbarLink nav-link"} 
                        onClick={() => this.setState({ pathName : window.location.pathname })}
                    >{cat.name}</Link>
                )
                }
            </Nav>
            </>
        );
    };  
}

