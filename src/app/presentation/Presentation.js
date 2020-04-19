import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
    Button,
    Form,
} from 'react-bootstrap';

import Newsletter from '../../components/Newsletter';
import ContactForm from '../../components/ContactForm';
import Map from '../../components/Map';

import Image1 from '../../assets/images/Home/3.png';

import './presentation.css';

export default class Presentation extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col />
                    
                    <Col md={10}>
                        {this.renderTitle()}
                        
                        {this.renderBloc1()}

                        {this.renderBloc2()}

                        {this.renderDescBloc()}

                        {this.renderObjBloc()}

                        {this.renderListBloc()}

                        <Newsletter />

                        {this.renderFormAndMap()}
                    </Col>
                   
                    <Col />
                </Row>
            </Container>
        )
    }

    /* RENDERING METHODS */
       renderTitle = () => (
           <div style={{marginTop : 20+"px",marginBottom : 20+"px"}}>
               <h6>Présentation du</h6>
               <h1>G5 Sahel</h1>
               <hr style={{borderColor : 'black',borderWidth : 4+"px"}}/>
           </div>
       );

       renderBloc1 = () => (
            <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
                <Col md={6}>
                    <Image src={Image1} fluid />
                </Col>

                <Col md={6}>
                    <div>
                        <h2>La Conférence des Chefs d’Etat</h2>
                        <p style={{color: '#0099CC'}}>15 octobre 2015</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet… Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…</p>
                    </div>
                </Col>
            
            </Row>
       );

       renderBloc2 = () => (
            <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
                <Col md={6}>
                    <div>
                        <h2>La Conférence des Chefs d’Etat</h2>
                        <p style={{color: '#0099CC'}}>15 octobre 2015</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet… Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…
                        </p>
                    </div>
                </Col>

                <Col md={6}>
                    <Image src={Image1} fluid />
                </Col>
            </Row>
       );

       renderDescBloc = () => (
           <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
               <Col />
                
                <Col md={10}>
                    <div className="descriptionContainer" >
                        <p style={{padding : 60+"px",color : '#BCBCBC'}}>
                            Entre 1999 et 2011, M. Sidikou a travaillé pour la Banque mondiale à Washington, DC,  pour l’Unicef (Fonds des Nations unies pour l’enfance) au Nigeria, l’Afghanistan, l’Irak, la Jordanie  et pour Save the Children - Royaume-Uni au Rwanda et en République démocratique du Congo.
                        </p>
                    </div>
                </Col>

               <Col />
           </Row>
       );

       renderObjBloc = () => (
           <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
               <Col />
                
                <Col md={8}>
                    <Row>
                        <Col>
                            <div>
                                <h3> Le G5 Sahel a pour objet : </h3>
                                <p style={{fontSize : 13+"px"}}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumto sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div>
                                <h3> Le G5 Sahel a pour objet : </h3>
                                <p style={{fontSize : 13+"px"}}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumto sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>

               <Col />
           </Row>
       );

        renderListBloc = () => (
            <Row style={{marginTop : 40+"px",marginBottom : 40+"px",}}>
                <Col md={4}>
                    <div>
                        <h3 style={{fontSize : 22+"px",color : '#0099CC'}}>le Dispositif de pilotage du G5 Sahel</h3>
                        <ul>
                            <li>La Conférence des Chefs d’Etat</li>
                            <li>Le Conseil des Ministres</li>
                            <li>Le Secrétariat Permanent du G5 Sahel</li>
                        </ul>
                    </div>
                </Col>

                <Col md={4}>
                    <div>
                        <h3 style={{fontSize : 22+"px",color : '#0099CC'}}>Les organes d’appui</h3>
                        <ul>
                            <li type="square">La réunion des Experts</li>
                            <li type="square">Les Comités Nationaux de Coordination</li>
                            <li type="square">Comité de Défense et de Sécurité</li>
                        </ul>
                    </div>
                </Col>
                
                <Col md={4}>
                    <div>
                        <h3 style={{fontSize : 22+"px",color : '#0099CC'}}>Le Secrétaire permenant</h3>
                        <ul>
                            <li type="square">La réunion des Experts</li>
                            <li type="square">Les Comités Nationaux de Coordination</li>
                            <li type="square">Comité de Défense et de Sécurité</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        );

        renderFormAndMap = () => (
            <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
                <Col md={6}>
                    <ContactForm menuEnabled={true} />
                </Col>

                <Col md={6}>
                   <Map />
                </Col>

            
            </Row>
        );

    /*./ RENDERING METHODS */
}
