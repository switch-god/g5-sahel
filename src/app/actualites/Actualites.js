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
    import LottieLoader from '../../components/LottieLoader';

// Icons :
import {FaFacebookF,FaYoutube,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

import Image1 from '../../assets/images/Home/1.png';
import IMG_TEST from '../../assets/images/News/news.png';
import './actualites.css';

class Actualites extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading : true,
        };

        this.props.getLatestNews();
    }

    componentDidMount() {
        setTimeout(() => {
             this.setState({loading : false})
         },2000);
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
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>Actualités</h1>
                </div>

                <Container fluid>
                    {this.renderBloc1()}

                    {this.renderCommuniquePresse()}

                    {this.renderActualites()}

                    {this.renderAgenda()}
                </Container>

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
                <Col xs={0} xl={1} />

                <Col xs={12} xl={10}>
                    
                    <Row>
                        <Col xs={12} xl={8}>
                            <div className="news-big-img">    
                                <Image src={Image1} fluid className="bigImageBloc1" />
                                <div className="content">
                                    <h3 style={{ fontFamily : 'Poppins Bold' }}>SOMMET EXTRAORDINAIRE DE LA CEDEAO SUR LA LUTTE CONTRE LE TERRORISME</h3>
                                    <p style={{ fontFamily : 'Poppins Light',paddingLeft : 5+"px" }}>19 Septembre 2019</p>
                                </div>
                            </div>
                        </Col>
                        
                        <Col xs={12} xl={4}>
                            
                        {/* TITLE */}
                        <Col xs={12} xl={12}>
                            <Row>
                                <div className="sectionTitleContainerActualites">
                                    <h4 className="sectionTitleActualites">Social Networks</h4>
                                </div>
                                <hr  className="titleSeperator" />  
                            </Row>
                        </Col>
                        {/* ./TITLE */}
                        
                        
                        <Col xs={12} xl={12}>
                            <Row style={{marginBottom : 10+"px"}}>
                                <Col xs={6} xl={6}>
                                    <a  href="https://www.facebook.com"  className="socialLinka"><h4><FaFacebookF size={26+"px"} color={'black'} style={{marginRight : 10+"px"}} /> FACEBOOK </h4></a>
                                </Col>

                                <Col xs={6} xl={6}>
                                    <a  href="https://twitter.com/"  className="socialLinka"><h4><FaTwitter size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> TWITTER</h4></a>
                                </Col>
                            </Row>
                            
                            <Row style={{marginBottom : 10+"px"}}>
                                <Col xs={6} xl={6}>
                                    <a  href="https://www.youtube.com" className="socialLinka"><h4><FaYoutube size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> YOUTUBE</h4></a>
                                </Col>
                                
                                <Col xs={6} xl={6}>
                                    <a  href="https://www.linkedin.com"  className="socialLinka"><h4><FaLinkedinIn size={30+"px"} color={'black'} style={{marginRight : 10+"px"}} /> LINKEDIN</h4></a>
                                </Col>
                            </Row>
                        </Col>


                        <Col xs={12} xl={12}>
                            {/* TITLE */}
                            <Row>
                                <div className="sectionTitleContainerActualites">
                                    <h4 className="sectionTitleActualites">Ce mois</h4>
                                </div>
                                <hr  className="titleSeperator" />  
                            </Row>
                        {/* ./TITLE */}
                        </Col>
                        
                        <Col xs={12} xl={12}>
                        <Row className="articlesRow">
                        {/* LATEST 3 NEWS */}   
                
                            {
                            posts.map((post,index) => 
                                index < 3 &&
                                <Row key={index} className="ceMoisArticleContainer">
                                    <Col xs={12} xl={5}>
                                        <Image src={post.fimg_url} fluid className="imageCeMois" />
                                    </Col> 

                                    <Col xs={12} xl={7}>
                                        <h5 className="titleCeMois">
                                            {
                                                post.title.rendered.length > 100 
                                                ?
                                                post.title.rendered.substr(1,99) + "..."
                                                :
                                                post.title.rendered                                
                                            }
                                        </h5>
                                        <p  className="dateCeMois">{moment(posts[1].date).format("DD MMMM YYYY")}</p>
                                    </Col>   
                                </Row>                        
                            )
                        }
                        {/* LATEST 3 NEWS */}
                        </Row>    
                        
                        </Col>
                        
                        </Col>
                    </Row>
                </Col>
        
                <Col xs={0} xl={1} />
            </Row>  
        );
    };

    renderCommuniquePresse = () => {
        
        return (
            <Layout style={{marginTop : 40+"px", marginBottom : 40+"px"}}>
                
                {/* <h4  style={styles.Title} >COMMUNIQUÉS DE PRESSE</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />   */}
                
                {/* TITLE */}
                <Row className="sectionTitleRowActualites">
                    <div className="sectionTitleContainerActualites">
                        <h4 className="sectionTitleActualites">Communiqués de presse</h4>
                    </div>
                    <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                <Row>
                    <Col xs={12} xl={3}>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}} />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col xs={12} xl={3}>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}} />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col xs={12} xl={3}>
                        <Image src={IMG_TEST} fluid  style={{minHeight : 157+"px"}}/>
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col xs={12} xl={3}>
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
                
                {/* <h4  style={styles.Title2} >Actualités</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />   */}
                {/* TITLE */}
                <Row className="sectionTitleRowActualites">
                    <div className="sectionTitleContainerActualites">
                        <h4 className="sectionTitleActualites">Actualités</h4>
                    </div>
                    <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                <Row>
                    {
                        posts.map((post,index) => 
                            index < 4 &&
                            <Col key={index} xs={12} xl={3}>
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
                
                {/* <h4  style={styles.Title2} >AGENDA</h4>
                <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />   */}
                {/* TITLE */}
                <Row className="sectionTitleRowActualites">
                    <div className="sectionTitleContainerActualites">
                        <h4 className="sectionTitleActualites">Agenda</h4>
                    </div>
                    <hr  className="titleSeperator" />  
                </Row>
                {/* ./TITLE */}

                <Row>
                    <Col xs={12} xl={3}>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}}  />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col xs={12} xl={3}>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}}  />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col xs={12} xl={3}>
                        <Image src={IMG_TEST} fluid style={{minHeight : 157+"px"}}  />
                        <p style={styles.activityTitle}>Tenue à Nouakchott de la 6é session ordinaire du sommet du G5 Sahel</p>
                        <p style={styles.activityDesc}>19 Septembre 2019</p>
                    </Col>
                    <Col xs={12} xl={3}>
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

export default connect(mapStateToProps,{ getLatestNews })(Actualites);

