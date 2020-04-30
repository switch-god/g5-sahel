import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
    Button,
    Form,
} from 'react-bootstrap';

// Redux :
import { connect } from 'react-redux';
import { getPresentationBloc1 } from '../../redux/actions/PostsActions';

import Newsletter from '../../components/Newsletter';
import ContactForm from '../../components/ContactForm';
import Map from '../../components/Map';

import Image1 from '../../assets/images/Home/3.png';
import Image2 from '../../assets/images/Presentation/g5_sahel_map.jpg';

import './presentation.css';

class Presentation extends Component {

    constructor(props) {
        super(props);

        this.props.getPresentationBloc1();
    }
    
    render() {
       console.log(this.props.presentation_bloc_1);
        const { presentation_bloc_1 } = this.props;
        return (
            <Container fluid>
                <Row>
                    <Col />
                    
                    <Col md={10}>
                      
                        {this.renderTitle()}
                        
                        {this.renderBloc1()}
                        
                        <hr className="presentationDivider" />
                        
                        {this.renderBloc2()}

                        {this.renderFullWidthTextBloc()}

                        {this.renderDescBloc()}

                        {/* {this.renderObjBloc()} */}

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
               <h6 style={{fontFamily : 'Poppins Light'}}>Présentation du</h6>
               <h1 style={{fontFamily : 'Poppins SemiBold'}}>G5 Sahel</h1>
               <hr style={{borderColor : 'black',borderWidth : 4+"px"}}/>
           </div>
       );

       renderBloc1 = () => {
       
        return(
            <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
                <Col xs={12} xl={6}>
                    <Image src={Image1} fluid className="presentationImages" />
                </Col>

                <Col xs={12} xl={6} className="justify-elements" md={6}>
                    <div>
                        {/* <h4 className="presentationTitle">La Conférence des Chefs d’Etat</h4>
                        <p className="presentationDate">15 octobre 2015</p> */}
                        <p className="presentationDesc">
                            Il est créé le 16 Février 2014 à Nouakchott en République Islamique de Mauritanie, il s’est doté d’une Convention signée le 19 Décembre 2014 et a son siège en Mauritanie.
                        </p>
                        <p className="presentationDesc">
                            Le G5 Sahel a pour objet : 
                            <ul className="objetList">
                                <li className="objetListItem">Garantir des conditions de développement et de sécurité dans l’espace des pays membres</li>
                                <li className="objetListItem">Offrir un cadre stratégique d’intervention permettant d’améliorer les conditions de vie des populations</li>
                                <li className="objetListItem">Allier le développement et la sécurité, soutenus par la démocratie et la bonne gouvernance dans un cadre de coopération régionale et internationale mutuellement bénéfique</li>
                                <li className="objetListItem">Promouvoir un développement régional inclusif et durable</li>
                            </ul>
                        </p>

                    </div>
                </Col>
            
            </Row>
        );
        }      

       renderBloc2 = () => (
        <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>

                <Col xs={12} xl={6} className="justify-elements">
                    <div>
                    <p className="presentationDesc">
                        Le G 5 Sahel contribue à la mise en œuvre des actions de sécurité et de développement dans les Etats membres grâce notamment : 
                        <ul className="objetList">
                            <li className="objetListItem">Au renforcement de la paix et la sécurité dans l’espace du G 5 Sahel</li>
                            <li className="objetListItem">Au développement des infrastructures de transport, d’hydraulique, d’énergie et de télécommunications</li>
                            <li className="objetListItem">A la création des conditions d’une meilleure gouvernance dans les pays membres </li>
                            <li className="objetListItem">Au renforcement des capacités de résilience des populations en garantissant durablement la sécurité alimentaire, le développement humain et le pastoralisme</li>
                        </ul>
                    </p>                    
                    </div>
                </Col>
            
                <Col xs={12} xl={6}>
                    <Image src={Image2} fluid className="presentationImages" />
                </Col>
        </Row>
       );

       renderFullWidthTextBloc = () => (
        <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
            
            <Col xs={12} xl={12}>
                    <p className="presentationDesc">
                        Le Secrétariat Permanent du G5 Sahel est l’organe chargé d’exécuter les décisions du Conseil des Ministres. Il est placé sous l’autorité du Conseil des Ministres. Il s’agit d’une structure très légère, souple efficace et non budgétaire ne comprenant pas plus d’une vingtaine de personnes au total.
                    </p>
                    <p className="presentationDesc">
                        L’un des principes directeurs est le faire-faire, basé essentiellement sur les Comités Nationaux de Coordination des Actions du G 5 Sahel.
                    </p>
                    
                    <p className="presentationDesc">
                        Chaque pays membre met en place un Comité National de Coordination composé d’experts des secteurs d’intervention du cadre de référence. Les comités nationaux de coordination sont les répondants du Secrétariat permanent. Ils sont placés sous la tutelle des Ministres en charge du Développement. Le président du Comité National de Coordination est le point focal du G 5  Sahel.
                    </p>

                    <p className="presentationDesc">
                    La particularité de cette convention est la création d’un Comité de défense et de sécurité qui est l’organe qui regroupe les Chefs d’Etat- major général des armées  et les responsables dument mandatés pour les questions de sécurité par les Etats membres.
                    </p>

            </Col>

            <Col xs={12} xl={12} className="justify-elements">
               <Row>
                    <Col xs={12} xl={12}>
                    <p className="presentationDesc">
                        Les organes du G 5 Sahel sont : 
                        <ul className="objetList">
                            <li className="objetListItem">La Conférence des Chefs d’Etat</li>
                            <li className="objetListItem">Le Conseil des Ministres</li>
                            <li className="objetListItem">Le Secrétariat Permanent</li>
                            <li className="objetListItem">Le Comité de défense et de sécurité</li>
                            <li className="objetListItem">Les comités Nationaux de Coordination des Actions du G 5 Sahel</li>
                        </ul>
                    </p>                    
                    </Col>
               </Row>
            </Col>
            
        </Row>
       );

       renderDescBloc = () => (
           <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
               <Col />
                
                <Col md={10}>
                    <div className="descriptionContainer" >
                        <p style={{padding : 60+"px",color : '#BCBCBC',fontFamily : 'Poppins Bold Italic'}}>
                            En effet, poussées par un véritable élan de solidarité et un désir commun de perpétuer, de renforcer, et d’amplifier les liens forts tissés par l’histoire, la géographie et la culture et devant la recrudescence de l’insécurité consécutive notamment à la prolifération des actes terroristes et du crime organisé transfrontalier, soucieux de trouver plus rapidement des solutions afin de booster le développement de la région du Sahel, cinq chefs d’États ont décidé courageusement de s’unir au sein d’une organisation ayant pour objectif principal la coordination des politiques et stratégies de Développement et de Sécurité au bénéfice de leurs populations.
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
                        <Col xs={12}>
                            <div>
                                <h3 style={{fontFamily : 'Poppins SemiBold'}}> Le G5 Sahel a pour objet : </h3>
                                <p style={{fontSize : 13+"px",fontFamily : 'Poppins Light'}}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumto sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                                </p>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <div>
                                <h3  style={{fontFamily : 'Poppins SemiBold'}}> Le G5 Sahel a pour objet : </h3>
                                <p style={{fontSize : 13+"px",fontFamily : 'Poppins Light'}}>
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
                <Col xl={2} />
                <Col xl={4}>
                    <div>
                        <h3 style={{fontSize : 22+"px",color : '#0099CC',fontFamily : 'Poppins SemiBold'}}>le Dispositif de pilotage du G5 Sahel</h3>
                        <ul className="customBulletList" style={{fontFamily : 'Poppins Medium'}}>
                            <li>La Conférence des Chefs d’Etat</li>
                            <li>Le Conseil des Ministres</li>
                            <li>Le Secrétariat Permanent du G5 Sahel</li>
                        </ul>
                    </div>
                </Col>

                <Col xl={4}>
                    <div>
                        <h3 style={{fontSize : 22+"px",color : '#0099CC',fontFamily : 'Poppins SemiBold'}}>Les organes d’appui</h3>
                        <ul className="customBulletList" style={{fontFamily : 'Poppins Medium'}}>
                            <li type="square">La réunion des Experts</li>
                            <li type="square">Les Comités Nationaux de Coordination</li>
                            <li type="square">Comité de Défense et de Sécurité</li>
                        </ul>
                    </div>
                </Col>

                <Col xl={2} />
                
                {/* <Col md={4}>
                    <div>
                        <h3 style={{fontSize : 22+"px",color : '#0099CC',fontFamily : 'Poppins SemiBold'}}>Le Secrétaire permenant</h3>
                        <ul className="customBulletList" style={{fontFamily : 'Poppins Medium'}}>
                            <li type="square">La réunion des Experts</li>
                            <li type="square">Les Comités Nationaux de Coordination</li>
                            <li type="square">Comité de Défense et de Sécurité</li>
                        </ul>
                    </div>
                </Col> */}
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



const mapStateToProps = state => ({
    presentation_bloc_1 : state.postsR.presentation_bloc_1,
});

export default connect(mapStateToProps,{ getPresentationBloc1, })(Presentation);


