import React, { Component } from 'react'

import {
    Col,
    Row,
    Jumbotron,
    Nav,
    Button,
    Image,
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

// Icons & Images & Styling :
import PDF_THUMB from '../../assets/images/Documentation/pdf_thumb.png';
import { IoIosList,IoMdGrid } from 'react-icons/io';
import { AiOutlineDownload } from 'react-icons/ai';
import './documentation.css';


import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';

export default class Documentation extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            showMode : 'LIST',
            numPages: null,
            pageNumber: 1,
        };
    }


    render() {
        const { showMode, pageNumber, numPages } = this.state;

        return (
            <>
               <Layout>

                   <Row>

                    <Col xs={12} xl={2} className="stickyNavbar">
                        {this.renderSideBar()}
                    </Col>

                    <Col xs={12} xl={10}>
                        <Row className="ml-5">
                            {this.renderShowMode()}
                        </Row>

                        {
                            showMode === 'LIST' &&
                            <Row className="ml-5">
                                <Col xs={12} xl={7}>
                                    {this.renderDocumentsListMode()}
                                </Col>
                                <Col xs={0} xl={5} />
                            </Row>
                        }


                        {
                            showMode === 'GRID' &&
                            <Row className="ml-4">  
                                <Col xs={12} xl={12}>
                                    {this.renderDocumentsGridMode()}
                                </Col>
                            </Row>
                        }
                    
                    </Col>

                    </Row>

                    <Newsletter />
                   
                </Layout> 



            </>
        )
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };


    renderSideBar = () => {
        
        return (
            <Nav className="flex-column mtNavbar">
                <Nav.Link className="stickyNavbarLink">Organigramme</Nav.Link>
                <Nav.Link className="stickyNavbarLink">Réglementation</Nav.Link>
                <Nav.Link className="stickyNavbarLink">Publications</Nav.Link>
                <Nav.Link className="stickyNavbarLink">Discours</Nav.Link>
                <Nav.Link className="stickyNavbarLink">Correspondance</Nav.Link>
                <Nav.Link className="stickyNavbarLink">Multimédias</Nav.Link>
                <Nav.Link className="stickyNavbarLink">Autres documents</Nav.Link>
            </Nav>
        );
    };  

    renderShowMode = () => {

        return (
            <Col xl={12} style={{marginBottom : '20px'}}>
                <Row className="alignBlocShow">   
                    <p className="showModeText">OPTIONS D'AFFICHAGE</p>

                    <Button className="showModeButton" variant="light" onClick={() => this.setState({ showMode : 'LIST' })}>
                        <IoIosList size={'30px'} color={"#666666"} /> Liste
                    </Button>
                   
                    <Button className="showModeButton" variant="light" onClick={() => this.setState({ showMode : 'GRID' })}>
                        <IoMdGrid size={'30px'} color={"#666666"} /> Grid
                    </Button>
                </Row>
            </Col>
        );
    }

    renderDocumentsListMode = () => {
        const data = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
        return (
            <>
            {
                data.map(item =>         
                    <Jumbotron className="documentBox">
                        <Row>
                            <Col xs={6} xl={3}>
                                <Row>
                                    <Image src={PDF_THUMB} fluid className="documentThumb" />
                                </Row>
                            </Col>

                            <Col xs={6} xl={9}>
                                <h4 className="documentTitle">Convention portant création du G5 Sahel </h4>
                                
                                <p className="documentDesc">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eraLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…
                                </p>
                                <p style={{float : 'right'}}>
                                    <Link to="#" className="documentButton"><AiOutlineDownload size={'20px'} />  Download</Link>
                                </p>
                            </Col>
                        </Row>
                    </Jumbotron>
                )
            }
            </>
        );
    };

    renderDocumentsGridMode = () => {
        const data = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
        return (
            <Row>

            {
                data.map(item => 
                    <Col xs={12} xl={4}>
                        <Jumbotron className="documentGridBox">
                        <Row>
                            <Col xs={6} xl={3}>
                                <Row>
                                    <Image src={PDF_THUMB} fluid className="documentGridThumb" />
                                </Row>
                            </Col>

                            <Col xs={6} xl={9}>
                                <h4 className="documentGridTitle">Convention portant création du G5 Sahel </h4>
                              
                                <p className="documentGridButtonContainer">
                                    <Link to="#" className="documentGridButton"> <AiOutlineDownload size={'20px'} /> Download</Link>
                                </p>
                            </Col>
                        </Row>
                    </Jumbotron>
                    </Col>            
                )
            }


            </Row>
        );
    }
    
}

const styles = {
    
}