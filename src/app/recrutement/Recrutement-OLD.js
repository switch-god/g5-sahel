import React, { Component } from 'react'

import {
    Col,
    Row,
    Button,
    Jumbotron,
    Form,
    Container,
    Modal,
} from 'react-bootstrap';

import {
    Grid,
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import moment from 'moment';

// Redux & Getting Data : 
    import axios from 'axios';
    import { config } from '../../constants/AppConfig';
    import { connect } from 'react-redux';
    import { getJobs1 } from '../../redux/actions/JobsActions';

// Components :
    import Layout from '../../components/Layout';
    import Newsletter from '../../components/Newsletter';
    import { IoMdPin } from 'react-icons/io';
    import { FaRegClock } from 'react-icons/fa';


// Images & styiling :
    import './recrutement.css';



class Recrutement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobTitle : '',
            pays : 0,
            jobType : 0,
            searchingJobs : [],

            modalForm : 0,
            modalTitle : '',
            modalDesc : '',
            showModal :false,
        };

        this.optionSearch = '';

        // getting jobs :
        this.props.getJobs1();
    }
    
    render() {
        const { jobs } = this.props;
        let { searchingJobs } = this.state;
     
        return (
            <>    
                <div className="bg-overlay header-justify-elements">
                    <div className="row text-center">
                        <Col/>

                        <Col>
                            <h1 style={{fontFamily : 'Poppins SemiBold'}}>Parcourir les emplois</h1>
                        </Col>

                        <Col/>
                    </div>
                </div>

            <Container fluid>
                <Layout>
                    {this.renderSearchContainer(jobs)}
                    {this.renderSortBar(jobs)}

                    {
                        searchingJobs.length > 0
                        ?
                            this.renderJobs(searchingJobs)
                        :
                            this.renderJobs(jobs)
                    }
                    <div style={{marginTop : 50+"px",marginBottom : 50+"px"}}>
                        <Newsletter />
                    </div>

                    {this.renderDetailsModal()}
                </Layout>
            </Container>    
         </>
        )
    }


    setModalShow = (show,form,id,title,desc) => {
        this.setState({
            postId : id,
            modalForm : form,
            modalTitle : title,
            modalDesc : desc,
            showModal : show,
        });
    }

    renderDetailsModal = () => (
        
        this.state.modalForm === 0 
        ?
        <Modal
            show={this.state.showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className="boxTitle">{this.state.modalTitle}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="boxDesc" dangerouslySetInnerHTML={{__html: this.state.modalDesc }}></p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="button" onClick={() => this.setModalShow(false,0,null,'','')} variant="light">Fermer</Button>
                <Button className="button" onClick={() => this.setState({ modalForm : 1 })} variant="light">Postuler</Button>
            </Modal.Footer>
        </Modal>
        :
        <Modal
            show={this.state.showModal}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className="boxTitle">{this.state.modalTitle}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="boxDesc">Envoyer votre canditature par mail : <a className="mailTo" href="mailto:Webdev@g5sahel.org">Webdev@g5sahel.org</a></p> 
            </Modal.Body>
            <Modal.Footer>
                <Button className="button" onClick={() => this.setModalShow(false,0,null,'','')} variant="light">Fermer</Button>
                {/* <Button className="button" onClick={() => this.postuler()} variant="light">Envoyer</Button> */}
            </Modal.Footer>
        </Modal>
    );

    renderSearchContainer = (jobs) => {

        return (
            <>
            <div>
                <Row style={{padding : 25+"px",backgroundColor : '#F6F6F6',marginTop : -20+"px"}}>
                    
                    <Col xs={12} xl={3} style={{marginTop : 15+"px"}}>
                        <Form.Group as={Col} controlId="formGridEmail"> 
                            <Form.Control 
                                className="no-border-input-recrutement" 
                                type="text" 
                                placeholder="Titre du job"
                                value={this.state.jobTitle} 
                                onChange={jobTitle => this.searchByTitle(jobTitle)} 
                            />
                        </Form.Group>
                           
                        
                    </Col>
                    
                    <Col xs={12} xl={3} style={{marginTop : 15+"px"}}>
                        <Form.Group as={Col}>
                            <Form.Control 
                                className="no-border-input-recrutement " 
                                as="select" 
                                value={this.state.pays} 
                                onChange={pays => this.searchByCountry(pays)} 
                            >
                                <option value={0}>Tous les pays...</option>
                                {
                                    jobs.map((job) => {
                                        if(job.meta._job_location && job.meta._job_location != this.optionSearch) {
                                            this.optionSearch = job.meta._job_location;
                                            return(
                                                <option>{job.meta._job_location}</option>
                                            );
                                        }
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} xl={3} style={{marginTop : 15+"px"}}>
                        <Form.Group as={Col}>
                            <Form.Control 
                                className="no-border-input-recrutement " 
                                as="select" 
                                value={this.state.jobType} 
                                onChange={jobType => this.searchByJobType(jobType)} 
                            >
                                <option value={0}>Tous types...</option>
                                <option value={17}>PLEIN TEMPS</option>
                                <option value={18}>TEMPS PARTIEL</option>
                                <option value={20}>FREE-LANCE</option>
                                <option value={19}>TEMPORAIRE</option>
                                <option value={21}>STAGE</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col xs={12} xl={3}>
                        <Button className="button" style={{marginTop : 4+"px",marginLeft : 20+"px"}}>Rechercher</Button>
                    </Col>
                </Row>
            </div>
            </>
        );
    };

    renderSortBar = (jobs) => {
        let { searchingJobs } = this.state;
        return (
            <>
            <Grid
                container
                direction="row"
                justify={window.innerWidth > 767 ? "space-between" : "center" }
                alignItems="center"
                style={{marginTop : 30+"px", marginBottom : 30+"px"}}
            >
                <div>
                    <h5 style={{fontFamily : 'Poppins Light'}}>

                        {
                            searchingJobs.length > 0
                            ?
                                searchingJobs.length
                            :
                                jobs.length
                        } JOBS FOUND
                    
                    </h5>
                </div>

                {/* <div>

                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center" 
                    >
                        <div>
                            <p style={{fontFamily : 'Poppins Light'}}>Sort By</p>
                        </div>

                        <div>
                            <FormControl variant="outlined" style={{width : 200+"px",marginLeft : 20+"px",marginTop : -14+"px"}}>
                                <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
                                <Select
                                    native
                                    value={1}
                                    onChange={(choix) => this.setState({choix : choix})}
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={1}>This month</option>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                </div> */}
            </Grid>
            <hr style={{marginTop : -20+"px", borderColor : '#666666'}} />
            </>
        );
    };

    renderJobs = (jobs) => {
     
        return (
            <Row style={{marginTop : 20+"px", marginBottom : 20+"px"}}>
                {
                    jobs.map(BigJob => {
                        
                        let ChangedJob = JSON.stringify(BigJob).replace('job-types','type');
                        let job = JSON.parse(ChangedJob);
                        let now = moment();
                        let jobDate = moment(job.date);
                        let jobMonthsDiff = now.diff(jobDate, 'months');
                        let jobYearsDiff = jobMonthsDiff > 11 ? (now.diff(jobDate, 'years')).toFixed() : null;
                        
                    return ( 
                        <Col xs={12} md={6} xl={6} onClick={() => this.setModalShow(true,0,job.id,job.title.rendered,job.content.rendered)}>
                            <Jumbotron  className="box justify-elements">
                                <Row>
                                    <h5 className="boxTitle">{job.title.rendered}</h5>
                                </Row>
                                
                                {
                                    job.meta._job_location &&
                                    <Row>
                                        <p className="boxDesc">
                                            <IoMdPin size={30} style={{marginRight : 10+"px"}} />{job.meta._job_location}
                                        </p>
                                    </Row>
                                }

                                <Row>
                                    <p className="boxDesc">
                                        <FaRegClock size={25} style={{marginRight : 13+"px"}} />
                                        {
                                            jobYearsDiff 
                                            ? 
                                                `Publié il y a ${jobYearsDiff} an(s)` 
                                            : 
                                            jobMonthsDiff == 0
                                            ?
                                                "Publié ce mois"
                                            :
                                                `Publié il ya ${jobMonthsDiff} moi(s)`
                                        }
                                        
                                    </p>
                                </Row>

                                <Row>
                                    <p className="TimePartJob">
                                        {
                                            job.type == 17
                                            ? 
                                                "PLEIN TEMPS"
                                            :
                                            job.type == 18
                                            ?
                                                "TEMPS PARTIEL"
                                            :
                                            job.type ==  19
                                            ?
                                                "TEMPORAIRE"
                                            :
                                            job.type == 20
                                            ?
                                                "FREE-LANCE"
                                            :
                                                "STAGE"
                                        }
                                    </p>
                                    {/* <Col md={5}>
                                        <p className="TimePartJobDate">
                                            12 Sep - 12 Oct
                                        </p>
                                    </Col> */}
                                </Row>
                            </Jumbotron>
                        </Col>
                    )})
                }
            </Row>
        );
    };

    searchByJobType = (typeSelected) => {
        const { jobs } = this.props;
        let resultSearch = [];
        
        this.setState({ 
            jobType: typeSelected.target.value,
            pays: 0,
            jobTitle : "",
        });
        
        jobs.filter(BigJob => {
            let ChangedJob = JSON.stringify(BigJob).replace('job-types','type');
            let job = JSON.parse(ChangedJob);

            job.type[0] == typeSelected.target.value && resultSearch.push(job);
        });

        if(resultSearch.length > 0) {
            this.setState({ searchingJobs : resultSearch });
        } else {
            this.setState({ searchingJobs : [] });
        }
            
       
    };

    searchByCountry = (countrySelected) => {
        
        const { jobs } = this.props;
        let resultSearch = [];

        this.setState({ 
            pays: countrySelected.target.value,
            jobTitle : "",
            jobType : 0,
        });
        
        jobs.filter(job => {
            // let ChangedJob = JSON.stringify(BigJob).replace('job-types','type');
            // let job = JSON.parse(ChangedJob);

            job.meta._job_location == countrySelected.target.value && resultSearch.push(job);
        });

        if(resultSearch.length > 0) {
            this.setState({ searchingJobs : resultSearch });
        } else {
            this.setState({ searchingJobs : [] });
        }
            
       
    };

    searchByTitle = (jobToSearch) => {

        const { jobs } = this.props;
        
        this.setState({ 
            jobTitle : jobToSearch.target.value,
            pays : 0,
            jobType : 0,
        });
       
        if(jobToSearch.target.value == "") {
            this.setState({searchingJobs : [] });
        } else {

            let resultSearch = [];
            
            jobs.filter(job => {
                let jobLowercase = (job.title.rendered).toLowerCase();
                    let jobToSearchNow = jobToSearch.target.value.toLowerCase();
                    if(jobLowercase.indexOf(jobToSearchNow) > -1) {
                        resultSearch.push(job);
                    }
            });
    
            if(resultSearch.length) {
                this.setState({
                    searchingJobs : resultSearch
                });
            } else {
                this.setState({searchingJobs : [] });
            }
            
        }

        
    };

    searchByDate = (dateToSearch) => {

    };
}

const styles = {
    searchTitle : {
        color : '#666666',
        
    },
}


const mapStateToProps = state => ({
    jobs : state.jobsR.jobs1,
});

export default connect(mapStateToProps,{ getJobs1 })(Recrutement);

