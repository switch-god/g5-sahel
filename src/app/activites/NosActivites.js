import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
    Container,
    Button,
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

// Redux :
    import { connect } from 'react-redux';
    import { getDefenseSecurite,getGouvernance,getInfrastructure,getResilence,getGenre,getCellule } from '../../redux/actions/NosActivitesActions';

// Components : 
    import Layout from '../../components/Layout';
    import {IoIosArrowForward} from 'react-icons/io';
    import Newsletter from '../../components/Newsletter';
    import LottieLoader from '../../components/LottieLoader';
    import ThumbDoc from '../../components/ThumbDoc';
    // import ScrollableAnchor from 'react-scrollable-anchor';

// Image & styling :
    import THUMB from '../../assets/images/Thumbs/content-placeholder.jpg';
    // import DFS_2 from '../../assets/images/Activites/ds2.png';
    // import GENRE from '../../assets/images/Activites/genre.png'
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
        // this.props.getGouvernance();
        this.props.getGenre();
        this.props.getCellule();

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

        const { defense_securite,genre,cellule,infrastructure,resilence } = this.props;

        return (
            loading 
            ?
              <LottieLoader />
            :
           <Container fluid>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>Nos activités</h1>
                </div>   

                <Layout xsColumns={10}>

                    {/* Défense et Sécurité */}
                    {
                        defense_securite.length > 0 &&
                        <>
                        <Row id="defenseSecurite" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                            <div className="sectionTitleContainer">
                                <h4 className="sectionTitle">Défense et Sécurité</h4>
                            </div>
                            <hr  className="titleSeperator" />  
                        </Row>
                        {this.renderDefenseSecurite(defense_securite,"Défense et Sécurité")}
                        </>
                    }
                    {/* ./Défense et Sécurité */}


                    {/* Gouvernance */}
                    {
                        genre.length > 0 && cellule.length > 0 &&
                        <>
                        <Row id="gouvernance" style={{paddingLeft: window.innerWidth > 800 ? '15px' : '0px',paddingRight : '15px'}}>
                            <div className="sectionTitleContainer">
                                <h4 className="sectionTitle">Gouvernance</h4>
                            </div>
                            <hr  className="titleSeperator" />  
                        </Row>
                        {this.renderGouvernance(genre,cellule,"Gouvernance")}
                        </>
                    }
                    {/* ./Gouvernance */}


                    {/* infrastructure */}
                    {
                        infrastructure.length > 0 && 
                        <>
                        <Row id="infrastructure" style={{paddingLeft: window.innerWidth > 800 ? '15px' : '0px',paddingRight : '15px'}}>
                            <div className="sectionTitleContainer">
                                <h4 className="sectionTitle">Infrastructure</h4>
                            </div>
                            <hr  className="titleSeperator" />  
                        </Row>
                        {this.renderInfra(infrastructure,"Infrastructure")}
                        </>
                    }
                    {/* ./infrastructure */}
                    


                    {/* Résilience */}
                    {
                        resilence.length > 0 && 
                        <> 
                        <Row id="resilence" style={{paddingLeft: window.innerWidth > 800 ? '15px' : '0px',paddingRight : '15px'}}>
                            <div className="sectionTitleContainer">
                                <h4 className="sectionTitle">Résilience</h4>
                            </div>
                            <hr  className="titleSeperator" />  
                        </Row>
                        {this.renderResilience(resilence,"")}
                        </>
                    }
                    {/* ./Résilience */}

                    <div style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                        <Newsletter />
                    </div>
                </Layout>
           </Container>
        )
    }

    renderDefenseSecurite = (defense_securite,solo_title) => {
        
        return (
            <Row>

                <Col xs={12} md={12} xl={6}>
                    <Link
                        style={{textDecoration: 'none'}}
                        to={{
                            pathname : `/article/${defense_securite[0].slug}`,
                        }}
                    >
                    {
                        defense_securite[0] && defense_securite[0].status == "publish" &&
                        <>
                        {
                            defense_securite[0].fimg_url !== false 
                            ? 
                            <Image src={defense_securite[0].fimg_url} fluid className="postImageBig" />
                            : 
                            <ThumbDoc 
                                title={solo_title} 
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
                                    pathname : `/article/${defense_securite[0].slug}`,
                                }}
                            >
                                Lire la suite
                            </Link>
                        </div>
                        </>
                    }
                    </Link>
                </Col>
                
                <Col className={ window.innerWidth > 800 ? "ml-5" : ""} xs={12} md={12} xl={5}>

                    <Row>
                        {
                           defense_securite.map((def_sec,index) => 
                                def_sec && def_sec.status == "publish" && index > 0 && index < 4 &&
                                <Link
                                    style={{textDecoration: 'none'}}
                                    to={{
                                        pathname : `/article/${def_sec.slug}`,
                                        
                                    }}
                                >
                                <Row className="smallArticleRow">
                                    <Col xs={12} md={4} xl={5}>
                                        {
                                            def_sec.fimg_url != false 
                                            ?  
                                            <Image src={def_sec.fimg_url} fluid className="postImageSmall" />
                                            : 
                                            <ThumbDoc 
                                                title={solo_title} 
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
                                </Link>
                           )
                        }
                        <Link
                            to={{ pathname : `/voir-plus/${defense_securite[0].categories[0].category_slug}` }}
                            className="btn btn-primary buttonBlue" 
                            style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}
                        >
                            VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                        </Link>
                    </Row>


                </Col>
            </Row>  
        );
    };

    renderGouvernance = (genre,cellule,solo_title) => {

        return (
        <Row>
              
            {/* LEFT BLOC */}
            <Col xs={12} xl={6}>
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
                                genre[0] && genre[0].status == "publish" &&
                                <>
                                <Col xs={12} xl={12}>
                                    <Link
                                        style={{textDecoration: 'none'}}
                                        to={{
                                            pathname : `/article/${genre[0].slug}`,
                                        }}
                                    >
                                    <div className="container-for-img">   
                                        {
                                            genre[0].fimg_url !== false
                                            ?
                                            <>
                                            <Image src={genre[0].fimg_url} fluid className="genreImage" />
                                            <div className="content">
                                                <h5 dangerouslySetInnerHTML={{__html: genre[0].title.rendered}}></h5>
                                                <p>{moment(genre[0].date).format("DD MMMM YYYY")}</p>
                                            </div>
                                            </>
                                            :
                                            <ThumbDoc 
                                                title={solo_title}
                                                containerClass="thumbUlContainer"
                                                imageClass="thumbUlImage" 
                                                titleClass="thumbUlTitle" 
                                                descClass="thumbUlDesc" 
                                            />
                                        }    
                                    </div>
                                    </Link>
                                </Col>
                                </>
                            }
                        </Row>

                        <Row>
                            {
                                genre.map((gouv,index) => 
                                gouv && index > 0 && index < 4 &&
                                <>
                                <Col xs={12} xl={12}>

                                    <Link
                                        style={{textDecoration: 'none'}}
                                        to={{
                                            pathname : `/article/${gouv.slug}`,
                                        }}
                                    >
                                    <Row className="gouvSmallRow">
                                        <Col xl={4}>
                                            {
                                                gouv.fimg_url !== false 
                                                ? 
                                                <Image src={gouv.fimg_url} fluid className="gouvImageSmall"  />
                                                : 
                                                <ThumbDoc 
                                                    title={solo_title} 
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
                                    </Link>

                                </Col>
                                </>
                                )
                            }
                        </Row>

                        <Row style={{marginTop :"15px",marginBottom :"15px"}}>
                            <Col xs={12} xl={12}>
                            <Link
                                to={{ pathname : `/voir-plus/${genre[0].categories[0].category_slug}` }}             
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
                                <h5 style={styles.gouvernanceTitle}>Cellule anti redicalisation et l’extremisme violant</h5>
                                <hr  style={{ borderWidth : 5+"px", borderColor : '#BCBCBC' }} />
                            </Col>
                        </Row>
                        
                        <Row>
                            {
                                cellule[0] && cellule[0].status == "publish" &&
                                <>
                                <Col xs={12} xl={12}>
                                    <Link
                                        style={{textDecoration: 'none'}}
                                        to={{
                                            pathname : `/article/${cellule[0].slug}`,
                                        }}
                                    >
                                    <div className="container-for-img">   
                                        {
                                            cellule[0].fimg_url !== false
                                            ?
                                            <>
                                            <Image src={cellule[0].fimg_url} fluid className="genreImage" />
                                            <div className="content">
                                                <h5 dangerouslySetInnerHTML={{__html: cellule[0].title.rendered}}></h5>
                                                <p>{moment(cellule[0].date).format("DD MMMM YYYY")}</p>
                                            </div>
                                            </>
                                            :
                                            <ThumbDoc 
                                                title={solo_title}
                                                containerClass="thumbUlContainer"
                                                imageClass="thumbUlImage" 
                                                titleClass="thumbUlTitle" 
                                                descClass="thumbUlDesc" 
                                            />
                                        }    
                                    </div>
                                    </Link>
                                </Col>
                                </>
                            }
                        </Row>

                        <Row>
                            {
                                cellule.map((gouv,index) => 
                                gouv && index > 0 && index < 4 &&
                                <>
                                <Col xs={12} xl={12}>
                                    <Link
                                        style={{textDecoration: 'none'}}
                                        to={{
                                            pathname : `/article/${gouv.slug}`,
                                        }}
                                    >
                                    <Row className="gouvSmallRow">
                                        <Col xl={4}>
                                            {
                                                gouv.fimg_url !== false 
                                                ? 
                                                <Image src={gouv.fimg_url} fluid className="gouvImageSmall"  />
                                                : 
                                                <ThumbDoc 
                                                    title={solo_title} 
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
                                    </Link>
                                    
                                </Col>
                                </>
                                )
                            }
                        </Row>

                        <Row style={{marginTop :"15px",marginBottom :"15px"}}>
                            <Col xs={12} xl={12}>
                            <Link
                                to={{ pathname : `/voir-plus/${cellule[0].categories[0].category_slug}` }}
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

    renderInfra = (infrastructure,solo_title) => {
        
        return (
            <>
            
            <Row className="voirToutButtonRow">
                <Link 
                    className="btn btn-light infraVoirToutButton "
                    to={{ pathname : `/voir-plus/${infrastructure[0].categories[0].category_slug}` }}
                >
                    Voir tous les articles <IoIosArrowForward size={'20px'} />
                </Link>
            </Row>
            
            <Row>
                {
                    infrastructure.map((infra,index) => 
                    infra && infra.status == "publish" && index < 3 &&
                        <Col xs={12} xl={4} className="infraContainer">
                            <Link
                                style={{textDecoration: 'none'}}
                                to={{
                                    pathname : `/article/${infra.slug}`,
                                }}
                            >
                            {
                                infra.fimg_url !== false
                                ?
                                <Image src={infra.fimg_url} fluid className="infraImage" />
                                :
                                <ThumbDoc 
                                    title={solo_title} 
                                    containerClass="thumbActuMidContainer" 
                                    imageClass="thumbActuMidImage" 
                                    titleClass="thumbActuMidTitle" 
                                    descClass="thumbActuMidDesc" 
                                />
                                
                            }
                            
                            <div style={{marginTop : 20+"px"}}>
                                <div className="infraTitleContainer">
                                    {
                                        infra.title.rendered.length > 110
                                        ?
                                        <h5 className="infraTitle" dangerouslySetInnerHTML={{__html: infra.title.rendered.substr(0,110)+"..."}}></h5>
                                        :
                                        <h5 className="infraTitle" dangerouslySetInnerHTML={{__html: infra.title.rendered}}></h5>
                                    }
                                </div>
                                
                                <div className="infraDateContainer">
                                    <p  className="infraDate">{moment(infra.date).format("DD MMMM YYYY")}</p>
                                </div>

                                <div className="infraDescContainer">
                                    {
                                        infra.excerpt.rendered.length > 0
                                        ?
                                        <p className="infraDesc" dangerouslySetInnerHTML={{__html: infra.excerpt.rendered.substr(0,175)+"..."}}></p>
                                        :
                                        <p className="infraDesc" dangerouslySetInnerHTML={{__html: infra.content.rendered.substr(0,175)+"..."}}></p>
                                    }
                                </div>
                            </div>
                            </Link>
                        </Col>
                    )
                }
            </Row>
            </>
        );
    };
    
    renderResilience = (resilence,solo_title) => {
        
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
                        <Link
                            style={{textDecoration: 'none'}}
                            to={{
                                pathname : `/article/${resi.slug}`,
                            }}
                        >
                        <Row className="resilenceRow">
                            <Col xs={12} xl={6}>
                                {
                                    resi.fimg_url !== false 
                                    ? 
                                    <Image src={ resi.fimg_url} fluid className="resiImageSmall" />
                                    : 
                                    <ThumbDoc 
                                        title={solo_title} 
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
                        </Link>
                     )
                    }

                    {
                        window.innerWidth > 800 &&
                        <Link
                            to={{ pathname : `/voir-plus/${resilence[0].categories[0].category_slug}` }}  
                            className="btn btn-primary buttonBlue" 
                            style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}
                        >
                            VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                        </Link>
                    }

                </Col>

                <Col xs={12} xl={6}>
                        <Link
                            to={{
                                pathname : `/article/${resilence[0].slug}`,
                            }}
                            style={{textDecoration: 'none'}}
                        >
                    {
                        resilence[0] && resilence[0].status == "publish" &&
                        <>
                        {
                            resilence[0].fimg_url !== false 
                            ? 
                            <Image src={resilence[0].fimg_url !== false ? resilence[0].fimg_url : THUMB} fluid className="resiImageBig" />
                            :
                            <ThumbDoc 
                                title={solo_title} 
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
                                    pathname : `/article/${resilence[0].slug}`,
                                }}
                            >
                                Lire la suite
                            </Link>

                        </div>
                        </>
                    }
                    </Link>

                    {
                        window.innerWidth < 800 &&
                        <Link
                            to={{ pathname : `/voir-plus/${resilence[0].categories[0].category_slug}` }}  
                            className="btn btn-primary buttonBlue" 
                            style={{marginTop: 20+"px",marginBottom : 20+"px",fontFamily:'Poppins Light'}}
                        >
                            VOIR PLUS<IoIosArrowForward size={30} style={{marginLeft : 10+"px",marginTop : -5+"px"}} />
                        </Link>
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
    defense_securite : state.activitesR.defense_securite,
    gouvernance : state.activitesR.gouvernance,
        genre : state.activitesR.genre,
        cellule : state.activitesR.cellule,
    infrastructure : state.activitesR.infrastructure,
    resilence : state.activitesR.resilence,

});

export default connect(mapStateToProps,{ getDefenseSecurite,getGouvernance,getInfrastructure,getResilence,getGenre,getCellule})(NosActivites);

