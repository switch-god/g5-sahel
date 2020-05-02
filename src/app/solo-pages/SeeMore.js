import React, { Component } from 'react'

import {
    Row,
    Col,
    Image,
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';

// Styling :
import './SeeMore.css';

// Components :
import Layout from '../../components/Layout';
import ThumbDoc from '../../components/ThumbDoc';


export default class SeeMore extends Component {
    constructor(props) {
        super(props)
    };


    render() {
        const { see_more_title, posts} = this.props.location.state;

        return (
            <>
                <Layout style={{textAlign: 'center',marginBottom: '50px'}}>
                    <p className="seeMoreTitle">{see_more_title}</p>
                

                <Col xl={12}>
                    {
                        posts.map((post,index) => 
                            <Row className="seeMorePostContainer">
                                <Col xl={5}>
                                    <Row>
                                    
                                    {
                                        post.fimg_url !== false
                                        ?
                                        <Image src={post.fimg_url} fluid className="seeMoreImage" />
                                        :
                                        <ThumbDoc 
                                            title={see_more_title}
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
                                            to={{
                                                pathname : '/solo-page',
                                                state : { 
                                                    solo_title : see_more_title,
                                                    publication : post,
                                                }
                                            }}
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
                
                </Layout>
            
            
            </>
        )
    }
}
