// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
} from '../../constants/AppConfig';


export const getAllEvents = (givenDate) => dispatch => {

  const groupByMonths = [
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

  if(givenDate) {
    let yearSearching = moment(givenDate).format('YYYY');

    // console.log("Searrchiin this year ", yearSearching);

    axios.get(`${config.url}tribe/events/v1/events?start_date=${givenDate}&end_date=${yearSearching}-12-31`)
            .then(response => {
              // console.log("Events", response.data.events);
              
              response.data.events.map((event) => {
                response.data.yearofEvent = event.start_date_details.year;
              groupByMonths.map((month) => {
                  parseInt(event.start_date_details.month) === month.id && month.events.push(event);
                });
              
              });
            
              dispatch({
                  type : 'GET_ALL_EVENTS',
                  payload : groupByMonths,
                  year : yearSearching,
              });
    
            })
            .catch(error => {
              console.log("erreur axios getAllEvents/eventsActions",JSON.stringify(error));
            });

  } else {

    let currentYear = moment().format('YYYY');

    axios.get(`${config.url}tribe/events/v1/events?start_date=${currentYear}-01-01&end_date=${currentYear}-12-31`)
          .then(response => {
            // console.log("Events", response.data.events);
            
            response.data.events.map((event) => {
              response.data.yearofEvent = event.start_date_details.year;
              
              groupByMonths.map((month) => {
                  parseInt(event.start_date_details.month) === month.id && month.events.push(event);
                });
              
              });
            
              dispatch({
                  type : 'GET_ALL_EVENTS',
                  payload : groupByMonths,
              });
  
          })
          .catch(error => {
            console.log("erreur axios getAllEvents/eventsActions",JSON.stringify(error));
          });
  }

};

