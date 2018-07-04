import { connect } from 'react-redux';
import { getFavoriteEvents } from '../../../reducers/favorites';
import EventList from './EventList';

const mapStateToProps = state => ({
  eventsList: getFavoriteEvents(state)
});

const FavoritesContainer = connect(
  mapStateToProps,
  null
)(EventList);

export default FavoritesContainer;
