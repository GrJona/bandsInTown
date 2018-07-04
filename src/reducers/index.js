import { combineReducers } from 'redux';
import artist from './artist';
import events from './events';
import favorites from './favorites';

const bandsintownApp = combineReducers({ events, artist, favorites });

export default bandsintownApp;
