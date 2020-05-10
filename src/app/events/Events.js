import React, { Component } from 'react'

import {
    Col,
    Row,
    Image,
    Button,
    Container,
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
            searching : false,
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
        let { searchingEvents,loading,searching } = this.state;
        // console.log("found",searchingEvents);
        return (
            loading 
            ?
              <LottieLoader />
            :
            <Container fluid>
                <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                    <h1 style={{fontFamily : 'Poppins SemiBold'}}>LES ÉVÈNEMENTS À VENIR</h1>
                </div>

                <Layout columns={8}>
                    {this.renderSearchContainer()}
                </Layout>

                <Layout columns={6}>
                    
                    {
                        searchingEvents.length == 0 && searching &&
                        <div className="noResultContainer">
                            <p className="noResultText">Aucun resultat pour cette recherche</p>
                        </div>
                    }

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


            </Container>
        )
    }

    renderSearchContainer = () => {

        return (
            <>
            <div>
                <Row style={{padding : 30+"px",backgroundColor : '#F6F6F6'}}>
                    
                    <Col xs={12} xl={3} className="spaceSearch">
                        <h6 style={styles.searchTitle}>ÉVÈNEMENTS À PARTIR DE</h6>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify={window.innerWidth > 1000 ? "space-around" : false} >
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
                    
                    <Col xs={12} xl={3} className="spaceSearch">
                        <h6 style={styles.searchTitle}>RECHERCHE</h6>
                        <input type="text" className="form-control-events no-border-input" placeholder="Titre événement..." value={this.state.evenTitle} onChange={evenTitle => this.searchByTitle(evenTitle)}  />
                    </Col>

                    <Col />
                    
                    <Col xs={12} xl={3} className="align-self-center spaceSearch">
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
        let { year } = this.props;
        return (

            allEvents.reverse().map((month,index) => 
                month.events.length > 0 &&
                <>  
                    <div key={index} style={{marginTop : 40+"px", marginBottom : 40+"px"}} className="separator"> 
                        <h1 style={styles.eventDateTitle}> 
                            {month.monthName + " "}
                            {
                                year != null
                                ?
                                year
                                :
                                moment().format('YYYY')
                            } 
                        </h1>
                     </div>

                    {
                         month.events.map((eventToRender,Eventindex) =>  
                            <Row key={Eventindex} style={{marginTop : 25+"px", marginBottom : 25+"px"}}>
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
                                    
                                    <p className="eventLocation"> 
                                        {eventToRender.venue.venue && eventToRender.venue.venue}
                                        {eventToRender.venue.city && ","+eventToRender.venue.city}
                                        {eventToRender.venue.country && ","+eventToRender.venue.country}</p>
                                
                                    {
                                        eventToRender.excerpt.length > 150
                                        ?
                                            <p className="eventDesc" dangerouslySetInnerHTML={{__html: eventToRender.excerpt.substr(0,180)+"..."}}></p>
                                        :
                                            <p className="eventDesc" dangerouslySetInnerHTML={{__html: eventToRender.description.substr(0,180)+"..."}}></p>
                                    }
                                    <Link 
                                        to={{
                                            pathname : `/event/${eventToRender.slug}`,
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

    searchByTitle = (evenToSearch) => {

        const { allEvents } = this.props;
        
        let allEventsBackup = allEvents;

        this.setState({ 
           evenTitle : evenToSearch.target.value,
        });
       
        if(evenToSearch.target.value === "") {
            this.setState({
                searching: false,
                searchingEvents : [],
            });
        } else {

    
                let resultByMonths = [
                    {
                    id : 1,
                    monthName : "Janvier",
                    events : [],
                    },
                    {
                    id : 2,
                    monthName : "Fevrier",
                    events : [],
                    },
                    {
                    id : 3,
                    monthName : "Mars",
                    events : [],
                    },
                    {
                    id : 4,
                    monthName : "Avril",
                    events : [],
                    },
                    {
                    id : 5,
                    monthName : "Mai",
                    events : [],
                    },
                    {
                    id : 6,
                    monthName : "Juin",
                    events : [],
                    },
                    {
                    id : 7,
                    monthName : "Juillet",
                    events : [],
                    },
                    {
                    id : 8,
                    monthName : "Aout",
                    events : [],
                    },
                    {
                    id : 9,
                    monthName : "Septembre",
                    events : [],
                    },
                    {
                    id : 10,
                    monthName : "Octobre",
                    events : [],
                    },
                    {
                    id : 11,
                    monthName : "Novembre",
                    events : [],
                    },
                    {
                    id : 12,
                    monthName : "Decembre",
                    events : [],
                    },
                ];
            
            allEvents.reverse().filter(month => {
                month.events.length > 0 &&
                month.events.map((event) => {
                    let eventLowercase = (event.title).toLowerCase();
                    let eventToSearchNow = evenToSearch.target.value.toLowerCase();
                    if(eventLowercase.indexOf(eventToSearchNow) > -1) {
                        resultByMonths.map(monthToPushOn => 
                            parseInt(event.start_date_details.month) === monthToPushOn.id && monthToPushOn.events.push(event)
                        );
                    } else {
                        resultByMonths = [];
                    }
                });
            });

            this.setState({
                searching: true,
                searchingEvents : resultByMonths,
            });
           
         
        }

        
    };

    handleDateChange = (date) => {
        // console.log(date);
        // console.log(moment(date).format('YYYY-MM-DD'));
        this.setState({selectedDate : moment(date).format() });
        
        this.props.getAllEvents(moment(date).format('YYYY-MM-DD'));
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
    year : state.eventsR.year,
})

export default connect(mapStateToProps, { getAllEvents })(Events);