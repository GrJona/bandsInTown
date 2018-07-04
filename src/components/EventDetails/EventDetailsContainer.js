import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import { addEventToFavorites, removeEventFromFavorites } from '../../actions';
import { getEventById } from '../../reducers/events';
import { getFavoriteEventById } from '../../reducers/favorites';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  return {
    isFavorite: !!getFavoriteEventById(state, eventId),
    event: getEventById(state, eventId) || getFavoriteEventById(state, eventId)
  };
};

const mapDispatchToProps = dispatch => ({
  handleAddToFavorites: event => {
    return dispatch(addEventToFavorites(event));
  },
  handleRemoveFromFavorites: id => {
    return dispatch(removeEventFromFavorites(id));
  }
});

const EventDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
