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

import { config } from '../../constants/AppConfig';

// Styling and Images :
import './SoloPage.css';
import THUMB from '../../assets/images/Thumbs/content-placeholder.jpg';    

export default class SoloEvent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            news : [],
        };

    };
    
    componentDidMount() {
        // Get latest News :
        this.getLatestNews();
    }
   
    render() {
        const { solo_title,publication } = this.props.location.state;
        const { news } = this.state;
     
        return (
            <>
            <Layout style={{textAlign: 'center',marginBottom: '50px'}}>
                <p className="soloTitle">{solo_title}</p>
                <p className="articleTitle" dangerouslySetInnerHTML={{__html: publication.title}}></p>
                <p className="articleDate">{moment(`${publication.start_date_details.year}-${publication.start_date_details.month}-${publication.start_date_details.day}`).format("DD MMMM YYYY")}</p>
                {/* <p className="wordpressData" dangerouslySetInnerHTML={{__html: publication.description}}></p> */}
                <p className="wordpressData">{publication.venue.venue} {publication.venue.city} {publication.venue.country}</p>
                                    
                {
                    publication.image.url !== false &&
                    <Row>
                        <Col xl={1} />

                        <Col>
                            <Image src={publication.image.url} fluid className="articleImage" />
                        </Col>
                        
                        <Col xl={1} />
                    </Row>
                }
            </Layout>
            
            <Layout columns={8}>
                <p className="wordpressData" dangerouslySetInnerHTML={{__html: publication.description}}></p>
            </Layout>
            
            {
                news.length > 0 &&
                <Layout style={{marginTop: '80px'}}> 
                    {/* TITLE */}
                    <Row id="infrastructure" style={{paddingLeft: '15px',paddingRight : '15px'}}>
                        <div className="sectionTitleContainer">
                            <h4 className="sectionTitle">Latest News</h4>
                        </div>
                        <hr  className="titleSeperator" />  
                    </Row>
                        {/* ./TITLE */}
                        {this.renderLatestNews(this.state.news)}
                </Layout>
            }


            <div style={{marginTop: '30px', marginBottom: '30px'}}>
                <Layout>
                    <Newsletter />
                </Layout>
            </div>
            </>
        );
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
