import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
    Button,
} from 'react-bootstrap';

// Components : 
    import Layout from '../../components/Layout';
    import {IoIosArrowForward} from 'react-icons/io';
    import Newsletter from '../../components/Newsletter';

// Image & styling :
    import DFS from '../../assets/images/Activites/ds.png';
    import DFS_2 from '../../assets/images/Activites/ds2.png';
    import GENRE from '../../assets/images/Activites/genre.png'
    import INFRA from '../../assets/images/Activites/infra.png';
    import RESI from '../../assets/images/Activites/resi.png';
    import RESI_2 from '../../assets/images/Activites/resi2.png';

    import './activites.css';

export default class NosActivites extends Component {
    render() {
        return (
           <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>Nos activités</h1>
                </div>   

                <Layout xsColumns={10}>
               
                    {/* TITLE */}
                    <Row style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Défense et Sécurité</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}

                    {this.renderDefenseSecurite()}

                    {/* TITLE */}
                    <Row style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Gouvernance</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}

                    {this.renderGouvernance()}

                    {/* TITLE */}
                    <Row style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Infrastructure</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}
                    {this.renderInfra()}
                    
                
                    {/* TITLE */}
                    <Row style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Résilience</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}
                    {this.renderResilience()}

                    <div style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                        <Newsletter />
                    </div>
                </Layout>

                



           </>
        )
    }

    renderDefenseSecurite = () => {

        return (
            <Row>
                <Col xs={12} md={12} xl={6}>
                    <Image src={DFS} fluid className="postImageBig" />
                     <div style={{ marginTop : 20+"px" }}>
                        <h3 className="postTitleBig">Les chefs d’Etat-Major des pays du G5 Sahel rendent plus opérationnelle la Force Conjointe</h3>   
                        <p  className="dateBig">Aujourd’hui à 9:21</p>
                        <p  className="descBig">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…</p>
                     </div>
                </Col>

                <Col>
                    <Row>
                        <Col xs={12} md={4} xl={6} >
                            <Image src={DFS_2} fluid className="postImageSmall" />
                        </Col>

                        <Col xs={12} md={6} xl={6} className="justify-elements">
                            <h4 className="titleSmall">“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  className="dateSmall">19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '10px', marginBottom: '10px'}}>
                        <Col xs={12} md={4} xl={6}>
                            <Image src={DFS_2} fluid className="postImageSmall" />
                        </Col>

                        <Col xs={12} md={6} xl={6} className="justify-elements">
                            <h4 className="titleSmall">“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  className="dateSmall">19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={4} xl={6}>
                            <Image src={DFS_2} fluid className="postImageSmall" />
                        </Col>

                        <Col xs={12} md={6} xl={6} className="justify-elements">
                            <h4 className="titleSmall">“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  className="dateSmall">19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>

                </Col>
            </Row>  
        );
    };

    renderGouvernance = () => {

        return (
            <Row>

            <Col xl={6}>
                <Row style={{marginTop : 20+"px"}}>
                    <Col xs={12} xl={12}>
                        
                        <Row>
                            <Col xs={12} xl={12}>   
                                <h5 style={styles.gouvernanceTitle}>GENRE</h5>
                                <hr  style={{ borderWidth : 5+"px", borderColor : '#BCBCBC' }} />
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs={12} xl={12}>
                            <div className="container-for-img">             
                                <Image src={GENRE} fluid className="genreImage" />
                                <div className="content">
                                    <h5>Formation sur la prévention de la radicalisation et de  l’extrémisme violent dans l’espace G5 Sahel par le Collège Sahélien de Sécurité</h5>
                                    <p>Aujourd’hui à 9:21</p>
                                </div>
                            </div>
                            </Col>
                        </Row>

                        <Row style={{marginTop :"15px",marginBottom :"15px"}}>
                            <Col xs={12} xl={12}>
                                <Button className="buttonBlue">
                                    VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Col>

            <Col xl={6}>
                <Row style={{marginTop : 20+"px"}}>
                    <Col xs={12} xl={12}>   
                        <h5 style={styles.gouvernanceTitle}>CELLULE ANTI REDICALISATION ET L’EXTREMISME VIOLANT</h5>
                        <hr  style={{ borderWidth : 5+"px", borderColor : '#BCBCBC' }} />
                    </Col>

                    <Col>
                        <Row>
                            <Col xl={4}>
                                <Image src={DFS_2} fluid className="postImageSmall"  />
                            </Col>
                            <Col className="justify-elements">
                                <h4 className="titleSmall">“Atlantic Dialogues“ nouveau contrat social est devenu un impératif</h4>
                                <p  className="dateSmall">19 Septembre 2019</p>
                            </Col>
                        </Row>
                        
                        <Row style={{marginTop : 20+"px",marginBottom : 20+"px"}}>
                            <Col xl={4}>
                                <Image src={DFS_2} fluid className="postImageSmall" />
                            </Col>

                            <Col className="justify-elements">
                                <h4 className="titleSmall">“Atlantic Dialogues“ nouveau contrat social est devenu un impératif</h4>
                                <p  className="dateSmall">19 Septembre 2019</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4}>
                                <Image src={DFS_2} fluid className="postImageSmall" />
                            </Col>

                            <Col className="justify-elements">
                                <h4 className="titleSmall">“Atlantic Dialogues“ nouveau contrat social est devenu un impératif</h4>
                                <p  className="dateSmall">19 Septembre 2019</p>
                            </Col>
                        </Row>

                        <Row style={{marginTop :"15px",marginBottom :"15px"}}>
                            <Col xs={12} xl={12}>
                                <Button className="buttonBlue">
                                    VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

            </Row>
        );
    };

    renderInfra = () => {

        return (
            <Row>
                <Col>
                    <Image src={INFRA} fluid />
                    <div style={{marginTop : 20+"px"}}>
                        <h5 className="titleBig" >Inauguration des Projets socioéconomiques à impact rapide du G5 Sahel</h5>
                        <p  className="dateSmall">Aujourd’hui à 9:21</p>
                        <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                    </div>
                </Col>
                <Col>
                    <Image src={INFRA} fluid />
                    <div style={{marginTop : 20+"px"}}>
                        <h5 className="titleBig" >Inauguration des Projets socioéconomiques à impact rapide du G5 Sahel</h5>
                        <p  className="dateSmall">Aujourd’hui à 9:21</p>
                        <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                    </div>
                </Col>
                <Col>
                    <Image src={INFRA} fluid />
                    <div style={{marginTop : 20+"px"}}>
                        <h5 className="titleBig" >Inauguration des Projets socioéconomiques à impact rapide du G5 Sahel</h5>
                        <p  className="dateSmall">Aujourd’hui à 9:21</p>
                        <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                    </div>
                </Col>

             


            </Row>
        );
    };
    
    renderResilience = () => {

        return (
            <Row>

                <Col>
                    <Row>
                        <Col xs={12} xl={6}>
                            <Image src={RESI_2} fluid className="postImageSmall" />
                        </Col>

                        <Col xs={12} xl={6} className="justify-elements">
                            <h4 className="titleSmall">“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  className="dateSmall">19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '10px', marginBottom: '10px'}}>
                        <Col xs={12} xl={6}>
                            <Image src={RESI_2} fluid className="postImageSmall" />
                        </Col>

                        <Col xs={12} xl={6} className="justify-elements">
                            <h4 className="titleSmall">“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  className="dateSmall">19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} xl={6}>
                            <Image src={RESI_2} fluid className="postImageSmall" />
                        </Col>

                        <Col xs={12} xl={6} className="justify-elements">
                            <h4 className="titleSmall">“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  className="descSmall">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  className="dateSmall">19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>

                </Col>

                <Col xs={12} xl={6}>
                    <Image src={RESI} fluid className="postImageBig" />
                     <div style={{ marginTop : 20+"px" }}>
                        <h3 className="postTitleBig">Les chefs d’Etat-Major des pays du G5 Sahel rendent plus opérationnelle la Force Conjointe</h3>   
                        <p  className="dateBig">Aujourd’hui à 9:21</p>
                        <p  className="descBig">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…</p>
                     </div>
                </Col>
            </Row>
        );
    };
}

const styles = {
    Title : {
        width : '20%',
        color : '#fff',
        fontFamily : 'Poppins Bold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    postTitleBig : {
        fontFamily : 'Poppins Bold',
    },
    titleMedium : {
        fontSize : 17+"px",
        fontFamily : 'Poppins Bold',
    },
    titleSmall : {
        fontSize : 15+"px",
        fontFamily : 'Poppins Bold',
    },
    descSmall : {
        fontSize : 12+"px",
        fontFamily : 'Poppins Light',
    },
    dateSmall : {
        fontSize : 11+"px",
        color : '#0099CC',
        fontFamily : 'Poppins Light',
    },
    dateBig : {
        color : '#0099CC',
        fontSize : 14+"px",
        fontFamily : 'Poppins Light'
    },
    descBig : {
        fontSize : 14+"px",
        fontFamily : 'Poppins Light'
    },
    gouvernanceTitle : {
        color : '#0099CC',
        fontFamily : 'Poppins Bold',
    },
}