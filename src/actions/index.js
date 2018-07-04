import axios from 'axios';

const baseUrl = 'https://rest.bandsintown.com';
const app_id = 'your_app_id';

export const addEventToFavorites = event => ({
  type: 'ADD_EVENT_TO_FAVORITES',
  event
});

export const removeEventFromFavorites = id => ({
  type: 'REMOVE_EVENT_FROM_FAVORITES',
  id
});

export const fetchArtistDataSuccess = (artistData, eventsData) => ({
  type: 'FETCH_ARTIST_DATA_SUCCESS',
  artistData,
  eventsData
});

export const fetchArtistData = artist => {
  return dispatch => {
    axios
      .all([getArtistMetaData(artist), getArtistEvents(artist)])
      .then(axios.spread((artistRes, eventsRes) => dispatch(fetchArtistDataSuccess(artistRes.data, eventsRes.data))))
      .catch(() => {
        console.log('fetchArtistData err');
      });
  };
};

function getArtistMetaData(artist) {
  return axios.get(`${baseUrl}/artists/${artist}`, {
    params: {
      app_id
    }
  });
}

function getArtistEvents(artist) {
  return axios.get(`${baseUrl}/artists/${artist}/events`, {
    params: {
      app_id
    }
  });
}


