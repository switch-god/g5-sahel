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

    import '../home/Home.css';

export default class NosActivites extends Component {
    render() {
        return (
           <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1>Nos activités</h1>
                </div>   

                <Layout>
                    <div style={{marginTop : 20+"px", marginBottom : 20+"px"}}>
                        <h4  style={styles.Title} >Défense et Sécurité</h4>
                        <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    </div>

                    {this.renderDefenseSecurite()}

                    <div style={{marginTop : 20+"px", marginBottom : 20+"px"}}>
                        <h4  style={styles.Title} >Gouvernance</h4>
                        <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    </div>
                    {this.renderGouvernance()}

                    <div style={{marginTop : 20+"px", marginBottom : 20+"px"}}>
                        <h4  style={styles.Title} >Infrastructure</h4>
                        <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    </div>
                    {this.renderInfra()}
                    
                    <div style={{marginTop : 20+"px", marginBottom : 20+"px"}}>
                        <h4  style={styles.Title} >Résilience</h4>
                        <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                    </div>
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
                <Col>
                    <Image src={DFS} fluid />
                     <div style={{ marginTop : 20+"px" }}>
                        <h3>Les chefs d’Etat-Major des pays du G5 Sahel rendent plus opérationnelle la Force Conjointe</h3>   
                        <p style={styles.dateBig}>Aujourd’hui à 9:21</p>
                        <p style={styles.descBig}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…</p>
                     </div>
                </Col>

                <Col>
                    
                    <Row>
                        <Col>
                            <Image src={DFS_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>
                    
                    <Row style={{marginTop : 20+"px",marginBottom : 20+"px"}}>
                        <Col>
                            <Image src={DFS_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Image src={DFS_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px"}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>

                </Col>
            </Row>  
        );
    };

    renderGouvernance = () => {

        return (
            <>
            <Row style={{marginTop : 40+"px"}}>
                <Col>
                    <h5 style={styles.gouvernanceTitle}>GENRE</h5>
                    <hr style={{ borderWidth : 5+"px", borderColor : '#BCBCBC' }} />
                </Col>
                
                <Col>   
                    <h5 style={styles.gouvernanceTitle}>CELLULE ANTI REDICALISATION ET L’EXTREMISME VIOLANT</h5>
                    <hr  style={{ borderWidth : 5+"px", borderColor : '#BCBCBC' }} />
                </Col>
            </Row>

            <Row style={{marginTop : 20+"px"}}>
                <Col >
                    <div className="container-for-img">             
                        <Image src={GENRE} fluid style={{resizeMode : 'contain',width : '100%' }}/>
                        <div className="content">
                            <h5 style={{ fontFamily : 'PopiBold',fontWeight : 'bold',padding : 10+"px" }}>Formation sur la prévention de la radicalisation et de  l’extrémisme violent dans l’espace G5 Sahel par le Collège Sahélien de Sécurité</h5>
                            <p style={{ fontFamily : 'PopiSemiBold',paddingLeft : 10+"px" }}>Aujourd’hui à 9:21</p>
                        </div>
                    </div>
                </Col>

                <Col>
                    <Row>
                        <Col md={4}>
                            <Image src={DFS_2} fluid />
                        </Col>
                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>
                    
                    <Row style={{marginTop : 20+"px",marginBottom : 20+"px"}}>
                        <Col md={4}>
                            <Image src={DFS_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                           <p  style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Image src={DFS_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>
                </Col>

            </Row>

            <Row style={{marginTop : 20+"px"}}>
                <Col>
                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px"}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>
                </Col>
                <Col>
                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px"}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>
                </Col>
            </Row>

            </>
        );
    };

    renderInfra = () => {

        return (
            <Row>
                <Col>
                    <Image src={INFRA} fluid />
                    <div style={{marginTop : 20+"px"}}>
                        <h5>Inauguration des Projets socioéconomiques à impact rapide du G5 Sahel</h5>
                        <p style={styles.dateSmall}>Aujourd’hui à 9:21</p>
                        <p style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                    </div>
                </Col>

                <Col>
                    <Image src={INFRA} fluid />
                    <div style={{marginTop : 20+"px"}}>
                        <h5>Inauguration des Projets socioéconomiques à impact rapide du G5 Sahel</h5>
                        <p style={styles.dateSmall}>Aujourd’hui à 9:21</p>
                        <p style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                    </div>
                </Col>

                <Col>
                    <Image src={INFRA} fluid />
                    <div style={{marginTop : 20+"px"}}>
                        <h5>Inauguration des Projets socioéconomiques à impact rapide du G5 Sahel</h5>
                        <p style={styles.dateSmall}>Aujourd’hui à 9:21</p>
                        <p style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
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
                        <Col>
                            <Image src={RESI_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>
                    
                    <Row style={{marginTop : 20+"px",marginBottom : 20+"px"}}>
                        <Col>
                            <Image src={RESI_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Image src={RESI_2} fluid />
                        </Col>

                        <Col className="justify-elements">
                            <h4 style={styles.titleSmall}>“Atlantic Dialogues “ nouveau contrat social est devenu un impératif</h4>
                            <p  style={styles.descSmall}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…</p>
                            <p  style={styles.dateSmall}>19 Septembre 2019</p>
                        </Col>
                    </Row>

                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px"}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>

                </Col>

                <Col>
                    <Image src={RESI} fluid />
                     <div style={{ marginTop : 20+"px" }}>
                        <h3>Les chefs d’Etat-Major des pays du G5 Sahel rendent plus opérationnelle la Force Conjointe</h3>   
                        <p style={styles.dateBig}>Aujourd’hui à 9:21</p>
                        <p style={styles.descBig}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…</p>
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
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    titleSmall : {
        fontSize : 15+"px"
    },
    descSmall : {
        fontSize : 12+"px"
    },
    dateSmall : {
        fontSize : 11+"px",
        color : '#0099CC',
    },
    dateBig : {
        color : '#0099CC',
        fontSize : 14+"px",
    },
    descBig : {
        fontSize : 14+"px",
    },
    gouvernanceTitle : {
        color : '#0099CC',
    },
}