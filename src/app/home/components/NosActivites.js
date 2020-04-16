import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

// REDUX :
    import {connect} from 'react-redux';
    import { getActivities } from '../../../redux/actions/PostsActions';

class NosActivites extends Component {

    constructor(props) {
        super(props);

        // Get Activities :
        this.props.getActivities();
    };



    render() {

        const { activites } = this.props;

        return (
            <>
              <h4  style={styles.Title} >Nos activités</h4>
              <hr style={{ borderColor : 'black', marginTop : -13+"px",width : '100%' ,borderWidth : 5+"px",marginBottom : 30+"px" }} />  

              <Row>
                {
                    activites.map((activity,index) => 
                        index < 4 &&
                        <Col>
                            <Image src={activity.fimg_url} fluid />
                            <p style={styles.activityTitle}>{activity.title.rendered}</p>
                            <p style={styles.activityDesc}>{activity.content.rendered.replace(/<[^>]*>?/gm, '')}</p>
                        </Col>
                    )        
                }    
              </Row>  

            </>
        )
    }
}

const styles = {
    Title : {
        width : '20%',
        color : '#fff',
        fontFamily : 'PopiBold',
        backgroundColor : 'black',
        paddingTop : 20+"px",
        paddingBottom: 20+"px", 
        borderWidth : 10+"px",
        textAlign : 'center',
    },
    activityTitle : {
        color : '#0099CC',
        fontSize : 17,
        fontFamily : 'PopiBold',
        marginTop : 10+"px",
    },
    activityDesc : {
        color : 'black',
        fontSize : 13,
        fontFamily : 'PopiSemiBold',
    },
}

const mapStateToProps = state => ({
    activites : state.postsR.activites,
});

export default connect(mapStateToProps,{ getActivities })(NosActivites);
