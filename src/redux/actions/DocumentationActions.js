// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
    PUBLICATIONS,
    DISCOURS,
    CORRESPONDANCE,
    AUTRES_DOCUMENTS,
} from '../../constants/AppConfig';


export const getPublications = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${PUBLICATIONS}`)
        .then(response => {
          dispatch({
              type : 'GET_PUBLICATIONS',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getPublications/DocumentationActions",error);
        });
};

export const getDiscours = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${DISCOURS}`)
        .then(response => {
          dispatch({
              type : 'GET_DISCOURS',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getDiscours/DocumentationActions",error);
        });
};

export const getCorrespondance = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${CORRESPONDANCE}`)
        .then(response => {
          dispatch({
              type : 'GET_CORRESPONDANCE',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getCorrespondance/DocumentationActions",error);
        });
};

export const getAutresDocuments = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${AUTRES_DOCUMENTS}`)
        .then(response => {
          dispatch({
              type : 'GET_AUTRES_DOCUMENTS',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios getAutresDocuments/DocumentationActions",error);
        });
};