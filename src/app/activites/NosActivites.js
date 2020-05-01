import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
    Button,
} from 'react-bootstrap';
import moment from 'moment';

// Redux :
    import { connect } from 'react-redux';
    import { getDefenseSecurite,getGouvernance,getInfrastructure,getResilence } from '../../redux/actions/PostsActions';

// Components : 
    import Layout from '../../components/Layout';
    import {IoIosArrowForward} from 'react-icons/io';
    import Newsletter from '../../components/Newsletter';
    import LottieLoader from '../../components/LottieLoader';
    // import ScrollableAnchor from 'react-scrollable-anchor';

// Image & styling :
    import DFS_2 from '../../assets/images/Activites/ds2.png';
    import THUMB from '../../assets/images/Thumbs/content-placeholder.jpg';
    import GENRE from '../../assets/images/Activites/genre.png'
    // import DFS from '../../assets/images/Activites/ds.png';
    // import INFRA from '../../assets/images/Activites/infra.png';
    // import RESI from '../../assets/images/Activites/resi.png';
    // import RESI_2 from '../../assets/images/Activites/resi2.png';

    import './activites.css';

class NosActivites extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading : true,
        };

        // GET DEFENSE_SECURITE :
        this.props.getDefenseSecurite();

        // GET GOUVERNANCE :
        this.props.getGouvernance();

        // GET INFRASTRUCTURE : 
        this.props.getInfrastructure();

        // Get Resilence :
        this.props.getResilence();
    };

    componentDidMount() {
        setTimeout(() => {
             this.setState({loading : false})
         },2000);
    };


    render() {
        const { loading } = this.state;
        return (
            loading 
            ?
              <LottieLoader />
            :
           <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>Nos activités</h1>
                </div>   

                <Layout xsColumns={10}>

                    {/* <ScrollableAnchor id={'defenseSecurite'}><div></div></ScrollableAnchor> */}
                    {/* TITLE */}
                    <Row id="defenseSecurite" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Défense et Sécurité</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}

                    {this.renderDefenseSecurite()}

                    {/* <ScrollableAnchor id={'gouvernance'}><div></div></ScrollableAnchor> */}
                    {/* TITLE */}
                    <Row id="gouvernance" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Gouvernance</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}

                    {this.renderGouvernance()}

                    {/* <ScrollableAnchor id={'infrastructure'}><div></div></ScrollableAnchor> */}
                    {/* TITLE */}
                    <Row id="infrastructure" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Infrastructure</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}
                    {this.renderInfra()}
                    

                    {/* <ScrollableAnchor id={'resilence'}><div></div></ScrollableAnchor> */}
                    {/* TITLE */}
                    <Row id="resilence" style={{paddingLeft: '15px',paddingRight : '15px'}}>
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
        const { defense_securite } = this.props;

        return (
            <Row>

                
                <Col xs={12} md={12} xl={6}>
                    {
                        defense_securite[0] && defense_securite[0].status == "publish" &&
                        <>
                        <Image src={defense_securite[0].fimg_url != false ? defense_securite[0].fimg_url : THUMB} fluid className="postImageBig" />
                        <div style={{ marginTop : 20+"px" }}>
                            <h3 className="postTitleBig">{defense_securite[0].title.rendered}</h3>   
                            <p  className="dateBig">{moment(defense_securite[0].date).format("DD MMMM YYYY")}</p>
                            <p  className="descBig">
                                {
                                    defense_securite[0].excerpt.rendered.length > 0
                                    ?
                                        defense_securite[0].excerpt.rendered.replace(/<[^>]*>?/gm, '').substr(0,265) + "..."
                                    :
                                        defense_securite[0].content.rendered.replace(/<[^>]*>?/gm, '').substr(0,265) + "..."
                                }
                            </p>
                        </div>
                        </>
                    }
                </Col>

                <Col>

                    <Row>
                        {
                           defense_securite.map((def_sec,index) => 
                                def_sec && def_sec.status == "publish" && index > 0 && index < 4 &&
                                <Row className="smallArticleRow">
                                <Col xs={12} md={4} xl={6} >
                                    <Image src={def_sec.fimg_url != false ? def_sec.fimg_url : THUMB} fluid className="postImageSmall" />
                                </Col>

                                <Col xs={12} md={6} xl={6} className="justify-elements">
                                    <h4 className="titleSmall">{def_sec.title.rendered}</h4>
                                    <p  className="descSmall">
                                        {
                                            def_sec.excerpt.rendered.length > 0
                                            ?
                                            def_sec.excerpt.rendered.replace(/<[^>]*>?/gm, '').substr(0,280) + "..."
                                            :
                                            def_sec.content.rendered.replace(/<[^>]*>?/gm, '').substr(0,280) + "..."
                                        }
                                    </p>
                                    <p  className="dateSmall">{moment(def_sec.date).format("DD MMMM YYYY")}</p>
                                </Col>
                                </Row>
                           )
                        }
                    </Row>

                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>

                </Col>
            </Row>  
        );
    };

    renderGouvernance = () => {
        const { gouvernance } = this.props;

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
                            {
                                gouvernance[0] && gouvernance[0].status == "publish" &&
                                <>
                                <Col xs={12} xl={12}>
                                    <div className="container-for-img">   
                                        <Image src={gouvernance[0].fimg_url !== false ? gouvernance[0].fimg_url : GENRE} fluid className="genreImage" />    
                                        <div className="content">
                                            <h5>{gouvernance[0].title.rendered}</h5>
                                            <p>{moment(gouvernance[0].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                    </div>
                                </Col>
                                </>
                            }
                        </Row>

                        <Row>
                            {
                                gouvernance.map((gouv,index) => 
                                gouv && index > 0 && index < 4 &&
                                <>
                                <Col xs={12} xl={12}>
                                    <Row className="gouvSmallRow">
                                        <Col xl={4}>
                                            <Image src={gouv.fimg_url !== false ? gouv.fimg_url : GENRE} fluid className="gouvImageSmall"  />
                                        </Col>
                                        <Col className="justify-elements-center">
                                            <h4 className="titleSmall">{gouv.title.rendred}</h4>
                                            <p  className="dateSmall">{moment(gouv.date).format("DD MMMM YYYY")}</p>
                                        </Col>
                                    </Row>
                                </Col>
                                </>
                                )
                            }
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
                        
                        <Row>
                            <Col xs={12} xl={12}>   
                                <h5 style={styles.gouvernanceTitle}>CELLULE ANTI REDICALISATION ET L’EXTREMISME VIOLANT</h5>
                                <hr  style={{ borderWidth : 5+"px", borderColor : '#BCBCBC' }} />
                            </Col>
                        </Row>
                        
                        <Row>
                            {
                                gouvernance[0] && gouvernance[0].status == "publish" &&
                                <>
                                <Col xs={12} xl={12}>
                                    <div className="container-for-img">   
                                        <Image src={gouvernance[0].fimg_url !== false ? gouvernance[0].fimg_url : GENRE} fluid className="genreImage" />    
                                        <div className="content">
                                            <h5>{gouvernance[0].title.rendered}</h5>
                                            <p>{moment(gouvernance[0].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                    </div>
                                </Col>
                                </>
                            }
                        </Row>

                        <Row>
                            {
                                gouvernance.map((gouv,index) => 
                                gouv && index > 0 && index < 4 &&
                                <>
                                <Col xs={12} xl={12}>
                                    <Row className="gouvSmallRow">
                                        <Col xl={4}>
                                            <Image src={DFS_2} fluid className="gouvImageSmall"  />
                                        </Col>
                                        <Col className="justify-elements-center">
                                            <h4 className="titleSmall">“Atlantic Dialogues“ nouveau contrat social est devenu un impératif</h4>
                                            <p  className="dateSmall">19 Septembre 2019</p>
                                        </Col>
                                    </Row>
                                </Col>
                                </>
                                )
                            }
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
        const { infrastructure } = this.props;
       
        return (
            <Row>
                {
                    infrastructure.map((infra,index) => 
                    infra && infra.status == "publish" && index < 4 &&
                        <Col xs={12} xl={3}>
                            <Image src={infra.fimg_url} fluid className="infraImage" />
                            <div style={{marginTop : 20+"px"}}>
                                <div className="infraTitleContainer">
                                    <h5 className="infraTitle" >{infra.title.rendered.substr(0,133)}</h5>
                                </div>
                                
                                <div className="infraDateContainer">
                                    <p  className="infraDate">{moment(infra.date).format("DD MMMM YYYY")}</p>
                                </div>

                                <div className="infraDescContainer">
                                    <p  className="infraDesc">
                                        {
                                            infra.excerpt.rendered.length > 0
                                            ?
                                            infra.excerpt.rendered.replace(/<[^>]*>?/gm, '').substr(0,210) + "..."
                                            :
                                            infra.content.rendered.replace(/<[^>]*>?/gm, '').substr(0,210) + "..."
                                        }
                                    </p>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        );
    };
    
    renderResilience = () => {
        const { resilence } = this.props;
        
         {/*
            .status == "publish"
            .fimg_url
            .title.rendered   
            moment(.date).format("DD MMMM YYYY")
            .excerpt.rendered.length > 0
            .excerpt.rendered.replace(/<[^>]*>?/gm, '').substr(0,265) + "..."
            .content.rendered.replace(/<[^>]*>?/gm, '').substr(0,265) + "..."
        */}
        return (
            <Row>
                
                <Col>   
                    {
                     resilence.map((resi,index) => 
                        resi && resi.status == "publish" && index > 0 && index < 4 &&
                        <Row className="resilenceRow">
                            <Col xs={12} xl={6}>
                                <Image src={ resi.fimg_url !== false ? resi.fimg_url : THUMB} fluid className="resiImageSmall" />
                            </Col>

                            <Col xs={12} xl={6} className="resi-justify-elements">
                                <h4 className="resiTitleSmall">{resi.title.rendered}</h4>
                                <p  className="resiDescSmall">
                                    {
                                        resi.excerpt.rendered.length > 0
                                        ?
                                        resi.excerpt.rendered.replace(/<[^>]*>?/gm, '').substr(0,280) + "..."
                                        :
                                        resi.content.rendered.replace(/<[^>]*>?/gm, '').substr(0,280) + "..."
                                    }
                                </p>
                                <p  className="resiDateSmall">{moment(resi.date).format("DD MMMM YYYY")}</p>
                            </Col>
                        </Row>
                     )
                    }
                
                    
                    <Button className="buttonBlue" style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}>
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Button>

                </Col>

                <Col xs={12} xl={6}>
                    {
                        resilence[0] && resilence[0].status == "publish" &&
                        <>
                        <Image src={resilence[0].fimg_url !== false ? resilence[0].fimg_url : THUMB} fluid className="resiImageBig" />
                        <div style={{ marginTop : 20+"px" }}>
                            <h3 className="resiTitleBig">{resilence[0].title.rendered}</h3>   
                            <p  className="resiDateBig">{moment(resilence[0].date).format("DD MMMM YYYY")}</p>
                            <p  className="resiDescBig">
                            {
                                resilence[0].excerpt.rendered.length > 0
                                ?
                                resilence[0].excerpt.rendered.replace(/<[^>]*>?/gm, '').substr(0,265) + "..."
                                :
                                resilence[0].content.rendered.replace(/<[^>]*>?/gm, '').substr(0,265) + "..."
                            }
                            </p>
                        </div>
                        </>
                    }
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


const mapStateToProps = state => ({
    defense_securite : state.postsR.defense_securite,
    gouvernance : state.postsR.gouvernance,
    infrastructure : state.postsR.infrastructure,
    resilence : state.postsR.resilence,
});

export default connect(mapStateToProps,{ getDefenseSecurite,getGouvernance,getInfrastructure,getResilence})(NosActivites);

