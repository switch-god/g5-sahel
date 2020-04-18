import React, { Component } from 'react'

import { Form,Col,Button,Row } from 'react-bootstrap';

export default class ContactForm extends Component {
    render() {
        return (
            <>
            <Row>
              <h4  style={styles.Title} >Contact informations</h4>
              <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '95%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
            </Row>

            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail"> 
                        <Form.Control type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value="...">
                            <option>Subject...</option>
                            <option>Subject 1</option>
                            <option>Subject 2</option>
                            <option>Subject 3</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Message" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Control as="textarea" rows="3" placeholder="Message" /> */}
                    </Form.Group>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Control as="textarea" rows="3" placeholder="Message" /> */}
                    </Form.Group>
                    <Button variant="primary">
                        Envoyer
                    </Button>
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