import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
    Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

import {
    config
} from '../../constants/AppConfig';

// Styling :
import './SeeMore.css';

// Components :
import Layout from '../../components/Layout';
import ThumbDoc from '../../components/ThumbDoc';
import LottieLoader from '../../components/LottieLoader';

import UltimatePagination from '../../components/Paginate';

export default class SeeMore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts : [],
            categoryTitle : '',

            currentPage: 1,
            articlesPerPage: 10,
        };

        this.getArticles(this.props.match.params.category_slug,1);
    };


  
    render() {
        const { posts,categoryTitle } = this.state;

        if(posts.length > 0) {

            return (
                <Container fluid>
                    <Layout columns={8} style={{textAlign: 'center',marginBottom: '50px'}}>
                        <p className="seeMoreTitle">{categoryTitle}</p>

                        {this.renderPosts(posts,categoryTitle)}

                        {/* PAGINATION */}
                        <Row>
                            <Col xl={6} style={{textAlign: 'center'}}>
                                <UltimatePagination 
                                    currentPage={this.state.currentPage}
                                    totalPages={Math.ceil(posts[0].fcategory[0].category_count / 10)}
                                    boundaryPagesRange={1}
                                    siblingPagesRange={2}
                                    hideEllipsis={false}
                                    hidePreviousAndNextPageLinks
                                    hideFirstAndLastPageLinks
                                    onChange={(current) => this.callPage(current) }
                                />
                            </Col>
                        </Row>
                        {/* PAGINATION */}
                         
                    </Layout>
                
                
                </Container>
            )
        } else {
            return (
                <LottieLoader />
            )
        }
    }

    renderPosts = (posts,categoryTitle) => (
        <Col xl={12}>
            {
                posts.map((post,index) => 
                    <Row className="seeMorePostContainer">
                        <Col xl={5}>
                            <Row>
                            
                            {
                                post.fimg_url !== false
                                ?
                                <Image src={post.fimg_url} alt={post.title.rendered} fluid className="seeMoreImage" />
                                :
                                <ThumbDoc 
                                    title={categoryTitle}
                                    containerClass="thumbMdContainer"
                                    imageClass="thumbMdImage" 
                                    titleClass="thumbMdTitle" 
                                    descClass="thumbMdDesc" 
                                />
                            }
                        
                            </Row>
                        </Col>

                        <Col xl={7} className="seeMoreTextsContainer">
                            <Row>
                                <p className="seeMorePostTitle" dangerouslySetInnerHTML={{__html: post.title.rendered}}></p>
                            </Row>

                            <Row>
                                <p className="seeMorePostDate">{moment(post.date).format("DD MMMM YYYY")}</p>
                            </Row>

                            <Row>
                                {
                                    post.excerpt.rendered.length > 0
                                    ?
                                    <p className="seeMorePostDesc" dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substr(0,200)+"..."}}></p>
                                    :
                                    <p className="seeMorePostDesc" dangerouslySetInnerHTML={{__html: post.content.rendered.substr(0,200)+"..."}}></p>
                                }
                            </Row>

                            <Row style={{float: 'right'}}>
                                <Link 
                                    className="btn btn-primary soloButton"
                                    to={{ pathname : `/article/${post.slug}`}}
                                >
                                    Lire l'article
                                </Link>
                            </Row>
                        </Col>
                            <hr className="divider" />
                        </Row>

                )
            }
        </Col> 
    );

    callPage = (current) => {
        this.setState({ 
            currentPage: current,
            posts : [],
        });
        window.scrollTo(0, 0);
     
        this.getArticles(this.props.match.params.category_slug,current);
    }

    getArticles = (cat_slug,page_num) => {

        // console.log("Pasing", cat_slug);

        axios.get(`${config.url}wp/v2/categories?slug=${cat_slug}`)
          .then(cat_response => {
            
            this.setState({
                categoryTitle : cat_response.data[0].name
            });

            axios.get(`${config.url}wp/v2/posts?categories=${cat_response.data[0].id}&page=${page_num}&per_page=10`)
            .then(postsResponse => {
               
                this.setState({
                    posts : postsResponse.data,
                });
                
            })
            .catch(error => {
                // console.log("erreur axios getting Posts",error);
            });

          })
          .catch(error => {
            // console.log("erreur axios getting Category", error);
          });
        
    }
}
