import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
    Container
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io';
import ThumbDoc from '../../components/ThumbDoc';
// Connect to redux : 
    import { connect } from 'react-redux';
    import { getLatestNews,getActualitesPaysG5,getActualitesInter,getLatestEvents } from '../../redux/actions/ActualitesActions';


// Components :
    import Layout from '../../components/Layout';
    import Newsletter from '../../components/Newsletter';
    import LottieLoader from '../../components/LottieLoader';

// Icons :
import {FaFacebookF,FaYoutube,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

// import Image1 from '../../assets/images/Home/1.png';
// import IMG_TEST from '../../assets/images/News/news.png';
import './actualites.css';

class Actualites extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading : true,
        };

        //Get Actualites Pays G5 : 
        this.props.getActualitesPaysG5();

        // Latest News
        this.props.getLatestNews();
        
        //Get Actualites Internationale : 
        this.props.getActualitesInter();

        // Get Latest Events :
        this.props.getLatestEvents();

    }

    componentDidMount() {
        setTimeout(() => {
             this.setState({loading : false})
         },2000);
    };

    render() {
        const { loading } = this.state;
        const { 
            actualitesG5,
            actualitesInter,
            events,
            posts,
            // activities,
        } = this.props;

        return (

            loading 
            ?
                // <LottieLoader devText={true} />
                <LottieLoader  />
            :
            <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>Actualités</h1>
                </div>

                <Container fluid>
                    {
                        actualitesG5.length > 0 && 
                        posts.length > 0 &&
                        this.renderBloc1(actualitesG5,posts)
                    }

                    {
                        actualitesG5.length > 0 &&
                        this.renderactualites(actualitesG5,"Actualités des pays du G5")
                    }
                    
                    {
                        actualitesInter.length > 0 &&
                        this.renderactualites(actualitesInter,"Actualités Internationale")
                    }

                    {
                        events.length > 0 &&
                        this.renderAgenda(events,"Agenda")
                    }
                </Container>

                <Layout style={{marginBottom : 40+"px"}}>
                    <Newsletter />
                </Layout>
              <>
            </>

            </>
        )
    }

    renderBloc1 = (actualitesG5,posts) => {
   
        return (
            <Row>
                <Col xs={0} lg={1} xl={1} />

                <Col xs={12} lg={12} xl={10}>
                    
                    <Row>
                        <Col xs={12} lg={12} xl={8} className="bigBlocContainer">
                            <Link to={{
                                    pathname : `/article/${actualitesG5[0].slug}`,
                                }}  
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="news-big-img">    
                                    {
                                        actualitesG5[0].fimg_url !== false 
                                        ?
                                        <Image src={actualitesG5[0].fimg_url} alt={actualitesG5[0].title.rendered} fluid className="bigImageBloc1" />
                                        :
                                        <ThumbDoc 
                                        title="Actualités" 
                                        containerClass="thumbActuBigContainer" 
                                        imageClass="thumbActuBigImage" 
                                        titleClass="thumbActuBigTitle" 
                                        descClass="thumbActuBigDesc" 
                                        />
                                    }
                                    <div className="content">
                                        <h4 className="actualitesG5BigTitle" dangerouslySetInnerHTML={{__html: actualitesG5[0].title.rendered}}></h4>
                                        <p  className="actualitesG5BigDate">{moment(actualitesG5[0].date).format("DD MMMM YYYY")}</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        
                        <Col xs={12} lg={12} xl={4}>
                            
                        {/* TITLE */}
                        <Col xs={12} lg={12} xl={12}>
                            <Row>
                                <div className="sectionTitleContainerActualites">
                                    <h4 className="sectionTitleActualites">Social Networks</h4>
                                </div>
                                <hr  className="titleBloc1Seperator" />  
                            </Row>
                        </Col>
                        {/* ./TITLE */}
                        
                        
                        <Col xs={12} lg={12} xl={12}>
                            <Row style={{marginBottom : 10+"px"}}>
                                <Col xs={6} xl={6}>
                                    <a style={{textDecoration: 'none'}} href="https://www.facebook.com"  className="socialLinka"><h4><FaFacebookF className="socialIcon" color={'black'} style={{marginRight : 10+"px"}} /> FACEBOOK </h4></a>
                                </Col>

                                <Col xs={6} xl={6}>
                                    <a style={{textDecoration: 'none'}} href="https://twitter.com/"  className="socialLinka"><h4><FaTwitter  className="socialIcon" color={'black'} style={{marginRight : 10+"px"}} /> TWITTER</h4></a>
                                </Col>
                            </Row>
                            
                            <Row style={{marginBottom : 10+"px"}}>
                                <Col xs={6} xl={6}>
                                    <a  style={{textDecoration: 'none'}} href="https://www.youtube.com" className="socialLinka"><h4><FaYoutube className="socialIcon" color={'black'} style={{marginRight : 10+"px"}} /> YOUTUBE</h4></a>
                                </Col>
                                
                                <Col xs={6} xl={6}>
                                    <a style={{textDecoration: 'none'}} href="https://www.linkedin.com"  className="socialLinka"><h4><FaLinkedinIn className="socialIcon" color={'black'} style={{marginRight : 10+"px"}} /> LINKEDIN</h4></a>
                                </Col>
                            </Row>
                        </Col>


                        <Col xs={12} xl={12}>
                            {/* TITLE */}
                            <Row>
                                <div className="sectionTitleContainerActualites">
                                    <h4 className="sectionTitleActualites">Ce mois</h4>
                                </div>
                                <hr  className="titleBloc1Seperator" />  
                            </Row>
                        {/* ./TITLE */}
                        </Col>
                        
                        <Col xs={12} md={12} lg={12} xl={12}>
                        <Row className="articlesRow">
                        {/* LATEST 3 NEWS */}   
                
                            {
                            posts.map((post,index) => 
                                index < 3 &&
                                <Link to={{
                                    pathname : `/article/${post.slug}`,
                                    }}  
                                        style={{ textDecoration: 'none' }}
                                >
                                <Row key={index} className="ceMoisArticleContainer">
                                    <Col xs={12} md={12} xl={5}>
                                        {
                                            post.fimg_url !== false 
                                            ?
                                            <Image src={post.fimg_url} alt={post.title.rendered} fluid className="imageCeMois" />
                                            :
                                            <ThumbDoc 
                                                title="Ce mois" 
                                                containerClass="thumbActuSmallContainer" 
                                                imageClass="thumbActuSmallImage" 
                                                titleClass="thumbActuSmallTitle" 
                                                descClass="thumbActuSmallDesc" 
                                            />
                                        }
                                    </Col> 

                                    <Col xs={12} md={12} xl={7}>
                                        <p className="titleCeMois" dangerouslySetInnerHTML={{__html: post.title.rendered}}></p>                              
                                        <p  className="dateCeMois">{moment(posts[1].date).format("DD MMMM YYYY")}</p>
                                    </Col> 
                                </Row>                        
                                </Link>  
                            )
                        }
                        {/* LATEST 3 NEWS */}
                        </Row>    
                        
                        </Col>
                        
                        </Col>
                    </Row>
                </Col>
        
                <Col xs={0} lg={1} xl={1} />
            </Row>  
        );
    };

    renderactualites = (actualites,solo_title) => {
        
        return (
            <Layout style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                
                {/* TITLE */}
                <Row className="sectionTitleRowActualites">
                    <div className="sectionTitleContainerActualites">
                        <h4 className="sectionTitleActualites">{solo_title}</h4>
                    </div>
                    <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                <Row className="voirToutButtonRow">
                    <Link 
                        className="btn btn-light infraVoirToutButton "
                        to={{ pathname : `/voir-plus/${actualites[0].fcategory[0].category_slug}` }}
                    >
                        Voir tous les articles <IoIosArrowForward size={'20px'} />
                    </Link>
                </Row>

                <Row className="midArticlesBloc">
                    {
                        actualites.map((actu,index) =>
                            index > 0 && index <= 4 && 
                            <Col xs={12} xl={3}>
                                <Link style={{textDecoration: 'none'}} to={{ pathname : `/article/${actu.slug}`, }}>
                                {
                                    actu.fimg_url !== false 
                                    ?
                                    <Image src={actu.fimg_url} alt={actu.title.rendered} fluid className="midImage" />
                                    :
                                    <ThumbDoc 
                                        title={solo_title} 
                                        containerClass="thumbActuMidContainer" 
                                        imageClass="thumbActuMidImage" 
                                        titleClass="thumbActuMidTitle" 
                                        descClass="thumbActuMidDesc" 
                                    />
                                }
                                <p className="midTitle" dangerouslySetInnerHTML={{__html: actu.title.rendered}}></p>
                                <p className="midDate">{moment(actu.date).format("DD MMMM YYYY")}</p>
                                </Link>
                            </Col>
                        )
                    }
                </Row> 
            </Layout>
        );
    }


    renderAgenda = (events,solo_title) => {
        
        return (
            <Layout style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                
                <Row className="sectionTitleRowActualites">
                    <div className="sectionTitleContainerActualites">
                        <h4 className="sectionTitleActualites">{solo_title}</h4>
                    </div>
                    <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                <Row className="voirToutButtonRow">
                    <Link 
                        className="btn btn-light infraVoirToutButton "
                        to={{ pathname : '#' }}
                    >
                        Voir tous les événements <IoIosArrowForward size={'20px'} />
                    </Link>
                </Row>

                <Row className="midArticlesBloc">
                    {
                        events.map((actu,index) =>
                            index < 4 && 
                            <Col xs={12} xl={3}>
                                <Link style={{textDecoration: 'none'}} to={{ pathname : `/event/${actu.slug}`, }}>
                                {
                                    actu.image !== false 
                                    ?
                                    <Image src={actu.image.url} alt={actu.title.rendered} fluid className="midImage" />
                                    :
                                    <ThumbDoc 
                                        title={solo_title} 
                                        containerClass="thumbActuMidContainer" 
                                        imageClass="thumbActuMidImage" 
                                        titleClass="thumbActuMidTitle" 
                                        descClass="thumbActuMidDesc" 
                                    />
                                }
                                
                                <p className="midTitle" dangerouslySetInnerHTML={{__html: actu.title}}></p>
                                
                                <p className="midDate">{moment(`${actu.start_date_details.year}-${actu.start_date_details.month}-${actu.start_date_details.day}`).format("DD MMMM YYYY")}</p>
                                </Link>
                            </Col>
                        )
                    }
                </Row> 
                
            </Layout>
        );
    }

}

