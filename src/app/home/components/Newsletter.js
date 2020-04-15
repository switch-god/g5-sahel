import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';


class Newsletter extends Component {
    
    render() {
        return (
            <>
                <hr style={{ borderColor : '#DEDEDE', marginBottom : 40+"px", borderWidth : 3+"px" }}/>

                <Col style={{backgroundColor : 'black', marginTop : 20+"px", marginBottom: 20+"px", paddingTop : 30+"px", paddingBottom : 25+"px", textAlign : 'center'}} xs={12}>
                    <Row>
                        <Col xs={5}>
                            <h3 style={styles.title}>Subscribe to our newsletter</h3>
                        </Col>
                        
                        <Col/>
                        
                        <Col xs={5}>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <input style={styles.input} placeholder="Name" />
                                    </Col>

                                    <Col>
                                        <input style={styles.input} placeholder="Email" />
                                    </Col>
                                    
                                    <Col>
                                        <Button style={styles.button}>
                                             Subscribe
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>

                </Col>



                <hr style={{ borderColor : '#DEDEDE', marginTop : 40+"px",borderWidth : 3+"px" }}/>
     
            </>
        )
    }
}

const styles = {
    title : {
        fontFamily : 'PopiBold',
        color : 'white',
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
        width : '100%',
        borderWidth : 1+"px",
        borderColor : 'lightGray',

    }
}

export default Newsletter;