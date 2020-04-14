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
    import { getLatestEvents } from '../../../redux/actions/PostsActions';

// Images & Styling :
    import '../Home.css';

class Events extends Component {
    constructor(props) {
        super(props);
        
        this.props.getLatestEvents();
    }


    render() { 
        const { events } = this.props;

        console.log(events);

        return (
            <>
            
            <div>
                {/* TITLE */}
                <Row>
                    <Col> 
                        <Col lg={6}>
                            <h4  style={styles.Title} >Upcoming Events</h4>
                        </Col>
                        <Col />
                        <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '83%' ,borderWidth : 5+"px" }}/>
                    </Col>
                </Row>            
                {/* ./TITLE */}
                
                {/* LATEST NEWS */}
                    {
                        events[0] &&
                        <div>
                        <Row>
                            <Col lg={11}>
                                <Image src={events[0].fimg_url} fluid style={{ marginBottom : 30+"px", marginTop : 30+"px" }} />
                        
                                <h3 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    events[0].title.rendered.length > 111 
                                    ?
                                    events[0].title.rendered.substr(1,110) + "..."
                                    :
                                    events[0].title.rendered                                
                                }
                                </h3>
                                <p style={{fontFamily : 'PopiSemiBold', fontSize : 15,color : '#0099CC'}}>{moment(events[0].date).format("DD MMMM YYYY")}</p>
                                <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
                                    {
                                        events[0].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[0].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[0].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                                <hr />
                            </Col>
                            <Col lg={1} />
                        </Row>
                        </div>
                    }
                {/* LATEST ./NEWS */}
                
                {/* LATEST 3 NEWS */}
                    <div>
                    {
                    
                    events[1] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col lg={4}>
                            <Image src={events[1].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col lg={8}>
                        <h5 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    events[1].title.rendered.length > 111 
                                    ?
                                    events[1].title.rendered.substr(1,110) + "..."
                                    :
                                    events[1].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
                                    {
                                        events[1].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[1].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[1].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 14,color : '#0099CC'}}>{moment(events[1].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

                    }

                    {
                    events[2] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col lg={4}>
                            <Image src={events[2].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col lg={8}>
                        <h5 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    events[2].title.rendered.length > 111 
                                    ?
                                    events[2].title.rendered.substr(1,110) + "..."
                                    :
                                    events[2].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
                                    {
                                        events[2].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[2].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[2].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p><p style={{fontFamily : 'PopiSemiBold', fontSize : 14,color : '#0099CC'}}>{moment(events[2].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

                    }

                    {
                    events[3] &&
                    <div style={{marginBottom : 10+"px"}}>
                    <Row>
                        <Col lg={4}>
                            <Image src={events[3].fimg_url} fluid style={{ resizeMode : 'contain' }} />
                        </Col> 

                        <Col lg={8}>
                            <h5 style={{fontFamily : 'PopiBold',fontSize : 15}}>
                                {
                                    events[3].title.rendered.length > 111 
                                    ?
                                    events[3].title.rendered.substr(1,110) + "..."
                                    :
                                    events[3].title.rendered                                
                                }
                            </h5>
                            <p style={{fontFamily : 'PopiExtraLight', fontSize : 13}}>
                                    {
                                        events[3].content.rendered.replace("<p>","").replace('</p>',"").length > 250
                                        ?
                                        events[3].content.rendered.replace("<p>","").replace('</p>',"").substr(1,250) + "..."
                                        :
                                        events[3].content.rendered.replace("<p>","").replace('</p>',"")
                                    }
                                </p>
                            <p style={{fontFamily : 'PopiSemiBold', fontSize : 14,color : '#0099CC'}}>{moment(events[3].date).format("DD MMMM YYYY")}</p>
                        </Col>   

                        {/* <Col /> */}
                    </Row>
                    </div>

                    }
                    </div>
                {/* LATEST 3 NEWS */}
                
            </div>
            
            </>
        );
    }
}

const styles = {
    Title : {
        color : '#fff',
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    }
}

const mapStateToProps = state => ({
    events : state.postsR.events,
});

export default connect(mapStateToProps,{ getLatestEvents })(Events);

