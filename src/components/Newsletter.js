import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';

import {
    Grid
} from '@material-ui/core';

import '../app/home/Home.css';


class Newsletter extends Component {
    
    render() {
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
                                    <input style={styles.input} className="responsiveInputForm" placeholder="Name" />
                                </Col>

                                <Col>
                                    <input style={styles.input} className="responsiveInputForm" placeholder="Email" />
                                </Col>
                                
                                <Col>
                                    <Button className="buttonBlack" >
                                        Subscribe
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