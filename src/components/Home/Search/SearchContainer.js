import { connect } from 'react-redux';
import Search from './Search';
import { fetchArtistData } from '../../../actions'

const mapStateToProps = state => ({
  thumb_url: state.artist.thumb_url,
  name: state.artist.name
});

const mapDispatchToProps = dispatch => ({
  handleSearch: artist => {
    return dispatch(fetchArtistData(artist));
  }
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
