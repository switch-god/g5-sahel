import React, { Component } from 'react'

import {
    Col,
    Form,
    Button,
    Spinner
} from 'react-bootstrap';

import {
    Grid
} from '@material-ui/core';

import '../app/home/Home.css';

import {config} from '../constants/AppConfig';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';


class Newsletter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            loading : false,
            email : '',
            name : '',
        };
    }

    render() {

        return (
            <>
                <hr style={{ borderColor : '#DEDEDE', marginBottom : 40+"px", borderWidth : 3+"px" }}/>
                    <div className="newsletterDesktop">
                        {this.renderDesktop()}
                    </div>

                    <div className="newsletterMobile">
                        {this.renderMobile()}
                    </div>
                

                <hr style={{ borderColor : '#DEDEDE', marginTop : 40+"px",borderWidth : 3+"px" }}/>
            </>
        )
    };

    /* RENDERING METHODS */

    renderDesktop = () => {
        const { loading } = this.state;

        return (
        <Grid container style={{backgroundColor : 'black',padding : 30+"px"}} direction="row" justify="space-between" alignItems="center">
            <div><h4 style={{color : 'white', fontFamily : 'Poppins SemiBold'}}>Abonnez-vous à notre newsletter</h4></div>
            
            <div>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Form>
                    <Form.Row>
                        <Col>
                            <input style={styles.input} className="responsiveInputForm" placeholder="Name"  value={this.state.name} onChange={name => this.setState({name: name.target.value})} />
                        </Col>

                        <Col>
                            <input style={styles.input} className="responsiveInputForm" placeholder="Email" value={this.state.email} onChange={email => this.setState({email: email.target.value})} />
                        </Col>
                        
                        <Col>
                            <Button className="buttonBlack" onClick={() => this.sendToNewsletter()}>
                                { loading ? <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> :  "Souscrire" }
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Grid>
            </div>
        </Grid>
        );
    }

    renderMobile = () => (
        <div>
            <center>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                style={{backgroundColor : 'black',padding : 30+"px"}} 
            >
                <div><h4 style={{color : 'white', fontFamily : 'Poppins SemiBold'}}>Abonnez-vous à notre newsletter</h4></div>
            
                <div>
                <Grid container direction="column" justify="space-between" alignItems="center">
                    <Form>
                        <Form.Row>
                            <Col>
                                <input style={styles.input} className="responsiveInputForm" placeholder="Name"  value={this.state.name} onChange={name => this.setState({name: name.target.value})} />
                            </Col>

                            <Col>
                                <input style={styles.input} className="responsiveInputForm" placeholder="Email" value={this.state.email} onChange={email => this.setState({email: email.target.value})} />
                            </Col>
                            
                            <Col>
                                <Button className="buttonBlack" onClick={() => this.sendToNewsletter()}>
                                    { this.state.loading ? <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> :  "Subscribe" }
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Grid>
                </div>
            </Grid>
            </center>
        </div>
    );


    /* RENDERING METHODS */

    sendToNewsletter = () => {
        let {
            email,
            name,
        } = this.state;

        if (name.length < 4 ) {
            if(name === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Le champ NOM est vide',
                    showConfirmButton: false,
                    timer: 1500
                });
                return;    
            }
            Swal.fire({
                icon: 'error',
                title: 'Le champ NOM doit avoir au moins 4 caractères',
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
        } else {

            this.setState({
                loading : true,
            });

            axios.post(`${config.url}newsletter/v1/subscribers/add`, {
                email: email,
                name : name,
                api_key: config.newsletterApiKey,			
            })
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        loading : false,
                        email : '',
                        name : '',
                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'Merci pour votre inscription',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                },2000);
            })
            .catch(error => {
            // console.log("erreur axios sendToNewsletter/Newsletter component",JSON.stringify(error));
               
               setTimeout(() => {
                   Swal.fire({
                       icon: 'error',
                       title: 'Cette adresse est déja inscrite',
                       showConfirmButton: false,
                       timer: 2000
                    });
                    this.setState({
                        loading : false,
                        name : '',
                        email : '',
                    });
                },2000);
             });
        };
        
    };

    verifEmail = (email) => {
        let verifExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return verifExpression.test(email);
    };

}

const styles = {
    title : {
        fontFamily : 'PopiBold',
        marginTop : 10+"px"
    },
    input : {
        borderRaduis : 0+"px",
        paddingTop : 10+"px",
        paddingBottom : 10+"px",
        paddingLeft : 10+"px",
        borderWidth : 1+"px",
        borderColor : 'lightGray',
        backgroundColor : 'black'
    },
    button : {
        backgroundColor : 'white',
        color : 'black',
        paddingTop : 10+"px",
        paddingBottom : 10+"px",
        borderWidth : 1+"px",
        borderColor : 'lightGray',
        // width : '100%',

    }
}

export default Newsletter;