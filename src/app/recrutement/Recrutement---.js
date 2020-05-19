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
    import { getJobs } from '../../redux/actions/JobsActions';

// Components :
    import Layout from '../../components/Layout';
    import Newsletter from '../../components/Newsletter';
    import { IoMdPin } from 'react-icons/io';
    import { FaRegClock } from 'react-icons/fa';
    import Swal from 'sweetalert2/dist/sweetalert2.js';

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


            // MODAL DATA:
            postId : null,
            firstName: '',
            lastName: '',
            email: '',
            cvFile: null,

            modalForm : 0,
            modalTitle : '',
            modalDesc : '',
            showModal :false,
        };

        this.optionSearch = '';

        // getting jobs :
        this.props.getJobs();
    }

  
    render() {
        const { jobs } = this.props;
        let { searchingJobs,showModal } = this.state;
        
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
                    {/* {this.renderSearchContainer(jobs)} */}
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

    postuler = async () => {
        // console.log("Kbal axios");
        let {
            postId,
            firstName,
            lastName,
            email,
            cvFile,
        } = this.state; 

    
        // console.log("File Of User",cvFile);
        // console.log("File Name",cvFile.name);

        // Create an object of formData 
        var bodyFormData = new FormData(); 
     
      // Update the formData object 
      bodyFormData.append( 
        "myFile", 
        this.state.cvFile, 
        this.state.cvFile.name 
      ); 


     
      // Details of the uploaded file 
      console.log(this.state.cvFile); 
    //   console.log("Form Data",formData.getAll('myFile')); 
     

      // Request made to the backend api 
      // Send formData object 
    //   axios.post(`${config.url}wl/v1/postuler`, formData).then(response => console.log("server =>", response.data)); 
     

        // axios.post(`${config.url}wl/v1/postuler`, {
        //     post_id: postId,
        //     nom : lastName,
        //     prenom : firstName,
        //     email : email,
        //     cv : formData,
        // },
        // // { headers: { 'Content-Type': 'multipart/form-data'} }
        // )
        // .then(rep => {
            
        //     this.setState({
        //         postId : null,
        //         firstName: '',
        //         lastName: '',
        //         email: '',
        //     });

        //     this.setModalShow(false,0,null,'','');

        //     console.log("RESPONSE =>", rep.data);
        // })
        // .catch(error => {
        //     console.log("Erreur =>",error);
        // })
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
                    {/* <p className="boxDesc" dangerouslySetInnerHTML={{__html: this.state.modalDesc }}></p> */}
                    DESC
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button" onClick={() => this.setModalShow(false,0,null,'','')} variant="light">Fermer</Button>
                    <Button className="button" onClick={() => this.setState({ modalForm : 1 })} variant="light">Postuler</Button>
                </Modal.Footer>
            </Modal>
            :
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
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail"> 
                                <Form.Control className="formInput" type="text" placeholder="Votre prénom" value={this.state.firstName} onChange={firstName => this.setState({firstName: firstName.target.value})} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control className="formInput" type="text" placeholder="Votre nom" value={this.state.lastName} onChange={lastName => this.setState({lastName: lastName.target.value})} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control className="formInput" type="email" placeholder="Votre adresse e-mail" value={this.state.email} onChange={email => this.setState({email: email.target.value})}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.File 
                                    id="cv_file"
                                    label={this.state.cvFile !== null ? this.state.cvFile.name : "Téléverser votre CV" }
                                    data-browse="Téléverser"
                                    custom
                                    onChange={(event) => {
                                        this.setState({ cvFile: event.target.files[0] })    
                                        }
                                    }
                                />
                            </Form.Group>
                        </Form.Row>    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button" onClick={() => this.setModalShow(false,0,null,'','')} variant="light">Fermer</Button>
                    <Button className="button" onClick={() => this.postuler()} variant="light">Envoyer</Button>
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
                    jobs.map((job,index) => {
                        
                        // let ChangedJob = JSON.stringify(BigJob).replace('job-types','type');
                        // let job = JSON.parse(ChangedJob);
                        // let now = moment();
                        // let jobDate = moment(job.date);
                        // let jobMonthsDiff = now.diff(jobDate, 'months');
                        // let jobYearsDiff = jobMonthsDiff > 11 ? (now.diff(jobDate, 'years')).toFixed() : null;
                        
                    return ( 
                        <Col key={index} xs={12} md={6} xl={6}  onClick={() => this.setModalShow(true,0,job.ID,job.post_title,job.post_content)}>
                            <Jumbotron  className="box justify-elements">
                                <Row>
                                    <h5 className="boxTitle">{job.post_title}</h5>
                                </Row>
                                
                             
                                <Row>
                                    <p className="boxDesc">
                                        <IoMdPin size={30} style={{marginRight : 10+"px"}} />Nouakchott
                                    </p>
                                </Row>
                            
                                {/* <Row>
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
                                </Row> */}

                                <Row>
                                    <p className="TimePartJob">PLEIN TEMPS</p>
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
    jobs : state.jobsR.jobs,
});

export default connect(mapStateToProps,{ getJobs })(Recrutement);

