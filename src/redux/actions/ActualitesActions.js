// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config,
    WELCOME, 
    ACTUALITES_DES_PAYS_G5,
    ACTUALITE_INTERNATIONALE,
    NOS_ACTIVITES,
    UNCATEGORIZED,
    SDS,
    PIP,
} from '../../constants/AppConfig';

// Actualites FUNCTIONS //

export const getActualitesInter = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${ACTUALITE_INTERNATIONALE}`)
        .then(response => {
          dispatch({
              type : 'GET_ACTUALITES_INTERNATIONALE',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios getActualitesInter/ActualitesActions",error);
        });
};

export const getActualitesPaysG5 = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${WELCOME}`)
        .then(response => {
          // console.log(response.data);

          dispatch({
              type : 'GET_ACTUALITES_PAYS_G5',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios getActualitesPaysG5/ActualitesActions",error);
        });
};

export const getLatestEvents = () => async (dispatch) => {
  
  let currentYear = moment().format('YYYY');

    axios.get(`${config.url}tribe/events/v1/events?start_date=${currentYear}-01-01&end_date=${currentYear}-12-31`)
          .then(response => {
            // console.log("dattaaaaa", response.data)
            dispatch({
                type : 'GET_LATEST_EVENTS',
                payload : response.data.events,
            });

          })
          .catch(error => {
            // console.log("erreur axios getAllEvents/eventsActions",JSON.stringify(error));
          });
};


export const getActivities = () => async (dispatch) => {
  
    axios.get(`${config.url}wp/v2/posts?categories=${NOS_ACTIVITES}&per_page=4`)
          .then(response => {
            dispatch({
                type : 'GET_LATEST_ACTIVITIES',
                payload : response.data,
            });
          })
          .catch(error => {
            // console.log("erreur axios getActivities/PostsActions");
          });
};


export const getLatestNews = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?per_page=4&categories_exclude=${UNCATEGORIZED}+${SDS}+${PIP}`)
        .then(response => {
          dispatch({
              type : 'GET_LATEST_POSTS',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios getLatestNews/PostsActions");
        });
};

// Actualites FUNCTIONS //


