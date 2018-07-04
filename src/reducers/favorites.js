import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  if (action.type === 'ADD_EVENT_TO_FAVORITES') {
    return { ...state, [action.event.id]: { ...action.event } };
  }
  if (action.type === 'REMOVE_EVENT_FROM_FAVORITES') {
    let res = Object.assign({}, state);
    delete res[action.id];
    return res;
  }

  return state;
};

const allIds = (state = [], action) => {
  if (action.type === 'ADD_EVENT_TO_FAVORITES') {
    return [...state, action.event.id];
  }
  if (action.type === 'REMOVE_EVENT_FROM_FAVORITES') {
    let newState = state.slice();
    newState.splice(newState.indexOf(action.id), 1);
    return newState;
  }
  return state;
};

export const getFavoriteEvents = state => {
  return state.favorites.allIds.map(id => state.favorites.byId[id]);
};

export const getFavoriteEventById = (state, id) => {
  return state.favorites.byId[id];
};

const favorites = combineReducers({ byId, allIds });

export default favorites;
