import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
    Button,
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

// Redux :
    import { connect } from 'react-redux';
    import { getDefenseSecurite,getGouvernance,getInfrastructure,getResilence } from '../../redux/actions/PostsActions';

// Components : 
    import Layout from '../../components/Layout';
    import {IoIosArrowForward} from 'react-icons/io';
    import Newsletter from '../../components/Newsletter';
    import LottieLoader from '../../components/LottieLoader';
    import ThumbDoc from '../../components/ThumbDoc';
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
         },3000);
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

                    {/* TITLE */}
                    <Row id="defenseSecurite" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Défense et Sécurité</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}

                    {this.renderDefenseSecurite()}

                    {/* TITLE */}
                    <Row id="gouvernance" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Gouvernance</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}

                    {this.renderGouvernance()}

                    {/* TITLE */}
                    <Row id="infrastructure" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Infrastructure</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                    {/* ./TITLE */}
                    {this.renderInfra()}
                    

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
                        {
                            defense_securite[0].fimg_url !== false 
                            ? 
                            <Image src={defense_securite[0].fimg_url} fluid className="postImageBig" />
                            : 
                            <ThumbDoc 
                                title="Défense et Sécurité" 
                                containerClass="thumbBigContainer"
                                imageClass="thumbBigImage" 
                                titleClass="thumbBigTitle" 
                                descClass="thumbBigDesc" 
                            />
                            
                        }
                        
                        <div style={{ marginTop : 20+"px" }}>
                            {
                                defense_securite[0].title.rendered.length > 138
                                ?
                                <h3 className="postTitleBig" dangerouslySetInnerHTML={{__html: defense_securite[0].title.rendered.substr(0,138)+"..."}}></h3>
                                :
                                <h3 className="postTitleBig" dangerouslySetInnerHTML={{__html: defense_securite[0].title.rendered}}></h3>
                            }
                            <p  className="dateBig">{moment(defense_securite[0].date).format("DD MMMM YYYY")}</p>
                            {
                                defense_securite[0].excerpt.rendered.length > 0
                                ?
                                <p className="descBig" dangerouslySetInnerHTML={{__html: defense_securite[0].excerpt.rendered.substr(0,265)+"..."}}></p>
                                :
                                <p className="descBig" dangerouslySetInnerHTML={{__html: defense_securite[0].content.rendered.substr(0,265)+"..."}}></p>
                            }
                            <Link
                                className="seeMoreToSolo"
                                to={{
                                    pathname : '/solo-page',
                                    state : { 
                                        solo_title : "Défense et Sécurité",
                                        publication : defense_securite[0],
                                    }
                                }}
                            >
                                Lire la suite
                            </Link>
                        </div>
                        </>
                    }
                </Col>
                
                <Col className="ml-5" xs={12} md={12} xl={5}>

                    <Row>
                        {
                           defense_securite.map((def_sec,index) => 
                                def_sec && def_sec.status == "publish" && index > 0 && index < 4 &&
                                <Row className="smallArticleRow">
                                    <Col xs={12} md={4} xl={5} >
                                        {
                                            def_sec.fimg_url != false 
                                            ?  
                                            <Image src={def_sec.fimg_url} fluid className="postImageSmall" />
                                            : 
                                            <ThumbDoc 
                                                title="Défense et Sécurité" 
                                                containerClass="thumbSmallContainer"
                                                imageClass="thumbSmallImage" 
                                                titleClass="thumbSmallTitle" 
                                                descClass="thumbSmallDesc" 
                                            />
                                        }
                                    </Col>

                                    <Col xs={12} md={6} xl={7} className="justify-elements">
                                        <p className="titleSmall" dangerouslySetInnerHTML={{__html: def_sec.title.rendered}}></p> 
                                        {
                                            def_sec.excerpt.rendered.length > 0
                                            ?
                                            <p className="descSmall" dangerouslySetInnerHTML={{__html: def_sec.excerpt.rendered.substr(0,62)+"..."}}></p>
                                            :
                                            <p className="descSmall" dangerouslySetInnerHTML={{__html: def_sec.content.rendered.substr(0,62)+"..."}}></p>
                                            
                                        }
                                        <p  className="dateSmall">{moment(def_sec.date).format("DD MMMM YYYY")}</p>
                                    
                                    </Col>
                                    { index < 3 && <hr className="divider" /> }
                                    
                                </Row>
                           )
                        }
                    </Row>

                    <Link
                        to={{
                            pathname : '/see-more',
                            state : { 
                                see_more_title : "Défense et Sécurité",
                                posts : defense_securite,
                            }
                        }}  
                        className="btn btn-primary buttonBlue" 
                        style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}
                    >
                         VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Link>

                </Col>
            </Row>  
        );
    };

    renderGouvernance = () => {
        const { gouvernance } = this.props;

        return (
        <Row>
              
            {/* LEFT BLOC */}
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
                                        {
                                            gouvernance[0].fimg_url !== false
                                            ?
                                            <>
                                            <Image src={gouvernance[0].fimg_url} fluid className="genreImage" />
                                            <div className="content">
                                                <h5 dangerouslySetInnerHTML={{__html: gouvernance[0].title.rendered}}></h5>
                                                <p>{moment(gouvernance[0].date).format("DD MMMM YYYY")}</p>
                                            </div>
                                            </>
                                            :
                                            <ThumbDoc 
                                                title={"Gouvernance"}
                                                containerClass="thumbUlContainer"
                                                imageClass="thumbUlImage" 
                                                titleClass="thumbUlTitle" 
                                                descClass="thumbUlDesc" 
                                            />
                                        }    
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
                                            {
                                                gouv.fimg_url !== false 
                                                ? 
                                                <Image src={gouv.fimg_url} fluid className="gouvImageSmall"  />
                                                : 
                                                <ThumbDoc 
                                                    title="Gouvernance" 
                                                    containerClass="thumbXsContainer"
                                                    imageClass="thumbXsImage" 
                                                    titleClass="thumbSmallTitle" 
                                                    descClass="thumbSmallDesc" 
                                                />
                                            }
                                        </Col>
                                        <Col className="justify-elements-center">
                                            <h4 className="titleSmall" dangerouslySetInnerHTML={{__html: gouv.title.rendered.substr(0,192)}}></h4>
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
                            <Link
                                to={{
                                    pathname : '/see-more',
                                    state : { 
                                        see_more_title : "Gouvernance",
                                        posts : gouvernance,
                                    }
                                }}  
                                className="btn btn-primary buttonBlue" 
                                style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}
                            >
                                VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                            </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Col>


            {/* RIGHT BLOC */}
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
                                        {
                                            gouvernance[0].fimg_url !== false
                                            ?
                                            <>
                                            <Image src={gouvernance[0].fimg_url} fluid className="genreImage" />
                                            <div className="content">
                                                <h5 dangerouslySetInnerHTML={{__html: gouvernance[0].title.rendered}}></h5>
                                                <p>{moment(gouvernance[0].date).format("DD MMMM YYYY")}</p>
                                            </div>
                                            </>
                                            :
                                            <ThumbDoc 
                                                title={"Gouvernance"}
                                                containerClass="thumbUlContainer"
                                                imageClass="thumbUlImage" 
                                                titleClass="thumbUlTitle" 
                                                descClass="thumbUlDesc" 
                                            />
                                        }    
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
                                            {
                                                gouv.fimg_url !== false 
                                                ? 
                                                <Image src={gouv.fimg_url} fluid className="gouvImageSmall"  />
                                                : 
                                                <ThumbDoc 
                                                    title="Gouvernance" 
                                                    containerClass="thumbSmallContainer"
                                                    imageClass="thumbSmallImage" 
                                                    titleClass="thumbSmallTitle" 
                                                    descClass="thumbSmallDesc" 
                                                />
                                            }
                                        </Col>
                                        <Col className="justify-elements-center">
                                            <h4 className="titleSmall" dangerouslySetInnerHTML={{__html: gouv.title.rendered.substr(0,192)}}></h4>
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
                            <Link
                                to={{
                                    pathname : '/see-more',
                                    state : { 
                                        see_more_title : "Gouvernance",
                                        posts : gouvernance,
                                    }
                                }}  
                                className="btn btn-primary buttonBlue" 
                                style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}
                            >
                                VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                            </Link>
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
            <>
            
            <Row className="voirToutButtonRow">
                <Link 
                    className="btn btn-light infraVoirToutButton "
                    to={{
                        pathname : '/see-more',
                        state : { 
                            see_more_title : "Infrastructure",
                            posts : infrastructure,
                        }
                    }}
                >
                    Voir tous les articles <IoIosArrowForward size={'20px'} />
                </Link>
            </Row>
            
            <Row>
                {
                    infrastructure.map((infra,index) => 
                    infra && infra.status == "publish" && index < 3 &&
                        <Col xs={12} xl={4} className="infraContainer">

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
            </>
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
                                {
                                    resi.fimg_url !== false 
                                    ? 
                                    <Image src={ resi.fimg_url} fluid className="resiImageSmall" />
                                    : 
                                    <ThumbDoc 
                                        title="Résilience" 
                                        containerClass="thumbResiSmallContainer"
                                        imageClass="thumbResiSmallImage" 
                                        titleClass="thumbResiSmallTitle" 
                                        descClass="thumbResiSmallDesc" 
                                    />
                                }
                            </Col>

                            <Col xs={12} xl={6} className="resi-justify-elements">
                                <h4 className="resiTitleSmall">{resi.title.rendered}</h4>
                                <p  className="resiDescSmall">
                                    {
                                        resi.excerpt.rendered.length > 0
                                        ?
                                        <p dangerouslySetInnerHTML={{__html: resi.excerpt.rendered.substr(0,280)+"..."}}></p>
                                        :
                                        <p dangerouslySetInnerHTML={{__html: resi.content.rendered.substr(0,280)+"..."}}></p>
                                    }
                                </p>
                                <p  className="resiDateSmall">{moment(resi.date).format("DD MMMM YYYY")}</p>
                            </Col>
                        </Row>
                     )
                    }
                
                    <Link
                        to={{
                            pathname : '/see-more',
                            state : { 
                                see_more_title : "Résilience",
                                posts : resilence,
                            }
                        }}  
                        className="btn btn-primary buttonBlue" 
                        style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}
                    >
                        VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                    </Link>

                </Col>

                <Col xs={12} xl={6}>
                    {
                        resilence[0] && resilence[0].status == "publish" &&
                        <>
                        {
                            resilence[0].fimg_url !== false 
                            ? 
                            <Image src={resilence[0].fimg_url !== false ? resilence[0].fimg_url : THUMB} fluid className="resiImageBig" />
                            :
                            <ThumbDoc 
                                title="Résilience" 
                                containerClass="thumbResiBigContainer"
                                imageClass="thumbResiBigImage" 
                                titleClass="thumbResiBigTitle" 
                                descClass="thumbResiBigDesc" 
                            />
                        }
                        
                        <div style={{ marginTop : 20+"px" }}>
                            <h3 className="resiTitleBig" dangerouslySetInnerHTML={{__html: resilence[0].title.rendered}}></h3>
                            <p  className="resiDateBig">{moment(resilence[0].date).format("DD MMMM YYYY")}</p>
                            {
                                resilence[0].excerpt.rendered.length > 0
                                ?
                                <p className="resiDescBig" dangerouslySetInnerHTML={{__html: resilence[0].excerpt.rendered.substr(0,265)+"..."}}></p>
                                :
                                <p className="resiDescBig" dangerouslySetInnerHTML={{__html: resilence[0].content.rendered.substr(0,265)+"..."}}></p>
                            }
                            
                            <Link
                                className="seeMoreToSolo"
                                to={{
                                    pathname : '/solo-page',
                                    state : { 
                                        solo_title : "Résilience",
                                        publication : resilence[0],
                                    }
                                }}
                            >
                                Lire la suite
                            </Link>

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

