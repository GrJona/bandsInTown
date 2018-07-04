import React from 'react';
import Event from './Event';

const EventsList = ({ eventsList }) => {
  return (
    <div>
      {eventsList.length ? (
        <div className="events-list">{eventsList.map(ev => <Event key={ev.id} id={ev.id} name={ev.venue.name} />)}</div>
      ) : (
        <h3>No Event to Show Yet</h3>
      )}
    </div>
  );
};

export default EventsList;
