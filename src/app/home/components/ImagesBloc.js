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
    import { getImagesBloc } from '../../../redux/actions/PostsActions';

// Images & Styling :
    import '../Home.css';
    import Image1 from '../../../assets/images/Home/1.png';
    import Image2 from '../../../assets/images/Home/2.png';
    import Image3 from '../../../assets/images/Home/3.png';


class ImagesBloc extends Component {
    constructor(props) {
        super(props);
        
        //Get Images and data : 
        this.props.getImagesBloc();
    }


    render() { 
        console.log(this.props.imagesBloc);
        
        const { imagesBloc } = this.props;
        console.log(imagesBloc[2]);
        return (
            <Container fluid>
                <Row>
                    <Col />

                    <Col xs md="auto" lg={10}>
                        <Row>
                            <Col lg={8}>
                                <div className="container">    
                                    {
                                        imagesBloc[2] &&
                                        <>
                                        <Image src={imagesBloc[2].fimg_url} fluid style={{width:'100%'}}  />
                                        <div className="content">
                                            <h3 style={{fontFamily : 'PopiBold'}}>{imagesBloc[2].title.rendered}</h3>
                                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 15}}>{moment(imagesBloc[2].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                        </>
                                    }
                                </div>
                            </Col>
                            
                            <Col lg={4}>
                                
                                <div className="container">
                                    {
                                        imagesBloc[1] &&
                                        <>
                                        <Image src={imagesBloc[1].fimg_url} fluid style={{width:'100%'}}  />
                                        <div className="content-1">
                                            <h6 style={{fontFamily : 'PopiBold'}}>{imagesBloc[1].title.rendered}</h6>
                                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 15}}>{moment(imagesBloc[1].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                        </>
                                    }
                                </div>
                                
                                <div className="container" style={{marginTop : 46 + "px"}}>
                                    {
                                        imagesBloc[0] &&
                                        <>
                                        <Image src={imagesBloc[0].fimg_url} fluid style={{width:'100%'}}  />
                                        <div className="content-1">
                                            <h6 style={{fontFamily : 'PopiBold'}}>{imagesBloc[0].title.rendered}</h6>
                                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 15}}>{moment(imagesBloc[0].date).format("DD MMMM YYYY")}</p>
                                        </div>
                                        </>
                                    }
                                </div>

                            </Col>
                        </Row>
                    </Col>
            
                    <Col />
                </Row>

            </Container>
        )
    }
}

const mapStateToProps = state => ({
    imagesBloc : state.postsR.imagesBloc,
});

export default connect(mapStateToProps,{ getImagesBloc })(ImagesBloc);

