// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
    PUBLICATIONS
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