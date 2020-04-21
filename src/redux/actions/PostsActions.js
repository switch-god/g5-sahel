// Fetching APi's :
import axios from 'axios';

// Global Config :
   import { config, HOME_BLOC1_IMGS,POSTS,EVENTS,ACTIVITES } from '../../constants/AppConfig';


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
  
  axios.get(`${config.url}wp/v2/posts?categories=${POSTS}`)
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

  axios.get(`${config.url}wp/v2/posts?categories=${EVENTS}`)
        .then(response => {
          dispatch({
              type : 'GET_LATEST_EVENTS',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getLatestNews/PostsActions");
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
          console.log("erreur axios getLatestNews/PostsActions");
        });
};

export const getJobs = () => dispatch => {
  
  axios.get(`${config.url}wp/v2/job-listings`)
        .then(response => {
          dispatch({
              type : 'GET_JOBS',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getLatestNews/PostsActions");
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