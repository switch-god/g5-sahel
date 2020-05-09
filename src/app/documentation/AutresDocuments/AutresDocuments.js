/* eslint-disable import/first */
import React, { Component } from 'react'

import {
    Col,
    Row,
    Button,
    Container,
} from 'react-bootstrap';

// Redux :
 import { connect } from 'react-redux';
 import { getPublications } from '../../../redux/actions/DocumentationActions';

// Components : 
import Loader from '../../loading/Loader';
import { IoIosList,IoMdGrid } from 'react-icons/io';
import '../documentation.css';

import UltimatePagination from '../../../components/Paginate';
class AutresDocuments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMode : 'GRID',
            loading : true,
            showPagination : false,
            currentPage: 1,
            articlesPerPage: 10,
        }
        // Get Publications :
        this.props.getPublications(this.props.category,1);
    }
    
    componentDidMount() {
        setTimeout(() => 
            this.setState({
                loading: false,
                showPagination : true,
            })
        ,2000);
    }
    
    render() {
        const { loading,showMode,showPagination } = this.state;
        const { publications,pageTitle } = this.props;
        
        if(window.innerWidth > 800) {
            return (
                <>
                    { 
                        <Col xs={12} xl={10}>
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
                                publications.length === 0 
                                ?
                                <Row className="ml-5">
                                    <Col xs={12}>
                                        <div className="docsEmptyContainer">
                                            <p className="docsEmptyText">Aucun Document Disponible pour le moment</p>
                                        </div>
                                    </Col>
                                </Row>
                                :
                                showMode === 'LIST' && publications.length > 0 &&
                                <Row className="ml-5">
                                    <Col xs={12} xl={8}>
                                        {this.props.renderDocumentsListMode(publications,pageTitle)}
                                    </Col>
                                    <Col xs={0} xl={4} />
                                </Row>
                            }
    
                            {
                                showMode === 'GRID' &&  publications.length > 0 &&
                                <Row className="ml-4">  
                                    <Col xs={12} xl={12}>
                                        {this.props.renderDocumentsGridMode(publications,pageTitle)}
                                    </Col>
                                </Row>
                            }
    
                            {
                                publications.length > 0 && 
                                showPagination && 
                                Math.ceil(publications[0].categories[0].category_count / 10 ) > 1 &&
                                   
                                <Row className="ml-5">
                                    <Col id="page-numbers" xs={12} xl={12}>
                                        <UltimatePagination 
                                            currentPage={this.state.currentPage}
                                            totalPages={Math.ceil(publications[0].categories[0].category_count / 10)}
                                            boundaryPagesRange={4}
                                            siblingPagesRange={3}
                                            hideEllipsis={false}
                                            hidePreviousAndNextPageLinks
                                            hideFirstAndLastPageLinks
                                            onChange={(current) => this.callPage(current) }
                                        />
                                    </Col>  
                                </Row>
                            }
                        
                        </Col>
                    }
                </>
            )
        } else {
                return (
                    <Container fluid>
                        { 
                            <Col xs={12} xl={10}>
                                {
                                    loading 
                                    ?
                                    <Row style={{marginTop: '20px', marginBottom: '20px'}}>
                                        <Col />
        
                                        <Col>
                                            <Loader style={{height : '70px'}} />
                                        </Col>
                                        
                                        <Col/>
                                    </Row>
                                    :
                                    publications.length === 0 
                                    ?
                                    <Row style={{marginTop: '20px', marginBottom: '20px'}}>
                                        <Col xs={12}>
                                            <div className="docsEmptyContainer">
                                                <p className="docsEmptyText">Aucun Document Disponible pour le moment</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    :
                                    showMode === 'GRID' &&  publications.length > 0 &&
                                    <Row style={{marginTop: '20px', marginBottom: '20px'}}>  
                                        <Col xs={12} xl={12}>
                                            {this.props.renderDocumentsGridMode(publications,pageTitle)}
                                        </Col>
                                    </Row>
                                }
        
                                {
                                    publications.length > 0 && 
                                    showPagination && 
                                    Math.ceil(publications[0].categories[0].category_count / 10 ) > 1 &&
                                    <Row>
                                        <Col id="page-numbers" xs={12} xl={12}>
                                            <UltimatePagination 
                                                currentPage={this.state.currentPage}
                                                totalPages={Math.ceil(publications[0].categories[0].category_count / 10)}
                                                boundaryPagesRange={4}
                                                siblingPagesRange={3}
                                                hideEllipsis={false}
                                                hidePreviousAndNextPageLinks
                                                hideFirstAndLastPageLinks
                                                onChange={(current) => this.callPage(current) }
                                            />
                                        </Col>  
                                    </Row>
                                }
                            
                            </Col>
                        }
                    </Container>
                )

        }
    }

    callPage = (current) => {
        this.setState({ 
            currentPage: current,
            showPagination : false,
            loading : true,
        });
        window.scrollTo(0, 0);
       
        this.props.getPublications(this.props.category,current);

        setTimeout(() => {
            this.setState({
                loading : false,
                showPagination : true,
            });
        },3000);
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
                                <Button className="showModeButton" variant="light" onClick={() => this.setState({ showMode : 'GRID' })}>
                                    <IoMdGrid size={'30px'} /> Grid
                                </Button>

                                <Button className="showModeButtonActive" onClick={() => this.setState({ showMode : 'LIST' })}>
                                    <IoIosList size={'30px'} /> Liste
                                </Button>
                            
                                </>
                            )
                        :
                            (
                                <>
                                <Button className="showModeButtonActive" onClick={() => this.setState({ showMode : 'GRID' })}>
                                    <IoMdGrid size={'30px'} /> Grid
                                </Button>

                                <Button className="showModeButton" variant="light" onClick={() => this.setState({ showMode : 'LIST' })}>
                                    <IoIosList size={'30px'} /> Liste
                                </Button>
                                </>
                            )
                    }
                </Row>
            </Col>
        );
    }

   
}

const mapStateToProps = state => ({
    publications : state.docsR.publications,
});

export default connect(mapStateToProps,{ getPublications })(AutresDocuments);


