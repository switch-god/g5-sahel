import React, { Component } from 'react'
import './presentation.css';

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

// Redux :
import { connect } from 'react-redux';
import axios from 'axios';

import {
    Link
} from 'react-router-dom';

import {config, DISPOSITIF_DE_PILOTAGE_G5,ORGANES_APPUI} from '../../constants/AppConfig';

import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';
import ContactForm from '../../components/ContactForm';
import LottieLoader from '../../components/LottieLoader';
import Map from '../../components/Map';

import Image1 from '../../assets/images/Home/3.png';
import Image2 from '../../assets/images/Presentation/g5_sahel_map.jpg';


class Presentation extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading : true,
            dispositifG5: [],
            organes: [],
        };
    };
    
    componentDidMount() {
        document.title = `${config.siteName} - Présentation`;
        this.getListBloc();
    //     setTimeout(() => {
    //          this.setState({loading : false})
    //      },2000);
    };

    render() {
        const { 
            loading,
         } = this.state;

        return (
            loading 
            ?
            <LottieLoader bottom/>
            :
            <Container fluid>
                
                <Layout xs={12}>
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
                </Layout>
            </Container>
        )
    };

    /* FUNCTIONS  */
    getListBloc = () => {

        axios.get(`${config.url}wp/v2/posts?categories=${DISPOSITIF_DE_PILOTAGE_G5}&per_page=3`)
        .then(async response => {
            
            await this.setState({
                dispositifG5: response.data
            });
        })
        .catch(error => {
          // console.log("erreur axios getActualitesPaysG5/ActualitesActions",error);
        });

        axios.get(`${config.url}wp/v2/posts?categories=${ORGANES_APPUI}&per_page=3`)
        .then(async response => {
           
            await this.setState({
                organes: response.data,
                loading: false,
            });
        })
        .catch(error => {
          // console.log("erreur axios getActualitesPaysG5/ActualitesActions",error);
        });
    };    
    /* FUNCTIONS  */

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
                
                <Col xs={12} md={12} xl={6}>
                    <Image src={Image1} alt="Présentation G5 SAHEL" fluid className="presentationImages" />
                </Col>

                <Col xs={12} md={12} xl={6} className="justify-elements">
                    <div>
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

                <Col xs={12} md={12} xl={6} className="justify-elements">
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
            
                <Col xs={12} md={12} xl={6}>
                    <Image src={Image2} alt={"Présentation G5 SAHEL"} fluid className="presentationImages" />
                </Col>
        </Row>
       );

       renderFullWidthTextBloc = () => (
        <Row style={{marginTop : 40+"px",marginBottom : 40+"px"}}>
            
            <Col xs={12} md={12} xl={12}>
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

            <Col xs={12} md={12} xl={12} className="justify-elements">
               <Row>
                    <Col xs={12} md={12} xl={12}>
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
                
                <Col xs={10} md={10} xl={10}>
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
                
                <Col xs={12} md={12} xl={8}>
                    <Row>
                        <Col xs={12} md={6}>
                            <div>
                                <h3 style={{fontFamily : 'Poppins SemiBold'}}> Le G5 Sahel a pour objet : </h3>
                                <p style={{fontSize : 13+"px",fontFamily : 'Poppins Light'}}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumto sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                                </p>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
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

        renderListBloc = (dispositifG5,organes) => {
            return(
                <Row style={{marginTop : 40+"px",marginBottom : 40+"px",}}>
                    <Col  xl={2} />
                    <Col xs={12} md={6} xl={4}>
                        <div>
                            {/* <h3 style={{fontSize : 22+"px",color : '#0099CC',fontFamily : 'Poppins SemiBold'}}>le Dispositif de pilotage du G5 Sahel</h3> */}
                            {this.state.dispositifG5[0] &&
                            <h3 style={{fontSize : 22+"px",color : '#0099CC',fontFamily : 'Poppins SemiBold'}}>
                                {this.state.dispositifG5[0].fcategory[0].category_name}
                            </h3>
                            }
                            <ul className="customBulletList" style={{fontFamily : 'Poppins Medium'}}>
                                {
                                    this.state.dispositifG5.map((d,index) =>
                                        // <li key={index}>{La Conférence des Chefs d’Etat}</li>
                                        <Link 
                                            to={{
                                                pathname : `/article/${d.slug}`,
                                            }}  
                                            className="linkListBloc"
                                            // style={{ textDecoration: 'none',color:'black' }}
                                        >
                                        <li key={index}dangerouslySetInnerHTML={{__html: d.title.rendered }}></li>
                                        </Link>
                                    )
                                }
                                {/* <li>Le Conseil des Ministres</li>
                                <li>Le Secrétariat Permanent du G5 Sahel</li> */}
                            </ul>
                        </div>
                    </Col>
    
                    <Col xs={12} md={6} xl={4}>
                        <div>
                            {/* <h3 style={{fontSize : 22+"px",color : '#0099CC',fontFamily : 'Poppins SemiBold'}}>Les organes d’appui</h3> */}
                            {this.state.organes[0] &&
                            <h3 style={{fontSize : 22+"px",color : '#0099CC',fontFamily : 'Poppins SemiBold'}}>
                                {this.state.organes[0].fcategory[0].category_name}    
                            </h3>
                            }
                            <ul className="customBulletList" style={{fontFamily : 'Poppins Medium'}}>
                                {
                                    this.state.organes.map((o,index) => 
                                    <Link 
                                        to={{
                                            pathname : `/article/${o.slug}`,
                                        }}  
                                        className="linkListBloc"
                                    >
                                    <li key={index}dangerouslySetInnerHTML={{__html: o.title.rendered }}></li>
                                    </Link>
                                    )
                                }
                                {/* <li type="square">Les Comités Nationaux de Coordination</li> */}
                                {/* <li type="square">Comité de Défense et de Sécurité</li> */}
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
        }

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
    
});

export default connect(mapStateToProps,{ })(Presentation);


