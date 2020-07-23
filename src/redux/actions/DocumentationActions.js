// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
} from '../../constants/AppConfig';

import { DOCUMENTATIONS } from '../../constants/AppConfig';




export const filterDocs = (pubs,type) => async (dispatch) => {

      if(type === 0) {
        let test = [];
        test.push(pubs[0]);
        test.push(pubs[1]);

        dispatch({
            type: 'GET_PUBLICATIONS',
            payload: test,
            // pageInfos: response.headers,
        });
      } else {
        let test = [];
        test.push(pubs[3]);
        test.push(pubs[4]);

        dispatch({
            type: 'GET_PUBLICATIONS',
            payload: test,
            // pageInfos: response.headers,
        });
      }
  
};

export const getLastDocs = () => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${DOCUMENTATIONS}&page=${1}&per_page=4`)
        .then(response => {
          // console.log("Headers:", response.headers);
          // console.log("data :", response.data);
          dispatch({
              type: 'GET_PUBLICATIONS',
              payload: response.data,
              pageInfos: response.headers,
          });
        })
        .catch(error => {
          // console.log("erreur axios DocumentationActions",error);
        });
};

export const getPublications = (category,page_num) => async (dispatch) => {
  
  axios.get(`${config.url}wp/v2/posts?categories=${category}&page=${page_num}&per_page=10`)
        .then(response => {

          // console.log("Headers:", response.headers);
          // console.log("data :", response.data);
  
          dispatch({
              type: 'GET_PUBLICATIONS',
              payload: response.data,
              pageInfos: response.headers,
          });
        })
        .catch(error => {
          // console.log("erreur axios DocumentationActions",error);
        });
};