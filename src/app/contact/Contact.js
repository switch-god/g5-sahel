import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
} from 'react-bootstrap';

import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';
import ContactForm from '../../components/ContactForm';

// Images & styling :
    import MAP_IMG from '../../assets/images/Contact/mapBig.png';
    import './contact.css';

export default class Contact extends Component {
    render() {
        return (
            <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>Contact G5 Sahel</h1>
                </div>   

                <Layout>
                    {this.renderContactInfos()}   

                    <hr style={{marginTop : 30+"px", marginBottom :30+"px"}} />

                    <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                        <h1 style={{fontFamily : 'Poppins SemiBold'}}>Contactez Nous</h1>
                    </div>  
                </Layout>

                <Layout columns={6}>
                   {this.renderContactForm()}

                   {this.renderMap()}
                </Layout>


                <Layout>
                    <div style={{marginTop : 80+"px", marginBottom : 40+"px"}}>
                        <Newsletter />
                    </div>
                </Layout>
                
            </>
        );
    }

    renderContactInfos = () => {

        return (
            <>
            <Row style={{marginTop : 20+"px", marginBottom : 20+"px"}}>
                <Col>
                    <h4  style={styles.Title} >Burkina faso</h4>
                    <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    <div style={{marginLeft : 30+"px"}}>
                        <p style={styles.grayText}>Kohoun Souako Norbert</p>
                        <p style={styles.grayText}>Coordonnateur Point Focal</p>
                        <p>+226 76 63 40 85</p>
                        <p style={styles.blueText}>cnc.bf@g5sahel.org</p>
                        <p style={styles.blueText}>kohouns@yahoo.fr</p>
                    </div>
                </Col>
                <Col>
                    <h4  style={styles.Title} >Mali</h4>
                    <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    <div style={{marginLeft : 30+"px"}}>
                        <p style={styles.grayText}>Point focal</p>
                        <p style={styles.grayText}>Chérif Hamidou BA</p>
                        <p>+223 76 05 14 52</p>
                        <p style={styles.blueText}>cnc.mali@g5sahel.org</p>
                        <p style={styles.blueText}>ba_cherifhamidou@yahoo.fr</p>
                    </div>
                </Col>
                <Col>
                    <h4  style={styles.Title} >Mauritanie</h4>
                    <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    <div style={{marginLeft : 30+"px"}}>
                        <p style={styles.grayText}>Point focal</p>
                        <p style={styles.grayText}>Mahfoudh Ahmedou</p>
                        <p>+222 46 03 00 00</p>
                        <p style={styles.blueText}>cnc.rim@g5sahel.org</p>
                        <p style={styles.blueText}>mahfoud.ouldahmedou@gmail.com </p>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop : 20+"px", marginBottom : 20+"px"}}>
                <Col>
                    <h4  style={styles.Title} >Niger</h4>
                    <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    <div style={{marginLeft : 30+"px"}}>
                        <p style={styles.grayText}>Point focal</p>
                        <p style={styles.grayText}>Mamane Seidou</p>
                        <p>+227 98 55 31 21</p>
                        <p style={styles.blueText}>cnc.niger@g5sahel.org</p>
                        <p style={styles.blueText}>mamane_saidou@yahoo.fr </p>
                    </div>
                </Col>
                <Col>
                    <h4  style={styles.Title} >Tchad</h4>
                    <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    <div style={{marginLeft : 30+"px"}}>
                        <p style={styles.grayText}>Point focal</p>
                        <p style={styles.grayText}>Enoch Djondang</p>
                        <p>+235 66 25 30 71</p>
                        <p style={styles.blueText}>cnc.tchad@g5sahel.org</p>
                        <p style={styles.blueText}>enochdjo@yahoo.fr</p>
                    </div>
                </Col>
                <Col />
            </Row>

            
            </>
        );
    };

    renderContactForm = () => {

        return (
           <div style={{padding: 100+"px", backgroundColor : '#F9F9F9'}}>
               <ContactForm menuEnabled={false} />
           </div>
        );
    };

    renderMap = () => {

        return (
            <>
            <div style={{marginTop : 60+"px", marginBottom : 60+"px"}} class="separator"> <h2 style={styles.mapTitle}> MAP </h2> </div>
            <Image src={MAP_IMG} fluid />
            </>
        );
    }
}

const styles = {
    Title : {
        width : '40%',
        color : '#fff',
        fontFamily : 'Poppins SemiBold',
        backgroundColor : 'black',
        paddingTop : 15+"px",
        paddingBottom: 15+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    grayText : {
        fontSize : 16+"px",
        color : '#666666',
        fontFamily : 'Poppins Light',
    },
    blueText : {
        fontSize : 16+"px",
        color : '#0099CC',
        fontFamily : 'Poppins Light',
    },
    mapTitle : {
        marginLeft : 40+"px",
        marginRight : 40+"px",
        fontFamily : 'Poppins SemiBold'
    }
}