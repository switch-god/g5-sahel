import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
} from 'react-bootstrap';
import moment from 'moment';

// Connect to redux : 
    import { connect } from 'react-redux';
    import { getLatestNews } from '../../redux/actions/PostsActions';
// Components :
    import Layout from '../../components/Layout';
    import Newsletter from '../../components/Newsletter';

// Icons :
import {FaFacebookF,FaYoutube,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

import Image1 from '../../assets/images/Home/1.png';
import IMG_TEST from '../../assets/images/News/news.png';
import './news.css';

class News extends Component {

    constructor(props) {
        super(props);

        this.props.getLatestNews();
    }

    render() {

        return (
            <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1>Actualités</h1>
                </div>

                {this.renderBloc1()}

                {this.renderCommuniquePresse()}

                {this.renderActualites()}

                {this.renderAgenda()}

                <Layout style={{marginBottom : 40+"px"}}>
                    <Newsletter />
                </Layout>
              <>
               

            </>

            </>
        )
    }

    renderBloc1 = () => {
        const { posts } = this.props;

        return (
        <Row>
            <Col />

            <Col md={10}>
                <Row>
                    <Col sm={8} md={8}>
                        <div className="container-for-img">    
                            <Image src={Image1} fluid   />
                            <div className="content">
                                <h3 style={{ fontFamily : 'PopiBold' }}>SOMMET EXTRAORDINAIRE DE LA CEDEAO SUR LA LUTTE CONTRE LE TERRORISME</h3>
                                <p style={{ fontFamily : 'PopiSemiBold' }}>19 Septembre 2019</p>
                            </div>
                        </div>
                    </Col>
                    
                    <Col sm={4} md={4}>
                        <Row>
                            <h4 style={styles.TitleLarge} >Social Networks</h4>
                            <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                        </Row>

                        <Row style={{marginBottom : 10+"px"}}>
                            <Col>
                                <a style={{fontSize : 20+"px"}}><h4><FaFacebookF size={26+"px"} color={'black'} style={{marginRight : 10+"px"}} /> FACEBOOK </h4></a>
                            </Col>

                            <Col>
                                <a style={{fontSize : 20+"px"}}><h4><FaTwitter size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> TWITTER</h4></a>
                            </Col>
                        </Row>
                        
                        <Row style={{marginBottom : 10+"px"}}>
                            <Col>
                                <a style={{fontSize : 20+"px"}}><h4><FaYoutube size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> YOUTUBE</h4></a>
                            </Col>
                            
                            <Col>
                                <a style={{fontSize : 20+"px"}}><h4><FaLinkedinIn size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> LINKEDIN</h4></a>
                            </Col>
                        </Row>

                        <Row>
                            {/* LATEST 3 NEWS */}
                            
                            <div>
                                <h4 style={styles.Title} >Ce mois</h4>
                                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
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
                                    
                                    <p style={{fontFamily : 'PopiSemiBold', fontSize : 12,color : '#666666'}}>{moment(posts[1].date).format("DD MMMM YYYY")}</p>
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
                                    
                                    <p style={{fontFamily : 'PopiSemiBold', fontSize : 12,color : '#666666'}}>{moment(posts[2].date).format("DD MMMM YYYY")}</p>
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
                                    
                                    <p style={{fontFamily : 'PopiSemiBold', fontSize : 12,color : '#666666'}}>{moment(posts[3].date).format("DD MMMM YYYY")}</p>
                                </Col>   

                                {/* <Col /> */}
                            </Row>
                            </div>

                            }
                            </div>
                        {/* LATEST 3 NEWS */}
                        </Row>

                    </Col>
                </Row>
            </Col>
    
            <Col />
        </Row>
    
    );
    };

    renderCommuniquePresse = () => {
        
        return (
            <Layout style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                
                <h4  style={styles.Title} >COMMUNIQUÉS DE PRESSE</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  

                <Row>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                </Row> 
            </Layout>
        );
    }

    renderActualites = () => {
        const { posts } = this.props;

        return (
            <Layout style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                
                <h4  style={styles.Title2} >Actualités</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  

                <Row>
                    {
                        posts.map(post => 
                            <Col>
                                <Image src={post.fimg_url} fluid />
                                <p style={styles.activityTitle}>{post.title.rendered}</p>
                                <p style={styles.activityDesc}>{moment(post.date).format("DD MMMM YYYY")}</p>
                            </Col>    
                        )
                    }
                   
                </Row> 
            </Layout>
        );
    }

    renderAgenda = () => {
        
        return (
            <Layout style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                
                <h4  style={styles.Title2} >AGENDA</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  

                <Row>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                </Row> 
            </Layout>
        );
    }

}

const styles = {
    Title : {
        width : '30%',
        color : '#fff',
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 15+"px",
        paddingBottom: 15+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    Title2 : {
        width : '20%',
        color : '#fff',
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 15+"px",
        paddingBottom: 15+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    TitleLarge : {
        width : '40%',
        color : '#fff',
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 15+"px",
        paddingBottom: 15+"px", 
        borderWidth : 10+"px",
        textAlign : 'center'
    },
    activityTitle : {
        color : 'black',
        fontSize : 17,
        fontFamily : 'PopiBold',
        marginTop : 10+"px",
    },
    activityDesc : {
        color : '#0099CC',
        fontSize : 13,
        fontFamily : 'PopiSemiBold',
    },
}


const mapStateToProps = state => ({
    posts : state.postsR.posts,
});

export default connect(mapStateToProps,{ getLatestNews })(News);

