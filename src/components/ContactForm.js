import React, { Component } from 'react'

import { Form,Col,Button,Row } from 'react-bootstrap';

import './components.css';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        let { menuEnabled } = this.props;

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
                        <Form.Control className="formInput" type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control className="formInput" type="text" placeholder="Last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control className="formInput" type="email" placeholder="Email address" />
                    </Form.Group>
                </Form.Row>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control className="formInput" type="email" placeholder="Sujet" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control className="formInput" as="select" value="...">
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
                        <Form.Control className="formInput" as="textarea" rows="3" placeholder="Message" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group style={{backgroudColor : 'red'}} as={Col}></Form.Group>
                    <Button className="buttonContactForm">Envoyer</Button>
                    <Form.Group style={{backgroudColor : 'red'}} as={Col}></Form.Group>
                
                    {/* <Form.Group as={Col}></Form.Group> */}
                </Form.Row>
            </Form>
            </>
        );
    }
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