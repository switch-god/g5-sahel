import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import documentationReducer from './documentationReducer';
import nosActivitesReducer from './nosActivitesReducer';
import eventsReducer from './eventsReducer';
import actualitesReducer from './actualitesReducer';

export default combineReducers({
    jobsR: jobsReducer,
    docsR: documentationReducer,
    activitesR: nosActivitesReducer,
    eventsR: eventsReducer,
    actualitesR : actualitesReducer,
});
