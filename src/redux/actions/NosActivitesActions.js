// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
    NOS_ACTIVITES,
        DEFENSE_SECURITE,
        GOUVERNANCE,
            GENRE,
            CELLULE_ANTI_REDICALISATION_EXTREMISME_VIOLANT,
        INFRASTRUCTURE,
        RESILENCE,
} from '../../constants/AppConfig';


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
        // console.log("erreur axios getDefenseSecurite/PostsActions");
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
        // console.log("erreur axios getGouvernance/PostsActions");
      });

};

export const getGenre = () => dispatch => {
      
      axios.get(`${config.url}wp/v2/posts?categories=${GENRE}`)
      .then(response => {
        dispatch({
            type : 'GET_GENRE',
            payload : response.data,
        });
      })
      .catch(error => {
        console.log("erreur axios getGenre/ActivityActions");
      });

};

export const getCellule = () => dispatch => {
      
      axios.get(`${config.url}wp/v2/posts?categories=${CELLULE_ANTI_REDICALISATION_EXTREMISME_VIOLANT}`)
      .then(response => {
        dispatch({
            type : 'GET_CELLULE',
            payload : response.data,
        });
      })
      .catch(error => {
        console.log("erreur axios getCellule/ActivityActions");
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
