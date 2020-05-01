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
    Link,
} from "react-router-dom";

// Redux :
 import { connect } from 'react-redux';
 import { getPublications } from '../../../redux/actions/DocumentationActions';

import PDF_THUMB from '../../../assets/images/Documentation/pdf_thumb.png';
const URL_PDF = "https://g5sahel.switch.tn/wp-content/uploads/2020/04/images_Docs_Déclaration_Amb._Sidikou_CPS_UA_20Avr20_vf.pdf";
import { IoIosList,IoMdGrid } from 'react-icons/io';
import { AiOutlineDownload } from 'react-icons/ai';
import '../documentation.css';

class Publications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMode : 'LIST'
        }
    }

    componentDidMount() {
        // Get Publications :
        this.props.getPublications();
    };
    
    render() {
        const { showMode } = this.state;
        const { publications } = this.props;

        return (
            <>
                { <Col xs={12} xl={10}>
                        <Row className="ml-5">
                            {this.renderShowMode()}
                        </Row>

                        {
                            showMode === 'LIST' &&
                            <Row className="ml-5">
                                <Col xs={12} xl={8}>
                                    {this.renderDocumentsListMode(publications)}
                                </Col>
                                <Col xs={0} xl={4} />
                            </Row>
                        }

                        {
                            showMode === 'GRID' &&
                            <Row className="ml-4">  
                                <Col xs={12} xl={12}>
                                    {this.renderDocumentsGridMode(publications)}
                                </Col>
                            </Row>
                        }
                    
                    </Col>
                }
            </>
        )
    }

    renderShowMode = () => {
       
        return (
            <Col xl={12} style={{marginBottom : '20px'}}>
                <Row className="alignBlocShow">   
                    <p className="showModeText">OPTIONS D'AFFICHAGE</p>

                    {
                        this.state.showMode === 'LIST'
                        ?
                            (
                                <>
                                <Button className="showModeButtonActive" onClick={() => this.setState({ showMode : 'LIST' })}>
                                    <IoIosList size={'30px'} /> Liste
                                </Button>
                            
                                <Button className="showModeButton" variant="light" onClick={() => this.setState({ showMode : 'GRID' })}>
                                    <IoMdGrid size={'30px'} /> Grid
                                </Button>
                                </>
                            )
                        :
                            (
                                <>
                                <Button className="showModeButton" variant="light" onClick={() => this.setState({ showMode : 'LIST' })}>
                                    <IoIosList size={'30px'} /> Liste
                                </Button>
                            
                                <Button className="showModeButtonActive" onClick={() => this.setState({ showMode : 'GRID' })}>
                                    <IoMdGrid size={'30px'} /> Grid
                                </Button>
                                </>
                            )
                    }
                </Row>
            </Col>
        );
    }

    renderDocumentsListMode = (pubs) => {
     
        return (
            <>
            {
                pubs.map((pub,index) =>  
                    <Link 
                        to={{
                            pathname : '/solo-page',
                            state : { 
                                solo_title : "Publications",
                                publication : pub,
                            }
                        }}  
                        style={{ textDecoration: 'none' }}>
                        <Jumbotron className="documentBox">
                            <Row>
                                <Col xs={6} xl={3}>
                                    <Row>
                                        <Image src={pub.fimg_url ? pub.fimg_url : PDF_THUMB} fluid className="documentThumb" />
                                        {/* <object className="documentGridThumb" width="90%" height="100" data={URL_PDF} type="application/pdf"></object> */}
                                    </Row>
                                </Col>

                                <Col xs={6} xl={9}>
                                    <h4 className="documentTitle">{pub.title.rendered} </h4>
                                    
                                    <p className="documentDesc">
                                        {
                                            pub.excerpt.rendered.length > 0 
                                            ?
                                                pub.excerpt.rendered.replace(/<[^>]*>?/gm, '').substr(0,230)
                                            :
                                                pub.content.rendered.replace(/<[^>]*>?/gm, '').substr(0,230)
                                        }
                                    </p>
                                    <p style={{float : 'right'}}>
                                        <Link to="#" className="documentButton"><AiOutlineDownload size={'20px'} />  Voir Plus</Link>
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

    renderDocumentsGridMode = (pubs) => {
        const data = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
        
        return (
            <Row>

            {
                data.map(item => 
                    <Col xs={12} xl={4}>
                        <Jumbotron className="documentGridBox">
                        <Row>
                            <Col xs={6} xl={4}>
                                <Row>
                                    {/* <Image src={PDF_THUMB} fluid className="documentGridThumb" /> */}
                                    <object className="documentGridThumb" width="90%" height="100" data={URL_PDF} type="application/pdf"></object>
                                </Row>
                            </Col>

                            <Col xs={6} xl={8}>
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

const mapStateToProps = state => ({
    publications : state.docsR.publications,
});

export default connect(mapStateToProps,{ getPublications })(Publications);


