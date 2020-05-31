// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
} from '../../constants/AppConfig';


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