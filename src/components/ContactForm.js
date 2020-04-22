import React, { Component } from 'react'

import { Form,Col,Button,Row,Spinner } from 'react-bootstrap';

import './components.css';

import { config } from '../constants/AppConfig';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading : false,
            firstName : '',
            lastName : '',
            email : '',
            sujet : '',
            pays : '',
            message : '',
        }
    };

    render() {
        let { menuEnabled } = this.props;
        let { loading } = this.state;
        return (
            <>
            {
                menuEnabled &&
                <Row>
                <h4  style={styles.Title} >Contact informations</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '95%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                </Row>
            }

            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail"> 
                        <Form.Control className="formInput" type="text" placeholder="First name" value={this.state.firstName} onChange={firstName => this.setState({firstName: firstName.target.value})} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control className="formInput" type="text" placeholder="Last name" value={this.state.lastName} onChange={lastName => this.setState({lastName: lastName.target.value})} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control className="formInput" type="email" placeholder="Email address" value={this.state.email} onChange={email => this.setState({email: email.target.value})}/>
                    </Form.Group>
                </Form.Row>
                
                <Form.Row>
                    {/* <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control className="formInput" type="email" placeholder="Sujet" value={this.state.sujet} onChange={sujet => this.setState({sujet: sujet.target.value})} />
                    </Form.Group> */}

                    <Form.Group as={Col}>
                        <Form.Control 
                            className="formInput" 
                            as="select"
                            value={this.state.sujet} 
                            onChange={sujet => this.setState({sujet: sujet.target.value})} 
                        >
                            <option>Sujet...</option>
                            <option>Renseignement</option>
                            <option>Partenariat</option>
                            <option>Presse</option>
                            <option>Publicité</option>
                            <option>Proposition de service</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control 
                            className="formInput" 
                            as="select"
                            value={this.state.pays} 
                            onChange={pays => this.setState({pays: pays.target.value})} 
                        >
                            <option>Pays...</option>
                            <option>Burkina faso</option>
                            <option>Mali</option>
                            <option>Mauritanie</option>
                            <option>Niger</option>
                            <option>Tchad</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control className="formInput" as="textarea" rows="3" placeholder="Message" value={this.state.message} onChange={message => this.setState({message: message.target.value})} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}></Form.Group>
                    <Button className="buttonContactForm" onClick={() => this.sendForm()}>
                        { loading ? <Spinner  as="span" animation="grow" size="sm" role="status" aria-hidden="true" />  : "Envoyer" }
                    </Button>
                    <Form.Group style={{backgroudColor : 'red'}} as={Col}></Form.Group>
                
                    {/* <Form.Group as={Col}></Form.Group> */}
                </Form.Row>
            </Form>
            
            </>
        );
    }

    sendForm = () => {

        let {
            firstName,
            lastName,
            email,
            sujet,
            pays,
            message,
        } = this.state;

       

        const data = new FormData();
        
        // Verification : 
        if(firstName.length < 4) {
            if(firstName === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Le champ PRÉNOM est vide',
                    showConfirmButton: false,
                    timer: 1500
                });
                return;    
            }
            Swal.fire({
                icon: 'error',
                title: 'Le champ PRENOM doit avoir au moins 4 caractères',
                showConfirmButton: false,
                timer: 1500
            });
            
            return;
        } else if (lastName.length < 4 ) {
            if(lastName === "") {
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
        } else if ( sujet === "" ) {
            Swal.fire({
                icon: 'error',
                title: 'Merci de choisir un sujet',
                showConfirmButton: false,
                timer: 1500
            });
            return;
         
        } else if ( pays === "" || pays === "Pays...") {
            Swal.fire({
                icon: 'error',
                title: 'Merci de choisir un pays',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else if ( message.length < 10 ) {
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
        } else {

            this.setState({
                loading : true,
            });

            
            data.append('first-name', firstName);
            data.append('last-name', lastName);
            data.append('email', email);
            data.append('sujet', sujet);
            data.append('pays', pays);
            data.append('message', message);
    
            axios.post(`${config.url}contact-form-7/v1/contact-forms/4/feedback`, data)
            .then(response => {
                // console.log("Reppp =>",response.data);
                setTimeout(() => {
                    this.setState({
                        loading : false,
                        firstName : '',
                        lastName : '',
                        email : '',
                        sujet : '',
                        pays : '',
                        message : '',
                    });            
                    Swal.fire({
                        icon: 'success',
                        title: 'Merci de nous contacter',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },2000);
                
            })
            .catch(error => {
                // console.log("Erreuuur", JSON.stringify(error));
                this.setState({
                    loading : false,
                });
                Swal.fire({
                    icon: 'error',
                    title: 'Merci de réessayer plus tard',
                    showConfirmButton: false,
                    timer: 1500
                });
            });

        }

    };

    verifEmail = (email) => {
        let verifExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return verifExpression.test(email);
    };
}

const styles = {
    Title : {
        width : '40%',
        color : '#fff',
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
}