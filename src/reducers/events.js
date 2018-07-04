import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  if (action.type === 'FETCH_ARTIST_DATA_SUCCESS') {
   return action.eventsData.reduce((acc, event) => ({ ...acc, [event.id]: event }), {});
  }
  return state;
};

const allIds = (state = [], action) => {
  if (action.type === 'FETCH_ARTIST_DATA_SUCCESS') {
    return action.eventsData.map(event => event.id);
  }
  return state;
};

export const getDisplayedArtistEvents = state => {
  return state.events.allIds.map(id => state.events.byId[id]);
};

export const getEventById = (state, id) => {
  return state.events.byId[id];
}


const events = combineReducers({ byId, allIds });

export default events;
