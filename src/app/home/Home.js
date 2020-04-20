import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';
import { Player, BigPlayButton} from 'video-react';
import moment from 'moment';


// Connect to redux : 
    import { connect } from 'react-redux';
    import { getImagesBloc,getActivities,getLatestNews,getLatestEvents } from '../../redux/actions/PostsActions';


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

    render() {
        return (
            <Container fluid>
                {this.renderImagesBloc()}


                {/* NEW & EVENTS */}
                <Row style={{marginTop : 50 + "px", marginBottom : 50+"px"}}>
                    <Col />

                    <Col md={10}>
                        <Row>
                            <Col md={6}>
                                {this.renderNews()}
                            </Col>
                            
                            <Col md={6}>
                                
                                {this.renderEvents()}
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
                                            <h3 style={styles.imageBigText}>{imagesBloc[2].title.rendered}</h3>
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
                {/* TITLE */}
                <h4  style={styles.Title} >Latest News</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '83%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                  {/* ./TITLE */}
                
                {/* LATEST NEWS */}
                    {
                        posts[0] &&
                        <div>
                        <Row>
                            <Col md={11}>
                                <Image src={posts[0].fimg_url} fluid style={{ marginBottom : 30+"px", marginTop : 30+"px" }} />
                        
                                <h3 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    posts[0].title.rendered.length > 111 
                                    ?
                                    posts[0].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[0].title.rendered                                
                                }
                                </h3>
                                <p style={{fontFamily : 'Poppins SemiBold', fontSize : 15,color : '#0099CC'}}>{moment(posts[0].date).format("DD MMMM YYYY")}</p>
                                <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                    {
                                        posts[0].content.rendered.replace("<p>","").replace('</p>',"").length > 251
                                        ?
                                        posts[0].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        posts[0].content.rendered.replace("<p>","").replace('</p>',"")
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
                    
                    posts[1] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col md={4}>
                            <Image src={posts[1].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col md={8}>
                            
                            <h5 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    posts[1].title.rendered.length > 111 
                                    ?
                                    posts[1].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[1].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                    {
                                        posts[1].content.rendered.replace("<p>","").replace('</p>',"").length > 251
                                        ?
                                        posts[1].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        posts[1].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'Poppins SemiBold', fontSize : 14,color : '#0099CC'}}>{moment(posts[1].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

                    }

                    {
                    posts[2] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col md={4}>
                            <Image src={posts[2].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col md={8}>
                            <h5 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    posts[2].title.rendered.length > 111 
                                    ?
                                    posts[2].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[2].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                    {
                                        posts[2].content.rendered.replace("<p>","").replace('</p>',"").length > 251
                                        ?
                                        posts[2].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        posts[2].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'Poppins SemiBold', fontSize : 14,color : '#0099CC'}}>{moment(posts[2].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

                    }

                    {
                    posts[3] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col md={4}>
                            <Image src={posts[3].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col md={8}>
                            <h5 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    posts[3].title.rendered.length > 111 
                                    ?
                                    posts[3].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[3].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                {
                                    posts[3].content.rendered.replace("<p>","").replace('</p>',"").length > 251
                                    ?
                                    posts[3].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                    :
                                    posts[3].content.rendered.replace("<p>","").replace('</p>',"")
                                }
                            </p>
                            <p style={{fontFamily : 'Poppins SemiBold', fontSize : 14,color : '#0099CC'}}>{moment(posts[3].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

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
                    <h4  style={styles.TitleEvents} >Upcoming Events</h4>
                    <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '83%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />          
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
                    
                    events[1] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col md={4}>
                            <Image src={events[1].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col md={8}>
                        <h5 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    events[1].title.rendered.length > 111 
                                    ?
                                    events[1].title.rendered.substr(1,110) + "..."
                                    :
                                    events[1].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                    {
                                        events[1].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[1].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[1].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'Poppins SemiBold', fontSize : 14,color : '#0099CC'}}>{moment(events[1].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

                    }

                    {
                    events[2] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col md={4}>
                            <Image src={events[2].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col md={8}>
                        <h5 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    events[2].title.rendered.length > 111 
                                    ?
                                    events[2].title.rendered.substr(1,110) + "..."
                                    :
                                    events[2].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                    {
                                        events[2].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[2].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[2].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p><p style={{fontFamily : 'Poppins SemiBold', fontSize : 14,color : '#0099CC'}}>{moment(events[2].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

                    }

                    {
                    events[3] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col md={4}>
                            <Image src={events[3].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col md={8}>
                            <h5 style={{fontFamily : 'Poppins Bold',fontSize : 15}}>
                                {
                                    events[3].title.rendered.length > 111 
                                    ?
                                    events[3].title.rendered.substr(1,110) + "..."
                                    :
                                    events[3].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'Poppins ExtraLight', fontSize : 13}}>
                                    {
                                        events[3].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[3].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[3].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'Poppins SemiBold', fontSize : 14,color : '#0099CC'}}>{moment(events[3].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

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
              <h4  style={styles.TitleNosActivites} >Nos activités</h4>
              <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  

              <Row>
                {
                    activites.map((activity,index) => 
                        index < 4 &&
                        <Col>
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
    Title : {
        width : '30%',
        color : '#fff',
        fontFamily : 'Poppins Bold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    TitleEvents : {
        width : '40%',
        color : '#fff',
        fontFamily : 'Poppins Bold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    TitleNosActivites : {
        width : '20%',
        color : '#fff',
        fontFamily : 'Poppins Bold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
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
    imagesBloc : state.postsR.imagesBloc,
    activites : state.postsR.activites,
    posts : state.postsR.posts,
    events : state.postsR.events,
});

export default connect(mapStateToProps,{ getImagesBloc,getActivities,getLatestNews,getLatestEvents })(Home);

