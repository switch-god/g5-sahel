// Fetching APi's :
import axios from 'axios';

// Global Config :
   import { config, HOME_BLOC1_IMGS,POSTS,EVENTS } from '../../constants/AppConfig';


export const getImagesBloc = () => async (dispatch) => {
  
  axios.get(`${config.url}posts?per_page=3&&categories=${HOME_BLOC1_IMGS}`)
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
  
  axios.get(`${config.url}posts?categories=${POSTS}`)
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

  axios.get(`${config.url}posts?categories=${EVENTS}`)
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
