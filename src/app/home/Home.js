import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

import { Player, BigPlayButton} from 'video-react';
import moment from 'moment';
import Loading from '../loading/Loading';

// Connect to redux : 
    import { connect } from 'react-redux';
    import { setLoading,getImagesBloc,getActivities,getLatestNews,getLatestEvents } from '../../redux/actions/PostsActions';

// COMPONENTS :
import Newsletter from '../../components/Newsletter';


class Home extends Component {

    constructor(props) {
        super(props);

        //Get Images and data : 
        this.props.getImagesBloc();

        // Get Activities :
        this.props.getActivities();

        // Get Latest News :
        this.props.getLatestNews();

        // Get Latest Events :
        this.props.getLatestEvents();
    }

    
    componentDidMount() {
        setTimeout(() => {
            this.props.setLoading(false)
        },3500);
    };

    render() {
        const { loading,events,posts } = this.props;

        return (
            loading 
            ?
              <Loading />
            :
            <Container fluid>
            
                {this.renderImagesBloc()}

                {/* NEW & EVENTS */}
                <Row style={{marginTop : 50 + "px", marginBottom : 50+"px"}}>
                    <Col />

                    <Col md={10}>
                        <Row>
                            <Col md={6} className="postsContainerNews">
                                {this.renderPosts(posts,"Latest News")}
                            </Col>
  
                            <Col md={6} className="postsContainerEvents">
                                {this.renderPosts(events,"Upcoming Events")}
                            </Col>
                        </Row>
                    </Col>
            
                    <Col />
                </Row>
                {/* NEW & EVENTS */}

                <Row>
                    <Col />
                    
                    <Col md={10}>
                        {this.renderNosActivites()} 
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

    renderImagesBloc = () => {
        const { imagesBloc } = this.props;

        return (
            <Row>
                <Col />

                <Col md={10}>
                    
                    <Row>
                        <Col xs={12} md={8}>
                            <div className="container-for-img">    
                                {
                                    imagesBloc[2] &&
                                    <>
                                    <Image src={imagesBloc[2].fimg_url} fluid   />
                                    <div className="content">
                                        <h3 style={{ fontFamily : 'Poppins Bold' }}>{imagesBloc[2].title.rendered}</h3>
                                        <p style={{ fontFamily : 'Poppins Light',paddingLeft : 5+"px" }}>{moment(imagesBloc[2].date).format("DD MMMM YYYY")}</p>
                                    </div>
                                    </>
                                }
                            </div>
                        </Col>
                        
                        <Col xs={12} md={4}>
                            
                            <div className="container-for-img">
                                {
                                    imagesBloc[1] &&
                                    <>
                                    <Image src={imagesBloc[1].fimg_url} fluid />
                                    <div className="content-1">
                                        <h3 style={{ fontFamily : 'Poppins Bold' }}>{imagesBloc[1].title.rendered}</h3>
                                        <p style={{ fontFamily : 'Poppins Light',paddingLeft : 5+"px" }}>{moment(imagesBloc[1].date).format("DD MMMM YYYY")}</p>
                                    </div>
                                    </>
                                }
                            </div>
                            
                            <div className="container-for-img" style={{marginTop : 26 + "px"}}>
                                {
                                    imagesBloc[0] &&
                                    <>
                                    <Image src={imagesBloc[0].fimg_url} fluid style={{width:'100%'}}  />
                                    <div className="content-1">
                                        <h3 style={{ fontFamily : 'Poppins Bold' }}>{imagesBloc[0].title.rendered}</h3>
                                        <p style={{ fontFamily : 'Poppins Light',paddingLeft : 5+"px" }}>{moment(imagesBloc[0].date).format("DD MMMM YYYY")}</p>
                                    </div>
                                    </>
                                }
                            </div>
                        </Col>
                    </Row>
                </Col>
        
                <Col />
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
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Image src={posts[0].fimg_url} fluid className="bigArticleImage" />
                            </Row>

                            <Row>
                                <div className="articleTitleContainer">
                                    <h5>{posts[0].title.rendered}</h5>
                                </div>
                            </Row>
                            
                            <Row>
                                <p className="articleDate">
                                    {moment(posts[0].date).format("DD MMMM YYYY")}
                                </p>
                            </Row>

                            <Row>
                                <p className="articleContent">
                                    {posts[0].content.rendered.replace(/<[^>]*>?/gm, '')}
                                </p>
                            </Row>

                        </Col>
                    </Row>
   
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
                        <Row>
                            <Col xs={12} md={4}>
                                <Row>
                                    <Image src={post.fimg_url} fluid className="smallArticleImage" />
                                </Row>
                            </Col> 
                            
                            <Col xs={12} md={8}>
                                <Row className="textsArticleContainer">
                                    <h5 className="smallArticleTitle">
                                        {
                                            post.title.rendered.length > 111 
                                            ?
                                            post.title.rendered.substr(1,110) + "..."
                                            :
                                            post.title.rendered                                
                                        }
                                    </h5>
                                    <p className="smallArticleContent">
                                        {
                                            post.content.rendered.replace(/<[^>]*>?/gm, '').length > 150
                                            ?
                                            post.content.rendered.replace(/<[^>]*>?/gm, '').substr(1,149) + "..."
                                            :
                                            post.content.rendered.replace(/<[^>]*>?/gm, '')
                                        }
                                    </p>
                                    <p className="smallArticleDate">
                                        {moment(post.date).format("DD MMMM YYYY")}
                                    </p>
                                </Row>
                                
                            </Col>   
                        </Row>
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

    renderNosActivites = () => {
        const { activites } = this.props;
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
                        <Col xs={12} md={3} key={index}>
                            <Image src={activity.fimg_url} fluid />
                            <p style={styles.activityTitle}>{activity.title.rendered}</p>
                            <p style={styles.activityDesc}>{activity.content.rendered.replace(/<[^>]*>?/gm, '')}</p>
                        </Col>
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
    loading : state.postsR.loading,
    imagesBloc : state.postsR.imagesBloc,
    activites : state.postsR.activites,
    posts : state.postsR.posts,
    events : state.postsR.events,
});

export default connect(mapStateToProps,{ setLoading,getImagesBloc,getActivities,getLatestNews,getLatestEvents })(Home);

