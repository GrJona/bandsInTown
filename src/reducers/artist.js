const artist = (state = {}, action) => {
  if (action.type === 'FETCH_ARTIST_DATA_SUCCESS') {
    return { ...action.artistData };
  }
  return state;
};

export default artist;
