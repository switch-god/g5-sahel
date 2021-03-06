import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
    Container
} from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';
import ThumbDoc from '../../components/ThumbDoc';

import { config,APPEL_OFFRE, SDS, PIP, UNCATEGORIZED,SANS_CATEGORIE,CGU} from '../../constants/AppConfig';

import $ from 'jquery';

// Styling and Images :
import './SoloPage.css';  
import LottieLoader from '../../components/LottieLoader';

export default class SoloPage extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            publication : {},
            news : [],
        };

        this.getArticle(this.props.match.params.slug);
    };
    
    componentDidMount() {
        // Get latest News :
        this.getLatestNews();
    };

    componentDidUpdate() {
        this.RemoveStyles();
        this.removeImages();
    };

    

    render() {
        const { publication,news } = this.state;
      
     
        if(publication[0]) {
            document.title = `${config.siteName} - ${publication[0].title.rendered}`;
            return (
                <Container fluid>
                <Layout xs={4} style={{textAlign: 'center',marginBottom: '50px'}}>
                    {/* <p className="soloTitle">{publication[0].fcategory[0].category_name}</p> */}
                    <p className="articleTitle" dangerouslySetInnerHTML={{__html: publication[0].title.rendered}}></p>
                    {/* <p className="articleDate">{moment(publication[0].date).format("DD MMMM YYYY")}</p> */}
    
                        <Row>
                            <Col xl={1} />
    
                            <Col>
                                {
                                    publication[0].fimg_url !== false 
                                    ?
                                    <Image src={publication[0].fimg_url} alt={publication[0].title.rendered} fluid className="articleImage" />
                                    :
                                    <ThumbDoc 
                                        title={publication[0].fcategory[0].category_name} 
                                        containerClass="thumbSoloContainer" 
                                        imageClass="thumbSoloImage" 
                                        titleClass="thumbSoloTitle" 
                                        descClass="thumbSoloDesc" />     
                                }
                            </Col>
                            
                            <Col xl={1} />
                        </Row>
                    
                </Layout>
                
                <Layout columns={8}>
                    {/* <div id="theDiv" style={{textAlign: 'center'}}></div> */}
                    <p className="wordpressData" style={{textAlign: 'center'}} id="data" dangerouslySetInnerHTML={{__html: publication[0].content.rendered}}></p>
                </Layout>
                
                {
                    news.length > 0 &&
                    <Layout style={{marginTop: '80px'}}> 
                        {/* TITLE */}
                        <Row id="infrastructure" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                            <div className="sectionTitleContainer">
                                <h4 className="sectionTitle">Dernières nouvelles</h4>
                            </div>
                            <hr  className="titleSeperator" />  
                        </Row>
                            {/* ./TITLE */}
                            {news.length > 0 && this.renderLatestNews(news)}
                    </Layout>
                }
    
    
                <div style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Layout>
                        <Newsletter />
                    </Layout>
                </div>
                </Container>
            );
        } else {
           return (<LottieLoader bottom />) 
        }
    }

    RemoveStyles = () => {
        $('#data').removeAttr('style'); 
        $('span').removeAttr('style'); 
        $('p').removeAttr('style');
    };

    removeImages = () => {
        // $('#data img').remove();
        // $('#theDiv').prepend( $('#data img') )
        // $('#data img').css("text-align","center");

        $('#data img').removeAttr('style'); 
        $('#data img').removeClass(); 
        $('#data figure').css('text-align','center'); 
    }
    
    renderLatestNews = (news) => (
        
        <Row>
        {
            news.map((item,index) => 
            item && item.status == "publish" && index < 4 &&
                <Col xs={12} xl={3}>
                    <a style={{textDecoration: 'none'}} href={`/article/${item.slug}`}>
                        {
                            item.fimg_url !== false
                            ?
                            <Image src={item.fimg_url} alt={item.title.rendered} fluid className="newsImage" />
                            :
                            <ThumbDoc 
                            title={item.fcategory[0].category_name} 
                            containerClass="thumbSoloSmallContainer"
                            imageClass="thumbSoloSmallImage" 
                            titleClass="thumbSoloSmallTitle" 
                            descClass="thumbSoloSmallDesc" 
                            />
                        }
                        
                        <div style={{marginTop : 20+"px"}}>
                            
                            <div className="newsCategoryContainer">
                                <h5 className="newsCategory" >{item.fcategory[0].category_name}</h5>
                            </div>
                            
                            <div className="newsTitleContainer">
                                {
                                    item.title.rendered.length > 50
                                    ?
                                    <p  className="newsTitle" dangerouslySetInnerHTML={{__html: item.title.rendered.substr(0,50)+"..."}}></p>
                                    :
                                    <p  className="newsTitle" dangerouslySetInnerHTML={{__html: item.title.rendered}}></p>
                                } 
                            </div>

                        </div>
                    </a>
                </Col>
            )
        }
    </Row>    
    );


    getArticle = async (slug) => {
        await axios.get(`${config.url}wp/v2/posts?slug=${slug}`)
        .then( async response => {
            await this.setState({
                publication : response.data,
            });
        })
        .catch(error => {
            // console.log("erreur axios getArticle/SoloPage");
        });

    }
  
    getLatestNews = async () => {
        axios.get(`${config.url}wp/v2/posts?per_page=4&categories_exclude=${APPEL_OFFRE}+${SDS}+${PIP}+${UNCATEGORIZED}+${SANS_CATEGORIE}+${CGU}`)
        .then( response => {
            this.setState({
                news : response.data
            });        
        })
        .catch(error => {
            console.log("erreur axios getLatestNews/SoloPage",error);
        });
    }
}
