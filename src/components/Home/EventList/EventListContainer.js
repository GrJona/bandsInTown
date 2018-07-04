import { connect } from 'react-redux';
import EventList from './EventList';
import { getDisplayedArtistEvents } from '../../../reducers/events'

const mapStateToProps = state => ({
  eventsList: getDisplayedArtistEvents(state)
});

const EventListContainer = connect(
  mapStateToProps,
  null
)(EventList);

export default EventListContainer;
