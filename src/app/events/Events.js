import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
    Button,
} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { Link } from 'react-router-dom';
  
// Components : 
    import Layout from '../../components/Layout';
    import Newsletter from '../../components/Newsletter';
    import LottieLoader from '../../components/LottieLoader';
    import ThumbDoc from '../../components/ThumbDoc';

// Redux :
    import { connect } from 'react-redux';
    import { getAllEvents } from '../../redux/actions/EventsActions';

    import moment from 'moment';
    import './events.css';

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            evenTitle : '',
            searchingEvents : [],
            selectedDate : moment(),
            loading : true,
        };

        this.props.getAllEvents();
    };

    componentDidMount() {
        setTimeout(() => {
             this.setState({loading : false})
         },2000);
    };

    render() {

        const { allEvents } = this.props;
        let { searchingEvents,loading } = this.state;

        return (
            loading 
            ?
              <LottieLoader />
            :
            <>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>LES ÉVÈNEMENTS À VENIR</h1>
                </div>

                <Layout columns={7}>
                    {this.renderSearchContainer()}
                </Layout>

                <Layout columns={6}>
                    
                    {
                        searchingEvents.length > 0
                        ?
                            this.renderEvents(searchingEvents)
                        :
                            this.renderEvents(allEvents)
                    }
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
                        {/* <input type="text" className="form-control no-border" placeholder="22-03-2020" /> */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </Grid>
                            </MuiPickersUtilsProvider>
                    </Col>
                    
                    <Col md="4">
                        <h6 style={styles.searchTitle}>RECHERCHE</h6>
                        <input type="text" className="form-control no-border-input" placeholder="Titre événement..." value={this.state.evenTitle} onChange={evenTitle => this.searchByTitle(evenTitle)}  />
                    </Col>

                    <Col />
                    
                    <Col className="align-self-center">
                        <Button className="button-search">
                            Rechercher
                        </Button>
                    </Col>
                </Row>
            </div>
            </>
        );
    };

    renderEvents = (allEvents) => {
        console.log(allEvents);
        
        return (

            allEvents.reverse().map(month => 
                month.events.length > 0 &&
                <>  
                    <div style={{marginTop : 40+"px", marginBottom : 40+"px"}} className="separator"> 
                        <h1 style={styles.eventDateTitle}> {month.monthName} {moment().format('YYYY')} </h1>
                     </div>

                     {
                         month.events.map((eventToRender,index) =>  
                            <Row key={index} style={{marginTop : 25+"px", marginBottom : 25+"px"}}>
                                <Col xl={7}>
                                    {
                                        eventToRender.image !== false 
                                        ?
                                        <Image src={eventToRender.image.url} fluid className="eventImage" />
                                        :   
                                        <ThumbDoc 
                                            title="Événement" 
                                            containerClass="thumbEventContainer"
                                            imageClass="thumbEventImage" 
                                            titleClass="thumbEventTitle" 
                                            descClass="thumbEventDesc" 
                                        />
                                    }
                                </Col>

                                <Col xl={5}>
                                    <h4 className="eventTitle">{eventToRender.title}</h4>
                                    <p className="eventDate">{moment(`${eventToRender.start_date_details.year}-${eventToRender.start_date_details.month}-${eventToRender.start_date_details.day}`).format("DD MMMM YYYY")}</p>
                                    <p className="eventLocation">{eventToRender.venue.venue}{","+eventToRender.venue.city}{","+eventToRender.venue.country}</p>
                                    {
                                        eventToRender.excerpt.length > 150
                                        ?
                                            <p className="eventDesc" dangerouslySetInnerHTML={{__html: eventToRender.excerpt.substr(0,180)+"..."}}></p>
                                        :
                                            <p className="eventDesc" dangerouslySetInnerHTML={{__html: eventToRender.description.substr(0,180)+"..."}}></p>
                                    }
                                    <Link 
                                    to={{
                                        pathname : '/solo-event',
                                        state : { 
                                            solo_title : "Événements",
                                            publication : eventToRender,
                                        }
                                    }}  
                                    style={{ textDecoration: 'none' }}
                                    className="btn btn-primary buttonBlue"
                                    >
                                        Voir Plus
                                    </Link>
                                </Col>
                            </Row> 
                        )
                     }

                </>
            )
        );
    }

    // renderEvents = (eventsYear) => {

    //     return(
        
    //     eventsYear.map(eventYear =>  
    //         eventYear.eventsPerYear.map(monthHasEvents => 
    //             monthHasEvents.events.length > 0 &&
    //             <div>
    //                 <div style={{marginTop : 40+"px", marginBottom : 40+"px"}} className="separator"> 
    //                     <h1 style={styles.eventDateTitle}> {monthHasEvents.monthName} {eventYear.id} </h1>
    //                 </div>
    //                 {
                        
    //                     monthHasEvents.events.map((eventToRender,index) =>       
                            // <Row key={index} style={{marginTop : 25+"px", marginBottom : 25+"px"}}>
                            //     <Col md={8}>
                            //         <Image src={eventToRender.fimg_url} fluid />
                            //     </Col>

                            //     <Col className="justify-elements">
                            //         <h4 style={styles.eventTitle}>{ eventToRender.title.rendered}</h4>
                            //         <p style={styles.eventDate}>{moment(eventToRender.date).format("DD MMMM YYYY")}</p>
                            //         <p style={styles.eventDesc}>
                            //             {
                            //                 eventToRender.content.rendered.length > 198 
                            //                 ?
                            //                 eventToRender.content.rendered.replace(/<[^>]*>?/gm, '').substr(1,198) + "..."
                            //                 :
                            //                 eventToRender.content.rendered.replace(/<[^>]*>?/gm, '')
                                    
                            //             }
                            //         </p>

                            //         <Button className="buttonBlue">
                            //                 Register
                            //         </Button>
                            //     </Col>
                            // </Row> 
    //                      )
    //                 }


    //             </div>
    //         )
    //     ) 
    //     );
    // }
    

    searchByTitle = (evenToSearch) => {

        const { events } = this.props;
        
        this.setState({ 
           evenTitle : evenToSearch.target.value,
        });
       
        if(evenToSearch.target.value === "") {
            this.setState({searchingEvents : [] });
        } else {

            let resultSearch = [];
            
            events.filter(event => {
                let eventLowercase = (event.title.rendered).toLowerCase();
                    let eventToSearchNow = evenToSearch.target.value.toLowerCase();
                    if(eventLowercase.indexOf(eventToSearchNow) > -1) {
                        resultSearch.push(event);
                    }
                return 0;
            });
    
            if(resultSearch.length) {
                this.setState({
                    searchingEvents : resultSearch
                });
            } else {
                this.setState({searchingEvents : [] });
            }
            
        }

        
    };

    handleDateChange = (date) => {
        console.log(date);
        console.log(moment(date).format());
    };

}

const styles = {
    searchTitle : {
        color : '#666666',
        fontFamily : 'Poppins SemiBold',
    },
    eventDateTitle : {
        fontSize : 40+"px",
        color : '#0099CC',
        marginRight : 20+"px",
        marginLeft : 20+"px",
        fontFamily : 'Poppins SemiBold',
    },
    eventTitle : {
        fontSize : 17+"px",
        fontFamily : 'Poppins SemiBold',
        
    },
    eventDate : {
        fontSize : 11+"px",
        color : '#0099CC',
        fontFamily : 'Poppins Light',
    },
    eventDesc : {
        color : 'black',
        fontSize : 11+"px",
        fontFamily : 'Poppins Light',
    }

}

const mapStateToProps = state => ({
    allEvents : state.eventsR.allEvents,
})

export default connect(mapStateToProps, { getAllEvents })(Events);