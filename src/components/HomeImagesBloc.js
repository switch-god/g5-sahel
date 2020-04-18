import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';


import moment from 'moment';

// Connect to redux : 
    import { connect } from 'react-redux';
    import { getImagesBloc } from '../redux/actions/PostsActions';

// Images & Styling :
    import '../app/home/Home.css';
   
class HomeImagesBloc extends Component {
    constructor(props) {
        super(props);
        
        //Get Images and data : 
        this.props.getImagesBloc();
    }


    render() { 
        const { imagesBloc } = this.props;
       
        return (
                <Row>
                    <Col />

                    <Col md={10}>
                        <Row>
                            <Col sm={8} md={8}>
                                <div className="container-for-img">    
                                    {
                                        imagesBloc[2] &&
                                        <>
                                        <Image src={imagesBloc[2].fimg_url} fluid   />
                                        <div className="content">
                                            <h3 style={{ fontFamily : 'PopiBold' }}>{imagesBloc[2].title.rendered}</h3>
                                            <p style={{ fontFamily : 'PopiSemiBold' }}>{moment(imagesBloc[2].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                        </>
                                    }
                                </div>
                            </Col>
                            
                            <Col sm={4} md={4}>
                                
                                <div className="container-for-img">
                                    {
                                        imagesBloc[1] &&
                                        <>
                                        <Image src={imagesBloc[1].fimg_url} fluid />
                                        <div className="content-1">
                                            <h3 style={{ fontFamily : 'PopiBold' }}>{imagesBloc[1].title.rendered}</h3>
                                            <p style={{ fontFamily : 'PopiSemiBold' }}>{moment(imagesBloc[1].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                        </>
                                    }
                                </div>
                                
                                <div className="container-for-img" style={{marginTop : 26 + "px"}}>
                                    {
                                        imagesBloc[0] &&
                                        <>
                                        <Image src={imagesBloc[0].fimg_url} fluid style={{width:'100%'}}  />
                                        <div className="content-1">
                                            <h3 style={{ fontFamily : 'PopiBold' }}>{imagesBloc[0].title.rendered}</h3>
                                            <p style={{ fontFamily : 'PopiSemiBold' }}>{moment(imagesBloc[0].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                        </>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
            
                    <Col />
                </Row>
        );
    }
}

const mapStateToProps = state => ({
    imagesBloc : state.postsR.imagesBloc,
});

export default connect(mapStateToProps,{ getImagesBloc })(HomeImagesBloc);

