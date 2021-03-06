import React, { Component } from 'react'
// Images & styiling :
import './recrutement.css';

import {
    Col,
    Row,
    Button,
    Jumbotron,
    Form,
    Container,
    Modal,
    Spinner,
} from 'react-bootstrap';

import {
    Grid,
} from '@material-ui/core';
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
    import Swal from 'sweetalert2/dist/sweetalert2.js';
    import LottieLoader from '../../components/LottieLoader';

import NOT_FOUND from '../../assets/JSON/notfound.json';
const notFoundOptions = {
    loop: true,
    autoplay: true, 
    animationData: NOT_FOUND,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

class Recrutement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobTitle : '',
            pays : 0,
            jobType : 0,
            searchingJobs : [],
            sendBtnRefreshing : false,


            // MODAL DATA:
            postId : null,
            name: '',
            email: '',
            message: '',
            cvFile: null,

            modalForm : 0,
            modalTitle : '',
            modalDesc : '',
            showModal :false,
        };

        this.optionSearch = [];
        this.options = [];

        // getting jobs :
        this.props.getJobs1();
    }


    componentDidMount() {
        document.title = `${config.siteName} - Recrutement`;
    }
  
    render() {
        const { jobs } = this.props;
        let { searchingJobs } = this.state;

        // Clean Options :
        this.props.jobs.map((job) => {
            if(job.meta._job_location.length > 0) {
                this.optionSearch.push(job.meta._job_location);
            }
        });
        this.options = [...new Set(this.optionSearch)];
        
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

                    {
                        jobs.length === 0 && <LottieLoader options={notFoundOptions} height={300} devText text={"Aucun job disponible pour le moment"} />
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

    verifEmail = (email) => {
        let verifExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return verifExpression.test(email);
    };

    postuler = async () => {
        let {
            postId,
            name,
            email,
            message,
            cvFile,
        } = this.state; 

        if (name.length < 4 ) {
            if(name === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Le champ NOM & PRÉNOM est vide',
                    showConfirmButton: false,
                    timer: 1500
                });
                return;    
            }
            Swal.fire({
                icon: 'error',
                title: 'Le champ NOM & PRÉNOM doit avoir au moins 4 caractères',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else if ( !this.verifEmail(email) ) {
            if(email === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Le champ EMAIL est vide',
                    showConfirmButton: false,
                    timer: 1500
                });
                return;    
            }
            Swal.fire({
                icon: 'error',
                title: 'Merci de taper une adresse mail valide',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else if (message.length < 4 ) {
            if(message === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Le champ MESSAGE est vide',
                    showConfirmButton: false,
                    timer: 1500
                });
                return;    
            }
            Swal.fire({
                icon: 'error',
                title: 'Le champ MESSAGE doit avoir au moins 10 caractères',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else if (cvFile === null) {
            Swal.fire({
                icon: 'error',
                title: 'Ajouter votre CV s.v.p',
                showConfirmButton: false,
                timer: 1500
            });

        } else {

            this.setState({ sendBtnRefreshing : true });

            let slugToSend = name.toLowerCase().replace(/ /g, '-');
            const options = { 
                headers: {'Content-Type': 'multipart/form-data'}
            };
    
            let data = new FormData();
            data.append('post_parent', postId);
            data.append('username', name);
            data.append('slug', slugToSend);
            data.append('useremail', email);
            data.append('usermsg', message);
            data.append('file', cvFile);
    
            axios.post(`${config.url}wl/v1/postulerjob`,data,options)
            .then(rep => {
                
                this.setState({
                    postId : null,
                    sendBtnRefreshing : true
                });
                this.setModalShow(false,0,null,'','');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Votre candidature a été envoyé avec succés',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(error => {
                // console.log("Erreur =>",error);
            })
        };

    }

    setModalShow = (show,form,id,title,desc) => {
        this.setState({
            postId : id,
            modalForm : form,
            modalTitle : title,
            modalDesc : desc,

            name: '',
            email: '',
            message: '',
            cvFile: null,

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
                                <Form.Control className="formInput" type="text" placeholder="Nom & Prénom" value={this.state.name} onChange={nameInput => this.setState({name: nameInput.target.value})} />
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
                                    onChange={(event) => 
                                        this.setState({ cvFile: event.target.files[0] })    
                                    }
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" className="formInput" placeholder="Votre Message..." rows="3" value={this.state.message} onChange={msgInput => this.setState({message: msgInput.target.value})} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button" onClick={() => this.setModalShow(false,0,null,'','')} variant="light">Fermer</Button>
                    <Button className="button" onClick={() => this.postuler()} variant="light">
                        {
                            this.state.sendBtnRefreshing
                            ?
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                            :
                            "Envoyer"
                        }
                    </Button>
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
                                className="no-border-input-recrutement" 
                                as="select" 
                                value={this.state.pays} 
                                onChange={pays => this.searchByCountry(pays)} 
                            >
                                <option value={0}>Tous les pays...</option>
                                {/*
                                    jobs.map((job) => {
                                        if(job.meta._job_location.length > 0 && job.meta._job_location !== this.optionSearch) {
                                            this.optionSearch = job.meta._job_location;
                                            return(
                                                <option>{job.meta._job_location}</option>
                                            );
                                        }
                                    })
                                */}
                                  {
                                      this.options.map(option =>  <option>{option}</option> )
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
                                <option value={17}>Plein temps</option>
                                <option value={18}>Temps partiel</option>
                                <option value={20}>Freelance</option>
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

const mapStateToProps = state => ({
    jobs : state.jobsR.jobs1,
});

export default connect(mapStateToProps,{ getJobs1 })(Recrutement);

