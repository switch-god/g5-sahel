/* eslint-disable import/first */
import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Player, BigPlayButton} from 'video-react';
import moment from 'moment';


// Connect to redux : 
    import { connect } from 'react-redux';
    // import { setLoading,getImagesBloc,getActivities,getLatestNews } from '../../redux/actions/PostsActions';
    import { getActualitesPaysG5,getActualitesInter,getLatestEvents,getActivities } from '../../redux/actions/ActualitesActions'; 

// COMPONENTS :
import Newsletter from '../../components/Newsletter';
import LottieLoader from '../../components/LottieLoader';
import ThumbDoc from '../../components/ThumbDoc';

import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading : true,
        };

        

        //Get Actualites Pays G5 : 
        this.props.getActualitesPaysG5();
        
        //Get Actualites Internationale : 
        this.props.getActualitesInter();

        // Get Latest Events :
        this.props.getLatestEvents();

        // Get Activities :
        this.props.getActivities();

        // Get Latest News :
        // this.props.getLatestNews();

    }

    
    componentDidMount() {
        setTimeout(() => {
             this.setState({loading : false})
         },3000);
    };

    render() {
        
        const { loading } = this.state;
        const { 
            actualitesG5,
            actualitesInter,
            events,
            activities,
        } = this.props;

        return (
            loading 
            ?
              <LottieLoader />
            :
            <Container fluid>
            
                {actualitesG5.length > 0 && this.renderActualitesG5(actualitesG5,"Actualités des pays du G5")}

                {/* NEW & EVENTS */}
                <Row style={{marginTop : 50 + "px", marginBottom : 50+"px"}}>
                    <Col />

                    <Col xl={10}>
                        <Row>
                            <Col xl={6} className="postsContainerNews">
                                {actualitesInter.length > 0 && this.renderPosts(actualitesInter,"A la une")}
                            </Col>
  
                            <Col xl={6} className="postsContainerEvents">
                                {events.length > 0 && this.renderEvents(events,"Agenda")}
                            </Col>
                        </Row>
                    </Col>
            
                    <Col />
                </Row>
                {/* NEW & EVENTS */}

                <Row>
                    <Col />
                    
                    <Col xs={12} md={12}  xl={10}>
                        {activities.length > 0 && this.renderNosActivites(activities)} 
                        <Newsletter />

                        {/* VIDEO */}
                        {this.renderVideo()}
                        {/* VIDEO */}

                    </Col>
                   
                    <Col />
                </Row>


            </Container>


        )
    }

    renderActualitesG5 = (actualitesG5,solo_title) => {

        return (
            <Row>
                <Col xs={0} md={0} xl={1} />

                <Col xs={12} md={12} xl={10}>
                    
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={8}>
                            <Link 
                                to={{
                                    pathname : `/article/${actualitesG5[0].slug}`,
                                }}  
                                style={{ textDecoration: 'none' }}
                            >
                            <div className="container-for-img">    
                                {
                                    actualitesG5[0] &&
                                    <>
                                    {
                                        actualitesG5[0].fimg_url !== false 
                                        ?
                                        <Image src={actualitesG5[0].fimg_url} fluid className="actualitesG5BigImage"  />
                                        :
                                        <ThumbDoc 
                                            title={solo_title} 
                                            containerClass="thumbActualitesBigContainer" 
                                            imageClass="thumbActualitesBigImage" 
                                            titleClass="thumbActualitesBigTitle" 
                                            descClass="thumbActualitesBigDesc" 
                                        />
                                    }
                                    <div className="content">
                                        <h4 className="actualitesG5BigTitle" dangerouslySetInnerHTML={{__html: actualitesG5[0].title.rendered}}></h4>
                                        <p  className="actualitesG5BigDate">{moment(actualitesG5[0].date).format("DD MMMM YYYY")}</p>
                                    </div>
                                    </>
                                }
                            </div>
                            </Link>
                        </Col>
                        
                        <Col xs={12} md={12} lg={12} xl={4}>    
                                
                            <Link 
                                to={{
                                    pathname : `/article/${actualitesG5[1].slug}`,
                                }}
                                style={{ textDecoration: 'none' }}>
                            <div className="container-for-img">
                                {
                                    actualitesG5[1] &&
                                    <>
                                    {
                                        actualitesG5[1].fimg_url !== false 
                                        ?
                                        <Image src={actualitesG5[1].fimg_url} fluid className="actualitesG5SmallImage"  />
                                        :
                                        <ThumbDoc 
                                            title="Actualités" 
                                            containerClass="thumbActualitesSmallContainer" 
                                            imageClass="thumbActualitesSmallImage" 
                                            titleClass="thumbActualitesSmallTitle" 
                                            descClass="thumbActualitesSmallDesc" 
                                        />
                                    }
                                    <div className="content-1">
                                        <h6 className="actualitesG5SmallTitle" dangerouslySetInnerHTML={{__html: actualitesG5[1].title.rendered}}></h6>
                                        <p  className="actualitesG5SmallDate">{moment(actualitesG5[1].date).format("DD MMMM YYYY")}</p>
                                    </div>
                                    </>
                                }
                            </div>
                            </Link>
                            

                            <Link 
                                to={{
                                    pathname : `/article/${actualitesG5[1].slug}`,
                                }} 
                                style={{ textDecoration: 'none' }}
                            >
                            <div className="container-for-img" style={{marginTop : 26 + "px"}}>
                            {
                                    actualitesG5[2] &&
                                    <>
                                    {
                                        actualitesG5[2].fimg_url !== false 
                                        ?
                                        <Image src={actualitesG5[2].fimg_url} fluid className="actualitesG5SmallImage"  />
                                        :
                                        <ThumbDoc 
                                            title="Actualités" 
                                            containerClass="thumbActualitesSmallContainer" 
                                            imageClass="thumbActualitesSmallImage" 
                                            titleClass="thumbActualitesSmallTitle" 
                                            descClass="thumbActualitesSmallDesc" 
                                        />
                                    }
                                    <div className="content-1">
                                        <h6 className="actualitesG5SmallTitle" dangerouslySetInnerHTML={{__html: actualitesG5[2].title.rendered}}></h6>
                                        <p  className="actualitesG5SmallDate">{moment(actualitesG5[0].date).format("DD MMMM YYYY")}</p>
                                    </div>
                                    </>
                                }
                            </div>
                            </Link>

                        </Col>
                    </Row>
                </Col>
        
                <Col xs={0} md={0} xl={1} />
            </Row>
        );
    };

    renderPosts = (posts,postsTitle) => {
        
        return (
            <>
            
            <div>
                {/* TITLE */}
                <Row>
                    <div className="sectionTitleContainer">
                        <h4 className="sectionTitle">{postsTitle}</h4>
                    </div>
                    <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                {/* LATEST NEWS */}
                {
                    posts[0] &&
                    <>
                    <Link 
                        to={{
                            pathname : `/article/${posts[0].slug}`,
                        }}  
                        style={{ textDecoration: 'none' }}
                    >
                    <Row>
                        <Col md={12}>
                            <Row>
                                {   
                                    posts[0].fimg_url !== false
                                    ?
                                    <Image src={posts[0].fimg_url} fluid className="bigArticleImage" />
                                    :
                                    <ThumbDoc 
                                        title={postsTitle} 
                                        containerClass="thumbNewsBigContainer" 
                                        imageClass="thumbNewsBigImage" 
                                        titleClass="thumbNewsBigTitle" 
                                        descClass="thumbNewsBigDesc" 
                                    />
                                }
                            </Row>

                            <Row>
                                <div className="articleTitleContainer">
                                    <h5 className="articleBigTitle" dangerouslySetInnerHTML={{__html: posts[0].title.rendered.substr(0,120)}}></h5>
                                </div>
                            </Row>
                            
                            <Row>
                                <p className="articleDate">
                                    {moment(posts[0].date).format("DD MMMM YYYY")}
                                </p>
                            </Row>

                            <Row>
                                <p className="articleContent" dangerouslySetInnerHTML={{__html: posts[0].excerpt.rendered.substr(0,350)+"..."}}></p>
                            </Row>

                            <Row style={{float: 'right'}}>
                                    <Link 
                                    to={{
                                        pathname : `/article/${posts[0].slug}`,
                                    }}  
                                >
                                    <p className="seeMoreNewsText">Lire la suite</p>
                                </Link>
                            </Row>

                        </Col>
                    </Row>
                    </Link>
                    <hr className="postsHr"/>
                    </>
                }
                {/* LATEST ./NEWS */}
                
                {/* LATEST 3 NEWS */}
                <div>
                {
                    posts.map((post,index) => (
                    index > 0 && index < 4 &&
                    <>
                    <div key={index} style={{marginBottom : 10+"px"}}>
                    <Link 
                        to={{
                            pathname : `/article/${post.slug}`,
                        }}  
                        style={{textDecoration: 'none'}}
                    >
                        <Row>
                            <Col xs={12} md={4}>
                                <Row>
                                    {
                                        post.fimg_url !== false
                                        ?
                                        <Image src={post.fimg_url} fluid className="smallArticleImage" />
                                        :
                                        <ThumbDoc 
                                            title={postsTitle} 
                                            containerClass="thumbNewsSmallContainer" 
                                            imageClass="thumbNewsSmallImage" 
                                            titleClass="thumbNewsSmallTitle" 
                                            descClass="thumbNewsSmallDesc" 
                                        />
                                    }
                                </Row>
                            </Col> 
                            
                            <Col xs={12} md={8}>
                                <Row className="textsArticleContainer">
                                    {
                                        post.title.rendered.length > 60 
                                        ?
                                        <h5 className="smallArticleTitle" dangerouslySetInnerHTML={{__html: post.title.rendered.substr(0,60)+"..."}}></h5>
                                        :
                                        <h5 className="smallArticleTitle" dangerouslySetInnerHTML={{__html: post.title.rendered}}></h5>                              
                                    }
                                    {
                                        post.excerpt.rendered.length > 100
                                        ?
                                        <p className="smallArticleContent" dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substr(0,100)+"..."}}></p>
                                        :
                                        <p className="smallArticleContent" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                                    }
                                    <p className="smallArticleDate">
                                        {moment(post.date).format("DD MMMM YYYY")}
                                    </p>
                                </Row>
                                
                            </Col>   
                        </Row>
                        </Link>
                    </div>
                    </>
                ))
                }
                </div>
                {/* LATEST 3 NEWS */}
                
            </div>
            
            </>
        );
    };

    renderEvents = (posts,postsTitle) => {
        // console.log(posts); 
        
        const category = "Événements";
        return (
            <>
            
            <div>
                {/* TITLE */}
                <Row className="sectionTitleRow">
                    <div className="sectionTitleContainer">
                        <h4 className="sectionTitle">{postsTitle}</h4>
                    </div>
                    <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                {/* LATEST NEWS */}
                {
                    posts[0] &&
                    <>
                    <Link 
                        to={{
                            pathname : `/event/${posts[0].slug}`,
                        }}  
                        style={{ textDecoration: 'none' }}
                    >
                    <Row>
                        <Col md={12}>
                            <Row>
                                {
                                    posts[0].image !== false
                                    ?
                                    <Image src={posts[0].image.url} fluid className="bigArticleImage" />
                                    :
                                    <ThumbDoc 
                                        title={postsTitle} 
                                        containerClass="thumbNewsBigContainer" 
                                        imageClass="thumbNewsBigImage" 
                                        titleClass="thumbNewsBigTitle" 
                                        descClass="thumbNewsBigDesc" 
                                    />
                                }
                            </Row>

                            <Row>
                                <div className="articleTitleContainer">
                                    <h5 className="articleBigTitle" dangerouslySetInnerHTML={{__html: posts[0].title.substr(0,120)}}></h5>
                                </div>
                            </Row>
                            
                            <Row>
                                <p className="articleDate">
                                {moment(`${posts[0].start_date_details.year}-${posts[0].start_date_details.month}-${posts[0].start_date_details.day}`).format("DD MMMM YYYY")}
                                </p>
                            </Row>

                            <Row>
                                <p className="articleContent" dangerouslySetInnerHTML={{__html: posts[0].excerpt.substr(0,350)+"..."}}></p>
                            </Row>

                            <Row style={{float: 'right'}}>
                                    <Link 
                                    to={{
                                        pathname : `/event/${posts[0].slug}`
                                    }}  
                                >
                                    <p className="seeMoreNewsText">Lire la suite</p>
                                </Link>
                            </Row>

                        </Col>
                    </Row>
                    </Link>
                    <hr className="postsHr"/>
                    </>
                }
                {/* LATEST ./NEWS */}
                
                {/* LATEST 3 NEWS */}
                <div>
                {
                    posts.map((post,index) => (
                    index > 0 && index < 4 && post &&
                    <>
                  
                    <div key={index} style={{marginBottom : 10+"px"}}>
                    <Link 
                        to={{
                            pathname : `/event/${post.slug}`
                        }}  
                        style={{textDecoration: 'none'}}
                    >
                    
                        <Row>
                            <Col xs={12} md={4}>
                                <Row>
                                    {
                                        post.image !== false
                                        ?
                                        <Image src={post.image.url} fluid className="smallArticleImage" />
                                        :
                                        <ThumbDoc 
                                            title={postsTitle} 
                                            containerClass="thumbNewsSmallContainer" 
                                            imageClass="thumbNewsSmallImage" 
                                            titleClass="thumbNewsSmallTitle" 
                                            descClass="thumbNewsSmallDesc" 
                                        />
                                    }
                                </Row>
                            </Col> 
                            
                            <Col xs={12} md={8}>
                                <Row className="textsArticleContainer">
                                    {
                                        post.title.length > 111 
                                        ?
                                        <h5 className="smallArticleTitle" dangerouslySetInnerHTML={{__html: post.title.substr(0,110) + "..."}}></h5>
                                        :
                                        <h5 className="smallArticleTitle" dangerouslySetInnerHTML={{__html: post.title }}></h5>                              
                                    }
                                    {
                                        post.excerpt.length > 150
                                        ?
                                        <p className="smallArticleContent" dangerouslySetInnerHTML={{__html: post.excerpt.substr(0,149)+"..."}}></p>
                                        :
                                        <p className="smallArticleContent" dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
                                    }
                                    <p className="smallArticleDate">
                                        {moment(`${post.start_date_details.year}-${post.start_date_details.month}-${post.start_date_details.day}`).format("DD MMMM YYYY")}

                                    </p>
                                </Row>
                                
                            </Col>   
                        </Row>
                    </Link>
                    </div>
                    </>
                ))
                    }
                </div>
                {/* LATEST 3 NEWS */}
                
            </div>
            
            </>
        );
    };

    renderNosActivites = (activites) => {
        
        return (
            <>
              {/* <h4  className="titleInBlackSmall" >Nos activités</h4>
              <hr  className="titleSeperator" />   */}

              <Row style={{paddingLeft : '15px', paddingRight: '15px'}}>
                <div className="sectionTitleContainer">
                    <h4 className="sectionTitle">Nos activités</h4>
                </div>
                <hr  className="titleSeperator" />  
              </Row>

              <Row>
                {
                    activites.map((activity,index) => 
                        index < 4 &&
                        <>
                        
                        <Col className="space-elements" xs={12} md={6} xl={3} key={index}>
                            <Link 
                                to={{
                                    pathname : `/article/${activity.slug}`,
                                }}  
                                style={{ textDecoration: 'none' }}
                            >
                            <Image src={activity.fimg_url} fluid className="activityImageSmall" />
                            {
                                activity.title.rendered.length < 34
                                ?
                                <p  className="activityTitle" dangerouslySetInnerHTML={{__html: activity.title.rendered}}></p>
                                :
                                <p  className="activityTitle" dangerouslySetInnerHTML={{__html: activity.title.rendered.substr(0,32)+"..."}}></p>
                            }
                            <p  className="activityDesc" dangerouslySetInnerHTML={{__html: activity.excerpt.rendered.substr(0,80)+"..." }}></p>
                            </Link>
                        </Col>
                        </>
                    )        
                }    
              </Row>  

            </>
        );
    };

    renderVideo = () => {
        
        return (
            <Row style={{marginBottom : 50+"px"}}>
                <Col />

                <Col style={{textAlign : 'center'}} md={8}>
                    <p style={styles.activityTitle}>G5 Sahel pour une prospérité partagée</p>
                    <hr style={{ borderColor : '#DEDEDE', marginTop : 13+"px",width : '80%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />
                    <Player playsInline src="https://www.youtube.com/watch?v=f11pRhSVQ6U">
                        <BigPlayButton position="center" />
                    </Player>
                </Col>
                
                <Col  />

            </Row>
        );
    };


}

const styles = {
    
    activityTitle : {
        color : '#0099CC',
        fontSize : 17,
        fontFamily : 'Poppins Bold',
        marginTop : 10+"px",
    },
    activityDesc : {
        color : 'black',
        fontSize : 13,
        fontFamily : 'Poppins SemiBold',
    },
};


const mapStateToProps = state => ({
    actualitesG5 : state.actualitesR.actualitesG5,
    actualitesInter : state.actualitesR.actualitesInter,
    events : state.actualitesR.events,
    activities : state.actualitesR.activities,
});

export default connect(mapStateToProps,{ getActualitesPaysG5,getActualitesInter,getLatestEvents,getActivities })(Home);

