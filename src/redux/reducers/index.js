import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import documentationReducer from './documentationReducer';
import nosActivitesReducer from './nosActivitesReducer';
import eventsReducer from './eventsReducer';
import actualitesReducer from './actualitesReducer';

export default combineReducers({
    postsR: postsReducer,
    docsR: documentationReducer,
    activitesR: nosActivitesReducer,
    eventsR: eventsReducer,
    actualitesR : actualitesReducer,
});
