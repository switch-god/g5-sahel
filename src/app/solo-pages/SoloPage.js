import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
} from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';
import ThumbDoc from '../../components/ThumbDoc';

import { config } from '../../constants/AppConfig';

// Styling and Images :
import './SoloPage.css';
import THUMB from '../../assets/images/Thumbs/content-placeholder.jpg';    
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
    }
   
    render() {
        // const { solo_title } = this.props.location.state;
        const { category } = this.props.match.params;
        const { publication,news } = this.state;
        
        console.log(publication);
       
        if(publication[0]) {
            return (
                <>
                <Layout style={{textAlign: 'center',marginBottom: '50px'}}>
                    <p className="soloTitle">{category}</p>
                    <p className="articleTitle" dangerouslySetInnerHTML={{__html: publication[0].title.rendered}}></p>
                    <p className="articleDate">{moment(publication[0].date).format("DD MMMM YYYY")}</p>
    
                    
                        <Row>
                            <Col xl={1} />
    
                            <Col>
                                {
                                    publication[0].fimg_url !== false 
                                    ?
                                    <Image src={publication[0].fimg_url} fluid className="articleImage" />
                                    :
                                    <ThumbDoc title={category} containerClass="thumbSoloContainer" imageClass="thumbSoloImage" titleClass="thumbSoloTitle" descClass="thumbSoloDesc" />     
                                }
                            </Col>
                            
                            <Col xl={1} />
                        </Row>
                    
                </Layout>
                
                <Layout columns={8}>
                    <p className="wordpressData" dangerouslySetInnerHTML={{__html: publication[0].content.rendered}}></p>
                </Layout>
                
                {
                    news.length > 0 &&
                    <Layout style={{marginTop: '80px'}}> 
                        {/* TITLE */}
                        <Row id="infrastructure" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                            <div className="sectionTitleContainer">
                                <h4 className="sectionTitle">A la une</h4>
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
                </>
            );
        } else {
           return (<LottieLoader />) 
        }
    }

    
    renderLatestNews = (news) => (
        
        <Row>
        {
            news.map((item,index) => 
            item && item.status == "publish" && index < 4 &&
                <Col xs={12} xl={3}>
                    
                    <Image src={item.fimg_url !== false ? item.fimg_url : THUMB } fluid className="newsImage" />
                    
                    <div style={{marginTop : 20+"px"}}>
                        
                        <div className="newsCategoryContainer">
                            <h5 className="newsCategory" >{item.categories[0].category_name}</h5>
                        </div>
                        
                        <div className="newsTitleContainer">
                            <p  className="newsTitle" dangerouslySetInnerHTML={{__html: item.title.rendered}}></p>
                        </div>

                    </div>
                </Col>
            )
        }
    </Row>    
    );


    getArticle = (slug) => {

        axios.get(`${config.url}wp/v2/posts?slug=${slug}`)
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
        axios.get(`${config.url}wp/v2/posts?per_page=4`)
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
