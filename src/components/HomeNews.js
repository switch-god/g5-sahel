import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

import moment from 'moment';

// Connect to redux : 
    import { connect } from 'react-redux';
    import { getLatestNews } from '../redux/actions/PostsActions';

// Images & Styling :
    import '../app/home/Home.css';

class HomeNews extends Component {
    constructor(props) {
        super(props);
        
        this.props.getLatestNews();
    }


    render() { 
        const { posts } = this.props;


        return (
            <>
            
            <div>
                {/* TITLE */}
                <h4  style={styles.Title} >Nos activités</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '83%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
            
                {/* ./TITLE */}
                
                {/* LATEST NEWS */}
                    {
                        posts[0] &&
                        <div>
                        <Row>
                            <Col md={11}>
                                <Image src={posts[0].fimg_url} fluid style={{ marginBottom : 30+"px", marginTop : 30+"px" }} />
                        
                                <h3 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    posts[0].title.rendered.length > 111 
                                    ?
                                    posts[0].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[0].title.rendered                                
                                }
                                </h3>
                                <p style={{fontFamily : 'PopiSemiBold', fontSize : 15,color : '#0099CC'}}>{moment(posts[0].date).format("DD MMMM YYYY")}</p>
                                <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
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
                            
                            <h5 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    posts[1].title.rendered.length > 111 
                                    ?
                                    posts[1].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[1].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
                                    {
                                        posts[1].content.rendered.replace("<p>","").replace('</p>',"").length > 251
                                        ?
                                        posts[1].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        posts[1].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 14,color : '#0099CC'}}>{moment(posts[1].date).format("DD MMMM YYYY")}</p>
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
                            <h5 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    posts[2].title.rendered.length > 111 
                                    ?
                                    posts[2].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[2].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
                                    {
                                        posts[2].content.rendered.replace("<p>","").replace('</p>',"").length > 251
                                        ?
                                        posts[2].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        posts[2].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 14,color : '#0099CC'}}>{moment(posts[2].date).format("DD MMMM YYYY")}</p>
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
                            <h5 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    posts[3].title.rendered.length > 111 
                                    ?
                                    posts[3].title.rendered.substr(1,110) + "..."
                                    :
                                    posts[3].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
                                {
                                    posts[3].content.rendered.replace("<p>","").replace('</p>',"").length > 251
                                    ?
                                    posts[3].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                    :
                                    posts[3].content.rendered.replace("<p>","").replace('</p>',"")
                                }
                            </p>
                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 14,color : '#0099CC'}}>{moment(posts[3].date).format("DD MMMM YYYY")}</p>
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
    }
}

const styles = {
    Title : {
        width : '30%',
        color : '#fff',
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
}

const mapStateToProps = state => ({
    posts : state.postsR.posts,
});

export default connect(mapStateToProps,{ getLatestNews })(HomeNews);

