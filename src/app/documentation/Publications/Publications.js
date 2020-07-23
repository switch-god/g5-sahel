/* eslint-disable import/first */
import React, { Component } from 'react'

import {
    Col,
    Row,
    Button,
    Form,
    Container,
} from 'react-bootstrap';

// Redux :
 import { connect } from 'react-redux';
 import { getPublications, getLastDocs, filterDocs } from '../../../redux/actions/DocumentationActions';

// Components : 
import Loader from '../../loading/Loader';
import { IoIosList,IoMdGrid } from 'react-icons/io';
import '../documentation.css';

import UltimatePagination from '../../../components/Paginate';

class Publications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMode : 'GRID',
            loading : true,
            showPagination : false,
            currentPage: 1,
            articlesPerPage: 10,
            filteredDocs : [],
        }
        // Get Publications :
        if(this.props.category !== undefined) {
            this.props.getPublications(this.props.category,1);
        } else {
            this.props.getLastDocs();
        }
    }
    
    componentDidMount() {
        setTimeout(() => 
            this.setState({
                loading: false,
                showPagination : true,
            })
        ,2000);
    };
    
    render() {
        const { loading,showMode,showPagination,filteredDocs } = this.state;
        const { publications,pageTitle,infos,category } = this.props;
        
        if(window.innerWidth > 992) {
            return (
                <>
                    { 
                        <Col xs={12} md={10} xl={10}>
                            <Row className="ml-5">
                                {this.renderShowMode()}
                            </Row>
                            
                            {/* <Row className="ml-5">
                                {this.renderFilterMode()}
                            </Row> */}
    
                            {
                                loading 
                                ?
                                <Row className="ml-5" style={{marginBottom: '20px'}}>
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
                                    <Col xs={12} xl={10}>
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
                                category !== undefined &&
                                showPagination && 
                                Math.ceil(publications[0].fcategory[0].category_count / 10 ) > 1 &&

                                <Row className="ml-5">
                                    <Col id="page-numbers" xs={12} xl={12}>
                                        <UltimatePagination 
                                            currentPage={this.state.currentPage}
                                            totalPages={infos["x-wp-totalpages"] ? infos["x-wp-totalpages"] : 3}
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
                                    Math.ceil(publications[0].fcategory[0].category_count / 10 ) > 1 &&
                                    <Row>
                                        <Col id="page-numbers" xs={12} xl={12}>
                                            <UltimatePagination 
                                                currentPage={this.state.currentPage}
                                                totalPages={infos["x-wp-totalpages"] ? infos["x-wp-totalpages"] : 3}
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
    };

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
    };


    activeFilter = async (type) => {
        if(type === 0) {
            console.log("Lets get the voir plus");
            await this.setState({filteredDocs : this.props.publications});
            this.props.filterDocs(this.props.publications,type);
        } else {
            console.log("lets get the docs with attachements");
            await this.setState({filteredDocs : this.props.publications});
            this.props.filterDocs(this.props.publications,type);
        }
    };


    renderFilterMode = () => {
       
        return (
            <Col xs={12} className="mr-auto" style={{marginBottom : '20px'}}>
                <Row className="alignBlocShow">   
                    <Col lg={2} xl={2} className="d-flex">
                        <p className="showModeText">Filtrer par</p>
                    </Col>
                    
                    <Col lg={5} xl={6}>
                        <Row className="d-flex">
                            <Form.Group className="my-auto mr-3">
                                <Form.Check type="radio" name="filterCheck" label="sans pièces jointes" onChange={() => this.activeFilter(0)} />
                            </Form.Group>

                            <Form.Group className="my-auto">
                                <Form.Check type="radio" name="filterCheck" label="avec pièces jointes" onChange={() => this.activeFilter(1)} />
                            </Form.Group>
                        </Row>
                    </Col>
                </Row>

            </Col>
        );
    };

    renderShowMode = () => {
       
        return (
            <Col xl={12} style={{marginBottom : '20px'}}>
                <Row className="alignBlocShow">   
                    <Col lg={4} xl={3}>
                        <p className="showModeText">OPTIONS D'AFFICHAGE</p>
                    </Col>

                    <Col lg={5} xl={6}>
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
                    </Col>
                </Row>
            </Col>
        );
    };
    
}

const mapStateToProps = state => ({
    publications : state.docsR.publications,
    infos : state.docsR.infos,
});

export default connect(mapStateToProps,{ getPublications, getLastDocs, filterDocs })(Publications);


