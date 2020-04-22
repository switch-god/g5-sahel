import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

import { Grid } from '@material-ui/core';  

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
        let { loading } = this.props;

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
                            <Col md={6} style={{ paddingRight : '50px',paddingLeft : '30px'}}>
                                {this.renderNews()}
                            </Col>
  
                            <Col md={6} style={{paddingLeft : '50px',paddingRight : '30px'}}>
                                {this.renderEvents2()}
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
                            <Col sm={8} md={8}>
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
                            
                            <Col sm={4} md={4}>
                                
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

    renderNews = () => {
        const { posts } = this.props;

        return (
            <>
            <div>
                <Row>
                {/* TITLE */}
                <div className="sectionTitleContainer">
                    <h4 className="sectionTitle">Latest News</h4>
                </div>
                <hr  className="titleSeperator" />  
                {/* ./TITLE */}
                </Row>

                {/* LATEST NEWS */}
                    {
                        posts[0] &&
                        <div>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Image src={posts[0].fimg_url} fluid className="bigArticleImage" />
                                </Row>

                                <Row>
                                    <div className="articleTitleContainer">
                                        <h5> {posts[0].title.rendered}</h5>
                                    </div>
                                </Row>

                                <Row>
                                    <p className="articleDate">
                                        {moment(posts[0].date).format("DD MMMM YYYY")}
                                    </p>
                                </Row>

                                <Row>
                                    <p className="articleContent">
                                        {
                                            posts[0].content.rendered.replace("<p>","").replace('</p>',"").length > 255
                                            ?
                                            posts[0].content.rendered.replace("<p>","").replace('</p>',"").substr(1,253) + "..."
                                            :
                                            posts[0].content.rendered.replace("<p>","").replace('</p>',"")
                                        }
                                    </p>
                                </Row>
                                <hr />
                            </Col>
                        </Row>
                        </div>
                    }
                {/* LATEST ./NEWS */}
                
                {/* LATEST 3 NEWS */}
                <>
                {
                    posts.map((post,index) => 
                        index > 0 && index < 4 &&
                        <Row>
                        <div style={{marginBottom : 10+"px"}}>
                            <Row>
                                <Col md={4}>
                                    <Row>
                                        <Image src={post.fimg_url} fluid className="smallArticleImage" />
                                    </Row>
                                </Col> 
                                
                                <Col md={8}>
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
                                            post.content.rendered.replace("<p>","").replace('</p>',"").length > 150
                                            ?
                                            post.content.rendered.replace("<p>","").replace('</p>',"").substr(1,149) + "..."
                                            :
                                            post.content.rendered.replace("<p>","").replace('</p>',"")
                                        }
                                    </p>
                                    <p className="smallArticleDate">
                                        {moment(post.date).format("DD MMMM YYYY")}
                                    </p>
                                </Col>   
                            </Row>
                        </div>
                        </Row>
                    )
                }
                </>
                {/* LATEST 3 NEWS */}
            </div>
            </>
        );
    };

    renderEvents2 = () => {
        const { events } = this.props;

        return (
            <>
            
            <div>
                {/* TITLE */}
                <Row>
                <div className="sectionTitleContainer">
                    <h4 className="sectionTitle">Upcoming Events</h4>
                </div>
                <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                {/* LATEST NEWS */}
                {
                    events[0] &&
                    <>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Image src={events[0].fimg_url} fluid className="bigArticleImage" />
                            </Row>

                            <Row>
                                <div className="articleTitleContainer">
                                    <h5>{events[0].title.rendered}</h5>
                                </div>
                            </Row>
                            
                            <Row>
                                <p className="articleDate">
                                    {moment(events[0].date).format("DD MMMM YYYY")}
                                </p>
                            </Row>

                            <Row>
                                <p className="articleContent">
                                    {events[0].content.rendered.replace("<p>","").replace('</p>',"")}
                                </p>
                            </Row>
                             <hr />
                        </Col>
                    </Row>
                    </>
                }
                {/* LATEST ./NEWS */}
                
                {/* LATEST 3 NEWS */}
                <div>
                {
                    events.map((event,index) => (
                    index > 0 && index < 4 &&
                    <>
                    <div style={{marginBottom : 10+"px"}}>
                        <Row>
                            <Col md={4}>
                                <Row>
                                    <Image src={event.fimg_url} fluid className="smallArticleImage" />
                                </Row>
                            </Col> 
                            
                            <Col md={8}>
                                <h5 className="smallArticleTitle">
                                    {
                                        event.title.rendered.length > 111 
                                        ?
                                        event.title.rendered.substr(1,110) + "..."
                                        :
                                        event.title.rendered                                
                                    }
                                </h5>
                                <p className="smallArticleContent">
                                    {
                                        event.content.rendered.replace("<p>","").replace('</p>',"").length > 150
                                        ?
                                        event.content.rendered.replace("<p>","").replace('</p>',"").substr(1,149) + "..."
                                        :
                                        event.content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                                <p className="smallArticleDate">
                                    {moment(event.date).format("DD MMMM YYYY")}
                                </p>
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

    renderEvents = () => {
        const { events } = this.props;

        return (
            <>
            
            <div>
                {/* TITLE */}
                    <h4  className="titleInBlack" >Upcoming Events</h4>
                    <hr  className="titleSeperator" />          
                {/* ./TITLE */}
                
                {/* LATEST NEWS */}
                    {
                        events[0] &&
                        <div>
                        <Row>
                            <Col md={11}>
                                <Image src={events[0].fimg_url} fluid style={{ marginBottom : 30+"px", marginTop : 30+"px" }} />
                        
                                <h3 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    events[0].title.rendered.length > 111 
                                    ?
                                    events[0].title.rendered.substr(1,110) + "..."
                                    :
                                    events[0].title.rendered                                
                                }
                                </h3>
                                <p style={{fontFamily : 'Poppins SemiBold', fontSize : 15,color : '#0099CC'}}>{moment(events[0].date).format("DD MMMM YYYY")}</p>
                                <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                    {
                                        events[0].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[0].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[0].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                                <hr />
                            </Col>
                            <Col md={1} />
                        </Row>
                        </div>
                    }
                {/* LATEST ./NEWS */}
                
                {/* LATEST 3 NEWS */}
                    <div>
                    {
                     events.map((event,index) => (
                        index > 0 && index < 4 &&
                        <>
                            <div style={{marginBottom : 10+"px"}}>
                            <Row>
                                <Col md={4}>
                                    <Image src={event.fimg_url} fluid style={{ resizeMode : 'contain' }} />
                                </Col> 

                                <Col md={8}>
                                <h5 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                        {
                                            event.title.rendered.length > 111 
                                            ?
                                            event.title.rendered.substr(1,110) + "..."
                                            :
                                            event.title.rendered                                
                                        }
                                    </h5>
                                    <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                            {
                                                event.content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                                ?
                                                event.content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                                :
                                                event.content.rendered.replace("<p>","").replace('</p>',"")
                                            }
                                        </p>
                                    <p style={{fontFamily : 'Poppins SemiBold', fontSize : 14,color : '#0099CC'}}>{moment(event.date).format("DD MMMM YYYY")}</p>
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
              <h4  className="titleInBlackSmall" >Nos activités</h4>
              <hr  className="titleSeperator" />  

              <Row>
                {
                    activites.map((activity,index) => 
                        index < 4 &&
                        <Col key={index}>
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

