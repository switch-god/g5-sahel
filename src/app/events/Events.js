import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
    Button,
} from 'react-bootstrap';

// Components : 
    import Layout from '../Layout';
    import Newsletter from '../home/components/Newsletter';

// Redux :
    import { connect } from 'react-redux';
    import { getLatestEvents } from '../../redux/actions/PostsActions';

    import moment from 'moment';
    import './events.css';

class Events extends Component {

    constructor(props) {
        super(props);

        this.props.getLatestEvents();
    }   

    render() {
        return (
            <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1>LES ÉVÈNEMENTS À VENIR</h1>
                </div>

                <Layout columns={7}>
                    {this.renderSearchContainer()}
                </Layout>

                <Layout columns={6}>
                    {this.renderEvents()}
                </Layout>

                <Layout>
                    <Newsletter />
                </Layout>


            </>
        )
    }

    renderSearchContainer = () => {

        return (
            <>
            <div>
                <Row style={{padding : 30+"px",backgroundColor : '#F6F6F6'}}>
                    
                    <Col md="4">
                        <h6 style={styles.searchTitle}>ÉVÈNEMENTS À PARTIR DE</h6>
                        <input type="text" className="form-control no-border" placeholder="22-03-2020" />
                    </Col>
                    
                    <Col md="4">
                        <h6 style={styles.searchTitle}>RECHERCHE</h6>
                        <input type="text" class="form-control no-border" placeholder="Mot Clé" />
                    </Col>

                    <Col />
                    
                    <Col className="align-self-center">
                        <Button className="button">
                            Rechercher
                        </Button>
                    </Col>
                </Row>
            </div>
            </>
        );
    };

    renderEvents = () => {
        const { events } = this.props;
        return (
            <>
                <div style={{marginTop : 40+"px", marginBottom : 40+"px"}} class="separator"> <h1 style={styles.eventDateTitle}> AVRIL 2020 </h1> </div>
                
                <div style={{marginTop : 20+"px", marginBottom : 20+"px"}} >
                        {
                            events.map(event => 
                                <>
                                <Row style={{marginTop : 25+"px", marginBottom : 25+"px"}}>
                                    <Col md={8}>
                                        <Image src={event.fimg_url} fluid />
                                    </Col>

                                    <Col className="justify-elements">
                                        <h4 style={styles.eventTitle}>{event.title.rendered}</h4>
                                        <p style={styles.eventDate}>{moment(event.date).format("DD MMMM YYYY")}</p>
                                        <p style={styles.eventDesc}>
                                            {
                                                event.content.rendered.length > 198 
                                                ?
                                                event.content.rendered.replace(/<[^>]*>?/gm, '').substr(1,198) + "..."
                                                :
                                                event.content.rendered.replace(/<[^>]*>?/gm, '')
                                            
                                            }
                                        </p>

                                        <Button className="buttonBlue">
                                            Register
                                        </Button>
                                    </Col>
                                </Row>
                                </>
                            )
                        }
                </div>
            </>
        );
    }

}

const styles = {
    searchTitle : {
        color : '#666666',
        
    },
    eventDateTitle : {
        fontSize : 40+"px",
        color : '#0099CC',
        marginRight : 20+"px",
        marginLeft : 20+"px"
    },
    eventTitle : {
        fontSize : 17+"px",
    },
    eventDate : {
        fontSize : 11+"px",
        color : '#0099CC',
    },
    eventDesc : {
        color : 'black',
        fontSize : 11+"px",
    }

}

const mapStateToProps = state => ({
    events : state.postsR.events,
})

export default connect(mapStateToProps, { getLatestEvents })(Events);