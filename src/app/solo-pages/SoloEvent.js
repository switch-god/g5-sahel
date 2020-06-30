import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
    Container,
} from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';
import ThumbDoc from '../../components/ThumbDoc';
import LottieLoader from '../../components/LottieLoader';

import { config,APPEL_OFFRE, SDS, PIP, UNCATEGORIZED} from '../../constants/AppConfig';

// Styling and Images :
import './SoloPage.css';

import THUMB from '../../assets/images/Thumbs/content-placeholder.jpg';    

export default class SoloEvent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            publication : [],
            news : [],
        };
        this.getEvent(this.props.match.params.slug);
    };
    
    componentDidMount() {
        // Get latest News :
        this.getLatestNews();
    }
   
    render() {
        // const { solo_title,publication } = this.props.location.state;
        const { publication,news } = this.state;
        // console.log(publication)
        if(publication[0]) {
            document.title = `${config.siteName} - ${publication[0].title}`;
            
            return (
                <Container fluid>
                <Layout style={{textAlign: 'center',marginBottom: '50px'}}>
                    <p className="soloTitle">Évenements</p>
                    <p className="articleTitle" dangerouslySetInnerHTML={{__html: publication[0].title}}></p>
                    <p className="articleDate">{moment(`${publication[0].start_date_details.year}-${publication[0].start_date_details.month}-${publication[0].start_date_details.day}`).format("DD MMMM YYYY")}</p>
                    {/* <p className="wordpressData" dangerouslySetInnerHTML={{__html: publication[0].description}}></p> */}
                    <p className="wordpressData">{publication[0].venue.venue} {publication[0].venue.city} {publication[0].venue.country}</p>
                                        
                        <Row>
                            <Col xl={1} />
    
                            <Col>
                                {
                                    publication[0].image !== false 
                                    ?
                                    <Image src={publication[0].image.url} alt={publication[0].title} fluid className="articleImage" />
                                    :
                                    <ThumbDoc title={"Évenements"} containerClass="thumbSoloContainer" imageClass="thumbSoloImage" titleClass="thumbSoloTitle" descClass="thumbSoloDesc" />
                                            
                                }
                            </Col>
                            
                            <Col xl={1} />
                        </Row>
                </Layout>
                
                <Layout columns={8}>
                    <p className="wordpressData" dangerouslySetInnerHTML={{__html: publication[0].description}}></p>
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
            return <LottieLoader />
        }
    }

    
    renderLatestNews = (news) => (
        
        <Row>
        {
            news.map((item,index) => 
            item && item.status == "publish" && index < 4 &&
                <Col xs={12} xl={3}>
                    
                    <Image src={item.fimg_url !== false ? item.fimg_url : THUMB } alt={item.title.rendered} fluid className="newsImage" />
                    
                    <div style={{marginTop : 20+"px"}}>
                        
                        <div className="newsCategoryContainer">
                            <h5 className="newsCategory" >{item.fcategory[0].category_name}</h5>
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


    getEvent = (slug) => {
  
        axios.get(`${config.url}tribe/events/v1/events/by-slug/${slug}`)
        .then( async response => {
            console.log(response.data);
            const tab = [];
            tab.push(response.data);
            await this.setState({
                publication : tab,
            });
        })
        .catch(error => {
            // console.log("erreur axios getArticle/SoloPage");
        });

    }
  
    getLatestNews = async () => {
        axios.get(`${config.url}wp/v2/posts?per_page=4&categories_exclude=${APPEL_OFFRE}+${SDS}+${PIP}+${UNCATEGORIZED}`)
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
