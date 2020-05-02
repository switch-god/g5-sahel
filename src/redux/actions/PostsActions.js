// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
    HOME_BLOC1_IMGS,POSTS,EVENTS,ACTIVITES,  
    PRESENTATION,
    DEFENSE_SECURITE,
    GOUVERNANCE,
    INFRASTRUCTURE,
    RESILENCE,
} from '../../constants/AppConfig';



//**************************//
// HOME PAGE FUNCTIONS //

export const getImagesBloc = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?per_page=3&&categories=${HOME_BLOC1_IMGS}`)
        .then(response => {
         
          dispatch({
              type : 'GET_HOME_BLOC_IMAGES',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios HOME PAGE ACTIONS / GET IMAGES BLOC");
        });
  

};

export const getLatestNews = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?per_page=4`)
        .then(response => {
          dispatch({
              type : 'GET_LATEST_POSTS',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getLatestNews/PostsActions");
        });
};

export const getLatestEvents = () => dispatch => {

const groupPerYears = [
        {
          id : 2025,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2024,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2023,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2022,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2021,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2020,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2019,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2018,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2017,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2016,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2015,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2014,
          eventsPerYear : [
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
          ],
        },
        {
          id : 2013,
          eventsPerYear : [
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
          ],
        },
   ];

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

  axios.get(`${config.url}wp/v2/posts?categories=${EVENTS}`)
        .then(response => {
          
          
          groupPerYears.map(year => {
              response.data.map((event) => {
                year.id == parseInt(moment(event.date).format("YYYY"))
                && 
                year.eventsPerYear.map(month => {

                  month.id == parseInt(moment(event.date).format("MM")) && year.eventsPerYear[month.id - 1].events.push(event);
                });
              });
          });
         
          // groupByMonths.map(month => {
          //   response.data.map((event) => {
          //     console.log("YEAAAR",parseInt(moment(event.date).format("YYYY")));

          //       month.id == parseInt(moment(event.date).format("MM")) && groupByMonths[month.id - 1].events.push(event);
          //   });
          // });
         
          dispatch({
              type : 'GET_LATEST_EVENTS',
              payload1 : groupPerYears,
              payload2 : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getLatestNews/PostsActions",JSON.stringify(error));
        });
};

export const getActivities = () => dispatch => {

  axios.get(`${config.url}wp/v2/posts?categories=${ACTIVITES}`)
        .then(response => {
          dispatch({
              type : 'GET_ACTIVITES',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios getLatestNews/PostsActions");
        });
};

// HOME PAGE FUNCTIONS //
//**************************//

export const getJobs = () => dispatch => {
  
  axios.get(`${config.url}wp/v2/job-listings`)
        .then(response => {
          dispatch({
              type : 'GET_JOBS',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios getLatestNews/PostsActions");
        });


};

export const toogleSearch = (value) => dispatch => {

  if (value == 1) {

    dispatch ({
      type : 'TOOGLE_SEARCH',
      payload : true,
    });

  } else {

    dispatch ({
      type : 'UNTOOGLE_SEARCH',
      payload : false,
    });
  };

};

export const setLoading = (value) => dispatch => {
    dispatch ({
      type : 'SET_LOADING',
      payload : value,
    });
}

//**************************//
// PRESENTATION FUNCTIONS //
export const getPresentation = () => dispatch => {
    getPresentationBloc1();

}

export const getPresentationBloc1 = () => dispatch => {
  axios.get(`${config.url}wp/v2/posts?categories=${PRESENTATION}`)
  .then(response => {
      dispatch({
          type : 'GET_PRESENTATION_BLOC_1',
          payload : response.data,
      });
  })
  .catch(error => {
    console.log("erreur axios getPresentation/PostsActions");
  });
}




//**************************//


//**************************//
// NOS ACTIVITES FUNCTIONS //

export const getDefenseSecurite = () => dispatch => {
      
      axios.get(`${config.url}wp/v2/posts?categories=${DEFENSE_SECURITE}`)
      .then(response => {
        dispatch({
            type : 'GET_DEFENSE_SECURITE',
            payload : response.data,
        });
      })
      .catch(error => {
        console.log("erreur axios getDefenseSecurite/PostsActions");
      });

};

export const getGouvernance = () => dispatch => {
      
      axios.get(`${config.url}wp/v2/posts?categories=${GOUVERNANCE}`)
      .then(response => {
        dispatch({
            type : 'GET_GOUVERNANCE',
            payload : response.data,
        });
      })
      .catch(error => {
        console.log("erreur axios getGouvernance/PostsActions");
      });

};

export const getInfrastructure = () => dispatch => {
      
      axios.get(`${config.url}wp/v2/posts?categories=${INFRASTRUCTURE}`)
      .then(response => {
        dispatch({
            type : 'GET_INFRASTRUCTURE',
            payload : response.data,
        });
      })
      .catch(error => {
        console.log("erreur axios getInfrastructure/PostsActions");
      });

};

export const getResilence = () => dispatch => {
      
      axios.get(`${config.url}wp/v2/posts?categories=${RESILENCE}`)
      .then(response => {
        dispatch({
            type : 'GET_RESILENCE',
            payload : response.data,
        });
      })
      .catch(error => {
        console.log("erreur axios getResilence/PostsActions");
      });

};



// NOS ACTIVITES FUNCTIONS //
//**************************//



//**************************//
// EVENTS FUNCTIONS //




// EVENTS FUNCTIONS //
//**************************//