const styles = {
    Title : {
        width : '30%',
        color : '#fff',
        fontFamily : 'Poppins Bold',
        backgroundColor : 'black',
        paddingTop : 15+"px",
        paddingBottom: 15+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    Title2 : {
        width : '20%',
        color : '#fff',
        fontFamily : 'Poppins Bold',
        backgroundColor : 'black',
        paddingTop : 15+"px",
        paddingBottom: 15+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    TitleLarge : {
        width : '50%',
        color : '#fff',
        fontFamily : 'Poppins Bold',
        backgroundColor : 'black',
        paddingTop : 15+"px",
        paddingBottom: 15+"px", 
        borderWidth : 10+"px",
        textAlign : 'center'
    },
    activityTitle : {
        color : 'black',
        fontSize : 17,
        fontFamily : 'Poppins Bold',
        marginTop : 10+"px",
    },
    activityDesc : {
        color : '#0099CC',
        fontSize : 13,
        fontFamily : 'Poppins SemiBold',
    },
}


const mapStateToProps = state => ({
    actualitesG5 : state.actualitesR.actualitesG5,
    actualitesInter : state.actualitesR.actualitesInter,
    events : state.actualitesR.events,
    posts : state.actualitesR.posts,
});

export default connect(mapStateToProps,{ getLatestNews,getActualitesPaysG5,getActualitesInter,getLatestEvents })(Actualites);

