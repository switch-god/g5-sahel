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

export default class SeeMoreSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts : [],
            categoryTitle : '',

            currentPage: 1,
            articlesPerPage: 10,
            totalSearchPosts:0, 
            totalPages: 3,
        };

        this.getArticles(this.props.match.params.search,1);
    };


  
    render() {
        const { posts } = this.state;
       
        if(posts.length > 0) {

            return (
                <Container fluid>
                    <Layout columns={8} style={{textAlign: 'center',marginBottom: '50px'}}>
                        <p className="seeMoreTitle">{"Recherche"}</p>
                        <p className="seeMoreTitle">"{this.state.totalSearchPosts}" résultat(s) trouvé(s)</p>

                        {this.renderPosts(posts,"Rechercher")}

                        {/* PAGINATION */}
                        <Row>
                            <Col xl={6} style={{textAlign: 'center'}}>
                                <UltimatePagination 
                                    currentPage={this.state.currentPage}
                                    totalPages={this.state.totalPages}
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

    renderPosts = (posts) => (
        <Col xl={12}>
            {
                posts.map((postItem,index) => {
                    let post = postItem._embedded.self[0];
                    if(post) 
                    return (

                        <Row className="seeMorePostContainer">
                            <Col xl={5}>
                                <Row>
                                
                                {
                                    post.fimg_url !== false
                                    ?
                                    <Image src={post.fimg_url} fluid className="seeMoreImage" />
                                    :
                                    <ThumbDoc 
                                        title={post.fcategory[0].category_name}
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
                                        post.excerpt
                                        ?
                                        <p className="seeMorePostDesc" dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substr(0,200)+"..."}}></p>                                        
                                        :                               
                                        <p className="seeMorePostDesc"></p>                                        
                                    }
                                </Row>
    
                                <Row style={{float: 'right'}}>
                                    {
                                        post.fpdf_url && post.fpdf_url !== false
                                        ?
                                        <Link 
                                            className="btn btn-primary soloButton"
                                            to={{ pathname : post.fpdf_url}}
                                        >
                                            Téléchargez
                                        </Link>
                                        :
                                        post.type === "job_listing"
                                        ?
                                        <Link 
                                            className="btn btn-primary soloButton"
                                            to={{ pathname : '/recrutement'}}
                                        >
                                            Postuler
                                        </Link>
                                        :
                                        <Link 
                                            className="btn btn-primary soloButton"
                                            to={{ pathname : `/article/${post.slug}`}}
                                        >
                                            Lire l'article
                                        </Link>
                                    }
                                </Row>
                            </Col>
                                <hr className="divider" />
                            </Row>
                    );
                }

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
     
        this.getArticles(this.props.match.params.search,current);
    }

    getArticles = (searchInput,page_num) => {

        axios.get(`${config.url}wp/v2/search?search=${searchInput}&page=${page_num}&per_page=10&_embed`)
          .then(response => {
                this.setState({
                    totalSearchPosts: response.headers['x-wp-total'], 
                    totalPages: response.headers['x-wp-totalpages'],
                    posts : response.data,
                });
                
            })
            .catch(error => {
                // console.log("erreur axios getting Posts",error);
            });
        
    }
}
