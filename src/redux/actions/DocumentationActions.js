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
  
          dispatch({
              type : 'GET_PUBLICATIONS',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios DocumentationActions",error);
        });
};

// export const getDiscours = () => async (dispatch) => {
  
//   axios.get(`${config.url}wp/v2/posts?categories=${DISCOURS}`)
//         .then(response => {
//           dispatch({
//               type : 'GET_DISCOURS',
//               payload : response.data,
//           });
//         })
//         .catch(error => {
//           console.log("erreur axios getDiscours/DocumentationActions",error);
//         });
// };

// export const getCorrespondance = () => async (dispatch) => {
  
//   axios.get(`${config.url}wp/v2/posts?categories=${CORRESPONDANCE}`)
//         .then(response => {
//           dispatch({
//               type : 'GET_CORRESPONDANCE',
//               payload : response.data,
//           });
//         })
//         .catch(error => {
//           console.log("erreur axios getCorrespondance/DocumentationActions",error);
//         });
// };

// export const getAutresDocuments = () => async (dispatch) => {
  
//   axios.get(`${config.url}wp/v2/posts?categories=${AUTRES_DOCUMENTS}`)
//         .then(response => {
//           dispatch({
//               type : 'GET_AUTRES_DOCUMENTS',
//               payload : response.data,
//           });
//         })
//         .catch(error => {
//           console.log("erreur axios getAutresDocuments/DocumentationActions",error);
//         });
// };

// export const getReglementations = () => async (dispatch) => {
  
//   axios.get(`${config.url}wp/v2/posts?categories=${REGLEMENTATIONS}`)
//         .then(response => {
//           dispatch({
//               type : 'GET_REGLEMENTATIONS',
//               payload : response.data,
//           });
//         })
//         .catch(error => {
//           console.log("erreur axios getReglementations/DocumentationActions",error);
//         });
// };

// export const getMultimedias = () => async (dispatch) => {
  
//   axios.get(`${config.url}wp/v2/posts?categories=${MULTIMEDIAS}`)
//         .then(response => {
//           dispatch({
//               type : 'GET_MULTIMEDIAS',
//               payload : response.data,
//           });
//         })
//         .catch(error => {
//           console.log("erreur axios getMultimedias/DocumentationActions",error);
//         });
// };