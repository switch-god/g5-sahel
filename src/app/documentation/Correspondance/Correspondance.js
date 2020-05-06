/* eslint-disable import/first */
import React, { Component } from 'react'


import {
    Col,
    Row,
    Jumbotron,
    Button,
    Image,
} from 'react-bootstrap';

import {
    Link,
} from "react-router-dom";



// Redux :
 import { connect } from 'react-redux';
 import { getCorrespondance } from '../../../redux/actions/DocumentationActions';

// Components : 
    import Loader from '../../loading/Loader';
    import ThumbDoc from '../../../components/ThumbDoc';

// import PDF_THUMB from '../../../assets/images/Documentation/pdf_thumb.png';
import { IoIosList,IoMdGrid } from 'react-icons/io';
import { IoIosEye } from 'react-icons/io';
import '../documentation.css';

class Correspondance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMode : 'LIST',
            loading : true,
        }

        this.setLoader();
    }

    componentDidMount() {
        // Get Publications :
        this.props.getCorrespondance();
    };
    
    render() {
        const { loading,showMode } = this.state;
        const { correspondance } = this.props;

        return (
            <>
                { <Col xs={12} xl={10}>
                        <Row className="ml-5">
                            {this.renderShowMode()}
                        </Row>

                        {
                            loading 
                            ?
                            <Row className="ml-5">
                                <Col />

                                <Col>
                                    <Loader style={{height : '70px'}} />
                                </Col>
                                
                                <Col/>
                            </Row>
                            :
                            correspondance.length === 0 
                            ?
                            <Row className="ml-5">
                                <Col xs={12}>
                                    <div className="docsEmptyContainer">
                                        <p className="docsEmptyText">Aucun Document Disponible pour le moment</p>
                                    </div>
                                </Col>
                            </Row>
                            :
                            showMode === 'LIST' && correspondance.length > 0 &&
                            <Row className="ml-5">
                                <Col xs={12} xl={8}>
                                    {this.renderDocumentsListMode(correspondance)}
                                </Col>
                                <Col xs={0} xl={4} />
                            </Row>
                        }

                        {
                            showMode === 'GRID' && correspondance.length > 0 &&
                            <Row className="ml-4">  
                                <Col xs={12} xl={12}>
                                    {this.renderDocumentsGridMode(correspondance)}
                                </Col>
                            </Row>
                        }
                    
                    </Col>
                }
            </>
        )
    }

    setLoader = () => {
        setTimeout(() => 
            this.setState({loading: false})
        ,2000);
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
                pubs.map((pub) =>  
                    <Link 
                        to={{
                            pathname : `/solo-page/${pub.categories[0].category_name}/${pub.slug}`,  
                        }}  
                        style={{ textDecoration: 'none' }}>
                        <Jumbotron className="documentBox">
                            <Row>
                                <Col xs={6} xl={3}>
                                    <Row>
                                        {
                                            pub.fimg_url 
                                            ? 
                                              <Image src={pub.fimg_url} fluid className="documentThumb" />
                                            : 
                                              <ThumbDoc title="Correspondance" containerClass="thumbListModeContainer" imageClass="thumbListImage" titleClass="thumbPageTitle" descClass="thumbDesc" />
                                        }
                                    </Row>
                                </Col>

                                <Col xs={6} xl={9}>
                                    <h4 className="documentTitle" dangerouslySetInnerHTML={{__html: pub.title.rendered}}></h4>
                                   
                                    {
                                        pub.excerpt.rendered.length > 0 
                                        ?
                                        <p className="documentDesc" dangerouslySetInnerHTML={{__html: pub.excerpt.rendered.substr(0,230)}}></p>
                                        :
                                        <p className="documentDesc" dangerouslySetInnerHTML={{__html: pub.content.rendered.substr(0,230)}}></p>
                                                
                                    }
                                    
                                    <p style={{float : 'right'}}>
                                        <Link  
                                            className="documentButton"
                                            to={{
                                                pathname : `/solo-page/${pub.categories[0].category_name}/${pub.slug}`,  
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

    renderDocumentsGridMode = (pubs) => {
        
        return (
            <Row>

            {
                pubs.map(pub => 
                    <Col xs={12} xl={4}>
                    <Link 
                        to={{
                            pathname : `/solo-page/${pub.categories[0].category_name}/${pub.slug}`,  
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
                                            <ThumbDoc title="Correspondance" containerClass="thumbGridModeContainer" imageClass="thumbListGridImage" titleClass="thumbPageGridTitle" descClass="thumbGridDesc" />
                                        }
                                    </Row>
                                </Col>

                                <Col xs={6} xl={7}>
                                    <h4 className="documentGridTitle">Convention portant création du G5 Sahel </h4>
                                
                                    <p className="documentGridButtonContainer">
                                        <Link  
                                            className="documentGridButton"
                                            to={{
                                                pathname : `/solo-page/${pub.categories[0].category_name}/${pub.slug}`,  
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
}

const mapStateToProps = state => ({
    correspondance : state.docsR.correspondance,
});

export default connect(mapStateToProps,{ getCorrespondance })(Correspondance);


