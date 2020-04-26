import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
    Container
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
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>Actualités</h1>
                </div>

                

                <Container fluid>
                    {this.renderBloc1()}
                </Container>

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
                        <Col xs={12} xl={8}>
                            <div className="news-big-img">    
                                <Image src={Image1} fluid />
                                <div className="content">
                                    <h3 style={{ fontFamily : 'Poppins Bold' }}>SOMMET EXTRAORDINAIRE DE LA CEDEAO SUR LA LUTTE CONTRE LE TERRORISME</h3>
                                    <p style={{ fontFamily : 'Poppins Light',paddingLeft : 5+"px" }}>19 Septembre 2019</p>
                                </div>
                            </div>
                        </Col>
                        
                        <Col xs={10} xl={4}>
                        {/* <Row>
                            <h4 style={styles.TitleLarge} >Social Networks</h4>
                            <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  
                        </Row> */}
                        {/* TITLE */}
                        <Row>
                            <div className="sectionTitleContainer">
                                <h4 className="sectionTitle">Social Networks</h4>
                            </div>
                            <hr  className="titleSeperator" />  
                        </Row>
                        {/* ./TITLE */}

                        <Row style={{marginBottom : 10+"px"}}>
                            <Col>
                                <a style={{fontSize : 20+"px",fontFamily : 'Poppins Bold'}}><h4><FaFacebookF size={26+"px"} color={'black'} style={{marginRight : 10+"px"}} /> FACEBOOK </h4></a>
                            </Col>

                            <Col>
                                <a style={{fontSize : 20+"px",fontFamily : 'Poppins Bold'}}><h4><FaTwitter size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> TWITTER</h4></a>
                            </Col>
                        </Row>
                        
                        <Row style={{marginBottom : 10+"px"}}>
                            <Col>
                                <a style={{fontSize : 20+"px",fontFamily : 'Poppins Bold'}}><h4><FaYoutube size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> YOUTUBE</h4></a>
                            </Col>
                            
                            <Col>
                                <a style={{fontSize : 20+"px",fontFamily : 'Poppins Bold'}}><h4><FaLinkedinIn size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> LINKEDIN</h4></a>
                            </Col>
                        </Row>

                        <Row>
                        
                        {/* LATEST 3 NEWS */}   
                            <div>
                                {/* TITLE */}
                                <Col xs={12} xl={12}>
                                    <Row>
                                        <div className="sectionTitleContainer">
                                            <h4 className="sectionTitle">Ce mois</h4>
                                        </div>
                                        <hr  className="titleSeperator" />  
                                    </Row>
                                </Col>
                                {/* ./TITLE */}
                            {
                            
                            posts.map((post,index) => 
                                index < 3 &&
                                <Col key={index} xs={12} xl={12} style={{marginBottom : 20+"px",marginTop : 10+"px"}}>
                                    <Row>
                                        <Col xs xl={4}>
                                            <Image src={post.fimg_url} fluid style={{ resizeMode : 'contain' }} />
                                        </Col> 

                                        <Col xs xl={8}>
                                            
                                            <h5 style={{fontFamily : 'Poppins Bold',fontSize : 13+"px"}}>
                                                {
                                                    post.title.rendered.length > 100 
                                                    ?
                                                    post.title.rendered.substr(1,99) + "..."
                                                    :
                                                    post.title.rendered                                
                                                }
                                            </h5>
                                            
                                            <p style={{fontFamily : 'Poppins SemiBold', fontSize : 12,color : '#666666'}}>{moment(posts[1].date).format("DD MMMM YYYY")}</p>
                                        </Col>   
                                    </Row>
                                </Col>                            
                            )

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
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}} />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}} />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid  style={{minHeight : 157+"px"}}/>
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}} />
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
                        posts.map((post,index) => 
                            <Col key={index}>
                                <Image src={post.fimg_url} fluid style={{minHeight : 157+"px"}} />
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
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}}  />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}}  />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}}  />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}}  />
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
    posts : state.postsR.posts,
});

export default connect(mapStateToProps,{ getLatestNews })(News);

