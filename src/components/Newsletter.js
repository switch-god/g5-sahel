import React, { Component } from 'react'

import {
    Container,
    Row,
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
            email : null,
            name : null,
        };
    }

    render() {

        const { loading } = this.state;

        return (
            <>
                <hr style={{ borderColor : '#DEDEDE', marginBottom : 40+"px", borderWidth : 3+"px" }}/>

                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{backgroundColor : 'black',padding : 30+"px"}}
                >
                    <div><h4 style={{color : 'white', fontFamily : 'Poppins SemiBold'}}> Subscribe to our newsletter </h4></div>
                    
                    <div>
                    <Grid
                    container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
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
                                        { loading 
                                            ? 
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                /> 
                                            :  "Subscribe" }
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Grid>

                    </div>

                </Grid>
                <hr style={{ borderColor : '#DEDEDE', marginTop : 40+"px",borderWidth : 3+"px" }}/>
     
            </>
        )
    }

    sendToNewsletter = () => {
        let {
            email,
            name,
        } = this.state;

        this.setState({
            loading : true,
        });

        if(this.verifEmail(email) && name.length >= 4) {
    
            axios.post(`${config.url}newsletter/v1/subscribers/add`, {
                email: email,
                name : name,
                api_key: config.newsletterApiKey,			
            })
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        loading : false,
                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'Subscribed successfuly',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },2000);
            })
            .catch(error => {
            // console.log("erreur axios sendToNewsletter/Newsletter component",JSON.stringify(error));
               
               setTimeout(() => {
                    this.setState({
                        loading : false,
                    });
                    Swal.fire({
                        icon: 'error',
                        title: 'Cette adresse est déja inscrite',
                        showConfirmButton: false,
                        timer: 1500
                        });
                },2000);
             });
        } else {
            alert("non valid")
        }   

        
    }

    verifEmail = (email) => {
        let verifExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return verifExpression.test(email);
    }

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